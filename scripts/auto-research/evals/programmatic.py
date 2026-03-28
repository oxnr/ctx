"""Programmatic eval primitives — fast, deterministic, no LLM calls."""

import re
import subprocess
import tempfile
from pathlib import Path

from evals.base import EvalResult


def keyword_presence(artifact: str, config: dict) -> EvalResult:
    """Check required keywords present, forbidden keywords absent."""
    required = config.get("required_keywords", [])
    forbidden = config.get("forbidden_keywords", [])
    lower = artifact.lower()

    missing = [k for k in required if k.lower() not in lower]
    found_forbidden = [k for k in forbidden if k.lower() in lower]

    passed = len(missing) == 0 and len(found_forbidden) == 0
    detail_parts = []
    if missing:
        detail_parts.append(f"Missing: {', '.join(missing)}")
    if found_forbidden:
        detail_parts.append(f"Forbidden found: {', '.join(found_forbidden)}")
    if not detail_parts:
        detail_parts.append("All keywords OK")

    score = 1.0 if passed else 0.0
    return EvalResult(
        name="keyword_presence",
        score=score,
        passed=passed,
        detail="; ".join(detail_parts),
        is_guard=True,
    )


def structure_check(artifact: str, config: dict) -> EvalResult:
    """Check required sections/headings exist."""
    required_sections = config.get("required_sections", [])
    if not required_sections:
        return EvalResult("structure_check", 1.0, True, "No sections required", True)

    found = []
    missing = []
    for section in required_sections:
        if section in artifact:
            found.append(section)
        else:
            missing.append(section)

    score = len(found) / len(required_sections)
    passed = len(missing) == 0
    detail = f"{len(found)}/{len(required_sections)} sections"
    if missing:
        detail += f" — missing: {', '.join(missing)}"
    return EvalResult("structure_check", score, passed, detail, True)


def length_bounds(artifact: str, config: dict) -> EvalResult:
    """Check min/max character count."""
    min_chars = config.get("min_chars", 0)
    max_chars = config.get("max_chars", float("inf"))
    length = len(artifact)

    passed = min_chars <= length <= max_chars
    detail = f"{length} chars"
    if length < min_chars:
        detail += f" (need >= {min_chars})"
    elif length > max_chars:
        detail += f" (need <= {max_chars})"
    return EvalResult("length_bounds", 1.0 if passed else 0.0, passed, detail, True)


def regex_rules(artifact: str, config: dict) -> EvalResult:
    """Check must-match and must-not-match patterns."""
    must_match = config.get("must_match", [])
    must_not_match = config.get("must_not_match", [])

    failures = []
    for pattern in must_match:
        if not re.search(pattern, artifact):
            failures.append(f"Missing pattern: {pattern}")
    for pattern in must_not_match:
        if re.search(pattern, artifact):
            failures.append(f"Forbidden pattern: {pattern}")

    passed = len(failures) == 0
    detail = "All regex rules OK" if passed else "; ".join(failures)
    return EvalResult("regex_rules", 1.0 if passed else 0.0, passed, detail, True)


def diff_from_prior(artifact: str, config: dict) -> EvalResult:
    """Reject near-duplicates of prior best (anti-stagnation)."""
    prior_best = config.get("prior_best")
    max_similarity = config.get("max_similarity", 0.95)

    if not prior_best:
        return EvalResult("diff_from_prior", 1.0, True, "No prior to compare", True)

    # Jaccard similarity on word sets
    words_new = set(artifact.lower().split())
    words_old = set(prior_best.lower().split())

    if not words_new and not words_old:
        return EvalResult("diff_from_prior", 0.0, False, "Both empty", True)

    intersection = words_new & words_old
    union = words_new | words_old
    similarity = len(intersection) / len(union) if union else 1.0

    passed = similarity < max_similarity
    detail = f"Jaccard similarity: {similarity:.3f} (threshold: {max_similarity})"
    if not passed:
        detail += " — too similar to prior, try something different"
    return EvalResult("diff_from_prior", 1.0 if passed else 0.0, passed, detail, True)


def readability_score(artifact: str, config: dict) -> EvalResult:
    """Flesch-Kincaid readability, normalized 0–1."""
    import textstat

    # Flesch Reading Ease: 0-100, higher = easier to read
    raw = textstat.flesch_reading_ease(artifact)
    # Clamp to 0-100, normalize to 0-1
    score = max(0.0, min(1.0, raw / 100.0))
    return EvalResult(
        "readability_score", score, True, f"Flesch: {raw:.1f}", False
    )


