"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const NAV = [
  { href: "#pecas", label: "Peças" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-hairline bg-steel/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-reman flex h-[4.25rem] items-center justify-between gap-4">
        <a href="#topo" className="group flex items-center gap-3">
          <Image
            src="/brand/new-reman-logo.webp"
            alt=""
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-chalk uppercase transition-colors group-hover:text-copper">
            {SITE_NAME}
          </span>
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-faint transition-colors hover:text-chalk"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal px-3.5 py-2 text-sm font-semibold text-steel transition-colors hover:bg-signal-deep"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Orçamento</span>
        </a>
      </div>
    </header>
  );
}
