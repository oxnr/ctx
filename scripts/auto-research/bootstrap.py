"""Eval bootstrapping: classify any question, produce eval.yaml + prompt.yaml."""

import json
import re
from pathlib import Path

import yaml

import inference

# --- Task type classification ---

KEYWORD_RULES = [
    ("code", ["build ", "implement ", "create an app", "write code", " cli ", " api ", "script that", "function that", "class that"]),
    ("research", ["research", "what is", "explain ", "compare ", "how does", "what's happening", "current state of", "which ", "why "]),
    ("analysis", ["analyze", "examine", "audit ", "assess", "evaluate ", "data "]),
    ("creative", ["write a ", "draft ", "compose ", "design a "]),
]


def classify_task(question: str) -> str:
    q = question.lower()
    for task_type, keywords in KEYWORD_RULES:
        if any(kw in q for kw in keywords):
            return task_type
    return "research"


# --- Base eval templates ---

BASE_TEMPLATES: dict[str, dict] = {
    "research": {
        "done_threshold": 0.70,
        "eval_functions": [
            {"name": "structure", "function": "structure_check", "is_guard": True, "config": {"required_sections": ["## Summary", "## Key Findings", "## Sources"]}},
            {"name": "length", "function": "length_bounds", "is_guard": True, "config": {"min_chars": 500}},
            {"name": "freshness", "function": "diff_from_prior", "is_guard": True, "config": {"max_similarity": 0.95}},
            {"name": "depth", "function": "rubric_judge", "is_guard": False, "weight": 0.50, "config": {"rubric": "Score 1-10 on factual depth, specificity, and absence of vague hedging."}},
            {"name": "completeness", "function": "multi_dimension_judge", "is_guard": False, "weight": 0.50, "config": {"dimensions": ["covers all aspects of the question", "provides actionable specifics", "cites concrete sources"]}},
        ],
    },
    "code": {
        "done_threshold": 0.80,
        "eval_functions": [
            {"name": "runs", "function": "code_executes", "is_guard": True, "config": {"language": "python", "timeout": 30}},
            {"name": "freshness", "function": "diff_from_prior", "is_guard": True, "config": {"max_similarity": 0.95}},
            {"name": "quality", "function": "rubric_judge", "is_guard": False, "weight": 0.40, "config": {"rubric": "Score 1-10 on correctness, readability, error handling, and edge cases."}},
            {"name": "spec", "function": "multi_dimension_judge", "is_guard": False, "weight": 0.60, "config": {"dimensions": []}},
        ],
    },
    "analysis": {
        "done_threshold": 0.70,
        "eval_functions": [
            {"name": "structure", "function": "structure_check", "is_guard": True, "config": {"required_sections": ["## Summary", "## Analysis", "## Conclusions"]}},
            {"name": "length", "function": "length_bounds", "is_guard": True, "config": {"min_chars": 600}},
            {"name": "freshness", "function": "diff_from_prior", "is_guard": True, "config": {"max_similarity": 0.95}},
            {"name": "depth", "function": "rubric_judge", "is_guard": False, "weight": 0.50, "config": {"rubric": "Score 1-10 on analytical rigor, evidence quality, and logical coherence."}},
            {"name": "completeness", "function": "multi_dimension_judge", "is_guard": False, "weight": 0.50, "config": {"dimensions": ["addresses all relevant factors", "supports claims with evidence", "considers alternative explanations"]}},
        ],
    },
    "creative": {
        "done_threshold": 0.65,
        "eval_functions": [
            {"name": "length", "function": "length_bounds", "is_guard": True, "config": {"min_chars": 200}},
            {"name": "freshness", "function": "diff_from_prior", "is_guard": True, "config": {"max_similarity": 0.95}},
            {"name": "quality", "function": "rubric_judge", "is_guard": False, "weight": 0.50, "config": {"rubric": "Score 1-10 on creativity, coherence, and craft."}},
            {"name": "spec", "function": "multi_dimension_judge", "is_guard": False, "weight": 0.50, "config": {"dimensions": ["meets the stated requirements", "engaging and well-structured"]}},
        ],
    },
}


# --- LLM-based customization ---

BOOTSTRAP_PROMPT = """Given this task: "{question}"

I need to set up evaluation criteria. Respond in JSON only (no markdown fences):
{{
  "required_sections": ["## Section1", "## Section2"],
  "required_keywords": ["term1", "term2"],
  "forbidden_keywords": [],
  "judge_rubric": "Score 1-10 on ...",
  "judge_dimensions": ["dimension1", "dimension2"],
  "done_threshold": 0.70,
  "generator_system_prompt": "You are an expert in ...",
  "generator_task_prompt": "Produce the following: ..."
}}

Think about what a good answer would contain. What sections, terms, and quality dimensions matter most?"""


