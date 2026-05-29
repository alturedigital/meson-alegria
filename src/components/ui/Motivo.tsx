import { cn } from "@/lib/utils/cn";

/**
 * Motivo granadino — the official Mesón Alegría brand swirl
 * (motivo-meson.svg, fill #00a376). Used as decoration and as
 * section dividers across the site.
 *
 *  <Motivo size="sm" />                 inline decoration
 *  <Motivo size="lg" opacity={0.15} />  background watermark
 *  <Motivo as="divider" />              centered divider with hairlines
 */
export default function Motivo({
  size = "md",
  opacity,
  flip = false,
  rotate = 0,
  className,
  as,
  color,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  opacity?: number;
  flip?: boolean;
  rotate?: number;
  className?: string;
  as?: "divider";
  color?: string; // CSS color, defaults to brand green
}) {
  const sizeClass = {
    xs: "w-8",
    sm: "w-12",
    md: "w-20",
    lg: "w-40",
    xl: "w-72",
  }[size];

  const mark = (
    <span
      aria-hidden
      className={cn("inline-block aspect-[189/155] shrink-0", sizeClass, className)}
      style={{
        color: color ?? "#00a376",
        opacity,
        transform: `${flip ? "scaleX(-1)" : ""} rotate(${rotate}deg)`,
      }}
    >
      <span
        className="block w-full h-full"
        style={{
          backgroundColor: "currentColor",
          WebkitMask: "url(/svg/motivo-meson.svg) center / contain no-repeat",
          mask: "url(/svg/motivo-meson.svg) center / contain no-repeat",
        }}
      />
    </span>
  );

  if (as === "divider") {
    return (
      <div
        className="flex items-center gap-6 md:gap-8 w-full"
        aria-hidden
      >
        <span className="flex-1 h-px bg-granada-700/20" />
        {mark}
        <span className="flex-1 h-px bg-granada-700/20" />
      </div>
    );
  }

  return mark;
}
