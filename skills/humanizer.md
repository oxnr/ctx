# Skill: /humanizer

## Objective
Polish public-facing documentation and academy text so it reads naturally without changing intent, claims, or constraints.

## Principle
Readability and clarity are optional improvement layers. Deterministic output and auditability remain primary.

## Inputs
- Source text artifact (module, FAQ, public module, offer write-up)
- Target tone constraints (concise, technical, executive, operational)
- Redaction policy from `llm-full.txt` / engagement notes

## Usage policy
- Use only for publication-ready, non-evidence-critical text.
- Do not pass secrets, credentials, or raw incident records through stylistic rephrasing layers.
- Preserve technical terms, command names, model identifiers, and policy statements.
- Never use as a substitute for approval gates.
- Do not use to fabricate claims or conceal provenance.

## Steps
1. Read source text and identify sections where language is mechanical, repetitive, or unclear.
2. If the text contains claims, tests, or outputs, keep assertions unchanged and only adjust wording.
3. Rewrite for:
   - directness,
   - minimal jargon,
   - clear ownership and next action.
4. Keep markdown structure and references intact (files/skills/commands).
5. If this is a client-facing artifact, include one short pre/post diff summary.

## Suggested tool chain
- Optional external helper: https://github.com/blader/humanizer
- Local fallback: manual rewrite with `/prompt-engineering` and fixed format constraints.
- Mandatory gate after use: `/web-quality-audit` (if public web artifact) and `/quality-cycle` cadence.

## Trigger tests
- Positive:
  - "polish this open academy module for publication"
  - "humanize this public skills page"
- Negative:
  - "rewrite incidents without changing facts"
  - "humanize private internal logs"
  - "update provider catalog now"

## Output
- Rewritten artifact with intent preserved.
- One-line summary of wording changes and preserved constraints.
