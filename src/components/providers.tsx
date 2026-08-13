"use client";

import { MotionConfig } from "motion/react";
import { I18nProvider } from "@/lib/i18n";
import { AppInit } from "@/components/app-init";

/**
 * Client providers shared by the whole app. `reducedMotion="user"` makes every
 * Motion animation respect the OS "reduce motion" setting automatically.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider>
        <AppInit />
        {children}
      </I18nProvider>
    </MotionConfig>
  );
}
