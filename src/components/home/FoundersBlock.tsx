"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * FOUNDERS — meet the founder, magazine layout:
 *  · left: chapter, eyebrow, italic title, body
 *  · right: small image top (food detail), big B&W portrait below, captions
 *
 * Asymmetric — left column is narrower than the right image stack.
 */
export default function FoundersBlock({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).founders;

  return (
    <section className="relative bg-cream-light py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.25fr] lg:gap-24 items-start">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · {extras.eyebrow}
            </p>
            <h2 className="leading-[1.02]">
              <span className="display block h-editorial text-[clamp(2.6rem,5.6vw,5rem)] text-ink-900">
                {extras.titleA}
              </span>
              <span className="display-italic block h-editorial text-[clamp(2.6rem,5.6vw,5rem)] text-granada-700 -mt-1">
                {extras.titleB}
              </span>
            </h2>
            <p className="mt-10 max-w-[46ch] text-ink-700 text-[15.5px] leading-[1.75]">
              {extras.body}
            </p>
          </motion.div>

          {/* RIGHT — image stack */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Small image top-left (food detail) */}
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.95, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-5 col-start-1 row-start-1 self-start mt-12 md:mt-20 relative aspect-[5/4] overflow-hidden rounded-[2px] shadow-plate"
            >
              <Image
                src="/images/meson19.jpg"
                alt={extras.smallCaption}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 font-mono text-[10px] uppercase tracking-cenefa text-cream-light/85 bg-gradient-to-t from-ink-900/70 to-transparent">
                {extras.smallCaption}
              </figcaption>
            </motion.figure>

            {/* Big portrait — right, taller */}
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-7 col-start-6 row-start-1 relative aspect-[3/4] overflow-hidden rounded-[2px] shadow-plate bg-ink-900"
            >
              <Image
                src="/images/carmen.webp"
                alt="Carmen López Morales"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover grayscale"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-transparent">
                <p className="font-mono text-[10px] uppercase tracking-cenefa text-cream-light/85">
                  {extras.portraitCaption}
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
