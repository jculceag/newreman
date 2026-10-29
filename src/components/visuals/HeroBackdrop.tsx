export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-steel" />
      <div className="diag-hatch absolute inset-0 opacity-80" />
      <div className="metal-rail absolute inset-0 opacity-60" />

      <div className="absolute top-[-20%] right-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(224,138,74,0.18)_0%,transparent_62%)]" />
      <div className="absolute bottom-[-30%] left-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(42,53,69,0.9)_0%,transparent_65%)]" />

      <div className="absolute inset-y-0 left-[42%] hidden w-px bg-gradient-to-b from-transparent via-copper/35 to-transparent lg:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-steel to-transparent" />

      <div className="scan-line absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-copper/10 to-transparent" />
    </div>
  );
}
