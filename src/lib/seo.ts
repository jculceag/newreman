import { PRODUCTS, SITE_NAME, SITE_TAGLINE, WARRANTY_MONTHS } from "@/lib/site";

export const SEO_TITLE = `${SITE_NAME} | Recuperação de peças elétricas automotivas em São Paulo`;

export const SEO_DESCRIPTION = `Recuperamos motor de partida, alternador, ventoinha, chave de seta e limpador pra oficinas em São Paulo. Garantia de ${WARRANTY_MONTHS} meses. Vila Romana.`;

export const SEO_KEYWORDS = [
  "NEW REMAN",
  "recuperação de motor de partida",
  "alternador remanufaturado",
  "peças elétricas automotivas",
  "recuperadora de peças elétricas",
  "oficina São Paulo",
  "auto elétrica Vila Romana",
  "ventoinha automotiva",
  "chave de seta",
  "limpador de parabrisas",
  ...PRODUCTS.map((p) => p.name.toLowerCase()),
] as const;

export const SEO_GEO = {
  latitude: -23.531704,
  longitude: -46.69939,
} as const;

export { SITE_NAME, SITE_TAGLINE };
