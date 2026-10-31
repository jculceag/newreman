import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
          <SectionHeading
            eyebrow="Contato"
            title="Chama a gente"
            description={`Fala com o ${WHATSAPP_CONTACT_NAME} no WhatsApp. Se preferir, liga, manda e-mail ou passa na Vila Romana.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="panel flex h-full flex-col gap-5 p-6 md:p-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-md border border-signal/30 bg-signal/10 p-4 transition-colors hover:bg-signal/15"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-signal text-steel">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-signal">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-chalk">
                    {WHATSAPP_CONTACT_NAME}
                  </span>
                  <span className="block text-sm text-muted">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="panel-inset rounded-md p-4">
                  <p className="text-xs text-faint">Telefone</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-2 block text-chalk hover:text-copper"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="panel-inset rounded-md p-4">
                  <p className="text-xs text-faint">E-mail</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 block break-all text-chalk hover:text-copper"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div className="panel-inset rounded-md p-4 sm:col-span-2">
                  <p className="text-xs text-faint">Endereço</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-chalk hover:text-copper"
                  >
                    {ADDRESS.full}
                  </a>
                </div>
                <div className="panel-inset rounded-md p-4 sm:col-span-2">
                  <p className="text-xs text-faint">Horário</p>
                  <p className="mt-2 text-chalk">{HOURS}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-md border border-hairline bg-steel-panel">
              <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
                <p className="text-sm text-faint">Mapa · Vila Romana</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-copper hover:text-copper-hot"
                >
                  Abrir no Maps
                </a>
              </div>
              <iframe
                title="Mapa NEW REMAN · Rua Marco Aurélio, 518, Vila Romana, São Paulo"
                src={MAPS_EMBED_URL}
                className="h-[340px] w-full contrast-[1.05] grayscale-[30%] md:h-[420px]"
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
