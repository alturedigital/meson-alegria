import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Hero from "@/components/home/Hero";
import EmblematicosBadge from "@/components/home/EmblematicosBadge";
import ManifestoGrid from "@/components/home/ManifestoGrid";
import FoundersBlock from "@/components/home/FoundersBlock";
import ReservaInline from "@/components/home/ReservaInline";
import PressQuotes from "@/components/home/PressQuotes";
import EventsGrid from "@/components/home/EventsGrid";
import Faq from "@/components/home/Faq";
import Closer from "@/components/home/Closer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <EmblematicosBadge />
      <ManifestoGrid lang={lang} />
      <FoundersBlock lang={lang} />
      <ReservaInline lang={lang} />
      <PressQuotes lang={lang} />
      <EventsGrid lang={lang} />
      <Faq lang={lang} />
      <Closer lang={lang} />
    </>
  );
}
