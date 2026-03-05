# Skill: /task-contract

## Objective
Create a strict session contract before execution so each agent run is bounded, testable, and hard to drift.

## Principle
Long AI work fails mostly on unclear scope. Keep each run tight, executable, and reversible.

## Inputs
- Business objective from user or engagement owner
- Risk class (low / medium / high)
- Files or systems touched
- Time or iteration budget
- Exit conditions

## Contract template
1. **Intent** (one sentence, no fluff).
2. **Boundaries**:
   - in scope (what to do)
   - out of scope (what not to touch)
3. **Success criterion**:
   - one primary acceptance check
   - one rollback condition
4. **Method**:
   - one agent and one terminal path
   - data sources
   - expected outputs (format + location)
5. **Quality gates**:
   - pre-check (inputs verified)
   - post-check (output contract verified)
   - reviewer role and escalation
6. **Failure policy**:
   - stop trigger
   - who approves restart

## Recommended flow
1. `/task-contract --create` to draft the scope boundary and gates.
2. `/task-contract --execute` to run only what was approved.
3. `/task-contract --close` to attach artifacts and record unresolved risks.

## Failure handling
- If context is incomplete, return a blocked-state and request exactly what is missing.
- If the agent attempts scope expansion, require a revised contract before proceeding.
- If acceptance check fails, stop and enter `/incident-operating` immediately.

## Anti-sycophancy rule
- Do not preserve failed assumptions for compatibility.
- Prefer explicit contradiction checks over confirmation-style answers.
- Every non-trivial output must cite evidence from artifacts, not style.

## Output
- A contract record in markdown with clear scope boundaries.
- One executable output artifact.
- Short rationale with at least one objective validation result.
