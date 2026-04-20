#!/usr/bin/env bash
# backfill-bookmarks.sh — Fetch all unprocessed bookmarks and write to TSV
# Usage: ./scripts/backfill-bookmarks.sh [start_line] [batch_size]

set -euo pipefail

INPUT="/tmp/unprocessed.txt"
OUTPUT="/Users/onr/Projects/ctx/.claude/bookmarks/backfill-data.tsv"
SESSION="x-session"
START=${1:-1}
BATCH=${2:-1102}
TOTAL=$(wc -l < "$INPUT" | tr -d ' ')

echo "Processing lines $START to $((START + BATCH - 1)) of $TOTAL..."

COUNT=0
LINE=0
while IFS= read -r url; do
  LINE=$((LINE + 1))
  [[ $LINE -lt $START ]] && continue
  COUNT=$((COUNT + 1))
  [[ $COUNT -gt $BATCH ]] && break

  handle=$(echo "$url" | sed 's|https://x.com/||;s|/status/.*||')

  agent-browser batch --session-name "$SESSION" "open $url" "wait --load networkidle" "wait 1000" > /dev/null 2>&1 || true

  date=$(agent-browser eval --session-name "$SESSION" 'document.querySelector("time")?.dateTime?.substring(0,10) || "unknown"' 2>/dev/null | tr -d '"') || date="unknown"

  text=$(agent-browser eval --session-name "$SESSION" 'let a=document.querySelector("article"); if(!a) ""; else { let ts=a.querySelectorAll("div[dir=\"auto\"]"); Array.from(ts).map(t=>t.textContent).filter(t=>t.length>20).slice(0,2).join(" ").substring(0,200) || a.textContent.substring(0,200) }' 2>/dev/null | tr -d '"' | tr '\t\n' '  ') || text=""

  links=$(agent-browser eval --session-name "$SESSION" 'Array.from(document.querySelectorAll("article a[href]")).map(a=>a.href).filter(h=>!h.includes("x.com")&&!h.includes("twitter.com")&&h.startsWith("http")).filter((v,i,s)=>s.indexOf(v)===i).slice(0,3).join(", ")' 2>/dev/null | tr -d '"') || links=""

  printf "%s\t%s\t%s\t%s\t%s\n" "$url" "$handle" "$date" "$text" "$links" >> "$OUTPUT"

  if (( COUNT % 25 == 0 )); then
    echo "[$COUNT/$BATCH] @$handle ($date)"
  fi
done < "$INPUT"

echo "=== Done: $COUNT bookmarks written to $OUTPUT ==="
