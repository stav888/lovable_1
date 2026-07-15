import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="hairline mb-10" />
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-obsidian-soft">
              <Scale className="h-4 w-4 text-gold" />
            </span>
            <div>
              <div className="font-display text-sm tracking-widest gold-text">
                YBA · Yosef Ben Ami
              </div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">
                משרד עורכי דין · Tel Aviv
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="link-underline hover:text-ivory">Privacy</a>
            <a href="#" className="link-underline hover:text-ivory">Terms</a>
            <a href="#" className="link-underline hover:text-ivory">Ethics</a>
          </div>

          <div className="text-[10px] tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
