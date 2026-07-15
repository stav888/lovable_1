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
            <a href="/privacy" className="link-underline hover:text-ivory">מדיניות פרטיות</a>
            <a href="/accessibility" className="link-underline hover:text-ivory">הצהרת נגישות</a>
            <a href="/" className="link-underline hover:text-ivory">Terms</a>
          </div>

          <div className="text-[10px] tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
      <div id="bcb" className="mx-auto max-w-7xl mt-6 rounded-lg bg-emerald-900/5 p-4 text-sm text-muted-foreground">
        <p>
          כדי להציע לך חווית גלישה טובה יותר, אתר זה משתמש בעוגיות פרופיל, לרבות מצד ג'. על ידי המשך גלישה באתר שלנו אתה מקבל את מדיניות העוגיות שלנו. לפרטים נוספים
          <a href="/privacy" className="ml-1 link-underline">לחצו</a>
        </p>
        <div className="mt-2">
          <button id="bcb-approve" type="button" aria-label="Approve cookies notice" className="rounded bg-gold px-3 py-1 text-obsidian">
            אישור
          </button>
        </div>
        <noscript>
          <a href="/?bcb_approve=1" className="bcb-approve-link">
            אישור
          </a>
        </noscript>
      </div>
    </footer>
  );
}
