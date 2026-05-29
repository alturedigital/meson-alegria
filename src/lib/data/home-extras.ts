import type { Locale } from "@/lib/i18n/config";

/**
 * Copy for the magazine-style home sections that don't fit the canonical
 * Dictionary contract yet. ES is canonical; other locales fall back if a
 * translation hasn't been written.
 *
 * Why a separate file: lets us iterate the layout fast without touching all
 * 7 dictionaries on every structural change. Will be folded back into the
 * Dictionary contract once the structure is locked in.
 */

export type HomeExtras = {
  hero: {
    chapter: string;
    addressLine: string;
    menuLink: string;
    reservationLink: string;
  };
  manifesto: {
    chapter: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    cta: string;
    cards: { title: string; caption: string; image: string }[];
  };
  founders: {
    chapter: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    smallCaption: string;
    portraitCaption: string;
  };
  reserva: {
    chapter: string;
    titleA: string;
    titleB: string;
    body: string;
    photoLabel: string;
    peopleLabel: string;
    dateLabel: string;
    timeLabel: string;
    submit: string;
    peopleOptions: string[];
    timeOptions: string[];
  };
  press: {
    chapter: string;
    eyebrowA: string;
    eyebrowB: string;
    intro: string;
    items: { quote: string; source: string; author: string }[];
  };
  events: {
    chapter: string;
    titleA: string;
    titleB: string;
    body: string;
    cta: string;
    cards: { kicker: string; title: string; image: string }[];
  };
  faq: {
    chapter: string;
    titleA: string;
    titleB: string;
    items: { q: string; a: string }[];
  };
  closer: {
    wordmark: string;
    tagline: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hoursLines: string[];
    phoneLabel: string;
    phone: string;
    legal: string;
    credit: string;
  };
};

