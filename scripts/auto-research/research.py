"""Auto-research state machine. Generate → Evaluate → Decide loop on local Ollama."""

import argparse
import json
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import yaml

import inference
import lessons
from bootstrap import bootstrap, classify_task
from evals.base import EvalSuite

EXPERIMENTS_DIR = Path(__file__).parent / "experiments"
DEFAULT_GENERATOR = "qwen3:8b"
DEFAULT_JUDGE = "qwen3:1.7b"


# --- State persistence ---


def _new_session_id(question: str) -> str:
    ts = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
    slug = "".join(c if c.isalnum() else "-" for c in question[:40]).strip("-").lower()
    return f"{ts}-{slug}"


def _load_state(session_dir: Path) -> dict:
    state_file = session_dir / "state.json"
    if state_file.exists():
        return json.loads(state_file.read_text())
    return {
        "state": "INIT",
        "attempt": 0,
        "best_score": 0.0,
        "failures_since_keep": 0,
        "pivots": 0,
        "pivot_hypothesis": 0,
    }


def _save_state(session_dir: Path, state: dict) -> None:
    (session_dir / "state.json").write_text(json.dumps(state, indent=2))


def _append_ledger(session_dir: Path, entry: dict) -> None:
    with open(session_dir / "ledger.jsonl", "a") as f:
        f.write(json.dumps(entry) + "\n")


# --- Generation ---


def _build_prompt(
    prompt_config: dict,
    eval_feedback: str,
    lessons_ctx: str,
    context_md: str,
    pivot_hint: str,
) -> str:
    parts = []
    if lessons_ctx:
        parts.append(lessons_ctx)
    if context_md:
        parts.append(f"## Background Context\n{context_md[:2000]}")
    parts.append(f"## Task\n{prompt_config['task']}")
    if eval_feedback:
        parts.append(f"## Feedback from prior attempt\n{eval_feedback}\nImprove on these specific issues.")
    if pivot_hint:
        parts.append(f"## Strategy change\n{pivot_hint}\nTake a fundamentally different approach.")
    return "\n\n".join(parts)


def _generate(model: str, system: str, prompt: str) -> str:
    return inference.generate(model=model, prompt=prompt, system=system, temperature=0.7)


# --- Evaluation ---


def _evaluate(
    artifact: str,
    prior_best: str | None,
    eval_suite: EvalSuite,
    judge_model: str,
) -> tuple[float, list]:
    context = {"judge_model": judge_model}
    return eval_suite.run(artifact, prior_best, context)


# --- Decision logic ---


def _decide(
    score: float,
    results: list,
    state: dict,
    budget: int,
    max_pivots: int,
    threshold: float,
    done_threshold: float,
) -> tuple[str, str]:
    """Returns (next_action, reason). Actions: KEEP, REFINE, PIVOT, BLOCKED, DONE, BUDGET."""
    guard_failed = any(r.is_guard and not r.passed for r in results)

    if guard_failed:
        failed_guards = [r for r in results if r.is_guard and not r.passed]
        feedback = "; ".join(f"{r.name}: {r.detail}" for r in failed_guards)
        state["failures_since_keep"] += 1

        if state["failures_since_keep"] >= 5:
            state["pivots"] += 1
            state["failures_since_keep"] = 0
            if state["pivots"] >= max_pivots:
                return "BLOCKED", f"Guard failures after {max_pivots} pivots: {feedback}"
            return "PIVOT", f"Persistent guard failures: {feedback}"

        return "REFINE", f"Guard failed: {feedback}"

    improved = score > state["best_score"] + threshold

    if score >= done_threshold:
        return "DONE", f"Score {score:.3f} >= threshold {done_threshold}"

    if state["attempt"] >= budget:
        return "BUDGET", f"Budget exhausted ({budget} attempts), best score: {state['best_score']:.3f}"

    if improved:
        return "KEEP", f"Score improved {state['best_score']:.3f} → {score:.3f}"

    state["failures_since_keep"] += 1
    metric_feedback = "; ".join(f"{r.name}: {r.score:.2f} — {r.detail}" for r in results if not r.is_guard)

    if state["failures_since_keep"] >= 3:
        state["pivots"] += 1
        state["failures_since_keep"] = 0
        if state["pivots"] >= max_pivots:
            return "BLOCKED", f"No improvement after {max_pivots} pivots: {metric_feedback}"
        return "PIVOT", f"Stuck after 3 attempts: {metric_feedback}"

    return "REFINE", f"No improvement: {metric_feedback}"


