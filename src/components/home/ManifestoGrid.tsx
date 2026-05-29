"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * MANIFESTO — magazine-spread:
 *  · top: chapter number top-left, italic two-line title left, body+CTA right
 *  · bottom: asymmetric 4-image grid with tiny captions
 *
 * The grid intentionally mixes aspect ratios and offsets, not a uniform 4-col.
 */
export default function ManifestoGrid({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).manifesto;

  return (
    <section className="relative bg-cream-light py-28 md:py-40">
      <div className="container-fluid">
        {/* Top row — chapter + title + body */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] lg:gap-20 items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · {extras.eyebrow}
            </p>
            <h2 className="leading-[1.0]">
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
              href={`/${lang}/historia`}
              className="mt-8 inline-flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-cenefa text-granada-700 hover:text-granada-800 transition-colors ink-underline"
            >
              {extras.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Asymmetric image grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-12 grid-rows-[280px_280px] md:grid-rows-[420px_360px] gap-3 md:gap-4">
          {/* Card 1 — large left, full height */}
          <Card item={extras.cards[0]} className="col-span-12 md:col-span-5 row-span-2" />
          {/* Card 2 — top right small */}
          <Card item={extras.cards[1]} className="col-span-6 md:col-span-4 row-span-1" />
          {/* Card 3 — top far right */}
          <Card item={extras.cards[2]} className="col-span-6 md:col-span-3 row-span-1" />
          {/* Card 4 — bottom wide */}
          <Card item={extras.cards[3]} className="col-span-12 md:col-span-7 row-span-1" />
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  className,
}: {
  item: { title: string; caption: string; image: string };
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[2px] shadow-plate group ${className ?? ""}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover film-tone transition-transform duration-[1400ms] group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-900/65 via-ink-900/0 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <p className="font-mono text-[10px] uppercase tracking-cenefa text-cream-light/75 mb-1.5">
          {item.caption}
        </p>
        <p className="font-display italic text-[clamp(1.1rem,1.6vw,1.5rem)] text-cream-light leading-tight">
          {item.title}
        </p>
      </figcaption>
    </motion.figure>
  );
}
