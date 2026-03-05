# Skill: /context-compression-policy (alias: /compact-risk)

## Objective
Protect context quality when relying on compacting, summarization, or compression APIs.

## Core assumption from the thread
Model-based compaction endpoints are often opaque: the API surface may include a `model` parameter, but output format, retention fidelity, and replacement behavior can evolve. Treat compaction as a **probabilistic helper**, not a source of truth.

## Inputs
- `provider-catalog/index.md` entry for compaction-related providers/APIs.
- Workload risk level and data sensitivity.
- Any required audit/retrieval SLA for compressed outputs.

## Steps
1. Classify each context path:
   - critical: keep full-fidelity source trail.
   - standard: allow compacted copies plus retention policy.
   - ephemeral: compacted only.
2. Keep dual outputs for critical paths:
   - canonical: immutable raw artifact (raw context, inputs, decisions)
   - operational: compacted representation for speed and token control
3. Run compaction with pinned, versioned policy:
   - provider name + API family + model/version + effective date
   - no unknown defaults
4. Validate at each sync:
   - compaction roundtrip spot checks
   - task-level evidence retention checks (who/what changed)
   - minimal acceptance checks before agent handoff
5. Define fail-open policy:
   - if compaction quality degrades, use raw context fallback
   - if provider endpoint fails, bypass compaction and continue with approved local alternative
6. Document the policy in the project `agentic context` layer and link it from `settings.json`.

## Hard constraints
- Never write high-risk decisions using only compacted output.
- Never assume compaction output can be traced to exact token-level fidelity.
- Never rely on provider-specific compaction semantics as permanent architecture contracts.

## Output
- `decisions/context-compression.md` decision note (or equivalent).
- Approved failover decision for each workflow lane.
- Log entry in incident notes when compaction is used in production path.
