import { motion } from "framer-motion";
import { Building2, Cpu, Home, Scale, ArrowUpLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Area = {
  title: string;
  he: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
  className: string;
};

const areas: Area[] = [
  {
    title: "Corporate Law",
    he: "דין תאגידי",
    icon: Building2,
    desc: "מיזוגים ורכישות, ממשל תאגידי, הסכמי מייסדים והשקעות. ליווי עסקאות מורכבות מסוף לקצה.",
    tags: ["M&A", "VC", "Governance"],
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "High-Tech & IP",
    he: "היי-טק וקניין רוחני",
    icon: Cpu,
    desc: "רישוי טכנולוגי, פטנטים, ורגולציית AI ופרטיות דיגיטלית.",
    tags: ["AI", "SaaS", "Patents"],
    className: "md:col-span-2",
  },
  {
    title: "Real Estate",
    he: "נדל״ן ומקרקעין",
    icon: Home,
    desc: "עסקאות יוקרה, התחדשות עירונית ותכנון ובנייה.",
    tags: ["Luxury", "TAMA"],
    className: "md:col-span-1",
  },
  {
    title: "Litigation",
    he: "ליטיגציה מסחרית",
    icon: Scale,
    desc: "ייצוג בערכאות בכל תחומי המשפט האזרחי-מסחרי.",
    tags: ["Trial", "Appeal"],
    className: "md:col-span-1",
  },
];

export function Bento() {
  return (
    <section id="expertise" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="תחומי התמחות"
          sub="ארבעה עמודי תווך שעליהם בנוי הייצוג המשפטי המוביל של המשרד."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {areas.map((a, i) => (
            <BentoCard key={a.title} area={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ area, index }: { area: Area; index: number }) {
  const Icon = area.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const t = e.currentTarget;
        const r = t.getBoundingClientRect();
        const mx = ((e.clientX - r.left) / r.width) * 100;
        const my = ((e.clientY - r.top) / r.height) * 100;
        t.style.setProperty("--mx", `${mx}%`);
        t.style.setProperty("--my", `${my}%`);
        const rx = (my - 50) / 20;
        const ry = (mx - 50) / -20;
        t.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
      }}
      className={cn(
        "spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl glass p-7 transition-shadow duration-500 hover:gold-glow",
        area.className,
      )}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.4s ease-out, box-shadow 0.5s" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.4), transparent)" }}
      />

      <div className="relative flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/25 bg-obsidian-soft">
          <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
        </div>
        <ArrowUpLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-gold" />
      </div>

      <div className="relative mt-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
          {area.title}
        </div>
        <h3 className="mt-2 font-display text-2xl font-light text-ivory md:text-3xl">
          {area.he}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {area.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {area.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[10px] tracking-widest text-gold/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-gold/70"
      >
        <span className="h-px w-8 bg-gold/40" />
        {eyebrow}
        <span className="h-px w-8 bg-gold/40" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-6 font-display text-4xl font-light text-ivory sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
