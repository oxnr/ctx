# Skill: /superset-patterns

## Objective
Import proven workspace orchestration patterns from Superset into your engagement execution model.

## When to use
- You need a repeatable way to run multiple agents without branch conflicts.
- You need explicit setup/teardown guarantees for local environment safety.
- You want stable command bootstrapping for agent terminals.

## Patterns to adopt

1. **Worktree isolation**
- Use one branch/worktree per high-risk actor path.
- Treat each workspace as an isolated execution lane with its own terminal and ports.
- Do not merge directly into main; merge only after validation.

2. **Setup/teardown lifecycle**
- Define `.superset/config.json` (or local equivalent) with:
  - `setup`: dependency install, env seeding, project bootstrap.
  - `teardown`: cleanup local services and temporary artifacts.
- Execute setup before work starts; run teardown on workspace close.

3. **Terminal preset discipline**
- Keep reusable terminal starters for agent commands:
  - `claude`
  - `codex`
  - `gemini`
  - `cursor-agent`
  - `opencode`
- Use parallel launch modes for parallel exploration and serial mode for deterministic execution.

4. **Diff-first review**
- Keep changes in review-first workflow:
  - stage selectively,
  - inspect diffs at file level,
  - create PR only after lane-level validation passes.

5. **Integration with your current model**
- Mirror these ideas in:
  - `/task-contract` for bounded execution boundaries,
  - `/build-agent-workflow` for staged handoffs,
  - `/incident-operating` for deterministic teardown/restart policy.

## Output
- A workspace policy note in `decisions` or `agent-library` explaining when isolation and preset rules apply.
- A local command map with setup/teardown and terminal presets versioned in repo artifacts.
