import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { themeNoFlashScript } from "@/lib/theme";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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

const description =
  "Full-stack engineer building and modernizing Paraguay's national hospital information system. React, TypeScript, Java, Python, self-hosted infrastructure, and applied AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rad710.com"),
  title: {
    default: "Rolando Medina Rosner — Full-stack engineer",
    template: "%s · Rolando Medina Rosner",
  },
  description,
  keywords: [
    "Rolando Medina Rosner",
    "full-stack engineer",
    "software engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Java",
    "Python",
    "Docker",
    "Kubernetes",
    "self-hosted LLM",
    "RAG",
    "Paraguay",
    "remote",
  ],
  authors: [{ name: "Rolando Medina Rosner", url: "https://rad710.com" }],
  creator: "Rolando Medina Rosner",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://rad710.com",
    siteName: "Rolando Medina Rosner",
    title: "Rolando Medina Rosner — Full-stack engineer",
    description,
    locale: "en_US",
    alternateLocale: "es_ES",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rolando Medina Rosner — Full-stack engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolando Medina Rosner — Full-stack engineer",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
