#!/usr/bin/env python3

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
CATALOG_FILE = ROOT_DIR / "provider-catalog" / "index.md"
OUTPUT_FILE = ROOT_DIR / "stack.html"


def read_catalog() -> str:
    if not CATALOG_FILE.exists():
        raise SystemExit(f"Missing catalog file: {CATALOG_FILE}")
    return CATALOG_FILE.read_text(encoding="utf-8")


def extract_value(pattern: str, text: str, label: str) -> str:
    match = re.search(pattern, text, re.MULTILINE)
    if not match:
        raise SystemExit(f"Could not find {label} in {CATALOG_FILE}")
    return match.group(1).strip()


def extract_section_lines(heading: str, text: str) -> list[str]:
    pattern = re.compile(rf"^## {re.escape(heading)}\n(.*?)(?=^## |\Z)", re.MULTILINE | re.DOTALL)
    match = pattern.search(text)
    if not match:
        raise SystemExit(f"Could not find section '{heading}' in {CATALOG_FILE}")
    return [line.rstrip() for line in match.group(1).strip().splitlines()]


def parse_table(heading: str, text: str) -> tuple[list[str], list[list[str]]]:
    lines = extract_section_lines(heading, text)
    table_lines = [line for line in lines if line.strip().startswith("|")]
    if len(table_lines) < 3:
        raise SystemExit(f"Section '{heading}' does not contain a markdown table")

    def split_row(line: str) -> list[str]:
        return [cell.strip() for cell in line.strip().strip("|").split("|")]

    headers = split_row(table_lines[0])
    rows = [split_row(line) for line in table_lines[2:]]
    return headers, rows


def parse_bullets(heading: str, text: str) -> list[str]:
    lines = extract_section_lines(heading, text)
    bullets = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("- "):
            bullets.append(stripped[2:])
    return bullets


def render_table(headers: list[str], rows: list[list[str]]) -> str:
    head_html = "".join(f"<th>{html.escape(header)}</th>" for header in headers)
    body_rows = []
    for row in rows:
        cells = "".join(f"<td>{html.escape(cell)}</td>" for cell in row)
        body_rows.append(f"<tr>{cells}</tr>")
    return (
        '<div class="table-wrap">'
        '<table class="data-table">'
        f"<thead><tr>{head_html}</tr></thead>"
        f"<tbody>{''.join(body_rows)}</tbody>"
        "</table>"
        "</div>"
    )


def render_card(label: str, value: str, meta: str) -> str:
    return (
        '<div class="info-card">'
        f'<span class="info-card__label">{html.escape(label)}</span>'
        f'<span class="info-card__value">{html.escape(value)}</span>'
        f'<span class="info-card__meta">{html.escape(meta)}</span>'
        "</div>"
    )


