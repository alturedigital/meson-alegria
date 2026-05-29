"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MenuSection from "./MenuSection";
import { MENU } from "@/lib/data/menu";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/types/i18n";

/**
 * Editorial carta with two photo intermissions to keep the eye moving:
 *  · salads / cold / hot / typical
 *  · INTERMISSION 1 — "La brasa abierta..."
 *  · iberian / sanpascual / beef
 *  · INTERMISSION 2 — "Carne madurada, cocción lenta"
 *  · lamb / desserts
 */

const INTERMISSION_1 = {
  photo: "/images/meson5.jpg",
  caption: "La brasa abierta — el horno encendido desde 1995.",
};
const INTERMISSION_2 = {
  photo: "/images/meson17.jpg",
  caption: "Carne seleccionada, cocción lenta sobre carbón de encina.",
};

export default function MenuView({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const block1 = MENU.filter((s) =>
    ["salads", "cold", "hot", "typical"].includes(s.id)
  );
  const block2 = MENU.filter((s) =>
    ["iberian", "sanpascual", "beef"].includes(s.id)
  );
  const block3 = MENU.filter((s) =>
    ["lamb", "desserts"].includes(s.id)
  );

  return (
    <section className="bg-cream-light pt-8 md:pt-12 pb-28 md:pb-32">
      {/* Block 1 */}
      <div className="container-fluid">
        <div className="max-w-[780px]">
          {block1.map((sec, i) => (
            <MenuSection
              key={sec.id}
              section={sec}
              chapter={String(i + 1).padStart(2, "0")}
              lang={lang}
              dict={dict}
              showDivider={i > 0}
            />
          ))}
        </div>
      </div>

      <Intermission data={INTERMISSION_1} />

      {/* Block 2 */}
      <div className="container-fluid">
        <div className="max-w-[780px]">
          {block2.map((sec, i) => (
            <MenuSection
              key={sec.id}
              section={sec}
              chapter={String(block1.length + i + 1).padStart(2, "0")}
              lang={lang}
              dict={dict}
              showDivider={true}
            />
          ))}
        </div>
      </div>

      <Intermission data={INTERMISSION_2} mirrored />

      {/* Block 3 */}
      <div className="container-fluid">
        <div className="max-w-[780px]">
          {block3.map((sec, i) => (
            <MenuSection
              key={sec.id}
              section={sec}
              chapter={String(block1.length + block2.length + i + 1).padStart(2, "0")}
              lang={lang}
              dict={dict}
              showDivider={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Intermission({
  data,
  mirrored = false,
}: {
  data: { photo: string; caption: string };
  mirrored?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="container-fluid my-20 md:my-28"
    >
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-card shadow-card">
        <Image
          src={data.photo}
          alt=""
          fill
          sizes="100vw"
          className="object-cover film-tone"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent"
        />
        <p
          className={`absolute bottom-8 ${mirrored ? "right-8 md:right-12 text-right" : "left-8 md:left-12"} md:bottom-12 font-display italic text-cream-light text-[clamp(1.3rem,2vw,1.8rem)] leading-tight max-w-[22ch]`}
        >
          {data.caption}
        </p>
      </div>
    </motion.div>
  );
}
