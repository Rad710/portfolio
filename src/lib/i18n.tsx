"use client";

import i18n from "i18next";
import { useEffect } from "react";
import { I18nextProvider, initReactI18next, useTranslation } from "react-i18next";
import { resources } from "@/content/site";

export type Lang = "en" | "es";

export const LANG_STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "en";

// Initialize once. Always start on the default language so the server render and
// the first client render match (no hydration mismatch); the persisted/browser
// language is applied after mount by <I18nInit />.
if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources,
        lng: DEFAULT_LANG,
        fallbackLng: DEFAULT_LANG,
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });
}

/** Applies the persisted or browser-preferred language after mount. */
function I18nInit() {
    useEffect(() => {
        let next: Lang | null = null;
        try {
            const stored = localStorage.getItem(LANG_STORAGE_KEY);
            if (stored === "en" || stored === "es") next = stored;
        } catch {}
        if (!next && typeof navigator !== "undefined") {
            next = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
        }
        if (next) {
            if (next !== i18n.language) i18n.changeLanguage(next);
            document.documentElement.lang = next;
        }
    }, []);
    return null;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    return (
        <I18nextProvider i18n={i18n}>
            <I18nInit />
            {children}
        </I18nextProvider>
    );
}

/** Current language + a setter that persists and syncs `<html lang>`. */
export function useLang() {
    const { i18n: instance } = useTranslation();
    const lang = (instance.language?.startsWith("es") ? "es" : "en") as Lang;

    const setLang = (l: Lang) => {
        instance.changeLanguage(l);
        try {
            localStorage.setItem(LANG_STORAGE_KEY, l);
        } catch {}
        if (typeof document !== "undefined") document.documentElement.lang = l;
    };

    return { lang, setLang, toggle: () => setLang(lang === "en" ? "es" : "en") };
}
