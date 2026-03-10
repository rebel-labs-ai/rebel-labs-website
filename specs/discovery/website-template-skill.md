# Discovery: Website Template Customization Skill

## Problem Statement

This Next.js 15 website has been built as a production-ready, high-scale site with comprehensive analytics (GTM, GA, Clarity), SEO infrastructure (sitemaps, RSS, structured data, metadata), a Sanity CMS blog platform, Radix UI component library, and a full dark/light theme system. We want to allow other users to take this codebase and make it their own — changing brand, colors, content, navigation, pages — while preserving the production infrastructure that took significant effort to build.

## Solution Overview

A single Claude Code skill (`/template`) that, when loaded, gives the AI agent complete understanding of:
1. What infrastructure is locked in and must not be changed
2. What is customizable and exactly how to change it
3. The file-level map of the codebase with modification boundaries

The skill operates conversationally — the user describes what they want to change, and the agent makes the changes guided by reference files.

## Key Decisions

1. **Single skill, not multiple** — One `/template` skill with multiple reference files, not separate skills for colors/navigation/etc.
2. **Reference files over sub-commands** — The agent reads the reference files and works conversationally, rather than following rigid sub-command flows.
3. **Execute, don't just guide** — The skill should enable the agent to actually make changes, not just provide instructions.
4. **Preserve infrastructure** — Analytics, SEO, blog platform, theme system architecture, component library are never modified. Only the data/content that flows through them changes.

## What's Locked In (Infrastructure)

- Theme architecture: CSS variables → Tailwind config → component classes pipeline
- Radix UI primitives: button, card, input, label, textarea, switch, badge, dropdown-menu
- SEO infrastructure: sitemap generation, robots.txt, RSS feed, JSON-LD schemas, metadata patterns, Breadcrumbs component, SEOHead component
- Analytics suite: GTM, Google Analytics, Microsoft Clarity, Vercel Analytics/SpeedInsights, cookie consent, unified analytics manager
- Blog platform: Sanity CMS client, Portable Text rendering, blog page structure, category filtering, author pages
- Component patterns: cn() utility, CVA variants, forwardRef, asChild composition
- Dark/light mode: next-themes, data-theme attribute switching, paired light/dark images
- Security headers, caching configuration, Next.js config patterns
- Code quality: ESLint + Prettier (tabs), TypeScript strict mode

## What's Customizable

### Via Config Files (easiest)
- **`src/config/site.config.ts`** — Brand name, domain, emails, social handles, booking URL, analytics IDs, Sanity project ID, copyright, logo paths, OG image paths, SEO defaults (title template, description, keywords)
- **`src/config/navigation.config.ts`** — Main nav links (with dropdown support), footer sections, legal links, taglines, mobile-only links
- **`src/config/blog.config.ts`** — Blog categories and labels

### Via CSS Variables (colors)
- **`src/app/globals.css`** — All color values in `:root` and `[data-theme='dark']` selectors. HSL triplet format without the hsl() wrapper. Core UI variables (background, foreground, card, primary, etc.) plus brand-specific variables.
- **`tailwind.config.ts`** — Two hardcoded hex values (accent-hex, primary-blue-hex) that should match the CSS variables. Also any brand-specific color token names.

### Via Component/Page Files (content)
- Page copy/messaging — Hardcoded inline in page components (homepage is ~1260 lines)
- Page-specific metadata — Each page has its own `export const metadata`
- Page-specific schema markup — JSON-LD in page components
- Page-specific images — Referenced inline in components
- Page structure — Adding/removing routes in `src/app/`
- Sitemap entries — `src/app/sitemap.ts` has hardcoded static page list

### Via Assets
- Logo: `public/logo.svg`, `public/logo.png`
- Favicons: `public/favicons/` directory (7 files + webmanifest)
- OG images: `public/og-*.jpg` files
- Page illustrations: `public/home/`, `public/mission/`, `public/workforces/`
- Fonts: `public/fonts/` (local Satoshi font) + Google Font imports in layout.tsx

## Constraints

- Must work with Claude Code's skill system (SKILL.md + reference files)
- Skill will be built locally in `.claude/skills/` within this repo
- Installation instructions needed for users to copy to their `~/.claude/skills/` directory
- Reference files should be comprehensive enough for an AI agent to work autonomously
- The skill should not modify or require changes to the locked-in infrastructure

## Scope

**In scope:**
- SKILL.md with clear prompt for the agent
- Reference files: architecture, customization guide, file map, color system
- Installation instructions (how to install in ~/.claude/skills/)

**Out of scope:**
- Automated setup wizard / interactive prompts
- Deployment configuration skill
- Testing framework setup

## Reference Files Consulted

**Codebase:**
- `src/config/site.config.ts` — Central brand config (just created)
- `src/config/navigation.config.ts` — Navigation data (just created)
- `src/config/blog.config.ts` — Blog categories (just created)
- `src/app/globals.css` — Theme CSS variables
- `tailwind.config.ts` — Tailwind color mappings
- `src/components/ui/` — Radix UI primitives
- `src/components/navigation.tsx` — Navigation component
- `src/components/footer.tsx` — Footer component
- `src/app/layout.tsx` — Root layout with metadata
- `src/utils/seo-helpers.ts` — SEO utility functions
- `src/lib/analytics/config.ts` — Analytics configuration
- `src/sanity/client.ts` — Sanity CMS client
- `src/app/blog/` — Blog pages
- `src/app/sitemap.ts` — Sitemap generation

## Next Steps

Invoke the skill-builder skill to create the complete skill with SKILL.md and reference files.
