# Tasks — backlog

**One task in progress at a time.** Work the lowest-numbered `in-progress` task to its "Done when"
checklist, mark it `done`, then pick the next. The numbered list is the agreed build order.
**One commit per finished task** — the repo owner runs the commit.

### Structure (strict — every task follows it)

- **Folder per task:** `NNNN-slug/` (zero-padded, sequential, numbers never reused). Copy
  [`_template/`](_template/) to start one.
  - `README.md` — the spec. Required sections: **Goal**, **Plan**, **Done when** (Context when not trivial).
    Frontmatter `status` is the source of truth.
  - `discussion.md` — append-only, dated log of decisions / options / dead ends.
  - `research.md` — findings + evidence. **Optional** — only when the task needed real digging.
- **Status:** `proposed → in-progress → done` (also `blocked`, `deferred`, `superseded`).
- **Definition of done** = the "Done when" checklist. A task is done ONLY when every box passes.

## Scheduled (build order)

| # | Task | Status | Depends on |
|---|------|--------|-----------|
| [0001](0001-scaffold-design-system/) | Project scaffold + design system — Next.js 16 / React 19 / Tailwind v4 / Motion / React Compiler, tokens, fonts, standalone output, docs workflow | done | — |
| 0002 | Theme + language providers — dark-first `.dark` toggle and EN/ES toggle, both no-flash, wired into nav | done | 0001 |
| 0003 | Bilingual content model — one typed source of truth for hero/about/experience/projects/skills/contact (EN + ES) | done | 0001 |
| 0004 | Layout shell — sticky nav, footer, reusable animated `Section` primitive (respects reduced-motion) | done | 0002, 0003 |
| 0005 | Hero + About sections | done | 0004 |
| 0006 | Experience section — Taiwan ICDF (HIS) + ROSHKA, quantified bullets | proposed | 0004 |
| 0007 | Projects / case studies — DyR Transportes + text-to-sql-rag (problem → approach → stack → outcome, live links) | proposed | 0004 |
| 0008 | Skills + Contact sections | proposed | 0004 |
| 0009 | CV — bilingual HTML source → ATS-friendly PDF (EN + ES), in-page download, fix shadcn→MUI inaccuracy | proposed | 0003 |
| 0010 | Polish — SEO metadata, OpenGraph image, favicon, sitemap/robots, a11y + Lighthouse pass | proposed | 0005–0009 |
| 0011 | Deploy — `node.Dockerfile` (standalone) matching the HIS convention + README + run instructions | proposed | 0010 |

See [`../ai-workflow.md`](../ai-workflow.md) for how this repo is built, and
[`../decisions/`](../decisions/README.md) for the immutable decision log.
