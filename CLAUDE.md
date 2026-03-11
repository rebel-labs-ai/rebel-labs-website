# CLAUDE.md

## Your Role

You are a helpful assistant for this website template. The user has cloned this production-ready Next.js 15 website and wants to make it their own. Help them with whatever they need — rebranding, changing colors, rewriting content, adding pages, setting up analytics, or anything else.

Be conversational and proactive. If the user says "I want to set up my website," ask them about their brand. If they paste a color palette, update the theme. If they want new pages, build them. Meet them where they are.

**The one rule: protect the infrastructure.** This template ships with production-tested analytics, SEO, blog platform, theme system, and UI components. Change the identity, not the plumbing.

## Skills & Agents

You have three specialized tools available. Use them when the situation calls for it — you don't need to wait for the user to ask.

### `/template` — Template Customization

**What it does:** Gives you deep knowledge of the codebase architecture, what's locked vs customizable, and how to make changes correctly.

**When to use it:**
- Rebranding the site (name, colors, navigation, content)
- Adding or removing pages
- Changing the color palette or theme
- Any customization where you need to know what files to touch and what to leave alone

**How to invoke:** Use the Skill tool with `skill: "template"`

The skill loads reference files covering architecture, customization guide, file map, and color system. It knows the exact boundaries of what's safe to change.

### `/frontend-design` — Frontend Design Quality

**What it does:** Guides creation of distinctive, high-quality frontend interfaces that avoid generic AI aesthetics.

**When to use it:**
- Building new pages or components
- Redesigning existing page layouts
- Adding visual elements, animations, or micro-interactions
- Any time the user wants something that looks genuinely designed, not cookie-cutter

**How to invoke:** Use the Skill tool with `skill: "frontend-design"`

### B2B Website Copywriter Agent

**What it does:** Expert B2B SaaS copywriter that understands positioning, conversion optimization, and SEO-friendly writing. Writes like a founder, not a brochure.

**When to use it:**
- Rewriting page content for a new brand
- Writing new landing page copy
- Improving headlines, CTAs, or value propositions
- Any content that needs to convert visitors into leads or customers

**How to invoke:** Spawn as a subagent using the Agent tool with `subagent_type: "b2b-website-copywriter"`. Provide it with detailed context: what files to look at, what the brand does, who the audience is, and what needs to change.

**Important:** This agent needs specific instructions. Don't just say "rewrite the homepage" — tell it the brand name, what the company does, the target audience, and which files contain the content to rewrite.

## What's Protected (Don't Touch)

These systems are production-tested and should not be modified:

- **Analytics suite** — GTM, GA, Clarity, Vercel Analytics, cookie consent, page tracking
- **SEO infrastructure** — Sitemaps, robots.txt, RSS feed, JSON-LD schemas, metadata patterns, breadcrumbs
- **Blog platform** — Sanity CMS client, Portable Text rendering, blog pages, author pages, category filtering
- **Theme architecture** — CSS variable -> Tailwind -> component pipeline, dark/light mode switching
- **UI component library** — All Radix UI primitives in `src/components/ui/`
- **Utility functions** — `cn()` helper, SEO helpers, analytics tracking

If you're about to modify any of these, stop and reconsider. The user's changes should flow *through* this infrastructure, not replace it.

## What's Customizable

**Config files first.** Always check if a change can be made via config before editing component files.

| What the user wants | Where to change it |
|---------------------|-------------------|
| Brand name, tagline, domain, emails, social | `src/config/site.config.ts` |
| Navigation links, footer sections, legal links | `src/config/navigation.config.ts` |
| Blog categories | `src/config/blog.config.ts` |
| Colors and theme | `src/app/globals.css` (CSS variables in `:root` and `[data-theme='dark']`) |
| Page content and copy | Individual `page.tsx` files in `src/app/` |
| Logo, favicons, OG images, illustrations | `public/` directory |
| Fonts | Font imports in `src/app/layout.tsx` |
| Per-page SEO metadata | `metadata` exports in each page file |
| Analytics IDs | `.env.local` environment variables |
| Sanity CMS project | `.env.local` environment variables |

**When changing colors:** Always update BOTH `:root` (light) and `[data-theme='dark']` (dark) in `globals.css`. Colors are HSL triplets without the `hsl()` wrapper.

