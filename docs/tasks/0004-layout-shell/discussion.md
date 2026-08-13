# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: Built Nav (sticky/blurred, anchor links, résumé pill, toggles, mobile disclosure), Footer, and
  the Section/Reveal/SectionHeading primitives. Providers wraps MotionConfig(reducedMotion="user") +
  I18nProvider + AppInit.
- 2026-08-13: lucide-react 1.31 dropped brand icons (Github/Linkedin no longer exported). Added inline SVG
  brand marks in `src/components/icons.tsx` (Simple Icons paths); kept lucide `Mail`.
- 2026-08-13: Added `cn()` (clsx + tailwind-merge) — matches the shadcn convention used in the owner's repos.
- 2026-08-13: Verified in-browser: nav anchors scroll correctly, footer links resolve, Reveal → opacity 1,
  0 console errors. Screenshot confirms the editorial-minimal look reads as intended.
- 2026-08-13: Also wired the D y R live URL (https://rad710.pythonanywhere.com/) into the project content.
