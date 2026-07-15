# Yosef Ben Ami — Law Firm Landing Page

A single, cinematic RTL landing page at `/` with an obsidian + gold + royal-indigo aesthetic, glassmorphism, and rich motion.

## Design System (src/styles.css)

- Background: `#050507` base, `#0b0b0f` surfaces
- Gold: `#D4AF37` primary, `#C5A059` secondary, gold/15 borders
- Indigo glow: deep royal `#1e1b4b` → `#4338ca` radial
- Foreground: near-white `#f5f3ec`, muted `#a1a1aa`
- Tokens added: `--gold`, `--gold-soft`, `--indigo-glow`, `--obsidian`, `--surface`, gradient tokens `--gradient-gold`, `--gradient-hero`, shadow tokens `--shadow-gold-glow`, `--shadow-elevated`
- Fonts loaded via `<link>` in `__root.tsx` head: **Cormorant Garamond** (display serif, wide-tracked) + **Assistant** (Hebrew + Latin body). Register as `--font-display` and `--font-sans`
- `dir="rtl"` on `<html>` in `__root.tsx`; page uses logical properties (`ms-*`, `me-*`, `text-start`)
- Dark by default (add `.dark` class to `<html>`)

## Sections (single-page, all in `src/routes/index.tsx` composing components)

1. **Floating glass nav** — `YBA · יוסף בן עמי` wordmark, RTL links (בית, תחומי עמחיות, תהליך, המלצות, צור קשר), gold-underline hover, glowing "קבע פגישת ייעוץ" CTA
2. **Hero** — Full-viewport. Radial gold + indigo ambient glows, animated gold-dust particles canvas layer, slow horizontal light sweep. Headline `משפט. טכנולוגיה. העתיד.` with staggered word slide-up (Framer Motion). English sub `Architecting Next-Generation Legal Solutions`. Magnetic gold CTA + secondary ghost CTA. Multi-step consultation wizard trigger opens a glass dialog (3 steps: תחום → פרטים → אישור)
3. **Bento grid — Areas of Expertise** — 4 asymmetric cards (Corporate, High-Tech & IP, Real Estate, Litigation). Cursor-tracked spotlight + subtle 3D tilt on hover. Lucide icons (Building2, Cpu, Home, Scale) in gold
4. **The Path to Victory** — Vertical scroll timeline with 3 nodes (אסטרטגיה · פעולה · הכרעה). Nodes light up with gold glow via `useScroll` progress
5. **Credibility Hub** — Animated counters (in-view trigger): 500+ תיקים, 20 שנות ניסיון, 98% הצלחה, 350+ לקוחות
6. **Testimonials slider** — Dark glass cards, gold ring glow, auto-advance with manual dots, smooth crossfade
7. **Consultation contact form** — Glass panel, inputs with gold neon focus ring, "שלח הודעה מאובטחת" magnetic button. Client-side only (no backend)
8. **Footer** — Minimal, gold hairline divider, contact + social

## Motion & Interactions

- `framer-motion` for entrance staggers, in-view reveals, timeline scroll progress, testimonial transitions
- Custom hooks: `useMagnetic` (button pull toward cursor), `useSpotlight` (CSS var updates for radial gradient position), `useCountUp`
- Gold-dust particles: lightweight requestAnimationFrame canvas, respects `prefers-reduced-motion`
- All transforms hardware-accelerated (`translate3d`, `will-change`)

## Files

- `src/routes/index.tsx` — page composition, RTL, section imports
- `src/routes/__root.tsx` — add font `<link>`s, set `<html lang="he" dir="rtl" class="dark">`, update title/description/OG to "יוסף בן עמי · משרד עורכי דין" / English counterpart
- `src/styles.css` — new design tokens, gold gradient utility, glass utility, spotlight utility
- `src/components/site/` — `Nav.tsx`, `Hero.tsx`, `Particles.tsx`, `ConsultationWizard.tsx`, `Bento.tsx`, `Timeline.tsx`, `Credibility.tsx`, `Testimonials.tsx`, `Contact.tsx`, `Footer.tsx`, `MagneticButton.tsx`, `SpotlightCard.tsx`
- `src/hooks/` — `use-magnetic.ts`, `use-count-up.ts`, `use-in-view-once.ts`

## Dependencies

- Install `framer-motion` (lucide-react and tailwind-merge already present in shadcn stack)

## Technical Guardrails

- Tailwind v4 tokens only; no hardcoded hex in JSX (use `bg-obsidian`, `text-gold`, etc. mapped via `@theme inline`)
- Fully responsive: bento collapses to 1-col on mobile, timeline stays vertical, nav becomes glass sheet
- RTL-safe: logical spacing, mirrored decorative elements where needed
- SEO: real title/description/OG in `__root.tsx`; single H1 in hero; semantic sections
- No backend — form shows toast on submit
