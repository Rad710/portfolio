---
status: done
updated: 2026-08-13
depends_on: [0004]
decision: 0001
---

# 0006 — Experience section

## Goal
Render the two roles (Taiwan ICDF / National HIS, and ROSHKA) as a clean, scannable experience list with
quantified bullets and tech tags — the section recruiters read most closely.

## Plan
1. `src/components/tech-tags.tsx` — small reusable pill list (shared with projects in 0007).
2. `src/components/sections/experience.tsx` — read `experience.items` (returnObjects); per entry a
   two-column row: period + location (left, mono) and role · company · summary · bullets · tech (right),
   separated by hairlines.
3. Wire into `src/app/page.tsx`; drop the experience stub.

## Done when
- [ ] Both roles render with all bullets, period, location, and tech tags, in EN + ES.
- [ ] `pnpm build` succeeds; 0 console errors; reads well mobile + desktop.
