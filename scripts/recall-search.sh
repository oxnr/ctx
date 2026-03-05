#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INDEX_FILE="${ROOT_DIR}/recall/index.md"

if [[ $# -lt 1 ]]; then
  echo "Usage: ./scripts/recall-search.sh \"query\" [max_lines]"
  echo "Example: ./scripts/recall-search.sh \"shipment bug\" 40"
  exit 1
fi

if [[ ! -f "$INDEX_FILE" ]]; then
  echo "Recall index not found: ${INDEX_FILE}" >&2
  echo "Run ./scripts/recall-index.sh first" >&2
  exit 1
fi

QUERY="$1"
MAX_LINES="${2:-40}"

if command -v rg >/dev/null 2>&1; then
  rg -n -i -m "$MAX_LINES" "$QUERY" "$INDEX_FILE" || true
else
  grep -n -i -m "$MAX_LINES" "$QUERY" "$INDEX_FILE" || true
fi
