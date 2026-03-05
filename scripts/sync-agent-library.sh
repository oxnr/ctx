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

render_index_section() {
  local source="$1"
  local repo_url="$2"
  local target="$3"
  local total_files="0"
  local wrote_folder="false"

  if [ -d "$target" ]; then
    total_files="$(find "$target" -type f -name '*.md' | wc -l | tr -d ' ')"
  fi

  echo "### ${source}"
  echo "- Repo: ${repo_url}"
  echo "- Local target: ${target#${ROOT_DIR}/}"
  echo "- Markdown files: ${total_files}"
  echo "- Top-level folders with markdown:"

  if [ -d "$target" ]; then
    for folder in "$target"/*; do
      if [ -d "$folder" ]; then
        count="$(find "$folder" -type f -name '*.md' | wc -l | tr -d ' ')"
        if [ "$count" -gt 0 ]; then
          echo "  - $(basename "$folder"): ${count}"
          wrote_folder="true"
        fi
      fi
    done
  fi

  if [ "$wrote_folder" != "true" ]; then
    echo "  - none"
  fi

  echo
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
  echo
  render_index_section \
    "msitarzewski/agency-agents" \
    "https://github.com/msitarzewski/agency-agents" \
    "${VENDORS_DIR}/msitarzewski-agency-agents"
  render_index_section \
    "superset-sh/superset" \
    "https://github.com/superset-sh/superset" \
    "${VENDORS_DIR}/superset-sh-superset"
} > "$INDEX_FILE"

echo "✅ Agent library sync complete."
