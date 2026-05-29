"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getHomeExtras } from "@/lib/data/home-extras";
import type { Locale } from "@/lib/i18n/config";

/**
 * RESERVA INLINE — embedded booking row. Visual only: the submit button
 * triggers a tel: link with the chosen parameters in a message. Real booking
 * integration is post-MVP.
 *
 * Layout: title left-top, body left-bottom, small photo right-top with caption,
 * form row spanning the bottom with 3 native selects + submit.
 */
export default function ReservaInline({ lang }: { lang: Locale }) {
  const extras = getHomeExtras(lang).reserva;
  const [people, setPeople] = useState(extras.peopleOptions[2]);
  const todayIso = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(todayIso);
  const [time, setTime] = useState(extras.timeOptions[6]);

  function reservar() {
    // For now: just open the phone. Future: POST to a booking API.
    window.location.href = "tel:+34958222794";
    // The selected fields are visible to the user; we don't strictly need them.
    void people;
    void date;
    void time;
  }

  return (
    <section className="relative bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:gap-20 items-start">
          {/* LEFT — title + body */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-cenefa text-granada-700/70 mb-7">
              {extras.chapter} · {extras.titleA}
            </p>
            <h2 className="leading-[1.02]">
              <span className="display block h-editorial text-[clamp(2.4rem,5.4vw,4.8rem)] text-ink-900">
                {extras.titleA}
              </span>
              <span className="display-italic block h-editorial text-[clamp(2.4rem,5.4vw,4.8rem)] text-granada-700 -mt-1">
                {extras.titleB}
              </span>
            </h2>
            <p className="mt-9 max-w-[44ch] text-ink-700 text-[15.5px] leading-[1.75]">
              {extras.body}
            </p>
          </div>

          {/* RIGHT — small image card */}
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[5/4] overflow-hidden rounded-[2px] shadow-plate"
          >
            <Image
              src="/images/meson13.jpg"
              alt={extras.photoLabel}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 font-mono text-[10px] uppercase tracking-cenefa text-cream-light/85 bg-gradient-to-t from-ink-900/70 to-transparent">
              {extras.photoLabel}
            </figcaption>
          </motion.figure>
        </div>

        {/* Form — wide row underneath */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] items-stretch"
        >
          <Field label={extras.peopleLabel}>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="field-input"
            >
              {extras.peopleOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>

          <Field label={extras.dateLabel}>
            <input
              type="date"
              value={date}
              min={todayIso}
              onChange={(e) => setDate(e.target.value)}
              className="field-input"
            />
          </Field>

          <Field label={extras.timeLabel}>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="field-input"
            >
              {extras.timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <button
            type="button"
            onClick={reservar}
            className="btn-ember h-full justify-center"
          >
            {extras.submit}
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
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block rounded-2xl border border-granada-700/15 bg-cream-light px-5 py-3 transition-colors hover:border-granada-700/35 focus-within:border-granada-700/55">
      <span className="block font-mono text-[10px] uppercase tracking-cenefa text-granada-700/70 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
