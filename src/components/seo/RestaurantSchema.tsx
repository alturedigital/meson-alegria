import type { Locale } from "@/lib/i18n/config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mesonalegria.com";

/**
 * Schema.org Restaurant rich snippet. Google uses this to render the rich
 * info card on search + Maps. The same payload is emitted in every locale,
 * with `inLanguage` swapped so Google knows the locale of the page.
 */
export default function RestaurantSchema({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: "Mesón Alegría",
    description:
      "Asador y restaurante en el centro de Granada especializado en carnes a la brasa de carbón de encina y platos típicos granadinos. Tradición, calidad y hospitalidad desde 1979.",
    url: `${SITE_URL}/${lang}`,
    inLanguage: lang === "zh" ? "zh-CN" : lang === "ko" ? "ko-KR" : lang === "ja" ? "ja-JP" : lang,
    foundingDate: "1979",
    founder: {
      "@type": "Person",
      name: "Carmen López Morales",
    },
    servesCuisine: ["Española", "Granadina", "Asador", "Mediterránea"],
    priceRange: "€€€",
    paymentAccepted: "Cash, Credit Card",
    image: [
      `${SITE_URL}/images/meson13.jpg`,
      `${SITE_URL}/images/meson1.jpg`,
      `${SITE_URL}/images/60-aniversario.jpg`,
    ],
    logo: `${SITE_URL}/logo/logo.svg`,
    telephone: "+34958222794",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle de las Moras, 4",
      addressLocality: "Granada",
      addressRegion: "Granada",
      postalCode: "18009",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.1762,
      longitude: -3.5984,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        opens: "13:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        opens: "20:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "13:00",
        closes: "00:00",
      },
    ],
    acceptsReservations: "True",
    hasMenu: `${SITE_URL}/${lang}/carta`,
    sameAs: [
      "https://www.facebook.com/mesonalegria",
      "https://www.instagram.com/mesonalegria",
      "https://www.tripadvisor.es",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Stringify with no whitespace — Google reads this faster + smaller HTML payload.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
