# Role Syllabi: phase-based delivery bundles

Single source for role-specific rollout. Use one role at a time.  
Keep modules in `academy/syllabus.md` and skills in this context layer.

## Engineering: phase-based bundle

### Engineering role profile
- Audience: coding teams, engineering leads, platform/product engineering.
- Scope first:
  - reusable code-context prompts
  - deterministic workflow design
  - retrieval and integration patterns
- Explicit exclusions:
  - pure HR onboarding
  - long-form customer pricing strategy
  - generic tool shopping list without execution plan
- Anti-patterns to reject:
  - turning every task into one-off prompts
  - skipping deterministic handoffs for repetitive code tasks
  - adopting cloud-first defaults where local-first was selected
- Success criteria:
  - every repeatable action has a skill or script path
  - context contracts are explicit and versioned
  - one observable safety gate exists for high-risk workflows

Phase 1 — Foundations + Prompting
- Modules: 1, 2
- Outcome: stable coding prompts + context templates usable in shell/CLI workflows.
- Deliverables:
  - `skills/context-contracts.md`
  - one `decisions/engineering-context-rules.md` draft
- Required commands:
  - `/agentic-audit`
  - `/prompt-engineering`
  - `/anthropic-academy`

Phase 2 — Workflow + Data adapters
- Modules: 3, 6, 9
- Outcome: one repeatable engineering workflow with deterministic sync contracts.
- Deliverables:
  - one workflow map for a high-value code task
  - one adapter map (`data`, `crm`, `tickets`, `repos`)
- Required commands:
  - `/deploy-workflow`
  - `/agentic-audit`
  - `/provider-stack`

Phase 3 — Safety + Observability
- Modules: 7, 8
- Outcome: measurable quality and rollback behavior.
- Deliverables:
  - safety matrix
  - quality dashboard spec
- Required commands:
  - `/incident-operating`
  - `/web-quality-audit`
  - `/quality-cycle`

Phase 4 — Provider stack + Publication
- Modules: 11, 13
- Outcome: durable stack map and public artifact.
- Deliverables:
  - public `skills/` artifact
  - local stack mapping in `decisions/provider-stack.md`
- Required commands:
  - `/provider-stack`
  - `/provider-catalog-update`
  - `/open-academy`

## Operations: phase-based bundle

### Operations role profile
- Audience: ops leadership, SRE, internal platform, security.
- Scope first:
  - control boundaries
  - incident policy and rollback
  - integration hygiene and observability
- Explicit exclusions:
  - deep algorithmic model tuning
  - project-level UI redesign tasks
  - one-off support process without guardrails
- Anti-patterns to reject:
  - treating providers as infrastructure
  - adding logging without action thresholds
  - relying on summarization-only evidence for compliance contexts
- Success criteria:
  - explicit residency and approval boundaries
  - incident and rollback policy exists before expansion
  - sync and drift checks are scheduled

Phase 1 — Risk posture + baseline
- Modules: 1, 4
- Outcome: clear boundary and residency policy with local-first decision map.
- Deliverables:
  - `decisions/local-architecture.md`
  - policy table for data and tool boundaries
- Required commands:
  - `/design-stack`
  - `/agentic-audit`

Phase 2 — Reliability scaffolding
- Modules: 7, 8
- Outcome: incident response and acceptance gates that are actually used.
- Deliverables:
  - incident runbook v1
  - rollback criteria checklist
- Required commands:
  - `/incident-operating`
  - `/design-stack`
  - `/quality-cycle`

Phase 3 — Integration + scale of controls
- Modules: 9, 12
- Outcome: stable integration control plane and drift policy.
- Deliverables:
  - sync contract doc
  - context drift policy
- Required commands:
  - `/provider-catalog-update`
  - `/agentic-audit`
  - `/quality-cycle`

Phase 4 — Team operating maturity
- Modules: 10, 11
- Outcome: repeatable handoff model and public-safe operating summary.
- Deliverables:
  - runbook v1
  - one public open-academy summary module
- Required commands:
  - `/deploy-workflow`
  - `/open-academy`

## Leadership: phase-based bundle

### Leadership role profile
- Audience: executives, transformation owners, portfolio leads.
- Scope first:
  - strategic intent and outcome framing
  - adoption gates and trade-off ownership
  - capability maturity and scaling logic
- Explicit exclusions:
  - implementation-level CLI commands
  - undocumented provider migration promises
  - policy without measurable outcomes
- Anti-patterns to reject:
  - changing scope without an acceptance check
  - skipping risk comms for speed
  - equating tool adoption with adoption outcome
- Success criteria:
  - each phase has clear completion criteria
  - governance decisions are documented and reviewable
  - value narrative maps to measurable outputs

