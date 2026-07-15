import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Bento";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Get in touch"
          title="בואו נדבר"
          sub="פנייה ראשונית מטופלת בדיסקרטיות מלאה תוך 24 שעות."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between rounded-3xl glass p-8"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                Direct Line
              </div>
              <h3 className="mt-4 font-display text-3xl font-light text-ivory">
                יצירת קשר ישירה
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                לפניות דחופות או תיאום פגישה בזום/משרד — נא לפנות באחד מהערוצים
                המאובטחים.
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "03-555-0142", sub: "ראשון–חמישי · 09:00–19:00" },
                { icon: Mail, label: "office@yba-legal.co.il", sub: "מענה תוך 24 שעות" },
                { icon: MapPin, label: "מגדל אלקטרה, תל אביב", sub: "קומה 38" },
              ].map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/25 bg-obsidian-soft">
                    <c.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-ivory">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-gold" />
              חסיון עורך-דין-לקוח מהשנייה הראשונה.
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="relative rounded-3xl glass p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.3), transparent)" }}
            />

            <div className="relative grid gap-5 sm:grid-cols-2">
              <Field label="שם מלא" name="name" placeholder="ישראל ישראלי" />
              <Field label="דוא״ל" name="email" type="email" placeholder="you@company.com" />
              <Field label="טלפון" name="phone" placeholder="050-0000000" />
              <Field label="תחום עניין" name="topic" placeholder="לדוגמה: היי-טק" />
              <div className="sm:col-span-2">
                <Field
                  label="הודעה"
                  name="message"
                  as="textarea"
                  placeholder="ספר לנו בקצרה על המקרה..."
                />
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                השליחה מוצפנת · הפנייה אינה מהווה ייעוץ משפטי
              </p>
              <MagneticButton type="submit">
                {sent ? "נשלח בהצלחה" : "שלח הודעה מאובטחת"}
                <Send className="h-4 w-4" />
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "textarea";
}) {
  const base =
    "peer w-full rounded-xl border border-gold/15 bg-background/50 px-4 pb-2.5 pt-6 text-sm text-ivory placeholder-transparent outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-[0_0_0_4px_oklch(0.78_0.13_85_/_0.1),0_0_30px_-8px_oklch(0.78_0.13_85_/_0.5)]";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder || label}
          rows={4}
          required
          className={base}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder || label}
          required
          className={base}
        />
      )}
      <span className="pointer-events-none absolute right-4 top-2 text-[10px] uppercase tracking-[0.25em] text-gold/70">
        {label}
      </span>
    </label>
  );
}