**When adding/removing pages:** Update `src/app/sitemap.ts` and `src/config/navigation.config.ts`.

## Development Commands

- `npm install` — Install dependencies (run this first after cloning)
- `npm run dev` — Start development server with Turbopack
- `npm run build` — Production build with TypeScript checking and ESLint validation
- `npm run lint` — Run ESLint for code quality checks
- `npm run format` — Format all files with Prettier (uses tabs, not spaces)

Always run `npm run build` before committing to ensure code quality.

## Environment Variables

Create a `.env.local` file with the user's values:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

These override the defaults in `site.config.ts`. In production, set them in the hosting provider's environment settings.

## Tech Stack

- **Framework**: Next.js 15 with React 19 and Turbopack
- **Styling**: Tailwind CSS v3 with CSS variables for theming
- **UI Components**: Radix UI primitives (button, card, input, label, textarea, switch, badge, dropdown)
- **Theme System**: next-themes with `data-theme` attribute switching
- **CMS**: Sanity CMS for blog content with Portable Text rendering
- **Analytics**: Google Tag Manager + Google Analytics + Microsoft Clarity + Vercel Analytics
- **Type Safety**: TypeScript strict mode
- **Code Quality**: ESLint + Prettier (tabs, not spaces)

## Key Patterns

**Theme System**: CSS variables (HSL triplets) in `globals.css` -> mapped in `tailwind.config.ts` -> used as Tailwind classes in components.

**Component Pattern**: `cn()` utility (clsx + tailwind-merge), `forwardRef`, CVA for variant patterns. When building new components, follow these patterns.

**Config-Driven**: Brand identity, navigation, and blog categories are centralized in `src/config/`. Change once, reflected everywhere.

**Page Pattern**: Every page follows: metadata export, Navigation component, ThemeToggle, main content, Footer component.

## Project Structure

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

## Git Conventions

Commits are structured so anyone (human or AI) can quickly understand what changed, why, and how.

### When to Commit

| DO Commit | DON'T Commit |
|-----------|-------------|
| After each meaningful task is complete | Mid-task before it's working |
| Before switching to a different task | Incomplete or broken states |
| Only the specific files you changed | Unrelated files you didn't work on |

**Rule:** One task = one commit. Only stage specific files — never use `git add -A` or `git add .`.

### Commit Message Format

```
<action-verb> <what> [<scope>]

WHAT:
- <change 1>
- <change 2>

WHY: <1-2 sentence rationale>

HOW: <key technical approach or decision>
```

| Section | Required | Purpose |
|---------|----------|---------|
| `<summary>` | Yes | Quick scan in `git log --oneline` |
| `WHAT:` | Yes | Bulleted list of concrete changes |
| `WHY:` | Yes | Context for why this change was made |
| `HOW:` | If non-obvious | Technical decisions worth knowing |

### Branch Management

Work on `main` by default. If the user wants to work on a separate branch:

**Branch Naming:** `<type>/<short-description>`

| Type | Use For |
|------|---------|
| `feature/` | New functionality |
| `bugfix/` | Bug fixes |
| `refactor/` | Code improvements |
| `chore/` | Config, deps, tooling |

Never change branches without user confirmation.

---

## Setting Up Analytics

### Google Tag Manager
1. Create a GTM container at tagmanager.google.com
2. Add container ID to `.env.local` as `NEXT_PUBLIC_GTM_ID`
3. The site automatically loads GTM with cookie consent integration

### Google Analytics
1. Create a GA4 property at analytics.google.com
2. Add measurement ID to `.env.local` as `NEXT_PUBLIC_GA_ID`
3. GA loads conditionally based on cookie consent

### Microsoft Clarity
1. Create a project at clarity.microsoft.com
2. Add project ID to `.env.local` as `NEXT_PUBLIC_CLARITY_PROJECT_ID`
3. Clarity provides session recordings and heatmaps

## Setting Up Sanity CMS

1. Create a Sanity project at sanity.io
2. Set up content schemas for `post` and `author` types
3. Add project ID to `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`
4. The blog pages automatically fetch and render content from Sanity

### Required Sanity Schemas

**Post**: title, slug, excerpt, seoTitle, metaDescription, focusKeyword, tags, body (Portable Text), author (reference), category, publishedAt, image, featured

**Author**: name, slug, role, bio, image, twitter, linkedin, expertise
