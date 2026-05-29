import type { Locale } from "@/lib/i18n/config";

/**
 * Page-level copy that doesn't live in the canonical Dictionary yet.
 * ES is canonical; others fall back to ES via `getPageExtras`.
 */

export type PageExtras = {
  wines: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: {
      whites: string;
      rose: string;
      generosos: string;
      cava: string;
      ribera: string;
      rioja: string;
      others: string;
    };
  };
  groups: {
    eyebrow: string;
    title: string;
    intro: string;
    minPeople: string;
    starters: string;
    mains: string;
    desserts: string;
    drinks: string;
    perPerson: string;
    vat: string;
    cocktailLabel: string;
    allDishes: string;
    note: string;
  };
};

const es: PageExtras = {
  wines: {
    eyebrow: "Carta de vinos",
    title: "Una bodega pensada para la brasa",
    intro:
      "Selección cuidada de bodegas andaluzas y nacionales. Pregúntanos: tenemos el vino exacto para cada plato.",
    sections: {
      whites: "Blancos",
      rose: "Rosados",
      generosos: "Generosos",
      cava: "Cavas y Champagne",
      ribera: "Ribera del Duero",
      rioja: "Rioja",
      others: "Otras denominaciones",
    },
  },
  groups: {
    eyebrow: "Menús para grupos",
    title: "Celebra a lo grande",
    intro:
      "Mesas largas, brasas anchas. Para mínimo 4 personas: los entrantes van al centro cada cuatro comensales y el plato principal es a elegir individualmente.",
    minPeople: "Mínimo 4 personas",
    starters: "Entrantes",
    mains: "Plato a elegir",
    desserts: "Postre",
    drinks: "Bebidas",
    perPerson: "/ persona",
    vat: "IVA incluido",
    cocktailLabel: "Cóctel",
    allDishes: "Todos los platos al centro cada 4 personas",
    note:
      "Para celebraciones de más de 15 personas conviene reservar con varios días de antelación.",
  },
};

const en: PageExtras = {
  wines: {
    eyebrow: "Wine list",
    title: "A cellar built for the fire",
    intro:
      "A careful selection of Andalusian and Spanish wineries. Ask us — we have the right bottle for the dish.",
    sections: {
      whites: "Whites",
      rose: "Rosés",
      generosos: "Fortified",
      cava: "Cava & Champagne",
      ribera: "Ribera del Duero",
      rioja: "Rioja",
      others: "Other appellations",
    },
  },
  groups: {
    eyebrow: "Group menus",
    title: "Celebrate together",
    intro:
      "Long tables, wide fires. From 4 guests: starters go in the middle of every four diners and the main course is chosen individually.",
    minPeople: "Minimum 4 guests",
    starters: "Starters",
    mains: "Choose your main",
    desserts: "Dessert",
    drinks: "Drinks",
    perPerson: "/ person",
    vat: "VAT included",
    cocktailLabel: "Welcome cocktail",
    allDishes: "All dishes for the centre every 4 guests",
    note:
      "For parties of 15+ guests, please reserve several days in advance.",
  },
};

const fr: PageExtras = {
  wines: {
    eyebrow: "Carte des vins",
    title: "Une cave pensée pour la braise",
    intro:
      "Sélection soignée de caves andalouses et espagnoles. Demandez-nous — nous avons la bouteille pour chaque plat.",
    sections: {
      whites: "Blancs",
      rose: "Rosés",
      generosos: "Vins doux naturels",
      cava: "Cava et Champagne",
      ribera: "Ribera del Duero",
      rioja: "Rioja",
      others: "Autres appellations",
    },
  },
  groups: {
    eyebrow: "Menus de groupe",
    title: "Célébrez ensemble",
    intro:
      "Longues tables, larges braises. À partir de 4 convives : les entrées vont au centre toutes les quatre personnes et le plat principal est au choix individuel.",
    minPeople: "Minimum 4 convives",
    starters: "Entrées",
    mains: "Plat au choix",
    desserts: "Dessert",
    drinks: "Boissons",
    perPerson: "/ pers.",
    vat: "TVA incluse",
    cocktailLabel: "Cocktail",
    allDishes: "Tous les plats au centre toutes les 4 personnes",
    note: "Pour les groupes de plus de 15 personnes, réservez plusieurs jours à l'avance.",
  },
};

