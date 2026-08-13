"use client";

import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { Reveal } from "@/components/section";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-20"
    >
      {/* soft accent glow, decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Reveal>
        <p className="eyebrow mb-5">{t("hero.eyebrow")}</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="max-w-3xl font-display text-[2.75rem] leading-[1.04] text-foreground sm:text-6xl md:text-7xl">
          {t("hero.headline")}
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          {t("hero.lead")}
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
          >
            {t("hero.ctaWork")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t("hero.ctaContact")}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <p className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-faint">
          <MapPin className="size-3.5" />
          {t("hero.location")}
        </p>
      </Reveal>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-6 text-faint"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}
