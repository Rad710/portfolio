"use client";

import { useLang } from "@/lib/i18n";

export function LangToggle() {
    const { lang, setLang } = useLang();

    return (
        <fieldset
            aria-label="Language"
            className="m-0 flex items-center rounded-full border border-border p-0.5 font-mono text-xs"
        >
            {(["en", "es"] as const).map((l) => {
                const active = lang === l;
                return (
                    <button
                        key={l}
                        type="button"
                        onClick={() => setLang(l)}
                        aria-pressed={active}
                        className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
                            active
                                ? "bg-accent text-background"
                                : "text-muted hover:text-foreground"
                        }`}
                    >
                        {l}
                    </button>
                );
            })}
        </fieldset>
    );
}
