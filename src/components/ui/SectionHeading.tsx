type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-copper" aria-hidden />
        <p className="stamp text-copper">{eyebrow}</p>
      </div>
      <h2 className="mt-4 font-display text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.05] font-semibold tracking-tight text-chalk uppercase">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
