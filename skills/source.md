# Skill: /source

## Objective
Ingest external content — individual URLs, pasted text, GitHub repos, or X bookmarks in batch — analyze through CTX's 11-layer value chain, recommend CTX artifact updates, and route non-AI content to Obsidian brain.

## Executable form
`.claude/commands/source.md` — Claude Code native skill, invoked via `/source` in conversation.

## Modes

### Single mode
`/source <url or text>` — analyze one or more URLs/texts. Deep-fetches linked GitHub repos and external URLs from tweets.

### Bookmarks mode
`/source bookmarks [--limit N] [--scroll-rounds M] [--since DURATION]`
Fetches X bookmarks, deduplicates, triages (AI → CTX analysis, general → Obsidian, ephemeral → skip), produces consolidated run summary.

## Workflow summary
1. **Gather** — Fetch via agent-browser (X), WebFetch (web), gh/WebFetch (GitHub repos). Deep-fetch linked repos/URLs from tweets.
2. **Triage** (bookmarks) or **Clarify** (single) — categorize as AI / general / skip.
3. **Read CTX state** — Load `value-chain/data.js`, `companies.md`, `provider-catalog/index.md`, `agent-library/index.md`, `academy/syllabus.md`, `llm-full.txt`.
4. **Classify** — Map to value chain layers and subcategories. Rate significance.
5. **Delta analysis** — Compare against current CTX artifacts.
6. **Output** — Intelligence brief (single) or consolidated run report + Obsidian note (bookmarks).
7. **Offer execution** — User approves which updates to apply.

## State files (bookmarks mode)
- `.claude/bookmarks/processed.txt` — dedup log
- `.claude/bookmarks/runs/YYYY-MM-DD.md` — run summaries
- `/Users/onr/Projects/brain/Knowledge/x-bookmarks-YYYY-MM-DD.md` — general knowledge overflow

## Prerequisites
- `agent-browser` globally installed with X session cookies
- Session name: `x-session`

## Downstream handoffs
- `/provider-catalog-update` for provider/model syncs
- `/skill-factory` for new skills
- `/internet-research` for deeper sourcing
