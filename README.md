# ctx

AI operating architecture for durable AI systems.

Public site, public academy, and repo-native operating system for local-first AI work.

[ctx.earth](https://ctx.earth) · [Repository](https://github.com/oxnr/ctx) · [Contributing](./CONTRIBUTING.md) · [Security](./SECURITY.md) · [Code license](./LICENSE) · [Content license](./LICENSE-CONTENT)

## What This Repository Is

`ctx` is both the public website for the practice and the working repository behind it.

It combines:

- a static site published at `ctx.earth`
- a value-chain map used to explain the AI stack from compute to products
- a thesis page describing build areas, operating principles, and the code-explosion problem
- an open academy in markdown
- repo-local skills and operating playbooks
- deterministic sync and audit scripts
- a live provider catalog for model/provider snapshot work
- an agent library index for reusable role and workflow references

The operating thesis is simple: models change; context, contracts, routing, workflows, and evals should survive.

The value chain is a teaching and comparison model, not a strict ontology. Many tools and companies span multiple layers.

## Why It Exists

- Most AI implementations are still too tool-bound and too vendor-bound.
- The durable layer is not the model; it is the operating harness around the model.
- Teams need portable context artifacts, explicit workflows, and public learning material they can keep after any engagement ends.
- The highest-leverage work usually sits around generation, not inside it: routing, orchestration, context, integrations, and eval.
- The repository is meant to stay legible to both humans and agents: plain text first, explicit scripts, minimal hidden behavior.

## Public Surfaces

| Route | Role | Notes |
| --- | --- | --- |
| `/` | Home / value chain | Value flow in AI — interactive 10-layer map, explorer, and provider landscape snapshot |
| `/thesis` | Thesis | Build areas, operating principles, and code-explosion framing |
| `/learn` | Academy | Public learning surface mapped to the value chain |
| `/glossary` | Glossary | Shared vocabulary across the site |
| `/practice` | Compatibility route | Currently redirects to `/thesis` |
| `/stack` | Compatibility route | Currently redirects to `/` |
| `/value-chain` | Compatibility route | Currently redirects to `/` |

## What Ships Here

```text
academy/*.md                          curriculum source
skills/*.md                           reusable playbooks and operating rules
provider-catalog/*.md                 live provider inventory
agent-library/*.md                    local role and workflow reference set
value-chain/*                         explorer data, taxonomy assets, and redirects
index.html + thesis/ + learn/         primary public site routes
glossary/                             public glossary route
scripts/sync-provider-catalog.sh      provider sync + derived artifact refresh
scripts/sync-agent-library.sh         agent-library sync
scripts/web-quality-audit.sh          static-site audit
scripts/quality-cycle.sh              recurring release quality gate
reports/quality-audit/                generated local audit output
```

## Repository Map

| Path | Role | Notes |
| --- | --- | --- |
| `index.html` | Landing page | Value flow in AI — value-chain map and durable AI operating systems framing |
| `thesis/index.html` | Thesis page | Why the practice exists and what it builds |
| `learn/index.html` | Academy page | Public learning surface |
| `glossary/index.html` | Glossary page | Shared terminology |
| `practice/index.html` | Compatibility redirect | Redirects to `/thesis` |
| `stack/index.html` | Compatibility redirect | Redirects to `/` in the current iteration |
| `value-chain/index.html` | Compatibility redirect | Redirects to `/` |
| `academy/` | Curriculum source | Canonical syllabus and role mapping |
| `skills/` | Playbooks | Markdown-first operating instructions for repeatable work |
| `scripts/` | Deterministic automation | Sync, render, indexing, and quality scripts |
| `provider-catalog/` | Live provider registry | Canonical source for provider/model snapshots |
| `value-chain/` | Taxonomy and explorer assets | Layer data, catalog content, and client-side explorer files |
| `agent-library/` | Reusable role references | Local index, sources, and sync history |
| `llm-full.txt` | Machine-oriented project intent | Repo context for agent onboarding and alignment |
| `reports/quality-audit/` | Local generated artifacts | Gitignored audit outputs |

## File Conventions

- Primary public routes are `/`, `/thesis`, `/learn`, and `/glossary`.
- Compatibility routes such as `/practice`, `/stack`, and `/value-chain` may intentionally redirect.
- Route content lives in `foo/index.html`.
- `provider-catalog/index.md` is the canonical source for provider and model snapshot claims.
- Public provider/model claims should be regenerated from `provider-catalog/index.md`, not hand-edited in derived HTML artifacts.
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

Refresh the provider catalog and derived provider snapshot artifacts:

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
- taxonomy and glossary clarity
- static-site quality, accessibility, and copy fixes
- provider catalog and sync tooling improvements
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

- [`thesis/index.html`](./thesis/index.html) for the public thesis page
- [`academy/syllabus.md`](./academy/syllabus.md) for curriculum order
- [`provider-catalog/index.md`](./provider-catalog/index.md) for live provider inventory
- [`agent-library/sources.md`](./agent-library/sources.md) for agent-library provenance
- [`agent-library/sync-log.md`](./agent-library/sync-log.md) for sync history
- [`llm-full.txt`](./llm-full.txt) for machine-oriented repo intent
