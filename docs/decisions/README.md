# Decision log

Immutable records of design decisions. **Never edit an accepted record to reverse it** — add a new
numbered record that supersedes it, and link both ways. Template: [`_template.md`](_template.md).

| # | Decision | Status | Date |
|---|----------|--------|------|
| [0001](0001-stack-and-design.md) | Next.js 16 + React 19 + Tailwind v4 + Motion; editorial-minimal, dark-first, bilingual; standalone Node deploy | accepted | 2026-08-13 |
| [0002](0002-i18n-react-i18next.md) | i18n via react-i18next (`t()` + resource bundles), SSR-safe manual detection (supersedes 0001's i18n wording) | accepted | 2026-08-13 |
| [0003](0003-deploy-cloudflare-tunnel.md) | Deploy as a pull-only GHCR image behind its own Cloudflare Tunnel (own stack, expose-only, no host ports) | accepted | 2026-08-13 |
