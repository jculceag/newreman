import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/site";

export function ForWorkshops() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-reman">
        <Reveal>
          <SectionHeading
            eyebrow="Pra oficina"
            title="Parceiro de bancada, não só fornecedor"
            description="Quem vive de serviço precisa de peça boa, preço que fecha e resposta rápida. É nisso que a NEW REMAN trabalha."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} as="li" delay={index * 0.05}>
              <article className="panel h-full p-6 md:p-7">
                <div className="copper-edge mb-5 h-px w-16" aria-hidden />
                <p className="stamp text-faint">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-wide text-chalk uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {benefit.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
