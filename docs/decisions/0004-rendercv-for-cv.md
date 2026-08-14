---
status: accepted
date: 2026-08-14
---

# 0004 — Generate the CV from RenderCV YAML instead of hand-written HTML

## Context
Task 0009 shipped the CV as two hand-written HTML files (`cv/cv-en.html`, `cv/cv-es.html`) rendered to PDF
with headless Chrome. It worked, but carried two costs: (1) the CV facts were maintained by hand in four
places — `site.ts` EN/ES plus the two HTML files — and drifted (a copy pass had to touch all of them to stay
in sync); (2) layout and typography were hand-owned CSS. The owner was willing to rebuild from scratch and
wanted a lower-maintenance, better-typeset result, accepting that the CV is a standalone artifact distinct
from the website content.

## Decision
- CV source is now **RenderCV** YAML: `cv/cv-en.yaml`, `cv/cv-es.yaml` (RenderCV v2.8, `engineeringresumes`
  theme, bundled Typst — no TeX install).
- `scripts/build-cv.sh` renders both; each YAML's `settings.render_command.pdf_path` writes straight to
  `public/cv/Rolando_Medina_Rosner_CV_{EN,ES}.pdf` (the paths `site.ts` already links). RenderCV's scratch
  dir `cv/rendercv_output/` is gitignored.
- Design pinned for a one-page fit: us-letter, 0.4in top/bottom + 0.55in side margins, 8.5pt body / 19pt
  name, tightened section/entry spacing. Spanish localization via `locale` (month abbreviations,
  `present → actualidad`, `degree_with_area` phrase).
- Installed with `uv tool install "rendercv[full]"`.

## Consequences
- Good: single YAML per language, schema-validated, professional Typst typesetting, EN/ES structurally
  identical by construction, no TeX dependency. Both render to one page.
- Bad / cost: the CV is a **separate content silo** from `site.ts` — facts now live in two systems (website +
  CV YAML) and must be updated in both. Matching a bespoke layout would require a custom Typst theme; we
  accept the stock `engineeringresumes` look. Adds a Python/`uv` build-time dependency.

## Alternatives considered
- **Keep hand-written HTML** (task 0009) — full control and in-stack, but hand-maintained layout and no
  schema; rejected on the from-scratch rebuild.
- **Single-source the CV from `site.ts`** (generate HTML→PDF from the typed content model) — would eliminate
  drift, but the owner preferred RenderCV's turnkey typesetting over building a generator, and the website's
  richer per-project data (taglines, tech tags, live/code links, thumbnails) doesn't map onto RenderCV's
  schema, so a shared source wasn't worth the friction.
- **JSON Resume** — data-portable but weaker turnkey typography than RenderCV/Typst for this case.

Governs task 0014.
