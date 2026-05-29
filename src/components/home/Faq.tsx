"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * FAQ — accordion of common questions. One item open at a time.
 * Layout: sticky title left, items stacked right with + / − toggle.
 */
export default function Faq({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-cream-light py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr] lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · FAQ
            </p>
            <h2 className="leading-[1.02]">
              <span className="display block h-editorial text-[clamp(2.4rem,5.4vw,4.4rem)] text-ink-900">
                {extras.titleA}
              </span>
              <span className="display-italic block h-editorial text-[clamp(2.4rem,5.4vw,4.4rem)] text-granada-700 -mt-1">
                {extras.titleB}
              </span>
            </h2>
          </div>

          <ul className="divide-y divide-granada-700/15 border-y border-granada-700/15">
            {extras.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left transition-colors hover:text-granada-700"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 font-display italic text-[clamp(1.2rem,1.9vw,1.6rem)] text-ink-900 leading-snug">
                      {item.q}
                    </span>
                    <span
                      className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-granada-700/30 text-granada-700 transition-all group-hover:bg-granada-500 group-hover:text-cream-light group-hover:border-granada-700"
                      aria-hidden
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <path
                          d="M6 2 L6 10 M2 6 L10 6"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 max-w-[60ch] text-ink-700 text-[15px] leading-[1.75]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
