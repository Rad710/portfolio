"use client";

import { useTranslation } from "react-i18next";
import { Reveal, Section } from "@/components/ui/section";

export function About() {
    const { t } = useTranslation();
    const body = t("about.body", { returnObjects: true }) as string[];

    return (
        <Section id="about" className="border-t border-border">
            <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-12">
                <div className="md:col-span-4">
                    <Reveal>
                        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                            {t("about.lead")}
                        </h2>
                    </Reveal>
                </div>

                <div className="md:col-span-8 md:pt-1">
                    <div className="max-w-2xl space-y-6">
                        {body.map((para, i) => (
                            <Reveal key={para.slice(0, 32)} delay={i * 0.06}>
                                <p className="text-lg leading-relaxed text-muted">{para}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
