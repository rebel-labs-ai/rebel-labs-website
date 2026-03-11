# Production Website Template

A production-ready Next.js 15 website with analytics, SEO, a Sanity CMS blog, and a full design system — ready for you to make it your own using Claude Code.

## What's Included

- Next.js 15 with React 19 and Turbopack
- Full dark/light theme system with Tailwind CSS
- Radix UI component library
- Google Tag Manager, Google Analytics, Microsoft Clarity, Vercel Analytics
- SEO infrastructure (sitemaps, RSS, JSON-LD, metadata)
- Sanity CMS blog with categories, authors, and Portable Text
- Cookie consent
- Mobile-responsive navigation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Claude Code](https://claude.ai/code) (recommended — the template is designed to be customized with Claude)

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/rebel-labs-ai/rebel-labs-website.git my-website

# 2. Move into the directory
cd my-website

# 3. Install dependencies
npm install

# 4. Start Claude Code
claude
```

That's it. Claude reads the project instructions and knows the entire codebase — what's safe to change, what's infrastructure, and how everything connects. Just tell it what you want:

- *"Set up this site for my company Acme Corp"*
- *"Change the color scheme to dark navy and gold"*
- *"Rewrite the homepage for a B2B cybersecurity company"*
- *"Add an About page and a Pricing page"*
- *"Set up my Google Analytics and Sanity CMS"*

### Without Claude Code

You can also customize manually. Edit these files:

1. `src/config/site.config.ts` — Brand name, domain, emails, social, analytics IDs
2. `src/config/navigation.config.ts` — Navigation links and footer
3. `src/config/blog.config.ts` — Blog categories
4. `src/app/globals.css` — Color palette (CSS variables)
5. `public/` — Logo, favicons, OG images
6. Page content in `src/app/` files

Then create a `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Deploy

Deploy to [Vercel](https://vercel.com) (recommended), Netlify, or any platform that supports Next.js. Set your environment variables in the hosting provider's dashboard.

## License

MIT
