---
status: done
updated: 2026-08-13
depends_on: [0005, 0006, 0007, 0008, 0009]
decision: 0001
---

# 0010 — Polish: SEO, OG image, favicon, sitemap/robots, a11y

## Goal
Make the site production-ready to share: rich metadata + social preview, a real favicon, sitemap/robots,
and an accessibility pass — the things that decide whether a shared link looks credible.

## Plan
1. Full metadata in `layout.tsx` — `metadataBase` (rad710.com), title template, keywords, authors,
   canonical, OpenGraph + Twitter card, robots.
2. OG image → `public/og.png` (1200×630) generated from a small HTML via headless Chrome; referenced in
   metadata.
3. Custom favicon: replace default `favicon.ico` with `src/app/icon.svg` (amber "R." monogram).
4. `src/app/sitemap.ts` + `src/app/robots.ts`.
5. A11y: skip-to-content link; verify landmarks, focus-visible, contrast, reduced-motion.
6. Remove unused scaffold SVGs (done).

## Done when
- [ ] `pnpm build` succeeds; OG image + favicon + sitemap + robots present.
- [ ] Metadata renders (title, description, og:image) in the served HTML.
- [ ] Skip link works; no console errors; keyboard nav reaches nav + CTAs.
