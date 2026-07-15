import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 500, suffix: "+", label: "תיקים מנוצחים", en: "Cases won" },
  { value: 20, suffix: "", label: "שנות ניסיון", en: "Years practicing" },
  { value: 98, suffix: "%", label: "שיעור הצלחה", en: "Success rate" },
  { value: 350, suffix: "+", label: "לקוחות פעילים", en: "Active clients" },
];

export function Credibility() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 50% 50%, oklch(0.42 0.18 275 / 0.4), transparent)",
        }}
      />
      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gold/15 bg-gold/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <StatCell key={s.en} stat={s} start={inView} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  start,
  delay,
}: {
  stat: (typeof stats)[number];
  start: boolean;
  delay: number;
}) {
  const val = useCountUp(stat.value, 1800 + delay, start);
  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 bg-background/95 px-6 py-14 transition-colors duration-500 hover:bg-obsidian-soft">
      <div className="font-display text-5xl font-light gold-text md:text-6xl">
        {val}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-ivory/90">{stat.label}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {stat.en}
      </div>
    </div>
  );
}
