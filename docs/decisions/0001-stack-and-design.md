---
status: accepted
date: 2026-08-13
---

# 0001 — Next.js 16 (App Router) + React 19 + Tailwind v4 + Motion, editorial-minimal, dark-first, bilingual

## Context
A personal portfolio for a full-stack engineer (backend-leaning) targeting remote/international roles. It
must (a) read as senior/experienced to recruiters who skim, (b) demonstrate current frontend competence
without over-engineering, (c) ship EN/ES throughout with downloadable EN/ES CVs, and (d) self-host as a
Node Docker image on a VM — matching the team's existing `node.Dockerfile` convention (Next.js standalone,
`node:22.22.1`, non-root `nextjs` user, port 3000).

## Decision
- **Framework:** Next.js 16 (App Router) with `output: 'standalone'` and the **React Compiler** enabled
  (`reactCompiler: true`) — auto-memoization, no manual `useMemo`/`useCallback`.
- **UI:** React 19, **Tailwind CSS v4** (CSS-first tokens, class-based `.dark` variant), **Motion** for
  tasteful, reduced-motion-aware animation.
- **Design:** editorial-minimal — display serif (Fraunces) headings + Geist Sans body + Geist Mono labels,
  warm near-monochrome palette with a single amber accent, dark-first with a light toggle.
- **i18n:** lightweight in-app language context (EN/ES) + toggle, not URL-routed locales — the content is
  static and small; a provider + dictionary is simpler and avoids duplicate-route SEO overhead.
- **Deploy:** standalone Node server in a Docker image mirroring the HIS `node.Dockerfile`.

## Consequences
- Good: idiomatic 2026 stack; standalone output is small and matches the owner's real deployment pattern;
  React Compiler keeps the code clean; restraint reads as senior and is low-risk to execute well.
- Good: single-page + in-app i18n is fast, static-friendly, and trivial to host anywhere.
- Bad / cost: in-app i18n (no `/es` routes) means language is not in the URL — acceptable for a one-page
  portfolio; revisit if the site grows to many indexable pages.

## Alternatives considered
- **Astro / plain Vite** — lighter, but the owner's deploy convention and the "show I can drive modern
  Next/React" goal favor Next.js.
- **next-intl with routed locales** (`/en`, `/es`) — better for large multi-page SEO; overkill for one page.
- **shadcn/ui + Radix** — great primitives, but a hand-built minimal system better demonstrates taste and
  keeps the bundle lean; may adopt selectively if a complex primitive is needed.
- **Flashy/animated hero** — higher risk of reading junior; restraint chosen deliberately.
