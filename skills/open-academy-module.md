# Skill: /open-academy

## Objective
Publish a practical open learning module tied to the current implementation phase.

## Inputs
- Chosen workflow or stack feature from consulting sprint
- Current client constraints and success criteria
- Audience level (engineer, product, operations, leadership)

## Steps
1. Define one core outcome for the module (e.g., safe delegation for coding tasks).
2. Include:
   - 10-minute concept brief
   - 20-minute lab/task
   - one cheat sheet or prompt template
3. Write in public-safe terms:
   - no sensitive client data
   - no internal secrets
4. Ensure modules are infrastructure-independent:
   - no hard dependencies on specific providers or deployment targets
   - examples should work across cloud, private-cloud, and on-premise environments
5. Publish artifacts:
   - markdown module
   - FAQ from likely operational questions
   - all outputs in markdown or plain text only
6. Pull operational shape from `academy/handbook-catalog.md` where helpful:
   - project lab list
   - core books
   - prompt engineering practices
   - `academy/anthropic-academy.md` for structured course-level patterns.
   - `skills/anthropic-academy.md` for module-to-skill conversion rules.
7. Use `academy/syllabus.md` to pick:
   - module objective
   - required deliverables
   - expected command triggers
8. Optional publication polish:
   - `/humanizer` for public-facing readability refinement only.
   - keep evidence, policy, and test sections unchanged.

## Output
- Open module with clear learning outcome
- Companion command prompt or skill
- Feedback prompt to improve the next module

## Optional Anthropic conversion pattern
- 1) Select 1 Anthropic Academy track for this cohort.
- 2) Adapt one behavior pattern from it into a module or skill.
- 3) Publish public artifact + one private execution-ready runbook artifact.
