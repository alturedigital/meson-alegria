"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/i18n";

/**
 * The eslogan moment — Carmen's saying, set in handwritten Caveat, against a
 * deep ink background. A pause in the scroll.
 */
export default function Signature({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-ink-900 text-cream-light overflow-hidden">
      <div className="container-fluid relative py-28 md:py-40">
        <div className="max-w-[42ch]">
          <p className="eyebrow text-granada-200 mb-7">
            {dict.story.closing.title.split(",")[0]}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sign text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.05] text-cream-light"
          >
            {dict.story.closing.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[50ch] text-cream/70 text-[15.5px] leading-[1.7]"
          >
            {dict.story.closing.body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
