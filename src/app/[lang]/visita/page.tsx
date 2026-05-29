import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Motivo from "@/components/ui/Motivo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.nav.visit,
    description: dict.visit.lede,
  };
}

export default async function VisitaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero — editorial */}
      <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="container-fluid">
          <div className="flex items-center gap-3 mb-5">
            <Motivo size="xs" opacity={0.65} />
            <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
              {dict.visit.eyebrow}
            </p>
          </div>
          <h1 className="display text-[clamp(2.6rem,6.4vw,5.4rem)] text-ink-900 leading-[0.95] max-w-[18ch]">
            {dict.visit.title}
          </h1>
          <p className="mt-8 max-w-[58ch] text-ink-700 text-[16px] leading-[1.7]">
            {dict.visit.lede}
          </p>
        </div>
      </section>

      {/* Two-column: map left, info right */}
      <section className="bg-cream-light pt-8 md:pt-12 pb-20 md:pb-24">
        <div className="container-fluid">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:gap-16">
            {/* Map */}
            <div className="relative aspect-[5/4] md:aspect-[4/3] w-full overflow-hidden rounded-card shadow-card">
              <iframe
                title="Mesón Alegría — C/ Moras 4, Granada"
                src="https://www.google.com/maps?q=Mes%C3%B3n+Alegr%C3%ADa,+Calle+de+las+Moras,+4,+18009+Granada&z=17&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="space-y-10">
              <Block label={dict.visit.addressLabel}>
                <p className="font-display text-[clamp(1.4rem,2vw,1.8rem)] text-ink-900 leading-snug">
                  C/ Moras, 4
                  <br />
                  18009 Granada
                </p>
                <a
                  href="https://maps.google.com/?q=Mesón+Alegría+Granada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700 hover:text-granada-800 ink-underline"
                >
                  {dict.visit.directions}
                  <span aria-hidden>→</span>
                </a>
              </Block>

              <Block label={dict.visit.phoneLabel}>
                <a
                  href="tel:+34958222794"
                  className="font-display text-[clamp(1.5rem,2.2vw,2rem)] text-granada-700 hover:text-granada-800 transition-colors"
                >
                  +34 958 222 794
                </a>
              </Block>

              <Block label={dict.visit.hoursLabel}>
                <ul className="space-y-1.5 text-[15px] leading-[1.65] text-ink-800">
                  <li>{dict.visit.weekdays}</li>
                  <li>{dict.visit.saturday}</li>
                  <li className="text-ink-700/70">{dict.visit.closedDay}</li>
                </ul>
              </Block>

              <div className="pt-6 border-t border-granada-700/15">
                <a href="tel:+34958222794" className="btn-ember">
                  {dict.visit.cta}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                    <path
                      d="M2 5h6M5 2l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical info row */}
      <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
        <Motivo
          size="xl"
          opacity={0.06}
          rotate={-12}
          className="absolute -bottom-10 -left-10 pointer-events-none"
        />
        <div className="container-fluid relative">
          <div className="grid gap-10 md:grid-cols-3 max-w-[1080px]">
            <Practical
              kicker="Cómo llegar"
              title="En el centro"
              body="Junto al Teatro Isabel la Católica, a 5 minutos andando de la Catedral y de la calle Reyes Católicos. Toda la zona es peatonal o de tráfico restringido."
            />
            <Practical
              kicker="Parking"
              title="Parking San Agustín"
              body="A 200 metros (Plaza San Agustín). También Parking La Catedral en C/ Almona del Boquerón."
            />
            <Practical
              kicker="Transporte"
              title="Líneas de autobús"
              body="Líneas C1 / C2 / SN1 / N1 con parada Gran Vía o Catedral. Parada de taxi en Plaza Nueva, a 3 minutos."
            />
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-cream-light py-20 md:py-28">
        <div className="container-fluid">
          <div className="grid gap-4 md:grid-cols-3">
            {["meson13.jpg", "meson17.jpg", "60-aniversario.jpg"].map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card"
              >
                <Image
                  src={`/images/${src}`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover film-tone"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow text-granada-700 mb-3">{label}</p>
      {children}
    </div>
  );
}

function Practical({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <article>
      <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/75 mb-3">
        {kicker}
      </p>
      <h3 className="display text-[clamp(1.4rem,2vw,1.8rem)] text-ink-900 leading-tight mb-3">
        {title}
      </h3>
      <p className="text-[14.5px] leading-[1.7] text-ink-700 max-w-[36ch]">
        {body}
      </p>
    </article>
  );
}