const de: PageExtras = {
  wines: {
    eyebrow: "Weinkarte",
    title: "Ein Keller, gemacht für die Glut",
    intro:
      "Eine sorgfältige Auswahl andalusischer und spanischer Kellereien. Fragen Sie uns — wir haben die richtige Flasche für jedes Gericht.",
    sections: {
      whites: "Weißweine",
      rose: "Roséweine",
      generosos: "Likörweine",
      cava: "Cava & Champagner",
      ribera: "Ribera del Duero",
      rioja: "Rioja",
      others: "Andere Herkünfte",
    },
  },
  groups: {
    eyebrow: "Gruppenmenüs",
    title: "Feiern Sie gemeinsam",
    intro:
      "Lange Tische, weite Glut. Ab 4 Gästen: Vorspeisen werden je vier Personen in die Mitte gestellt, das Hauptgericht wählt jeder einzeln.",
    minPeople: "Mindestens 4 Gäste",
    starters: "Vorspeisen",
    mains: "Hauptgericht (zur Wahl)",
    desserts: "Dessert",
    drinks: "Getränke",
    perPerson: "/ Person",
    vat: "MwSt. inkl.",
    cocktailLabel: "Cocktail",
    allDishes: "Alle Vorspeisen in die Mitte je 4 Personen",
    note: "Für Gruppen ab 15 Personen bitte einige Tage im Voraus reservieren.",
  },
};

const zh: PageExtras = {
  wines: {
    eyebrow: "酒单",
    title: "为炭火而生的酒窖",
    intro:
      "精选自安达卢西亚及西班牙各地酒庄。请告诉我们 —— 我们能为每道菜搭配最合适的一瓶。",
    sections: {
      whites: "白葡萄酒",
      rose: "桃红葡萄酒",
      generosos: "强化葡萄酒",
      cava: "卡瓦与香槟",
      ribera: "杜罗河岸",
      rioja: "里奥哈",
      others: "其他产区",
    },
  },
  groups: {
    eyebrow: "团体菜单",
    title: "一起庆祝",
    intro:
      "长桌、宽阔的炭火。4 人起:前菜每四人一份置于桌心,主菜各自挑选。",
    minPeople: "至少 4 人",
    starters: "前菜",
    mains: "主菜(任选)",
    desserts: "甜点",
    drinks: "饮料",
    perPerson: "/ 人",
    vat: "含增值税",
    cocktailLabel: "鸡尾酒",
    allDishes: "所有菜肴每 4 人份置于桌心",
    note: "15 人以上的团体请提前数日预订。",
  },
};

const ko: PageExtras = {
  wines: {
    eyebrow: "와인 리스트",
    title: "숯불을 위한 셀러",
    intro:
      "안달루시아와 스페인 전역의 와이너리에서 정성껏 선별한 와인. 말씀해 주세요 —— 요리에 어울리는 한 병이 있습니다.",
    sections: {
      whites: "화이트",
      rose: "로제",
      generosos: "주정강화 와인",
      cava: "카바·샴페인",
      ribera: "리베라 델 두에로",
      rioja: "리오하",
      others: "기타 산지",
    },
  },
  groups: {
    eyebrow: "단체 메뉴",
    title: "함께 즐기는 자리",
    intro:
      "긴 테이블, 넓은 숯불. 4인 이상 — 전채는 4인당 한 접시씩 가운데로, 메인은 각자 선택합니다.",
    minPeople: "최소 4인",
    starters: "전채",
    mains: "메인 (선택)",
    desserts: "디저트",
    drinks: "음료",
    perPerson: "/ 인",
    vat: "부가세 포함",
    cocktailLabel: "칵테일",
    allDishes: "모든 요리는 4인당 한 접시씩 가운데로 제공됩니다",
    note: "15인 이상의 단체는 며칠 전에 미리 예약해 주세요.",
  },
};

const ja: PageExtras = {
  wines: {
    eyebrow: "ワインリスト",
    title: "炭火のためのセラー",
    intro:
      "アンダルシアとスペイン全土のワイナリーから厳選。お気軽にお尋ねください —— お料理に寄り添う一本を必ずお探しします。",
    sections: {
      whites: "白",
      rose: "ロゼ",
      generosos: "酒精強化ワイン",
      cava: "カバ・シャンパーニュ",
      ribera: "リベラ・デル・ドゥエロ",
      rioja: "リオハ",
      others: "その他の産地",
    },
  },
  groups: {
    eyebrow: "グループメニュー",
    title: "ご一緒に祝う",
    intro:
      "長いテーブル、広い炭火。4 名様より — 前菜は 4 名ごとに中央へ、メインは各自でお選びいただきます。",
    minPeople: "最低 4 名様",
    starters: "前菜",
    mains: "メイン(お選びください)",
    desserts: "デザート",
    drinks: "お飲み物",
    perPerson: "/ 名様",
    vat: "税込",
    cocktailLabel: "カクテル",
    allDishes: "すべての前菜は 4 名様ごとに中央へお出しいたします",
    note: "15 名様以上のグループは数日前のご予約をお願いいたします。",
  },
};

const fallback: Partial<Record<Locale, PageExtras>> = { es, en, fr, de, zh, ko, ja };

export function getPageExtras(lang: Locale): PageExtras {
  return fallback[lang] ?? es;
}
