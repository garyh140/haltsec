# Design Brief: HaltSec Cybersecurity Showcase

## Tone & Purpose
Brutalist cybersecurity authority. Dark, authoritative, minimal ornamentation. Technical urgency without garishness. Single-page scroll marketing site.

## Visual Direction
Dark Navy/Charcoal background (#1A2332) with electric cyan/teal accents (#A3E7FF). Geometric precision. High-contrast borders. No gradients or blur effects. Sharp, intentional shapes. Geometric grid pattern as subtle background texture in hero.

## Color Palette (OKLCH)

| Role | Lightness | Chroma | Hue | Usage |
|------|-----------|--------|-----|-------|
| Background | 0.145 | 0.02 | 220 | Main page background (dark navy) |
| Foreground | 0.97 | 0.01 | 200 | Body text (near white) |
| Primary | 0.65 | 0.18 | 195 | CTAs, hero accents (bright cyan) |
| Accent | 0.55 | 0.18 | 180 | Secondary actions (muted cyan) |
| Card | 0.18 | 0.02 | 220 | Service cards, elevated surfaces |
| Border | 0.30 | 0.03 | 220 | Subtle separators between zones |
| Destructive | 0.60 | 0.22 | 25 | Alerts, warnings (red) |

## Typography

| Layer | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | General Sans | 3xl–5xl | Bold | Page title, section headings |
| Body | Inter | base (16px) | 400 | Paragraph text, descriptions |
| Mono | Geist Mono | sm | 400 | Code snippets, technical labels |

## Structural Zones

| Zone | Background | Border | Shadow | Purpose |
|------|------------|--------|--------|---------|
| Header | `bg-background` | `border-b border-border` | none | Logo + nav (minimal visual weight) |
| Hero | `bg-background` + geometric-pattern overlay | none | none | Full-viewport hero with cyan accents |
| Service Cards | `bg-card` | `border border-border` | `shadow-card` | Elevated, interactive service descriptions |
| About Section | `bg-background` | none | none | Muted background, centered content |
| Footer | `bg-card` | `border-t border-border` | none | Contact info, muted foreground |

## Shape Language
Minimal border-radius (0.5rem = 8px) for squared-off brutalism. Sharp edges preferred. Borders at 1px for precision. No rounded pills or excessive radius.

## Spacing & Rhythm
Mobile-first: `px-4 md:px-8 lg:px-12`. Vertical rhythm in 24px increments. Service cards in responsive grid: `grid-cols-1 md:grid-cols-3`. Generous whitespace around hero content.

## Component Patterns
- **Service Cards:** `zone-elevated accent-glow-hover` — card hover states emphasize cyan borders + shadow elevation
- **CTAs:** `bg-primary text-primary-foreground transition-smooth hover:opacity-90`
- **Icons:** Inline SVG, 48–64px, colored with `fill-primary` or `fill-accent`
- **Typography Hierarchy:** `.text-display` > `.text-heading` > `.text-body`

## Motion & Interaction
Smooth transitions: `transition-smooth` (0.3s ease-in-out). Entrance animations on scroll: `animate-fade-in`, `animate-slide-up`. Hover states on cards: border color shift + shadow elevation. No bouncy animations.

## Differentiation
Geometric grid background in hero section. Precise security-themed SVG icons (shield, lock, network nodes). Electric cyan accent creates technical urgency. Brutalist aesthetics (no gradients, high-contrast, minimal decoration) distinguish from generic SaaS landing pages.

## Constraints
- No rounded buttons (use squared corners)
- No gradient backgrounds (solid OKLCH colors only)
- No blur/glassmorphism effects
- Icon colors: primary or accent OKLCH only
- Max content width: 1400px with `container` class
- Mobile first, responsive breakpoints: sm (640px), md (768px), lg (1024px)

## Signature Detail
Subtle animated geometric grid pattern behind hero content, creating a sense of technical precision and digital infrastructure without overwhelming the typography.
