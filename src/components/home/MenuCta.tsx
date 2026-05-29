"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types/i18n";
import type { Locale } from "@/lib/i18n/config";

/**
 * MENU CTA — bone backdrop with a wide photo strip and the "carta" promise.
 * Includes the multilingual waiter note for non-Spanish locales.
 */
export default function MenuCta({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const isEs = lang === "es";
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container-fluid py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-[1.1fr,1fr] items-center">
          {/* Left — copy */}
          <div>
            <p className="eyebrow text-granada-700 mb-7">
              {dict.menuCta.eyebrow}
            </p>
            <h2 className="display-italic text-[clamp(2.6rem,5.5vw,5rem)] text-ink-900 leading-[1.02] max-w-[14ch]">
              {dict.menuCta.title}
            </h2>
            <p className="mt-7 max-w-[44ch] text-ink-700 text-[15.5px] leading-[1.7]">
              {dict.menuCta.lede}
            </p>

            {!isEs && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-granada-700/22 bg-cream-light/85 backdrop-blur px-5 py-4 max-w-[52ch]"
              >
                <span className="lang-chip mt-0.5">ES</span>
                <p className="text-[13.5px] leading-[1.6] text-ink-800">
                  {dict.menuCta.waiterNote}
                </p>
              </motion.div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href={`/${lang}/carta`} className="btn-ember">
                {dict.menuCta.cta}
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a href="tel:+34958222794" className="btn-ghost">
                {dict.hero.cta}
              </a>
            </div>
          </div>

          {/* Right — three vertical photo strip */}
          <div className="relative grid grid-cols-3 gap-2.5 h-[460px] md:h-[560px]">
            {["meson3.jpg", "meson8.jpg", "meson14.jpg"].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.95,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-[2px] shadow-plate ${
                  i === 1 ? "mt-10" : i === 2 ? "mt-4" : ""
                }`}
              >
                <Image
                  src={`/images/${src}`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 33vw, 16vw"
                  className="object-cover film-tone transition-transform duration-1000 hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