def main() -> None:
    catalog = read_catalog()
    last_synced = extract_value(r"^Last synced: (.+)$", catalog, "last synced")
    source = extract_value(r"^Source: (.+)$", catalog, "source")
    total_models = extract_value(r"^- total_models: (.+)$", catalog, "total models")
    total_providers = extract_value(r"^- total_providers: (.+)$", catalog, "total providers")
    local_checks = parse_bullets("Local tooling checks", catalog)
    update_notes = parse_bullets("Update note", catalog)
    provider_headers, provider_rows = parse_table("Provider snapshot", catalog)
    image_headers, image_rows = parse_table("Top image-capable models", catalog)

    local_summary = local_checks[0] if local_checks else "No local tooling notes captured."
    update_note = update_notes[0] if update_notes else "Refresh the catalog during provider release waves."

    html_output = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stack - ctx</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="subpage">
    <header class="site-header">
      <a class="brand" href="index.html">ctx</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
        <span>Menu</span>
      </button>
      <nav id="site-nav" class="top-nav">
        <a class="nav-link" href="thesis.html">Thesis</a>
        <a class="nav-link" href="work.html">Practice</a>
        <a class="nav-link" href="stack.html">Stack</a>
        <a class="nav-link" href="learn.html">Learn</a>
      </nav>
    </header>

    <main>
      <section class="hero section" data-reveal>
        <p class="hero-kicker">Stack</p>
        <h1>Live technical snapshot.</h1>
        <p class="hero-subtitle">
          Generated from the provider catalog synced on {html.escape(last_synced)}. No hand-edited model/version claims live on this page.
        </p>
      </section>

      <section class="section section-compact" data-reveal>
        <p class="section-label">Catalog-driven stack</p>
        <div class="accordion-list">
          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-summary">
              <span class="accordion__title">
                <span class="accordion__index">01</span>
                <span>Snapshot summary</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-summary">
              <div class="panel-block">
                <div class="info-grid">
                  {render_card("Last synced", last_synced, "UTC timestamp from provider-catalog/index.md")}
                  {render_card("Source", source, "Primary upstream used for the current snapshot")}
                  {render_card("Providers", total_providers, "Distinct provider families currently listed")}
                  {render_card("Models", total_models, local_summary)}
                </div>
                <p class="stack-note">
                  {html.escape(update_note)} This page is generated by <code>scripts/render-stack-page.py</code> and refreshed by <code>scripts/sync-provider-catalog.sh</code>.
                </p>
                <div class="stack-links">
                  <a class="btn btn-subtle" href="provider-catalog/index.md">Raw catalog</a>
                  <a class="btn btn-subtle" href="provider-catalog/sources.md">Source map</a>
                  <a class="btn btn-subtle" href="provider-catalog/sync-log.md">Sync log</a>
                </div>
              </div>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-providers">
              <span class="accordion__title">
                <span class="accordion__index">02</span>
                <span>Provider registry</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-providers">
              <div class="panel-block">
                <p class="stack-note">
                  Current provider counts and latest listed model per provider family. This table is generated from the synced catalog, not maintained by hand.
                </p>
                {render_table(provider_headers, provider_rows)}
              </div>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-images">
              <span class="accordion__title">
                <span class="accordion__index">03</span>
                <span>Image-capable models</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-images">
              <div class="panel-block">
                <p class="stack-note">
                  Latest image-capable entries from the same provider snapshot. Use this as the starting point for multimodal routing decisions.
                </p>
                {render_table(image_headers, image_rows)}
              </div>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-routing">
              <span class="accordion__title">
                <span class="accordion__index">04</span>
                <span>Routing and control plane</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-routing">
              <p>
                The live catalog is the provider truth layer. Routing policy should select from that registry by task type, risk class, latency budget, and fallback eligibility instead of pinning copy on the public site.
              </p>
              <ul>
                <li>Source of truth: <code>provider-catalog/index.md</code> for current provider/model inventory and <code>provider-catalog/sources.md</code> for trusted upstream anchors.</li>
                <li>Refresh loop: run <code>./scripts/sync-provider-catalog.sh</code> after major provider releases, deprecations, outages, or contract changes.</li>
                <li>Public stack page: regenerated automatically from the catalog so the website cannot drift silently from the recorded snapshot.</li>
                <li>Routing policy: keep task-level selection and fallback chains in repo-local decisions and playbooks, not in hand-maintained marketing copy.</li>
              </ul>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-execution">
              <span class="accordion__title">
                <span class="accordion__index">05</span>
                <span>Execution and harness plane</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-execution">
              <p>
                The durable layer remains local: repository-backed context, explicit task contracts, and versioned scripts. Provider churn should change the catalog and routing policy, not the operating model.
              </p>
              <ul>
                <li>Execution boundary: shell scripts and markdown artifacts are the portable layer; model/provider adapters sit behind them.</li>
                <li>Harness layer: context capsules, decisions, checklists, and evaluation sets survive model swaps because they are versioned in the repo.</li>
                <li>Release discipline: quality checks, provider sync, and public page generation run as separate, auditable steps.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Knowledge is free. Time isn't.</p>
    </footer>

    <script src="script.js" defer></script>
  </body>
</html>
"""

    OUTPUT_FILE.write_text(html_output, encoding="utf-8")


if __name__ == "__main__":
    main()
