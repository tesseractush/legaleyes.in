

# Legal Eyes — Premium Law Firm Website

A dark, editorial, high-end multi-page site inspired by 13g.fr, with a custom "balance scale of eyes" logo and JSON-driven content.

## Brand & Design System
- **Palette (dark by default):** Charcoal/near-black background, ivory text, metallic gold/bronze accent
- **Typography:** Playfair Display (serif headings) + Inter (sans body) via Google Fonts
- **Logo:** Custom inline SVG — a balance scale where each plate is a stylized eye (iris + pupil), with subtle idle animation (gentle sway)
- **Motion:** Scroll-triggered fade/slide-in, parallax hero, hover micro-interactions, custom cursor accent dot, smooth scrolling
- **Textures:** Subtle grain overlay + faint legal-pattern background

## Routing (TanStack Start, separate routes for SEO)
- `/` — Home (Hero + condensed About + Practice Areas teaser + Why Us + CTA)
- `/about` — Firm philosophy, vision, founder note
- `/practice-areas` — Full list with detail cards
- `/insights` — Blog-style case studies / articles grid
- `/team` — Lawyer profiles
- `/contact` — Form + map placeholder + address

Each route gets its own `head()` meta (title, description, og tags).

## Shared Layout
- **Header:** Animated logo + nav (Home, About, Practice, Insights, Team, Contact) + "Book Consultation" CTA
- **Footer:** Brand block, quick links, socials, disclaimer, copyright

## Page Sections

**Hero (home)**
- Fullscreen, animated logo center-stage, parallax
- Headline "Justice Through Insight" (serif, oversized)
- Subtext + two CTAs (gold primary, outline secondary)
- Scroll indicator

**About**
- Two-column editorial layout, large pull-quote, vision statement, founder note placeholder with portrait silhouette

**Practice Areas**
- 5 cards (Corporate, Litigation, IP, Compliance, Advisory) with icon, hover lift, gold underline reveal

**Why Choose Us**
- 4 metric tiles (animated counters) + supporting copy

**Insights**
- 3-column blog grid with image, category tag, title, excerpt, read-time

**Team**
- Grid of lawyer cards: portrait, name (serif), role, expertise tags, hover overlay

**Contact**
- Validated form (Zod): Name, Email, Phone, Case Type (Select dropdown), Message
- Address block + styled map placeholder
- Toast confirmation on submit

## JSON-Driven Content
- `src/content/site.json` holds all text: branding, hero, about, services, why-us, insights, team, contact
- TypeScript types in `src/content/types.ts`
- All pages import and render from JSON — editing copy means editing one file

## Technical
- shadcn/ui (Button, Card, Input, Textarea, Select, Badge, Sonner) styled to match palette
- Tailwind v4 theme tokens updated in `src/styles.css` (charcoal bg, ivory fg, gold accent, serif/sans font families)
- Reusable `<Section>`, `<Logo>`, `<RevealOnScroll>`, `<MetricCounter>` components
- Mobile-first responsive, accessible, SEO meta per route

