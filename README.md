# Portfolio — Rolando Medina Rosner

Personal portfolio of a full-stack engineer. Editorial-minimal, dark-first, bilingual (EN/ES), with
downloadable CVs. Live at **[rad710.com](https://rad710.com)**.

## Stack

- **Next.js 16** (App Router, `output: "standalone"`) · **React 19** with the **React Compiler** enabled
- **Tailwind CSS v4** · **Motion** (reduced-motion aware)
- **Zustand** (theme) · **react-i18next** (EN/ES, `t()` + resource bundles)
- **Biome** (lint + format, 4-space) · **pnpm**

## Develop

```bash
pnpm install
pnpm dev              # http://localhost:3000
```

Other scripts:

```bash
pnpm build            # production build (standalone output)
pnpm check            # Biome: format + safe lint fixes
pnpm lint             # Biome: lint only
```

## Structure

```
src/
  app/            routes, layout, metadata (sitemap/robots/icon), globals.css
  components/
    layout/       nav, footer, providers, app-init
    sections/     hero, about, experience, projects, skills, contact
    ui/           section/reveal, tech-tags, theme + language toggles, icons
  content/        site.ts (EN/ES resource bundles) + types.ts
  lib/            i18n, theme store, cn() util
cv/               CV HTML sources + OG-image source (export to public/ with headless Chrome)
docker/           node.Dockerfile, docker-compose.deploy.yml, DEPLOY.md
docs/             tasks/ (build log) + decisions/ (ADRs) — how this repo was built
```

## CV

`cv/cv-en.yaml` / `cv/cv-es.yaml` are the one-page, ATS-clean sources, rendered with
[RenderCV](https://rendercv.com/) (`engineeringresumes` theme, bundled Typst — no TeX needed).
Install once, then re-render after edits:

```bash
uv tool install "rendercv[full]"   # one-time
./scripts/build-cv.sh              # renders both PDFs into public/cv/
```

Each YAML's `settings.render_command.pdf_path` writes straight to `public/cv/`.

## Deploy

Pull-only Docker image behind a Cloudflare Tunnel (no inbound host ports). See
**[docker/DEPLOY.md](docker/DEPLOY.md)**.

## How this repo was built

Built with Claude Code through small, reviewed, decision-logged tasks — see
[`docs/ai-workflow.md`](docs/ai-workflow.md).
