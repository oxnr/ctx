# Skill: /harness-loop

## Objective
Keep AI work reliable as scale grows: scope, quality, and recovery are explicit for every implementation cycle.

## When to use
- New client engagements, major architecture decisions, or repeated agent failures.

## Inputs
- Engagement phase and target outcome.
- Relevant context files from `llm-full.txt`, `skills/`, and `academy/syllabus.md`.
- Current risk level and rollout constraints.

## Steps
1. Define one small outcome and one measurable acceptance rule.
2. Split the outcome into 2-4 execution atoms (one at a time).
3. Run the active skill for each atom with current context attached.
4. Validate immediately:
   - format checks
   - logic checks
   - safety/quality checks
5. Produce a short human-readable preview before broad rollout:
   - what changed
   - why it changed
   - where confidence is lowest
6. Fix the highest-entropy failure first (missing context, wrong contract, missing assumption).
7. Re-run only impacted atoms; avoid full reruns when a narrow retry is sufficient.
8. Update or append:
   - decisions notes
   - validation checklist
   - cleanup debt item (one item minimum)
9. Keep the issue model high-signal:
   - keep planning artifacts lightweight
   - record rationale and constraints in context, not in long ticket chains
   - close action loops with explicit next-step signals

## Output
- One updated artifact set:
  - Updated `academy/` or `skills/` artifacts used by the current engagement.
  - Decision note for any trade-off made.
  - One cleanup task that reduces future agent confusion.

## Safety + reliability rules
- Never skip validation for speed.
- Any failure must include a root-cause note before the next retry.
- If the failure source is external infrastructure, call out rollback and escalation.
