import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/lib/site";

export function Products() {
  return (
    <section id="pecas" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-reman">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-copper uppercase">
            Linha elétrica
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream uppercase md:text-4xl">
            Peças que a oficina pede todo dia
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Remanufatura e recuperação com foco no que mantém o serviço
            andando. Sem catálogo infinito: o essencial, bem feito.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} as="li" delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-hairline bg-navy/40 p-6 transition-colors hover:border-copper/45 hover:bg-navy-mid/35">
                <div className="mb-4 h-1 w-10 rounded-full bg-copper/80 transition-all group-hover:w-14" />
                <h3 className="font-display text-xl font-semibold tracking-wide text-cream">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
