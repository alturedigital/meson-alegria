/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"],
  },

  /**
   * Redirects from the old Webflow URLs.
   * Per client decision: all legacy URLs land on the Spanish locale (/es/...)
   * regardless of the language the original page was authored in. Once on the
   * site, the user can switch language via the header switcher.
   */
  async redirects() {
    return [
      // Root + index
      { source: "/index.html", destination: "/es", permanent: true },

      // Carta — all five language variants from Webflow → /es/carta
      { source: "/carta-sp.html", destination: "/es/carta", permanent: true },
      { source: "/menu.html", destination: "/es/carta", permanent: true },
      { source: "/notre-menu.html", destination: "/es/carta", permanent: true },
      { source: "/wo-men-de-cai-dan.html", destination: "/es/carta", permanent: true },
      { source: "/uriyi-heonjang.html", destination: "/es/carta", permanent: true },

      // Vinos
      { source: "/vinos.html", destination: "/es/vinos", permanent: true },

      // Grupos
      { source: "/menus-para-grupos.html", destination: "/es/grupos", permanent: true },

      // Corpus 2026
      {
        source: "/caseta-alegria-corpus-2026.html",
        destination: "/es/corpus",
        permanent: true,
      },

      // News detail (single legacy stub on Webflow) → novedades index
      { source: "/detail_news.html", destination: "/es/novedades", permanent: true },

      // 404 legacy (just in case)
      { source: "/404.html", destination: "/es/404", permanent: true },
    ];
  },
};

export default nextConfig;
