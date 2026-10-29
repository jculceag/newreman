import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_URL,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-navy-deep py-10">
      <div className="container-reman flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.14em] text-cream uppercase">
            {SITE_NAME}
          </p>
          <p className="mt-1 max-w-sm text-sm text-muted">{SITE_TAGLINE}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted md:items-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            WhatsApp orçamento
          </a>
          <a href={`tel:${PHONE_TEL}`} className="hover:text-cream">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-cream">
            {EMAIL}
          </a>
          <p className="mt-3 text-xs text-faint">
            © {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
