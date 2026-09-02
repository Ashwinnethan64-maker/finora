# 🏛️ FINORA FinOS Design System Specification & Token Guide
**Version:** 1.0.0 (Production-Ready)  
**Philosophy:** Editorial Financial Rigor (FT / Bloomberg Terminal) meets Sovereign Private Banking and Modern Institutional SaaS (Stripe / Mercury).

---

## 1. Design Philosophy & Aesthetic Tenets

1. **Restraint Over Spectacle:** Color is used with surgical precision—solely for data communication, status signaling, and primary calls to action. No neon crypto blurs or superficial decorative noise.
2. **Typography as Structure:** Heavy editorial hierarchy paired with tabular monospace numerals gives the platform the weight of an institutional research house.
3. **Information Density with Breathing Room:** Clean 8pt baseline grid and generous whitespace prevent cognitive fatigue without sacrificing analytical depth.
4. **Crisp Micro-Borders:** Hairline 1px borders (`rgba(255,255,255,0.08)`) and controlled subtle elevations separate analytical layers.
5. **Accessible & High-Contrast:** Strict adherence to WCAG 2.1 AA/AAA contrast ratios for financial readability across daylight and low-light operations.

---

## 2. Complete Design Tokens

### 2.1 Color System (HSL & Hex Structured)

#### Base & Neutrals (Obsidian & Platinum Scale)
* `--bg-primary`: `#080B11` / `hsl(222, 36%, 5%)` — Deepest canvas
* `--bg-secondary`: `#0F1420` / `hsl(220, 27%, 9%)` — Surface background / Card layer
* `--bg-tertiary`: `#171F30` / `hsl(220, 25%, 14%)` — Elevated card / Table row hover
* `--bg-elevated`: `#1E283D` / `hsl(220, 24%, 18%)` — Modals, popovers, dropdowns
* `--bg-subtle`: `#25314C` / `hsl(220, 24%, 22%)` — Inactive pills, code blocks

#### Borders & Dividers
* `--border-subtle`: `rgba(255, 255, 255, 0.06)` — Hairline structural grid
* `--border-default`: `rgba(255, 255, 255, 0.12)` — Standard card and component border
* `--border-strong`: `rgba(255, 255, 255, 0.22)` — Interactive elements, focused states
* `--border-accent`: `rgba(212, 175, 55, 0.40)` — Active/selected highlight

#### Primary Brand Accent (Sovereign Gold / Brass)
* `--gold-50`: `#FDFBF7`
* `--gold-100`: `#F9F3E5`
* `--gold-300`: `#E8D29B`
* `--gold-500`: `#D4AF37` — Main Brand Primary Accent (Prestige, Authority)
* `--gold-600`: `#B89324` — Active/Hover Pressed State
* `--gold-900`: `#42340B` — Muted background badges

#### Data Semantic Colors (Financial Signals)
* **Positive / Cash Flow Surplus (Emerald):**
  * `--emerald-500`: `#10B981` (Values, profits, growth deltas)
  * `--emerald-bg`: `rgba(16, 185, 129, 0.10)`
  * `--emerald-border`: `rgba(16, 185, 129, 0.25)`
* **Warning / Working Capital Drag (Amber):**
  * `--amber-500`: `#F59E0B` (Runway alerts, debtor cycle lags)
  * `--amber-bg`: `rgba(245, 158, 11, 0.10)`
  * `--amber-border`: `rgba(245, 158, 11, 0.25)`
* **Negative / Burn Deficit / Risk (Crimson):**
  * `--crimson-500`: `#EF4444` (Losses, cash leakage, high burn)
  * `--crimson-bg`: `rgba(239, 68, 68, 0.10)`
  * `--crimson-border`: `rgba(239, 68, 68, 0.25)`
* **Information / Advisory (Cobalt):**
  * `--cobalt-500`: `#3B82F6` (Neutral analytical alerts, research highlights)
  * `--cobalt-bg`: `rgba(59, 130, 246, 0.10)`
  * `--cobalt-border`: `rgba(59, 130, 246, 0.25)`

#### Typography Colors
* `--text-primary`: `#F8FAFC` (High contrast headings and primary figures)
* `--text-secondary`: `#94A3B8` (Sub-headlines, descriptions, metadata)
* `--text-tertiary`: `#64748B` (Placeholders, disabled text, caption labels)
* `--text-accent`: `#E5C058` (Interactive links, active filters)

---

### 2.2 Typography System

* **Display & Titles:** `Plus Jakarta Sans`, sans-serif (Weights: 600, 700, 800)
* **Body & Editorial:** `Inter`, -apple-system, sans-serif (Weights: 400, 500, 600)
* **Financial Numerals & Tables:** `JetBrains Mono`, monospace (Tabular lining figures: `font-variant-numeric: tabular-nums;`)

