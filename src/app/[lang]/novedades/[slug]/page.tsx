import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { NEWS } from "@/lib/data/news";

const LOCALE_TO_INTL: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
  zh: "zh-CN",
  ko: "ko-KR",
  ja: "ja-JP",
};

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const n = NEWS.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.excerpt,
    openGraph: { images: [n.image] },
  };
}

export default async function NoticiaDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const n = NEWS.find((x) => x.slug === slug);
  if (!n) notFound();

  const dict = await getDictionary(lang);
  const fmt = new Intl.DateTimeFormat(LOCALE_TO_INTL[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero with photo */}
      <section className="bg-cream-light pt-32 md:pt-36 pb-12">
        <div className="container-fluid">
          <Link
            href={`/${lang}/novedades`}
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700 hover:text-granada-800 mb-10"
          >
            <span aria-hidden>←</span> {dict.news.backToList}
          </Link>
          <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/75 mb-5">
            {fmt.format(new Date(n.date))} · {dict.news.publishedIn} {n.source}
          </p>
          <h1 className="display italic text-[clamp(2.4rem,5.4vw,4.6rem)] text-ink-900 leading-[1.02] max-w-[24ch]">
            {n.title}
          </h1>
        </div>
      </section>

      {/* Image */}
      <section className="bg-cream-light pb-12">
        <div className="container-fluid">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src={n.image}
              alt={n.title}
              fill
              sizes="100vw"
              className="object-cover film-tone"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream-light pb-28 md:pb-36">
        <div className="container-fluid">
          <article className="max-w-[680px] space-y-7 text-ink-800 text-[17px] leading-[1.75] font-body">
            <p className="font-serif italic text-[clamp(1.2rem,1.8vw,1.5rem)] text-ink-800 leading-[1.5] mb-10">
              {n.excerpt}
            </p>
            {n.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {n.link && (
              <p className="pt-6">
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11.5px] uppercase tracking-cenefa text-granada-700 hover:text-granada-800 ink-underline inline-flex items-center gap-2"
                >
                  {dict.news.publishedIn} {n.source}
                  <span aria-hidden>→</span>
                </a>
              </p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
