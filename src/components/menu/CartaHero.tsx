"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/i18n";

/**
 * CARTA hero — editorial title sheet. No big image — just the title,
 * a lede, and a hairline + the waiter-note for non-Spanish locales.
 */
export default function CartaHero({
  dict,
  isEs,
}: {
  dict: Dictionary;
  isEs: boolean;
}) {
  return (
    <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16">
      <div className="container-fluid">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80"
        >
          {dict.menu.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-6 text-[clamp(3rem,9vw,8rem)] text-ink-900 leading-[0.95] max-w-[18ch]"
        >
          {dict.menu.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 max-w-[56ch] text-ink-700 text-[16px] leading-[1.7]"
        >
          {dict.menu.intro}
        </motion.p>

        {!isEs && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 inline-flex items-start gap-3 rounded-2xl border border-granada-700/22 bg-cream/60 backdrop-blur px-5 py-4 max-w-[52ch]"
          >
            <span className="lang-chip mt-0.5">ES</span>
            <p className="text-[13.5px] leading-[1.6] text-ink-800">
              {dict.menu.waiterNote}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
