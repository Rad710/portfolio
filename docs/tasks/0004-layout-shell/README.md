---
status: done
updated: 2026-08-13
depends_on: [0002, 0003]
decision: 0001
---

# 0004 — Layout shell

## Goal
The frame every section drops into: a sticky top nav (section links + résumé + the theme/language
toggles), a footer, and a reusable animated `Section`/`Reveal` primitive that respects
`prefers-reduced-motion`. After this, sections (0005–0008) are pure content.

## Context
Editorial-minimal per [decision 0001](../../decisions/0001-stack-and-design.md). Motion is the animation
lib; `MotionConfig reducedMotion="user"` makes reveals automatically a11y-safe. Nav labels and links come
from the content model (`nav.*`).

## Plan
1. `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge).
2. `src/components/providers.tsx` — client wrapper: `MotionConfig` + `I18nProvider` (+ `AppInit`).
3. `src/components/section.tsx` — `Section` (id + scroll-margin) and `Reveal` (scroll-in fade/slide,
   `once`), plus a `SectionHeading` (eyebrow + title).
4. `src/components/nav.tsx` — sticky, blurred, hairline border; monogram/name → top; section anchor links
   (md+); résumé link; `LangToggle` + `ThemeToggle`; mobile disclosure menu.
5. `src/components/footer.tsx` — built-with line, GitHub/LinkedIn/email, year + name.
6. Wire `Nav`/`Footer`/`Providers` into `src/app/layout.tsx`; slim `page.tsx` to the hero placeholder
   (toggles now live in the nav).

## Done when
- [ ] Sticky nav renders with working anchor links, résumé link, and both toggles; mobile menu opens/closes.
- [ ] `Reveal` animates on scroll and is disabled under reduced-motion.
- [ ] Footer renders with correct links. `pnpm build` succeeds; 0 console errors in-browser.
