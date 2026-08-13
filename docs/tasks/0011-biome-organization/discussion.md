# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: Adopted Biome 2.5.8 (matches text-to-sql-rag): 4-space indent, lineWidth 100, double quotes,
  recommended lint. Removed ESLint (deps + config). `pnpm check/format/lint` scripts. Renamed package to
  `portfolio`.
- 2026-08-13: Reorganized components into `layout/` (nav, footer, providers, app-init), `ui/` (section,
  tech-tags, theme-toggle, lang-toggle, icons), `sections/` (unchanged). Updated all imports.
- 2026-08-13: Resolved all lint findings honestly: content-derived keys instead of array indices;
  lang-toggle uses a semantic `<fieldset>` instead of `role="group"`; `<title>` added to icon.svg; a
  documented biome-ignore for the trusted no-flash `dangerouslySetInnerHTML`; excluded Tailwind's
  globals.css from Biome's CSS parser. `biome check` clean, `biome lint` exit 0.
- 2026-08-13: Rebuilt + browser-verified — EN/ES toggle, persistence, 0 console errors. Deploy task
  renumbered 0011 → 0012.
