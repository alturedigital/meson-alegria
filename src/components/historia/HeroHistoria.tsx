"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/types/i18n";

/**
 * HISTORIA hero — editorial, no video. Big italic title over a 60-aniversario
 * background with bone wash, then the lede.
 */
export default function HeroHistoria({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="relative h-[88svh] min-h-[640px] w-full">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/60-aniversario.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "saturate(0.7) brightness(1.08)" }}
          />
        </div>

        {/* Bone wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,245,233,0.86) 0%, rgba(255,250,242,0.84) 45%, rgba(251,245,233,0.94) 100%)",
          }}
          aria-hidden
        />

        <div className="container-fluid relative z-10 flex h-full flex-col items-start justify-end pb-20 md:pb-28 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/85"
          >
            {dict.historia.heroEyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="display-italic mt-7 text-[clamp(3rem,9vw,8rem)] text-ink-900 max-w-[18ch] leading-[1.0]"
          >
            {dict.historia.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.7 }}
            className="mt-10 max-w-[58ch] text-ink-800/85 text-[16px] leading-[1.7]"
          >
            {dict.historia.heroLede}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
