# Multi-stage build for the Next.js standalone server.
# Runtime stage mirrors the HIS `internacion` node.Dockerfile convention:
# node:22.22.1, non-root `nextjs` user, standalone `server.js`, port 3000.

# --- builder -------------------------------------------------------------
FROM node:22.22.1 AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

# Install deps first (cached unless the lockfile changes).
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the standalone output (next.config.ts sets output: "standalone").
COPY . .
RUN pnpm build

# --- runner --------------------------------------------------------------
FROM node:22.22.1 AS runner
LABEL maintainer="Rolando Medina Rosner" \
    description="Portfolio — Next.js standalone server"

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# public assets (CV PDFs, OG image) + the standalone server + static chunks.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
