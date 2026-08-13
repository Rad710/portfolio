---
status: done
updated: 2026-08-13
depends_on: []
decision: 0001
---

# 0001 — Project scaffold + design system

## Goal
Stand up the project on the idiomatic 2026 stack and establish the visual language everything else builds
on, so later tasks only add content and sections — not infrastructure. Governed by
[decision 0001](../../decisions/0001-stack-and-design.md).

## Plan
1. Scaffold Next.js 16 (App Router, TypeScript, Tailwind v4, ESLint, `src/`, pnpm) — done via
   `create-next-app`.
2. Add `motion` and `babel-plugin-react-compiler`.
3. `next.config.ts`: `output: 'standalone'` + `reactCompiler: true`.
4. Design tokens + typography in `src/app/globals.css` — class-based `.dark`, warm near-monochrome palette,
   single amber accent, `.eyebrow`/`.font-display` utilities, reduced-motion + focus-visible rules.
5. Fonts in `src/app/layout.tsx`: Fraunces (display), Geist Sans (body), Geist Mono (labels).
6. Establish the AI-assisted workflow docs (`docs/tasks/`, `docs/decisions/`, `docs/ai-workflow.md`).

## Done when
- [ ] `pnpm build` succeeds with standalone output and React Compiler enabled.
- [ ] Fonts and CSS tokens load; `.dark` variant compiles.
- [ ] Docs workflow scaffolding (tasks backlog, decision 0001, ai-workflow) committed.
