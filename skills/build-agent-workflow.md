# Skill: /deploy-workflow

## Objective
Define and launch an AI workflow with measurable quality and safety gates.

## Inputs
- Workflow candidate from /agentic-audit
- Toolchain inventory (repo, issue tracker, docs, communication tools)
- Approval and escalation preferences

## Steps
1. Start with `/task-contract --create` to lock scope and acceptance criteria before design choices.
2. Select deployment target:
   - cloud (managed provider)
   - private-cloud (self-managed, hosted)
   - on-premise (fully local)
   - Document trade-offs and constraints for chosen target.
3. Define an explicit scope window:
   - choose 1 narrow outcome
   - define one acceptance check and one rollback condition
   - map to the smallest number of files/agents needed
4. Define trigger -> task decomposition -> execution -> validation -> handoff with small "atom" blocks:
    - each atom should have one owner
    - each atom should have one testable acceptance check
    - stop after first failure atom and fix before moving on
5. Add workspace execution boundaries:
   - isolate long-lived or high-risk agents into dedicated shells or worktrees
   - keep environment/session bootstrap and teardown explicit in each workflow
   - document all local config assumptions in one command map
6. Add mandatory checkpoints:
   - human review for sensitive outputs
   - automated checks (lint/tests/format)
   - audit trail for each handoff
7. Build skill prompts for each role:
   - planner
   - executor
   - reviewer
   - reporter
8. Add a quality preview gate before expansion:
   - generate a short summary of intended changes
   - run only targeted validation for the changed area
   - review full output only when risk is high or acceptance fails
9. Implement fallback policy:
   - escalation path
   - cancellation criteria
   - recovery sequence
10. Keep issue-style trackers lightweight:
   - use high-level commitments for what matters
   - include context and evidence per entry
   - avoid per-file ticketization that slows execution

## Output
- Runnable workflow spec (inputs, outputs, roles, checkpoints)
- Deployment target justification
- Validation checklist
- Recommended command set and ownership
