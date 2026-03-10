# Customization Guide

> **When to read:** When making any changes to customize the template. This is the primary guide for all modifications.

---

## 1. Brand Identity (site.config.ts)

The central config file at `src/config/site.config.ts` controls all brand-level settings. Changing this file updates the brand across the entire site.

**What to change:**

```typescript
export const siteConfig = {
  // Brand name - appears in nav, footer, metadata, schemas
  name: "YourBrand",
  nameStyled: {
    prefix: "your",    // Colored portion in nav/footer
    suffix: "brand",   // Default-colored portion
  },
  tagline: "Your tagline here",
  description: "Your site description for SEO",

  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  bookingUrl: "https://cal.com/your-booking-link",

  // Contact
  emails: {
    general: "hello@yourdomain.com",
    privacy: "privacy@yourdomain.com",
    team: "team@yourdomain.com",
  },

  // Social
  social: {
    twitter: "@yourbrand",
  },

  // Assets (replace files in public/)
  logo: {
    path: "/logo.svg",
    pngPath: "/logo.png",
    alt: "YourBrand Logo",
  },

  // SEO
  seo: {
    titleTemplate: "%s | YourBrand",
    defaultTitle: "YourBrand - Your Default Page Title",
    keywords: ["your", "keywords", "here"],
  },

  // Analytics (get IDs from your analytics providers)
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
  },

  // Sanity CMS (create a project at sanity.io)
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
  },

  // Copyright
  copyright: `(c) ${new Date().getFullYear()} YourBrand. All rights reserved.`,
}
```

**After changing:** All components that import from `site.config.ts` automatically reflect the new values. Run `npm run build` to verify.

---

## 2. Navigation & Footer (navigation.config.ts)

File: `src/config/navigation.config.ts`

### Main Navigation

```typescript
export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",           // Dropdown label
    basePath: "/products",       // Used for active-state detection
    items: [
      { label: "Product A", href: "/products/a" },
      { label: "Product B", href: "/products/b" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
```

- Add/remove top-level links by modifying the array
- Dropdowns use the `basePath` for active-state highlighting
- Only one dropdown is supported in the current navigation component

### Mobile-Only Links

```typescript
export const mobileOnlyLinks: NavLink[] = [
  { label: "Careers", href: "/careers" },
]
```

Links that appear only in the mobile hamburger menu.

### Footer Sections

```typescript
export const footerSections: FooterSection[] = [
  {
    title: "Products",
    links: [
      { label: "Product A", href: "/products/a" },
      { label: "Product B", href: "/products/b" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact", external: true },
    ],
  },
]
```

- Each section becomes a column in the desktop footer
- `external: true` links open in a new tab and use `siteConfig.bookingUrl` for `/contact`
- Legal links (privacy, terms, cookies) are in `legalLinks` array

### Footer Taglines

```typescript
export const footerTagline = {
  desktop: "Your desktop tagline here.",
  mobile: "Shorter mobile tagline.",
}
```

---

## 3. Blog Categories (blog.config.ts)

File: `src/config/blog.config.ts`

```typescript
export const blogCategories: BlogCategory[] = [
  { value: "tutorials", label: "Tutorials" },
  { value: "news", label: "Company News" },
  { value: "engineering", label: "Engineering" },
]
```

- `value` must match what's stored in Sanity CMS
- `label` is the human-readable display text
- The shared `getCategoryLabel()` function is used across all blog pages

---

## 4. Colors & Theme

See [color-system.md](color-system.md) for the full guide. Quick summary:

Edit `src/app/globals.css` — change HSL values in `:root` (light theme) and `[data-theme='dark']` (dark theme).

**Critical:** Always update BOTH light and dark theme values.

---

## 5. Assets

Replace files in `public/` to change visual branding:

| Asset | Path | Notes |
|-------|------|-------|
| Logo (SVG) | `public/logo.svg` | Used in nav and footer |
| Logo (PNG) | `public/logo.png` | Used in RSS feed and schemas |
| Favicons | `public/favicons/` | Generate at realfavicongenerator.net |
| Web Manifest | `public/favicons/site.webmanifest` | Update name and theme_color |
| OG Images | `public/og-*.jpg` | 1200x630px recommended |
| Page images | `public/home/`, `public/mission/`, etc. | Page-specific illustrations |
| Local fonts | `public/fonts/` | If using custom fonts |

**Favicons:** After generating new favicons, update the paths in `site.config.ts` if the filenames differ from the defaults.

**Fonts:** To change fonts, modify the font imports in `src/app/layout.tsx` (lines 20-81). The font variable names (e.g., `--font-satoshi`) are used in `tailwind.config.ts` and CSS.

---

## 6. Page Content

Page content is inline in page components under `src/app/`. Each page file contains its own copy, metadata, and structure.

### Modifying Existing Pages

1. Find the page in `src/app/{route}/page.tsx`
2. Rewrite the JSX content (text, headings, descriptions)
3. Update the `export const metadata: Metadata` at the top of the file
4. Update any JSON-LD schema markup embedded in the page
5. Replace page-specific images referenced in the component

### Adding New Pages

1. Create `src/app/{new-route}/page.tsx`
2. Follow this pattern:

```typescript
import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for SEO",
}

export default function NewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <ThemeToggle />
      </div>
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Your content here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

3. Add the page to `src/app/sitemap.ts` in the static pages array
4. Add navigation links in `navigation.config.ts`

### Removing Pages

1. Delete the `src/app/{route}/` directory
2. Remove from `src/app/sitemap.ts`
3. Remove from `navigation.config.ts` (both nav and footer)
4. Search for any internal links to the removed page: `grep -r '/{route}' src/`

---

## 7. Per-Page SEO

Each page exports its own metadata. When customizing, update:

```typescript
export const metadata: Metadata = {
  title: "Your Page Title",                    // Appended to titleTemplate
  description: "Your page description",        // 150-160 chars ideal
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    images: [{ url: "/og-your-page.jpg" }],    // Replace with your image
  },
  twitter: {
    // Uses siteConfig.social.twitter for site/creator by default
    title: "Twitter Card Title",
    description: "Twitter Card Description",
  },
}
```

For pages with JSON-LD schemas, update the schema objects to reflect your brand and content.

---

## 8. Environment Variables

Create `.env.local` with your values:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Environment variables override the defaults in `site.config.ts`. In production, set these in your hosting provider's environment settings.
