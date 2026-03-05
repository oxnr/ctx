# Skill: /agent-library-update

## Objective
Maintain a local, versioned specialist agent library so roles stay consistent across client engagements and future model upgrades.

## When to use
- At onboarding to create a baseline specialist set.
- Weekly as part of systems maintenance.
- Before major engagements where role quality matters.

## Inputs
- `agent-library/sources.md` for source list.
- `scripts/sync-agent-library.sh` to run the update.

## Steps
1. Open `agent-library/sources.md` and confirm expected upstream sources.
2. Run `scripts/sync-agent-library.sh`.
3. Confirm the sync log in `agent-library/sync-log.md`.
4. Open `agent-library/index.md` and verify key role folders are present.
5. If a source changed significantly, tag 1-2 high-value agents into `skills/` and map them in this practice.

## Output
- Updated local mirror in `agent-library/vendors/...`.
- A commit-ready diff in `agent-library/sources.md` (source metadata) and `agent-library/index.md` (availability summary).
- A new entry in `agent-library/sync-log.md`.
- Validate both upstream sources are refreshed: `msitarzewski/agency-agents` and `superset-sh/superset`.

## Failure handling
- If fetch fails, keep prior local library read-only and continue from cached snapshots.
- If merge conflicts appear, log the blocker in your decision notes and retry once the source repo is accessible.
