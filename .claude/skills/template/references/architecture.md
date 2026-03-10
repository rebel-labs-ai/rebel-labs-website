# Architecture: What's Locked and Why

> **When to read:** When you need to understand the production infrastructure that must not be modified during customization.

This site was built as a high-scale, production-ready website. The infrastructure below has been carefully implemented and tested. Customization should change the identity that flows through this infrastructure, never the infrastructure itself.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | Server-side rendering, routing, static generation |
| React | React 19 | Component rendering |
| Styling | Tailwind CSS v3 + CSS Variables | Utility-first styling with theme support |
| UI Components | Radix UI primitives | Accessible, composable component library |
| Theme | next-themes | Dark/light mode switching |
| CMS | Sanity CMS | Blog content management |
| Analytics | GTM + GA + Clarity + Vercel | Comprehensive user tracking |
| Type Safety | TypeScript (strict) | Compile-time type checking |
| Code Quality | ESLint + Prettier (tabs) | Consistent formatting |

---

## Locked Infrastructure

### Analytics Suite

The analytics implementation provides comprehensive tracking out of the box:

- **Google Tag Manager** — Container-based tag management, loaded conditionally
- **Google Analytics** — Page view and event tracking via GA4
- **Microsoft Clarity** — Session recordings and heatmaps
- **Vercel Analytics** — Core Web Vitals and performance metrics
- **Vercel Speed Insights** — Real-time performance monitoring
- **Cookie Consent** — GDPR-compliant consent banner with granular control
- **Unified Analytics Manager** — Centralized tracking API
- **GTM Page Tracker** — Route change tracking for SPA navigation

**Key files (do not modify):**
- `src/components/google-tag-manager.tsx`
- `src/components/cookie-consent.tsx`
- `src/components/analytics/analytics-manager.tsx`
- `src/components/analytics/clarity-provider.tsx`
- `src/components/analytics/gtm-page-tracker.tsx`
- `src/lib/analytics/tracking.ts`

**To configure:** Change analytics IDs in `src/config/site.config.ts` → `analytics` section.

### SEO Infrastructure

Every page has comprehensive SEO implemented:

- **Metadata** — Title templates, descriptions, OG tags, Twitter Cards per page
- **Structured Data** — JSON-LD schemas (Organization, BlogPosting, Person, WebPage)
- **Sitemap** — Dynamic generation combining static pages + Sanity blog posts
- **Robots.txt** — Crawl rules with landing page exclusions
- **RSS Feed** — Auto-generated from Sanity posts with full metadata
- **Breadcrumbs** — SEO-optimized navigation trail component
- **Canonical URLs** — Proper canonical tag generation
- **SEO Helpers** — Utility functions for URL generation, schema creation, keyword extraction

**Key files (do not modify logic):**
- `src/components/seo/SEOHead.tsx`
- `src/components/seo/Breadcrumbs.tsx`
- `src/utils/seo-helpers.ts` (logic is locked, but it reads from `site.config.ts`)
- `src/app/sitemap.ts` (structure is locked, but page list is customizable)
- `src/app/robots.ts`

### Blog Platform

Fully integrated Sanity CMS blog with:

- **Dynamic pages** — Blog listing with category filters, individual post pages, author pages
- **Portable Text** — Full rich content rendering (headings, images, links, lists, blockquotes)
- **Related posts** — Automatic related content based on category
- **Category filtering** — Client-side filtering with URL-based state
- **RSS generation** — Automatic feed from Sanity content
- **Author profiles** — Dedicated pages with post listings and social links

**Key files (do not modify):**
- `src/sanity/client.ts` (reads config from `site.config.ts`)
- `src/components/portable-text-components.tsx`
- Blog page structure in `src/app/blog/`
- Author page structure in `src/app/author/`

**To configure:** Change Sanity project ID in `site.config.ts`, categories in `blog.config.ts`.

### Theme System Architecture

The three-layer color pipeline:

```
Layer 1: CSS Variables (globals.css)
  --primary: 220 70% 50%          ← HSL values without hsl() wrapper
       ↓
Layer 2: Tailwind Config (tailwind.config.ts)
  primary: "hsl(var(--primary))"   ← Maps CSS vars to Tailwind classes
       ↓
Layer 3: Components
  className="bg-primary"           ← Theme-aware through the pipeline
```

Dark mode uses the `[data-theme='dark']` selector in CSS to override variables. The `ThemeProvider` (next-themes) manages the `data-theme` attribute on the HTML element.

**Key files (do not modify structure):**
- `src/components/providers/theme-provider.tsx`
- `src/components/theme-toggle.tsx`
- `tailwind.config.ts` (structure locked, can add/rename color tokens)

### UI Component Library

8 Radix UI primitives following the shadcn/ui pattern:

| Component | Features |
|-----------|----------|
| `button` | 6 variants, 4 sizes, CVA pattern |
| `card` | Card, Header, Title, Description, Content, Footer |
| `input` | Standard form input with theme-aware styling |
| `label` | Radix Label with forwardRef |
| `textarea` | Standard textarea |
| `switch` | Radix toggle switch |
| `badge` | CVA variant badges |
| `dropdown-menu` | Full dropdown with sub-menus |

All use `cn()` utility (clsx + tailwind-merge), `forwardRef`, and CSS variable colors.

**Key files (do not modify):**
- Everything in `src/components/ui/`
- `src/lib/utils.ts` (cn utility)

---

## The Boundary Rule

If you're about to modify a file and you're unsure whether it's locked:

1. Check the [file-map.md](file-map.md) reference
2. If the file is classified as LOCKED, do not modify it
3. If you need to change behavior that seems locked, check if there's a CONFIG file that controls it
4. If truly no config option exists, ask the user before modifying infrastructure
