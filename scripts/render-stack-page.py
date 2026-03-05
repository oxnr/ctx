#!/usr/bin/env python3

from __future__ import annotations

import html
import re
from pathlib import Path
from urllib.parse import quote


ROOT_DIR = Path(__file__).resolve().parents[1]
CATALOG_FILE = ROOT_DIR / "provider-catalog" / "index.md"
OUTPUT_FILE = ROOT_DIR / "stack" / "index.html"
LEGACY_REDIRECT_FILE = ROOT_DIR / "stack.html"
REPO_URL = "https://github.com/oxnr/ctx"


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


def model_link(value: str) -> str | None:
    if "/" not in value:
        return None
    return f"https://openrouter.ai/{quote(value, safe='/:.-')}"


def render_cell(header: str, value: str) -> str:
    escaped = html.escape(value)
    if header in {"Latest model", "Model"}:
        url = model_link(value)
        if url:
            return f'<a href="{url}" target="_blank" rel="noreferrer">{escaped}</a>'
    return escaped


def render_table(headers: list[str], rows: list[list[str]]) -> str:
    head_html = "".join(f"<th>{html.escape(header)}</th>" for header in headers)
    body_rows = []
    for row in rows:
        cells = "".join(f"<td>{render_cell(header, cell)}</td>" for header, cell in zip(headers, row))
        body_rows.append(f"<tr>{cells}</tr>")
    return (
        '<div class="table-wrap">'
        '<table class="data-table">'
        f"<thead><tr>{head_html}</tr></thead>"
        f"<tbody>{''.join(body_rows)}</tbody>"
        "</table>"
        "</div>"
    )


def main() -> None:
    catalog = read_catalog()
    last_synced = extract_value(r"^Last synced: (.+)$", catalog, "last synced")
    provider_headers, provider_rows = parse_table("Provider snapshot", catalog)
    image_headers, image_rows = parse_table("Top image-capable models", catalog)

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
    <link rel="stylesheet" href="/styles.css" />
    <link rel="canonical" href="https://ctx.earth/stack" />
  </head>
  <body class="subpage">
    <header class="site-header">
      <a class="brand" href="/">ctx</a>
      <div class="header-actions">
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
          <span>Menu</span>
        </button>
        <nav id="site-nav" class="top-nav">
          <a class="nav-link" href="/thesis">Thesis</a>
          <a class="nav-link" href="/practice">Practice</a>
          <a class="nav-link" href="/stack">Stack</a>
          <a class="nav-link" href="/learn">Learn</a>
        </nav>
        <a
          class="repo-link"
          href="{REPO_URL}"
          target="_blank"
          rel="noreferrer"
          aria-label="View ctx on GitHub"
          title="View source on GitHub"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.56 7.56 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </a>
      </div>
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
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-providers">
              <span class="accordion__title">
                <span class="accordion__index">01</span>
                <span>Provider registry</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-providers">
              <div class="panel-block">
                <p class="stack-note">
                  Current provider counts and latest listed model per provider family, generated from the synced catalog on {html.escape(last_synced)}. Model links point to their OpenRouter pages when the slug is available directly from the catalog.
                </p>
                {render_table(provider_headers, provider_rows)}
              </div>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-images">
              <span class="accordion__title">
                <span class="accordion__index">02</span>
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
                <span class="accordion__index">03</span>
                <span>Routing and control</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-routing">
              <p>
                This is the layer that decides which model gets which job. It should route by task type, risk, speed, cost, and fallback rules instead of hard-coding one favorite model everywhere.
              </p>
              <ul>
                <li>Route by task, not by brand.</li>
                <li>Keep a fallback path when a provider is down or no longer worth the cost.</li>
                <li>Keep routing policy separate from prompt text so it can change cleanly.</li>
              </ul>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-orchestration">
              <span class="accordion__title">
                <span class="accordion__index">04</span>
                <span>Orchestration and workflow</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-orchestration">
              <p>
                This is how work moves through the system: plan, execute, review, approve, publish. It includes agent roles, task handoffs, retries, and the small reusable behaviors around them.
              </p>
              <ul>
                <li>Separate planning, execution, and review.</li>
                <li>Use clear task contracts, not vague prompts passed from step to step.</li>
                <li>Keep skills, hooks, and automation around repeatable points in the workflow.</li>
              </ul>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-context">
              <span class="accordion__title">
                <span class="accordion__index">05</span>
                <span>Context and knowledge</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-context">
              <p>
                Models are only as good as the context they get. This layer keeps prompts, docs, retrieval, decisions, and working state useful without stuffing everything into one giant prompt.
              </p>
              <ul>
                <li>Keep context scoped to the job.</li>
                <li>Store durable knowledge in docs, indexes, and retrieval systems.</li>
                <li>Reset stale state instead of letting it pile up.</li>
              </ul>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-integration">
              <span class="accordion__title">
                <span class="accordion__index">06</span>
                <span>Integrations and tool layer</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-integration">
              <p>
                This is where the system touches the outside world: files, APIs, databases, search, GitHub, terminals, and optional protocol adapters.
              </p>
              <ul>
                <li>Prefer simple local interfaces first.</li>
                <li>Use MCP or similar adapters when they reduce integration work, not as the foundation of the stack.</li>
                <li>Keep tool access explicit so it is easy to audit and replace.</li>
              </ul>
            </div>
          </article>

          <article class="accordion" data-group="stack">
            <button class="accordion__toggle" aria-expanded="false" aria-controls="stack-eval">
              <span class="accordion__title">
                <span class="accordion__index">07</span>
                <span>Evaluation and rollout</span>
              </span>
              <span aria-hidden="true">▾</span>
            </button>
            <div class="accordion__panel" id="stack-eval">
              <p>
                You need a way to know whether the system is improving or drifting. This layer covers evals, observability, rollout rules, and team adoption.
              </p>
              <ul>
                <li>Use eval sets and approval gates before high-impact changes.</li>
                <li>Track cost, quality, and failures in the open.</li>
                <li>Make rollout, rollback, and team training part of the stack, not an afterthought.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Knowledge is free. Time isn't.</p>
    </footer>

    <script src="/script.js" defer></script>
  </body>
</html>
"""

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(html_output, encoding="utf-8")
    LEGACY_REDIRECT_FILE.write_text(
        """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting to /stack</title>
    <meta http-equiv="refresh" content="0; url=/stack" />
    <link rel="canonical" href="https://ctx.earth/stack" />
    <script>
      window.location.replace("/stack");
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="/stack">/stack</a>...</p>
  </body>
</html>
""",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
