import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, ArrowLeft, ArrowRight, Check, Building2, Cpu, Home, Scale } from "lucide-react";

const areas = [
  { id: "corp", he: "דין תאגידי", icon: Building2 },
  { id: "tech", he: "היי-טק וקניין רוחני", icon: Cpu },
  { id: "re", he: "נדל״ן", icon: Home },
  { id: "lit", he: "ליטיגציה", icon: Scale },
];

export function ConsultationWizard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const reset = () => {
    setStep(0);
    setArea(null);
    setName("");
    setPhone("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-obsidian/80 p-4 backdrop-blur-md"
          onClick={() => {
            onClose();
            setTimeout(reset, 400);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl glass gold-glow p-8"
          >
            <button
              onClick={onClose}
              className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gold/20 text-gold/70 transition-colors hover:bg-gold/10 hover:text-gold"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Steps indicator */}
            <div className="mb-8 flex items-center gap-2">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    s <= step ? "bg-gold" : "bg-gold/15"
                  }`}
                />
              ))}
            </div>

            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
              שלב {step + 1} מתוך 3
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <StepBox key="s0">
                  <h3 className="font-display text-3xl font-light text-ivory">
                    באיזה תחום נסייע?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    בחר את התחום הרלוונטי לפנייתך.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {areas.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setArea(a.id)}
                        className={`group flex items-center gap-3 rounded-2xl border p-4 text-start transition-all ${
                          area === a.id
                            ? "border-gold/60 bg-gold/10"
                            : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"
                        }`}
                      >
                        <a.icon className="h-4 w-4 text-gold" />
                        <span className="text-sm text-ivory">{a.he}</span>
                      </button>
                    ))}
                  </div>
                </StepBox>
              )}

              {step === 1 && (
                <StepBox key="s1">
                  <h3 className="font-display text-3xl font-light text-ivory">
                    כמה פרטים
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    כדי שנוכל לחזור אליך במהירות המקסימלית.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="שם מלא"
                      className="rounded-xl border border-gold/15 bg-background/60 px-4 py-3 text-sm text-ivory outline-none transition focus:border-gold/60 focus:shadow-[0_0_0_3px_oklch(0.78_0.13_85_/_0.15)]"
                    />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="טלפון"
                      className="rounded-xl border border-gold/15 bg-background/60 px-4 py-3 text-sm text-ivory outline-none transition focus:border-gold/60 focus:shadow-[0_0_0_3px_oklch(0.78_0.13_85_/_0.15)]"
                    />
                  </div>
                </StepBox>
              )}

              {step === 2 && (
                <StepBox key="s2">
                  <div className="mx-auto mt-2 grid h-16 w-16 place-items-center rounded-full bg-gold/10 gold-glow">
                    <Check className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="mt-6 text-center font-display text-3xl font-light text-ivory">
                    תודה שפנית
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
                    פנייתך נשלחה בהצלחה. נחזור אליך תוך 24 שעות בערוץ מאובטח.
                  </p>
                </StepBox>
              )}
            </AnimatePresence>

            {/* Nav */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs text-muted-foreground transition hover:text-ivory"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {step === 0 ? "ביטול" : "חזרה"}
              </button>
              <button
                disabled={(step === 0 && !area) || (step === 1 && (!name || !phone))}
                onClick={() => {
                  if (step === 2) {
                    onClose();
                    setTimeout(reset, 400);
                  } else setStep(step + 1);
                }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-obsidian disabled:opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.11 90), oklch(0.72 0.13 82))",
                  boxShadow: "0 0 30px -10px oklch(0.78 0.13 85 / 0.6)",
                }}
              >
                {step === 2 ? "סגור" : "המשך"}
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
      className="mt-4"
    >
      {children}
    </motion.div>
  );
}
