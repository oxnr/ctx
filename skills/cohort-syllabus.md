# Skill: /cohort-syllabus

## Objective
Generate a role-specific, phase-based curriculum + execution package from the shared syllabus.

## Aliases
- `/syllabus-engineering`
- `/syllabus-operations`
- `/syllabus-leadership`
- `/syllabus-sales`
- `/syllabus-support`

## Inputs
- `--role <engineering|operations|leadership|sales|support>`
- `academy/syllabus.md`
- `academy/role-syllabi.md`
- optional: `decisions` baseline if your engagement has custom constraints

## Steps
1. Read the role mapping in `academy/syllabus.md`.
2. Read the role bundle in `academy/role-syllabi.md`.
3. For the selected role:
   - return a phase sequence
   - list module priority
   - list required artifacts
   - list required slash-command set
4. Apply local-first constraints:
   - markdown outputs only
   - include any local-only constraints
   - mark optional tasks requiring cloud-only providers.
5. Return a deployment-ready onboarding snippet:
   - first two phases
   - first two deliverables
   - first two quality gates

## Output
- Role plan with:
  - phase-by-phase sequence,
  - module mapping,
  - command map,
  - completion criteria.
- If role is unknown, return role prompt list and require disambiguation.

## Trigger tests
- Positive:
  - "run syllabus for engineering cohort"
  - "start operations academy rollout"
  - "build support rollout phase bundle"
- Negative:
  - "update provider catalog now"
  - "run web quality checks only"
  - "create a new provider script"
