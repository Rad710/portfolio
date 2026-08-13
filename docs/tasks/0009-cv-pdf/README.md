---
status: done
updated: 2026-08-13
depends_on: [0003, 0008]
decision: 0001
---

# 0009 — Bilingual CV PDFs

## Goal
Generate the EN + ES CVs the contact buttons download — clean, single-column, ATS-safe, one page, text-based
(selectable) PDFs with real clickable links. Reproducible from a committed script.

## Context
Owner decisions: ATS-clean refreshed style (not branded); keep phone (PDF only, never on the site). Add
`rad710.com` (portfolio) + `github.com/Rad710` to the header, and the live project links
(`dyr-ai.rad710.com`, `rad710.pythonanywhere.com`) next to the repos. Accuracy fixes from research: DyR is
Material UI (not shadcn); add FastAPI; include the public text-to-sql-rag project.

## Plan
Keep it simple — no build pipeline. Author two self-contained print-CSS HTML files, export each to PDF
once with headless Chrome, and bundle the PDFs in `public/cv/`. Keep the HTML source in `cv/` so the CV can
be edited and re-exported by hand later.
1. `cv/cv-en.html`, `cv/cv-es.html` — one-page ATS-clean CVs.
2. Export → `public/cv/Rolando_Medina_Rosner_CV_EN.pdf` / `_ES.pdf`.

## Done when
- [ ] Both PDFs exist in `public/cv/`, each exactly one page, text selectable.
- [ ] Header shows email, phone, rad710.com, github, linkedin; Projects list live + repo links.
- [ ] Content accurate (MUI not shadcn; FastAPI; text-to-sql-rag). Download buttons on the site work.
