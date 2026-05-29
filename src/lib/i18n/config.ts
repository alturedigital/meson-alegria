export const locales = ["es", "en", "fr", "de", "zh", "ko", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<
  Locale,
  { native: string; en: string; flag: string }
> = {
  es: { native: "Español", en: "Spanish", flag: "ES" },
  en: { native: "English", en: "English", flag: "GB" },
  fr: { native: "Français", en: "French", flag: "FR" },
  de: { native: "Deutsch", en: "German", flag: "DE" },
  zh: { native: "中文", en: "Chinese", flag: "CN" },
  ko: { native: "한국어", en: "Korean", flag: "KR" },
  ja: { native: "日本語", en: "Japanese", flag: "JP" },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
