# File Map

> **When to read:** When you need to find a specific file, understand its purpose, or check whether it's safe to modify.

Every key file is classified as:
- **LOCKED** — Production infrastructure. Do not modify.
- **CONFIG** — Change via the config value, not the file's logic.
- **CUSTOMIZABLE** — Edit directly for customization.

---

## Config Files

| File | Classification | Purpose |
|------|---------------|---------|
| `src/config/site.config.ts` | **CONFIG** | Central brand identity, URLs, analytics IDs, Sanity config |
| `src/config/navigation.config.ts` | **CONFIG** | Nav links, footer sections, legal links, taglines |
| `src/config/blog.config.ts` | **CONFIG** | Blog categories and category label helper |

---

## Root Layout & Globals

| File | Classification | Purpose |
|------|---------------|---------|
| `src/app/layout.tsx` | **CONFIG** | Root layout — metadata reads from `site.config.ts`. Font imports are customizable. |
| `src/app/globals.css` | **CUSTOMIZABLE** | CSS variables for colors. Change HSL values, keep variable names. |
| `tailwind.config.ts` | **CONFIG** | Color mapping structure is locked. Can add/rename brand-specific tokens. Two hex values to update if changing accent colors. |
| `next.config.ts` | **LOCKED** | Security headers, caching, compression. Update `images.remotePatterns` if changing domains. |

---

## Components — Locked (Infrastructure)

| File | Purpose |
|------|---------|
| `src/components/ui/button.tsx` | Radix button with CVA variants |
| `src/components/ui/card.tsx` | Card component family |
| `src/components/ui/input.tsx` | Form input |
| `src/components/ui/label.tsx` | Form label |
| `src/components/ui/textarea.tsx` | Form textarea |
| `src/components/ui/switch.tsx` | Toggle switch |
| `src/components/ui/badge.tsx` | Status badges |
| `src/components/ui/dropdown-menu.tsx` | Dropdown menus |
| `src/components/providers/theme-provider.tsx` | Theme context provider |
| `src/components/theme-toggle.tsx` | Dark/light mode toggle |
| `src/components/google-tag-manager.tsx` | GTM + GA script components |
| `src/components/cookie-consent.tsx` | GDPR cookie consent banner |
| `src/components/analytics/analytics-manager.tsx` | Unified analytics |
| `src/components/analytics/clarity-provider.tsx` | Microsoft Clarity |
| `src/components/analytics/gtm-page-tracker.tsx` | Route change tracking |
| `src/components/portable-text-components.tsx` | Sanity rich text renderer |
| `src/components/seo/SEOHead.tsx` | JSON-LD structured data |
| `src/components/seo/Breadcrumbs.tsx` | SEO breadcrumb navigation |

---

## Components — Customizable

| File | Classification | What to Change |
|------|---------------|----------------|
| `src/components/navigation.tsx` | **CONFIG** | Reads from `navigation.config.ts`. Modify styling if needed. |
| `src/components/footer.tsx` | **CONFIG** | Reads from `navigation.config.ts` + `site.config.ts`. Modify styling if needed. |
| `src/components/animated-dots.tsx` | **CUSTOMIZABLE** | Decorative animation — replace or remove |
| `src/components/animated-text.tsx` | **CUSTOMIZABLE** | Text animation — replace or remove |
| `src/components/twinkling-stars.tsx` | **CUSTOMIZABLE** | Star animation — replace or remove |
| `src/components/scroll-animated-steps.tsx` | **CUSTOMIZABLE** | Homepage step animation |
| `src/components/elastic-infrastructure-graph.tsx` | **CUSTOMIZABLE** | Product visualization — replace with yours |
| `src/components/agent-team-carousel.tsx` | **CUSTOMIZABLE** | Product carousel — replace with yours |

---

## Utilities — Locked

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/lib/analytics/config.ts` | Analytics config — reads from `site.config.ts` |
| `src/lib/analytics/tracking.ts` | Event tracking functions |
| `src/utils/seo-helpers.ts` | SEO utilities — reads from `site.config.ts` |
| `src/types/seo.ts` | SEO type definitions |

---

## Sanity CMS — Locked Structure

| File | Classification | Notes |
|------|---------------|-------|
| `src/sanity/client.ts` | **CONFIG** | Reads project ID from `site.config.ts` |

---

## Pages — Customizable

All pages under `src/app/` are **CUSTOMIZABLE** for content. The metadata patterns and page structure should follow existing conventions.

| Page | Path | Notes |
|------|------|-------|
| Homepage | `src/app/page.tsx` | ~1260 lines. Major content page. |
| Blog listing | `src/app/blog/page.tsx` | Categories from `blog.config.ts` |
| Blog post | `src/app/blog/[slug]/page.tsx` | Categories from `blog.config.ts` |
| Blog RSS | `src/app/blog/rss.xml/route.ts` | Reads from `site.config.ts` |
| Author | `src/app/author/[slug]/page.tsx` | Reads from `site.config.ts` + `blog.config.ts` |
| Mission | `src/app/mission/page.tsx` | Full narrative page |
| Inbound Sales | `src/app/workforces/inbound-sales/page.tsx` | Product page |
| Content Creation | `src/app/workforces/content-creation/page.tsx` | Product page |
| The Lab | `src/app/workforces/lab/page.tsx` | Experimental page |
| Careers | `src/app/careers/page.tsx` | Job listings + application form |
| Contact | `src/app/contact/page.tsx` | Redirects to booking URL |
| Privacy | `src/app/privacy/page.tsx` | Privacy policy text |
| Terms | `src/app/terms/page.tsx` | Terms of service text |
| Cookies | `src/app/cookies/page.tsx` | Cookie policy text |
| Landing pages | `src/app/lp/[campaign]/page.tsx` | Campaign configs inline |
| Sitemap | `src/app/sitemap.ts` | Update static page list |
| Robots | `src/app/robots.ts` | Usually no changes needed |

---

## Public Assets — Customizable

| Path | What's There | What to Do |
|------|-------------|------------|
| `public/logo.svg` | Brand logo (SVG) | Replace with yours |
| `public/logo.png` | Brand logo (PNG) | Replace with yours |
| `public/favicons/` | Favicon set + webmanifest | Generate new set, update webmanifest |
| `public/og-*.jpg` | Open Graph images | Replace with your branded images (1200x630) |
| `public/home/` | Homepage illustrations (~30 files) | Replace with your visuals |
| `public/mission/` | Mission page SVGs | Replace with your visuals |
| `public/workforces/` | Product page images | Replace with your visuals |
| `public/fonts/` | Local Satoshi font | Replace if using different fonts |