# --- Main loop ---


def run(
    question: str,
    task_type: str | None = None,
    budget: int = 50,
    max_pivots: int = 3,
    threshold: float = 0.02,
    generator_model: str = DEFAULT_GENERATOR,
    judge_model: str = DEFAULT_JUDGE,
    session_id: str | None = None,
) -> int:
    """Run the auto-research loop. Returns exit code: 0=DONE, 1=BLOCKED, 2=BUDGET."""
    if task_type is None:
        task_type = classify_task(question)

    sid = session_id or _new_session_id(question)
    session_dir = EXPERIMENTS_DIR / sid
    session_dir.mkdir(parents=True, exist_ok=True)
    (session_dir / "artifacts").mkdir(exist_ok=True)
    (session_dir / "input.txt").write_text(question)

    print(f"Session: {sid}")
    print(f"Task type: {task_type}")
    print(f"Budget: {budget} attempts")

    # Bootstrap eval if not already done
    eval_path = session_dir / "eval.yaml"
    prompt_path = session_dir / "prompt.yaml"
    if not eval_path.exists():
        print("Bootstrapping eval criteria...")
        bootstrap(question, session_dir, task_type, generator_model)
        print(f"  eval.yaml written to {eval_path}")

    eval_config = yaml.safe_load(eval_path.read_text())
    prompt_config = yaml.safe_load(prompt_path.read_text())
    eval_suite = EvalSuite(eval_config["eval_functions"], eval_config.get("done_threshold", 0.70))

    # Load state (supports resume)
    state = _load_state(session_dir)

    # Load prior best
    best_path = session_dir / "best.md"
    prior_best = best_path.read_text() if best_path.exists() else None

    # Load context
    context_path = session_dir / "context.md"
    context_md = context_path.read_text() if context_path.exists() else ""

    # Load lessons
    topic = question[:60]
    lessons_ctx = lessons.load_relevant(task_type, topic)

    eval_feedback = ""
    pivot_hint = ""
    pivot_count_at_start = state["pivots"]

    if not inference.is_available():
        print("ERROR: Ollama not running. Start with: ollama serve")
        return 1

    print(f"Starting from attempt {state['attempt'] + 1}, best score: {state['best_score']:.3f}\n")

    while state["attempt"] < budget:
        state["attempt"] += 1
        attempt_num = state["attempt"]

        # Generate
        prompt = _build_prompt(prompt_config, eval_feedback, lessons_ctx, context_md, pivot_hint)
        print(f"[{attempt_num}/{budget}] Generating...", end=" ", flush=True)
        t0 = time.time()
        artifact = _generate(generator_model, prompt_config.get("system", ""), prompt)
        gen_time = time.time() - t0

        # Save artifact
        artifact_path = session_dir / "artifacts" / f"attempt_{attempt_num:03d}.md"
        artifact_path.write_text(artifact)

        # Evaluate
        print(f"({gen_time:.1f}s) Evaluating...", end=" ", flush=True)
        t0 = time.time()
        score, results = _evaluate(artifact, prior_best, eval_suite, judge_model)
        eval_time = time.time() - t0

        # Decide
        action, reason = _decide(
            score, results, state, budget, max_pivots, threshold,
            eval_config.get("done_threshold", 0.70),
        )

        # Log
        print(f"({eval_time:.1f}s) score={score:.3f} → {action}")
        print(f"  {reason}")

        _append_ledger(session_dir, {
            "attempt": attempt_num,
            "score": round(score, 4),
            "action": action,
            "reason": reason,
            "evals": [{"name": r.name, "score": round(r.score, 3), "passed": r.passed, "detail": r.detail} for r in results],
            "gen_time": round(gen_time, 1),
            "eval_time": round(eval_time, 1),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        })

        eval_feedback = ""
        pivot_hint = ""

        if action == "KEEP":
            state["best_score"] = score
            state["failures_since_keep"] = 0
            prior_best = artifact
            best_path.write_text(artifact)
            # Record lesson
            lessons.record(sid, task_type, topic, [
                {"type": "keep", "text": f"Approach in attempt {attempt_num} improved score to {score:.3f}"},
            ])

        elif action == "REFINE":
            eval_feedback = reason

        elif action == "PIVOT":
            pivot_hint = f"Prior approaches failed. Try a fundamentally different strategy. Reason: {reason}"
            lessons.record(sid, task_type, topic, [
                {"type": "avoid", "text": f"Strategy through attempt {attempt_num} stalled: {reason}"},
            ])

        elif action == "DONE":
            best_path.write_text(artifact)
            state["best_score"] = score
            state["state"] = "DONE"
            _save_state(session_dir, state)
            print(f"\nDONE — score {score:.3f}, {attempt_num} attempts")
            print(f"Best artifact: {best_path}")
            lessons.record(sid, task_type, topic, [
                {"type": "keep", "text": f"Converged in {attempt_num} attempts to score {score:.3f}"},
            ])
            return 0

        elif action == "BLOCKED":
            state["state"] = "BLOCKED"
            _save_state(session_dir, state)
            (session_dir / "blocked.json").write_text(json.dumps({
                "reason": reason,
                "attempts": attempt_num,
                "pivots": state["pivots"],
                "best_score": state["best_score"],
            }, indent=2))
            print(f"\nBLOCKED — {reason}")
            print(f"Best artifact: {best_path}")
            return 1

        elif action == "BUDGET":
            state["state"] = "BUDGET"
            _save_state(session_dir, state)
            print(f"\nBudget exhausted — best score {state['best_score']:.3f}")
            print(f"Best artifact: {best_path}")
            return 2

        _save_state(session_dir, state)

    return 2


