"use client";

import { useTranslation } from "react-i18next";
import { Download, ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/content/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="border-t border-border">
      <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-3">05 / {t("contact.title")}</p>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-md text-muted">{t("contact.lead")}</p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.08}>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 font-display text-2xl text-foreground transition-colors hover:text-accent sm:text-3xl"
            >
              {site.email}
              <ArrowUpRight className="size-6 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon className="size-4" />
                {t("contact.githubLabel")}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon className="size-4" />
                {t("contact.linkedinLabel")}
              </a>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="mb-4 text-sm text-muted">{t("contact.resumeLead")}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.cv.en}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
                >
                  <Download className="size-4" />
                  {t("contact.resumeEn")}
                </a>
                <a
                  href={site.cv.es}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  <Download className="size-4" />
                  {t("contact.resumeEs")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
