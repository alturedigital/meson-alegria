import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import CartaHero from "@/components/menu/CartaHero";
import MenuView from "@/components/menu/MenuView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.nav.menu,
    description: dict.menu.intro,
  };
}

export default async function CartaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <CartaHero dict={dict} isEs={lang === "es"} />
      <MenuView lang={lang} dict={dict} />
    </>
  );
}
