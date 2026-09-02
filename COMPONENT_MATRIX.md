# 🏛️ FINORA FinOS Component Architecture & Production State Matrix
**System Standards:** WCAG 2.1 AA/AAA Compliant | Zero-Jitter Transitions | Tabular Lining Figures

---

## 1. Design Token Reference Map

```css
/* Core Color Tokens */
--bg-primary: #080B11;       /* Deepest canvas */
--bg-secondary: #0F1420;     /* Surface layer */
--bg-tertiary: #171F30;      /* Elevated table & input layer */
--gold-500: #D4AF37;         /* Sovereign Gold (Authority & Capital) */
--emerald-500: #10B981;      /* Positive Delta / Surplus */
--amber-500: #F59E0B;        /* Working Capital Lag / Warning */
--crimson-500: #EF4444;      /* Cash Burn / High Risk */

/* Typography Tokens */
--font-display: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

---

## 2. Comprehensive Component & State Matrix

| Component | Desktop State | Tablet State | Mobile State | Hover State | Focus State | Loading State | Empty State | Error State |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Navbar** | Sticky `70px`, full horizontal navigation with CTA cluster. | Condensed padding (`24px`), horizontal scrollable links. | Compact `60px` with collapsed menu and quick audit trigger. | Subtle white `rgba(255,255,255,0.04)` fill. | 2px gold focus ring on keyboard nav. | N/A | N/A | N/A |
| **Hero Section** | Dual-column 900px centered editorial display with live metrics table. | Stacked layout with preserved 12-column bento alignment. | Single-column, stacked CTAs, full-width proof table. | N/A | Accessible tab index on CTAs. | Shimmer skeleton on dynamic proof metrics. | Fallback static proof figures. | N/A |
| **Buttons (`.btn`)** | Full padding (`10px 18px`), crisp typography, 8px radius. | Same touch-friendly padding. | Full width on primary conversion blocks (`100%`). | `transform: translateY(-1px)`, diffuse gold glow on `.btn-primary`. | High-contrast `2px` ring + `4px` offset. | Spinner animation with masked text (`.is-loading`). | N/A | Disabled styling with `0.4` opacity. |
| **Diagnostic Cockpit** | Dual-card 6-column bento with real-time slider updates. | Stacked 12-column cards. | Vertical linear flow with touch-optimized slider thumbs. | Slider thumb expands 1.2x on hover. | Gold outline on slider thumb focus. | N/A | Zero-value placeholder state with guiding prompt. | Out-of-bounds warning badge (`>180 days`). |
| **Service Cards** | 3-column bento box with vertical feature checklist. | 2-column grid. | 1-column card stack with full-width action links. | `transform: translateY(-2px)`, gold hairline border (`--border-accent`). | Keyboard focus outline. | Shimmer skeleton card. | N/A | N/A |
| **Metric / KPI Cards** | Tabular monospace figures (`26px`), subtle delta pill. | Compact layout. | Monospace figures at `22px`. | Subtle border luminance. | N/A | Shimmer bar over metric. | `—` dash with `0.0%` delta. | Crimson delta with alert indicator. |
| **Case Teardowns** | Split layout: Narrative problem/intervention + Comparative financial table. | Stacked layout. | Horizontally scrollable comparison table. | Table row highlight (`rgba(255,255,255,0.02)`). | N/A | Shimmer table rows. | N/A | N/A |
| **Financial Tables** | Tabular numbers right-aligned, monospace font, uppercase sticky header. | Horizontal scroll container (`.fin-table-container`). | Swipe-enabled container with shadow indicators. | Row subtle background hover. | Cell focus indicator. | Skeleton rows (3 rows). | Centered empty container with icon. | Cell-level crimson variance indicator. |
| **Form Inputs** | Dark tertiary background, 1px border, 12px label, monospace text when numeric. | Full touch targets. | Full width with 44px min height. | Border highlights to `--border-strong`. | Gold border + `2px` shadow ring. | Input disabled with spinner. | Gray placeholder text (`--text-tertiary`). | Crimson border with `.form-error-msg` helper. |
| **Modals** | Centered frosted overlay (`rgba(4,6,10,0.85)`), 580px max width. | Centered with `24px` gutter. | Bottom-sheet modal animation on viewport `< 640px`. | Close button hover fill. | Trapped keyboard focus inside modal. | Submit button spinner. | N/A | Inline form validation errors. |
| **Toast Notifications**| Fixed bottom-right `24px`, gold/emerald icon, auto-dismiss in 3.5s. | Bottom-center. | Full-width bottom banner with safe area inset. | N/A | N/A | N/A | N/A | Crimson border on error toasts. |
| **Badges / Status Pills**| Compact uppercase with icon and micro-border. | Identical. | Identical. | N/A | N/A | N/A | N/A | Crimson risk badge (`HIGH RISK`). |

---

## 3. File Directory & Artifact Map

* [MASTER_PRODUCT_PLAN.md](file:///z:/FINORA%20web/MASTER_PRODUCT_PLAN.md) — Strategic Product Architecture, ICPs, Funnel, Regulatory (SEBI/ICAI) & Monetization Blueprint.
* [DESIGN_TOKENS.md](file:///z:/FINORA%20web/DESIGN_TOKENS.md) — Design tokens, color scales, typographic scales, spacing & motion tokens.
* [finora-design-system.css](file:///z:/FINORA%20web/finora-design-system.css) — Production CSS design system stylesheet with reset, tokens, and reusable components.
* [index.html](file:///z:/FINORA%20web/index.html) — Living, interactive product application showcasing the entire component catalog and real-time financial diagnostic cockpit.
