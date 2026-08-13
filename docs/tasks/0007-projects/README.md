---
status: done
updated: 2026-08-13
depends_on: [0004, 0006]
decision: 0001
---

# 0007 — Projects / case studies

## Goal
The centerpiece: `text-to-sql-rag` and D y R Transportes as proper Problem → Approach → Outcome case
studies with live/code links, plus a compact Sentiment Analysis card. This is what recruiters read most.

## Plan
1. Add localized labels (`problemLabel`/`approachLabel`/`outcomeLabel`) to content — done.
2. `src/components/sections/projects.tsx` — read `projects.items` (returnObjects); split featured vs
   compact. Featured = large bordered card: name (serif) + live/code links, tagline, three labeled blocks
   (problem/approach/outcome), tech tags. Compact = smaller card (name, tagline, tech, code link).
3. `ProjectLinks` sub-component (Live → ExternalLink, Code → GitHub icon), reusing `TechTags`.
4. Wire into `src/app/page.tsx`; drop the work stub.

## Done when
- [ ] Two featured case studies render with all three blocks, tech, and working live/code links.
- [ ] Compact card renders. Links open the real URLs (text-to-sql live, DyR live, GitHub repos).
- [ ] `pnpm build` succeeds; 0 console errors; screenshot reads as the strongest section.
