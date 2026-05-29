"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/types/i18n";
import type { Locale } from "@/lib/i18n/config";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const pathname = usePathname();

  // Home page renders its own <Closer />; suppress global footer there to
  // avoid duplicating legal/address/socials.
  if (pathname === `/${lang}`) return null;

  return (
    <footer className="relative bg-ink-900 text-cream paper-grain">
      <div className="container-fluid py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr,1fr,1fr,1fr]">
          <div>
            <Link href={`/${lang}`} className="inline-flex items-center gap-3">
              <Image
                src="/logo/logo-white.svg"
                alt="Mesón Alegría"
                width={160}
                height={56}
                className="h-12 w-auto opacity-95"
              />
            </Link>
            <p className="mt-6 font-display italic text-2xl text-cream leading-snug max-w-[28ch]">
              {dict.story.closing.title}
            </p>
            <p className="mt-3 text-cream-200/55 text-[13.5px] leading-relaxed max-w-[36ch]">
              {dict.meta.description}
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-granada-200 mb-4">{dict.footer.visit}</h4>
            <p className="text-cream text-[14px] leading-relaxed">
              {dict.visit.address}
              <br />
              <span className="text-cream-200/60">
                {dict.visit.weekdays}
                <br />
                {dict.visit.saturday}
                <br />
                {dict.visit.closedDay}
              </span>
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-granada-200 mb-4">{dict.footer.reserve}</h4>
            <a
              href="tel:+34958222794"
              className="text-cream-light font-display italic text-2xl hover:text-granada-200 transition-colors"
            >
              958 222 794
            </a>
            <p className="mt-3 text-cream-200/55 text-[13px]">
              {dict.visit.phoneLabel}
            </p>
            <a
              href={`/${lang}/visita`}
              className="mt-5 inline-flex items-center gap-2 nav-link text-granada-200 hover:text-cream-light"
            >
              {dict.visit.directions}
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

          <div>
            <h4 className="eyebrow text-granada-200 mb-4">
              {dict.footer.follow}
            </h4>
            <ul className="space-y-2.5 text-cream text-[14px]">
              <li>
                <a
                  href="https://instagram.com/mesonalegria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-granada-200 transition-colors ink-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/mesonalegria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-granada-200 transition-colors ink-underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-granada-200 transition-colors ink-underline"
                >
                  Tripadvisor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-14 h-px w-full bg-granada-200/20" aria-hidden />

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[11.5px] uppercase tracking-cenefa text-cream-200/55 font-mono">
          <span>{dict.footer.legal}</span>
          <span>{dict.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