def checklist_scorer(artifact: str, config: dict) -> EvalResult:
    """Score fraction of required elements present."""
    checklist = config.get("checklist", [])
    if not checklist:
        return EvalResult("checklist_scorer", 1.0, True, "Empty checklist", False)

    lower = artifact.lower()
    found = sum(1 for item in checklist if item.lower() in lower)
    score = found / len(checklist)
    return EvalResult(
        "checklist_scorer",
        score,
        True,
        f"{found}/{len(checklist)} items found",
        False,
    )


def code_executes(artifact: str, config: dict) -> EvalResult:
    """Run code artifact, check exit code 0."""
    language = config.get("language", "python")
    timeout = config.get("timeout", 30)

    # Extract code from markdown fences if present
    code = _extract_code(artifact, language)

    with tempfile.NamedTemporaryFile(
        mode="w", suffix=_ext(language), delete=False
    ) as f:
        f.write(code)
        f.flush()
        tmp_path = f.name

    try:
        cmd = _run_cmd(language, tmp_path)
        result = subprocess.run(
            cmd, capture_output=True, text=True, timeout=timeout
        )
        passed = result.returncode == 0
        detail = "Exit code 0" if passed else f"Exit {result.returncode}: {result.stderr[:200]}"
        return EvalResult("code_executes", 1.0 if passed else 0.0, passed, detail, True)
    except subprocess.TimeoutExpired:
        return EvalResult("code_executes", 0.0, False, f"Timeout after {timeout}s", True)
    finally:
        Path(tmp_path).unlink(missing_ok=True)


def tests_pass(artifact: str, config: dict) -> EvalResult:
    """Run tests against the code artifact. Returns fraction passing."""
    language = config.get("language", "python")
    timeout = config.get("timeout", 30)
    test_code = config.get("test_code", "")

    if not test_code:
        return EvalResult("tests_pass", 0.0, False, "No test code provided", True)

    code = _extract_code(artifact, language)

    with tempfile.TemporaryDirectory() as tmpdir:
        # Write main code
        main_path = Path(tmpdir) / f"main{_ext(language)}"
        main_path.write_text(code)

        # Write test code
        test_path = Path(tmpdir) / f"test_main{_ext(language)}"
        test_path.write_text(test_code)

        try:
            result = subprocess.run(
                ["python3", "-m", "pytest", str(test_path), "-v", "--tb=short"],
                capture_output=True, text=True, timeout=timeout,
                cwd=tmpdir,
                env={**__import__("os").environ, "PYTHONPATH": tmpdir},
            )
            # Parse pytest output for pass/fail counts
            passed_count, failed_count = _parse_pytest(result.stdout)
            total = passed_count + failed_count
            score = passed_count / total if total > 0 else 0.0
            passed = failed_count == 0 and passed_count > 0
            detail = f"{passed_count}/{total} tests passed"
            if result.returncode != 0 and total == 0:
                detail = f"Test error: {result.stderr[:200]}"
            return EvalResult("tests_pass", score, passed, detail, True)
        except subprocess.TimeoutExpired:
            return EvalResult("tests_pass", 0.0, False, f"Timeout after {timeout}s", True)


def _extract_code(text: str, language: str) -> str:
    """Extract code from markdown fenced blocks, or return as-is."""
    pattern = rf"```(?:{language})?\s*\n(.*?)```"
    matches = re.findall(pattern, text, re.DOTALL)
    return "\n".join(matches) if matches else text


def _ext(language: str) -> str:
    return {"python": ".py", "javascript": ".js", "typescript": ".ts"}.get(language, ".py")


def _run_cmd(language: str, path: str) -> list[str]:
    return {"python": ["python3", path], "javascript": ["node", path]}.get(
        language, ["python3", path]
    )


def _parse_pytest(output: str) -> tuple[int, int]:
    """Parse pytest output for passed/failed counts."""
    passed = 0
    failed = 0
    match = re.search(r"(\d+) passed", output)
    if match:
        passed = int(match.group(1))
    match = re.search(r"(\d+) failed", output)
    if match:
        failed = int(match.group(1))
    return passed, failed


# Registry for lookup by name
PROGRAMMATIC_EVALS = {
    "keyword_presence": keyword_presence,
    "structure_check": structure_check,
    "length_bounds": length_bounds,
    "regex_rules": regex_rules,
    "diff_from_prior": diff_from_prior,
    "readability_score": readability_score,
    "checklist_scorer": checklist_scorer,
    "code_executes": code_executes,
    "tests_pass": tests_pass,
}
