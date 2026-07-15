import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "ghost";
  children: ReactNode;
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "gold", children, ...props }, _ref) => {
    const magRef = useMagnetic<HTMLDivElement>(0.25);

    return (
      <div ref={magRef} className="inline-block will-change-transform">
        <button
          {...props}
          className={cn(
            "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
            variant === "gold" &&
              "text-obsidian shadow-[0_0_40px_-10px_oklch(0.78_0.13_85_/_0.6)] hover:shadow-[0_0_60px_-8px_oklch(0.78_0.13_85_/_0.8)]",
            variant === "ghost" &&
              "text-ivory glass hover:border-gold/40",
            className,
          )}
        >
          {variant === "gold" && (
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.11 90), oklch(0.72 0.13 82) 50%, oklch(0.88 0.11 90))",
              }}
            />
          )}
          {variant === "gold" && (
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.95 0.09 90), oklch(0.78 0.14 85), oklch(0.95 0.09 90))",
              }}
            />
          )}
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </button>
      </div>
    );
  },
);
MagneticButton.displayName = "MagneticButton";