def customize_template(
    question: str, task_type: str, model: str = "qwen3:8b"
) -> tuple[dict, dict]:
    """Customize base template via LLM. Returns (eval_config, prompt_config)."""
    template = _deep_copy(BASE_TEMPLATES[task_type])

    # Try LLM customization
    customization = _llm_customize(question, model)

    if customization:
        _apply_customization(template, customization, task_type)
        prompt_config = {
            "system": customization.get("generator_system_prompt", ""),
            "task": customization.get("generator_task_prompt", question),
        }
    else:
        prompt_config = {
            "system": f"You are a helpful expert. Produce a high-quality {task_type} response.",
            "task": question,
        }

    return template, prompt_config


def _llm_customize(question: str, model: str) -> dict | None:
    """Call LLM to get customization JSON. Returns None on failure."""
    if not inference.is_available():
        return None

    try:
        response = inference.generate(
            model=model,
            prompt=BOOTSTRAP_PROMPT.format(question=question),
            system="You are a task analysis expert. Respond with valid JSON only. No thinking tags, no explanation.",
            temperature=0.3,
        )
        return _parse_json(response)
    except Exception:
        return None


def _parse_json(text: str) -> dict | None:
    """Extract JSON from LLM response, handling common issues."""
    # Strip markdown fences
    text = re.sub(r"```(?:json)?\s*", "", text)
    text = re.sub(r"```", "", text)

    # Strip thinking tags
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL)

    # Try to find JSON object
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        return None
    try:
        return json.loads(match.group())
    except json.JSONDecodeError:
        return None


def _apply_customization(template: dict, custom: dict, task_type: str) -> None:
    """Merge LLM customization into base template."""
    if "done_threshold" in custom:
        try:
            template["done_threshold"] = float(custom["done_threshold"])
        except (ValueError, TypeError):
            pass

    for ev in template["eval_functions"]:
        cfg = ev.get("config", {})

        if ev["function"] == "structure_check" and "required_sections" in custom:
            cfg["required_sections"] = custom["required_sections"]

        if ev["function"] == "keyword_presence" and "required_keywords" in custom:
            cfg["required_keywords"] = custom["required_keywords"]
            cfg["forbidden_keywords"] = custom.get("forbidden_keywords", [])

        if ev["function"] == "rubric_judge" and "judge_rubric" in custom:
            cfg["rubric"] = custom["judge_rubric"]

        if ev["function"] == "multi_dimension_judge" and "judge_dimensions" in custom:
            cfg["dimensions"] = custom["judge_dimensions"]

        ev["config"] = cfg

    # Add keyword_presence guard if LLM provided keywords and it's not already there
    has_keyword = any(e["function"] == "keyword_presence" for e in template["eval_functions"])
    if not has_keyword and custom.get("required_keywords"):
        template["eval_functions"].insert(0, {
            "name": "keywords",
            "function": "keyword_presence",
            "is_guard": True,
            "config": {
                "required_keywords": custom["required_keywords"],
                "forbidden_keywords": custom.get("forbidden_keywords", []),
            },
        })


def _deep_copy(obj):
    """Simple deep copy for nested dicts/lists."""
    if isinstance(obj, dict):
        return {k: _deep_copy(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_deep_copy(v) for v in obj]
    return obj


# --- Write to session directory ---

def bootstrap(
    question: str,
    session_dir: Path,
    task_type: str | None = None,
    model: str = "qwen3:8b",
) -> tuple[Path, Path]:
    """Full bootstrap: classify, customize, write eval.yaml + prompt.yaml."""
    if task_type is None:
        task_type = classify_task(question)

    eval_config, prompt_config = customize_template(question, task_type, model)
    eval_config["task_type"] = task_type

    eval_path = session_dir / "eval.yaml"
    prompt_path = session_dir / "prompt.yaml"

    eval_path.write_text(yaml.dump(eval_config, default_flow_style=False, sort_keys=False))
    prompt_path.write_text(yaml.dump(prompt_config, default_flow_style=False, sort_keys=False))

    return eval_path, prompt_path


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: bootstrap.py <question> [--type research|code|analysis|creative]")
        sys.exit(1)

    q = sys.argv[1]
    t = None
    if "--type" in sys.argv:
        idx = sys.argv.index("--type")
        t = sys.argv[idx + 1]

    session = Path("experiments/bootstrap-test")
    session.mkdir(parents=True, exist_ok=True)

    task_type = t or classify_task(q)
    print(f"Task type: {task_type}")

    eval_config, prompt_config = customize_template(q, task_type)
    eval_config["task_type"] = task_type

    print("\n--- eval.yaml ---")
    print(yaml.dump(eval_config, default_flow_style=False, sort_keys=False))
    print("--- prompt.yaml ---")
    print(yaml.dump(prompt_config, default_flow_style=False, sort_keys=False))
