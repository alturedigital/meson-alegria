import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { NEWS } from "@/lib/data/news";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mesonalegria.com";

/**
 * Sitemap covering every page × every locale. Includes the dynamic news
 * detail routes via the slugs in NEWS.
 *
 * Returns an entry per (locale, route) pair so Google indexes the
 * Spanish, English, French, German, Chinese, Korean and Japanese
 * versions of the site separately.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "", // home
    "/historia",
    "/carta",
    "/vinos",
    "/grupos",
    "/visita",
    "/corpus",
    "/novedades",
  ];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages × locales
  for (const lang of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${lang}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : path === "/carta" ? 0.9 : 0.7,
      });
    }
  }

  // Dynamic news details × locales
  for (const lang of locales) {
    for (const n of NEWS) {
      entries.push({
        url: `${SITE_URL}/${lang}/novedades/${n.slug}`,
        lastModified: new Date(n.date),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
