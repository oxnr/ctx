# Skill: /deploy-workflow

## Objective
Define and launch an agentic workflow with measurable quality and safety gates.

## Inputs
- Workflow candidate from /agentic-audit
- Toolchain inventory (repo, issue tracker, docs, communication tools)
- Approval and escalation preferences

## Steps
1. Define trigger -> task decomposition -> execution -> validation -> handoff.
2. Add mandatory checkpoints:
   - human review for sensitive outputs
   - automated checks (lint/tests/format)
   - audit trail for each handoff
3. Build skill prompts for each role:
   - planner
   - executor
   - reviewer
   - reporter
4. Implement fallback policy:
   - escalation path
   - cancellation criteria
   - recovery sequence

## Output
- Runnable workflow spec (inputs, outputs, roles, checkpoints)
- Validation checklist
- Recommended command set and ownership
