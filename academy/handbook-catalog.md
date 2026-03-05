# AI Engineering Handbook Integration

This practice pulls from public AI Engineering field resources and uses only what is directly operational.

## Active Source
- The AI Engineering Handbook is used as a reference for curriculum breadth, not as a rigid syllabus.
- Useful parts are converted into modules and open lab artifacts.

## Core Book Inputs
- AI Engineering — Chip Huyen
- Designing Machine Learning Systems — Burkov
- Build a Large Language Model from Scratch — Raschka

## Project Inputs (for open labs)
- RAG chatbot
- Custom AI agent
- Fine-tuning on private data
- Semantic search engine
- Text-to-SQL application
- LLM-powered API deployment
- AI-powered document Q&A

## Delivery Rule
- Every project includes one open lab from this catalog.
- Every lab ends in:
  - one skill.md playbook,
  - one markdown implementation plan,
  - one evaluation/checklist artifact.

## Community Inputs
- Follow active communities and newsletters for updates.
- Pull only what changes behavior or design decisions.
- Convert updates into reusable prompts or workflow guardrails when useful.
- Add specialist role libraries as input for delivery planning (agent persona stability, escalation rules, handoff patterns).

## Harness Engineering Adaptations
- Repository-first discipline:
  - one place for active plans (`README` + `llm-full.txt`)
  - one place for repeatable workflows (`skills/`)
  - one place for curricular outputs (`academy/`)
- Agent legibility:
  - avoid opaque instructions
  - keep command intent and expected artifacts explicit
  - keep outputs short, structured, and machine-readable where possible
- Operational reliability loop:
  - execute, validate, recover, and retry as a standard cadence
  - prioritize cleanup passes over ad-hoc rewrites
  - preserve assumptions and boundaries as decisions notes

## Specialist Agent Library Input
- External specialist library used as starter corpus:
  - [Agency Agents](https://github.com/msitarzewski/agency-agents)
- Repository updates are mirrored locally via:
  - `scripts/sync-agent-library.sh`
  - skill `/agent-library-update`
- Synced artifacts are stored in:
  - `agent-library/`

## Provider and Model Inputs
- Active provider catalog for each engagement:
  - `provider-catalog/index.md`
  - `provider-catalog/sources.md`
  - `scripts/sync-provider-catalog.sh`
- Use `/provider-catalog-update` after any provider release wave, outage, or contract update.
- Cross-functional tool mapping includes:
  - terminal + shell tooling
  - coding assistants
  - image and media generation tooling
  - model and context observability stacks
- Academy module for team training:
  - `academy/provider-stack.md`
- Interface strategy reference:
  - MCP and similar protocols are treated as optional adapters; CLI + filesystem remain the portability layer.

## Quality and delivery references
- Practical web-quality guardrails are pulled from:
  - [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills)
- This repo informs practical pre-release checks in `skills/web-quality-audit.md`.

## Communication quality references
- Optional publication polish reference:
  - [blader/humanizer](https://github.com/blader/humanizer)
- Use case:
  - natural language polish for open modules and public academy content.
- Constraint:
  - do not use for evidence artifacts (incidents, decisions, model/provider records).
- Follow-up checks:
  - `/quality-cycle`
  - `/web-quality-audit` when output is public.

## Learning platform references
- Anthropic Academy (Skilljar) is used as a high-signal curriculum source for:
  - prompt design,
  - Claude Code workflow,
  - MCP and integration boundaries,
  - enterprise adoption and enablement patterns.
- Local adaptations are tracked in:
  - `academy/anthropic-academy.md`
  - `skills/anthropic-academy.md`

## Anthropic Academy curriculum extraction (ctx-specific)
- High-signal mapping currently maintained as:
  - foundation, developer workflow, integration, operations, and trainer tracks;
  - no dependency on Anthropic-specific orchestration layer.
- Operational conversion pattern:
  1) map selected course to `academy/syllabus.md`;
  2) create local skill wrappers where behavior is repeatable;
  3) move only deterministic routines into `scripts/`.
- Current implementation stance:
  - MCP content is treated as optional runtime glue.
  - CLI + local markdown + git remain the stable portability layer.
