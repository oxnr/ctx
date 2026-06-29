# CTX Value-Chain Refresh Audit

This file records public, source-backed model and catalog refreshes. It must not include private bookmark records, private workflow artifacts, secrets, or user-specific raw data.

## 2026-06-29 - Structural Guardrails

Status: in progress.

Changes incorporated:

- Made `value-chain/data.js` the canonical source for the 11-layer value-chain model.
- Regenerated `value-chain/companies.md` from `value-chain/data.js` so the markdown catalog follows the same 11 layers as the explorer.
- Added source links to generated catalog rows using each tool's `github` or `url` field.
- Added `scripts/check-value-chain.mjs` to fail on duplicate tool IDs, invalid layer references, missing source URLs, and catalog drift.
- Added `scripts/render-companies-catalog.mjs` for deterministic catalog regeneration.
- Wired the value-chain check into `scripts/quality-cycle.sh`.

Corrections:

- Merged duplicate `Superpowers` rows into one canonical entry.
- Renamed the second `pi-autoresearch` entry to `pi-autoresearch-davebcn87` because it refers to a different repository than Shopify's `pi-autoresearch`.
- Added missing source URLs for `RotorQuant` and `LPM 1.0`.

Primary sources added or normalized:

- `https://github.com/obra/superpowers`
- `https://github.com/Shopify/pi-autoresearch`
- `https://github.com/davebcn87/pi-autoresearch`
- `https://github.com/scrya-com/rotorquant`
- `https://www.scrya.com/rotorquant`
- `https://arxiv.org/abs/2604.07823`

First-wave public additions:

- Added NVIDIA Dynamo as a disaggregated reasoning-inference framework.
- Added ComfyUI as a high-signal visual generation workflow product/tool.
- Added LangGraph as a durable, stateful agent workflow framework.
- Added OpenAI Codex CLI and Gemini CLI as open-source coding-agent harness/product examples.
- Added Mem0 and Graphiti as memory/context systems.
- Added MCP Servers and Agent2Agent as integration/interoperability infrastructure.
- Added BrowseComp, Terminal-Bench 2, and SWE-Bench Pro to the eval layer.

Corrections after model critique:

- Removed unsupported wording that xAI models are trained on X/Twitter data.
- Corrected Qwen3-Coder from an 80B/3B-active Qwen3-Coder-Next description to the official Qwen3-Coder 480B/35B-active family description.
- Corrected Meta-Harness from an invalid arXiv URL to `https://arxiv.org/abs/2603.28052` and labeled it as research.
- Labeled LPM 1.0 as research rather than open source because no public repository is represented in the catalog row.
- Removed volatile star-count claims from oMLX and Dexter descriptions.
- Neutralized an unsourced CodeWall/McKinsey numeric incident claim in the catalog and learn content.
- Separated `scripts/sync-provider-catalog.sh` from stack page generation so provider sync does not overwrite the `/stack` redirect.

Primary sources added or normalized:

- `https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/`
- `https://github.com/ai-dynamo/dynamo`
- `https://github.com/Comfy-Org/ComfyUI`
- `https://github.com/langchain-ai/langgraph`
- `https://github.com/openai/codex`
- `https://github.com/google-gemini/gemini-cli`
- `https://github.com/mem0ai/mem0`
- `https://github.com/getzep/graphiti`
- `https://github.com/modelcontextprotocol/servers`
- `https://github.com/a2aproject/A2A`
- `https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/`
- `https://openai.com/index/browsecomp/`
- `https://arxiv.org/abs/2601.11868`
- `https://arxiv.org/abs/2509.16941`
- `https://qwenlm.github.io/blog/qwen3-coder/`
- `https://x.ai`
- `https://arxiv.org/abs/2603.28052`

Validation evidence:

- `node scripts/check-value-chain.mjs` returned 11 layers, 407 tools, 0 errors. It also reported existing taxonomy warnings for multi-layer tools without subcategories owned by every direct layer; these are tracked as model-quality backlog rather than hard structural failures.
- `./scripts/quality-cycle.sh . 0 0` passed on 2026-06-29T19:47:11Z with 0 public-site issues and 0 public-site warnings.

Deferred:

- Provider catalog freshness is still OpenRouter-snapshot based and should become a separate provider-flow refresh.
- `value-chain/learn-content.js` remains a handcrafted academy layer; it needs a later source-backed reconciliation pass against `value-chain/data.js`.
- Several local-runner and research rows still need deeper source review before stronger claims should be made public.
