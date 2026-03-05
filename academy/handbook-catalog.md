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
