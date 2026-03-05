# Anthropic Academy Import Map (for ctx)

Last reviewed: 2026-03-05.
Context policy: this map is for internal curriculum design only and remains content-first, not execution infrastructure.

What this site is useful for:
- Fast onboarding sequence from basics to production.
- Practical AI fluency framing for non-engineers and executives.
- Repeatable patterns for coding workflow, API integration, and enterprise enablement.
- Team-scale rollout and trainer-level enablement.

Source note:
`anthropic.skilljar.com` is mostly JS-rendered. Course names and structure are verified with public snippets and stable external references, then normalized into local markdown.

## Course map by adoption phase

### Foundation layer
- [Claude 101](https://anthropic.skilljar.com/claude-101)  
  Core operational fluency and model interaction baseline.
- [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations)  
  Core framework often referenced as 4D fluency:
  - Delegation
  - Description
  - Discernment
  - Diligence

### Development layer
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)  
  Hands-on developer workflow and agent-assisted coding rhythm.
- [Building with the Claude API](https://anthropic.skilljar.com/claude-with-the-anthropic-api)  
  API product/feature integration discipline.

### Integration layer
- [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol)  
  Tool/resource abstraction model and context handoff patterns.
- [Model Context Protocol: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics)  
  Advanced production considerations if protocol is in use.
- [Introduction to Agent Skills](https://anthropic.skilljar.com/introduction-to-agent-skills)  
  Team-scalable behavior and behavior packaging.

### Operations layer
- [Driving Enterprise Adoption of Claude](https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude)  
  Adoption, rollout, and change-management patterns.
- [Enterprise Train-the-Trainer](https://anthropic.skilljar.com/enterprise-train-the-trainer)  
  Internal trainer playbooks for capability multiplication.

### Platform/lane layer
- [Claude with Amazon Bedrock](https://anthropic.skilljar.com/claude-in-amazon-bedrock)
- [Claude with Google Vertex AI](https://anthropic.skilljar.com/claude-with-google-vertex)

### Audience-specific enablement
- [AI Fluency for Students](https://anthropic.skilljar.com/ai-fluency-for-students)
- [AI Fluency for Educators](https://anthropic.skilljar.com/ai-fluency-for-educators)
- [AI Fluency for Nonprofits](https://anthropic.skilljar.com/ai-fluency-for-nonprofits)
- [Teaching AI Fluency](https://anthropic.skilljar.com/teaching-ai-fluency)

## Why this fits ctx

- It gives a high-signal sequence from onboarding to rollout:
  - foundations → developer workflow → integration → enterprise operations → internal enablement.
- The curriculum is modular, so we can map modules to `academy/syllabus.md` without locking to one model or one protocol.
- It supports the exact thesis: context layer and execution disciplines matter more than any single tool model.

## Integration into ctx (practical conversion)

For each selected course block:
1. Create or update one `skills/` wrapper (if reusable behavior is shared across teams).
2. Create one `academy/` module artifact in the same scope as delivery lane.
3. Tag deterministic routines to scripts when repeated outcomes are stable.
4. Keep MCP as an optional adapter layer only; command/terminal + Markdown artifacts stay the portability layer.

## 6-week adaptation slice

1. Week 1: Foundations (`Claude 101`, `AI Fluency`).
2. Week 2: Developer workflow (`Claude Code in Action`).
3. Week 3: API and product integration (`Building with the Claude API`).
4. Week 4: Integration plane (`Introduction to MCP`).
5. Week 5: Team-level operation (`Agent Skills`, `Driving Enterprise Adoption`).
6. Week 6: Enablement (`Enterprise Train-the-Trainer` + role-specific AI fluency tracks).

## Curriculum mapping to `academy/syllabus.md`

- Module 2: prompting + context quality → inject 4D fluency and task description standards.
- Module 3: workflow design → map agent role boundaries from skills and workflow playbooks.
- Module 8: evaluation → add API response validation, model choice drift checks.
- Module 13: stack depth → connect provider routing, terminal workflows, and optional MCP boundaries.

## Outputs for this track

- `skills/anthropic-academy.md` (source-to-adaptation bridge).
- `academy/provider-stack.md` (agentic workflow and context stack implications).
- Public academy modules with CLI examples and repeatable exercises.

## Optional Anthropic ecosystem complements

- Interactive prompt-engineering tutorial repo:
  - https://github.com/anthropics/prompt-eng-interactive-tutorial
  - 5-section curriculum with practical exercises and notebooks.
  - Useful as a deepening track after Module 2.
