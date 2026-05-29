export type Wine = { name: string; region?: string; price: string };
export type WineSection = {
  id: "whites" | "rose" | "generosos" | "cava" | "ribera" | "rioja" | "others";
  wines: Wine[];
};

export const WINES: WineSection[] = [
  {
    id: "whites",
    wines: [
      { name: "Monasterio Palazuelos", region: "Verdejo · Rueda", price: "16,50 €" },
      { name: "Diez Siglos", region: "Verdejo · Rueda", price: "17,00 €" },
      { name: "Calvente", region: "Moscatel de Alejandría · Granada", price: "27,00 €" },
      { name: "Pago Los Abuelos Godello", region: "Bierzo", price: "41,00 €" },
      { name: "Vivanco", region: "Tempranillo Blanco · Rioja", price: "17,50 €" },
      { name: "Maior de Mendoza 3 Crianzas", region: "Albariño · Rías Baixas", price: "37,20 €" },
      { name: "Vicio", region: "Moscatel grano grueso · Granada", price: "18,00 €" },
      { name: "Palacio de Bornos", region: "Verdejo · Rueda", price: "18,00 €" },
      { name: "Bornos Frizzante", region: "Verdejo · Rueda", price: "16,50 €" },
    ],
  },
  {
    id: "rose",
    wines: [
      { name: "Vivanco Rosado", region: "Tempranillo · Garnacha · Rioja", price: "17,50 €" },
      { name: "Cloe", region: "Garnacha · Sierras de Málaga", price: "19,50 €" },
    ],
  },
  {
    id: "generosos",
    wines: [
      { name: 'Manzanilla "La Alegría"', price: "18,00 €" },
      { name: 'Fino "Pando"', price: "18,00 €" },
      { name: "Pedro Ximénez Canasta", price: "19,50 €" },
    ],
  },
  {
    id: "cava",
    wines: [
      { name: "Bollinger", region: "Brut · Champagne", price: "60,00 €" },
      { name: "Vivanco Extra Brut", region: "Rioja", price: "18,00 €" },
      { name: "Buche Brut Nature", region: "Macabeo · Parellada", price: "18,00 €" },
      { name: "Louis Roederer", region: "Champagne", price: "78,80 €" },
    ],
  },
  {
    id: "ribera",
    wines: [
      { name: "Antídoto", region: "Tinto Fino", price: "29,50 €" },
      { name: "Pago de Carraovejas", region: "Tempranillo · Cab. Sauv. · Merlot", price: "55,00 €" },
      { name: "Marta Maté", region: "Tinto Fino", price: "38,40 €" },
      { name: 'Cair "La Aguilera"', region: "Tempranillo · Merlot", price: "32,50 €" },
      { name: "Bosque de Matasnos", region: "Tempranillo · Merlot · Malbec", price: "45,00 €" },
      { name: "Tamiz", region: "Recomendado de la casa", price: "18,00 €" },
      { name: "Melior (Matarromera)", region: "Tempranillo", price: "18,00 €" },
      { name: "Viña Sastre", region: "Tempranillo", price: "42,30 €" },
      { name: "Teófilo Reyes", region: "Tempranillo", price: "31,50 €" },
      { name: "Jesús de Madrazo Selección", region: "Tempranillo · Garnacha", price: "56,40 €" },
      { name: "Arzuaga", region: "Tempranillo · Cab. Sauv. · Merlot", price: "36,00 €" },
      { name: "La Hormiga del Antídoto", region: "Tinto Fino", price: "43,30 €" },
      { name: "Matarromera", region: "Tinto Fino", price: "35,50 €" },
    ],
  },
  {
    id: "rioja",
    wines: [
      { name: "Viña Ardanza", region: "Tempranillo · Garnacha", price: "46,00 €" },
      { name: "Muga", region: "Tempranillo · Garnacha · Graciano", price: "30,00 €" },
      { name: 'Amaren "Los Ángeles"', region: "F. Luis Cañas", price: "33,40 €" },
      { name: "Vivanco", region: "Tempranillo · Graciano · Maturana", price: "21,00 €" },
      { name: "Glorioso", region: "Tempranillo", price: "22,50 €" },
      { name: "Azpilicueta", region: "Mazuelo", price: "25,00 €" },
      { name: "LAN", region: "Tempranillo · Mazuelo", price: "20,00 €" },
    ],
  },
  {
    id: "others",
    wines: [
      { name: "Corral de Campanas", region: "D.O. Toro", price: "22,00 €" },
      { name: "Juan Gil", region: "D.O. Jumilla", price: "30,00 €" },
      { name: "Flor", region: "Ribera del Guadiana", price: "18,50 €" },
      { name: 'Ternario 2 "Raúl Pérez"', region: "Almansa", price: "20,50 €" },
      { name: "Castillejos", region: "D.O. Granada", price: "36,20 €" },
      { name: "Muñana 3 Cepas", region: "D.O. Granada", price: "22,00 €" },
      { name: "Alquez", region: "D.O. Calatayud", price: "30,50 €" },
    ],
  },
];
