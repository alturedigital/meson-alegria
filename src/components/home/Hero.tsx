"use client";

import { motion } from "framer-motion";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/types/i18n";
import Motivo from "@/components/ui/Motivo";

/**
 * HERO — editorial premium. Headline now sized at half the previous scale so
 * the brand motivo can breathe alongside. Patio video inside a rounded card,
 * handwritten "desliza" in the corner, granadine motivos flanking the
 * composition.
 */
export default function Hero({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const extras = getHomeExtras(lang).hero;

  return (
    <section className="relative bg-cream-light pt-32 md:pt-36 pb-12 md:pb-16 overflow-hidden">
      {/* Background motivo, faded, top-right corner of the page */}
      <Motivo
        size="xl"
        opacity={0.07}
        rotate={12}
        className="absolute -top-10 -right-16 md:-right-10 pointer-events-none"
      />

      <div className="container-fluid relative">
        {/* Eyebrow row with small motivo */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-5"
        >
          <Motivo size="xs" opacity={0.65} />
          <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
            {dict.hero.eyebrow}
          </p>
        </motion.div>

        {/* Headline — smaller, refined */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display text-granada-700 leading-[0.95] tracking-tightish"
        >
          <span className="block text-[clamp(2.4rem,6vw,5.4rem)]">
            {dict.hero.headlineTop}
          </span>
          <span className="block italic text-[clamp(2.6rem,6.6vw,5.8rem)] -mt-1 ml-[0.4em] md:ml-[0.6em]">
            {dict.hero.headlineBottom}
          </span>
        </motion.h1>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 relative w-full overflow-hidden rounded-card shadow-card bg-ink-900"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover film-tone-strong"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/meson13.jpg"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>

            {/* Cream sub-tagline on the image, top-center, framed by motivos */}
            <div className="absolute inset-x-0 top-6 md:top-10 z-10 flex justify-center items-center gap-4 pointer-events-none">
              <Motivo size="xs" color="#fbf4e4" opacity={0.65} flip />
              <p className="font-mono text-[10.5px] md:text-[11px] uppercase tracking-cenefa text-cream-light/90 text-center">
                {dict.meta.tagline.replace("·", "—")}
              </p>
              <Motivo size="xs" color="#fbf4e4" opacity={0.65} />
            </div>

            {/* Handwritten "desliza para explorar" bottom-right */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute bottom-6 md:bottom-10 right-7 md:right-12 sign-accent text-cream-light text-[clamp(1.4rem,2vw,2rem)] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              {dict.hero.scroll}
              <svg
                aria-hidden
                viewBox="0 0 60 30"
                className="inline-block ml-2 w-10 -mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="M2 14 Q12 6 22 14 T42 14 T58 12 M52 8 L58 12 L54 18" />
              </svg>
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom mini-row — address left, lede center, eyebrow right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-6 md:gap-12 items-start"
        >
          <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-ink-700/65">
            {extras.addressLine}
          </p>
          <p className="font-serif italic text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-800/85 leading-[1.5] max-w-[60ch]">
            {dict.hero.sub}
          </p>
          <div className="flex items-center gap-3 md:justify-end">
            <Motivo size="xs" opacity={0.5} flip />
            <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-ink-700/65">
              1979
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
