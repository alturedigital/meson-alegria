"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";

export default function LanguageSwitcher({
  current,
  variant = "light",
}: {
  current: Locale;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function switchTo(next: Locale) {
    if (next === current) return setOpen(false);
    const segments = pathname.split("/");
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const url = segments.join("/") || `/${next}`;
    startTransition(() => router.push(url));
    setOpen(false);
  }

  const isDark = variant === "dark";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 nav-link transition-colors backdrop-blur",
          isDark
            ? "border-cream-light/30 bg-cream-light/10 text-cream-light hover:bg-cream-light/20"
            : "border-granada-700/25 bg-cream/60 text-granada-700 hover:bg-granada-50"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${localeNames[current].native}`}
      >
        <span className="font-mono text-[10px] opacity-70">
          {localeNames[current].flag}
        </span>
        <span>{localeNames[current].native}</span>
        <svg
          width="9"
          height="9"
          viewBox="0 0 10 10"
          aria-hidden
          className={cn(
            "transition-transform",
            open && "rotate-180"
          )}
        >
          <path
            d="M2 3.5 L5 6.5 L8 3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-granada-700/20 bg-cream-light/95 p-1.5 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(12,90,63,0.25)]"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => switchTo(l)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left nav-link transition-colors",
                    l === current
                      ? "bg-granada-50 text-granada-700"
                      : "text-ink-800/70 hover:bg-cream hover:text-granada-700"
                  )}
                >
                  <span>{localeNames[l].native}</span>
                  <span className="font-mono text-[10px] opacity-50">
                    {localeNames[l].flag}
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
