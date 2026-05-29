export type NewsItem = {
  slug: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
  link?: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: "la-reina-granadina-de-la-carne-al-carbon",
    title: "La reina granadina de la carne al carbón de encina",
    source: "Ideal",
    date: "2024-09-12",
    excerpt:
      "Sus buenas carnes hechas en horno de carbón de encina, sus jugosas migas, sus postres caseros y su pan tostado con aceite son un clásico en la gastronomía de la ciudad.",
    image: "/images/meson5.jpg",
    body: [
      "Todo granadino conoce el Mesón Alegría. Sus buenas carnes hechas en horno de carbón de encina, sus ricas y jugosas migas, sus sabrosos y caseros postres e incluso su pan tostado con aceite son un clásico en la gastronomía de la ciudad.",
      "Una familia que evolucionó desde el esfuerzo y el trabajo, con el que consiguieron también abrir la taberna Las Copas, en calle Navas, antes de fundar el actual mesón en 1995.",
      "Un establecimiento por el que la familia empeñó hasta su última peseta y que consiguió llevar a lo más alto de la gastronomía local a base de esfuerzo, dedicación y mimo por la comida.",
    ],
  },
  {
    slug: "una-joya-gastronomica-en-el-corazon-de-granada",
    title: "Una joya gastronómica en el corazón de Granada",
    source: "Ideal",
    date: "2024-06-22",
    excerpt:
      "Tradición, historia y buena gastronomía. Por aquí han pasado Florinda Chico, Enrique y Estrella Morente o El Cigala, entre otros.",
    image: "/images/meson13.jpg",
    body: [
      "En el corazón de Granada, a pocos metros del Teatro Isabel la Católica, el Mesón Alegría ha sido testigo de la vida cultural de la ciudad durante más de cuatro décadas.",
      "Por aquí han pasado Florinda Chico, Enrique y Estrella Morente o El Cigala, entre otros muchos artistas que han hecho del Mesón su casa cuando visitaban Granada.",
      "Su carta combina la tradición granadina con un horno de carbón de encina que sigue ardiendo desde 1995.",
    ],
  },
  {
    slug: "tradicion-historia-y-buena-gastronomia",
    title: "Tradición, historia y buena gastronomía",
    source: "Ideal",
    date: "2024-03-18",
    excerpt:
      "El restaurante de Granada que mantiene viva la esencia de la cocina granadina después de más de 40 años.",
    image: "/images/meson19.jpg",
    body: [
      "Después de más de cuarenta años, el Mesón Alegría sigue siendo el restaurante de referencia para los granadinos que buscan tradición.",
      "Sus especialidades —chuletón a la piedra, solomillo salsa Alegría, tortilla Sacromonte, remojón granaíno— se elaboran como el primer día.",
      "Una historia familiar que comienza en 1979 y continúa hoy con la misma ilusión.",
    ],
  },
  {
    slug: "casa-a-donde-puedes-venir-con-amigos-o-solo",
    title: "«Mesón Alegría es CASA, a donde puedes venir con amigos o solo»",
    source: "Ideal",
    date: "2024-11-04",
    excerpt:
      "La hija de Carmen continúa la obra de su madre con el mismo mimo de siempre. Una conversación a fuego lento.",
    image: "/images/meson16.jpg",
    body: [
      "«Mesón Alegría es CASA, a donde puedes venir con amigos o solo». Así define Carmen, hija de la fundadora, el espíritu del lugar.",
      "Tras la marcha de su madre, ella continúa al frente de la cocina, manteniendo cada receta y cada gesto como se hicieron desde el primer día.",
      "Una conversación a fuego lento sobre familia, oficio y la Granada que se cuece en sus pucheros.",
    ],
  },
  {
    slug: "guia-de-imprescindibles-en-meson-alegria",
    title: "Guía para un festín granadino: los imprescindibles que pedir en el Mesón Alegría",
    source: "Granada Hoy",
    date: "2024-02-09",
    excerpt:
      "Chuletón a la piedra, solomillo salsa Alegría, tortilla Sacromonte y remojón granaíno: la santísima trinidad del centro.",
    image: "/images/meson4.jpg",
    body: [
      "Si vienes por primera vez al Mesón Alegría, esto es lo que deberías pedir sí o sí: chuletón a la piedra (33 €), un corte hecho a la brasa de encina servido en una piedra ardiente para terminarlo al gusto.",
      "El solomillo en salsa Alegría (28 €) es otro clásico: tierna pieza ibérica bañada en una salsa propia de la casa con un punto de ajo y vino.",
      "Y para los más granadinos, la tortilla Sacromonte (13 €) y el remojón granaíno (15 €): dos platos típicos de la ciudad que aquí se elaboran como manda la tradición.",
    ],
  },
];
