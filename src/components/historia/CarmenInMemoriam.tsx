"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/types/i18n";

/**
 * CARMEN IN MEMORIAM — full-bleed tribute panel.
 * Deep ink background, B&W portrait, the verbatim text from Ideal newspaper.
 */
export default function CarmenInMemoriam({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-ink-900 text-cream-light py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-14 lg:grid-cols-[0.9fr,1.1fr] items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2px]"
          >
            <Image
              src="/images/carmen.webp"
              alt="Carmen López Morales"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent"
            />
          </motion.div>

          {/* Copy */}
          <div className="lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="eyebrow text-clay-400 mb-6"
            >
              {dict.story.carmen.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="display-italic text-[clamp(2.6rem,6vw,5.4rem)] text-cream-light leading-[1.02]"
            >
              {dict.story.carmen.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-5 font-mono text-[11.5px] uppercase tracking-cenefa text-clay-400/85"
            >
              {dict.story.carmen.caption}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 text-cream/85 text-[16px] leading-[1.8] max-w-[56ch]"
            >
              {dict.story.carmen.body}
            </motion.p>

            {/* Pull quote from the daughter */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 border-l-2 border-clay-400/60 pl-7 py-2 max-w-[56ch]"
            >
              <p className="font-display italic text-[clamp(1.4rem,2.4vw,2rem)] text-cream-light leading-[1.45]">
                {dict.historia.quote.body}
              </p>
              <cite className="not-italic mt-5 block font-mono text-[11px] uppercase tracking-cenefa text-clay-400/85">
                {dict.historia.quote.author}
              </cite>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
