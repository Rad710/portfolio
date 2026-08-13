---
status: done
updated: 2026-08-13
depends_on: [0004]
decision: 0001
---

# 0005 — Hero + About sections

## Goal
Turn the placeholder hero into a proper landing (eyebrow, serif headline, lead, two CTAs, location) and
build the real About section from the bilingual content — the first two things a recruiter reads.

## Plan
1. `src/components/sections/hero.tsx` — full-height hero; primary CTA "See my work" → `#work`, secondary
   "Get in touch" → `#contact`; location line; subtle scroll cue.
2. `src/components/sections/about.tsx` — editorial two-column: sticky heading (left) + lead statement and
   body paragraphs (right), staggered `Reveal`.
3. Numbered section eyebrows (e.g. `01 / About`) for an editorial rhythm; add a small `sectionLabel` helper.
4. Update `src/app/page.tsx` to render `<Hero/>` + `<About/>`; keep stubs for experience/work/skills/contact.

## Done when
- [ ] Hero renders with working CTAs and reads well at mobile + desktop widths.
- [ ] About renders `about.lead` + all `about.body` paragraphs in both languages.
- [ ] `pnpm build` succeeds; 0 console errors in-browser; screenshot looks right in dark + light.
