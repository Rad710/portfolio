import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { themeNoFlashScript } from "@/lib/theme";
import { AppInit } from "@/components/app-init";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rolando Medina Rosner — Full-stack engineer",
  description:
    "Full-stack engineer building and modernizing Paraguay's national hospital information system. React, TypeScript, Java, Python, and self-hosted infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // dark-first default for SSR / no-JS; the no-flash script + ThemeProvider
      // manage this class after that.
      className={`dark ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Runs before paint to apply the stored theme with no flash.
          dangerouslySetInnerHTML={{ __html: themeNoFlashScript }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppInit />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
