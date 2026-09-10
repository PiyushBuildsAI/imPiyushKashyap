import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/components/portfolio/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Piyush Kashyap — Full Stack Developer & AI Product Builder",
    template: "%s — Piyush Kashyap",
  },
  description:
    "Full stack developer building production AI SaaS platforms, agent systems, and cross-channel business automation from architecture through deployment.",
  keywords: [
    "Piyush Kashyap",
    "Full Stack Developer",
    "AI Product Developer",
    "AI Agent Developer",
    "Next.js Developer",
    "Business Automation",
    "SaaS Developer",
    "Chandigarh Developer",
  ],
  authors: [{ name: "Piyush Kashyap" }],
  creator: "Piyush Kashyap",
  icons: {
    icon: "/brand-mark.svg",
    shortcut: "/brand-mark.svg",
  },
  openGraph: {
    title: "Piyush Kashyap — Full Stack Developer & AI Product Builder",
    description:
      "Production AI products, SaaS platforms, and business automation—designed and shipped end to end.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Kashyap — Full Stack Developer & AI Product Builder",
    description:
      "Production AI products, SaaS platforms, and business automation—designed and shipped end to end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Kashyap",
    jobTitle: "Full Stack Developer",
    description:
      "Full stack developer specializing in AI products, SaaS platforms, and business automation.",
    email: "mailto:piyush.kashyap.in@gmail.com",
    telephone: "+91-86289-77518",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "FusionSync AI",
    },
    sameAs: [
      "https://github.com/imPiyushkashyap",
      "https://x.com/PiyushK44808060",
      "https://www.upwork.com/freelancers/~01aaf78f140ef80cb0",
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Artificial Intelligence",
      "AI agents",
      "SaaS architecture",
      "Business automation",
      "Multi-tenant platforms",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="content">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
