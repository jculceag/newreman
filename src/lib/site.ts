/** Contatos e conteúdo institucional da NEW REMAN. */

export const SITE_NAME = "NEW REMAN";
export const SITE_TAGLINE = "Recuperadora de Peças Elétricas Automotivas";

export const WHATSAPP_E164 = "5511940363315";
export const WHATSAPP_DISPLAY = "(11) 94036-3315";
export const WHATSAPP_CONTACT_NAME = "Nelson Culceag";
export const WHATSAPP_PREFILL =
  "Olá, Nelson! Sou de uma oficina e gostaria de solicitar um orçamento de peça remanufaturada.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;

export const PHONE_DISPLAY = "(11) 3672-5333";
export const PHONE_TEL = "+551136725333";

export const EMAIL = "newreman@gmail.com";

export const ADDRESS = {
  street: "Rua Marco Aurélio, 518",
  neighborhood: "Vila Romana",
  city: "São Paulo",
  state: "SP",
  cep: "05048-000",
  full: "Rua Marco Aurélio, 518 · Vila Romana · São Paulo, SP",
};

export const MAPS_QUERY = encodeURIComponent(
  "Rua Marco Aurélio 518, Vila Romana, São Paulo, SP",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const HOURS = "Segunda a sexta · 8h às 18h";

export const WARRANTY_MONTHS = 3;

export const PRODUCTS = [
  {
    id: "partida",
    name: "Motor de Partida",
    blurb: "Remanufatura completa para partida firme e confiável.",
  },
  {
    id: "alternador",
    name: "Alternador",
    blurb: "Carga estável, componentes revisados e testados.",
  },
  {
    id: "ventoinha",
    name: "Ventoinha",
    blurb: "Recuperação de motores de ventoinha automotiva.",
  },
  {
    id: "seta",
    name: "Chave de Seta",
    blurb: "Reparo e remanufatura com encaixe preciso.",
  },
  {
    id: "limpador",
    name: "Limpador de Parabrisas",
    blurb: "Motores de limpador recuperados para o dia a dia da oficina.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Recebemos",
    body: "Sua oficina envia a peça. Identificamos modelo e condição.",
  },
  {
    step: "02",
    title: "Desmontamos e avaliamos",
    body: "Abrimos, limpamos e separamos o que dá para recuperar.",
  },
  {
    step: "03",
    title: "Recuperamos",
    body: "Trocamos o que precisa e remontamos com critério técnico.",
  },
  {
    step: "04",
    title: "Testamos e entregamos",
    body: "Bancada de teste, garantia de 3 meses e peça pronta para aplicar.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Custo que fecha a conta",
    body: "Remanufaturado com qualidade de oficina, sem o preço de peça nova.",
  },
  {
    title: "Prazo de quem vive de serviço",
    body: "Foco em devolver a peça para a sua oficina não parar o carro do cliente.",
  },
  {
    title: "Suporte técnico B2B",
    body: "Fale direto com a gente no WhatsApp. Orçamento rápido, sem enrolação.",
  },
] as const;

export const PROOFS = [
  {
    label: "Garantia",
    value: `${WARRANTY_MONTHS} meses`,
  },
  {
    label: "Linha",
    value: "Elétrica automotiva",
  },
  {
    label: "Atendimento",
    value: "B2B · São Paulo",
  },
] as const;
