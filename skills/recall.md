# Skill: /recall

## Objective
Load durable local context before starting new work so an agent can continue from prior decisions instead of re-explaining history.

## Inputs
- `./scripts/recall-index.sh` with a local session source.
- `./scripts/recall-search.sh` query string.
- Environment assumptions:
  - `CLAUDE_SESSION_DIR` points to local session files
  - sessions are JSONL/JSON with message-like payloads

## Modes
- `/recall` — load the latest context snapshot from index head.
- `/recall topic <query>` — search the local recall index for a topic.

## Steps
1. Refresh local context:
   - `./scripts/recall-index.sh`
   - Optional: `RECALL_MAX_SESSIONS=40 ./scripts/recall-index.sh`
2. Serve current-task recall:
   - For no specific topic, open the first section in `recall/index.md`.
   - For a topic query, run `./scripts/recall-search.sh "<query>"`.
3. Paste the top relevant lines into the run context before starting execution.
4. Keep the active workstream aligned:
   - confirm expected objective and constraints
   - confirm what changed since the last completed milestone
5. After run, optionally close loop:
   - run `./scripts/recall-index.sh` again
   - next run starts from updated context

## Output
- `recall/index.md` as a deterministic, searchable context summary.
- `recall/build-log.md` with refresh timestamp and source assumptions.
- A short handoff summary (`what was happening + what to do next`).

## Trigger tests
- Positive
  - `/recall`
  - `/recall topic shipping`
  - `CLAUDE_SESSION_DIR=... ./scripts/recall-search.sh "bug"`
- Negative
  - `/recall` when there are no session files should explain missing source clearly.
  - random non-context strings should return no or low-confidence matches.
  - invalid `MAX_LINES` values should fail fast and fail safe.
