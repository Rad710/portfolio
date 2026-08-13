# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: Added full metadata (metadataBase rad710.com, title template, keywords, authors, canonical,
  OpenGraph + Twitter card), a branded OG image (public/og.png, generated from cv/og.html via headless
  Chrome), custom favicon (app/icon.svg — amber "R." monogram, replacing default favicon.ico), sitemap.ts +
  robots.ts, and a skip-to-content link. Removed unused scaffold SVGs.
- 2026-08-13: Verified served output — og/twitter/canonical meta present, /og.png 200, /robots.txt +
  /sitemap.xml correct, CV PDFs served as application/pdf. A11y: skip link first in tab order, landmarks
  present, 1×h1 / 5×h2, no nameless links/buttons, 0 console errors.
