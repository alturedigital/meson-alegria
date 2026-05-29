import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { NEWS } from "@/lib/data/news";
import { pressArticles } from "@/lib/data/press";
import Motivo from "@/components/ui/Motivo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.news.title,
    description: dict.news.intro,
  };
}

const LOCALE_TO_INTL: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
  zh: "zh-CN",
  ko: "ko-KR",
  ja: "ja-JP",
};

export default async function NovedadesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const fmt = new Intl.DateTimeFormat(LOCALE_TO_INTL[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="container-fluid">
          <div className="flex items-center gap-3 mb-5">
            <Motivo size="xs" opacity={0.65} />
            <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
              {dict.news.eyebrow}
            </p>
          </div>
          <h1 className="display text-[clamp(2.6rem,6.4vw,5.4rem)] text-ink-900 leading-[0.95] max-w-[18ch]">
            {dict.news.title}
          </h1>
          <p className="mt-8 max-w-[58ch] text-ink-700 text-[16px] leading-[1.7]">
            {dict.news.intro}
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="bg-cream-light pt-8 md:pt-12 pb-20 md:pb-24">
        <div className="container-fluid">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px]">
            {NEWS.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/${lang}/novedades/${n.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[5/6] overflow-hidden rounded-card shadow-card mb-5">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover film-tone transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/70 mb-3">
                    {fmt.format(new Date(n.date))} · {n.source}
                  </p>
                  <h2 className="display italic text-[clamp(1.4rem,2.2vw,2rem)] text-ink-900 leading-tight group-hover:text-granada-800 transition-colors">
                    {n.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-700 max-w-[44ch] line-clamp-3">
                    {n.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Press dossier — PDFs */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-[52ch] mb-12 md:mb-16">
            <p className="eyebrow text-granada-700 mb-6">En la prensa</p>
            <h2 className="display italic text-[clamp(2rem,4vw,3.4rem)] text-ink-900 leading-[1.05]">
              Lo que se ha publicado del Mesón
            </h2>
          </div>

          <ul className="grid gap-3 md:gap-4 max-w-[1080px]">
            {pressArticles.map((p, i) => (
              <li key={p.slug}>
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-center gap-6 md:gap-10 grid-cols-[auto,1fr,auto] rounded-2xl border border-granada-700/15 bg-cream-light/70 backdrop-blur px-6 py-5 md:px-9 md:py-7 transition-colors hover:bg-granada-50 hover:border-granada-700/40"
                >
                  <span className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/75 tabular w-16 md:w-20">
                    {fmt.format(new Date(p.date))}
                  </span>
                  <h3 className="font-display italic text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink-900 leading-snug">
                    {p.title}
                  </h3>
                  <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-cenefa text-granada-700">
                    <span className="hidden md:inline">
                      {dict.historia.pressReadAt} {p.source}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-granada-700/30 text-granada-700 transition-colors group-hover:bg-granada-700 group-hover:text-cream-light group-hover:border-granada-700">
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
                  {/* index for variety */}
                  <span className="sr-only">{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
