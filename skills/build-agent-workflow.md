# Skill: /deploy-workflow

## Objective
Define and launch an AI workflow with measurable quality and safety gates.

## Inputs
- Workflow candidate from /transformation-audit
- Toolchain inventory (repo, issue tracker, docs, communication tools)
- Approval and escalation preferences

## Steps
1. Select deployment target:
   - cloud (managed provider)
   - private-cloud (self-managed, hosted)
   - on-premise (fully local)
   - Document trade-offs and constraints for chosen target.
2. Define trigger -> task decomposition -> execution -> validation -> handoff.
3. Add mandatory checkpoints:
   - human review for sensitive outputs
   - automated checks (lint/tests/format)
   - audit trail for each handoff
4. Build skill prompts for each role:
   - planner
   - executor
   - reviewer
   - reporter
5. Implement fallback policy:
   - escalation path
   - cancellation criteria
   - recovery sequence

## Output
- Runnable workflow spec (inputs, outputs, roles, checkpoints)
- Deployment target justification
- Validation checklist
- Recommended command set and ownership
