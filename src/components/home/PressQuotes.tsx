"use client";

import { motion } from "framer-motion";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * PRESS QUOTES — editorial testimonials from Diario Ideal.
 * Layout: sticky title on the left, 3 quotes stacked on the right
 * with hairline dividers and source attribution in mono caps.
 */
export default function PressQuotes({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).press;

  return (
    <section className="relative bg-cream-light py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · {extras.eyebrowA}
            </p>
            <h2 className="leading-[1.02]">
              <span className="display block h-editorial text-[clamp(2.4rem,5.4vw,4.4rem)] text-ink-900">
                {extras.eyebrowA}
              </span>
              <span className="display-italic block h-editorial text-[clamp(2.4rem,5.4vw,4.4rem)] text-granada-700 -mt-1">
                {extras.eyebrowB}
              </span>
            </h2>
            <p className="mt-9 max-w-[40ch] text-ink-700 text-[15px] leading-[1.75]">
              {extras.intro}
            </p>
          </motion.div>

          <ol className="space-y-12 md:space-y-16">
            {extras.items.map((q, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.95,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-granada-700/15 pt-8 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/65 mb-4">
                  <span className="text-ink-700/55">0{i + 1} —</span>{" "}
                  {q.source}
                </p>
                <blockquote className="font-display italic text-[clamp(1.4rem,2.4vw,2rem)] text-ink-900 leading-[1.4] max-w-[52ch]">
                  <span className="text-granada-700/40 select-none">«</span>
                  {q.quote}
                  <span className="text-granada-700/40 select-none">»</span>
                </blockquote>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-cenefa text-ink-700/50">
                  {q.author}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
