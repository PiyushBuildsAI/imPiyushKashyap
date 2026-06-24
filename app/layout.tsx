import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Kashyap — Full Stack Developer",
  description:
    "Full stack developer building AI SaaS products and automation systems. Available for hire through Upwork.",
  keywords: [
    "Piyush Kashyap",
    "Full Stack Developer",
    "AI SaaS Developer",
    "Next.js Developer",
    "Supabase",
    "Startup MVP",
    "Freelancer",
  ],
  openGraph: {
    title: "Piyush Kashyap — Full Stack Developer",
    description:
      "Full stack developer building AI SaaS products and automation systems. Available for hire through Upwork.",
    type: "website",
    url: "https://piyushkashyap.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Full Stack Developer",
        description:
          "Full stack developer building AI SaaS products and automation systems. Available for hire through Upwork.",
        url: "https://piyushkashyap.dev",
        sameAs: [
          "https://github.com/imPiyushkashyap",
          "https://linkedin.com/in/yourusername",
          "https://www.upwork.com/freelancers/~01aaf78f140ef80cb0",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Piyush Kashyap - Full Stack Development",
        description:
          "AI SaaS development, automation systems, and startup MVPs.",
        url: "https://piyushkashyap.dev",
        areaServed: "Worldwide",
      },
      {
        "@type": "WebSite",
        url: "https://piyushkashyap.dev",
        name: "Piyush Kashyap",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
