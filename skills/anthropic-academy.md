# Skill: /anthropic-academy

## Objective
Extract and operationalize useful content from Anthropic Academy into reusable, CLI-first, markdown-native playbooks.

## When to use
- You want a structured way to convert a broad course catalog into the ctx context stack.
- You are planning a training sprint and want a fast syllabus slice.
- You need consistent terminology between consulting and academy layers.

## Inputs
- `academy/anthropic-academy.md` (external-to-internal course map).
- `academy/syllabus.md` (current training cadence).
- `skills/` and `scripts/` directories for local execution artifacts.

## Steps
1. Open `academy/anthropic-academy.md` and pick the relevant tracks for the audience.
2. For each track:
   - map it to one of the active delivery modules in `academy/syllabus.md`;
   - decide one of:
     - skill discovery path (new behavior pattern),
     - deterministic path (script/pathable workflow),
     - publishing path (open learning artifact).
3. Convert the track into:
   - one `skills/*.md` wrapper when behavior repeats across projects;
   - one `academy/*.md` module when training is the deliverable.
4. Use `/skill-factory --mode harden` when a skill stabilizes and should become deterministic.
5. For deterministic tasks, add or update a script under `scripts/` and keep the skill as a thin wrapper.
6. Update or create evidence in:
   - `llm-full.txt` (if scope becomes stable doctrine),
   - `decisions/` (if model/provider adoption changes),
   - `academy/syllabus.md` delivery notes (if delivery sequence changes).
7. Run `/quality-cycle` after publishing new academy artifacts and update trigger smoke tests for `/anthropic-academy`.

## Output
- One mapped implementation plan per selected module.
- One new or updated skill wrapper (if a process is reused at least once per quarter).
- One updated academy artifact in `academy/`.

## Suggested import recipes
- Foundations first: map `Claude 101` + `AI Fluency` into Module 2 and produce one reusable language policy checklist.
- Builder lane: map `Claude Code in Action` into Module 3 + one engineering runbook skill.
- Platform lane: map API course into Module 13 and one provider-routing decision artifact.
- Operations lane: map enterprise adoption tracks into Module 10 and `/incident-operating`.

## Trigger tests
- Positive
  - "map anthropic academy tracks into syllabus"
  - "create a skill from claude code in action"
  - "build enterprise rollout module from anthropic track"
- Negative
  - "refresh provider catalog only"
  - "update web quality checks only"
  - "patch provider-catalog sources without academy mapping"

## Trigger tests
- Positive
  - "import anthropic academy into syllabus"
  - "adapt claude code in action for clients"
  - "build a cli-first version of Anthropic Academy module"
- Negative
  - "run a provider catalog sync"
  - "check web quality only"
  - "create agent profile from vendor docs only"
