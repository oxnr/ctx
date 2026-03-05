# Skill: /web-quality-audit

Reference: adapted from practical checks in [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills), simplified for this repo’s markdown-first, deterministic tooling model.

## Objective
Run a practical web-quality audit for performance, accessibility, SEO, and baseline best practices before release.

## Inputs
- Target path: project directory, html file, or static site output.
- Target URLs (optional) if a runtime check is possible.
- Optional: `lighthouse` CLI for full metrics (if installed).

## When to use
- "audit my site", "quality review", "lighthouse", "check web quality", "web quality issues", "accessibility and performance".

## Steps
1. Run the local fast audit:
   - `./scripts/web-quality-audit.sh <target_path>`
   - inspect output for structural issues.
2. Classify by area:
   - **Critical** (security, broken UX accessibility blockers, missing meta fundamentals)
   - **High** (core web vitals regressions, major a11y errors, broken mobile/viewport issues)
   - **Medium** (performance and SEO cleanups)
3. If runtime evaluation is possible:
   - optionally run `lighthouse` on the public URL and add metrics snapshot.
4. Produce a priority fix plan:
   - quick wins first
   - then core UX/security fixes
   - then polish.
5. Attach an acceptance checklist:
   - no critical findings remain open
   - performance and accessibility checks pass at configured thresholds.

## Fast-check thresholds (adapted from Lighthouse guidance)
- Core Web Vitals targets:
  - LCP ≤ 2.5s
  - INP ≤ 200ms
  - CLS ≤ 0.1
- Lighthouse-style targets:
  - Performance ≥ 90
  - Accessibility = 100
  - Best Practices ≥ 95
  - SEO ≥ 95
- Structural quality:
  - Doctype present
  - `<html lang>` present
  - viewport and charset defined
  - unique title and valid heading structure
- Accessibility:
  - all key images have meaningful `alt` text or explicit decorative alt
  - keyboard navigation paths remain operable
  - focus states visible

## Output
- `skills` run report: categorized findings by Critical / High / Medium / Low
- script summary:
  - issue count
  - warning count
  - top 10 items with path and repair hint

Use `/quality-cycle` to enforce a recurring cadence on this audit.

## Trigger tests
- Positive
  - `/web-quality-audit`
  - "run web quality review on this site"
  - "is there an accessibility issue in the hero section?"
- Negative
  - run outside web scope should request target path
  - no findings should produce a clean pass report
  - empty target should fail with actionable usage guidance
