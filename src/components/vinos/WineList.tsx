"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WINES, type WineSection } from "@/lib/data/wines";
import { getPageExtras } from "@/lib/data/page-extras";
import Motivo from "@/components/ui/Motivo";
import type { Locale } from "@/lib/i18n/config";

/**
 * Editorial wine list.
 *   · Motivo divider between sections
 *   · 2-col layout for long sections (whites, ribera, etc.)
 *   · A photo intermission after the fortifieds, to break the type-heavy flow.
 */

const SECTION_KEYS: Record<WineSection["id"], keyof ReturnType<typeof getPageExtras>["wines"]["sections"]> = {
  whites: "whites",
  rose: "rose",
  generosos: "generosos",
  cava: "cava",
  ribera: "ribera",
  rioja: "rioja",
  others: "others",
};

const INTERMISSION_AFTER = "cava";

export default function WineList({ lang }: { lang: Locale }) {
  const extras = getPageExtras(lang).wines;

  return (
    <section className="bg-cream-light pt-8 md:pt-12 pb-28 md:pb-32">
      <div className="container-fluid">
        <div className="max-w-[960px] mx-auto">
          {WINES.map((section, idx) => {
            const sectionTitle = extras.sections[SECTION_KEYS[section.id]];
            const isLong = section.wines.length >= 6;

            return (
              <div key={section.id}>
                {idx > 0 && (
                  <div className="my-12 md:my-16">
                    <Motivo as="divider" size="sm" />
                  </div>
                )}

                <motion.section
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <header className="flex items-baseline gap-5 mb-7 md:mb-9">
                    <span className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/65 tabular pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display text-[clamp(1.7rem,3vw,2.4rem)] text-ink-900 leading-tight">
                      {sectionTitle}
                    </h2>
                  </header>

                  <ul
                    className={
                      isLong
                        ? "grid gap-x-12 gap-y-0 md:grid-cols-2"
                        : "grid gap-x-12 gap-y-0"
                    }
                  >
                    {section.wines.map((w, i) => (
                      <li
                        key={`${section.id}-${i}`}
                        className="group py-3.5 md:py-4 border-b border-granada-700/12 last:border-b-0"
                      >
                        <div className="flex items-baseline gap-3 md:gap-4">
                          <h3 className="font-display text-[clamp(0.98rem,1.35vw,1.15rem)] text-ink-900 leading-tight transition-colors group-hover:text-granada-800">
                            {w.name}
                          </h3>
                          <span
                            aria-hidden
                            className="flex-1 border-b border-dotted border-granada-700/25 translate-y-[-3px]"
                          />
                          <p className="font-mono tabular text-[11.5px] uppercase tracking-ember text-granada-800 whitespace-nowrap pt-0.5">
                            {w.price}
                          </p>
                        </div>
                        {w.region && (
                          <p className="mt-1 font-serif italic text-[13px] leading-snug text-ink-700/85">
                            {w.region}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.section>

                {section.id === INTERMISSION_AFTER && (
                  <BodegaIntermission />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BodegaIntermission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 md:my-24 relative aspect-[21/9] w-full overflow-hidden rounded-card shadow-card"
    >
      <Image
        src="/images/meson19.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 960px"
        className="object-cover film-tone"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent"
      />
      <p className="absolute bottom-8 left-8 md:bottom-10 md:left-10 font-display italic text-cream-light text-[clamp(1.2rem,1.8vw,1.6rem)] leading-tight max-w-[24ch]">
        Una bodega pensada para realzar la brasa — pregúntanos.
      </p>
    </motion.div>
  );
}
