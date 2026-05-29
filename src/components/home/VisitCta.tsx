"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/types/i18n";

/**
 * VISIT — closing band. Big address, hours, phone, map CTA.
 * Background: 60-aniversario photo, heavy ink wash, ember accents.
 */
export default function VisitCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-cream-light">
      {/* Backdrop image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/60-aniversario.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority={false}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,20,16,0.92) 0%, rgba(26,20,16,0.78) 45%, rgba(26,20,16,0.95) 100%)",
          }}
        />
      </div>

      <div className="container-fluid relative py-28 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <p className="eyebrow text-granada-200 mb-7">{dict.visit.eyebrow}</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="display-italic text-[clamp(2.8rem,6vw,5.4rem)] leading-[1.02] max-w-[14ch] text-cream-light"
            >
              {dict.visit.title}
            </motion.h2>
            <p className="mt-7 max-w-[44ch] text-cream/70 text-[15.5px] leading-[1.7]">
              {dict.visit.lede}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
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
              <a
                href="https://maps.google.com/?q=Mesón+Alegría+Granada"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                {dict.visit.directions}
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 text-cream">
            <div>
              <dt className="eyebrow text-granada-200 mb-3">
                {dict.visit.addressLabel}
              </dt>
              <dd className="font-display italic text-2xl leading-snug">
                {dict.visit.address}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-granada-200 mb-3">
                {dict.visit.phoneLabel}
              </dt>
              <dd>
                <a
                  href="tel:+34958222794"
                  className="font-display italic text-2xl hover:text-granada-200 transition-colors"
                >
                  {dict.visit.phone}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow text-granada-200 mb-3">
                {dict.visit.hoursLabel}
              </dt>
              <dd className="space-y-1.5 text-[15px] leading-[1.7] text-cream/85">
                <p>{dict.visit.weekdays}</p>
                <p>{dict.visit.saturday}</p>
                <p className="text-cream-200/55">{dict.visit.closedDay}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
