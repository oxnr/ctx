# Skill: /internet-research

## Objective
Find and capture fresh, source-backed model and provider updates before updating the registry.

## Inputs
- Provider names or model families under review
- Use-case context (coding, text, multimodal, retrieval, image)
- Urgency / release window

## Steps
1. Use official sources first:
   - OpenAI model announcements and docs
   - Anthropic model pages
   - Google Gemini model pages
   - xAI and other provider release notes
2. Confirm version names and availability directly from source lines/pages.
3. Capture only high-signal changes:
   - model id/version bump
   - API compatibility changes
   - hard deprecations
4. Check image ecosystem updates:
   - OpenAI image, Gemini image previews, Midjourney updates, major diffusion platforms
5. If no official changelog exists, mark as "watch with manual confirmation."
6. Feed confirmed findings into:
   - `provider-catalog/sources.md`
   - `provider-catalog/index.md`
   - latest `/provider-catalog-update` plan

## Output
- `provider-catalog/sources.md` updates with evidence links
- `decisions/provider-research-notes.md` (or equivalent) if this changes routing
- `/provider-stack` refresh recommendation
