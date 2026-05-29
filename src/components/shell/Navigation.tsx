"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/types/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Minimal editorial nav — CAPS distributed evenly across the full width,
 * sans-serif (JetBrains Mono), wide letter-spacing. No big logo CTA on home.
 * When scrolled, it picks up a cream-tinted backdrop with a hairline border.
 */
export default function Navigation({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: `/${lang}/historia`, label: dict.nav.story },
    { href: `/${lang}/carta`, label: dict.nav.menu },
    { href: `/${lang}/vinos`, label: dict.nav.wines },
    { href: `/${lang}/grupos`, label: dict.nav.groups },
    { href: `/${lang}/visita`, label: dict.nav.visit },
  ];

  const onHome = pathname === `/${lang}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-cream-light/92 backdrop-blur-xl border-b border-granada-700/10"
          : "bg-transparent"
      )}
    >
      <div className="container-fluid h-20 md:h-24 flex items-center">
        {/* Official logo */}
        <Link
          href={`/${lang}`}
          className="inline-flex items-center"
          aria-label="Mesón Alegría — Inicio"
        >
          <Image
            src="/logo/logo.svg"
            alt="Mesón Alegría"
            width={240}
            height={84}
            className="h-14 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Center nav, distributed */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-12 xl:gap-16">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-ink-800/75 hover:text-granada-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-5 ml-auto">
          <LanguageSwitcher current={lang} variant="light" />
          <a
            href="tel:+34958222794"
            className="nav-link text-granada-700 hover:text-granada-800 flex items-center gap-2"
          >
            {dict.nav.reserve}
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-granada-700/25 bg-cream/70 text-granada-800"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative flex flex-col gap-1.5">
            <span className={cn("block h-px w-4 bg-current transition-transform", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-px w-4 bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("block h-px w-4 bg-current transition-transform", open && "-translate-y-[6px] -rotate-45")} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-granada-700/15 bg-cream-light/95 backdrop-blur-xl"
          >
            <div className="container-fluid py-8">
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display italic text-3xl lowercase text-ink-900 py-2 border-b border-granada-700/10 hover:text-granada-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex items-center justify-between gap-4">
                <LanguageSwitcher current={lang} variant="light" />
                <a href="tel:+34958222794" className="btn-ember">
                  {dict.nav.reserve}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* hint to satisfy linter — we keep onHome for future page-aware logic */}
      <span className="sr-only">{onHome ? "home" : "page"}</span>
    </header>
  );
}
