import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getPageExtras } from "@/lib/data/page-extras";
import WineList from "@/components/vinos/WineList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.nav.wines,
    description: getPageExtras(lang).wines.intro,
  };
}

export default async function VinosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const extras = getPageExtras(lang).wines;

  return (
    <>
      <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="container-fluid">
          <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
            {extras.eyebrow}
          </p>
          <h1 className="display mt-6 text-[clamp(3rem,9vw,8rem)] text-ink-900 leading-[0.95] max-w-[18ch]">
            {extras.title}
          </h1>
          <p className="mt-10 max-w-[56ch] text-ink-700 text-[16px] leading-[1.7]">
            {extras.intro}
          </p>
        </div>
      </section>
      <WineList lang={lang} />
    </>
  );
}
