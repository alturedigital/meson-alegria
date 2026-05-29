"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/types/i18n";

/**
 * SPECIALTY — three signature moments (oven, meat, table), each with full-bleed
 * photo, kicker, italic title and a small body. Alternating layout.
 */
export default function Specialty({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-cream-light">
      {/* Intro */}
      <div className="container-fluid pt-28 md:pt-40 pb-10">
        <div className="max-w-[44ch]">
          <p className="eyebrow text-granada-700 mb-7">
            {dict.specialty.eyebrow}
          </p>
          <h2 className="display-italic text-[clamp(2.4rem,5vw,4.4rem)] text-ink-900 leading-[1.02]">
            {dict.specialty.title}
          </h2>
          <p className="mt-7 text-ink-700 text-[15.5px] leading-[1.7]">
            {dict.specialty.lede}
          </p>
        </div>
      </div>

      {/* Three items */}
      <div className="container-fluid pb-28 md:pb-40">
        <div className="space-y-28 md:space-y-44 mt-20">
          {dict.specialty.items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reversed ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[5/6] overflow-hidden rounded-[2px] shadow-plate">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover film-tone transition-transform duration-[1200ms] hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent"
                  />
                </div>

                {/* Body */}
                <div className={reversed ? "lg:pr-10" : "lg:pl-10"}>
                  <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/75 mb-5">
                    {item.kicker}
                  </p>
                  <h3 className="display-italic text-[clamp(2rem,4vw,3.4rem)] text-ink-900 leading-[1.05] max-w-[16ch]">
                    {item.title}
                  </h3>
                  <p className="mt-7 max-w-[46ch] text-ink-700 text-[15px] leading-[1.7]">
                    {item.body}
                  </p>
                  <div
                    className="mt-9 h-px w-14 bg-granada-500/45"
                    aria-hidden
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
