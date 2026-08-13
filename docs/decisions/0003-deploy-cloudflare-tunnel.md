---
status: accepted
date: 2026-08-13
---

# 0003 — Deploy as a pull-only Docker image behind its own Cloudflare Tunnel

## Context
The portfolio deploys onto the same VM (`rad710@ubuntu-4gb-fsn1-1`) that already hosts DYR Transportes at
`dyr.rad710.com` via a per-app Cloudflare Tunnel. Docker is installed; ufw denies all inbound except SSH.
The owner wants the second app deployed the **same way** — its own compose stack, its own tunnel, its own
hostname, zero inbound ports — and the VM must **not build** (it pulls a prebuilt image).

## Decision
- **Image:** multi-stage `docker/node.Dockerfile` — a `node:22.22.1` builder runs `pnpm build` (standalone
  output), and a `node:22.22.1` runtime stage runs the non-root `nextjs` user on `server.js`, port 3000
  (mirrors the HIS `internacion` runtime convention).
- **CI:** `.github/workflows/release.yml` builds that Dockerfile and pushes `ghcr.io/rad710/portfolio` on
  `v*` tags / manual dispatch. The VM only pulls.
- **Runtime:** `docker/docker-compose.deploy.yml`, project name `portfolio`, two services:
  - `web` — the GHCR image, **`expose: 3000` only** (never `ports:`), healthcheck, `restart: unless-stopped`.
  - `cloudflared` — `tunnel --no-autoupdate run`, `TUNNEL_TOKEN` from `.env`, depends on `web` healthy.
  No volumes, no DB, no host ports. The dashboard route points the hostname at `http://web:3000`.
- **Hostname:** `rad710.com` (apex) — matches the site's `metadataBase`, OpenGraph, and both CVs.

## Consequences
- Good: origin IP hidden, host firewall stays SSH-only, fully independent of the DYR stack; reproducible
  image, VM does no heavy build. Verified locally — image builds and the container serves the site, CVs,
  and OG image as non-root.
- Bad / cost: needs a GHCR package (public, or `docker login` on the VM) and a one-time tunnel bootstrap in
  the dashboard. Apex hostname is hard-coded in `metadataBase`; changing it means editing the layout too.

## Alternatives considered
- **Build on the VM** (`up -d --build`) — simpler (no registry) but the owner explicitly wants pull-only.
- **Publish a host port + reverse proxy** — rejected; the tunnel keeps zero inbound ports and hides origin.
- **k3s/Helm** (as in the HIS projects) — overkill for a single static-ish service on a 4 GB VM.
