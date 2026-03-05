# Academy Module: Provider-Native Stack Engineering

## Objective
Train teams to design, run, and govern AI systems across changing model ecosystems with low coupling.

## Core outcomes
- Choose providers by use-case, risk, and governance posture.
- Define routing and fallback plans.
- Connect model providers with terminal/agent tooling and evaluation/readout stacks.
- Refresh capabilities when model versions or providers shift.

## Required artifacts
- `provider-catalog/index.md` (live model/provider snapshot)
- `provider-catalog/sources.md` (trusted source map)
- `skills/provider-stack.md`
- `skills/provider-catalog-update.md`

## Module sequence

1. Provider map and role decomposition
- map text, coding, image, speech, and retrieval tasks
- tag each lane with at least one primary and one fallback provider

2. Toolchain matrix
- terminal model for local and remote execution
- agent interfaces (Claude Code, Codex, Cursor, Windsurf, OpenHands)
- orchestration and aggregation path

3. Version and drift control
- run `./scripts/sync-provider-catalog.sh`
- review deltas in `provider-catalog/index.md`
- update `decisions/provider-stack.md` if top-risk lanes change

4. Safe rollout
- staged rollout and preview gate
- incident plan and migration rollback

## Lab work
- Build a mapping from 12 use-cases to provider/lane assignments.
- Configure at least one local fallback path (no external call).
- Build one image-generation fallback path (provider + model + trigger condition).
- Draft a weekly incident runbook for provider outages and model deprecations.

## Completion checklist
- One decision note with routing policy.
- One synced provider catalog entry.
- One preview + rollback plan from simulation.
