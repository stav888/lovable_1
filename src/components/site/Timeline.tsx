import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Trophy } from "lucide-react";
import { SectionHeader } from "./Bento";

const steps = [
  {
    icon: Target,
    en: "Strategy",
    he: "אסטרטגיה",
    desc: "ניתוח מעמיק של המצב המשפטי, זיהוי סיכונים והזדמנויות, ובניית תוכנית פעולה מותאמת אישית.",
  },
  {
    icon: Zap,
    en: "Action",
    he: "פעולה",
    desc: "ביצוע מדויק — משא ומתן, ניסוח מסמכים והופעה בערכאות. שילוב חכם של טכנולוגיה ומומחיות משפטית.",
  },
  {
    icon: Trophy,
    en: "Resolution",
    he: "הכרעה",
    desc: "הבטחת התוצאה המיטבית עבור הלקוח, סגירת התיק בהצלחה וליווי מתמשך גם לאחר סיום ההליך.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The Path to Victory"
          title="הדרך לניצחון"
          sub="שלושה שלבים ברורים שהופכים מורכבות משפטית לתוצאה מדויקת."
        />

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          {/* Vertical rail */}
          <div className="absolute right-8 top-0 h-full w-px bg-gold/10 md:right-1/2 md:translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute right-8 top-0 w-px md:right-1/2 md:translate-x-1/2"
          >
            <div className="h-full w-full bg-gradient-to-b from-gold via-gold/60 to-transparent shadow-[0_0_20px_oklch(0.78_0.13_85_/_0.6)]" />
          </motion.div>

          <div className="space-y-20">
            {steps.map((s, i) => (
              <TimelineNode key={s.en} step={s} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const Icon = step.icon;
  const activeAt = index / steps.length + 0.05;
  const opacity = useTransform(progress, [activeAt - 0.1, activeAt], [0.3, 1]);
  const scale = useTransform(progress, [activeAt - 0.1, activeAt], [0.9, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="relative flex items-start gap-6 md:justify-center"
    >
      {/* Node dot on the rail */}
      <motion.div
        style={{ scale }}
        className="absolute right-8 z-10 -translate-x-1/2 translate-y-2 md:right-1/2"
      >
        <div className="relative grid h-4 w-4 place-items-center">
          <span className="absolute inset-0 rounded-full bg-gold/30 blur-md" />
          <span className="relative h-3 w-3 rounded-full bg-gold shadow-[0_0_20px_oklch(0.78_0.13_85)]" />
        </div>
      </motion.div>

      {/* Card */}
      <div
        className={`w-full pe-16 md:w-1/2 md:pe-0 ${
          index % 2 === 0 ? "md:pe-16 md:text-end" : "md:ms-auto md:ps-16"
        }`}
      >
        <div className="rounded-2xl glass p-6 transition-shadow duration-500 hover:gold-glow">
          <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/30 bg-obsidian-soft">
              <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                Step 0{index + 1} · {step.en}
              </div>
              <h3 className="font-display text-2xl font-light text-ivory">{step.he}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
