import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { HeroBackdrop } from "@/components/visuals/HeroBackdrop";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
  WARRANTY_MONTHS,
  WHATSAPP_URL,
} from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <HeroBackdrop />

      <div className="container-reman relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="relative">
          <Reveal immediate>
            <p className="text-sm font-medium text-copper">
              Para oficinas e auto elétricas
            </p>
          </Reveal>

          <Reveal immediate delay={0.05}>
            <p className="mt-5 text-sm tracking-wide text-alloy uppercase">
              {SITE_TAGLINE}
            </p>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-2 font-display text-[clamp(3rem,8.5vw,5.8rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-chalk">
              {SITE_NAME}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.14}>
            <p className="mt-3 max-w-xl text-base font-medium text-alloy md:text-lg">
              Recuperação de motor de partida, alternador e peças elétricas em
              São Paulo
            </p>
          </Reveal>

          <Reveal immediate delay={0.18}>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              A gente recupera peça elétrica pra oficina: testa, coloca garantia
              de {WARRANTY_MONTHS} meses e te devolve pronta pra aplicar.
              Orçamento rápido no WhatsApp.
            </p>
          </Reveal>

          <Reveal immediate delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3.5 text-sm font-semibold text-steel transition-colors hover:bg-signal-deep"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-md border border-hairline bg-steel-raised/60 px-5 py-3.5 text-sm font-medium text-chalk transition-colors hover:border-copper/50 hover:text-copper"
              >
                Ligar {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={0.28}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {[
                { dt: "Garantia", dd: `${WARRANTY_MONTHS} meses` },
                { dt: "Fale com a gente", dd: "WhatsApp" },
                { dt: "Onde", dd: "São Paulo" },
              ].map((item) => (
                <div key={item.dt}>
                  <dt className="text-xs text-faint">{item.dt}</dt>
                  <dd className="mt-1 text-sm font-semibold text-chalk md:text-base">
                    {item.dd}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal
          immediate
          delay={0.12}
          className="relative mx-auto w-full max-w-[440px] lg:mr-0 lg:ml-auto"
        >
          <div className="relative aspect-square">
            <div
              className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(224,138,74,0.22)_0%,transparent_70%)] blur-2xl"
              aria-hidden
            />
            <Image
              src="/brand/new-reman-logo.webp"
              alt="NEW REMAN: recuperação de peças elétricas automotivas em São Paulo"
              fill
              priority
              sizes="(max-width: 768px) 70vw, 440px"
              className="relative z-10 object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
