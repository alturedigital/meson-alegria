import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CORPUS_2026 } from "@/lib/data/corpus";
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
    title: dict.corpus.title,
    description: dict.corpus.intro,
  };
}

export default async function CorpusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero — poster on the right, copy on the left */}
      <section className="bg-cream-light pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden relative">
        <Motivo
          size="xl"
          opacity={0.06}
          rotate={18}
          className="absolute -top-10 -right-10 pointer-events-none"
        />
        <div className="container-fluid relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Motivo size="xs" opacity={0.65} />
                <p className="font-mono text-[10.5px] uppercase tracking-cenefa text-granada-700/80">
                  {dict.corpus.eyebrow}
                </p>
              </div>
              <h1 className="display text-[clamp(2.6rem,6.8vw,5.8rem)] text-ink-900 leading-[0.95]">
                {dict.corpus.title}
              </h1>
              <p className="mt-8 max-w-[52ch] text-ink-700 text-[16px] leading-[1.7]">
                {dict.corpus.intro}
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-[480px]">
                <Fact label="Dónde" value="Recinto Ferial Almanjáyar · Caseta Alegría" />
                <Fact label="Cuándo" value="Lunes 1 – Sábado 6 · Corpus Granada 2026" />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="tel:+34958222794" className="btn-ember">
                  Reservar mesa
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
                <a
                  href="https://maps.google.com/?q=Recinto+Ferial+Almanjáyar+Granada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Poster */}
            <div className="relative aspect-[4/5] max-w-[480px] mx-auto w-full overflow-hidden rounded-card shadow-card bg-cream">
              <Image
                src="/images/corpus-2026.jpg"
                alt="Caseta Alegría — Corpus Granada 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-cream py-20 md:py-32 relative overflow-hidden">
        <div className="container-fluid">
          <div className="max-w-[44ch] mb-16 md:mb-20">
            <p className="eyebrow text-granada-700 mb-6">Programa</p>
            <h2 className="display italic text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink-900 leading-[1.05]">
              Seis días con la mejor música y el mejor producto
            </h2>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px]">
            {CORPUS_2026.map((day, i) => (
              <li
                key={day.day}
                className="rounded-card border border-granada-700/15 bg-cream-light/90 px-6 md:px-7 py-7 shadow-soft"
              >
                <header className="flex items-baseline justify-between gap-4 mb-5 pb-3 border-b border-granada-700/15">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/65 mb-1">
                      Día {i + 1}
                    </p>
                    <h3 className="display italic text-[clamp(1.6rem,2.4vw,2.1rem)] text-granada-700 leading-tight">
                      {day.weekday} {day.day}
                    </h3>
                  </div>
                  <Motivo size="xs" opacity={0.5} />
                </header>
                <ul className="space-y-2.5">
                  {day.events.map((ev, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 font-display text-[14.5px] leading-snug text-ink-900"
                    >
                      <span className="text-granada-700/55">·</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream-light py-20 md:py-28 relative">
        <div className="container-fluid">
          <div className="max-w-[760px] mx-auto text-center">
            <Motivo size="sm" opacity={0.7} className="mx-auto mb-8" />
            <p className="display italic text-[clamp(1.6rem,2.6vw,2.4rem)] text-ink-900 leading-[1.3]">
              {dict.corpus.closing}
            </p>
            <div className="mt-10 inline-flex items-center gap-4">
              <a href="tel:+34958222794" className="btn-ember">
                Reservar mesa en el Corpus
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-cenefa text-granada-700/70 mb-2">
        {label}
      </p>
      <p className="font-display text-[15.5px] leading-snug text-ink-900">
        {value}
      </p>
    </div>
  );
}
