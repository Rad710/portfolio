"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#experience", key: "nav.experience" },
  { href: "#work", key: "nav.work" },
  { href: "#skills", key: "nav.skills" },
  { href: "#contact", key: "nav.contact" },
] as const;

export function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          Rolando<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-background sm:inline-block"
          >
            {t("nav.resume")}
          </a>
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
