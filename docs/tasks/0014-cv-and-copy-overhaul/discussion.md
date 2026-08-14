# 0014 — discussion

Append-only. Newest at the bottom, each entry dated.

- 2026-08-14: Owner flagged the copy as AI-cringe ("software hospitals run on"). A first de-cringe pass was
  instinct-only; owner pushed for grounding in a real guide. Rewrote against portfolio-writing sources
  (mnml headline formulas; TailorCV / Springboard / Wix about-me) — see [`research.md`](research.md). Killed
  slogan taglines, cut em-dash overuse + rule-of-three cadences + "under the hood", made About first-person
  and specific, replaced the redundant closing paragraph with a real detail (self-hosting).
- 2026-08-14: CV tooling — weighed hand-HTML single-sourced from `site.ts` vs RenderCV YAML. Owner chose
  RenderCV with a built-in theme (`engineeringresumes`), accepting the standalone-silo tradeoff → decision
  0004. Installed via `uv tool install "rendercv[full]"` (v2.8, bundled Typst, no TeX).
- 2026-08-14: One-page fit required 8.5pt body + tightened margins/spacing. Two RenderCV gotchas: `pdf_path`
  resolves relative to the YAML's directory (not the output folder), and `dont_generate_typst` suppresses
  the PDF entirely — settled on default-folder render with `pdf_path: ../public/cv/...` and only disabling
  md/html/png.
- 2026-08-14: Full CV audit against 8 résumé guides (grade **A−**; see [`research.md`](research.md)). Applied
  the one clear consensus violation (drop first-person "I" — résumé-only; the website stays first person),
  cut the self-undercutting "minor launch-day issues" hedge, tightened the React/Lit bullet, split the dense
  JSP/Struts bullet, and added the **~60% rsbuild build-time** figure (owner-supplied, real — the guides'
  endorsed alternative to inventing vanity metrics). Deferred: keep a DOCX only for postings that demand Word
  (PDF-vs-DOCX is the one genuinely contested guideline; the text-layer PDF is safe otherwise).
