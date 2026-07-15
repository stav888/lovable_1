import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "בית" },
  { href: "#expertise", label: "תחומי התמחות" },
  { href: "#process", label: "תהליך" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "px-3 pt-3" : "px-6 pt-6",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass gold-glow" : "border border-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-obsidian to-obsidian-soft">
            <Scale className="h-4 w-4 text-gold" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-medium tracking-widest gold-text">
              YBA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground">
              יוסף בן עמי
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-ivory/80 transition-colors hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="relative hidden overflow-hidden rounded-full px-5 py-2 text-xs font-medium tracking-wide text-obsidian md:inline-flex"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.11 90), oklch(0.72 0.13 82))",
            boxShadow: "0 0 30px -8px oklch(0.78 0.13 85 / 0.6)",
          }}
        >
          קבע פגישת ייעוץ
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4 text-gold" /> : <Menu className="h-4 w-4 text-gold" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl glass p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ivory/80 transition-colors hover:bg-gold/10 hover:text-ivory"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-3 py-2.5 text-center text-sm font-medium text-obsidian"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.11 90), oklch(0.72 0.13 82))",
              }}
            >
              קבע פגישת ייעוץ
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
