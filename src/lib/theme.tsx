"use client";

import { create } from "zustand";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "dark";

/**
 * Runs before paint (injected into <head>) so the correct theme class is on
 * <html> before the first render — no flash of the wrong theme. Reads the same
 * plain localStorage key the store writes.
 */
export const themeNoFlashScript = `
(function () {
  try {
    var t = localStorage.getItem("${STORAGE_KEY}");
    if (t !== "light" && t !== "dark") t = "${DEFAULT_THEME}";
    document.documentElement.classList.toggle("dark", t === "dark");
    document.documentElement.style.colorScheme = t;
  } catch (e) {}
})();
`;

function apply(t: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", t === "dark");
  document.documentElement.style.colorScheme = t;
}

type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
  /** Sync store with the persisted value on mount (SSR-safe). */
  hydrate: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: DEFAULT_THEME,
  setTheme: (t) => {
    apply(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
    set({ theme: t });
  },
  toggle: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
  hydrate: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        apply(stored);
        set({ theme: stored });
      }
    } catch {}
  },
}));