def status(session_id: str) -> None:
    """Print session status."""
    session_dir = EXPERIMENTS_DIR / session_id
    if not session_dir.exists():
        print(f"Session not found: {session_id}")
        return

    state = _load_state(session_dir)
    question = (session_dir / "input.txt").read_text() if (session_dir / "input.txt").exists() else "?"

    print(f"Session: {session_id}")
    print(f"Question: {question[:80]}")
    print(f"State: {state['state']}")
    print(f"Attempts: {state['attempt']}")
    print(f"Best score: {state['best_score']:.3f}")
    print(f"Pivots: {state['pivots']}")

    best_path = session_dir / "best.md"
    if best_path.exists():
        print(f"\nBest artifact preview:")
        print(best_path.read_text()[:500])


# --- CLI ---


def main():
    parser = argparse.ArgumentParser(description="Auto-research: generate → evaluate → iterate")
    sub = parser.add_subparsers(dest="command")

    run_p = sub.add_parser("run", help="Start a new research session")
    run_p.add_argument("question", help="The research question or problem")
    run_p.add_argument("--budget", type=int, default=50, help="Max attempts (default: 50)")
    run_p.add_argument("--pivots", type=int, default=3, help="Max pivots before BLOCKED (default: 3)")
    run_p.add_argument("--threshold", type=float, default=0.02, help="Min improvement to KEEP (default: 0.02)")
    run_p.add_argument("--type", choices=["research", "code", "analysis", "creative"], help="Override task type")
    run_p.add_argument("--generator", default=DEFAULT_GENERATOR, help=f"Generator model (default: {DEFAULT_GENERATOR})")
    run_p.add_argument("--judge", default=DEFAULT_JUDGE, help=f"Judge model (default: {DEFAULT_JUDGE})")
    run_p.add_argument("--session", help="Custom session ID")

    resume_p = sub.add_parser("resume", help="Resume a session")
    resume_p.add_argument("session_id", help="Session ID to resume")
    resume_p.add_argument("--budget", type=int, default=50)
    resume_p.add_argument("--generator", default=DEFAULT_GENERATOR)
    resume_p.add_argument("--judge", default=DEFAULT_JUDGE)

    status_p = sub.add_parser("status", help="Check session status")
    status_p.add_argument("session_id", help="Session ID to check")

    args = parser.parse_args()

    if args.command == "run":
        code = run(
            question=args.question,
            task_type=args.type,
            budget=args.budget,
            max_pivots=args.pivots,
            threshold=args.threshold,
            generator_model=args.generator,
            judge_model=args.judge,
            session_id=args.session,
        )
        sys.exit(code)

    elif args.command == "resume":
        session_dir = EXPERIMENTS_DIR / args.session_id
        if not session_dir.exists():
            print(f"Session not found: {args.session_id}")
            sys.exit(1)
        question = (session_dir / "input.txt").read_text()
        eval_config = yaml.safe_load((session_dir / "eval.yaml").read_text())
        code = run(
            question=question,
            task_type=eval_config.get("task_type"),
            budget=args.budget,
            generator_model=args.generator,
            judge_model=args.judge,
            session_id=args.session_id,
        )
        sys.exit(code)

    elif args.command == "status":
        status(args.session_id)

    else:
        parser.print_help()


if __name__ == "__main__":
    main()
