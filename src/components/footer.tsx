"use client";

import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/content/site";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {t("footer.built")}
          </a>
          <p className="font-mono text-xs text-faint">
            © {"2026"} {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
