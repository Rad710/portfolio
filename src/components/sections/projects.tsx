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

function Block({ label, children }: { label: string; children: string }) {
    return (
        <div>
            <p className="eyebrow mb-2">{label}</p>
            <p className="text-sm leading-relaxed text-muted">{children}</p>
        </div>
    );
}

function FeaturedCard({ project }: { project: ProjectItem }) {
    const { t } = useTranslation();
    return (
        <article className="rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 sm:p-8">
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

            <div className="mt-8 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
                <Block label={t("projects.problemLabel")}>{project.problem}</Block>
                <Block label={t("projects.approachLabel")}>{project.approach}</Block>
                <Block label={t("projects.outcomeLabel")}>{project.outcome}</Block>
            </div>

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
