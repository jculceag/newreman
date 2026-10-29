export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="metal-grid absolute inset-0 opacity-70" />
      <div className="absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-navy-mid/50 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-[22rem] w-[22rem] rounded-full bg-copper/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-copper/40 to-transparent opacity-60" />
    </div>
  );
}
