# Skill: /design-local-stack

## Objective
Recommend an AI architecture that satisfies sovereignty and control constraints and real-world operability.

## Inputs
- Security requirements (PII, regulated data, retention policy)
- Data residency and access control requirements
- Budget envelope and latency tolerance
- Existing compute and deployment constraints

## Steps
1. Map data classification and decision boundaries.
2. Compare deployment options:
   - cloud with strict tenancy controls
   - private-cloud
   - on-prem/local
3. Define local model usage where needed:
   - baseline tasks
   - high-risk tasks
   - fallback model routing rules
4. Define policy controls:
   - context redaction
   - tool allowlist
   - logging, retention, and audit rules
5. Produce runbook and minimal architecture diagram.

## Output
- One-page architecture choice with trade-offs
- Security posture decision table
- Suggested rollout order (pilot → limited department → full team)
