# NNNN — discussion

Append-only. Newest at the bottom, each entry dated. Options weighed, decisions, open questions, dead
ends — the thinking behind the spec. Keeps [`README.md`](README.md) clean.

- YYYY-MM-DD: …

- 2026-08-13: Deploy files placed under `docker/` (matches text-to-sql-rag). Owner directive: pull-only —
  the VM never builds; CI pushes to GHCR. Multi-stage node.Dockerfile self-builds in CI; runtime mirrors
  the internacion convention (node:22.22.1, non-root nextjs, standalone server.js, port 3000).
- 2026-08-13: Compose replicates the tunnel pattern — project name `portfolio`, `web` expose:3000 only,
  `cloudflared` with TUNNEL_TOKEN, no host ports, no volumes. Hostname rad710.com (apex) via dashboard route
  → http://web:3000. `.env.example` blocked by a .env* deny rule → shipped as `docker/env.example`.
- 2026-08-13: Verified locally with Docker 29.7.2 — image builds, `compose config` validates, container
  serves home (200 + correct title), CV PDF (application/pdf), og.png, robots as non-root `nextjs`.
