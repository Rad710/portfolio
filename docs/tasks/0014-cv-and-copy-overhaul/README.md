---
status: done
updated: 2026-08-14
depends_on: [0009]
decision: 0004
---

# 0014 — CV → RenderCV + research-driven copy overhaul

## Goal
The site and CV copy read as AI-generated (slogan taglines like "software hospitals run on"). Rewrite it to
sound human — grounded in real portfolio- and résumé-writing guidance rather than instinct — and rebuild the
CV from scratch on RenderCV (YAML → PDF) per decision 0004. Result: one human voice across the site, a
one-page bilingual CV, both audited against authoritative guides.

## Context
- Copy grounding + the CV audit (principles, verdicts, sources) → [`research.md`](research.md).
- CV toolchain rationale → [`../../decisions/0004-rendercv-for-cv.md`](../../decisions/0004-rendercv-for-cv.md).
  Supersedes the hand-HTML CV from task 0009; the old `cv/*.html` sources were removed.
- Code touched: `src/content/site.ts`, `cv/cv-{en,es}.yaml`, `scripts/build-cv.sh`, `README.md`, `.gitignore`.

## Plan
1. Rewrite `site.ts` copy (hero, about, experience summary, skills lead, project taglines/descriptions),
   EN + ES — plainer, first-person, fewer em-dashes/triads, no slogans.
2. Migrate the CV: author `cv/cv-en.yaml` + `cv/cv-es.yaml` (`engineeringresumes` theme); add
   `scripts/build-cv.sh`; gitignore `rendercv_output/`; delete `cv/cv-{en,es}.html`; update the README CV
   section.
3. Apply CV-audit fixes: drop the first-person pronoun from the résumé summary, cut the "minor launch-day
   issues" hedge, tighten the React/Lit bullet, split the JSP/Struts bullet and add the real ~60% rsbuild
   build-time metric. Mirror the applicable fixes (metric, hedge, tightening) into the website experience
   bullets — keeping first person there.
4. Rebuild both PDFs; verify one page each.

## Done when
- [x] `site.ts` copy reads as human (no slogan taglines, reduced em-dashes/triads), EN + ES.
- [x] CV built from `cv/*.yaml` via RenderCV; PDFs land in `public/cv/` at the linked filenames; one page each.
- [x] Old `cv/*.html` removed; `README.md` + `.gitignore` updated.
- [x] CV-audit fixes applied (no résumé pronoun, no hedge, ~60% metric); website bullets aligned.
- [x] `pnpm build` + `biome check` clean.

---
Log → [`discussion.md`](discussion.md) · findings → [`research.md`](research.md)
