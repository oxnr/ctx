#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AQT_SCRIPT="${ROOT_DIR}/scripts/web-quality-audit.sh"
REPORT_DIR="${ROOT_DIR}/reports"
ARTIFACT_DIR="${REPORT_DIR}/quality-audit"

target="${1:-${ROOT_DIR}}"
max_issues="${2:-0}"
max_warnings="${3:-9999}"

timestamp() {
  date -u +"%Y-%m-%dT%H:%M:%SZ"
}

run_ts="$(date -u +"%Y%m%dT%H%M%SZ")"
ts="$(timestamp)"
mkdir -p "$ARTIFACT_DIR"

if [[ ! -x "$AQT_SCRIPT" ]]; then
  echo "Missing executable script: $AQT_SCRIPT" >&2
  exit 1
fi

temp_file="$(mktemp)"
trap 'rm -f "$temp_file"' EXIT

echo "Running recurring web quality cycle @ ${ts}"
echo "Target: ${target}"
echo "Limits: issues <= ${max_issues}, warnings <= ${max_warnings}"
echo "Output: ${ARTIFACT_DIR}/web-quality-audit-${run_ts}.json"

"$AQT_SCRIPT" "$target" | tee "$temp_file"

summary_line="$(awk '/^Summary:/{print $0; exit}' "$temp_file" || true)"
if [[ -z "$summary_line" ]]; then
  echo "No quality summary emitted by audit script. Aborting." >&2
  exit 1
fi

issues="$(awk '/^Summary:/{print $2}' "$temp_file")"
warnings="$(awk '/^Summary:/{print $4}' "$temp_file")"
scanned="$(awk '/^Targets scanned:/{print $3}' "$temp_file")"

latest_report="${ARTIFACT_DIR}/web-quality-audit-latest.json"
cp "$temp_file" "${ARTIFACT_DIR}/web-quality-audit-${run_ts}.json"
cp "$temp_file" "$latest_report"

{
  echo "{"
  echo "  \"timestamp\": \"${ts}\","
  echo "  \"target\": \"${target}\","
  echo "  \"max_issues\": ${max_issues},"
  echo "  \"max_warnings\": ${max_warnings},"
  echo "  \"issues\": ${issues},"
  echo "  \"warnings\": ${warnings},"
  echo "  \"scanned\": ${scanned},"
  echo "  \"latest_audit\": \"${ARTIFACT_DIR}/web-quality-audit-${run_ts}.json\""
  echo "}"
} > "${ARTIFACT_DIR}/quality-cycle-${run_ts}.json"

if (( issues > max_issues )); then
  echo "Quality gate failed: issues=${issues} > max_issues=${max_issues}" >&2
  exit 1
fi

if (( warnings > max_warnings )); then
  echo "Quality gate warning: warnings=${warnings} > max_warnings=${max_warnings}" >&2
  exit 1
fi

echo "Quality gate passed."
