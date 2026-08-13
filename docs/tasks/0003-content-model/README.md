---
status: done
updated: 2026-08-13
depends_on: [0001]
decision: 0001
---

# 0003 — Bilingual content model

## Goal
One typed, single-source-of-truth content file (EN + ES) that every visible section reads from — so copy
lives in one place, translations stay in lockstep, and sections (tasks 0005–0008) become pure presentation.

## Context
Framing decided with the owner: **full-stack** headline, **AI/LLM as a strong secondary thread**, degree
project as a compact third card. Facts come from the CV (`docs/reference/` — the source CV) and the project
research. Accuracy corrections to honor: DyR frontend is **MUI v7 + X Data Grid/Charts** (not shadcn); the
public `text-to-sql-rag` targets a **freight** schema (the clinical NL-to-SQL is the separate confidential
work project `his_ai`).

## Plan
1. `src/content/site.ts` — types + `content: Record<Lang, SiteContent>`.
2. Sections: `meta`, `nav`, `hero`, `about`, `experience[]`, `projects[]`, `skills[]`, `languages[]`,
   `contact`, `footer`.
3. Provide a `useContent()` hook returning the current language's content.

## Done when
- [ ] `src/content/site.ts` compiles; EN and ES have identical shape (typed).
- [ ] Content is accurate to the CV + research (MUI not shadcn; freight vs clinical distinction correct).
- [ ] `useContent()` returns the right language; `pnpm build` succeeds.
