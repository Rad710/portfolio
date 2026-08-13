"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/lib/theme";

/**
 * Syncs the theme store with its persisted value after mount. Kept out of the
 * initial render so server and first client render match; the no-flash theme
 * script has already set the class pre-paint. (Language is handled by
 * I18nProvider.)
 */
export function AppInit() {
  const hydrateTheme = useThemeStore((s) => s.hydrate);
  useEffect(() => {
    hydrateTheme();
  }, [hydrateTheme]);
  return null;
}
