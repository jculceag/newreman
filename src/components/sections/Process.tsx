import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS, WARRANTY_MONTHS } from "@/lib/site";

export function Process() {
  return (
    <section
      id="processo"
      className="scroll-mt-24 border-y border-hairline bg-steel-raised/50 py-20 md:py-28"
    >
      <div className="container-reman">
        <Reveal>
          <SectionHeading
            eyebrow="Processo reman"
            title="Da peça usada à peça pronta"
            description="Fluxo de remanufatura pensado pra oficina: diagnóstico claro, recuperação técnica e teste antes de devolver."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div
            className="absolute top-[2.15rem] right-8 left-8 hidden h-px bg-gradient-to-r from-copper/0 via-copper/50 to-copper/0 xl:block"
            aria-hidden
          />
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 0.05}>
              <article className="panel relative h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-3xl font-semibold tracking-tight text-copper">
                    {step.step}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full border border-copper bg-copper/30" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-wide text-chalk uppercase">
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
          <div className="mt-10 flex flex-col gap-4 border border-copper/40 bg-gradient-to-r from-copper/15 via-copper/5 to-transparent px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="stamp text-copper">Garantia padrão</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-chalk uppercase">
                {WARRANTY_MONTHS} meses na peça remanufaturada
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Segurança pra oficina fechar o serviço sem medo de retorno.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
