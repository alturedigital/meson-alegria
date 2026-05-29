"use client";

import type { MenuItem as MenuItemData } from "@/lib/data/menu";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/types/i18n";

/**
 * One dish row, designed for appetite:
 *
 *   Carrillera Ibérica  · · · · · · · · · · ·  16,00 €
 *   ↳ ES — Carrillera Ibérica            (chip, non-ES only)
 *   ↳ Cocinada lentamente en vino tinto. (Cormorant italic, optional)
 *
 * Hover lifts the name into terracotta-deep granada (#006d4f) so the
 * scanning eye knows where it just landed.
 */
export default function MenuItem({
  item,
  lang,
  dict,
}: {
  item: MenuItemData;
  lang: Locale;
  dict: Dictionary;
}) {
  const localized = item.name[lang] ?? item.name_es;
  const showChip = lang !== "es";
  const description = item.desc?.[lang];

  const priceLabel =
    item.flag === "ask_staff"
      ? dict.menu.askStaff
      : item.flag === "by_weight"
      ? dict.menu.byWeight
      : item.price;

  return (
    <li className="group py-4 md:py-5 border-b border-granada-700/12 last:border-b-0">
      <div className="flex items-baseline gap-3 md:gap-5">
        <h3 className="font-display text-[clamp(1.05rem,1.55vw,1.3rem)] text-ink-900 leading-snug transition-colors group-hover:text-granada-800">
          {localized}
        </h3>
        <span
          aria-hidden
          className="flex-1 border-b border-dotted border-granada-700/25 translate-y-[-3px]"
        />
        <p className="font-mono tabular text-[12px] uppercase tracking-ember text-granada-800 whitespace-nowrap pt-0.5">
          {priceLabel}
        </p>
      </div>

      {showChip && (
        <p className="mt-1.5">
          <span className="lang-chip">ES — {item.name_es}</span>
        </p>
      )}

      {description && (
        <p className="mt-2 max-w-[64ch] font-serif italic text-[14px] leading-[1.55] text-ink-700/85">
          {description}
        </p>
      )}
    </li>
  );
}
