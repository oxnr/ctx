# Skill: /design-stack (alias: /design-local-stack)

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
4. Add provider matrix and toolchain mapping:
   - model provider + version policy
   - routing rules and fallback providers
   - terminal/CLI execution model
   - protocol adapters only as needed (for example MCP or API-native wrappers)
   - observability and readout tooling
5. Define policy controls:
   - context redaction
   - tool allowlist
   - logging, retention, and audit rules
6. Produce runbook and minimal architecture diagram.

## Interfacing bias
- Favor direct terminal workflows and repository-backed execution over protocol-specific tool ecosystems.
- Treat MCP as a compatibility layer: useful when a client already has it, but not required for your architecture.

## Optional execution pattern
- Use `/provider-stack` first when this scope includes more than one team or any image/multimodal use-case.
- Prefer worktree-style execution for medium/high-risk changes: one branch and one workspace per major agent track, plus explicit setup/teardown hooks.

## Output
- One-page architecture choice with trade-offs
- Security posture decision table
- Suggested rollout order (pilot → limited department → full team)
