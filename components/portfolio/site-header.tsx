"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-3 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 sm:px-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label="Piyush Kashyap — home"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-foreground text-sm font-black tracking-[-0.05em] text-background transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            PK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight">
              Piyush Kashyap
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Full-stack + AI
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ModeToggle />
          <a
            href="mailto:piyush.kashyap.in@gmail.com"
            className="hidden h-10 items-center gap-2 rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <div className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
              <span className="sr-only">
                {mobileMenuOpen ? "Close navigation" : "Open navigation"}
              </span>
            </button>
            {mobileMenuOpen && (
              <nav
                id="mobile-navigation"
                className="absolute right-0 top-12 w-64 rounded-2xl border border-border bg-background p-2 shadow-2xl"
                aria-label="Mobile navigation"
              >
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.label}
                    <span className="font-mono text-[10px] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </Link>
                ))}
                <a
                  href="mailto:piyush.kashyap.in@gmail.com"
                  className="mt-1 flex items-center justify-between rounded-xl bg-brand px-3 py-3 text-sm font-bold text-brand-foreground"
                >
                  Start a conversation
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
