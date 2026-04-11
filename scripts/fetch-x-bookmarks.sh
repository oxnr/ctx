#!/usr/bin/env bash
# fetch-x-bookmarks.sh — Fetch bookmark tweet URLs from X via agent-browser
# Requires: agent-browser (global), persistent session "x-session" (logged in)
#
# Usage: ./scripts/fetch-x-bookmarks.sh [--limit N] [--scroll-rounds M]
#   --limit N          Max bookmarks to return (default: 20)
#   --scroll-rounds M  Number of scroll-downs to load more (default: 0, use "all" for exhaustive)
#
# Output: One tweet URL per line to stdout (status URLs only, no /photo/ or /analytics/)
# Errors: To stderr

set -euo pipefail

LIMIT=20
SCROLL_ROUNDS=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --limit) LIMIT="$2"; shift 2 ;;
    --scroll-rounds) SCROLL_ROUNDS="$2"; shift 2 ;;
    *) shift ;;
  esac
done

SESSION="x-session"
BOOKMARKS_URL="https://x.com/i/bookmarks"

# Navigate to bookmarks page with persistent session
if ! agent-browser batch --session-name "$SESSION" \
  "open $BOOKMARKS_URL" \
  "wait --load networkidle" \
  "wait 3000" \
  > /dev/null 2>&1; then
  echo "ERROR: Failed to open bookmarks page. Is x-session authenticated?" >&2
  echo "Run: agent-browser open https://x.com/login --session-name x-session --headed" >&2
  exit 1
fi

# Accept cookies if banner appears
agent-browser batch --session-name "$SESSION" \
  "click \"Accept all cookies\"" \
  "wait 1000" > /dev/null 2>&1 || true

collect_urls() {
  agent-browser eval --session-name "$SESSION" \
    'Array.from(document.querySelectorAll("a[href*=\"/status/\"]")).map(a=>a.href).filter(h=>!h.includes("/photo/")&&!h.includes("/analytics/")&&!h.includes("/retweets")&&!h.includes("/quotes")&&!h.includes("/likes")).filter((v,i,s)=>s.indexOf(v)===i).join("\n")' \
    2>/dev/null | tr -d '"'
}

ALL_URLS=""

# Initial collection
NEW_URLS=$(collect_urls)
ALL_URLS="$NEW_URLS"

# Scroll to load more if requested
if [[ "$SCROLL_ROUNDS" == "all" ]]; then
  # Keep scrolling until no new URLs appear
  while true; do
    agent-browser scroll down 2000 --session-name "$SESSION" > /dev/null 2>&1
    sleep 2
    NEW_URLS=$(collect_urls)
    COMBINED=$(printf "%s\n%s" "$ALL_URLS" "$NEW_URLS" | sort -u)
    if [[ "$COMBINED" == "$(echo "$ALL_URLS" | sort -u)" ]]; then
      break  # No new URLs found
    fi
    ALL_URLS="$COMBINED"
    echo "  Loaded $(echo "$ALL_URLS" | wc -l | tr -d ' ') unique bookmarks so far..." >&2
  done
else
  for ((i=1; i<=SCROLL_ROUNDS; i++)); do
    agent-browser scroll down 2000 --session-name "$SESSION" > /dev/null 2>&1
    sleep 2
    NEW_URLS=$(collect_urls)
    ALL_URLS=$(printf "%s\n%s" "$ALL_URLS" "$NEW_URLS")
    echo "  Scroll $i/$SCROLL_ROUNDS — loaded $(echo "$ALL_URLS" | sort -u | wc -l | tr -d ' ') unique bookmarks..." >&2
  done
fi

echo "$ALL_URLS" | sort -u | grep -v '^$' | head -n "$LIMIT"
