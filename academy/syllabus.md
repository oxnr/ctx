# Open Academy Syllabus (ctx)

This is the single, active syllabus for all engagements.

## Format
- Duration: 3 weeks per module.
- Output for every module: markdown module file + `/` companion skill + one validation checklist.
- One published artifact is mandatory.
- All outputs remain markdown or plain text.

## Sequence

1) Foundations: AI in production
- Objectives:
  - Explain the AI systems landscape and context limits.
  - Define what local-first means for your stack.
- Deliverables:
  - `decisions/ai-foundations.md`
  - glossary + baseline prompt templates
- Trigger skills:
  - `/agentic-audit`
  - `/prompt-engineering`

2) Prompting and context quality
- Objectives:
  - Move from ad-hoc prompts to reusable prompt contracts.
  - Reduce variance in outputs and format.
- Deliverables:
  - `skills/context-contracts.md`
  - test prompts and acceptance checks
- Trigger skill:
  - `/prompt-engineering`

3) Agentic thinking and workflow design
- Objectives:
  - Break work into reliable agent tasks.
  - Define boundaries between planning, execution, review, and publish.
- Deliverables:
  - workflow map for one high-value use case
  - handoff checklist
- Trigger skills:
  - `/deploy-workflow`
  - `/agentic-audit`

4) Local-first architecture
- Objectives:
  - Choose deployment shape: on-device, local server, private-cloud, hybrid.
  - Define redaction and residency rules.
- Deliverables:
  - `decisions/local-architecture.md`
  - deployment option matrix
- Trigger skill:
  - `/design-stack`

5) Context engineering
- Objectives:
  - Build persistent, portable context artifacts.
  - Separate volatile logs from durable project truth.
- Deliverables:
  - context index
  - decision history page
- Trigger skill:
  - `/prompt-engineering`

6) RAG and knowledge systems
- Objectives:
  - Convert docs/code/email/slack into retrievable knowledge.
  - Keep retrieval deterministic and auditable.
- Deliverables:
  - one retrieval pipeline spec
  - query quality checks
- Trigger skills:
  - `/design-stack`
  - `/agentic-audit`

7) Safety and reliability
- Objectives:
  - Add failure modes, validation, and escalation.
  - Define what can be automated and what must stay human-approved.
- Deliverables:
  - safety matrix
  - rollback policy
- Trigger skill:
  - `/incident-operating`

8) Evaluation and observability
- Objectives:
  - Standardize quality metrics and acceptance criteria.
  - Enable reproducible score tracking.
- Deliverables:
  - evaluation set for top use case
  - weekly quality dashboard spec
- Trigger skill:
  - `/design-stack`
  - `/deploy-workflow`

9) Data and integrations
- Objectives:
  - Build connector map for codebase, CRM, ticketing, and communication sources.
  - Ensure deterministic synchronization and audit trails.
- Deliverables:
  - sync contract doc
  - adapter list by priority
- Trigger skills:
  - `/agentic-audit`

10) Team operating model
- Objectives:
  - Set ownership, cadence, and handoff standards.
  - Define capability progression for each function.
- Deliverables:
  - role matrix
  - runbook v1
- Trigger skill:
  - `/deploy-workflow`

11) Productive publishing
- Objectives:
  - Turn each engagement output into reusable public learning material.
  - Keep non-public material isolated.
- Deliverables:
  - one public skill and one public module
  - de-risked template pack
- Trigger skill:
  - `/open-academy`

12) Scale and maintain
- Objectives:
  - Create repeatable pattern for next quarter.
  - Establish upgrade cadence without breaking context.
- Deliverables:
  - scale plan
  - context drift policy
- Trigger skills:
  - `/agentic-audit`
  - `/open-academy`

## Delivery mapping
- Engagement mode: `4 tracks + 1 blended academy`.
- Weekly cadence:
  - Week 1: /agentic-audit, /design-stack
  - Week 2: /deploy-workflow, /prompt-engineering
  - Week 3: /open-academy and quality hardening

## Completion criteria
- The firm can produce the same process with another model or stack.
- At least 70% of outputs are generated from markdown artifacts.
- All new modules remain reusable outside one client context.
