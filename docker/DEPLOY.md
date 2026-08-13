# Deploy — portfolio behind its own Cloudflare Tunnel

The portfolio runs as a second, independent app on the same VM that hosts DYR Transportes. It gets its
**own compose stack, its own tunnel, its own hostname**, and publishes **zero inbound ports** — `cloudflared`
dials out to Cloudflare and reaches the `web` container at `web:3000` over the internal compose network. The
host firewall keeps denying all inbound except SSH.

The image is **built in CI and pulled on the VM** — the box never builds.

## 1. Publish the image (GitHub Actions → GHCR)

`.github/workflows/release.yml` builds `docker/node.Dockerfile` and pushes `ghcr.io/rad710/portfolio`.

```bash
git tag v1.0.0 && git push --tags     # or run "release" from the Actions tab (workflow_dispatch)
```

Then make the GHCR package **public** (Package settings → Change visibility), or run `docker login ghcr.io`
on the VM so it can pull.

## 2. Create the Cloudflare Tunnel (dashboard)

1. **Networking → Tunnels → Create Tunnel** → name it (e.g. `portfolio`) → copy the token (the long `eyJ…`
   string in the shown `docker run … --token …` command).
2. Finish the wizard with a live connector — on the VM:
   ```bash
   docker run -d --name cf-bootstrap cloudflare/cloudflared:latest tunnel --no-autoupdate run --token <TOKEN>
   ```
   It flips to **connected** → Continue. Then `docker rm -f cf-bootstrap` (the compose runs the real one).
3. Open the tunnel → **Routes → Add route → Published application** → hostname **`rad710.com`** (apex; leave
   subdomain empty and pick `rad710.com`) → **Service URL `http://web:3000`** → Add route. This auto-creates
   the proxied DNS record; Universal SSL already covers the apex.

> The site's canonical URL, OpenGraph tags, and both CVs all reference `rad710.com`. To serve it from a
> subdomain instead, route that hostname here **and** update `metadataBase` in `src/app/layout.tsx`.

## 3. Deploy (on the VM)

Put `docker/docker-compose.deploy.yml` and a `.env` in a directory (e.g. `~/portfolio/`). `.env`:

```env
CF_TUNNEL_TOKEN=eyJ...        # the token from step 2
IMAGE_TAG=1.0.0              # or latest
```

Always pass `--env-file .env` (compose only auto-reads `.env` next to the compose file, and the `:?`
required var fails interpolation otherwise):

```bash
docker compose --env-file .env -f docker-compose.deploy.yml pull
docker compose --env-file .env -f docker-compose.deploy.yml up -d
```

## 4. Verify

```bash
docker compose -f docker-compose.deploy.yml ps          # web healthy, cloudflared up
curl -sSI https://rad710.com | head -n1                  # HTTP/2 200
```

Then open `https://rad710.com` in a browser.

## Do NOT

- publish any host port (`ports:` / `0.0.0.0:…`) or open a ufw port — `expose:` only;
- add a route to the **DYR** tunnel (that connector lives in DYR's compose network and can't reach this app);
- build on the VM — the image comes from GHCR.
