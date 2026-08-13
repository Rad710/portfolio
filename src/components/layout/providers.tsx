"use client";

import { MotionConfig } from "motion/react";
import { AppInit } from "@/components/layout/app-init";
import { I18nProvider } from "@/lib/i18n";

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
