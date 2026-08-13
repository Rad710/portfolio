"use client";

import { useTranslation } from "react-i18next";
import { Section, SectionHeading, Reveal } from "@/components/section";

/** Placeholder sections — replaced with real content in tasks 0005–0008. */
const STUBS = [
  { id: "about", titleKey: "about.title" },
  { id: "experience", titleKey: "experience.title" },
  { id: "work", titleKey: "projects.title" },
  { id: "skills", titleKey: "skills.title" },
  { id: "contact", titleKey: "contact.title" },
] as const;

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Section className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center">
        <Reveal>
          <p className="eyebrow mb-4">{t("hero.eyebrow")}</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            {t("hero.headline")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{t("hero.lead")}</p>
          <p className="mt-4 font-mono text-xs text-faint">
            {t("hero.location")}
          </p>
        </Reveal>
      </Section>

      {STUBS.map((s) => (
        <Section key={s.id} id={s.id} className="border-t border-border">
          <Reveal>
            <SectionHeading title={t(s.titleKey)} />
            <p className="text-muted">Coming next.</p>
          </Reveal>
        </Section>
      ))}
    </>
  );
}
