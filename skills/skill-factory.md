# Skill: /skill-factory (alias: /skill-creator)

## Objective
Turn ad-hoc agent instructions into reusable, testable skill artifacts that survive model and CLI churn.

## Principle
Skills are portable by default and deterministic wherever possible.

- Use skills for discovery and orchestration.
- Migrate stable, repeatable tasks into scripts or CLIs.
- Keep the skill corpus protocol-agnostic: markdown + concise structure.

## Inputs
- Context artifacts: `agents.md`, `settings.json`, `me.md`, relevant `entities/` or `people/` entries.
- Source references for templates, examples, or command libraries.
- Target tooling: `Claude Code`, `Codex`, `Cursor`, `Windsurf`, terminal tools, CI environment.

## Required structure
1. **Objective**: one sentence describing what the skill should produce.
2. **Inputs**: exact files and signals required.
3. **Steps**: numbered execution path.
4. **Output**: expected artifacts and format.
5. **Failure handling**: what to do when APIs, agents, or outputs fail.

Keep the body short. If it grows beyond fast comprehension, split into one focused skill with sub-links.

## Authoring rules (adapted from practical agent-skill systems)
- Be explicit about trigger and aliases.
- Use minimal metadata at top-level (name, objective, aliases).
- Prefer local, relative file references only.
- Avoid embedding large implementation text; prefer references to scripts and playbooks.
- Keep assumptions explicit (tooling assumptions, data freshness, environment assumptions).
- If a skill depends on code, reference the smallest executable script entry point.
- No hidden dependencies. If you need an external command, list it in steps.

## Workflow
1. Create a contract first with `/task-contract --create` (scope, acceptance check, rollback condition, max changes).
2. Decide if the skill is deterministic.
3. If deterministic, move logic to a script and make the skill a thin wrapper.
4. Add one concrete input/output contract so agents can self-validate.
5. Add a fallback path when provider/API availability drops.
6. Save examples of successful invocation in the skill body or linked notes.

## Hardening rule
- Keep sessions short: design, verify, and close within one bounded context window.
- Split work into a quick research pass and a separate execution pass.
- If a generated update cannot be validated in one pass, fail fast and request a revised contract.

## Deterministic migration rule
Use scripts when all of these are true:

- You execute the same skill repeatedly with the same expected outcome.
- You care about stable IDs, exact formats, and predictable files.
- Manual review only for exceptions and exceptions-only.

If only some parts are deterministic, keep the orchestration as a skill and call the script for the stable core.

## Output contract
- Every skill should produce one canonical artifact per run: markdown, json, or csv.
- Human-readable summary for the lead plus machine-readable output for downstream agents.
- Include a short “why” rationale when decisions are opinion-based.

## Suggested slash mapping
- `/skill-factory --topic <area> --mode create` -> draft skill from context and existing patterns.
- `/skill-factory --topic <area> --mode harden` -> migrate stable logic into `scripts/` and update skill as wrapper.
- `/skill-factory --topic <area> --mode refresh` -> re-sync references and validate assumptions.
