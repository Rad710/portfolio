"use client";

import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-24">
      <div className="absolute right-6 top-6 flex items-center gap-3">
        <LangToggle />
        <ThemeToggle />
      </div>
      <p className="eyebrow mb-4">{t("hero.eyebrow")}</p>
      <h1 className="font-display text-5xl leading-tight text-foreground sm:text-7xl">
        {t("hero.headline")}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{t("hero.lead")}</p>
      <p className="mt-4 font-mono text-xs text-faint">{t("hero.location")}</p>
    </main>
  );
}
