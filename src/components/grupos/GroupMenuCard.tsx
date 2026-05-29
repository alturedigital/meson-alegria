"use client";

import { motion } from "framer-motion";
import type { GroupMenu } from "@/lib/data/groups";
import { getPageExtras } from "@/lib/data/page-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * Compact group-menu card, designed to live in a 2-col grid on desktop.
 *
 * Layout:
 *   [01]            44,00 €
 *   Menú 1
 *   ────────────────────────
 *   ENTRANTES (al centro · 4 px)
 *     · tomate aliñao
 *     · croquetas caseras
 *     · huevos con patatas y jamón
 *   ────────────────────────
 *   PLATO A ELEGIR
 *     · secreto ibérico
 *     · ...
 *   ────────────────────────
 *   POSTRE · BEBIDAS
 */
export default function GroupMenuCard({
  menu,
  index,
  lang,
}: {
  menu: GroupMenu;
  index: number;
  lang: Locale;
}) {
  const extras = getPageExtras(lang).groups;
  const isCocktail = menu.type === "cocktail";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-card border border-granada-700/15 bg-cream-light/85 px-6 md:px-8 py-7 md:py-8 shadow-soft"
    >
      {/* Header */}
      <header className="flex items-baseline justify-between gap-4 mb-5 pb-4 border-b border-granada-700/15">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/65 mb-1.5">
            {String(index + 1).padStart(2, "0")}
            {isCocktail ? ` · ${extras.cocktailLabel}` : ""}
          </p>
          <h2 className="display text-[clamp(1.35rem,2vw,1.7rem)] text-ink-900 leading-tight">
            {menu.name}
          </h2>
        </div>
        <p className="font-display text-[clamp(1.5rem,2vw,1.9rem)] text-granada-700 leading-none text-right">
          {menu.price}
          <span className="block mt-1 font-mono text-[9.5px] uppercase tracking-cenefa text-granada-700/65 font-normal">
            {extras.perPerson} · {extras.vat}
          </span>
        </p>
      </header>

      {isCocktail ? (
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-cenefa text-granada-700/70 mb-3">
            {extras.allDishes}
          </p>
          <ul className="font-display text-[15px] text-ink-900 space-y-1.5 leading-snug">
            {menu.dishes?.map((d, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="text-granada-700/50">·</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="space-y-5">
          <Block title={extras.starters} hint={extras.allDishes} items={menu.starters} />
          <Block title={extras.mains} items={menu.mains ?? []} />
          <div className="border-t border-granada-700/12 pt-4 flex items-baseline justify-between gap-3 text-[13.5px]">
            <p>
              <span className="font-mono text-[9.5px] uppercase tracking-cenefa text-granada-700/70 mr-2">
                {extras.desserts}
              </span>
              <span className="font-display text-ink-900">{menu.dessert}</span>
            </p>
          </div>
          <p className="text-[12px] leading-snug text-ink-700/75 body-italic">
            {menu.drinks}
          </p>
        </div>
      )}
    </motion.article>
  );
}

function Block({
  title,
  hint,
  items,
}: {
  title: string;
  hint?: string;
  items: string[];
}) {
  return (
    <div>
      <p className="font-mono text-[9.5px] uppercase tracking-cenefa text-granada-700/70 mb-2">
        {title}
        {hint && (
          <span className="ml-2 text-granada-700/45 normal-case tracking-normal italic">
            ({hint})
          </span>
        )}
      </p>
      <ul className="font-display text-[15px] text-ink-900 space-y-1 leading-snug">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="text-granada-700/50">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
