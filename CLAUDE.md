# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A production-ready Next.js 15 website template with comprehensive analytics, SEO infrastructure, a Sanity CMS blog platform, and a full dark/light theme system. It's designed to be customized for any brand while preserving the production infrastructure.

**Use the `/template` skill to get started with customization.**

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Production build with TypeScript checking and ESLint validation
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format all files with Prettier (uses tabs, not spaces)
- `npm run format:check` - Check formatting compliance

Always run `npm run build` before committing to ensure code quality.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Customize

Use the `/template` skill in Claude Code, or follow the manual steps:

1. Edit `src/config/site.config.ts` — Brand name, URLs, emails, social, analytics IDs
2. Edit `src/config/navigation.config.ts` — Navigation links and footer
3. Edit `src/config/blog.config.ts` — Blog categories
4. Edit `src/app/globals.css` — Color palette (CSS variables)
5. Replace assets in `public/` — Logo, favicons, OG images
6. Rewrite page content in `src/app/` page files

### 4. Run

```bash
npm run dev
```

## Available Skills & Agents

### `/template` Skill

The primary customization skill. Invoke it with `/template` in Claude Code. It provides:
- Architecture overview (what's locked vs customizable)
- Step-by-step customization guide
- File-by-file map of the codebase
- Color system documentation

### B2B Website Copywriter Agent

A specialized agent for rewriting page content and marketing copy. It understands B2B SaaS positioning, conversion optimization, and SEO-friendly writing. Use it when you need to rewrite page content for your brand.

The agent is available at `.claude/agents/b2b-website-copywriter.md`.

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15 with React 19 and Turbopack
- **Styling**: Tailwind CSS v3 with CSS variables for theming
- **UI Components**: Radix UI primitives (button, card, input, label, textarea, switch, badge, dropdown)
- **Theme System**: next-themes with `data-theme` attribute switching
- **CMS**: Sanity CMS for blog content with Portable Text rendering
- **Analytics**: Google Tag Manager + Google Analytics + Microsoft Clarity + Vercel Analytics
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint + Prettier (tabs, not spaces)

### What's Locked (Infrastructure)

These systems are production-tested and should not be modified:

- **Analytics suite** — GTM, GA, Clarity, Vercel Analytics, cookie consent, page tracking
- **SEO infrastructure** — Sitemaps, robots.txt, RSS feed, JSON-LD schemas, metadata patterns, breadcrumbs
- **Blog platform** — Sanity CMS client, Portable Text rendering, blog pages, author pages, category filtering
- **Theme architecture** — CSS variable → Tailwind → component pipeline, dark/light mode switching
- **UI component library** — All Radix UI primitives in `src/components/ui/`
- **Utility functions** — `cn()` helper, SEO helpers, analytics tracking

### What's Customizable

| Area | Where to Change |
|------|----------------|
| Brand identity | `src/config/site.config.ts` |
| Navigation & footer | `src/config/navigation.config.ts` |
| Blog categories | `src/config/blog.config.ts` |
| Colors & theme | `src/app/globals.css` (CSS variables) |
| Page content | Individual `page.tsx` files in `src/app/` |
| Assets | `public/` (logo, favicons, OG images, illustrations) |
| Fonts | Font imports in `src/app/layout.tsx` |
| Per-page SEO | `metadata` exports in each page file |

### Key Architectural Patterns

**Theme System**: Colors defined as HSL triplets in CSS variables → mapped in `tailwind.config.ts` → used as Tailwind classes in components. Both `:root` (light) and `[data-theme='dark']` (dark) must be updated when changing colors.

**Component Pattern**: All UI components use `cn()` utility (clsx + tailwind-merge), `forwardRef` for ref handling, and CVA for variant patterns.

**Config-Driven**: Brand identity, navigation structure, and blog categories are centralized in `src/config/` files. Change once, reflected everywhere.

### Project Structure

```
src/
├── app/                    # Pages and routes (App Router)
│   ├── layout.tsx          # Root layout (fonts, metadata, analytics)
│   ├── globals.css         # CSS variables and theme colors
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog listing + post pages
│   ├── author/             # Author profile pages
│   └── ...                 # Other page routes
├── components/
│   ├── ui/                 # Radix UI primitives (LOCKED)
│   ├── seo/                # SEO components (LOCKED)
│   ├── analytics/          # Analytics components (LOCKED)
│   ├── providers/          # Theme provider (LOCKED)
│   ├── navigation.tsx      # Main navigation (reads from config)
│   └── footer.tsx          # Footer (reads from config)
├── config/
│   ├── site.config.ts      # Brand identity & settings
│   ├── navigation.config.ts # Nav links & footer structure
│   └── blog.config.ts      # Blog categories
├── lib/                    # Utilities and analytics
├── sanity/                 # CMS client
├── utils/                  # SEO helpers
└── types/                  # TypeScript definitions
```

## Setting Up Analytics

### Google Tag Manager

1. Create a GTM container at [tagmanager.google.com](https://tagmanager.google.com)
2. Add your container ID to `.env.local` as `NEXT_PUBLIC_GTM_ID`
3. The site automatically loads GTM with cookie consent integration

### Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add your measurement ID to `.env.local` as `NEXT_PUBLIC_GA_ID`
3. GA loads conditionally based on cookie consent

### Microsoft Clarity

1. Create a project at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Add your project ID to `.env.local` as `NEXT_PUBLIC_CLARITY_PROJECT_ID`
3. Clarity provides session recordings and heatmaps

## Setting Up Sanity CMS

1. Create a Sanity project at [sanity.io](https://www.sanity.io)
2. Set up content schemas for `post` and `author` types
3. Add your project ID to `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`
4. The blog pages automatically fetch and render content from Sanity

### Required Sanity Schemas

**Post**: title, slug, excerpt, seoTitle, metaDescription, focusKeyword, tags, body (Portable Text), author (reference), category, publishedAt, image, featured

**Author**: name, slug, role, bio, image, twitter, linkedin, expertise

## Code Formatting

- Uses **tabs** (not spaces) — configured in `.prettierrc`
- ESLint enforces Prettier rules via `eslint.config.mjs`
- Run `npm run format` to auto-format all files
