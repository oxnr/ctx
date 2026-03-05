# Skill: /quality-cycle

## Objective
Run a recurring web-quality gate on the repo or published site before release.

## Why
Public assets and client-facing documentation should pass the same quality baseline on a cadence, not only when a bug appears.

## Trigger
- `quality-cycle`
- `weekly quality gate`
- `run quality cycle`

## Inputs
- `target` (optional): project root or static output folder to scan. Defaults to repository root.
- `max_issues` (optional): hard cap for blocking issues. Default `0`.
- `max_warnings` (optional): hard cap for warnings. Default `9999`.

## Steps
1. Run `./scripts/quality-cycle.sh <target> <max_issues> <max_warnings>`.
   - Example: `./scripts/quality-cycle.sh . 0 50`
2. Confirm report artifacts:
   - `reports/quality-audit/web-quality-audit-latest.json`
   - `reports/quality-audit/quality-cycle-<timestamp>.json`
3. If non-zero return code:
   - open `reports/quality-audit/web-quality-audit-latest.json`
   - fix critical issues first
   - re-run until pass or acceptance exception is approved.
4. Record the outcome in your decision/update log when release blockers are deferred.

## Recurring use
- Weekly maintenance pass.
- Mandatory pre-release pass whenever public-facing markdown/landing content changes.

## Output
- Gate result: pass/fail with issue/warning counts.
- Immutable JSON artifact in `reports/quality-audit/`.
- A short remediation list for open warnings (if any).
