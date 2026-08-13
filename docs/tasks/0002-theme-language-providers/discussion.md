# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: Switched from React Context to **Zustand** stores (`useThemeStore`, `useLangStore`) at the
  owner's request — matches the stack in `dyrtransportes_react` and `text-to-sql-rag`. No persist
  middleware: setters write plain localStorage (so the pre-paint no-flash script can read the raw value),
  and an `AppInit` client component calls `hydrate()` on mount to stay SSR-safe (no hydration mismatch).
  Re-verified in-browser: theme persists `light`, language persists `es`, no flash, 0 console errors.
