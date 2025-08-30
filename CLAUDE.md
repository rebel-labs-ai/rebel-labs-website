# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack enabled (faster builds)
- `npm run build` - Production build with TypeScript checking and ESLint validation
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format all files with Prettier (uses tabs, not spaces)
- `npm run format:check` - Check if files are properly formatted

Always run `npm run lint` and `npm run build` before committing changes to ensure code quality. But only run it if the user asks you to commit your work. You do not need to run the dev server, or the build process or linting unless committing changes or unless asked to.

## Architecture Overview

This is a Next.js 15 application using the App Router with a complete design system built on Radix UI primitives.

### Tech Stack

- **Framework**: Next.js 15.4.6 with React 19.1.0 and Turbopack
- **Styling**: Tailwind CSS v3 with CSS variables for theming
- **UI Components**: Radix UI primitives with custom styled components
- **Theme System**: next-themes with data-theme attribute switching
- **CMS Integration**: Sanity CMS for blog content with Portable Text rendering
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint + Prettier (configured for tabs)

### Environment Configuration

Create a `.env.local` file with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here  # Defaults to "3nnkhkhz" if not set
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Key Architectural Patterns

**Theme System Architecture**:

- CSS variables defined in `src/app/globals.css` for both `:root` and `[data-theme='dark']`
- Tailwind config extends colors to use `hsl(var(--variable-name))` pattern
- `ThemeProvider` wraps entire app and manages `data-theme` attribute on HTML element
- All colors automatically theme-aware through CSS variable system
- Application-specific color palette includes brand colors, status indicators, and semantic tokens
- Variable cascade: CSS variable → Tailwind config → Component classes

**Component Architecture**:

- `src/components/ui/` - Radix UI-based primitives with consistent styling
- `src/components/providers/` - React context providers (theme management)
- Components use `cn()` utility (`clsx` + `tailwind-merge`) for className merging
- Styled with `class-variance-authority` (CVA) for consistent variant patterns
- Custom components in `src/components/` include animations, forms, and page-specific elements
- All Radix components use `forwardRef` for proper ref handling and composition

**Project Structure**:

- Uses `src/` directory organization
- `@/*` import alias configured for clean imports
- App Router with `src/app/` for pages and layouts
- Page-specific components colocated with their routes
- Utility functions in `src/lib/utils.ts`

**Key Pages and Features**:

- `/` - Homepage
- `/workforces/content` - Content workforce page with contact modal
- `/workforces/lead` - Lead workforce page with agent roster and method sections
- `/workforces/lab` - Lab/experimental features
- `/blog` - Blog with category filters, posts grid, and newsletter form
- `/careers` - Careers page with application form
- `/mission` - Mission page with animated hero and scroll effects
- `/contact`, `/privacy`, `/terms`, `/cookies` - Standard pages

### Component Development Guidelines

**When creating new UI components**:

1. Extend existing Radix primitives when possible
2. Use the `cn()` utility for className composition
3. Follow the CVA variant pattern established in `src/components/ui/button.tsx`:
   ```typescript
   const componentVariants = cva("base-classes", {
     variants: { variant: {...}, size: {...} },
     defaultVariants: { variant: "default", size: "default" }
   })
   ```
4. Ensure components work with both light and dark themes
5. Use `forwardRef` for proper ref handling with Radix primitives
6. Support the `asChild` prop pattern for composition flexibility

**Styling Guidelines**:

- Use CSS variables from the theme system (e.g., `bg-primary`, `text-foreground`)
- Prefer semantic color tokens over literal colors
- All components should work seamlessly with theme switching
- Use `data-theme` attribute for theme-specific styling when needed
- Application palette includes specialized colors:
  - Brand: `primary-blue`, `secondary-blue`, `accent-teal`
  - Status: `hot-lead`, `warm-lead`, `cold-lead`, `success-alive`, `appointment-booked`
  - Errors: `error-red`, `error-background`, `error-text`
  - Backgrounds: `main-background`, `card-background`, `section-background`

**Code Formatting**:

- Project uses tabs (not spaces) - configured in `.prettierrc`
- Format-on-save enabled in `.vscode/settings.json`
- ESLint enforces Prettier formatting rules through `eslint.config.mjs`
- All formatting rules respect tab indentation

### Sanity CMS Integration

**Content Management**:
- Blog posts are managed through Sanity CMS
- Client configured in `src/sanity/client.ts` with image URL builder
- Portable Text components in `src/components/portable-text-components.tsx` handle rich content rendering
- Blog pages fetch content dynamically with Next.js caching (CDN disabled for fresh content)

**Image Handling**:
- Sanity images use the `urlFor()` helper for optimization
- External image domains configured in `next.config.ts`: `cdn.sanity.io`, `novosapien.ai`

### Testing and Quality Assurance

- **Note**: No test framework is currently configured
- Always validate TypeScript types with `npm run build` before committing
- ESLint validation is integrated into the build process
- Use `npm run format:check` to verify formatting compliance

- Don't run the build process or run the dev server unless explicitly requested.
