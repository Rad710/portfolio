# 0001 — discussion

Append-only. Newest at the bottom, each entry dated.

- 2026-08-13: Scaffolded with `create-next-app@latest` → Next 16.3.0, React 19.2.8, Tailwind 4.3.3. Added
  `motion` 13.1.0 and `babel-plugin-react-compiler` 1.0.0.
- 2026-08-13: Next 16 ships an `AGENTS.md` warning that APIs may differ from training data. Verified the two
  facts we rely on against `node_modules/next/dist/docs`: `output: 'standalone'` and `reactCompiler: true`
  are both current and correct.
- 2026-08-13: Type direction — display serif (Fraunces) + Geist Sans body + Geist Mono labels. A serif
  display headline is the strongest "editorial / senior" signal and is low-risk vs. heavy motion. Palette:
  warm near-black / warm paper white with a single amber accent (distinctive vs. the default dev-blue).
- 2026-08-13: Adopted the `text-to-sql-rag` task/decision workflow at the owner's request — one task in
  progress, one commit per task (owner commits).
