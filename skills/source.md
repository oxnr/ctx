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

### Raw feed mode
`BOOKMARK_FEED=/path/to/bookmarks.jsonl node scripts/intake-raw-bookmarks.mjs`
Reads the BirdClaw JSONL feed directly, expands public links with a local cache, extracts public GitHub/source candidates, and writes ignored local reports under `reports/bookmark-intake/`.

## Workflow summary
1. **Gather** — Prefer raw BirdClaw JSONL for backfills and scheduled runs. Use agent-browser only for interactive sampling. Deep-fetch linked repos/URLs from tweets.
2. **Triage** (bookmarks) or **Clarify** (single) — categorize as AI / general / skip.
3. **Read CTX state** — Load `value-chain/data.js`, `companies.md`, `provider-catalog/index.md`, `agent-library/index.md`, `academy/syllabus.md`, `llm-full.txt`.
4. **Classify** — Map to value chain layers and subcategories. Rate significance.
5. **Security gate** — Flag credential/account automation, malware/abuse signals, exploit kits, and offensive-security repos before recommendation. Use DeepSec for codebases being trusted and SkillSpector for agent-skill packages.
6. **Delta analysis** — Compare against current CTX artifacts.
7. **Output** — Intelligence brief (single) or consolidated run report + Obsidian note (bookmarks).
8. **Offer execution** — User approves which updates to apply.

## State files (bookmarks mode)
- `.claude/bookmarks/processed.txt` — dedup log
- `.claude/bookmarks/runs/YYYY-MM-DD.md` — run summaries
- `/Users/onr/Projects/brain/Knowledge/x-bookmarks-YYYY-MM-DD.md` — general knowledge overflow
- `reports/bookmark-intake/raw-bookmark-candidates.json` — ignored local raw-feed candidate report

## Prerequisites
- Raw feed mode: local BirdClaw `feeds/bookmarks.jsonl` or private workflow checkout of the bookmark feed.
- Browser mode: `agent-browser` globally installed with X session cookies, session name `x-session`.

## Downstream handoffs
- `/provider-catalog-update` for provider/model syncs
- `/skill-factory` for new skills
- `/internet-research` for deeper sourcing
