"""LLM judge eval primitives — calls Ollama for nuanced scoring."""

import re

import inference
from evals.base import EvalResult

DEFAULT_JUDGE_MODEL = "qwen3:1.7b"

ANTI_LENIENCY = """Score harshly. A 7/10 means genuinely insightful or well-crafted, not merely adequate.
A 5/10 is average — the response addresses the question but lacks depth or specificity.
If you identify a problem, do not rationalize it away. Deduct points."""


def rubric_judge(artifact: str, config: dict) -> EvalResult:
    """Score artifact against a rubric. Returns normalized 0-1 score."""
    rubric = config.get("rubric", "Score 1-10 on overall quality.")
    model = config.get("judge_model", DEFAULT_JUDGE_MODEL)

    prompt = f"""Evaluate the following artifact against this rubric.

## Rubric
{rubric}

{ANTI_LENIENCY}

## Artifact
{artifact[:3000]}

Respond with ONLY a number from 1 to 10, then a brief justification.
Format: SCORE: <number>
REASON: <one sentence>"""

    response = inference.generate(model=model, prompt=prompt, temperature=0.1)
    score_raw, reason = _parse_score(response)

    if score_raw is None:
        # Retry once
        response = inference.generate(model=model, prompt=prompt, temperature=0.3)
        score_raw, reason = _parse_score(response)

    if score_raw is None:
        return EvalResult("rubric_judge", 0.0, True, f"Could not parse score: {response[:100]}", False)

    score = max(0.0, min(1.0, (score_raw - 1) / 9.0))  # 1-10 → 0-1
    return EvalResult("rubric_judge", score, True, f"{score_raw}/10 — {reason}", False)


def multi_dimension_judge(artifact: str, config: dict) -> EvalResult:
    """Score across multiple named dimensions, return average."""
    dimensions = config.get("dimensions", [])
    model = config.get("judge_model", DEFAULT_JUDGE_MODEL)

    if not dimensions:
        return EvalResult("multi_dimension_judge", 0.5, True, "No dimensions specified", False)

    dim_list = "\n".join(f"- {d}" for d in dimensions)
    prompt = f"""Score the following artifact on each dimension (1-10).

## Dimensions
{dim_list}

{ANTI_LENIENCY}

## Artifact
{artifact[:3000]}

For EACH dimension, respond with:
DIMENSION: <name>: <score>/10

Then a final line:
AVERAGE: <number>/10"""

    response = inference.generate(model=model, prompt=prompt, temperature=0.1)
    scores = _parse_multi_scores(response, dimensions)

    if not scores:
        # Retry once
        response = inference.generate(model=model, prompt=prompt, temperature=0.3)
        scores = _parse_multi_scores(response, dimensions)

    if not scores:
        return EvalResult(
            "multi_dimension_judge", 0.0, True,
            f"Could not parse scores: {response[:100]}", False,
        )

    avg_raw = sum(scores.values()) / len(scores)
    avg = max(0.0, min(1.0, (avg_raw - 1) / 9.0))  # 1-10 → 0-1

    details = ", ".join(f"{k}: {v:.0f}/10" for k, v in scores.items())
    return EvalResult(
        "multi_dimension_judge", avg, True,
        f"avg {avg_raw:.1f}/10 ({details})", False,
    )


def _parse_score(response: str) -> tuple[float | None, str]:
    """Extract SCORE: N from response."""
    # Try SCORE: N pattern
    match = re.search(r"SCORE:\s*(\d+(?:\.\d+)?)", response, re.IGNORECASE)
    if match:
        score = float(match.group(1))
        if 1 <= score <= 10:
            reason_match = re.search(r"REASON:\s*(.+)", response, re.IGNORECASE)
            reason = reason_match.group(1).strip() if reason_match else ""
            return score, reason

    # Fallback: first standalone number 1-10
    match = re.search(r"\b(\d+(?:\.\d+)?)\s*/\s*10\b", response)
    if match:
        score = float(match.group(1))
        if 1 <= score <= 10:
            return score, ""

    return None, ""


def _parse_multi_scores(response: str, dimensions: list[str]) -> dict[str, float]:
    """Parse dimension scores from multi-dimension judge response."""
    scores = {}

    # Try structured DIMENSION: name: N/10 format
    for line in response.split("\n"):
        match = re.search(r"(\d+(?:\.\d+)?)\s*/\s*10", line)
        if match and "AVERAGE" not in line.upper():
            score = float(match.group(1))
            if 1 <= score <= 10:
                # Try to match to a dimension name
                for dim in dimensions:
                    if dim.lower()[:20] in line.lower():
                        scores[dim] = score
                        break
                else:
                    # Assign to next unscored dimension
                    for dim in dimensions:
                        if dim not in scores:
                            scores[dim] = score
                            break

    return scores


# Registry for lookup by name
LLM_JUDGE_EVALS = {
    "rubric_judge": rubric_judge,
    "multi_dimension_judge": multi_dimension_judge,
}
