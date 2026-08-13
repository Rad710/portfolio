---
status: done
updated: 2026-08-13
depends_on: [0010]
decision: 0002
---

# 0011 — Biome tooling + code organization pass

## Goal
Adopt Biome (lint + format) matching the owner's `text-to-sql-rag` stack, standardize on 4-space
indentation, and reorganize components into clear subfolders — so the codebase reads as deliberately
structured, not scaffold-shaped.

## Context
Owner request: "add a linter like Biome, 4-space spacing, and organize the code into folders/subpaths."
Mirror the `text-to-sql-rag` Biome config (Biome 2.5.8, 4-space, lineWidth 100, double quotes). Replace
ESLint.

## Plan
1. `biome.json` (4-space, 100 width, double quotes, recommended lint); remove ESLint config + deps.
2. `package.json`: rename to `portfolio`; scripts `lint`/`format`/`check` via Biome.
3. Reorganize `src/components/`:
   - `layout/` — nav, footer, providers, app-init
   - `ui/` — section, tech-tags, theme-toggle, lang-toggle, icons
   - `sections/` — hero, about, experience, projects, skills, contact (unchanged)
   Update all imports.
4. Run `biome check --write` (format + safe fixes) across the repo.
5. `pnpm build` + in-browser check still green.

## Done when
- [ ] `pnpm biome check` passes; all TS/TSX at 4-space indent.
- [ ] Components live under layout/ · ui/ · sections/; all imports resolve.
- [ ] `pnpm build` succeeds; 0 console errors in-browser.
