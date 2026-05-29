"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/i18n";
import Motivo from "@/components/ui/Motivo";

/**
 * Editorial timeline — text only. Each chapter is a wide row:
 *   [YEAR · tabular]  [Title italic · Body]
 * Chapters are separated by a granadine motivo divider.
 */
export default function Timeline({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-cream-light py-28 md:py-40 relative">
      <div className="container-fluid">
        <div className="max-w-[44ch] mb-20 md:mb-28">
          <p className="eyebrow text-granada-700 mb-7">
            {dict.historia.timelineEyebrow}
          </p>
          <h2 className="display italic text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink-900 leading-[1.05]">
            {dict.historia.timelineTitle}
          </h2>
        </div>

        <ol className="max-w-[1100px] mx-auto">
          {dict.story.chapters.map((c, i) => (
            <motion.li
              key={`${c.year}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: 0.85,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Divider above every chapter except the first */}
              {i > 0 && (
                <div className="my-14 md:my-20">
                  <Motivo as="divider" size="sm" />
                </div>
              )}

              <div className="grid gap-8 md:gap-16 md:grid-cols-[200px,1fr] lg:grid-cols-[260px,1fr] items-baseline">
                {/* Year — big tabular */}
                <p className="font-display text-[clamp(2.6rem,5vw,4.4rem)] text-granada-700 leading-none tracking-tightish tabular">
                  {c.year}
                </p>
                <div>
                  <h3 className="display italic text-[clamp(1.6rem,2.6vw,2.2rem)] text-ink-900 leading-[1.15]">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-[58ch] text-ink-700 text-[15.5px] leading-[1.75]">
                    {c.body}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
