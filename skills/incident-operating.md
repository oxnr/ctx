# Skill: /incident-operating

## Objective
Run a structured response when an AI workflow produces wrong outputs or process failures.

## Inputs
- Incident summary from agent run
- Impact level (low / medium / high)
- Trigger logs and user-reported issue
- `/task-contract` context when the workflow was run without a pre-approved contract

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
4. Classify workflow contribution:
   - evidence gap (missing/weak inputs)
   - scope gap (trying to solve too much at once)
   - review gap (weak acceptance gate)
4. Run an anti-sycophancy review loop:
   - **Finder**: enumerate concrete failures, missing evidence, and boundary violations.
   - **Adversarial reviewer**: actively challenge the proposed fix and assumptions.
   - **Judge**: choose the minimal safe remediation and identify one decisive acceptance check.
5. Remediate with smallest safe rollback.
6. Require explicit recovery contract:
   - expected behavior
   - rollback trigger
   - who approves re-opened risk
7. Update:
   - skill prompts
   - quality checkpoints
   - training module (if human error pattern is recurrent)
   - issue model (if process needs less/no ticket fragmentation)

## Output
- Incident note with timeline and root-cause
- Remediation and prevention changes
- Updated safety rules for the workflow
- Decision on whether a commit-style preview gate should have caught the failure earlier
- Anti-sycophancy review note with finder/adversarial/judge verdicts
