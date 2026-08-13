# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: i18n engine set to **react-i18next** (see decision 0002) at the owner's request. Content lives
  as `en`/`es` resource bundles in `src/content/site.ts`; structured lists typed in `src/content/types.ts`
  and read with `returnObjects: true`. Language-independent links/handles in the `site` const.
- 2026-08-13: Default language = browser-detected — Spanish browsers land on ES, everything else on EN
  (owner's rule). SSR renders EN, `I18nInit` applies the detected/persisted language on mount.
- 2026-08-13: Accuracy corrections honored — DyR described as Material UI (X Data Grid/Charts), not shadcn;
  the public text-to-sql-rag is the freight-schema project (clinical NL-to-SQL is the separate work item).
- 2026-08-13: Verified in-browser: EN default, ES toggle swaps all copy + `<html lang>`, persists on reload,
  0 console errors.
