"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * EVENTS GRID — 3-card row of celebration types.
 *
 * Layout: title left + body right with CTA, then 3 image cards
 * with kicker + title overlays.
 */
export default function EventsGrid({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).events;

  return (
    <section className="relative bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:gap-20 items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · {extras.titleA}
            </p>
            <h2 className="leading-[1.02]">
              <span className="display block h-editorial text-[clamp(2.4rem,5.4vw,4.8rem)] text-ink-900">
                {extras.titleA}
              </span>
              <span className="display-italic block h-editorial text-[clamp(2.4rem,5.4vw,4.8rem)] text-granada-700 -mt-1">
                {extras.titleB}
              </span>
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="text-ink-700 text-[15px] leading-[1.75] max-w-[44ch]">
              {extras.body}
            </p>
            <Link
              href={`/${lang}/grupos`}
              className="mt-8 inline-flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-cenefa text-granada-700 hover:text-granada-800 transition-colors ink-underline"
            >
              {extras.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-3">
          {extras.cards.map((c, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: 0.95,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative aspect-[4/5] overflow-hidden rounded-[2px] shadow-plate group ${
                i === 1 ? "md:mt-12" : i === 2 ? "md:mt-6" : ""
              }`}
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover film-tone transition-transform duration-[1400ms] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-cenefa text-cream-light/80 mb-3">
                  {c.kicker}
                </p>
                <p className="font-display italic text-[clamp(1.3rem,2vw,1.8rem)] text-cream-light leading-tight">
                  {c.title}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
