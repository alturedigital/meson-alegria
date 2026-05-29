import type { PressArticle } from "@/types/i18n";

/**
 * Press dossier — articles from Diario Ideal (Granada).
 * PDFs copied from /web assets/Información mesón/ into /public/prensa/.
 * Date format: ISO yyyy-mm-dd (approximate, recovered from filenames).
 */
export const pressArticles: PressArticle[] = [
  {
    slug: "ideal-reina-granadina-carne-al-carbon",
    title: "La reina granadina de la carne al carbón de encina",
    date: "2020-08-17",
    source: "Ideal",
    pdf: "/prensa/ideal-reina-granadina-carne-al-carbon.pdf",
  },
  {
    slug: "ideal-joya-gastronomica-corazon-granada",
    title: "Una joya gastronómica en el corazón de Granada",
    date: "2022-03-12",
    source: "Ideal",
    pdf: "/prensa/ideal-joya-gastronomica-corazon-granada.pdf",
  },
  {
    slug: "ideal-tradicion-historia-buena-gastronomia",
    title: "Tradición, historia y buena gastronomía",
    date: "2021-11-04",
    source: "Ideal",
    pdf: "/prensa/ideal-tradicion-historia-buena-gastronomia.pdf",
  },
  {
    slug: "ideal-40-anos-establecimiento-emblematico",
    title: "Cuarenta años manteniendo la esencia de la mejor cocina granadina",
    date: "2019-09-15",
    source: "Ideal",
    pdf: "/prensa/ideal-40-anos-establecimiento-emblematico.pdf",
  },
  {
    slug: "ideal-meson-alegria-es-casa",
    title: "«Mesón Alegría es casa, a donde puedes venir con amigos o solo»",
    date: "2023-06-22",
    source: "Ideal",
    pdf: "/prensa/ideal-meson-alegria-es-casa.pdf",
  },
];
