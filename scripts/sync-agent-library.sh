#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIB_DIR="${ROOT_DIR}/agent-library"
VENDORS_DIR="${LIB_DIR}/vendors"
SYNC_LOG="${LIB_DIR}/sync-log.md"
SOURCES_FILE="${LIB_DIR}/sources.md"
INDEX_FILE="${LIB_DIR}/index.md"

mkdir -p "$VENDORS_DIR"

timestamp() {
  date -u +"%Y-%m-%dT%H:%M:%SZ"
}

sync_source() {
  local source="$1"
  local repo_url="$2"
  local branch="$3"
  local target="${VENDORS_DIR}/${source//\//-}"
  local latest
  local remote
  local previous=""
  local updated="false"
  local change_count="0"

  if [ -d "$target/.git" ]; then
    git -C "$target" fetch --depth 1 origin "$branch"
    previous="$(git -C "$target" rev-parse HEAD)"
    remote="$(git -C "$target" rev-parse "origin/$branch")"
    if [ "$previous" != "$remote" ]; then
      git -C "$target" reset --hard "origin/$branch"
      updated="true"
      change_count="$(git -C "$target" diff --name-only "$previous".."$remote" -- '*.md' | wc -l | tr -d ' ')"
    fi
  else
    rm -rf "$target"
    git clone --depth 1 --branch "$branch" "$repo_url" "$target"
    updated="true"
    latest="$(git -C "$target" rev-parse HEAD)"
    previous=""
  fi

  latest="$(git -C "$target" rev-parse HEAD)"
  local latest_msg
  latest_msg="$(git -C "$target" log -1 --pretty=%s)"
  local total_files
  total_files="$(find "$target" -type f -name '*.md' | wc -l | tr -d ' ')"

  {
    echo "## Source: ${source}"
    echo "- branch: ${branch}"
    echo "- url: ${repo_url}"
    echo "- latest_commit: ${latest}"
    echo "- latest_message: ${latest_msg}"
    echo "- total_markdown_profiles: ${total_files}"
    echo "- updated: ${updated}"
    if [ "$updated" = "true" ]; then
      if [ "$previous" = "" ]; then
        echo "- changed_markdowns: initial import"
      else
        echo "- changed_markdowns: ${change_count}"
      fi
    else
      echo "- changed_markdowns: 0"
    fi
    echo
  } >> "$SYNC_LOG"

}

cat > "$SYNC_LOG" <<'EOF'
# Agent Library Sync Log

## Sync log
EOF

sync_source "msitarzewski/agency-agents" "https://github.com/msitarzewski/agency-agents.git" "main"
sync_source "superset-sh/superset" "https://github.com/superset-sh/superset.git" "main"

{
  echo "# Agent Library Sources"
  echo
  echo "- last_sync: $(timestamp)"
  echo "- source_count: 2"
  echo "- source: msitarzewski/agency-agents"
  echo "- local_target: agent-library/vendors/msitarzewski-agency-agents"
  echo "- source: superset-sh/superset"
  echo "- local_target: agent-library/vendors/superset-sh-superset"
  echo
} > "$SOURCES_FILE"

{
  echo "# Agent Library Index"
  echo
  echo "Last synced: $(timestamp)"
  echo
  echo "## Active sources"
  echo "- https://github.com/msitarzewski/agency-agents"
  echo
  echo "## Available family folders"
  for folder in "${VENDORS_DIR}"/msitarzewski-agency-agents/*; do
    if [ -d "$folder" ]; then
      count="$(find "$folder" -maxdepth 1 -type f -name '*.md' | wc -l | tr -d ' ')"
      echo "- $(basename "$folder"): ${count} profiles"
    fi
  done
  echo
} > "$INDEX_FILE"

echo "✅ Agent library sync complete."
