import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";

const words = ["משרד עורך דיו עתידני"];

export function Hero({ onOpenWizard }: { onOpenWizard: () => void }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.42 0.18 275 / 0.35), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.13 85 / 0.25), transparent)",
        }}
      />

      {/* Light sweep */}
      <motion.div
        aria-hidden
        initial={{ x: "-30%" }}
        animate={{ x: "130%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-y-0 w-[30%] opacity-[0.06]"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.95 0.1 90 / 0.9), transparent)",
          filter: "blur(30px)",
        }}
      />

      <Particles />

      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.13 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.13 85) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-gold"
        >
          <Sparkles className="h-3 w-3" />
          <span>EST. 2005 · TEL AVIV</span>
          <span className="mx-1 h-1 w-1 rounded-full bg-gold/60" />
          <span>משרד עורכי דין</span>
        </motion.div>

        <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="me-3 inline-block"
            >
              {i === 1 ? <span className="gold-text italic">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Architecting next-generation legal solutions. ייצוג משפטי מדויק, אסטרטגי
          וללא פשרות — לתאגידים, יזמים ופרטיים המובילים את המחר.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton onClick={onOpenWizard}>
            אשף ייעוץ ראשוני
            <ArrowLeft className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}>
            תחומי התמחות
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70"
        >
          <span>Chambers Ranked</span>
          <span className="h-px w-8 bg-gold/30" />
          <span>Legal 500</span>
          <span className="h-px w-8 bg-gold/30" />
          <span>Dun's 100</span>
          <span className="h-px w-8 bg-gold/30" />
          <span>BDI Code</span>
        </motion.div>
      </div>
    </section>
  );
}
