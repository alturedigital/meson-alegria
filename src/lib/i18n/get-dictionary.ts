import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "@/types/i18n";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  es: () => import("./dictionaries/es"),
  en: () => import("./dictionaries/en"),
  fr: () => import("./dictionaries/fr"),
  de: () => import("./dictionaries/de"),
  zh: () => import("./dictionaries/zh"),
  ko: () => import("./dictionaries/ko"),
  ja: () => import("./dictionaries/ja"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await loaders[locale]();
  return mod.default;
}
