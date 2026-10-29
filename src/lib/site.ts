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
    code: "MP-01",
    name: "Motor de Partida",
    blurb: "Desmontagem, troca de componentes críticos e teste de torque.",
  },
  {
    id: "alternador",
    code: "AL-02",
    name: "Alternador",
    blurb: "Regulador, escovas e rolamentos revisados. Carga estável na bancada.",
  },
  {
    id: "ventoinha",
    code: "VT-03",
    name: "Ventoinha",
    blurb: "Recuperação de motor de ventoinha com atenção a ruído e engate.",
  },
  {
    id: "seta",
    code: "CS-04",
    name: "Chave de Seta",
    blurb: "Contatos e mecanismos recuperados para retorno firme.",
  },
  {
    id: "limpador",
    code: "LP-05",
    name: "Limpador de Parabrisas",
    blurb: "Motor de limpador remanufaturado para o fluxo diário da oficina.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Recebimento",
    body: "A peça chega da oficina. Identificamos aplicação, modelo e condição.",
  },
  {
    step: "02",
    title: "Diagnóstico",
    body: "Abrimos, limpamos e separamos o que vale recuperar do que precisa trocar.",
  },
  {
    step: "03",
    title: "Remanufatura",
    body: "Montagem com critério técnico. Sem gambiarra, sem peça no escuro.",
  },
  {
    step: "04",
    title: "Teste e entrega",
    body: "Bancada de teste, garantia de 3 meses e peça pronta para aplicar.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Preço de reman, padrão de bancada",
    body: "Custo que a oficina consegue vender. Qualidade que não volta amanhã.",
  },
  {
    title: "Prazo pensado no serviço",
    body: "O carro do seu cliente não pode esperar. Priorizamos o fluxo da oficina.",
  },
  {
    title: "Canal direto B2B",
    body: "WhatsApp com o Nelson. Orçamento rápido, sem formulário e sem enrolação.",
  },
] as const;

export const PROOFS = [
  {
    label: "Garantia",
    value: `${WARRANTY_MONTHS} meses`,
    hint: "padrão na reman",
  },
  {
    label: "Foco",
    value: "Elétrica",
    hint: "partida · alternador · mais",
  },
  {
    label: "Canal",
    value: "B2B",
    hint: "oficinas e auto elétricas",
  },
  {
    label: "Base",
    value: "SP",
    hint: "Vila Romana · Lapa",
  },
] as const;
