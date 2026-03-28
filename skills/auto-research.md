# Skill: /auto-research

## Objective
Research any question or build any artifact through autonomous generate-evaluate-iterate loops using local Ollama models.

## Aliases
`/auto-research`, `/research-loop`

## Inputs
- **Question or problem** (required): any research question, build request, or analysis task
- **Budget** (optional): max attempts, default 50
- **Task type override** (optional): `research`, `code`, `analysis`, `creative`

## Prerequisites
- Ollama running: `ollama serve`
- Models pulled: `ollama pull qwen3:8b && ollama pull qwen3:1.7b`

## Steps

### 1. Classify and research
- Determine task type (research/code/analysis/creative) from the question
- If the question involves current events, recent data, or domain expertise beyond training data: run web searches and save results to `experiments/<session>/context.md`
- If the question is self-contained (e.g., "build a CLI tool"): skip web research

### 2. Bootstrap eval
```bash
cd /Users/onr/Documents/ctx/scripts/auto-research
uv run python bootstrap.py "<question>" [--type <override>]
```
- Review the generated `eval.yaml` — check that:
  - Required sections make sense for this question
  - Judge rubric captures what "good" means for this specific task
  - Done threshold is reasonable (0.65-0.80 typical)
- Edit `eval.yaml` if criteria are wrong before proceeding

### 3. Launch inner loop
```bash
uv run python research.py run "<question>" --budget 50
```
- Monitor stdout for score progression
- The loop runs autonomously: generate → evaluate → keep/refine/pivot

### 4. Handle escalations
- If exit code 1 (BLOCKED): read `experiments/<session>/blocked.json`
  - Do additional web research and update `context.md`
  - Edit `eval.yaml` to adjust criteria (maybe too strict)
  - Edit `prompt.yaml` to improve generation guidance
  - Resume: `uv run python research.py resume <session-id>`
- If exit code 2 (BUDGET): check `best.md` — may be good enough

### 5. Deliver result
- Read `experiments/<session>/best.md` — this is the best artifact
- For research tasks: verify key claims via web search if needed
- For code tasks: run the generated code to confirm it works
- Present the result to the user

### 6. Capture lessons
- The loop auto-captures lessons to `lessons.md`
- Review and prune if lessons are too noisy

## Output
- `experiments/<session>/best.md` — best artifact
- `experiments/<session>/ledger.jsonl` — scored attempt history
- `experiments/<session>/state.json` — final state
- `lessons.md` — updated cross-run learnings

## Failure handling
- Ollama not running → prompt user to start it
- Model not pulled → prompt user to pull it
- BLOCKED after max pivots → present best attempt, suggest changing eval criteria
- All guards failing → eval criteria likely too strict, relax thresholds

## Trigger tests
**Positive** (should invoke):
- "Research how mRNA vaccines work and iterate until the answer is thorough"
- "Auto-research the best approaches to distributed consensus"
- "Build me a CSV parser and keep improving it"

**Negative** (should NOT invoke):
- "What time is it?" (not a research task)
- "Commit these changes" (git operation)
- "Review this PR" (code review)
