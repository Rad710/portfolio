---
status: done
updated: 2026-08-13
depends_on: [0001]
decision: 0001
---

# 0002 — Theme + language providers

## Goal
Give the site its two global toggles — **dark/light theme** and **EN/ES language** — as clean React
context providers, both persisted and both without a flash of the wrong state on load. Later tasks read
these; this task ships the plumbing plus the two toggle buttons.

## Context
Governed by [decision 0001](../../decisions/0001-stack-and-design.md): dark-first, class-based `.dark`,
in-app i18n (no routed locales). Theme is a class on `<html>`, so it can be set by a pre-paint inline
script (no flash). Language swaps React-rendered text; server renders EN (the sensible default for an
international audience and for crawlers), and ES is applied on mount for returning ES users.

## Plan
1. `src/lib/theme.tsx` — `ThemeProvider` + `useTheme()` (`theme`, `setTheme`, `toggle`); localStorage key
   `theme`, default `dark`; export a `themeNoFlashScript` string for `<head>`.
2. `src/lib/i18n.tsx` — `LanguageProvider` + `useLang()` (`lang`, `setLang`, `toggle`); localStorage key
   `lang`, default `en`; keeps `<html lang>` in sync.
3. `src/components/theme-toggle.tsx` and `src/components/lang-toggle.tsx` — accessible buttons (aria-label,
   lucide icons).
4. `src/app/layout.tsx` — inject the no-flash script in `<head>`, wrap children in both providers.

## Done when
- [ ] Toggling theme flips `.dark` on `<html>` and persists across reloads; no flash on refresh.
- [ ] Toggling language persists and updates `<html lang>`; no hydration error in the console.
- [ ] `pnpm build` succeeds.
