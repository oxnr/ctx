# CTX Value-Chain Refresh Audit

This file records public, source-backed model and catalog refreshes. It must not include private bookmark records, private workflow artifacts, secrets, or user-specific raw data.

## 2026-06-29 - Structural Guardrails

Status: completed.

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

- Provider catalog freshness is handled by the provider-catalog sync flow; the snapshot is intentionally OpenRouter-based rather than a universal model registry.
- `value-chain/learn-content.js` and `/learn` remain handcrafted academy layers; only model-changing concepts were reconciled in this refresh.
- Several local-runner and research rows still need deeper source review before stronger claims should be made public.

## 2026-06-29 - Research And Agent Concepts Wave

Status: completed.

Changes incorporated:

- Added NVFP4 Training to capture the low-precision training direction that links compute constraints to pre-training economics.
- Added Muon Optimizer and Native Sparse Attention as pre-training research signals that affect optimizer choice and long-context architecture, not just downstream app tooling.
- Added RLVR Reasoning and Long-Context RL as post-training concepts because verifiable reward signals are now central to reasoning-model capability growth.
- Added Test-Time Scaling to represent the inference/routing shift where harder prompts can buy more reasoning compute at runtime.
- Added Anthropic Managed Agents, Agent Skills, Effective Context Engineering, and Code Execution With MCP as agent runtime concepts that clarify the harness/orchestration/integration boundary.
- Added Constitutional Classifiers, Circuit Tracing, and Eval Awareness to the eval/safety layer because they change the safety and observability model around agent deployment.

Primary sources added:

- `https://arxiv.org/abs/2509.25149`
- `https://arxiv.org/abs/2502.16982`
- `https://arxiv.org/abs/2502.11089`
- `https://arxiv.org/abs/2501.12948`
- `https://arxiv.org/abs/2501.12599`
- `https://arxiv.org/abs/2501.19393`
- `https://www.anthropic.com/engineering/managed-agents`
- `https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills`
- `https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents`
- `https://www.anthropic.com/engineering/code-execution-with-mcp`
- `https://www.anthropic.com/research/constitutional-classifiers`
- `https://www.anthropic.com/research/tracing-thoughts-language-model`
- `https://arxiv.org/abs/2505.23836`

Validation evidence:

- `node scripts/check-value-chain.mjs` returned 11 layers, 420 tools, 0 errors. Existing multi-layer subcategory warnings remain tracked as model-quality backlog.
- `./scripts/quality-cycle.sh . 0 0` passed on 2026-06-29T19:54:19Z with 0 public-site issues and 0 public-site warnings.

Deferred:

- Disaggregated MoE inference details, OpenAI GPT-5 routing, and broad provider model-version promotion remain separate product/provider passes so the public model does not become a grab bag of launch notes.
- The academy content can still expand later into deeper teaching modules; this refresh only reconciled the public learn surface where the model changed.

## 2026-06-29 - Learn Surface Reconciliation

Status: completed.

Changes incorporated:

- Reconciled `/learn` and `value-chain/learn-content.js` with the research/concept wave at a teaching-outline level.
- Added learning bullets for low-precision training, optimizer/attention research, RLVR, long-context RL, test-time scaling, effort routing, managed-agent execution/durability/oversight, agent skills, MCP-backed execution, context engineering, eval awareness, circuit tracing, and constitutional classifiers.
- Removed stale hard-coded public cost examples from `/learn`.
- Removed the outdated Qwen3-Coder-Next 80B/3B-active claim from inline learn content and replaced it with a more general attention-evolution explanation.

Primary sources:

- Same primary sources as the Research And Agent Concepts Wave above; this pass did not add new catalog claims.

Validation evidence:

- `./scripts/quality-cycle.sh . 0 0` passed on 2026-06-29T20:05:35Z with 420 value-chain tools, 0 value-chain errors, 0 public-site issues, and 0 public-site warnings.

Deferred:

- A full rewrite of `/learn` into a generated artifact remains out of scope for this pass.
- The academy syllabus can still be expanded later into dedicated modules for test-time scaling, managed agents, and AI safety/interpretability.

## 2026-06-29 - Provider Catalog And Kimi K2 Pass

Status: completed.

Changes incorporated:

- Refreshed `provider-catalog/index.md` from the live OpenRouter model API at 2026-06-29T20:13:42Z.
- Updated provider counts from 346 models / 57 providers to 338 models / 56 providers.
- Preserved `provider-catalog/sync-log.md` as the audit trail for generated provider snapshots.
- Added Kimi K2 to the value-chain model as a canonical Moonshot AI open-weight MoE model family covering pre-training and post-training.

Primary sources:

- `https://openrouter.ai/api/v1/models`
- `https://arxiv.org/abs/2507.20534`
- `https://github.com/MoonshotAI/Kimi-K2`

Validation evidence:

- `./scripts/quality-cycle.sh . 0 0` passed on 2026-06-29T20:16:35Z with 421 value-chain tools, 0 value-chain errors, 0 public-site issues, and 0 public-site warnings.
- The value-chain checker still reports existing multi-layer subcategory coverage warnings as model-quality backlog rather than hard structural failures.

Deferred:

- Provider catalog entries remain a live snapshot, not a universal market map.
- Individual provider model-version names should only become value-chain rows when backed by primary provider sources or technical reports.

## 2026-06-29 - Goal Closure Audit

Status: completed.

Completion evidence:

- Focused research, open-source systems, industry/product, and model-critique passes were incorporated through PRs #2, #3, #4, and #5.
- Every new value-chain row has a `url` or `github` source and a short public rationale in its `desc`.
- Papers, repositories, products, concepts, and live provider snapshots are distinguished through `type`, source URL, and audit notes.
- `value-chain/data.js` is the canonical source; `value-chain/companies.md` is generated from it and checked for drift.
- Duplicate tool IDs, invalid layer references, missing source URLs, and generated catalog drift are checked by `scripts/check-value-chain.mjs`.
- The public refresh intentionally excludes private bookmark intake, raw user data, secrets, and private workflow artifacts.
- Live site verification confirmed deployed `value-chain/data.js`, `value-chain/companies.md`, `value-chain/refresh-audit.md`, and `provider-catalog/index.md` after the final provider/Kimi merge.

Remaining model-quality backlog:

- Existing multi-layer subcategory coverage warnings should be cleaned up in a separate taxonomy pass.
- Provider model-version rows should be promoted only when primary provider sources or technical reports justify them.
- Deeper `/learn` modules for test-time scaling, managed agents, safety, and interpretability remain future editorial work.
