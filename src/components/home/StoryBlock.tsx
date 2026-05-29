"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { Dictionary } from "@/types/i18n";

/**
 * STORY — sticky left "1979" timestamp, right column chapters that scroll past.
 * The headline drifts down slightly as the user scrolls through chapters.
 */
export default function StoryBlock({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section
      ref={ref}
      className="relative bg-cream-light paper-grain py-28 md:py-40"
    >
      <div className="container-fluid">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr]">
          {/* Sticky left — eyebrow + headline */}
          <div className="lg:sticky lg:top-32 self-start">
            <p className="eyebrow text-granada-700 mb-7">
              {dict.story.eyebrow}
            </p>
            <motion.h2
              style={{ y: headlineY }}
              className="display-italic text-[clamp(2.4rem,5vw,4.4rem)] text-ink-900 leading-[1.02] max-w-[18ch]"
            >
              {dict.story.title}
            </motion.h2>

            <div className="mt-10 h-px w-24 bg-granada-500/40" aria-hidden />

            <p className="mt-10 max-w-[44ch] text-ink-800/85 text-[15.5px] leading-[1.7]">
              {dict.story.lede}
            </p>

            {/* Carmen mini card under the lede */}
            <div className="mt-12 rounded-2xl border border-granada-700/15 bg-cream/60 p-5 max-w-md backdrop-blur">
              <p className="eyebrow text-clay-500 mb-3">
                {dict.story.carmen.eyebrow}
              </p>
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/carmen.webp"
                    alt="Carmen López Morales"
                    fill
                    sizes="80px"
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-display italic text-2xl text-ink-900 leading-tight">
                    {dict.story.carmen.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70">
                    {dict.story.carmen.caption}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[13.5px] leading-[1.65] text-ink-700">
                {dict.story.carmen.body}
              </p>
            </div>
          </div>

          {/* Right — chapters */}
          <ol className="relative space-y-12 lg:pl-10">
            <span
              aria-hidden
              className="absolute left-2 lg:left-0 top-2 bottom-2 w-px bg-gradient-to-b from-granada-700/0 via-granada-700/25 to-granada-700/0"
            />
            {dict.story.chapters.map((c, i) => (
              <motion.li
                key={c.year + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-10"
              >
                <span
                  className="absolute left-0 top-3 h-3 w-3 rounded-full bg-granada-500 shadow-[0_0_0_4px_rgba(0,163,118,0.18)]"
                  aria-hidden
                />
                <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-2">
                  {c.year}
                </p>
                <h3 className="font-display italic text-[clamp(1.7rem,3vw,2.4rem)] text-ink-900 leading-[1.1]">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[58ch] text-ink-700 text-[15px] leading-[1.7]">
                  {c.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
