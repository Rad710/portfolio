---
status: done
updated: 2026-08-13
depends_on: [0004]
decision: 0001
---

# 0008 — Skills + Contact sections

## Goal
Finish the visible page: a grouped skills grid + spoken languages, and a contact section with email, social
links, and the EN/ES CV download buttons (the PDFs themselves are generated in 0009).

## Plan
1. `src/components/sections/skills.tsx` — read `skills.groups` (returnObjects) into labeled tag blocks;
   append `languages.items` as a name·level list.
2. `src/components/sections/contact.tsx` — title + lead, a large mailto link, GitHub/LinkedIn buttons, and
   two CV download buttons (`site.cv.en` / `site.cv.es`) with the `download` attribute.
3. Wire both into `src/app/page.tsx`; remove the remaining stubs.

## Done when
- [ ] All five skill groups + four spoken languages render in EN + ES.
- [ ] Contact shows working email/GitHub/LinkedIn links and both CV buttons (pointing at /cv/*.pdf).
- [ ] `pnpm build` succeeds; 0 console errors; page is fully real content end-to-end.
