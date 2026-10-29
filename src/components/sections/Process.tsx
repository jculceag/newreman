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
            eyebrow="Como funciona"
            title="Da peça usada até a peça pronta"
            description="Simples: você manda, a gente recupera, testa e devolve com garantia."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 0.05}>
              <article className="panel relative h-full p-6">
                <span className="font-display text-3xl font-semibold text-copper">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-chalk">
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
          <div className="mt-10 flex flex-col gap-3 border border-copper/40 bg-gradient-to-r from-copper/15 via-copper/5 to-transparent px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-copper">Garantia</p>
              <p className="mt-1 font-display text-2xl font-semibold text-chalk">
                {WARRANTY_MONTHS} meses na peça recuperada
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Assim você fecha o serviço do cliente sem ficar na mão.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
