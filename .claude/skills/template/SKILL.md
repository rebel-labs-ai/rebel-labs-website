---
description: Customize this production website template. Use when the user wants to change brand identity, colors, navigation, content, or pages while preserving the analytics, SEO, blog platform, and component infrastructure. Triggers on requests to rebrand, customize, theme, or adapt the site.
disable-model-invocation: true
---

> **Invoke with:** `/template` | **Keywords:** customize, rebrand, template, theme, adapt site

Help users make this production website their own. The site ships with comprehensive analytics (GTM, GA, Clarity), SEO infrastructure (sitemaps, RSS, structured data), a Sanity CMS blog platform, Radix UI components, and a full dark/light theme system. Your job is to change the identity while preserving the infrastructure.

**Input:** What the user wants to change (brand, colors, navigation, content, pages)
**Output:** Modified source files with the user's customizations applied

## When to Use This Skill

Use this skill when:
- Setting up the template for a new brand/company
- Changing colors, navigation, or content
- Adding or removing pages
- Updating brand assets (logo, favicons, OG images)

**Skip this skill when:**
- Modifying analytics, SEO infrastructure, or the blog platform (those are locked in)
- Building new UI components (use the Radix UI primitives directly)
- Working on Sanity CMS schema changes (separate concern)

## Core Principle

**The infrastructure is sacred. The identity is yours.**

Everything in this codebase falls into one of three categories:

| Category | What It Means | Examples |
|----------|--------------|---------|
| **LOCKED** | Never modify. This is production infrastructure. | Analytics suite, SEO helpers, Radix UI primitives, theme architecture, Portable Text renderer |
| **CONFIG** | Change via config files. One file = one concern. | Brand name, nav links, blog categories, analytics IDs |
| **CUSTOMIZABLE** | Edit directly in the source files. | Page content, per-page metadata, images, CSS color values |

## Reference Files

Load the reference file that matches what the user wants to do:

| Topic | Reference File | When to Load |
|-------|---------------|--------------|
| Infrastructure overview | [architecture.md](references/architecture.md) | When you need to understand what's locked and why |
| How to customize | [customization-guide.md](references/customization-guide.md) | When making any changes — this is the primary guide |
| File-by-file map | [file-map.md](references/file-map.md) | When you need to find a specific file or understand its classification |
| Color system | [color-system.md](references/color-system.md) | When changing colors, theme, or palette |

## Quick Start

For a full rebrand, work through these in order:

1. **`src/config/site.config.ts`** — Brand name, domain, emails, social, booking URL, analytics IDs, Sanity project ID, SEO defaults
2. **`src/config/navigation.config.ts`** — Nav links, footer sections, legal links
3. **`src/config/blog.config.ts`** — Blog categories
4. **`src/app/globals.css`** — Color palette (CSS variables in `:root` and `[data-theme='dark']`)
5. **`public/`** — Logo, favicons, OG images, page illustrations
6. **Page content** — Rewrite copy in individual `page.tsx` files

Load [customization-guide.md](references/customization-guide.md) for detailed instructions on each step.

## Key Principles

1. **Config files first** — Always check if a change can be made via `site.config.ts`, `navigation.config.ts`, or `blog.config.ts` before editing component files
2. **Build after changes** — Run `npm run build` to validate TypeScript and ESLint after modifications
3. **Both themes matter** — When changing colors, always update both `:root` (light) and `[data-theme='dark']` (dark) in `globals.css`
4. **Preserve patterns** — When adding pages, follow the existing pattern: metadata export, Navigation, ThemeToggle, main content, Footer
5. **Update the sitemap** — When adding/removing pages, update `src/app/sitemap.ts`
6. **Don't touch infrastructure** — If you're about to modify a file marked LOCKED in the file map, stop and reconsider

## Validation Checklist

After making changes, verify:

- [ ] `npm run build` passes (TypeScript + ESLint)
- [ ] `npm run dev` renders correctly in browser
- [ ] Both light and dark themes look correct
- [ ] Navigation links work (desktop + mobile)
- [ ] Footer links are correct
- [ ] Blog page loads and categories display
- [ ] Page metadata appears in view-source
