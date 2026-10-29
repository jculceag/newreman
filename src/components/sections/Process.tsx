import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS, WARRANTY_MONTHS } from "@/lib/site";

export function Process() {
  return (
    <section
      id="processo"
      className="scroll-mt-24 border-y border-hairline bg-navy/35 py-20 md:py-28"
    >
      <div className="container-reman">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-copper uppercase">
            Processo reman
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream uppercase md:text-4xl">
            Da bancada até a garantia
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Cada peça passa por avaliação, recuperação e teste. Você recebe
            pronta para aplicar, com garantia de {WARRANTY_MONTHS} meses.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-hairline bg-navy-deep/50 p-5">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-copper">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.12}>
          <div className="mt-10 rounded-2xl border border-copper/35 bg-gradient-to-r from-copper/15 to-transparent px-6 py-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="font-display text-xl font-semibold tracking-wide text-cream uppercase">
                Garantia padrão de {WARRANTY_MONTHS} meses
              </p>
              <p className="mt-1 text-sm text-muted">
                Segurança pra oficina fechar o serviço com tranquilidade.
              </p>
            </div>
            <p className="mt-3 text-sm font-medium text-copper md:mt-0">
              Qualidade de reman · confiança B2B
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
