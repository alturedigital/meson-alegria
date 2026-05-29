import { cn } from "@/lib/utils/cn";

export default function Marquee({
  items,
  className,
  separator = "·",
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const sequence = [...items, ...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap border-y border-granada-700/15 bg-cream-light py-5",
        className
      )}
      aria-hidden
    >
      <div className="marquee">
        {sequence.map((s, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-display italic text-[clamp(1.5rem,2.6vw,2.4rem)] text-ink-900/90 tracking-ultratight">
              {s}
            </span>
            <span className="font-mono text-granada-700/45">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
