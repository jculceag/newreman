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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-navy-deep/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-reman flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#topo" className="flex items-center gap-3">
          <Image
            src="/brand/new-reman-logo.png"
            alt={SITE_NAME}
            width={44}
            height={44}
            className="h-10 w-10 rounded-full md:h-11 md:w-11"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-cream uppercase md:text-base">
            {SITE_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-3.5 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-whatsapp-deep md:px-4"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Orçamento</span>
        </a>
      </div>
    </header>
  );
}