Phase 1 — Strategic framing
- Modules: 1, 4, 10
- Outcome: executive-ready AI mandate and adoption constraints.
- Deliverables:
  - leadership framing memo
  - adoption target matrix (pilot -> department -> enterprise)
- Required commands:
  - `/agentic-audit`
  - `/design-stack`

Phase 2 — Risk and trust
- Modules: 7, 8, 12
- Outcome: explicit governance and quality model.
- Deliverables:
  - risk register
  - quality policy
- Required commands:
  - `/incident-operating`
  - `/quality-cycle`

Phase 3 — Provider strategy
- Modules: 13
- Outcome: provider roadmap with deprecation and outage paths.
- Deliverables:
  - provider decision register
  - fallback mapping for each critical lane
- Required commands:
  - `/provider-stack`
  - `/provider-catalog-update`
  - `/internet-research`

Phase 4 — Enablement and continuity
- Modules: 11, 12
- Outcome: continuous capability model and next-quarter growth loop.
- Deliverables:
  - public academy output
  - scaling plan
- Required commands:
  - `/open-academy`
  - `/agentic-audit`

## Sales and GTM: phase-based bundle

### Sales and GTM role profile
- Audience: account teams, GTM leadership, partnerships.
- Scope first:
  - package design and capability statements
  - proof formats and qualification filters
  - public-facing learning and enablement alignment
- Explicit exclusions:
  - hidden technical debt promises
  - overpromising model parity across providers
  - pricing or legal commitments without review
- Anti-patterns to reject:
  - generic one-size-fits-all offer language
  - confusing onboarding with production readiness
  - claiming deterministic results without quality gates
- Success criteria:
  - one-page offer architecture is artifact-backed
  - service claims map to published modules
  - proof format includes constraints and fallback paths

Phase 1 — Offer framing
- Modules: 1, 2, 10
- Outcome: clear offer statement with bounded capabilities.
- Deliverables:
  - sales narrative v1
  - use-case qualification sheet
- Required commands:
  - `/prompt-engineering`
  - `/agentic-audit`
  - `/open-academy`

Phase 2 — Proof and packaging
- Modules: 5, 8
- Outcome: repeatable success story structure with measurable outcomes.
- Deliverables:
  - proof template
  - quality acceptance criteria
- Required commands:
  - `/design-stack`
  - `/web-quality-audit`
  - `/quality-cycle`

Phase 3 — Service + delivery design
- Modules: 3, 9, 13
- Outcome: operational offer stack with clear routing and handoff.
- Deliverables:
  - service architecture overview
  - terminal/agent command matrix
- Required commands:
  - `/provider-stack`
  - `/provider-catalog-update`
  - `/agentic-audit`

Phase 4 — Publish and rollout
- Modules: 11
- Outcome: open public materials aligned to consulting narrative.
- Deliverables:
  - public module
  - internal pricing and delivery FAQ
- Required commands:
  - `/open-academy`
  - `/anthropic-academy`

## Customer support: phase-based bundle

### Customer support role profile
- Audience: support operations, implementation support, enablement.
- Scope first:
  - source-grounded response quality
  - escalation and fallback behavior
  - reliability + performance expectations
- Explicit exclusions:
  - unsupported or unsupported channel commitments
  - zero-review safety loops
  - ad-hoc policy changes during incidents
- Anti-patterns to reject:
  - relying on a single source for all answers
  - no confidence-bound decision policy
  - treating agent output as final decision without QA
- Success criteria:
  - retrieval and escalation paths are explicit
  - low-confidence behavior is automatic and documented
  - measurable quality and latency signals are tracked

Phase 1 — Baseline quality setup
- Modules: 1, 2, 6
- Outcome: deterministic answer quality with correct source routing.
- Deliverables:
  - retrieval quality checklist
  - context prompt contract
- Required commands:
  - `/prompt-engineering`
  - `/deploy-workflow`
  - `/agentic-audit`

Phase 2 — Knowledge and safety
- Modules: 7, 9
- Outcome: safe, auditable retrieval and escalation behavior.
- Deliverables:
  - escalation matrix
  - sync contract for support sources
- Required commands:
  - `/incident-operating`
  - `/provider-stack`

Phase 3 — Reliability and performance
- Modules: 8
- Outcome: SLA-bound performance checks and error thresholds.
- Deliverables:
  - support scorecard
  - fallback playbook for missed/low-confidence responses
- Required commands:
  - `/quality-cycle`
  - `/web-quality-audit`

Phase 4 — Publication and maturity
- Modules: 11, 12
- Outcome: reusable training and continuous improvement loop.
- Deliverables:
  - one public support playbook
  - support growth plan
- Required commands:
  - `/open-academy`
  - `/incident-operating`
