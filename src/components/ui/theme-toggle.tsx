"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/lib/theme";

export function ThemeToggle() {
    const theme = useThemeStore((s) => s.theme);
    const toggle = useThemeStore((s) => s.toggle);
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
            {isDark ? (
                <Sun className="size-4" strokeWidth={1.75} />
            ) : (
                <Moon className="size-4" strokeWidth={1.75} />
            )}
        </button>
    );
}
