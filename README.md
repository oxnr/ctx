# ctx

Local-first AI transformation practice.

Public site, public curriculum, and repo-native operating system for durable AI work.

[ctx.earth](https://ctx.earth) · [Repository](https://github.com/oxnr/ctx) · [Contributing](./CONTRIBUTING.md) · [Security](./SECURITY.md) · [Code license](./LICENSE) · [Content license](./LICENSE-CONTENT)

## What This Repository Is

`ctx` is both the public website for the practice and the working repository behind it.

It combines:

- a static site published at `ctx.earth`
- an open academy in markdown
- repo-local skills and operating playbooks
- deterministic sync and audit scripts
- a live provider catalog that drives the public stack page
- an agent library index for reusable role and workflow references

The operating thesis is simple: models change; context, contracts, and harnesses should survive.

## Why It Exists

- Most AI implementations are still too tool-bound and too vendor-bound.
- The durable layer is not the model; it is the operating harness around the model.
- Teams need portable context artifacts, explicit workflows, and public learning material they can keep after any engagement ends.
- The repository is meant to stay legible to both humans and agents: plain text first, explicit scripts, minimal hidden behavior.

## What Ships Here

```text
academy/*.md                          curriculum source
skills/*.md                           reusable playbooks and operating rules
provider-catalog/*.md                 live provider inventory
scripts/render-stack-page.py          stack page generator
stack/index.html                      generated public stack page
index.html + thesis/ + practice/      public site routes
learn/                                public academy route
scripts/web-quality-audit.sh          static-site audit
scripts/quality-cycle.sh              release quality gate
agent-library/*.md                    local role and workflow reference set
reports/quality-audit/                generated local audit output
```

## Repository Map

| Path | Role | Notes |
| --- | --- | --- |
| `index.html` | Landing page | Public homepage for the practice |
| `thesis/index.html` | Thesis page | Why the practice exists |
| `practice/index.html` | Practice page | Build areas and operating principles |
| `stack/index.html` | Generated stack page | Regenerated from `provider-catalog/index.md` |
| `learn/index.html` | Academy page | Public learning surface |
| `academy/` | Curriculum source | Canonical syllabus and role mapping |
| `skills/` | Playbooks | Markdown-first operating instructions for repeatable work |
| `scripts/` | Deterministic automation | Sync, render, indexing, and quality scripts |
| `provider-catalog/` | Live provider registry | Source of truth for public stack snapshots |
| `agent-library/` | Reusable role references | Local index, sources, and sync history |
| `llm-full.txt` | Machine-oriented project intent | Repo context for agent onboarding and alignment |
| `reports/quality-audit/` | Local generated artifacts | Gitignored audit outputs |

## File Conventions

- Public routes are extensionless: `/`, `/thesis`, `/practice`, `/stack`, `/learn`.
- Route content lives in `foo/index.html`.
- Public pages should not ship root `thesis.html`, `learn.html`, or `stack.html` files because GitHub Pages will treat `/thesis`, `/learn`, and `/stack` as those files instead of the directory routes.
- Legacy `.html` page URLs are handled through [`404.html`](./404.html).
- `stack/index.html` is generated. Do not hand-edit public provider/model claims there.
- `provider-catalog/index.md` is the canonical source for the live stack snapshot.
- `academy/syllabus.md` is the single active curriculum sequence.
- `skills/` are markdown playbooks, not framework plugins or package-manager artifacts.
- `llm-full.txt` is the repo's machine-readable intent file. It is not the public-facing README.

## No Hidden Build Step

This repository intentionally avoids a framework build pipeline.

- The public site is plain HTML, CSS, and a small amount of JavaScript.
- The operating artifacts are markdown, shell scripts, and one small Python generator.
- GitHub Pages serves the site directly.
- There are no mandatory Git hooks. All quality and generation steps are explicit commands in `scripts/`.

If you want local automation, wire the existing scripts into your own pre-commit or pre-push flow rather than introducing hidden repo behavior.

## Local Preview And Checks

Serve the site locally:

```sh
python3 -m http.server 8000
```

Run the public-site quality audit:

```sh
./scripts/web-quality-audit.sh .
```

Run the recurring quality gate:

```sh
./scripts/quality-cycle.sh . 0 9999
```

Refresh the provider catalog and regenerate the public stack page:

```sh
./scripts/sync-provider-catalog.sh
```

Refresh the local agent library index and source map:

```sh
./scripts/sync-agent-library.sh
```

## Open Source Model

Code and operational scripts are open under MIT.

Written content, curriculum material, and site copy are open under CC BY 4.0.

See:

- [`LICENSE`](./LICENSE)
- [`LICENSE-CONTENT`](./LICENSE-CONTENT)

## Contribution Model

Contributions are welcome, especially in these areas:

- content clarity and curriculum improvements
- static-site quality, accessibility, and copy fixes
- provider catalog and stack-page generation improvements
- agent workflow and playbook quality
- documentation that makes the repository easier for outsiders to understand and reuse

Before opening a pull request, read [CONTRIBUTING.md](./CONTRIBUTING.md).

Security reporting guidance lives in [SECURITY.md](./SECURITY.md).

## Deployment

`ctx.earth` is intended to run on GitHub Pages with direct DNS, not registrar-side forwarding.

- Apex `ctx.earth` should use only the four GitHub Pages A records.
- `www` should be a `CNAME` to `oxnr.github.io`.
- The repo keeps the custom domain in [`CNAME`](./CNAME).
- Registrar redirect records should not be used for the production host.

## Related Canonical Files

- [`academy/syllabus.md`](./academy/syllabus.md) for curriculum order
- [`provider-catalog/index.md`](./provider-catalog/index.md) for live provider inventory
- [`agent-library/sources.md`](./agent-library/sources.md) for agent-library provenance
- [`agent-library/sync-log.md`](./agent-library/sync-log.md) for sync history
- [`llm-full.txt`](./llm-full.txt) for machine-oriented repo intent
