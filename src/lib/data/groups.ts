export type GroupMenu = {
  id: string;
  name: string;
  price: string;
  type?: "menu" | "cocktail";
  starters: string[];
  mains?: string[];
  dishes?: string[];
  dessert: string;
  drinks: string;
};

export const GROUP_MENUS: GroupMenu[] = [
  {
    id: "m1",
    name: "Menú 1",
    price: "44,00 €",
    starters: ["Tomate aliñao", "Croquetas caseras", "Huevos con patatas y jamón"],
    mains: ["Secreto Ibérico", "Solomillo Ibérico salsa Mozárabe", "Bacalao a la Brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "m2",
    name: "Menú 2",
    price: "46,00 €",
    starters: ["Ensalada Alegría", "Jamón y queso", "Huevos con patatas y jamón"],
    mains: ["Solomillo Ibérico salsa Mozárabe", "Secreto Ibérico", "Bacalao a la Brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "m3",
    name: "Menú 3",
    price: "47,00 €",
    starters: ["Jamón y queso", 'Remojón "Granaíno"', "Habas con jamón"],
    mains: ["Solomillo Ibérico salsa Mozárabe", "Secreto Ibérico", "Bacalao a la Brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "m4",
    name: "Menú 4",
    price: "48,00 €",
    starters: ["Ensalada de aguacate a la brasa", "Jamón y queso", "Croquetas caseras"],
    mains: ["Entrecot de ternera", "Secreto Ibérico", "Bacalao a la brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "m5",
    name: "Menú 5",
    price: "55,00 €",
    starters: ["Jamón y queso", "Cogollos con anchoas", 'Torreznos "Japi Japi"'],
    mains: ["Entrecot de ternera", "Solomillo de ternera", "Bacalao a la Brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "m6",
    name: "Menú 6",
    price: "58,00 €",
    starters: ["Jamón ibérico y queso manchego", "Ensalada de burrata", "Lomo en aceite", "Habas con jamón"],
    mains: ["Solomillo de ternera", "Paletilla de cordero", "Bacalao a la Brasa"],
    dessert: "Surtido Postres Alegría",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "c1",
    name: "Cóctel 1",
    type: "cocktail",
    price: "40,00 €",
    starters: [],
    dishes: ["Jamón y queso", "Ensaladilla rusa", "Tortilla de patatas", "Croquetas caseras", "Huevos rotos con jamón", "Solomillo ibérico al ajillo", "Surtido de postres"],
    dessert: "Incluido en el cóctel",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
  {
    id: "c2",
    name: "Cóctel 2",
    type: "cocktail",
    price: "40,00 €",
    starters: [],
    dishes: ["Ensaladilla rusa", "Tabla de ibéricos", "Croquetas caseras", 'Torreznos "Japi Japi"', "Delicias de pollo", "Secreto ibérico", "Surtido de postres"],
    dessert: "Incluido en el cóctel",
    drinks: "1 consumición incluida · +5 € por consumiciones ilimitadas",
  },
];
