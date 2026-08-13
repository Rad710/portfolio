"use client";

import { useTranslation } from "react-i18next";
import { Section, SectionHeading, Reveal } from "@/components/section";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

/** Placeholder sections — replaced with real content in tasks 0006–0008. */
const STUBS = [
  { id: "experience", titleKey: "experience.title", label: "02" },
  { id: "work", titleKey: "projects.title", label: "03" },
  { id: "skills", titleKey: "skills.title", label: "04" },
  { id: "contact", titleKey: "contact.title", label: "05" },
] as const;

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <About />

      {STUBS.map((s) => (
        <Section key={s.id} id={s.id} className="border-t border-border">
          <Reveal>
            <SectionHeading eyebrow={`${s.label} / ${t(s.titleKey)}`} title={t(s.titleKey)} />
            <p className="text-muted">Coming next.</p>
          </Reveal>
        </Section>
      ))}
    </>
  );
}
