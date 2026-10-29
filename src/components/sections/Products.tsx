import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/site";

export function Products() {
  return (
    <section id="pecas" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-reman">
        <Reveal>
          <SectionHeading
            eyebrow="Peças"
            title="O que a gente recupera"
            description="As peças elétricas que a oficina mais precisa. Sem lista interminável: o essencial, bem feito."
          />
        </Reveal>

        <ul className="mt-12 border border-hairline">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} as="li" delay={index * 0.03}>
              <article
                className={`group grid gap-3 px-5 py-5 transition-colors hover:bg-steel-panel/70 md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:px-7 md:py-6 ${
                  index < PRODUCTS.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-chalk md:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {product.blurb}
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-faint transition-colors group-hover:text-copper"
                >
                  Pedir orçamento
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
