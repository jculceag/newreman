import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_CONTACT_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 pb-24 md:pb-32">
      <div className="container-reman">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-copper uppercase">
            Contato
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream uppercase md:text-4xl">
            Fale com a NEW REMAN
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Orçamento rápido no WhatsApp com {WHATSAPP_CONTACT_NAME}. Se
            preferir, ligue ou mande e-mail.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-5 rounded-2xl border border-hairline bg-navy/45 p-6 md:p-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl bg-whatsapp/10 p-4 transition-colors hover:bg-whatsapp/15"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp text-navy-deep">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-cream">
                    WhatsApp · {WHATSAPP_CONTACT_NAME}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
              </a>

              <div className="space-y-3 text-sm">
                <p>
                  <span className="block text-xs tracking-[0.18em] text-faint uppercase">
                    Telefone
                  </span>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 inline-block text-cream hover:text-copper"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  <span className="block text-xs tracking-[0.18em] text-faint uppercase">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 inline-block text-cream hover:text-copper"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span className="block text-xs tracking-[0.18em] text-faint uppercase">
                    Endereço
                  </span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-cream hover:text-copper"
                  >
                    {ADDRESS.full}
                  </a>
                </p>
                <p>
                  <span className="block text-xs tracking-[0.18em] text-faint uppercase">
                    Horário
                  </span>
                  <span className="mt-1 block text-cream">{HOURS}</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-navy/30">
              <iframe
                title="Mapa NEW REMAN · Rua Marco Aurélio, 518"
                src={MAPS_EMBED_URL}
                className="h-[320px] w-full grayscale-[20%] contrast-[1.05] md:h-full md:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
