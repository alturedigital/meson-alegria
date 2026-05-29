"use client";

import { motion } from "framer-motion";
import { pressArticles } from "@/lib/data/press";
import type { Dictionary } from "@/types/i18n";
import type { Locale } from "@/lib/i18n/config";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const LOCALE_TO_INTL: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
  zh: "zh-CN",
  ko: "ko-KR",
  ja: "ja-JP",
};

export default function PressDossier({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const fmt = new Intl.DateTimeFormat(LOCALE_TO_INTL[lang], DATE_OPTIONS);

  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <div className="max-w-[52ch] mb-16 md:mb-20">
          <p className="eyebrow text-granada-700 mb-7">
            {dict.historia.pressEyebrow}
          </p>
          <h2 className="display-italic text-[clamp(2.4rem,5vw,4.4rem)] text-ink-900 leading-[1.02]">
            {dict.historia.pressTitle}
          </h2>
          <p className="mt-8 text-ink-700 text-[15.5px] leading-[1.75]">
            {dict.historia.pressLede}
          </p>
        </div>

        <ul className="grid gap-3 md:gap-4">
          {pressArticles.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid items-center gap-6 md:gap-10 grid-cols-[auto,1fr,auto] rounded-2xl border border-granada-700/15 bg-cream-light/70 backdrop-blur px-6 py-5 md:px-9 md:py-7 transition-colors hover:bg-granada-50 hover:border-granada-700/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/75 tabular w-16 md:w-20">
                  {fmt.format(new Date(p.date))}
                </span>
                <h3 className="font-display italic text-[clamp(1.2rem,2vw,1.7rem)] text-ink-900 leading-snug">
                  {p.title}
                </h3>
                <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-cenefa text-granada-700">
                  <span className="hidden md:inline">
                    {dict.historia.pressReadAt} {p.source}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-granada-700/30 text-granada-700 transition-colors group-hover:bg-granada-500 group-hover:text-cream-light group-hover:border-granada-700">
                    <svg width="11" height="11" viewBox="0 0 10 10" aria-hidden>
                      <path
                        d="M2 5h6M5 2l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
