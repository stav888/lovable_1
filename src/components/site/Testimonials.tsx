import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./Bento";

const items = [
  {
    quote:
      "יוסף וצוותו ליוו אותנו בסבב גיוס מורכב מול משקיעים בינלאומיים. הדיוק המשפטי והחשיבה האסטרטגית שלהם היו קריטיים לסגירת העסקה.",
    name: "רון אבידן",
    role: "מייסד ומנכ״ל · Nexora AI",
  },
  {
    quote:
      "רמת מקצועיות ששמורה למעטים. משרד שמבין עסקים, לא רק פסקאות. תוצאות שדיברו בעד עצמן בבית המשפט העליון.",
    name: "עו״ד דנה שקד",
    role: "יועצת משפטית · קבוצת מרידיאן",
  },
  {
    quote:
      "השילוב בין ידע משפטי עמוק להבנה טכנולוגית מתקדמת הפך את המשרד ליועץ בלתי מתפשר עבורנו בעולם ה-SaaS.",
    name: "Michael Bergman",
    role: "COO · CloudForge",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) => setI((v) => (v + dir + items.length) % items.length);

  return (
    <section id="testimonials" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Client Voices"
          title="עדויות לקוחות"
          sub="מנהיגים עסקיים ותאגידים בוחרים בנו כשהתוצאה קריטית."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -inset-y-4 rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 100% at 50% 50%, oklch(0.78 0.13 85 / 0.15), transparent)",
            }}
          />

          <div className="relative min-h-[280px] overflow-hidden rounded-3xl glass p-10 gold-glow md:p-14">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/10" strokeWidth={1} />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-display text-2xl font-light leading-relaxed text-ivory md:text-3xl">
                  “{items[i].quote}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="h-10 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
                  <div>
                    <div className="text-sm font-medium text-ivory">{items[i].name}</div>
                    <div className="text-xs tracking-wide text-muted-foreground">
                      {items[i].role}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === i ? "w-10 bg-gold" : "w-4 bg-gold/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:bg-gold/10"
                aria-label="Previous"
              >
                <ChevronRight className="h-4 w-4 text-gold" />
              </button>
              <button
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:bg-gold/10"
                aria-label="Next"
              >
                <ChevronLeft className="h-4 w-4 text-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
