# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack enabled (faster builds)
- `npm run build` - Production build with TypeScript checking and ESLint validation
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format all files with Prettier (uses tabs, not spaces)
- `npm run format:check` - Check if files are properly formatted

Always run `npm run lint` and `npm run build` before committing changes to ensure code quality. Bu only run it if the user asks you to commit your work. You do not need to run the dev server , or the build porcess or linting unles committing chnages or unless asked to.

## Architecture Overview

This is a Next.js 15 application using the App Router with a complete design system built on Radix UI primitives.

### Tech Stack

- **Framework**: Next.js 15.4.6 with React 19.1.0 and Turbopack
- **Styling**: Tailwind CSS v3 with CSS variables for theming
- **UI Components**: Radix UI primitives with custom styled components
- **Theme System**: next-themes with data-theme attribute switching
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint + Prettier (configured for tabs)

### Key Architectural Patterns

**Theme System Architecture**:

- CSS variables defined in `src/app/globals.css` for both `:root` and `[data-theme='dark']`
- Tailwind config extends colors to use `hsl(var(--variable-name))` pattern
- `ThemeProvider` wraps entire app and manages `data-theme` attribute on HTML element
- All colors automatically theme-aware through CSS variable system
- Application-specific color palette includes brand colors, status indicators, and semantic tokens

**Component Architecture**:

- `src/components/ui/` - Radix UI-based primitives with consistent styling
- `src/components/providers/` - React context providers (theme management)
- Components use `cn()` utility (`clsx` + `tailwind-merge`) for className merging
- Styled with `class-variance-authority` for consistent variant patterns
- Custom components in `src/components/` include animations, forms, and page-specific elements

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
3. Follow the variant pattern established in `src/components/ui/button.tsx`
4. Ensure components work with both light and dark themes
5. Use `forwardRef` for proper ref handling with Radix primitives

**Styling Guidelines**:

- Use CSS variables from the theme system (e.g., `bg-primary`, `text-foreground`)
- Prefer semantic color tokens over literal colors
- All components should work seamlessly with theme switching
- Use `data-theme` attribute for theme-specific styling when needed
- Application palette includes specialized colors like `primary-blue`, `accent-teal`, status colors (`hot-lead`, `warm-lead`, `cold-lead`)

**Code Formatting**:

- Project uses tabs (not spaces) - configured in `.prettierrc`
- Format-on-save enabled in `.vscode/settings.json`
- ESLint enforces Prettier formatting rules through `eslint.config.mjs`
- All formatting rules respect tab indentation

- Don't run the build process. Or run the dev server, unless I say.
