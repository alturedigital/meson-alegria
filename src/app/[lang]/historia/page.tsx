import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import HeroHistoria from "@/components/historia/HeroHistoria";
import Timeline from "@/components/historia/Timeline";
import CarmenInMemoriam from "@/components/historia/CarmenInMemoriam";
import Signature from "@/components/home/Signature";
import PressDossier from "@/components/historia/PressDossier";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.nav.story,
    description: dict.historia.heroLede,
  };
}

export default async function HistoriaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroHistoria dict={dict} />
      <Timeline dict={dict} />
      <CarmenInMemoriam dict={dict} />
      <Signature dict={dict} />
      <PressDossier dict={dict} lang={lang} />
    </>
  );
}
