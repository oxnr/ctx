# Contributing To ctx

Thanks for contributing.

This repository is intentionally simple: static pages, markdown artifacts, and explicit scripts. Keep it that way.

## Before You Open A PR

1. Preview the site locally.
2. Run `./scripts/web-quality-audit.sh .`.
3. If you changed public pages or generation logic, run `./scripts/quality-cycle.sh . 0 9999`.
4. If you touched provider-catalog inputs or stack generation, regenerate the stack page with `./scripts/sync-provider-catalog.sh` or `./scripts/render-stack-page.py`.
5. Update docs when repository structure, workflows, or contributor expectations changed.

## Repository Rules

- Keep public routes extensionless.
  Route content belongs in `foo/index.html`; root `foo.html` files are redirect shims only.
- Do not hand-edit generated stack content.
  `stack/index.html` is generated from `provider-catalog/index.md` through `scripts/render-stack-page.py`.
- Prefer plain text.
  Markdown, shell, HTML, CSS, and small deterministic scripts are preferred over opaque build tooling.
- Keep canonical sources clear.
  `academy/syllabus.md` is the active syllabus, `provider-catalog/index.md` is the provider truth layer, and `llm-full.txt` is the machine-oriented intent file.
- Use explicit checks, not hidden hooks.
  There are no mandatory git hooks in this repo. If you automate locally, use the existing scripts rather than inventing parallel behavior.

## Good Contributions

- clearer public copy
- better structure in `academy/` and `skills/`
- accessibility and quality fixes for static pages
- stronger sync, audit, and generation scripts
- better source maps and provenance for provider or agent-library data

## Pull Request Notes

Include:

- what changed
- why it changed
- what commands you ran to verify it
- whether any generated files were refreshed

If your PR changes contributor workflow, update `README.md` or this file in the same PR.
