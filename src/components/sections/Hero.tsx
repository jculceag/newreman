import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { HeroBackdrop } from "@/components/visuals/HeroBackdrop";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_URL,
} from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20"
    >
      <HeroBackdrop />

      <div className="container-reman relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal immediate>
            <p className="text-xs font-semibold tracking-[0.28em] text-copper uppercase">
              {SITE_TAGLINE}
            </p>
          </Reveal>

          <Reveal immediate delay={0.06}>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,4.75rem)] leading-[0.95] font-semibold tracking-tight text-cream uppercase">
              {SITE_NAME}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.12}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Peças elétricas remanufaturadas para a sua oficina. Qualidade de
              bancada, garantia de 3 meses e orçamento no WhatsApp.
            </p>
          </Reveal>

          <Reveal immediate delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-whatsapp-deep"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center rounded-full border border-hairline px-5 py-3 text-sm font-medium text-cream transition-colors hover:border-copper/50 hover:text-copper"
              >
                Ligar {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={0.24}>
            <div className="copper-rule mt-10" />
            <p className="mt-4 text-sm text-faint">
              Atendimento B2B para oficinas e auto elétricas em São Paulo.
            </p>
          </Reveal>
        </div>

        <Reveal immediate delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-[8%] rounded-full bg-copper/10 blur-2xl" />
            <Image
              src="/brand/new-reman-logo.png"
              alt="Mascote NEW REMAN, peça elétrica remanufaturada com polegar pra cima"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
