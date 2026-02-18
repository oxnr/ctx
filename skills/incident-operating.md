# Skill: /incident-operating

## Objective
Run a structured response when an AI workflow produces wrong outputs or process failures.

## Inputs
- Incident summary from agent run
- Impact level (low / medium / high)
- Trigger logs and user-reported issue

## Steps
1. Freeze affected workflow branch and prevent additional writes.
2. Gather artifacts:
   - action trace
   - inputs used
   - model/provider + tool outputs
3. Classify failure:
   - instruction error
   - data error
   - model quality error
   - environment failure
   - infrastructure/deployment failure (network, compute, storage, model hosting)
4. Remediate with smallest safe rollback.
5. Update:
   - skill prompts
   - quality checkpoints
   - training module (if human error pattern is recurrent)

## Output
- Incident note with timeline and root-cause
- Remediation and prevention changes
- Updated safety rules for the workflow
