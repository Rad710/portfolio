---
status: accepted
date: 2026-08-13
---

# 0002 — i18n via react-i18next (`t()` + resource bundles), SSR-safe manual detection

## Context
Decision [0001](0001-stack-and-design.md) called for "lightweight in-app i18n". Task 0002 first shipped a
hand-rolled Zustand language store. The repo owner asked to use **react-i18next** instead — the `t()`
pattern used in both `dyrtransportes_react` and `text-to-sql-rag` — for stack consistency.

## Decision
Use **i18next + react-i18next** as the i18n engine. Strings live in `en`/`es` resource bundles
(`src/content/site.ts`); components read them with `useTranslation()` + `t()` (and `returnObjects: true`
for the experience/projects/skills arrays). The instance initializes with a fixed `lng: "en"` on the server
and first client render; the persisted/browser language is applied **after mount** (in a client effect), so
there is no hydration mismatch. Theme state stays on Zustand (decision unaffected). This supersedes 0001's
"in-app context" wording for language only.

## Consequences
- Good: matches the owner's real stack; `t()` is familiar; resource bundles keep EN/ES in lockstep.
- Good: SSR-safe — server always renders EN, avoiding hydration warnings; ES applied as a one-frame swap on
  mount for returning/ES-browser users (same UX as the prior store).
- Bad / cost: structured content via `returnObjects` is typed as `unknown` and cast at the read site (small
  loss of end-to-end type-safety vs a plain typed object); mitigated by centralizing casts in typed helpers.

## Alternatives considered
- **Hand-rolled Zustand language store** (task 0002's first cut) — fewer deps, fully typed, but not the
  owner's convention; replaced.
- **next-intl with routed locales** — already rejected in 0001 (overkill for one page).
- **i18next-browser-languagedetector auto-run** — convenient but detects at init on the client, risking a
  hydration mismatch against the server's EN render; we detect manually in an effect instead.
