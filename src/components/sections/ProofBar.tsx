import { Reveal } from "@/components/ui/Reveal";
import { PROOFS } from "@/lib/site";

export function ProofBar() {
  return (
    <section className="border-y border-hairline bg-navy/60 py-8">
      <div className="container-reman grid gap-6 sm:grid-cols-3">
        {PROOFS.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <div className="text-center sm:text-left">
              <p className="text-xs tracking-[0.22em] text-copper uppercase">
                {item.label}
              </p>
              <p className="mt-1 font-display text-xl font-semibold tracking-wide text-cream md:text-2xl">
                {item.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
