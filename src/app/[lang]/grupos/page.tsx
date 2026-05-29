import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n/config";
import { getPageExtras } from "@/lib/data/page-extras";
import { GROUP_MENUS } from "@/lib/data/groups";
import GroupMenuCard from "@/components/grupos/GroupMenuCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: getPageExtras(lang).groups.eyebrow,
    description: getPageExtras(lang).groups.intro,
  };
}

export default async function GruposPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const extras = getPageExtras(lang).groups;

  return (
    <>
      <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="container-fluid">
          <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
            {extras.eyebrow}
          </p>
          <h1 className="display mt-6 text-[clamp(3rem,9vw,8rem)] text-ink-900 leading-[0.95] max-w-[14ch]">
            {extras.title}
          </h1>
          <p className="mt-10 max-w-[58ch] text-ink-700 text-[16px] leading-[1.7]">
            {extras.intro}
          </p>
          <p className="mt-5 max-w-[58ch] text-ink-700/80 text-[14px] leading-[1.65] body-italic">
            {extras.note}
          </p>
        </div>
      </section>

      <section className="bg-cream pt-12 md:pt-16 pb-28 md:pb-32">
        <div className="container-fluid">
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-[1280px]">
            {GROUP_MENUS.map((m, i) => (
              <GroupMenuCard key={m.id} menu={m} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
