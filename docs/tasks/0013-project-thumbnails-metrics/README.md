---
status: done
updated: 2026-08-13
depends_on: [0007]
decision: 0001
---

# 0013 — Project thumbnails + derived metrics

## Goal
Make the case-study cards more visual and concrete: a browser-framed screenshot of each flagship (captured
from the live apps) and a row of **real, derived** metrics — the two things the 2026 research flagged as
differentiators.

## Context
Screenshots captured from the live apps via headless browser: text-to-sql-rag (registered a demo account,
asked a query → the agentic SQL + result table, synthetic/mock data) and D y R Transportes (login screen —
interim; swap for a populated dashboard once the demo instance is deployed on the VM). Metrics are counted
from the real codebases (no fabrication): text-to-sql-rag — 80% coverage floor, 4 safety layers, 14 ADRs;
DyR — 11 REST resource groups, 15 data models, 8 business modules.

## Plan
1. Process screenshots → `public/projects/{text-to-sql-rag,dyr-transportes}.png` (done).
2. `ProjectItem`: add optional `image` + `stats: {value,label}[]`.
3. `site.ts`: add image + stats to the two featured projects (EN + ES).
4. `projects.tsx` `FeaturedCard`: browser-framed screenshot (top) + a 3-up stats row.
5. Build + screenshot-verify.

## Done when
- [ ] Both featured cards show a framed screenshot with the live URL in the frame bar.
- [ ] Each shows a 3-up metrics row; values are real (counted from the repos).
- [ ] `pnpm build` + `biome check` clean; 0 console errors; looks right in dark + light + mobile.
