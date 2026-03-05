#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <file-or-directory>"
  echo "Runs fast, static HTML quality checks and prints valid JSON."
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

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required for $0" >&2
  exit 1
fi

python3 - "$TARGET" <<'PY'
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional


target = Path(sys.argv[1])


def repo_root_for(path: Path) -> Optional[Path]:
    start = path if path.is_dir() else path.parent
    try:
        proc = subprocess.run(
            ["git", "-C", str(start), "rev-parse", "--show-toplevel"],
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return None
    return Path(proc.stdout.strip())


def collect_tracked_html_files(repo_root: Path, path: Path):
    try:
        proc = subprocess.run(
            ["git", "-C", str(repo_root), "ls-files", "*.html", "*.htm"],
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return None

    tracked = [repo_root / line for line in proc.stdout.splitlines() if line.strip()]

    if path.is_file():
        resolved = path.resolve()
        return [file_path for file_path in tracked if file_path.resolve() == resolved]

    resolved_target = path.resolve()
    return [file_path for file_path in tracked if resolved_target in file_path.resolve().parents or file_path.resolve() == resolved_target]


def collect_html_files(path: Path):
    repo_root = repo_root_for(path)
    if repo_root is not None:
        tracked = collect_tracked_html_files(repo_root, path)
        if tracked is not None:
            return sorted(tracked)

    if path.is_file():
        if path.suffix.lower() in {".html", ".htm"}:
            return [path]
        return []
    return sorted(
        file_path
        for file_path in path.rglob("*")
        if file_path.is_file() and file_path.suffix.lower() in {".html", ".htm"}
    )


files = collect_html_files(target)
issues = []
warnings = []

checks = [
    (issues, re.compile(r"<!doctype html", re.IGNORECASE), "missing HTML5 doctype"),
    (warnings, re.compile(r"<meta[^>]*charset=[\"']?utf-8", re.IGNORECASE), "missing charset utf-8 declaration"),
    (issues, re.compile(r"<meta[^>]*name=[\"']viewport[\"']", re.IGNORECASE), "missing viewport meta tag"),
    (issues, re.compile(r"<html[^>]*lang=", re.IGNORECASE), "missing html lang attribute"),
    (issues, re.compile(r"<title[^>]*>.*?</title>", re.IGNORECASE | re.DOTALL), "missing title tag"),
]

img_pattern = re.compile(r"<img\b[^>]*>", re.IGNORECASE | re.DOTALL)

for file_path in files:
    try:
        content = file_path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        continue

    for bucket, pattern, message in checks:
        if not pattern.search(content):
            bucket.append(f"{file_path}: {message}")

    if any("alt=" not in tag.lower() for tag in img_pattern.findall(content)):
        warnings.append(f"{file_path}: possible images without alt text")

    if "http://" in content:
        warnings.append(f"{file_path}: contains plain http links")

    if re.search(r"onclick=", content, re.IGNORECASE):
        warnings.append(f"{file_path}: inline event handlers detected (accessibility and CSP risk)")

result = {
    "target": str(target),
    "scanned_count": len(files),
    "issue_count": len(issues),
    "warning_count": len(warnings),
    "issues": issues,
    "warnings": warnings,
}

json.dump(result, sys.stdout, indent=2)
sys.stdout.write("\n")

if files:
    print(f"Summary: {len(issues)} issues, {len(warnings)} warnings", file=sys.stderr)
    print(f"Targets scanned: {len(files)}", file=sys.stderr)
else:
    print(f"No html files found under: {target}", file=sys.stderr)
    print("Summary: 0 issues, 0 warnings", file=sys.stderr)
    print("Targets scanned: 0", file=sys.stderr)
PY
