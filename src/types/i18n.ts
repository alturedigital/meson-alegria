export type Dictionary = {
  nav: {
    home: string;
    story: string;
    menu: string;
    wines: string;
    groups: string;
    news: string;
    visit: string;
    reserve: string;
  };
  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headlineTop: string;
    headlineBottom: string;
    sub: string;
    cta: string;
    secondary: string;
    scroll: string;
  };
  marquee: string[];
  story: {
    eyebrow: string;
    title: string;
    lede: string;
    chapters: { year: string; title: string; body: string }[];
    carmen: {
      eyebrow: string;
      title: string;
      body: string;
      caption: string;
    };
    closing: { title: string; body: string };
  };
  specialty: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { kicker: string; title: string; body: string; image: string }[];
  };
  visit: {
    eyebrow: string;
    title: string;
    lede: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    weekdays: string;
    saturday: string;
    closedDay: string;
    phoneLabel: string;
    phone: string;
    cta: string;
    secondary: string;
    directions: string;
  };
  menuCta: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    waiterNote: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    waiterNote: string;
    askStaff: string;
    byWeight: string;
    sections: {
      salads: string;
      cold: string;
      hot: string;
      typical: string;
      iberian: string;
      sanpascual: string;
      beef: string;
      lamb: string;
      desserts: string;
    };
  };
  corpus: {
    eyebrow: string;
    title: string;
    intro: string;
    closing: string;
  };
  news: {
    eyebrow: string;
    title: string;
    intro: string;
    readMore: string;
    backToList: string;
    publishedIn: string;
  };
  footer: {
    house: string;
    address: string;
    visit: string;
    reserve: string;
    follow: string;
    credit: string;
    legal: string;
  };
  historia: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    timelineEyebrow: string;
    timelineTitle: string;
    quote: {
      body: string;
      author: string;
    };
    pressEyebrow: string;
    pressTitle: string;
    pressLede: string;
    pressReadAt: string;
  };
};

export type PressArticle = {
  slug: string;
  title: string;
  date: string;
  source: string;
  pdf: string;
};
