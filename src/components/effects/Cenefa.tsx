import { cn } from "@/lib/utils/cn";

/**
 * Andalusian cenefa divider with the wood baseboard underneath.
 * Used between major sections to evoke the whitewashed tavern wall.
 */
export default function Cenefa({
  className,
  withBaseboard = true,
  flip = false,
}: {
  className?: string;
  withBaseboard?: boolean;
  flip?: boolean;
}) {
  return (
    <div className={cn("relative w-full", className)} aria-hidden>
      <div
        className={cn(
          "h-12 bg-cream",
          flip && "scale-y-[-1]"
        )}
        style={{
          backgroundImage: "url('/svg/cenefa.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 48px",
          backgroundPosition: "center",
        }}
      />
      {withBaseboard && (
        <div
          className="h-3.5"
          style={{
            background:
              "linear-gradient(180deg, #8a5c35 0%, #6b3f1d 60%, #4f2d12 100%)",
            boxShadow:
              "0 -1px 0 rgba(0,0,0,0.2) inset, 0 1px 0 rgba(255,255,255,0.15) inset",
          }}
        />
      )}
    </div>
  );
}
