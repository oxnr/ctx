# Skill: /provider-stack

## Objective
Build an end-to-end AI stack definition that connects providers, runtime tools, and team workflows.

## Inputs
- Use-case profile (engineering, support, ops, product, or sales)
- Security and data residency constraints
- SLA requirements (latency, budget, quality thresholds)
- Team tool comfort (terminal-first, IDE-first, automation-first)

## Steps
1. Define stack categories and priorities for this engagement:
   - text completion and coding
   - multimodal (vision, image, audio)
   - retrieval and memory
   - governance and audit
2. Build a provider map from the latest registry (`provider-catalog/index.md`):
   - core providers for strategic use
   - benchmark/backup providers
   - model families by modality and risk
3. Choose a routing architecture:
   - primary provider/provider family
   - fallback provider
   - local/private alternatives
   - cost and throughput controls
4. Define the terminal and coding execution layer:
   - terminal standard (iTerm2/Warp/Terminal/Windows Terminal)
   - session orchestration (tmux/SSH/agent runner sessions)
   - agent executors (Claude Code, Codex, Cursor, Windsurf, OpenHands)
   - protocol adapter policy: keep MCP/other adapters optional and replaceable
5. Define supporting tooling by lane:
   - orchestration/aggregation: OpenRouter, LiteLLM, vLLM, llama.cpp
   - image generation: OpenAI image, Gemini image, Midjourney, SDXL/FLUX providers
   - readouts/observability: logs, traces, dashboards, eval suites
6. Define implementation policy:
   - per-task output contract
   - local first rule (never expose sensitive context to unvetted endpoints)
   - explicit rejection/rollback criteria
   - include memory compression policy:
     - keep raw canonical artifacts for critical lanes
     - allow compacted artifacts only where fidelity risk is acceptable
     - pin compaction model/version and validate outputs before handoff
7. Define incident + change policy:
   - provider outage path
   - model deprecation path
   - migration notes for new model versions
8. Add explicit watchlist normalization:
   - map fuzzy product names (for example "venice/venesis" style naming or other aliases) to a canonical source.
   - add missing providers in `provider-catalog/sources.md` before use.

## Output
- `decisions/provider-stack.md` (architecture and routing notes)
- `/provider-catalog-update` plan if catalog drift is detected
- terminal and skill command map for team handoff

## Note
Use this with `provider-catalog` updates when new model versions or providers appear (including `OpenAI`, `Claude`, `Gemini`, `Grok`, `Qwen`, `Mistral`, `Llama`, image models, and specialist providers such as Venice-family models).
