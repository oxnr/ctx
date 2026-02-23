# Skill: /prompt-engineering

## Objective
Produce reliable prompt specs and command prompts that survive model and provider changes.

## Inputs
- task intent and expected output
- known constraints (security, tone, output shape)
- target format (markdown or plain text)

## Steps
1. Start with explicit role and objective.
2. Separate context from instructions from expected output.
3. Add delimiters around user-provided input.
4. Provide success criteria:
   - format requirements
   - edge cases
   - validation checks
5. Add 1–2 examples when output is ambiguous.
6. Keep iterative loops explicit:
   - verify assumptions
   - refine prompt
   - lock format

## Output
- A markdown block with:
  - prompt heading
  - constrained scope
  - output format schema
  - acceptance criteria
