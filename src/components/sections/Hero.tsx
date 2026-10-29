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
            <div className="inline-flex items-center gap-3 border border-copper/35 bg-copper/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden />
              <p className="stamp text-copper">B2B · Oficinas e auto elétricas</p>
            </div>
          </Reveal>

          <Reveal immediate delay={0.05}>
            <p className="mt-7 stamp text-alloy">{SITE_TAGLINE}</p>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-3 font-display text-[clamp(3.2rem,9vw,6.4rem)] leading-[0.88] font-semibold tracking-[-0.03em] text-chalk uppercase">
              {SITE_NAME}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Remanufatura de peças elétricas com padrão de bancada. Sua oficina
              recebe peça testada, com garantia de {WARRANTY_MONTHS} meses e
              orçamento no WhatsApp.
            </p>
          </Reveal>

          <Reveal immediate delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-signal px-5 py-3.5 text-sm font-semibold text-steel transition-colors hover:bg-signal-deep"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 border border-hairline bg-steel-raised/60 px-5 py-3.5 text-sm font-medium text-chalk transition-colors hover:border-copper/50 hover:text-copper"
              >
                Ligar {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={0.28}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden border border-hairline bg-hairline">
              {[
                { dt: "Garantia", dd: `${WARRANTY_MONTHS} meses` },
                { dt: "Canal", dd: "WhatsApp" },
                { dt: "Base", dd: "São Paulo" },
              ].map((item) => (
                <div
                  key={item.dt}
                  className="bg-steel-raised px-3 py-3 md:px-4 md:py-4"
                >
                  <dt className="stamp text-[0.58rem] text-faint">{item.dt}</dt>
                  <dd className="mt-1 font-display text-sm font-semibold tracking-wide text-chalk md:text-base">
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
              className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(224,138,74,0.28)_0%,transparent_68%)] blur-2xl"
              aria-hidden
            />
            <div
              className="absolute inset-[6%] rounded-full border border-dashed border-copper/25"
              aria-hidden
            />
            <div
              className="absolute -inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-copper/40 to-transparent"
              aria-hidden
            />
            <div
              className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-alloy/25 to-transparent"
              aria-hidden
            />

            <Image
              src="/brand/new-reman-logo.png"
              alt="Mascote NEW REMAN: peça elétrica remanufaturada com polegar pra cima"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 440px"
              className="relative z-10 object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            />

            <div className="absolute right-0 bottom-6 z-20 hidden border border-hairline bg-steel/90 px-3 py-2 backdrop-blur-sm sm:block">
              <p className="stamp text-[0.58rem] text-copper">Status</p>
              <p className="mt-0.5 text-sm font-semibold text-chalk">
                Pronto pra oficina
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
