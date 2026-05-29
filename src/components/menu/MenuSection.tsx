"use client";

import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import Motivo from "@/components/ui/Motivo";
import type { MenuSection as MenuSectionData } from "@/lib/data/menu";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/types/i18n";

const SECTION_TITLES: Record<MenuSectionData["id"], keyof Dictionary["menu"]["sections"]> = {
  salads: "salads",
  cold: "cold",
  hot: "hot",
  typical: "typical",
  iberian: "iberian",
  sanpascual: "sanpascual",
  beef: "beef",
  lamb: "lamb",
  desserts: "desserts",
};

export default function MenuSection({
  section,
  chapter,
  lang,
  dict,
  showDivider = true,
}: {
  section: MenuSectionData;
  chapter: string;
  lang: Locale;
  dict: Dictionary;
  showDivider?: boolean;
}) {
  const title = dict.menu.sections[SECTION_TITLES[section.id]];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 md:py-14"
    >
      {showDivider && (
        <div className="mb-10 md:mb-14">
          <Motivo as="divider" size="sm" />
        </div>
      )}

      <header className="flex items-baseline gap-5 mb-7 md:mb-9">
        <span className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/65 tabular pt-1">
          {chapter}
        </span>
        <h2 className="display text-[clamp(1.7rem,3vw,2.4rem)] text-ink-900 leading-tight">
          {title}
        </h2>
      </header>

      <ul>
        {section.items.map((item, i) => (
          <MenuItem key={`${section.id}-${i}`} item={item} lang={lang} dict={dict} />
        ))}
      </ul>
    </motion.section>
  );
}
