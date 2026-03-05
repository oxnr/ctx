#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RECALL_DIR="${ROOT_DIR}/recall"
INDEX_FILE="${RECALL_DIR}/index.md"

SOURCE_DIR="${CLAUDE_SESSION_DIR:-$HOME/.claude/sessions}"
MAX_SESSIONS="${RECALL_MAX_SESSIONS:-30}"
MAX_MESSAGES="${RECALL_MAX_MESSAGES_PER_SESSION:-120}"

mkdir -p "$RECALL_DIR"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required for ./scripts/recall-index.sh" >&2
  exit 1
fi

python3 - "$SOURCE_DIR" "$INDEX_FILE" "$MAX_SESSIONS" "$MAX_MESSAGES" <<'PY'
import glob
import json
import os
import sys
from collections import defaultdict
from datetime import datetime, timezone


def utc_timestamp(ts):
    if ts is None:
        return None
    if isinstance(ts, (int, float)):
        if ts > 1e12:
            ts /= 1000
        return datetime.fromtimestamp(ts, tz=timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    if isinstance(ts, str):
        try:
            return datetime.fromisoformat(ts.replace("Z", "+00:00")).strftime("%Y-%m-%d %H:%M UTC")
        except Exception:
            return ts
    return None


def clean_text(value):
    if not isinstance(value, str):
        return ""
    cleaned = " ".join(value.replace("\n", " ").split())
    return cleaned.strip()


def collect_text(value, limit=5):
    hits = []
    stack = [value]
    candidate_keys = ("text", "content", "summary", "result", "body", "prompt", "response", "output", "message")
    while stack and len(hits) < limit:
        current = stack.pop(0)
        if current is None:
            continue
        if isinstance(current, str):
            text = clean_text(current)
            if text:
                hits.append(text)
            continue
        if isinstance(current, dict):
            for key in candidate_keys:
                if key in current and current[key] is not None:
                    stack.append(current[key])
            for value in current.values():
                if len(hits) >= limit:
                    break
                if isinstance(value, (dict, list, str)):
                    stack.append(value)
            continue
        if isinstance(current, list):
            for item in current:
                stack.append(item)
    return hits[:limit]


def extract_role(obj, default_role="unknown"):
    for key in ("role",):
        if key in obj and isinstance(obj[key], str):
            return obj[key]
    msg = obj.get("message", {})
    if isinstance(msg, dict):
        if isinstance(msg.get("role"), str):
            return msg["role"]
        if isinstance(msg.get("role"), dict) and isinstance(msg["role"].get("type"), str):
            return msg["role"]["type"]
    return default_role


def extract_timestamp(obj):
    for key in ("timestamp", "created_at", "time", "date", "startedAt"):
        if key in obj and obj[key]:
            return utc_timestamp(obj[key])
    return None


def parse_session(path):
    messages = []
    try:
        with open(path, "r", encoding="utf-8") as handle:
            for raw in handle:
                raw = raw.strip()
                if not raw:
                    continue
                try:
                    payload = json.loads(raw)
                except Exception:
                    continue

                message = payload.get("message") if isinstance(payload, dict) else None
                if isinstance(message, dict):
                    role = extract_role(message)
                    timestamp = extract_timestamp(message) or extract_timestamp(payload)
                    candidates = collect_text(message, limit=3)
                else:
                    role = extract_role(payload)
                    timestamp = extract_timestamp(payload)
                    candidates = collect_text(payload, limit=3)

                for idx, chunk in enumerate(candidates):
                    if chunk:
                        messages.append(
                            {
                                "role": role,
                                "timestamp": timestamp,
                                "text": chunk,
                                "line": idx + 1,
                            }
                        )
    except Exception:
        return []
    return messages


def summarize_sessions(source_dir, max_sessions, max_messages):
    session_files = sorted(
        glob.glob(os.path.join(source_dir, "**", "*.jsonl"), recursive=True)
        + glob.glob(os.path.join(source_dir, "**", "*.json"), recursive=True),
        key=os.path.getmtime,
        reverse=True,
    )
    sessions = []
    for path in session_files[:max_sessions]:
        messages = parse_session(path)
        if not messages:
            continue
        ordered = list(dict.fromkeys(m["text"] for m in messages))
        ordered = [line for line in ordered if len(line) > 3][:max_messages]
        if not ordered:
            continue
        timestamps = [m["timestamp"] for m in messages if m["timestamp"]]
        sessions.append(
            {
                "path": path,
                "session_id": os.path.splitext(os.path.basename(path))[0],
                "messages": ordered,
                "count": len(ordered),
                "start": timestamps[-1] if timestamps else utc_timestamp(os.path.getmtime(path)),
                "end": timestamps[0] if timestamps else utc_timestamp(os.path.getmtime(path)),
            }
        )
    return sessions


def write_index(index_file, source_dir, sessions):
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    with open(index_file, "w", encoding="utf-8") as out:
        out.write("# Recall Index\n\n")
        out.write("Last indexed: %s\n" % now)
        out.write("Source directory: %s\n\n" % source_dir)
        out.write("- Sessions imported: %s\n" % len(sessions))
        out.write("- Update mode: file-order recency, JSONL + JSON parse\n\n")
        for session in sessions:
            out.write("## %s\n\n" % session["session_id"])
            out.write("- File: `%s`\n" % session["path"])
            out.write("- Message count: %s\n" % session["count"])
            out.write("- Start: %s\n" % (session["start"] or "n/a"))
            out.write("- End: %s\n\n" % (session["end"] or "n/a"))
            out.write("### Extracted signal lines\n")
            for idx, line in enumerate(session["messages"][:12], 1):
                out.write("- %02d. %s\n" % (idx, line))
            out.write("\n---\n\n")


def write_log(log_path, sessions, source_dir, max_sessions):
    with open(log_path, "w", encoding="utf-8") as out:
        out.write("# Recall Build Log\n\n")
        out.write("Last built: %s\n" % datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"))
        out.write("Source directory: %s\n" % source_dir)
        out.write("Max sessions scanned: %s\n\n" % max_sessions)
        out.write("Sessions indexed: %s\n" % len(sessions))


def main():
    source_dir = sys.argv[1]
    index_file = sys.argv[2]
    max_sessions = int(sys.argv[3])
    max_messages = int(sys.argv[4])
    if not os.path.isdir(source_dir):
        raise SystemExit("Session directory does not exist: %s" % source_dir)
    sessions = summarize_sessions(source_dir, max_sessions, max_messages)
    log_file = os.path.join(os.path.dirname(index_file), "build-log.md")
    write_index(index_file, source_dir, sessions)
    write_log(log_file, sessions, source_dir, max_sessions)


if __name__ == "__main__":
    main()
PY

echo "✅ recall index refreshed: ${INDEX_FILE}"
echo "📘 run: ./scripts/recall-search.sh \"your query\""
