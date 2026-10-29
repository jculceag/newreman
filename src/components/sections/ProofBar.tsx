import { Reveal } from "@/components/ui/Reveal";
import { PROOFS } from "@/lib/site";

export function ProofBar() {
  return (
    <section className="border-y border-hairline bg-steel-raised/80">
      <div className="container-reman grid divide-y divide-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {PROOFS.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 0.04}
            className="px-5 py-7 md:px-7"
          >
            <p className="stamp text-copper">{item.label}</p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-chalk uppercase md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-faint">{item.hint}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
