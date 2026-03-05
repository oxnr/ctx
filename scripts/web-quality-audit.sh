#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <file-or-directory>"
  echo "Runs fast, static HTML quality checks and prints a JSON-like summary."
  exit 1
}

if [[ $# -lt 1 ]]; then
  usage
fi

TARGET="$1"
if [[ ! -e "$TARGET" ]]; then
  echo "Target not found: $TARGET" >&2
  exit 1
fi

if ! command -v rg >/dev/null 2>&1 && ! command -v grep >/dev/null 2>&1; then
  echo "Either rg or grep is required." >&2
  exit 1
fi

if command -v rg >/dev/null 2>&1; then
  mapfile -t FILES_LIST < <(rg --files "$TARGET" -g '*.html' -g '*.htm' 2>/dev/null || true)
  if [[ ${#FILES_LIST[@]} -eq 0 ]]; then
    echo "No html files found under: $TARGET"
    exit 0
  fi
else
  mapfile -t FILES_LIST < <(find "$TARGET" -type f \( -name '*.html' -o -name '*.htm' \))
  if [[ ${#FILES_LIST[@]} -eq 0 ]]; then
    echo "No html files found under: $TARGET"
    exit 0
  fi
fi

TOTAL_ISSUES=0
TOTAL_WARNINGS=0
declare -a ISSUES
declare -a WARNINGS

for FILE in "${FILES_LIST[@]}"; do
  if [[ ! -r "$FILE" ]]; then
    continue
  fi

  # Structural checks
  if ! rg -q "<!doctype html" -i "$FILE"; then
    ISSUES+=("$FILE: missing HTML5 doctype")
    ((TOTAL_ISSUES+=1))
  fi

  if ! rg -q "<meta[^>]*charset=[\"']?utf-8" -i "$FILE"; then
    WARNINGS+=("$FILE: missing charset utf-8 declaration")
    ((TOTAL_WARNINGS+=1))
  fi

  if ! rg -q "<meta[^>]*name=[\"']viewport[\"']" -i "$FILE"; then
    ISSUES+=("$FILE: missing viewport meta tag")
    ((TOTAL_ISSUES+=1))
  fi

  if ! rg -q "<html[^>]*lang=" -i "$FILE"; then
    ISSUES+=("$FILE: missing html lang attribute")
    ((TOTAL_ISSUES+=1))
  fi

  if ! rg -q "<title[^>]*>.*</title>" -i "$FILE"; then
    ISSUES+=("$FILE: missing title tag")
    ((TOTAL_ISSUES+=1))
  fi

  if rg -q '<img[^>]*>' -i "$FILE" && rg -P -q '<img(?![^>]*\salt=)[^>]*>' -i "$FILE"; then
    WARNINGS+=("$FILE: possible images without alt text")
    ((TOTAL_WARNINGS+=1))
  fi

  if rg -q "http://" "$FILE" >/dev/null 2>&1; then
    WARNINGS+=("$FILE: contains plain http links")
    ((TOTAL_WARNINGS+=1))
  fi

  # Accessibility hints
  if rg -q "onclick=" -i "$FILE"; then
    WARNINGS+=("$FILE: inline event handlers detected (accessibility and CSP risk)")
    ((TOTAL_WARNINGS+=1))
  fi

done

{
  echo "{"
  echo "  \"target\": \"${TARGET}\" ,"
  echo "  \"issue_count\": ${TOTAL_ISSUES},"
  echo "  \"warning_count\": ${TOTAL_WARNINGS},"
  echo "  \"issues\": ["
  for i in "${!ISSUES[@]}"; do
    if [[ $i -gt 0 ]]; then
      echo ","
    fi
    printf "    \"%s\"" "${ISSUES[$i]//\"/\\\"}"
  done
  echo ""
  echo "  ],"
  echo "  \"warnings\": ["
  for i in "${!WARNINGS[@]}"; do
    if [[ $i -gt 0 ]]; then
      echo ","
    fi
    printf "    \"%s\"" "${WARNINGS[$i]//\"/\\\"}"
  done
  echo ""
  echo "  ]"
  echo "}"
} > /tmp/ctx-web-quality-audit.json

cat /tmp/ctx-web-quality-audit.json
echo
echo "Summary: ${TOTAL_ISSUES} issues, ${TOTAL_WARNINGS} warnings"
echo "Targets scanned: ${#FILES_LIST[@]}"
