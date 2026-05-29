"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Floating "Emblemáticos de Granada" award badge.
 *
 * Sits at the seam between the Hero and the next section (ManifestoGrid),
 * overlapping both. Two motions stacked:
 *  · entry — fades in + slight scale once the page settles
 *  · idle  — gentle natural floating: Y bob + micro rotation
 *
 * Positioned absolute right-of-page on desktop, smaller and right-aligned
 * on mobile. The parent wrapper is `relative h-0` so the badge can stick out
 * of the Hero/Manifesto flow without pushing layout.
 */
export default function EmblematicosBadge() {
  return (
    <div className="container-fluid relative h-0 z-30 pointer-events-none">
      <motion.a
        href="https://www.granada.org/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reconocimiento Emblemáticos de Granada — Ayuntamiento de Granada"
        // Wrapper handles the entry transition + the idle loop together
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        animate={{
          opacity: 1,
          scale: 1,
          // Idle loop: gentle vertical bob
          y: [0, -8, 0, 6, 0],
          rotate: [-3, -1.4, -3, -4.2, -3],
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
          y: {
            duration: 7.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.6,
          },
          rotate: {
            duration: 7.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.6,
          },
        }}
        className="pointer-events-auto absolute right-2 md:right-6 -top-[78px] md:-top-[108px] block w-[88px] md:w-[140px] lg:w-[170px] origin-center"
        style={{
          // Soft cast shadow gives the impression it floats above the page
          filter:
            "drop-shadow(0 18px 22px rgba(60,40,18,0.20)) drop-shadow(0 6px 8px rgba(60,40,18,0.10))",
        }}
      >
        <Image
          src="/images/emblematicos-granada.jpg"
          alt="Emblemáticos de Granada · Ayuntamiento de Granada"
          width={340}
          height={476}
          priority={false}
          sizes="(max-width: 768px) 88px, (max-width: 1024px) 140px, 170px"
          className="block w-full h-auto select-none"
        />
      </motion.a>
    </div>
  );
}
