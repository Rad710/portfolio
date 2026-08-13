"use client";

import { useTranslation } from "react-i18next";
import { Section, Reveal } from "@/components/section";
import { TechTags } from "@/components/tech-tags";
import type { SkillGroup, LanguageItem } from "@/content/types";

export function Skills() {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as SkillGroup[];
  const languages = t("languages.items", {
    returnObjects: true,
  }) as LanguageItem[];

  return (
    <Section id="skills" className="border-t border-border">
      <Reveal>
        <p className="eyebrow mb-3">04 / {t("skills.title")}</p>
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          {t("skills.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t("skills.lead")}</p>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid gap-x-10 gap-y-3 border-t border-border py-6 md:grid-cols-12">
              <p className="font-mono text-xs uppercase tracking-wider text-accent md:col-span-3">
                {group.label}
              </p>
              <TechTags items={group.items} className="md:col-span-9" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12">
          <p className="eyebrow mb-5">{t("languages.title")}</p>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((l) => (
              <li key={l.name} className="border-t border-border pt-3">
                <p className="text-foreground">{l.name}</p>
                <p className="mt-0.5 font-mono text-xs text-faint">{l.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
