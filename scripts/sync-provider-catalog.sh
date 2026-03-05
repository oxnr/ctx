#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CATALOG_DIR="${ROOT_DIR}/provider-catalog"
INDEX_FILE="${CATALOG_DIR}/index.md"
SYNC_LOG="${CATALOG_DIR}/sync-log.md"

OPENROUTER_URL="https://openrouter.ai/api/v1/models"
RAW_FILE="$(mktemp)"

cleanup() {
  rm -f "$RAW_FILE"
}
trap cleanup EXIT

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required for provider sync" >&2
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required for provider sync" >&2
  exit 1
fi

timestamp() {
  date -u +"%Y-%m-%dT%H:%M:%SZ"
}

fetch_openrouter() {
  local headers=()
  if [[ -n "${OPENROUTER_API_KEY:-}" ]]; then
    headers+=("-H" "Authorization: Bearer ${OPENROUTER_API_KEY}")
  fi

  if [[ "${#headers[@]}" -gt 0 ]]; then
    curl -fsSL -m 30 "${headers[@]}" "$OPENROUTER_URL" -o "$RAW_FILE"
  else
    curl -fsSL -m 30 "$OPENROUTER_URL" -o "$RAW_FILE"
  fi
}

format_unix_ts() {
  local unix_ts="$1"
  if [[ -z "$unix_ts" ]]; then
    echo "n/a"
  else
    date -u -r "$unix_ts" +"%Y-%m-%d %H:%M UTC" 2>/dev/null || echo "$unix_ts"
  fi
}

sync_openrouter_catalog() {
  local now
  now="$(timestamp)"

  if [[ ! -s "$RAW_FILE" ]]; then
    echo "No model data available in $RAW_FILE" >&2
    exit 1
  fi

  local provider_count model_count
  provider_count="$(jq -r '[.data[] | .id | split("/") | .[0]] | unique | length' "$RAW_FILE")"
  model_count="$(jq -r '.data | length' "$RAW_FILE")"

  {
    echo "# Provider Catalog (Live Snapshot)"
    echo
    echo "Last synced: ${now}"
    echo
    echo "Source: ${OPENROUTER_URL}"
    echo
    echo "## Why this exists"
    echo "- One file for provider/version truth across tools and teams."
    echo "- No dependency on a single CLI, UI, or proprietary skill framework."
    echo "- Supports stack engineering decisions, replacement planning, and auditability."
    echo
    echo "## Global counts"
    echo "- total_models: ${model_count}"
    echo "- total_providers: ${provider_count}"
    echo
    echo "## Provider snapshot"
    echo "| Provider | Count | Latest model | Latest model created (UTC) |"
    echo "| --- | ---: | --- | --- |"
    jq -r '.data | group_by(.id | split("/")[0]) | map({provider:(.[0].id | split("/")[0]), count:length, latest:(sort_by(.created) | last).id, created:(sort_by(.created) | last).created}) | sort_by(-.count, .provider) | .[] | "\(.provider)|\(.count)|\(.latest)|\(.created)"' "$RAW_FILE" \
      | while IFS='|' read -r provider count latest created; do
          echo "| ${provider} | ${count} | ${latest} | $(format_unix_ts "$created") |"
        done
    echo
    echo "## Top image-capable models"
    echo
    echo "| Provider | Model | Context | Latest created (UTC) |"
    echo "| --- | --- | ---: | --- |"
    jq -r '.data | map(select((.architecture.output_modalities // []) | index("image") != null)) | sort_by(.created) | reverse | .[] | "\(.id)|\(.id | split("/")[0])|\(.context_length // "n/a")|\(.created)"' "$RAW_FILE" \
      | head -n 25 \
      | while IFS='|' read -r model provider context created; do
          echo "| ${provider} | ${model} | ${context} | $(format_unix_ts "$created") |"
        done
    echo
    echo "## Local tooling checks"
    if command -v ollama >/dev/null 2>&1; then
      echo "- ollama available: yes"
      echo "- local ollama models:"
      while IFS= read -r model_line; do
        echo "  - ${model_line%% *}"
      done < <(ollama list 2>/dev/null | tail -n +2 | awk '{print $1}')
    else
      echo "- ollama available: no"
    fi
    echo
    echo "## Update note"
    echo "- Run '/provider-catalog-update' after major model/version shifts."
  } > "$INDEX_FILE"

  {
    echo "## $(timestamp)"
    echo "- source: ${OPENROUTER_URL}"
    echo "- total_models: ${model_count}"
    echo "- total_providers: ${provider_count}"
    echo "- generated_file: provider-catalog/index.md"
    echo
  } >> "$SYNC_LOG"
}

mkdir -p "$CATALOG_DIR"

if [[ ! -f "$RAW_FILE" ]]; then
  : > "$RAW_FILE"
fi

if [[ -f "$SYNC_LOG" ]]; then
  if [[ ! -s "$SYNC_LOG" ]]; then
    echo "# Provider Catalog Sync Log" > "$SYNC_LOG"
  fi
else
  echo "# Provider Catalog Sync Log" > "$SYNC_LOG"
fi

fetch_openrouter
sync_openrouter_catalog

echo "✅ Provider catalog sync complete: $INDEX_FILE"
echo "📘 Sync log updated: $SYNC_LOG"
