import { Reveal } from "@/components/ui/Reveal";
import { BENEFITS } from "@/lib/site";

export function ForWorkshops() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-reman">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-copper uppercase">
            Para oficinas
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream uppercase md:text-4xl">
            Feito pra quem precisa de peça boa sem travar o fluxo
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} as="li" delay={index * 0.05}>
              <article>
                <div className="copper-rule mb-4" />
                <h3 className="font-display text-xl font-semibold text-cream">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
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
