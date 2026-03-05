# Open Academy Syllabus (ctx)

This is the single, active syllabus for all engagements.

## Format
- Bounded module blocks with explicit scope and acceptance.
- Output for every module: markdown module file + `/` companion skill + one validation checklist.
- One published artifact is mandatory.
- All outputs remain markdown or plain text.
- Each module includes one `/harness-loop` pass to avoid regressions before publish.

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
  - Add Anthropic Academy-aligned fluency (Delegation, Description, Discernment, Diligence) for teams using enterprise agents.
- Deliverables:
  - `skills/context-contracts.md`
  - test prompts and acceptance checks
  - `academy/anthropic-academy.md` mapping for current cohort
- Trigger skill:
  - `/prompt-engineering`
  - `/anthropic-academy`

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
  - quality dashboard spec
  - web quality baseline and remediation plan for release candidates
- Trigger skill:
  - `/design-stack`
  - `/deploy-workflow`
  - `/web-quality-audit`
  - `/quality-cycle`

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

13) Provider stack and implementation depth
- Objectives:
  - Build a full end-to-end AI stack map for every use case.
  - Connect providers, routing, terminals, coding agents, and observability tooling.
- Deliverables:
  - provider-catalog with local registry and sync cadence
  - terminal/agent command map by role
  - image, audio, and multimodal fallback playbook
- Trigger skills:
  - `/provider-stack`
  - `/provider-catalog-update`
  - `/internet-research`

## Role-to-module mapping

Use this mapping to assign cohorts and teaching order per audience.

### Engineering
- Primary modules:
  - 2) Prompting and context quality
  - 3) Agentic thinking and workflow design
  - 5) Context engineering
  - 6) RAG and knowledge systems
  - 9) Data and integrations
  - 13) Provider stack and implementation depth
- Delivery focus:
  - deterministic prompt contracts
  - agent handoff patterns
  - code-aware validation hooks
- Companion skills:
  - `/prompt-engineering`
  - `/deploy-workflow`
  - `/agentic-audit`
  - `/provider-stack`

### Operations
- Primary modules:
  - 1) Foundations: AI in production
  - 4) Local-first architecture
  - 7) Safety and reliability
  - 8) Evaluation and observability
  - 10) Team operating model
  - 12) Scale and maintain
- Delivery focus:
  - policy and residency boundaries
  - runbook discipline
  - incident and rollback behavior
- Companion skills:
  - `/design-stack`
  - `/incident-operating`
  - `/quality-cycle`
  - `/deploy-workflow`

### Leadership
- Primary modules:
  - 1) Foundations: AI in production
  - 4) Local-first architecture
  - 10) Team operating model
  - 11) Productive publishing
  - 12) Scale and maintain
  - 13) Provider stack and implementation depth
- Delivery focus:
  - adoption outcomes and risk posture
  - capability growth across teams
  - budget/quality/rollback trade-offs
- Companion skills:
  - `/agentic-audit`
  - `/open-academy`
  - `/design-stack`
  - `/quality-cycle`

### Sales and GTM
- Primary modules:
  - 1) Foundations: AI in production
  - 2) Prompting and context quality
  - 5) Context engineering
  - 8) Evaluation and observability
  - 11) Productive publishing
  - 13) Provider stack and implementation depth
- Delivery focus:
  - value narratives by use-case
  - offer packaging from service to training
  - transparent model constraints and commitments
- Companion skills:
  - `/prompt-engineering`
  - `/open-academy`
  - `/provider-stack`
  - `/anthropic-academy`

### Customer support
- Primary modules:
  - 1) Foundations: AI in production
  - 2) Prompting and context quality
  - 6) RAG and knowledge systems
  - 7) Safety and reliability
  - 8) Evaluation and observability
  - 9) Data and integrations
- Delivery focus:
  - response accuracy and escalation policy
  - retrieval quality for support content
  - measurable error boundaries and fallback plans
- Companion skills:
  - `/web-quality-audit`
  - `/incident-operating`
  - `/provider-catalog-update`
  - `/deploy-workflow`

## Role launch command packages

Use one role command to pull the full phase bundle:
- `/cohort-syllabus --role engineering` (+ `/syllabus-engineering`)
- `/cohort-syllabus --role operations` (+ `/syllabus-operations`)
- `/cohort-syllabus --role leadership` (+ `/syllabus-leadership`)
- `/cohort-syllabus --role sales` (+ `/syllabus-sales`)
- `/cohort-syllabus --role support` (+ `/syllabus-support`)

Reference artifact:
- `academy/role-syllabi.md` contains the phase bundle.

## Delivery mapping
- Engagement mode: `4 tracks + 1 blended academy`.
- Weekly cadence:
  - Week 1: /agentic-audit, /design-stack, /agent-library-update
  - Week 2: /deploy-workflow, /prompt-engineering, /provider-stack
  - Week 3: /open-academy, /incident-operating, /provider-catalog-update

## Completion criteria
- The firm can produce the same process with another model or stack.
- At least 70% of outputs are generated from markdown artifacts.
- All new modules remain reusable outside one client context.
