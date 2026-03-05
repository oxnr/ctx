# ctx

AI transformation practice. Local-first. Context-native. Open by default.

**[ctx.earth](https://ctx.earth)**

## What is ctx?

ctx helps organizations adopt AI across engineering, operations, product, and strategy — with local-first architecture as the default. On-premise models. Portable context. No vendor lock.

## Tracks

- **AI Workflow Design** — design and deploy AI workflows across functions
- **Local-First Infrastructure** — on-premise, private-cloud, and air-gapped deployment
- **Context Engineering** — durable context layers that survive model generations
- **Open Academy** — free, public learning content shipped with every engagement

## Thesis

The organizations that own their infrastructure and their context will outperform those that rent both.

Default execution policy: CLI-first and file-first. MCP/agent protocols are optional integration layers, never the portability layer.

## Structure

```
index.html          Homepage
thesis.html         Thesis page
work.html           Practice page (build areas + operating principles)
stack.html          Generated stack snapshot page
learn.html          Learn / Academy page (13-module curriculum)
styles.css          Styles
script.js           Interactions (accordions, nav toggle)
llm-full.txt        LLM context file
provider-catalog/   Provider and model registry (live)
skills/             Canonical playbooks
  agentic-audit.md
  build-agent-workflow.md
  design-private-stack.md
  quality-cycle.md
  task-contract.md
  incident-operating.md
  skill-factory.md
  context-compression-policy.md
  superset-patterns.md
  open-academy-module.md
  harness-engineering.md
  prompt-engineering.md
  provider-stack.md
  provider-catalog-update.md
  internet-research.md
  agent-library-update.md
  anthropic-academy.md
  web-quality-audit.md
  humanizer.md
  recall.md
scripts/            Sync and maintenance tools
  quality-cycle.sh
  sync-provider-catalog.sh
  render-stack-page.py
  sync-agent-library.sh
  recall-index.sh
  recall-search.sh
agent-library/      Curated local specialist profiles for quick reuse
```

## Technical snapshot

`provider-catalog/index.md` is the source of truth for live provider/model inventory.

- Refresh the catalog with `./scripts/sync-provider-catalog.sh`.
- That sync also regenerates `stack.html` through `scripts/render-stack-page.py`.
- Public stack copy should never be hand-edited with pinned provider/model claims.

## Custom domain

`ctx.earth` is intended to run on GitHub Pages with direct DNS, not registrar-side redirects.

- Apex `ctx.earth`: keep only the four GitHub Pages A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Remove registrar URL redirect records for `@`.
- Remove any extra apex A record that is not one of the four GitHub Pages IPs.
- Add `www` as a `CNAME` to `oxnr.github.io`.
- In GitHub Pages settings, keep the custom domain set to `ctx.earth` and enable HTTPS after DNS settles.

## License

Code in this repository is licensed under MIT. Written content and curriculum materials are licensed under CC BY 4.0.

- See `LICENSE` for the code license.
- See `LICENSE-CONTENT` for the content license.
