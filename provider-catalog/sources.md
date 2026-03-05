# Provider Catalog Sources

## Source strategy
- Primary auto-refresh source: `https://openrouter.ai/api/v1/models`
- OpenAI source anchor: `https://platform.openai.com/docs/models`
- Anthropic source anchor: `https://docs.anthropic.com/`
- Google source anchor: `https://ai.google.dev/gemini-api/docs/models`
- Secondary provider-specific sources (manual verification when needed)
  - OpenAI model docs and changelog
  - Anthropic model pages
  - Google Gemini docs
  - xAI model pages
  - Cohere, Mistral, DeepSeek, Qwen, Perplexity, Nvidia, and other major provider model pages
- Manual specialist sources (non-standard model families and image generators)
  - Midjourney
  - Stability AI
  - Replicate and other media-generation providers
  - Open-source/local serving platforms and local model registries

## Sync behavior
- The catalog script prefers machine-readable endpoints and API sources when available.
- If an endpoint is private/unavailable, the sync stays at best-effort with a clear timestamped gap note.
- The catalog is markdown-first to preserve portability and reviewability.
- Add normalization notes for fuzzy names (for example venice/venesis-style references) before routing.

## Current trust priorities
1. OpenAI, Anthropic, Google, xAI
2. major open-source ecosystem providers (Qwen, Llama, Mistral, DeepSeek, etc.)
3. workflow-specific providers (image/speech/tools)
4. local and private inference providers