const es: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "Granada · C/ Moras, 4",
    menuLink: "Carta",
    reservationLink: "Reservar",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "Nuestro oficio",
    titleA: "Creemos que la brasa",
    titleB: "es un arte",
    body:
      "En el centro de Granada, junto al Teatro Isabel la Católica, llevamos cuarenta y siete años cocinando carne con carbón de encina. Un horno encendido sin parar desde 1995, recetas que no cambian, producto de la tierra y la mano firme de toda una familia.",
    cta: "Conocer más",
    cards: [
      {
        title: "Carne al carbón de encina",
        caption: "El mismo horno desde 1995",
        image: "/images/meson1.jpg",
      },
      {
        title: "Producto granadino",
        caption: "Buey, cordero lechal, ibérico",
        image: "/images/meson6.jpg",
      },
      {
        title: "Cocina tradicional",
        caption: "Recetas que no cambian",
        image: "/images/meson11.jpg",
      },
      {
        title: "Sala con historia",
        caption: "Cinco generaciones de mesa",
        image: "/images/meson17.jpg",
      },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "Quien encendió el horno",
    titleA: "Carmen,",
    titleB: "la fundadora",
    body:
      "Era la culpable del sabor que ha embelesado al comensal desde 1979, pero sin querer salir de la cocina para llevarse ninguna medalla. A las cinco de la mañana ya estaba preparando las migas, limpiando el pescado y organizando el día. Hoy su hija continúa la obra con la misma dedicación.",
    smallCaption: "Las migas de la casa, cada amanecer",
    portraitCaption: "Carmen López Morales · Fundadora · 1979 — eterna",
  },
  reserva: {
    chapter: "04",
    titleA: "Reserva una mesa",
    titleB: "para una experiencia inolvidable",
    body:
      "Te recibimos como en casa. Llámanos o pásate por C/ Moras 4 — siempre hay sitio para una buena mesa.",
    photoLabel: "La sala del Mesón",
    peopleLabel: "Comensales",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    submit: "Llamar para reservar",
    peopleOptions: [
      "2 comensales",
      "3 comensales",
      "4 comensales",
      "5 comensales",
      "6 comensales",
      "7 o más",
    ],
    timeOptions: [
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "22:30",
    ],
  },
  press: {
    chapter: "05",
    eyebrowA: "Para quienes",
    eyebrowB: "valoran la tradición",
    intro:
      "El Diario Ideal lleva décadas recogiendo lo que esta casa significa para Granada. Algunas de las cosas que se han dicho.",
    items: [
      {
        quote:
          "La reina granadina de la carne al carbón de encina. Sabores que han embelesado al comensal desde 1979.",
        source: "Ideal",
        author: "Reportaje · 2020",
      },
      {
        quote:
          "Una joya gastronómica en el corazón de Granada. Tradición, historia y buena gastronomía a partes iguales.",
        source: "Ideal",
        author: "Reportaje · 2022",
      },
      {
        quote:
          "Un establecimiento emblemático que mantiene la esencia de la mejor cocina granadina después de cuarenta años.",
        source: "Ideal",
        author: "Reportaje · 2019",
      },
    ],
  },
  events: {
    chapter: "06",
    titleA: "Haz de tu celebración",
    titleB: "algo extraordinario",
    body:
      "Mesas largas, brasas anchas. Para grupos a partir de cuatro personas, los entrantes van al centro y el plato principal es a elegir individualmente. Cenas de empresa, comidas de familia y eventos privados.",
    cta: "Ver menús de grupo",
    cards: [
      {
        kicker: "Familia",
        title: "Comidas familiares",
        image: "/images/meson3.jpg",
      },
      {
        kicker: "Empresa",
        title: "Cenas y comidas de empresa",
        image: "/images/meson8.jpg",
      },
      {
        kicker: "Eventos",
        title: "Celebraciones privadas",
        image: "/images/meson14.jpg",
      },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "Lo que",
    titleB: "nos preguntáis",
    items: [
      {
        q: "¿Puedo reservar una mesa por adelantado?",
        a: "Sí. La forma más rápida es llamando al 958 222 794. Solemos confirmar la reserva al momento, también para grupos grandes.",
      },
      {
        q: "¿Cuál es el horario?",
        a: "Abrimos de martes a domingo, de 13:00 a 16:30 y de 20:00 a 00:00. El sábado el servicio es continuo. Cerramos los lunes.",
      },
      {
        q: "¿Tenéis opciones vegetarianas?",
        a: "Sí. La carta tiene ensaladas, entrantes calientes y verduras a la brasa. Si tienes alguna alergia o restricción dietética, dínoslo al reservar.",
      },
      {
        q: "¿Aceptáis grupos grandes?",
        a: "Sí. Tenemos menús de grupo a partir de 4 personas, con entrantes al centro y plato principal a elegir. Para grupos de más de 15 personas conviene reservar con varios días de antelación.",
      },
      {
        q: "¿Hay alguna especialidad de la casa?",
        a: "La carne a la brasa con carbón de encina — buey, ternera, cordero lechal y cerdo ibérico. Y las migas de Carmen, que se preparan cada amanecer.",
      },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "Siempre queriendo, nunca olvidando",
    addressLabel: "Visítanos",
    address: "C/ Moras, 4 · 18009 Granada",
    hoursLabel: "Horario",
    hoursLines: [
      "Martes a domingo · 13:00–16:30 / 20:00–00:00",
      "Sábado · servicio continuo",
      "Cerrado lunes",
    ],
    phoneLabel: "Reservar",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · Granada · Todos los derechos reservados",
    credit: "Forjado a mano. Granada.",
  },
};

const en: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "Granada · C/ Moras, 4",
    menuLink: "Menu",
    reservationLink: "Reserve",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "Our craft",
    titleA: "We believe the fire",
    titleB: "is an art form",
    body:
      "In the heart of Granada, next to Teatro Isabel la Católica, we have spent forty-seven years cooking meat over holm-oak charcoal. A fire lit without pause since 1995, recipes that do not change, produce from this land and the steady hand of an entire family.",
    cta: "Learn more",
    cards: [
      {
        title: "Holm-oak charcoal grill",
        caption: "Same oven since 1995",
        image: "/images/meson1.jpg",
      },
      {
        title: "Granada produce",
        caption: "Beef, milk-fed lamb, Ibérico",
        image: "/images/meson6.jpg",
      },
      {
        title: "Traditional kitchen",
        caption: "Recipes that don't change",
        image: "/images/meson11.jpg",
      },
      {
        title: "A room with history",
        caption: "Five generations at the table",
        image: "/images/meson17.jpg",
      },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "The one who lit the fire",
    titleA: "Carmen,",
    titleB: "the founder",
    body:
      "She was the secret behind the flavour that has enchanted guests since 1979 — yet she never wanted to leave the kitchen to collect a medal. By five in the morning she was already preparing the migas, cleaning the fish, organising the day. Her daughter continues her work today with the same care.",
    smallCaption: "Migas of the house, every dawn",
    portraitCaption: "Carmen López Morales · Founder · 1979 — eternal",
  },
  reserva: {
    chapter: "04",
    titleA: "Reserve a table",
    titleB: "for an unforgettable experience",
    body:
      "We welcome you like home. Call us or come by C/ Moras 4 — there is always room for a good table.",
    photoLabel: "Our dining room",
    peopleLabel: "Guests",
    dateLabel: "Date",
    timeLabel: "Time",
    submit: "Call to reserve",
    peopleOptions: [
      "2 guests",
      "3 guests",
      "4 guests",
      "5 guests",
      "6 guests",
      "7 or more",
    ],
    timeOptions: [
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "22:30",
    ],
  },
  press: {
    chapter: "05",
    eyebrowA: "For those who",
    eyebrowB: "value tradition",
    intro:
      "Diario Ideal has spent decades capturing what this house means to Granada. A few of the things that have been written.",
    items: [
      {
        quote:
          "The Granada queen of meat over holm-oak charcoal. Flavours that have charmed every guest since 1979.",
        source: "Ideal",
        author: "Feature · 2020",
      },
      {
        quote:
          "A gastronomic jewel in the heart of Granada. Tradition, history and great food in equal measure.",
        source: "Ideal",
        author: "Feature · 2022",
      },
      {
        quote:
          "An emblematic establishment that keeps the essence of the best Granada cooking forty years on.",
        source: "Ideal",
        author: "Feature · 2019",
      },
    ],
  },
  events: {
    chapter: "06",
    titleA: "Make your celebration",
    titleB: "extraordinary",
    body:
      "Long tables, wide fires. For parties of four or more, starters are placed at the centre and each guest chooses the main. Company dinners, family lunches and private events.",
    cta: "See group menus",
    cards: [
      {
        kicker: "Family",
        title: "Family meals",
        image: "/images/meson3.jpg",
      },
      {
        kicker: "Company",
        title: "Corporate dinners and lunches",
        image: "/images/meson8.jpg",
      },
      {
        kicker: "Private",
        title: "Private celebrations",
        image: "/images/meson14.jpg",
      },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "What",
    titleB: "people ask us",
    items: [
      {
        q: "Can I reserve a table in advance?",
        a: "Yes. The quickest way is to call 958 222 794. We usually confirm the reservation on the spot, also for large parties.",
      },
      {
        q: "What are your hours?",
        a: "We open Tuesday to Sunday, 13:00 to 16:30 and 20:00 to 00:00. Saturday is all-day service. Closed on Mondays.",
      },
      {
        q: "Do you have vegetarian options?",
        a: "Yes. The menu has salads, hot starters and grilled vegetables. If you have any allergy or dietary restriction, tell us when you reserve.",
      },
      {
        q: "Do you accept large groups?",
        a: "Yes. Group menus from 4 guests, with starters at the centre and main course chosen individually. For parties of 15 or more, book several days ahead.",
      },
      {
        q: "Is there a house specialty?",
        a: "Meat over holm-oak charcoal — beef, ox, milk-fed lamb and Ibérico pork. And Carmen's migas, prepared every dawn.",
      },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "Always loving, never forgetting",
    addressLabel: "Visit",
    address: "C/ Moras, 4 · 18009 Granada",
    hoursLabel: "Hours",
    hoursLines: [
      "Tuesday to Sunday · 13:00–16:30 / 20:00–00:00",
      "Saturday · all-day service",
      "Closed on Monday",
    ],
    phoneLabel: "Reserve",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · Granada · All rights reserved",
    credit: "Hand-forged. Granada.",
  },
};

const fr: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "Grenade · C/ Moras, 4",
    menuLink: "Carte",
    reservationLink: "Réserver",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "Notre métier",
    titleA: "Nous croyons que la braise",
    titleB: "est un art",
    body:
      "Au cœur de Grenade, à côté du Théâtre Isabel la Católica, nous cuisinons depuis quarante-sept ans la viande au charbon de chêne vert. Un four allumé sans interruption depuis 1995, des recettes immuables, des produits du terroir et la main ferme d'une famille entière.",
    cta: "En savoir plus",
    cards: [
      { title: "Viande au charbon de chêne vert", caption: "Le même four depuis 1995", image: "/images/meson1.jpg" },
      { title: "Produit grenadin", caption: "Bœuf, agneau de lait, ibérique", image: "/images/meson6.jpg" },
      { title: "Cuisine traditionnelle", caption: "Recettes qui ne changent pas", image: "/images/meson11.jpg" },
      { title: "Une salle avec histoire", caption: "Cinq générations à table", image: "/images/meson17.jpg" },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "Celle qui a allumé le four",
    titleA: "Carmen,",
    titleB: "la fondatrice",
    body:
      "Elle était le secret de la saveur qui a enchanté les convives depuis 1979 — sans jamais vouloir quitter la cuisine pour recevoir une médaille. À cinq heures du matin, elle pétrissait déjà les migas, nettoyait le poisson, organisait la journée. Sa fille poursuit son œuvre aujourd'hui avec le même soin.",
    smallCaption: "Les migas de la maison, chaque aube",
    portraitCaption: "Carmen López Morales · Fondatrice · 1979 — éternelle",
  },
  reserva: {
    chapter: "04",
    titleA: "Réservez une table",
    titleB: "pour une expérience inoubliable",
    body:
      "Nous vous accueillons comme chez vous. Appelez-nous ou passez au C/ Moras 4 — il y a toujours une place pour une bonne table.",
    photoLabel: "Notre salle",
    peopleLabel: "Convives",
    dateLabel: "Date",
    timeLabel: "Heure",
    submit: "Appeler pour réserver",
    peopleOptions: ["2 convives", "3 convives", "4 convives", "5 convives", "6 convives", "7 ou plus"],
    timeOptions: ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
  press: {
    chapter: "05",
    eyebrowA: "Pour ceux qui",
    eyebrowB: "valorisent la tradition",
    intro:
      "Diario Ideal capture depuis des décennies ce que cette maison représente pour Grenade. Voici quelques-uns des mots qui ont été écrits.",
    items: [
      { quote: "La reine grenadine de la viande au charbon de chêne vert. Des saveurs qui enchantent le convive depuis 1979.", source: "Ideal", author: "Reportage · 2020" },
      { quote: "Un joyau gastronomique au cœur de Grenade. Tradition, histoire et bonne cuisine à parts égales.", source: "Ideal", author: "Reportage · 2022" },
      { quote: "Un établissement emblématique qui maintient l'essence de la meilleure cuisine grenadine après quarante ans.", source: "Ideal", author: "Reportage · 2019" },
    ],
  },
  events: {
    chapter: "06",
    titleA: "Faites de votre célébration",
    titleB: "un moment extraordinaire",
    body:
      "Longues tables, larges braises. Pour les groupes à partir de quatre personnes, les entrées vont au centre et le plat principal est au choix. Dîners d'entreprise, déjeuners familiaux et événements privés.",
    cta: "Voir les menus de groupe",
    cards: [
      { kicker: "Famille", title: "Repas en famille", image: "/images/meson3.jpg" },
      { kicker: "Entreprise", title: "Dîners et déjeuners d'entreprise", image: "/images/meson8.jpg" },
      { kicker: "Privé", title: "Célébrations privées", image: "/images/meson14.jpg" },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "Ce que",
    titleB: "vous nous demandez",
    items: [
      { q: "Puis-je réserver une table à l'avance ?", a: "Oui. Le plus rapide est d'appeler le 958 222 794. Nous confirmons généralement la réservation sur le champ, même pour les grands groupes." },
      { q: "Quels sont vos horaires ?", a: "Du mardi au dimanche, 13h00–16h30 et 20h00–00h00. Le samedi, service continu. Fermé le lundi." },
      { q: "Avez-vous des options végétariennes ?", a: "Oui. La carte propose des salades, des entrées chaudes et des légumes à la braise. Pour toute allergie ou restriction, dites-le-nous lors de la réservation." },
      { q: "Acceptez-vous les grands groupes ?", a: "Oui. Menus de groupe à partir de 4 personnes. Pour les groupes de plus de 15, réservez plusieurs jours à l'avance." },
      { q: "Y a-t-il une spécialité de la maison ?", a: "La viande au charbon de chêne vert — bœuf, veau, agneau de lait et porc ibérique. Et les migas de Carmen, préparées chaque aube." },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "Toujours aimer, jamais oublier",
    addressLabel: "Nous trouver",
    address: "C/ Moras, 4 · 18009 Grenade",
    hoursLabel: "Horaires",
    hoursLines: ["Mardi à dimanche · 13h00–16h30 / 20h00–00h00", "Samedi · service continu", "Fermé le lundi"],
    phoneLabel: "Réserver",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · Grenade · Tous droits réservés",
    credit: "Forgé à la main. Grenade.",
  },
};

const de: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "Granada · C/ Moras, 4",
    menuLink: "Speisekarte",
    reservationLink: "Reservieren",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "Unser Handwerk",
    titleA: "Wir glauben, das Feuer",
    titleB: "ist eine Kunst",
    body:
      "Im Herzen Granadas, neben dem Teatro Isabel la Católica, garen wir seit siebenundvierzig Jahren Fleisch über Steineichenholzkohle. Ein Feuer, das seit 1995 keinen einzigen Tag erloschen ist, unveränderte Rezepte, Produkte der Erde und die feste Hand einer ganzen Familie.",
    cta: "Mehr erfahren",
    cards: [
      { title: "Steineichenkohle-Grill", caption: "Derselbe Ofen seit 1995", image: "/images/meson1.jpg" },
      { title: "Granadinisches Produkt", caption: "Rind, Milchlamm, Ibérico", image: "/images/meson6.jpg" },
      { title: "Traditionelle Küche", caption: "Rezepte, die nicht wechseln", image: "/images/meson11.jpg" },
      { title: "Ein Raum mit Geschichte", caption: "Fünf Generationen am Tisch", image: "/images/meson17.jpg" },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "Die das Feuer entzündete",
    titleA: "Carmen,",
    titleB: "die Gründerin",
    body:
      "Sie war das Geheimnis hinter dem Geschmack, der die Gäste seit 1979 verzauberte — und wollte doch nie die Küche verlassen, um eine Medaille entgegenzunehmen. Um fünf Uhr morgens knetete sie schon die Migas, putzte den Fisch, ordnete den Tag. Ihre Tochter führt ihr Werk heute mit derselben Sorgfalt fort.",
    smallCaption: "Die Migas des Hauses, jeden Morgen",
    portraitCaption: "Carmen López Morales · Gründerin · 1979 — ewig",
  },
  reserva: {
    chapter: "04",
    titleA: "Reservieren Sie einen Tisch",
    titleB: "für ein unvergessliches Erlebnis",
    body:
      "Wir empfangen Sie wie zu Hause. Rufen Sie uns an oder kommen Sie in die C/ Moras 4 — für einen guten Tisch ist immer Platz.",
    photoLabel: "Unser Speisesaal",
    peopleLabel: "Gäste",
    dateLabel: "Datum",
    timeLabel: "Uhrzeit",
    submit: "Anrufen zum Reservieren",
    peopleOptions: ["2 Gäste", "3 Gäste", "4 Gäste", "5 Gäste", "6 Gäste", "7 oder mehr"],
    timeOptions: ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
  press: {
    chapter: "05",
    eyebrowA: "Für jene, die",
    eyebrowB: "Tradition schätzen",
    intro:
      "Diario Ideal hält seit Jahrzehnten fest, was dieses Haus für Granada bedeutet. Einige der Worte, die geschrieben wurden.",
    items: [
      { quote: "Die granadinische Königin des Fleisches über Steineichenkohle. Aromen, die den Gast seit 1979 betören.", source: "Ideal", author: "Reportage · 2020" },
      { quote: "Ein gastronomisches Juwel im Herzen Granadas. Tradition, Geschichte und gute Küche zu gleichen Teilen.", source: "Ideal", author: "Reportage · 2022" },
      { quote: "Eine sinnbildliche Adresse, die das Wesen der besten granadinischen Küche nach vierzig Jahren bewahrt.", source: "Ideal", author: "Reportage · 2019" },
    ],
  },
  events: {
    chapter: "06",
    titleA: "Machen Sie Ihre Feier",
    titleB: "außergewöhnlich",
    body:
      "Lange Tische, weite Glut. Ab vier Gästen: Vorspeisen in die Mitte, das Hauptgericht jeder für sich. Geschäftsessen, Familienfeiern und Privatfeste.",
    cta: "Gruppenmenüs ansehen",
    cards: [
      { kicker: "Familie", title: "Familienessen", image: "/images/meson3.jpg" },
      { kicker: "Geschäft", title: "Geschäftsessen und -mittagessen", image: "/images/meson8.jpg" },
      { kicker: "Privat", title: "Private Feste", image: "/images/meson14.jpg" },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "Was",
    titleB: "uns oft gefragt wird",
    items: [
      { q: "Kann ich einen Tisch im Voraus reservieren?", a: "Ja. Am schnellsten unter 958 222 794. Wir bestätigen die Reservierung in der Regel sofort, auch für große Gruppen." },
      { q: "Wie sind Ihre Öffnungszeiten?", a: "Dienstag bis Sonntag, 13:00–16:30 und 20:00–00:00. Samstag durchgehend geöffnet. Montag geschlossen." },
      { q: "Gibt es vegetarische Optionen?", a: "Ja. Salate, warme Vorspeisen und gegrilltes Gemüse. Bei Allergien oder Unverträglichkeiten teilen Sie uns das bei der Reservierung mit." },
      { q: "Empfangen Sie große Gruppen?", a: "Ja. Gruppenmenüs ab 4 Gästen. Für Gruppen ab 15 Personen bitte mehrere Tage im Voraus reservieren." },
      { q: "Gibt es eine Hausspezialität?", a: "Fleisch über Steineichenkohle — Rind, Ochse, Milchlamm und Ibérico-Schwein. Und Carmens Migas, jeden Morgen frisch zubereitet." },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "Immer lieben, nie vergessen",
    addressLabel: "Besuchen",
    address: "C/ Moras, 4 · 18009 Granada",
    hoursLabel: "Öffnungszeiten",
    hoursLines: ["Dienstag bis Sonntag · 13:00–16:30 / 20:00–00:00", "Samstag · durchgehend geöffnet", "Montag geschlossen"],
    phoneLabel: "Reservieren",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · Granada · Alle Rechte vorbehalten",
    credit: "Handgemacht. Granada.",
  },
};

const zh: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "格拉纳达 · C/ Moras, 4",
    menuLink: "菜单",
    reservationLink: "预约",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "我们的手艺",
    titleA: "我们相信炭火",
    titleB: "是一门艺术",
    body:
      "在格拉纳达市中心,紧邻伊莎贝拉天主教剧院,四十七年来我们用圣木栎炭火烹饪肉类。自 1995 年以来一炉不断,食谱不变,本地食材,一个家族的稳健之手。",
    cta: "了解更多",
    cards: [
      { title: "圣木栎炭火烤肉", caption: "1995 年至今同一炉", image: "/images/meson1.jpg" },
      { title: "格拉纳达本地食材", caption: "牛、乳羔羊、伊比利亚黑猪", image: "/images/meson6.jpg" },
      { title: "传统厨艺", caption: "不变的食谱", image: "/images/meson11.jpg" },
      { title: "有故事的厅堂", caption: "五代同桌", image: "/images/meson17.jpg" },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "点燃炉火的人",
    titleA: "卡门",
    titleB: "创办人",
    body:
      "她是 1979 年以来令食客倾心的味道背后的秘密 —— 却从不愿离开厨房去领取奖章。清晨五点,她已揉好米加斯、清理鱼料、安排好一天。今天她的女儿以同样的用心延续这份事业。",
    smallCaption: "本店的米加斯,每一个清晨",
    portraitCaption: "卡门・洛佩斯・莫拉莱斯 · 创办人 · 1979 — 永远",
  },
  reserva: {
    chapter: "04",
    titleA: "预订餐位",
    titleB: "迎接一段难忘的体验",
    body:
      "我们以家人之礼相迎。请来电或亲临 C/ Moras 4 —— 一张好桌子,总有位置。",
    photoLabel: "本店餐厅",
    peopleLabel: "用餐人数",
    dateLabel: "日期",
    timeLabel: "时间",
    submit: "致电预约",
    peopleOptions: ["2 人", "3 人", "4 人", "5 人", "6 人", "7 人以上"],
    timeOptions: ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
  press: {
    chapter: "05",
    eyebrowA: "致那些珍视",
    eyebrowB: "传统的人",
    intro:
      "Diario Ideal 数十年来记录着这家小店对格拉纳达的意义。以下是其中的几段评述。",
    items: [
      { quote: "圣木栎炭火烤肉的格拉纳达女王。自 1979 年以来一直令食客倾倒的味道。", source: "Ideal", author: "专题 · 2020" },
      { quote: "格拉纳达市中心的美食珍珠。传统、历史与佳肴并重。", source: "Ideal", author: "专题 · 2022" },
      { quote: "一家标志性的店铺,四十年后仍保留着格拉纳达最佳烹饪的精髓。", source: "Ideal", author: "专题 · 2019" },
    ],
  },
  events: {
    chapter: "06",
    titleA: "让您的庆典",
    titleB: "与众不同",
    body:
      "长桌、宽阔的炭火。四人以上:前菜置于桌心,主菜各自挑选。公司聚餐、家庭聚会与私人活动。",
    cta: "查看团体菜单",
    cards: [
      { kicker: "家庭", title: "家庭聚餐", image: "/images/meson3.jpg" },
      { kicker: "公司", title: "公司聚餐", image: "/images/meson8.jpg" },
      { kicker: "私人", title: "私人庆典", image: "/images/meson14.jpg" },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "客人们",
    titleB: "常问的事",
    items: [
      { q: "可以提前预订餐位吗?", a: "可以。最快的方式是拨打 958 222 794。我们通常会当场确认,大型聚会也一样。" },
      { q: "营业时间是几点?", a: "周二至周日,13:00–16:30 与 20:00–00:00。周六全天营业。周一休息。" },
      { q: "有素食选项吗?", a: "有。沙拉、热前菜和炭烤蔬菜均可。如有过敏或饮食限制,请在预约时告知。" },
      { q: "接待大型团体吗?", a: "接待。团体菜单四人起。十五人以上请提前数日预约。" },
      { q: "有招牌菜吗?", a: "圣木栎炭火烤肉 —— 牛、犊牛、乳羔羊、伊比利亚黑猪。还有每天清晨现做的卡门米加斯。" },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "永远热爱,从不遗忘",
    addressLabel: "到访",
    address: "C/ Moras, 4 · 18009 格拉纳达",
    hoursLabel: "营业时间",
    hoursLines: ["周二至周日 · 13:00–16:30 / 20:00–00:00", "周六 · 全天营业", "周一休息"],
    phoneLabel: "预约",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · 格拉纳达 · 版权所有",
    credit: "手工打造。格拉纳达。",
  },
};

const ko: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "그라나다 · C/ Moras, 4",
    menuLink: "메뉴",
    reservationLink: "예약",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "우리의 일",
    titleA: "우리는 숯불이",
    titleB: "예술이라 믿습니다",
    body:
      "그라나다 중심부, 이사벨 라 카톨리카 극장 옆에서 사십칠 년 동안 떡갈나무 숯불로 고기를 구워왔습니다. 1995년부터 하루도 꺼지지 않은 가마, 변치 않는 레시피, 이 땅의 산물, 한 가족의 단단한 손.",
    cta: "더 알아보기",
    cards: [
      { title: "떡갈나무 숯불 그릴", caption: "1995년부터 같은 가마", image: "/images/meson1.jpg" },
      { title: "그라나다 산물", caption: "소, 젖먹이 양, 이베리코", image: "/images/meson6.jpg" },
      { title: "전통 요리", caption: "변치 않는 레시피", image: "/images/meson11.jpg" },
      { title: "역사가 깃든 홀", caption: "오 대가 함께한 식탁", image: "/images/meson17.jpg" },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "불을 켠 사람",
    titleA: "카르멘,",
    titleB: "창립자",
    body:
      "1979년 이래 손님을 사로잡은 그 맛의 비밀은 그녀였습니다 —— 그러나 메달을 받으러 주방을 떠난 적은 한 번도 없었습니다. 새벽 다섯 시면 이미 미가스를 반죽하고, 생선을 손질하고, 하루를 정돈했습니다. 오늘은 그녀의 딸이 같은 정성으로 그 일을 이어갑니다.",
    smallCaption: "이 집의 미가스, 매일 새벽마다",
    portraitCaption: "카르멘 로페스 모랄레스 · 창립자 · 1979 — 영원",
  },
  reserva: {
    chapter: "04",
    titleA: "테이블을 예약하세요",
    titleB: "잊지 못할 한 끼를 위해",
    body:
      "집처럼 맞이합니다. 전화로 예약하시거나 C/ Moras 4로 들러주세요 —— 좋은 자리는 늘 있습니다.",
    photoLabel: "우리의 홀",
    peopleLabel: "인원",
    dateLabel: "날짜",
    timeLabel: "시간",
    submit: "전화로 예약",
    peopleOptions: ["2명", "3명", "4명", "5명", "6명", "7명 이상"],
    timeOptions: ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
  press: {
    chapter: "05",
    eyebrowA: "전통을",
    eyebrowB: "소중히 여기는 분들께",
    intro:
      "Diario Ideal 가 수십 년에 걸쳐 이 집이 그라나다에 의미하는 바를 기록해 왔습니다. 그 중 몇 마디를 소개합니다.",
    items: [
      { quote: "떡갈나무 숯불 구이의 그라나다 여왕. 1979년 이래 손님을 매혹시킨 맛.", source: "Ideal", author: "기획 · 2020" },
      { quote: "그라나다 중심부의 미식 보석. 전통, 역사, 그리고 좋은 요리가 균형을 이룹니다.", source: "Ideal", author: "기획 · 2022" },
      { quote: "사십 년이 지나도 그라나다 최고의 요리의 정수를 유지하는 상징적인 식당.", source: "Ideal", author: "기획 · 2019" },
    ],
  },
  events: {
    chapter: "06",
    titleA: "당신의 자리를",
    titleB: "특별하게 만드세요",
    body:
      "긴 테이블, 넓은 숯불. 4인 이상 — 전채는 가운데로, 메인은 각자가 고릅니다. 회식, 가족 모임, 사적인 자리.",
    cta: "단체 메뉴 보기",
    cards: [
      { kicker: "가족", title: "가족 식사", image: "/images/meson3.jpg" },
      { kicker: "회사", title: "회사 만찬과 점심", image: "/images/meson8.jpg" },
      { kicker: "프라이빗", title: "사적인 자리", image: "/images/meson14.jpg" },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "손님들이",
    titleB: "자주 묻는 것",
    items: [
      { q: "미리 예약할 수 있나요?", a: "네. 가장 빠른 방법은 958 222 794로 전화하시는 것입니다. 대부분의 경우 즉시 확정해 드리며, 단체 예약도 가능합니다." },
      { q: "영업시간이 어떻게 되나요?", a: "화–일, 13:00–16:30 그리고 20:00–00:00. 토요일은 종일 영업합니다. 월요일은 휴무입니다." },
      { q: "채식 메뉴가 있나요?", a: "있습니다. 샐러드, 따뜻한 전채, 숯불 채소가 있습니다. 알레르기나 식이 제한이 있으시면 예약 시 알려주세요." },
      { q: "단체 예약을 받나요?", a: "네. 4인부터 단체 메뉴를 제공합니다. 15인 이상이라면 며칠 전에 미리 예약을 부탁드립니다." },
      { q: "이 집의 대표 메뉴는요?", a: "떡갈나무 숯불 고기 —— 소, 송아지, 젖먹이 양, 이베리코. 그리고 매일 새벽 만드는 카르멘의 미가스." },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "언제나 사랑하고, 결코 잊지 않는다",
    addressLabel: "방문",
    address: "C/ Moras, 4 · 18009 그라나다",
    hoursLabel: "영업시간",
    hoursLines: ["화–일 · 13:00–16:30 / 20:00–00:00", "토요일 · 종일 영업", "월요일 휴무"],
    phoneLabel: "예약",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · 그라나다 · 모든 권리 보유",
    credit: "수공으로. 그라나다.",
  },
};

const ja: HomeExtras = {
  hero: {
    chapter: "01",
    addressLine: "グラナダ · C/ Moras, 4",
    menuLink: "メニュー",
    reservationLink: "ご予約",
  },
  manifesto: {
    chapter: "02",
    eyebrow: "私たちの仕事",
    titleA: "炭火は",
    titleB: "ひとつの芸術です",
    body:
      "グラナダの中心、イサベル・ラ・カトリカ劇場の隣で、四十七年のあいだ樫の炭で肉を焼いてきました。1995年から一日も絶えたことのない火、変わらないレシピ、土地の恵み、家族の確かな手。",
    cta: "もっと知る",
    cards: [
      { title: "樫の炭火焼き", caption: "1995年から同じ窯", image: "/images/meson1.jpg" },
      { title: "グラナダの恵み", caption: "牛、乳呑み仔羊、イベリコ", image: "/images/meson6.jpg" },
      { title: "伝統の料理", caption: "変わらないレシピ", image: "/images/meson11.jpg" },
      { title: "歴史のある店内", caption: "五代続く食卓", image: "/images/meson17.jpg" },
    ],
  },
  founders: {
    chapter: "03",
    eyebrow: "火を灯した人",
    titleA: "カルメン、",
    titleB: "創業者",
    body:
      "1979年以来、客を魅了してきた味の秘密は彼女でした —— けれども勲章を受け取りに厨房を出ることはありませんでした。朝五時にはもうミガスをこね、魚をさばき、一日を整えていました。いまは娘が同じ心配りでその仕事を引き継いでいます。",
    smallCaption: "当家のミガス、毎朝",
    portraitCaption: "カルメン・ロペス・モラレス · 創業者 · 1979 — 永遠",
  },
  reserva: {
    chapter: "04",
    titleA: "テーブルをご予約ください",
    titleB: "忘れがたい一夜のために",
    body:
      "家のようにお迎えします。お電話、または C/ Moras 4 へお立ち寄りください —— 良いテーブルはいつでもございます。",
    photoLabel: "当店の店内",
    peopleLabel: "人数",
    dateLabel: "日付",
    timeLabel: "時刻",
    submit: "お電話でご予約",
    peopleOptions: ["2 名", "3 名", "4 名", "5 名", "6 名", "7 名以上"],
    timeOptions: ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
  press: {
    chapter: "05",
    eyebrowA: "伝統を",
    eyebrowB: "大切にされる方へ",
    intro:
      "Diario Ideal はこの店がグラナダにとって何であるかを長年にわたり伝えてきました。書かれた言葉のいくつかをご紹介します。",
    items: [
      { quote: "樫炭焼き肉のグラナダの女王。1979年以来、客を魅了する味。", source: "Ideal", author: "特集 · 2020" },
      { quote: "グラナダの中心にある美食の宝石。伝統、歴史、そして良い料理が均衡を保つ。", source: "Ideal", author: "特集 · 2022" },
      { quote: "四十年を経てなお、最良のグラナダ料理の本質を保つ象徴的な店。", source: "Ideal", author: "特集 · 2019" },
    ],
  },
  events: {
    chapter: "06",
    titleA: "あなたのお祝いを",
    titleB: "特別なものに",
    body:
      "長いテーブル、広い炭火。四名様以上 — 前菜は中央へ、メインは各自でお選びいただきます。会社の集まり、ご家族でのお食事、プライベートな会。",
    cta: "グループメニューを見る",
    cards: [
      { kicker: "家族", title: "ご家族のお食事", image: "/images/meson3.jpg" },
      { kicker: "ビジネス", title: "会社の会食・ランチ", image: "/images/meson8.jpg" },
      { kicker: "プライベート", title: "プライベートな祝祭", image: "/images/meson14.jpg" },
    ],
  },
  faq: {
    chapter: "07",
    titleA: "よくいただく",
    titleB: "ご質問",
    items: [
      { q: "事前に予約できますか?", a: "はい。最も早いのは 958 222 794 へのお電話です。多くの場合その場で確定いたします。大人数のご予約も同様です。" },
      { q: "営業時間を教えてください。", a: "火曜から日曜まで、13:00–16:30 と 20:00–00:00。土曜日は通し営業です。月曜定休。" },
      { q: "ベジタリアン向けのメニューはありますか?", a: "ございます。サラダ、温前菜、野菜の炭火焼きなど。アレルギーや食事制限がある場合はご予約時にお知らせください。" },
      { q: "大人数のご予約は可能ですか?", a: "はい。4名様からグループメニューをご用意しています。15名様以上は数日前のご予約をお願いいたします。" },
      { q: "看板メニューはありますか?", a: "樫の炭火焼き肉 —— 牛、仔牛、乳呑み仔羊、イベリコ豚。そして毎朝仕込むカルメンのミガス。" },
    ],
  },
  closer: {
    wordmark: "Mesón Alegría",
    tagline: "いつまでも愛し、決して忘れない",
    addressLabel: "ご来店",
    address: "C/ Moras, 4 · 18009 グラナダ",
    hoursLabel: "営業時間",
    hoursLines: ["火–日 · 13:00–16:30 / 20:00–00:00", "土曜日 · 通し営業", "月曜定休"],
    phoneLabel: "ご予約",
    phone: "+34 958 222 794",
    legal: "© Mesón Alegría · グラナダ · 全著作権所有",
    credit: "手仕事で。グラナダ。",
  },
};

const fallbackTable: Partial<Record<Locale, HomeExtras>> = { es, en, fr, de, zh, ko, ja };

export function getHomeExtras(lang: Locale): HomeExtras {
  return fallbackTable[lang] ?? es;
}
