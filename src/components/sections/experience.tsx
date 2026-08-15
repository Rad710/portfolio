"use client";

import { useTranslation } from "react-i18next";
import { Reveal, Section } from "@/components/ui/section";
import { TechTags } from "@/components/ui/tech-tags";
import type { ExperienceItem } from "@/content/types";

export function Experience() {
    const { t } = useTranslation();
    const items = t("experience.items", {
        returnObjects: true,
    }) as ExperienceItem[];

    return (
        <Section id="experience" className="border-t border-border">
            <Reveal>
                <h2 className="mb-12 font-display text-3xl text-foreground sm:text-4xl">
                    {t("experience.title")}
                </h2>
            </Reveal>

            <div className="flex flex-col">
                {items.map((job, i) => (
                    <Reveal key={job.company} delay={i * 0.08}>
                        <article className="grid gap-x-10 gap-y-4 border-t border-border py-10 md:grid-cols-12">
                            <div className="md:col-span-3">
                                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                                    {job.period}
                                </p>
                                <p className="mt-2 font-mono text-xs text-faint">{job.location}</p>
                            </div>

                            <div className="md:col-span-9">
                                <h3 className="text-xl font-medium text-foreground">{job.role}</h3>
                                <p className="mt-0.5 text-muted">{job.company}</p>

                                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                                    {job.summary}
                                </p>

                                <ul className="mt-5 space-y-2.5">
                                    {job.bullets.map((b) => (
                                        <li
                                            key={b.slice(0, 32)}
                                            className="flex gap-3 text-sm leading-relaxed text-muted"
                                        >
                                            <span
                                                aria-hidden
                                                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70"
                                            />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <TechTags items={job.tech} className="mt-6" />
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
