---
status: done
updated: 2026-08-13
depends_on: [0011]
decision: 0003
---

# 0012 — Deploy: Docker image + Cloudflare Tunnel

## Goal
Ship the portfolio to the VM the same way DYR is shipped — a pull-only Docker image behind its own
Cloudflare Tunnel, with zero inbound host ports — plus the deploy runbook. Governed by
[decision 0003](../../decisions/0003-deploy-cloudflare-tunnel.md).

## Plan
1. `docker/node.Dockerfile` — multi-stage: node:22.22.1 builder (`pnpm build`) → non-root standalone
   runtime on port 3000 (mirrors the HIS `internacion` convention).
2. `docker/docker-compose.deploy.yml` — project `portfolio`; `web` (GHCR image, `expose: 3000` only,
   healthcheck) + `cloudflared` (tunnel, token from `.env`, depends on web healthy). No ports, no volumes.
3. `.github/workflows/release.yml` — build + push `ghcr.io/rad710/portfolio` on `v*` / dispatch.
4. `docker/env.example`, `.dockerignore`, `docker/DEPLOY.md` runbook, refreshed `README.md`.

## Done when
- [x] Image builds locally; container serves the site, CVs, and OG image as non-root `nextjs`.
- [x] `docker compose ... config` validates; `web` is `expose`-only, `cloudflared` has no ports.
- [x] Release workflow + DEPLOY.md runbook (tunnel bootstrap, route → `http://web:3000`, `rad710.com`).
