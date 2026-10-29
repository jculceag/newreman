import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/site";

export function Products() {
  return (
    <section id="pecas" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-reman">
        <Reveal>
          <SectionHeading
            eyebrow="Linha elétrica"
            title="O que a oficina manda recuperar"
            description="Sem catálogo infinito. As peças que entram no fluxo real da bancada, remanufaturadas com teste e garantia."
          />
        </Reveal>

        <ul className="mt-12 border border-hairline">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} as="li" delay={index * 0.03}>
              <article
                className={`group grid gap-3 px-5 py-5 transition-colors hover:bg-steel-panel/70 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-6 md:px-7 md:py-6 ${
                  index < PRODUCTS.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <p className="stamp text-copper">{product.code}</p>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-wide text-chalk uppercase md:text-2xl">
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
                  className="stamp inline-flex w-fit items-center gap-2 text-faint transition-colors group-hover:text-copper"
                >
                  Orçar
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