| Token | Size | Line Height | Letter Spacing | Weight | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type-display-2xl` | 56px (3.5rem) | 1.1 | -0.03em | 800 | Hero Display Statements |
| `type-display-xl` | 40px (2.5rem) | 1.15 | -0.025em | 700 | Primary Section Headers |
| `type-display-lg` | 32px (2.0rem) | 1.2 | -0.02em | 700 | Subsection & Major Cards |
| `type-heading-md` | 24px (1.5rem) | 1.3 | -0.015em | 600 | Card Titles, Modal Headers |
| `type-heading-sm` | 18px (1.125rem)| 1.4 | -0.01em | 600 | Widget Titles, Metric Labels |
| `type-body-lg` | 16px (1.0rem) | 1.6 | 0 | 400/500| Lead paragraphs, article body|
| `type-body-md` | 14px (0.875rem)| 1.5 | 0 | 400/500| Standard UI, Form Inputs |
| `type-body-sm` | 12px (0.75rem) | 1.45 | +0.01em | 400/500| Footnotes, Badge Labels |
| `type-mono-xl` | 28px (1.75rem)| 1.2 | -0.01em | 700 | Primary Financial KPI Callouts|
| `type-mono-md` | 14px (0.875rem)| 1.4 | 0 | 500 | Financial Data Tables |
| `type-mono-sm` | 12px (0.75rem) | 1.3 | 0 | 500 | Ticker Bar, Time Series Tags |

---

### 2.3 Spacing System (8pt Linear Base Grid)

* `--space-1`: `4px`
* `--space-2`: `8px`
* `--space-3`: `12px`
* `--space-4`: `16px`
* `--space-5`: `20px`
* `--space-6`: `24px`
* `--space-8`: `32px`
* `--space-10`: `40px`
* `--space-12`: `48px`
* `--space-16`: `64px`
* `--space-20`: `80px`
* `--space-24`: `96px`
* `--space-32`: `128px`

---

### 2.4 Border Radius Scale (Restrained & Engineered)

* `--radius-none`: `0px` (Raw grid tables)
* `--radius-sm`: `4px` (Badges, tags, form inputs, tooltips)
* `--radius-md`: `8px` (Buttons, small cards, dropdowns)
* `--radius-lg`: `12px` (Standard service cards, dashboard widgets, modal containers)
* `--radius-xl`: `16px` (Hero containers, large featured teardown modules)
* `--radius-full`: `9999px` (Pills, user avatars, status dots)

*(Note: Maximum card radius is capped at 16px to prevent consumer-casual bubble aesthetic).*

---

### 2.5 Elevation & Shadow System (Subtle Diffuse + Crisp Rim Light)

* `--shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.40), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`
* `--shadow-md`: `0 4px 12px -2px rgba(0, 0, 0, 0.60), 0 2px 6px -1px rgba(0, 0, 0, 0.40), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`
* `--shadow-lg`: `0 12px 28px -4px rgba(0, 0, 0, 0.75), 0 6px 14px -2px rgba(0, 0, 0, 0.50), inset 0 1px 0 0 rgba(255, 255, 255, 0.10)`
* `--shadow-gold-glow`: `0 0 20px -4px rgba(212, 175, 55, 0.25)`

---

### 2.6 Grid & Breakpoints

* **Container Max Widths:**
  * Content Reading: `768px` (Editorial articles & research papers)
  * Standard Container: `1240px` (General pages, marketing, services)
  * Wide Financial Cockpit: `1440px` (Dashboard widgets, multi-column financial tables)
* **Breakpoints:**
  * Mobile (`sm`): `640px` (4-column grid, 16px margin, 16px gutter)
  * Tablet (`md`): `768px` (8-column grid, 24px margin, 20px gutter)
  * Desktop (`lg`): `1024px` (12-column grid, 32px margin, 24px gutter)
  * Wide Desktop (`xl`): `1280px` (12-column grid, 40px margin, 28px gutter)
  * Ultra Wide (`2xl`): `1536px` (16-column grid for terminal density)

---

### 2.7 Motion Principles & Animation Tokens

* **Philosophy:** Snappy, physics-based, purpose-driven. Never frivolous.
* `--ease-out`: `cubic-bezier(0.16, 1, 0.3, 1)` (Entering screens, tooltips, toasts)
* `--ease-in-out`: `cubic-bezier(0.4, 0, 0.2, 1)` (Interactive state morphs, tab switches)
* `--duration-fast`: `150ms` (Button hovers, toggle states)
* `--duration-normal`: `250ms` (Modal entries, accordion expansions, card transitions)
* `--duration-slow`: `400ms` (Page transitions, complex chart rendering)
