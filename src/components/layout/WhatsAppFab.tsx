"use client";

import { WHATSAPP_CONTACT_NAME, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp com ${WHATSAPP_CONTACT_NAME}`}
      className="signal-pulse fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center bg-signal text-steel shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 hover:bg-signal-deep md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
