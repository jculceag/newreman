/** Contatos e conteúdo da NEW REMAN. */

export const SITE_NAME = "NEW REMAN";
export const SITE_TAGLINE = "Recuperadora de Peças Elétricas Automotivas";

export const WHATSAPP_E164 = "5511940363315";
export const WHATSAPP_DISPLAY = "(11) 94036-3315";
export const WHATSAPP_CONTACT_NAME = "Nelson Culceag";
export const WHATSAPP_PREFILL =
  "Oi Nelson! Sou de uma oficina e queria orçamento de peça recuperada.";

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

export const HOURS = "Segunda a sexta, das 8h às 18h";

export const WARRANTY_MONTHS = 3;

export const PRODUCTS = [
  {
    id: "partida",
    name: "Motor de Partida",
    blurb: "A gente abre, troca o que precisa e testa pra pegar de primeira.",
  },
  {
    id: "alternador",
    name: "Alternador",
    blurb: "Revisa o que gasta, monta de novo e entrega carregando direito.",
  },
  {
    id: "ventoinha",
    name: "Ventoinha",
    blurb: "Recupera o motor pra rodar quieto e sem surpresa no serviço.",
  },
  {
    id: "seta",
    name: "Chave de Seta",
    blurb: "Conserta o retorno e os contatos pra funcionar como deve.",
  },
  {
    id: "limpador",
    name: "Limpador de Parabrisas",
    blurb: "Motor recuperado pra você não perder tempo com o carro do cliente.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Você manda a peça",
    body: "A gente recebe, confere o modelo e vê o estado dela.",
  },
  {
    step: "2",
    title: "Abrimos e olhamos tudo",
    body: "Limpamos, separamos o que presta e o que tem que trocar.",
  },
  {
    step: "3",
    title: "Recuperamos",
    body: "Montamos de novo com cuidado. Sem gambiarra.",
  },
  {
    step: "4",
    title: "Testamos e devolvemos",
    body: "Testamos na bancada, colocamos 3 meses de garantia e você aplica.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Preço que fecha",
    body: "Mais em conta que peça nova, com qualidade pra você confiar no serviço.",
  },
  {
    title: "Prazo de quem tem carro na rampa",
    body: "A gente sabe que o cliente não pode esperar. Trabalhamos pra te devolver rápido.",
  },
  {
    title: "Fala direto no WhatsApp",
    body: "Chama o Nelson, manda foto da peça e já pede o orçamento. Sem enrolação.",
  },
] as const;

export const PROOFS = [
  {
    label: "Garantia",
    value: `${WARRANTY_MONTHS} meses`,
    hint: "na peça recuperada",
  },
  {
    label: "O que a gente faz",
    value: "Elétrica",
    hint: "partida, alternador e mais",
  },
  {
    label: "Pra quem",
    value: "Oficinas",
    hint: "e auto elétricas",
  },
  {
    label: "Onde",
    value: "São Paulo",
    hint: "Vila Romana",
  },
] as const;
