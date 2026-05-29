import type { Locale } from "@/lib/i18n/config";

export type MenuItem = {
  /** Nombre en español — siempre presente, siempre mostrado debajo como referencia para el camarero */
  name_es: string;
  /** Traducciones del nombre del plato */
  name: Partial<Record<Locale, string>>;
  price: string;
  /** Descripción del plato — opcional, también por idioma */
  desc?: Partial<Record<Locale, string>>;
  /** Etiqueta especial: "ask_staff", "by_weight", etc. */
  flag?: "ask_staff" | "by_weight";
};

export type MenuSection = {
  id: "salads" | "cold" | "hot" | "typical" | "iberian" | "sanpascual" | "beef" | "lamb" | "desserts";
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "salads",
    items: [
      {
        name_es: 'Ensalada "Alegría"',
        name: {
          es: 'Ensalada "Alegría"',
          en: '"Alegría" Salad',
          fr: 'Salade « Alegría »',
          de: '"Alegría"-Salat',
          zh: '"欢乐"沙拉',
          ko: '"알레그리아" 샐러드',
        },
        desc: {
          es: "Brotes verdes, tomate, zanahoria, melva, huevo, aceitunas y cebolleta",
          en: "Green sprouts, tomato, carrot, frigate mackerel, egg, olives, spring onion",
          fr: "Pousses vertes, tomate, carotte, maquereau, œuf, olives, ciboulette",
          de: "Grüne Sprossen, Tomate, Karotte, Makrele, Ei, Oliven, Frühlingszwiebel",
          zh: "嫩芽、番茄、胡萝卜、鲣鱼、鸡蛋、橄榄、青葱",
          ko: "어린잎, 토마토, 당근, 청어, 달걀, 올리브, 쪽파",
        },
        price: "10,50 €",
      },
      {
        name_es: 'Cogollos de Lechuga a la "Granaína"',
        name: {
          es: 'Cogollos de Lechuga a la "Granaína"',
          en: 'Granada-style Lettuce Hearts',
          fr: 'Cœurs de laitue façon « Granaína »',
          de: 'Salatherzen nach „Granaína“-Art',
          zh: '格拉纳达风味生菜心',
          ko: '그라나다식 양상추 속잎',
        },
        price: "9,50 €",
      },
      {
        name_es: "Ensalada de Pimientos Asados",
        name: {
          es: "Ensalada de Pimientos Asados",
          en: "Roasted Pepper Salad",
          fr: "Salade de poivrons rôtis",
          de: "Salat aus gerösteten Paprika",
          zh: "烤甜椒沙拉",
          ko: "구운 피망 샐러드",
        },
        price: "12,50 €",
      },
      {
        name_es: "Cogollos con Anchoas del Cantábrico",
        name: {
          es: "Cogollos con Anchoas del Cantábrico",
          en: "Lettuce Hearts with Cantabrian Anchovies",
          fr: "Cœurs de laitue aux anchois de Cantabrie",
          de: "Salatherzen mit kantabrischen Sardellen",
          zh: "莴苣心配坎塔布里亚鳀鱼",
          ko: "양상추 속잎과 칸타브리아 멸치",
        },
        price: "19,00 €",
      },
      {
        name_es: 'Tomate "Alegría"',
        name: {
          es: 'Tomate "Alegría"',
          en: '"Alegría" Tomato Salad',
          fr: 'Salade de tomate « Alegría »',
          de: '"Alegría"-Tomatensalat',
          zh: '"欢乐"番茄沙拉',
          ko: '"알레그리아" 토마토 샐러드',
        },
        desc: {
          es: "Tomate, cebolleta, piparras, melva, aceituna negra",
          en: "Tomato, spring onion, piparras, frigate mackerel, black olives",
          fr: "Tomate, ciboulette, piparras, maquereau, olives noires",
          de: "Tomate, Frühlingszwiebel, Piparras, Makrele, schwarze Oliven",
          zh: "番茄、青葱、小辣椒、鲣鱼、黑橄榄",
          ko: "토마토, 쪽파, 피파라스, 청어, 블랙올리브",
        },
        price: "13,50 €",
      },
      {
        name_es: "Ensalada de Burrata",
        name: {
          es: "Ensalada de Burrata",
          en: "Burrata Salad",
          fr: "Salade de burrata",
          de: "Burrata-Salat",
          zh: "布拉塔奶酪沙拉",
          ko: "부라타 샐러드",
        },
        desc: {
          es: "Brotes verdes, naranja, manzana, tomate, aceituna negra, burrata, pesto, tapenade",
          en: "Green shoots, orange, apple, tomato, black olive, burrata, pesto, tapenade",
          fr: "Pousses vertes, orange, pomme, tomate, olive noire, burrata, pesto, tapenade",
          de: "Grüne Sprossen, Orange, Apfel, Tomate, schwarze Olive, Burrata, Pesto, Tapenade",
          zh: "嫩芽、橙、苹果、番茄、黑橄榄、布拉塔、青酱、橄榄酱",
          ko: "어린잎, 오렌지, 사과, 토마토, 블랙올리브, 부라타, 페스토, 타프나드",
        },
        price: "15,50 €",
      },
    ],
  },
  {
    id: "cold",
    items: [
      {
        name_es: "Jamón de Pata Negra",
        name: { es: "Jamón de Pata Negra", en: "Pata Negra Ham", fr: "Jambon Pata Negra", de: "Pata Negra Schinken", zh: "帕塔内格拉火腿", ko: "파타 네그라 하몽" },
        price: "26,00 €",
      },
      {
        name_es: "Tabla Mixta de Ibéricos y Quesos",
        name: { es: "Tabla Mixta de Ibéricos y Quesos", en: "Iberian Cured Meats & Cheese Platter", fr: "Plateau ibérique et fromages", de: "Iberische Wurst- und Käseplatte", zh: "伊比利亚肉类和奶酪拼盘", ko: "이베리코·치즈 플래터" },
        price: "22,00 €",
      },
      {
        name_es: "Atún en Escabeche",
        name: { es: "Atún en Escabeche", en: "Marinated Tuna", fr: "Thon en escabèche", de: "Thunfisch in Escabeche", zh: "腌渍金枪鱼", ko: "에스카베체 참치" },
        price: "16,00 €",
      },
      {
        name_es: "Mojama de Atún de Barbate",
        name: { es: "Mojama de Atún de Barbate", en: "Barbate Tuna Mojama", fr: "Mojama de thon de Barbate", de: "Mojama vom Thunfisch aus Barbate", zh: "巴尔巴特金枪鱼干", ko: "바르바테 참치 모하마" },
        price: "18,00 €",
      },
      {
        name_es: "Queso Manchego",
        name: { es: "Queso Manchego", en: "Manchego Cheese", fr: "Fromage Manchego", de: "Manchego-Käse", zh: "曼彻戈奶酪", ko: "만체고 치즈" },
        price: "18,00 €",
      },
      {
        name_es: "Queso Payoyo",
        name: { es: "Queso Payoyo", en: "Payoyo Goat Cheese", fr: "Fromage Payoyo (chèvre)", de: "Payoyo Ziegenkäse", zh: "帕约约山羊奶酪", ko: "파요요 산양 치즈" },
        price: "17,50 €",
      },
      {
        name_es: "Ensaladilla Rusa",
        name: { es: "Ensaladilla Rusa", en: "Russian Salad", fr: "Salade russe", de: "Russischer Salat", zh: "俄罗斯沙拉", ko: "러시안 샐러드" },
        price: "12,50 €",
      },
      {
        name_es: "Anchoas con Mantequilla Ecológica",
        name: { es: "Anchoas con Mantequilla Ecológica", en: "Anchovies with Organic Butter", fr: "Anchois au beurre bio", de: "Sardellen mit Bio-Butter", zh: "凤尾鱼配有机黄油", ko: "유기농 버터를 곁들인 멸치" },
        price: "24,00 €",
      },
      {
        name_es: "Bacaguate",
        name: { es: "Bacaguate", en: "Bacaguate", fr: "Bacaguate", de: "Bacaguate", zh: "Bacaguate", ko: "바카과테" },
        desc: {
          es: "Bacalao, aguacate, naranja, lima, aceite de oliva, eneldo",
          en: "Cod, avocado, orange, lime, olive oil, dill",
          fr: "Morue, avocat, orange, citron vert, huile d'olive, aneth",
          de: "Kabeljau, Avocado, Orange, Limette, Olivenöl, Dill",
          zh: "鳕鱼、牛油果、橙、青柠、橄榄油、莳萝",
          ko: "대구, 아보카도, 오렌지, 라임, 올리브유, 딜",
        },
        price: "16,00 €",
      },
      {
        name_es: "Lomo de Cerdo en Aceite",
        name: { es: "Lomo de Cerdo en Aceite", en: "Pork Loin in Oil", fr: "Longe de porc à l'huile", de: "Schweinelende in Öl", zh: "油浸猪里脊", ko: "오일에 절인 돼지 등심" },
        price: "16,00 €",
      },
      {
        name_es: "Anchoas del Cantábrico",
        name: { es: "Anchoas del Cantábrico", en: "Cantabrian Anchovies", fr: "Anchois de Cantabrie", de: "Kantabrische Sardellen", zh: "坎塔布里亚凤尾鱼", ko: "칸타브리아 멸치" },
        price: "2,50 €/ud",
      },
      {
        name_es: "Gildas",
        name: { es: "Gildas", en: "Gildas", fr: "Gildas", de: "Gildas", zh: "吉尔达斯", ko: "길다스" },
        price: "2,50 €/ud",
      },
    ],
  },
  {
    id: "hot",
    items: [
      { name_es: "Brocheta de Verdura", name: { es: "Brocheta de Verdura", en: "Vegetable Skewer", fr: "Brochette de légumes", de: "Gemüsespieß", zh: "蔬菜串", ko: "야채 꼬치" }, price: "14,00 €" },
      { name_es: "Mollejas de Cordero", name: { es: "Mollejas de Cordero", en: "Lamb Sweetbreads", fr: "Ris d'agneau", de: "Lammbries", zh: "羊胰脏", ko: "양 흉선" }, price: "19,00 €" },
      { name_es: "Camembert frito", name: { es: "Camembert frito", en: "Fried Camembert", fr: "Camembert frit", de: "Frittierter Camembert", zh: "炸卡门贝尔", ko: "튀긴 카망베르" }, price: "12,50 €" },
      { name_es: "Huevos rotos con Patatas y Jamón Ibérico", name: { es: "Huevos rotos con Patatas y Jamón Ibérico", en: "Broken Eggs with Chips & Iberian Ham", fr: "Œufs cassés, frites et jambon ibérique", de: "Aufgeschlagene Eier mit Pommes und iberischem Schinken", zh: "伊比利亚火腿薯条配蛋", ko: "감자튀김과 이베리코 하몽을 곁들인 깨뜨린 달걀" }, price: "15,00 €" },
      { name_es: 'Torreznos "Japi Japi"', name: { es: 'Torreznos "Japi Japi"', en: '"Japi Japi" Pork Crackling', fr: 'Couennes "Japi Japi"', de: '"Japi Japi" Schweinekrusten', zh: '"Japi Japi" 猪皮脆', ko: '"하피 하피" 돼지껍데기' }, price: "12,50 €" },
      { name_es: "Croquetas Caseras", name: { es: "Croquetas Caseras", en: "Homemade Croquettes", fr: "Croquettes maison", de: "Hausgemachte Kroketten", zh: "自制可乐饼", ko: "수제 크로켓" }, price: "16,00 €" },
      { name_es: "Pulpo a la Brasa", name: { es: "Pulpo a la Brasa", en: "Grilled Octopus", fr: "Poulpe à la braise", de: "Tintenfisch vom Grill", zh: "炭烤章鱼", ko: "숯불 문어" }, price: "26,50 €" },
      { name_es: "Bacalao a la Brasa (Papillote)", name: { es: "Bacalao a la Brasa (Papillote)", en: "Grilled Cod (En Papillote)", fr: "Morue à la braise (en papillote)", de: "Kabeljau vom Grill (Papillote)", zh: "炭烤鳕鱼（纸包）", ko: "숯불 대구 (파피요트)" }, price: "18,50 €" },
      { name_es: "Pimientos del Padrón", name: { es: "Pimientos del Padrón", en: "Padrón Peppers", fr: "Piments de Padrón", de: "Padrón-Paprika", zh: "帕德龙小青椒", ko: "파드론 고추" }, price: "10,50 €" },
      { name_es: "Platos Especiales", name: { es: "Platos Especiales", en: "Daily Specials", fr: "Plats spéciaux", de: "Tagesempfehlungen", zh: "特色菜品", ko: "특선 요리" }, price: "", flag: "ask_staff" },
    ],
  },
  {
    id: "typical",
    items: [
      { name_es: 'Remojón "Granaíno"', name: { es: 'Remojón "Granaíno"', en: 'Granada Cod & Orange Salad', fr: 'Remojón « granaíno » (morue & orange)', de: 'Granadiner Kabeljau-Orangen-Salat', zh: '格拉纳达鳕鱼橙子沙拉', ko: '그라나다식 대구·오렌지 샐러드' }, price: "15,00 €" },
      { name_es: "Habas con Jamón", name: { es: "Habas con Jamón", en: "Broad Beans with Ham", fr: "Fèves au jambon", de: "Dicke Bohnen mit Schinken", zh: "火腿炒蚕豆", ko: "하몽 누에콩 볶음" }, price: "15,50 €" },
      { name_es: "Tortilla Sacromonte", name: { es: "Tortilla Sacromonte", en: "Sacromonte Omelette", fr: "Tortilla Sacromonte", de: "Sacromonte-Tortilla", zh: "萨克罗蒙特蛋饼", ko: "사크로몬테 토르티야" }, desc: { es: "Huevo, sesos, chorizo, habas, guisantes, patatas", en: "Egg, brains, chorizo, broad beans, peas, potatoes", fr: "Œuf, cervelle, chorizo, fèves, petits pois, pommes de terre", de: "Ei, Hirn, Chorizo, dicke Bohnen, Erbsen, Kartoffeln", zh: "鸡蛋、脑花、香肠、蚕豆、豌豆、土豆", ko: "달걀, 골수, 초리소, 누에콩, 완두콩, 감자" }, price: "13,00 €" },
      { name_es: "Conejo a la Brasa", name: { es: "Conejo a la Brasa", en: "Grilled Rabbit", fr: "Lapin à la braise", de: "Kaninchen vom Grill", zh: "炭烤兔肉", ko: "숯불 토끼" }, price: "17,00 €" },
      { name_es: 'Pan "Alegría"', name: { es: 'Pan "Alegría"', en: '"Alegría" Bread', fr: 'Pain « Alegría »', de: '"Alegría"-Brot', zh: '"欢乐"面包', ko: '"알레그리아" 빵' }, price: "3,50 €" },
    ],
  },
  {
    id: "iberian",
    items: [
      { name_es: "Secreto Ibérico", name: { es: "Secreto Ibérico", en: "Iberian Secreto", fr: "Secreto ibérique", de: "Iberisches Secreto", zh: "伊比利亚秘制肉", ko: "이베리코 시크레토" }, price: "19,00 €" },
      { name_es: "Solomillo Ibérico", name: { es: "Solomillo Ibérico", en: "Iberian Tenderloin", fr: "Filet ibérique", de: "Iberisches Filet", zh: "伊比利亚里脊", ko: "이베리코 안심" }, price: "18,50 €" },
      { name_es: "Presa Ibérica", name: { es: "Presa Ibérica", en: "Iberian Presa", fr: "Presa ibérique", de: "Iberische Presa", zh: "伊比利亚肩胛肉", ko: "이베리코 프레사" }, price: "19,50 €" },
    ],
  },
  {
    id: "sanpascual",
    items: [
      { name_es: "Chuletillas de Cochinillo a la Brasa", name: { es: "Chuletillas de Cochinillo a la Brasa", en: "Grilled Suckling Pig Chops", fr: "Côtelettes de cochon de lait à la braise", de: "Spanferkelkoteletts vom Grill", zh: "炭烤乳猪排", ko: "숯불 새끼돼지 갈비" }, price: "3,50 €/ud" },
      { name_es: "Tomahawk Granaino", name: { es: "Tomahawk Granaino", en: "Granadian Tomahawk", fr: "Tomahawk granadin", de: "Granadiner Tomahawk", zh: "格拉纳达战斧排", ko: "그라나다 토마호크" }, price: "22,00 €" },
    ],
  },
  {
    id: "beef",
    items: [
      { name_es: "Brocheta de Solomillo", name: { es: "Brocheta de Solomillo", en: "Tenderloin Skewer", fr: "Brochette de filet", de: "Filetspieß", zh: "里脊串", ko: "안심 꼬치" }, price: "22,00 €" },
      { name_es: "Entrecot a la Brasa", name: { es: "Entrecot a la Brasa", en: "Grilled Entrecôte", fr: "Entrecôte à la braise", de: "Entrecôte vom Grill", zh: "炭烤肋眼", ko: "숯불 안심" }, price: "25,00 €" },
      { name_es: "Entrecot Estrogonoff", name: { es: "Entrecot Estrogonoff", en: "Entrecôte Stroganoff", fr: "Entrecôte Stroganoff", de: "Entrecôte Stroganoff", zh: "斯特罗加诺夫肋眼", ko: "스트로가노프 안심" }, price: "25,00 €" },
      { name_es: "Solomillo a la Brasa", name: { es: "Solomillo a la Brasa", en: "Grilled Tenderloin", fr: "Filet à la braise", de: "Filet vom Grill", zh: "炭烤里脊", ko: "숯불 안심" }, price: "28,00 €" },
      { name_es: "Chuletón a la Piedra", name: { es: "Chuletón a la Piedra", en: "Beef Steak on Stone", fr: "Côte de bœuf à la pierre", de: "Rinder-Steak auf Stein", zh: "石板牛排", ko: "돌판 등심 스테이크" }, price: "33,00 €" },
      { name_es: "Chuletón a la Brasa", name: { es: "Chuletón a la Brasa", en: "Grilled Beef Steak", fr: "Côte de bœuf à la braise", de: "Rinder-Steak vom Grill", zh: "炭烤牛排", ko: "숯불 등심 스테이크" }, price: "33,00 €" },
      { name_es: "Chuletón Vaca 1 Kg. 45 días maduración", name: { es: "Chuletón Vaca 1 Kg. 45 días maduración", en: "Aged Beef Chop 1kg · 45 days", fr: "Côte de bœuf 1 kg · 45 jours d'affinage", de: "Gereiftes Rinder-Kotelett 1 kg · 45 Tage", zh: "熟成45天 1公斤牛排", ko: "45일 숙성 1kg 등심" }, price: "", flag: "ask_staff" },
      { name_es: 'Solomillo Salsa "Alegría"', name: { es: 'Solomillo Salsa "Alegría"', en: 'Tenderloin "Alegría" Sauce', fr: 'Filet sauce « Alegría »', de: 'Filet mit "Alegría"-Sauce', zh: '"欢乐"酱汁里脊', ko: '"알레그리아" 소스 안심' }, price: "28,00 €" },
      { name_es: "Solomillo Cinco Pimientas", name: { es: "Solomillo Cinco Pimientas", en: "Five Pepper Tenderloin", fr: "Filet aux cinq poivres", de: "Fünf-Pfeffer-Filet", zh: "五椒里脊", ko: "오향 후추 안심" }, price: "29,00 €" },
      { name_es: "T-Bone", name: { es: "T-Bone", en: "T-Bone Steak", fr: "T-Bone", de: "T-Bone", zh: "T骨牛排", ko: "티본 스테이크" }, price: "", flag: "by_weight" },
      { name_es: "Chateaubriand", name: { es: "Chateaubriand", en: "Chateaubriand", fr: "Chateaubriand", de: "Chateaubriand", zh: "夏多布里昂", ko: "샤토브리앙" }, price: "40,00 €" },
      { name_es: "Tomahawk", name: { es: "Tomahawk", en: "Tomahawk", fr: "Tomahawk", de: "Tomahawk", zh: "战斧牛排", ko: "토마호크" }, price: "", flag: "by_weight" },
    ],
  },
  {
    id: "lamb",
    items: [
      { name_es: "Delicias a la Brasa (cuello)", name: { es: "Delicias a la Brasa (cuello)", en: "Grilled Lamb Neck Delicacies", fr: "Délices d'agneau (cou) à la braise", de: "Lammnacken vom Grill", zh: "炭烤羊颈", ko: "숯불 양 목살" }, price: "15,00 €" },
      { name_es: "Chuletillas de Cordero Lechal a la Brasa", name: { es: "Chuletillas de Cordero Lechal a la Brasa", en: "Grilled Suckling Lamb Chops", fr: "Côtelettes d'agneau de lait à la braise", de: "Milchlammkoteletts vom Grill", zh: "炭烤乳羊排", ko: "숯불 어린양 갈비" }, price: "23,00 €/6 ud" },
      { name_es: "Pierna de Cordero a la Brasa", name: { es: "Pierna de Cordero a la Brasa", en: "Grilled Leg of Lamb", fr: "Gigot d'agneau à la braise", de: "Lammkeule vom Grill", zh: "炭烤羊腿", ko: "숯불 양다리" }, price: "29,00 €" },
      { name_es: "Paletilla de Cordero a la Brasa", name: { es: "Paletilla de Cordero a la Brasa", en: "Grilled Lamb Shoulder", fr: "Épaule d'agneau à la braise", de: "Lammschulter vom Grill", zh: "炭烤羊肩", ko: "숯불 양 어깨살" }, price: "26,00 €" },
      { name_es: "1/4 de Lechal de Burgos (para 2)", name: { es: "1/4 de Lechal de Burgos (para 2)", en: "1/4 Suckling Lamb of Burgos (for 2)", fr: "1/4 d'agneau de lait de Burgos (pour 2)", de: "1/4 Milchlamm aus Burgos (für 2)", zh: "布尔戈斯乳羊1/4只（双人份）", ko: "부르고스 어린양 1/4 (2인분)" }, price: "49,00 €" },
    ],
  },
  {
    id: "desserts",
    items: [
      { name_es: "Tarta de la Casa", name: { es: "Tarta de la Casa", en: "House Cake", fr: "Gâteau de la maison", de: "Hauskuchen", zh: "招牌蛋糕", ko: "하우스 케이크" }, price: "6,00 €" },
      { name_es: "Tiramisú", name: { es: "Tiramisú", en: "Tiramisu", fr: "Tiramisu", de: "Tiramisu", zh: "提拉米苏", ko: "티라미수" }, price: "6,00 €" },
      { name_es: "Tarta de Chocolate", name: { es: "Tarta de Chocolate", en: "Chocolate Cake", fr: "Gâteau au chocolat", de: "Schokoladenkuchen", zh: "巧克力蛋糕", ko: "초콜릿 케이크" }, price: "6,00 €" },
      { name_es: "Tarta de Yema", name: { es: "Tarta de Yema", en: "Egg Yolk Cake", fr: "Tarte au jaune d'œuf", de: "Eigelb-Kuchen", zh: "蛋黄蛋糕", ko: "노른자 케이크" }, price: "6,00 €" },
      { name_es: "Tarta de Queso", name: { es: "Tarta de Queso", en: "Cheesecake", fr: "Cheesecake", de: "Käsekuchen", zh: "芝士蛋糕", ko: "치즈케이크" }, price: "6,00 €" },
      { name_es: "Pastel de Eros", name: { es: "Pastel de Eros", en: "Eros Cake", fr: "Gâteau d'Éros", de: "Eros-Kuchen", zh: "爱神蛋糕", ko: "에로스 케이크" }, price: "6,00 €" },
      { name_es: 'Tarta "Alegría"', name: { es: 'Tarta "Alegría"', en: '"Alegría" Cake', fr: 'Gâteau « Alegría »', de: '"Alegría"-Kuchen', zh: '"欢乐"蛋糕', ko: '"알레그리아" 케이크' }, price: "7,50 €" },
      { name_es: "Fruta del Tiempo", name: { es: "Fruta del Tiempo", en: "Seasonal Fruit", fr: "Fruits de saison", de: "Saisonale Früchte", zh: "时令水果", ko: "제철 과일" }, price: "5,00 €" },
      { name_es: "Helado", name: { es: "Helado", en: "Ice Cream", fr: "Glace", de: "Eis", zh: "冰淇淋", ko: "아이스크림" }, price: "6,00 €" },
    ],
  },
];
