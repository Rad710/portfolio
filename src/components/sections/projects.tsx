"use client";

import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GitHubIcon } from "@/components/ui/icons";
import { Reveal, Section } from "@/components/ui/section";
import { TechTags } from "@/components/ui/tech-tags";
import type { ProjectItem } from "@/content/types";

function ProjectLinks({ project }: { project: ProjectItem }) {
    const { t } = useTranslation();
    return (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
            {project.live ? (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-accent-strong"
                >
                    <ExternalLink className="size-3.5" />
                    {t("projects.liveLabel")}
                </a>
            ) : null}
            {project.code ? (
                <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                    <GitHubIcon className="size-3.5" />
                    {t("projects.codeLabel")}
                </a>
            ) : null}
        </div>
    );
}

/** A screenshot in minimal browser chrome, with the live URL in the bar. */
function BrowserFrame({ src, url, alt }: { src: string; url?: string; alt: string }) {
    return (
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <span className="flex gap-1.5" aria-hidden>
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                </span>
                {url ? (
                    <span className="ml-1 truncate font-mono text-[0.65rem] text-faint">
                        {url.replace(/^https?:\/\//, "")}
                    </span>
                ) : null}
            </div>
            {/* biome-ignore lint/performance/noImgElement: static, self-hosted screenshot; next/image optimizer not needed in the standalone container */}
            <img src={src} alt={alt} loading="lazy" className="block w-full" />
        </div>
    );
}

function FeaturedCard({ project }: { project: ProjectItem }) {
    const { t } = useTranslation();
    return (
        <article className="rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 sm:p-8">
            {project.image ? (
                <div className="mb-8">
                    <BrowserFrame src={project.image} url={project.live} alt={project.name} />
                </div>
            ) : null}

            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-faint">
                        {t("projects.featuredLabel")}
                    </p>
                    <h3 className="font-display text-2xl text-foreground sm:text-3xl">
                        {project.name}
                    </h3>
                </div>
                <ProjectLinks project={project} />
            </div>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/90">
                {project.tagline}
            </p>
            {project.description ? (
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.description}</p>
            ) : null}

            <TechTags items={project.tech} className="mt-8" />
        </article>
    );
}

function CompactCard({ project }: { project: ProjectItem }) {
    return (
        <article className="rounded-2xl border border-border p-6 transition-colors hover:border-accent/40">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-display text-xl text-foreground">{project.name}</h3>
                <ProjectLinks project={project} />
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{project.tagline}</p>
            <TechTags items={project.tech} className="mt-5" />
        </article>
    );
}

export function Projects() {
    const { t } = useTranslation();
    const items = t("projects.items", { returnObjects: true }) as ProjectItem[];
    const featured = items.filter((p) => p.featured);
    const compact = items.filter((p) => !p.featured);

    return (
        <Section id="work" className="border-t border-border">
            <Reveal>
                <p className="eyebrow mb-3">03 / {t("projects.title")}</p>
                <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                    {t("projects.title")}
                </h2>
                <p className="mt-4 max-w-2xl text-muted">{t("projects.lead")}</p>
            </Reveal>

            <div className="mt-12 flex flex-col gap-6">
                {featured.map((p, i) => (
                    <Reveal key={p.id} delay={i * 0.08}>
                        <FeaturedCard project={p} />
                    </Reveal>
                ))}
                {compact.map((p) => (
                    <Reveal key={p.id}>
                        <CompactCard project={p} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
