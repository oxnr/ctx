# Skill: /provider-catalog-update

## Objective
Keep the provider/model catalog current as model releases, outages, and deprecations evolve.

## Inputs
- Current `provider-catalog/index.md`
- `provider-catalog/sources.md`
- Current use-case requirements (coding, image, text, voice, retrieval, governance)

## Steps
1. Run the provider sync script:
   - `./scripts/sync-provider-catalog.sh`
2. Validate key outputs:
   - top providers and latest model IDs
   - open-source/local model entries (if present)
   - image/multimodal model entries
3. Record updates in `provider-catalog/sync-log.md` with timestamp and source.
4. If provider changes are high-impact:
   - update `skills/provider-stack.md`
   - update the relevant decision document in `/decisions` or the engagement notes
5. Add a fallback note:
   - if critical model is missing/unavailable, define the fallback provider immediately
6. Keep this file-only and markdown:
   - no binary dependency
   - no manual rewrite of entire provider listings

## Output
- Updated `provider-catalog/index.md`
- Updated `provider-catalog/sync-log.md`
- Updated deployment strategy note in `decisions/` (if required)
