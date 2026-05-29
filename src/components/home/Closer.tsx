"use client";

import { motion } from "framer-motion";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * CLOSER — full-bleed signature panel: tagline as italic intro, contact info
 * in 3 columns, then a HUGE script wordmark spanning the width as the seal.
 */
export default function Closer({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).closer;

  return (
    <section className="relative bg-ink-900 text-cream-light overflow-hidden">
      <div className="container-fluid pt-28 md:pt-40 pb-12">
        {/* Top — tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display-italic text-[clamp(2.2rem,4.6vw,3.6rem)] text-cream-light max-w-[24ch] leading-[1.1]"
        >
          {extras.tagline}
        </motion.p>

        {/* 3-column info */}
        <div className="mt-16 md:mt-20 grid gap-10 md:grid-cols-3 border-t border-cream-light/15 pt-12">
          <div>
            <p className="eyebrow text-granada-200 mb-3">
              {extras.addressLabel}
            </p>
            <p className="font-display italic text-[clamp(1.2rem,1.8vw,1.6rem)] text-cream-light leading-snug">
              {extras.address}
            </p>
            <a
              href="https://maps.google.com/?q=Mesón+Alegría+Granada"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-cenefa text-granada-200 hover:text-cream-light transition-colors"
            >
              Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>

          <div>
            <p className="eyebrow text-granada-200 mb-3">{extras.hoursLabel}</p>
            <ul className="space-y-1.5 text-[14.5px] leading-[1.7] text-cream/85">
              {extras.hoursLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-granada-200 mb-3">{extras.phoneLabel}</p>
            <a
              href="tel:+34958222794"
              className="font-display italic text-[clamp(1.5rem,2.2vw,2rem)] text-cream-light hover:text-granada-200 transition-colors"
            >
              {extras.phone}
            </a>
          </div>
        </div>

        {/* GIANT script wordmark — the seal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 text-center"
        >
          <h2
            className="font-sign text-cream-light leading-[0.78] tracking-[-0.02em]"
            style={{ fontSize: "clamp(5rem, 18vw, 17rem)" }}
          >
            {extras.wordmark}
          </h2>
        </motion.div>

        {/* Bottom row — legal + credit + socials */}
        <div className="mt-14 flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-t border-cream-light/15 pt-7 font-mono text-[10.5px] uppercase tracking-cenefa text-cream/65">
          <span>{extras.legal}</span>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/mesonalegria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-light transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/mesonalegria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-light transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://tripadvisor.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-light transition-colors"
            >
              Tripadvisor
            </a>
          </div>
          <span>{extras.credit}</span>
        </div>
      </div>
    </section>
  );
}
