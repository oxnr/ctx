# Agent Library

This folder stores local specialist agent profiles used by ctx engagements.

## Purpose
- Keep role-specific execution standards discoverable and versioned.
- Reduce drift by sourcing role patterns from trusted public libraries.
- Avoid rebuilding role instructions from scratch per project.

## Source map
- `msitarzewski/agency-agents` (active)
  - Repo: https://github.com/msitarzewski/agency-agents
  - Update path: `scripts/sync-agent-library.sh`
  - Source style:
    - role families as folders (e.g., `engineering`, `specialized`, `strategy`, etc.)
    - each file is a role profile with objective, inputs, tools, guardrails, and validation cues
    - markdown-first and versioned in git

- `superset-sh/superset` (active)
  - Repo: https://github.com/superset-sh/superset
  - Update path: `scripts/sync-agent-library.sh`
  - Useful patterns we mirror:
    - workspace boot/teardown and local execution boundaries
    - command and agent command registries for stable automation
    - explicit environment/config layering to avoid leaking secrets and context
    - repository-local operating instructions and maintenance runbooks

## Operating rules
- Sync only trusted repos with clear maintenance signals.
- Keep local profiles markdown-first; no binary artifacts.
- If a sync introduces major format changes, stage review before reuse.

## Daily usage
- Use `/agent-library-update` when the repo is changed upstream.
- Use `/design-stack` and `/agentic-audit` flow to validate profile behavior in client playbooks.

## Auto-update hint
For local systems, schedule a manual poll job for `scripts/sync-agent-library.sh` with a cadence you control.
Example (daily):

```bash
cd /Users/onr/Documents/ctx
./scripts/sync-agent-library.sh
```
