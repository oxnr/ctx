"""Eval contract: EvalResult dataclass and EvalSuite runner."""

from dataclasses import dataclass


@dataclass
class EvalResult:
    name: str
    score: float  # 0.0–1.0
    passed: bool  # score >= min_threshold
    detail: str  # human-readable explanation
    is_guard: bool  # True = guard gate, False = metric gate


class EvalSuite:
    """Runs a list of eval configs against an artifact.

    Guard evals run first (cheap, programmatic). If any guard fails,
    metric evals (expensive, may call LLM) are skipped entirely.
    """

    def __init__(self, eval_configs: list[dict], done_threshold: float = 0.70):
        self.eval_configs = eval_configs
        self.done_threshold = done_threshold

    def run(
        self,
        artifact: str,
        prior_best: str | None,
        context: dict,
    ) -> tuple[float, list[EvalResult]]:
        from evals.programmatic import PROGRAMMATIC_EVALS
        from evals.llm_judge import LLM_JUDGE_EVALS

        results: list[EvalResult] = []
        guard_failed = False

        # Phase 1: run guard evals (fast, programmatic)
        for cfg in self.eval_configs:
            if not cfg.get("is_guard", False):
                continue
            fn = PROGRAMMATIC_EVALS.get(cfg["function"])
            if fn is None:
                continue
            eval_ctx = {**context, "prior_best": prior_best, **cfg.get("config", {})}
            result = fn(artifact, eval_ctx)
            results.append(result)
            if not result.passed:
                guard_failed = True

        if guard_failed:
            return 0.0, results

        # Phase 2: run metric evals (may include LLM judge)
        total_weight = 0.0
        weighted_sum = 0.0
        for cfg in self.eval_configs:
            if cfg.get("is_guard", False):
                continue
            weight = cfg.get("weight", 1.0)
            fn_name = cfg["function"]

            # Try programmatic first, then LLM judge
            fn = PROGRAMMATIC_EVALS.get(fn_name) or LLM_JUDGE_EVALS.get(fn_name)
            if fn is None:
                continue

            eval_ctx = {**context, "prior_best": prior_best, **cfg.get("config", {})}
            result = fn(artifact, eval_ctx)
            results.append(result)

            weighted_sum += result.score * weight
            total_weight += weight

        final_score = weighted_sum / total_weight if total_weight > 0 else 0.0
        return final_score, results
