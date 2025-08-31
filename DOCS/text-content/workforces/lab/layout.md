# Page Layout: Lab Workforce Page

## Component Structure

- Navigation
- Hero Section
  - Badge: "The Workforce Lab" (~3 words)
  - Heading (h1): "Forge Your Unfair Advantage" (~4 words)
  - Description: ~30 words
  - CTA Button
  - Background: AnimatedDots component
  - Card wrapper with backdrop blur

- Division of Labor Section
  - Heading (h2): "The New Division of Labor" (~5 words)
  - Description: ~35 words
  - Partnership logos (Novosapien + Rebel Labs)
  - Partnership descriptions: 2 blocks (~25 words each)
  - Philosophy section: "Your Strategy, Autonomously Executed" (~5 words)
  - Two-column cards:
    - Your Team card with Brain icon (~50 words + 3 bullet points)
    - The Workforce card with Layers icon (~50 words + 3 bullet points)

- Engagement Protocol Section (Interactive)
  - Heading (h2): "The Engagement Protocol" (~3 words)
  - Scrollytelling layout: Text phases + sticky mockups
  - Three phases:
    - Phase One: "Strategic Intent to Architectural Blueprint" (~6 words, ~30 words description)
    - Phase Two: "Blueprint to Functional Asset" (~4 words, ~35 words description)
    - Phase Three: "Functional Asset to Full Autonomy" (~5 words, ~30 words description)
  - Interactive mockups: Mission Architect, Forge, Mission Control
  - Desktop: Scroll-triggered phase transitions
  - Mobile: Stacked layout with mockups below text

- Art of the Possible Section
  - Heading (h2): "The Art of the Possible" (~5 words)
  - Introduction: "The Lab exists to answer a simple question" (~10 words)
  - Key question: "What if you could..." (~4 words)
  - Grid: 2x2 on desktop, 1x1 on mobile
  - Four possibility cards:
    - Sales Intelligence (Search icon, ~25 words)
    - Pipeline Health (TrendingUp icon, ~25 words)
    - Prospecting (Target icon, ~25 words)
    - Marketing Optimization (BarChart3 icon, ~25 words)

- Final CTA Section
  - Badge: "Ready to Forge Your Workforce?" (~5 words)
  - Heading (h2): "Commission Your Workforce" (~3 words)
  - Description: ~30 words
  - CTA Button: "Book a Lab Scoping Session"
  - Powered by: "Novosapien × Rebel Labs"
  - Card wrapper with backdrop blur

- FAQ Section
  - Heading (h2): "Frequently Asked Questions" (~3 words)
  - Accordion layout: 10 FAQ items
  - Questions: 8-15 words each
  - Answers: 40-80 words each
  - Interactive: Click to expand/collapse
  - Schema markup for SEO

- Related Solutions Section
  - Heading (h2): "Explore Our Other AI Workforces" (~6 words)
  - Description: ~15 words
  - Grid: 2 columns on desktop, 1 on mobile
  - Two workforce cards:
    - Content Workforce (~25 words)
    - Inbound Sales Workforce (~25 words)
  - Link cards with hover effects

- Footer

## Responsive Behavior
- Desktop: Full layout with scrollytelling animations, 2-column grids
- Tablet: Adjusted column counts, maintained hierarchy
- Mobile: Single column stack, simplified animations
  - Partnership logos stack vertically
  - Engagement protocol becomes stacked layout
  - Possibility cards stack in single column

## Key Components Used
- Navigation (from @/components/navigation)
- Footer (from @/components/footer)
- Card (from @/components/ui/card)
- Button (from @/components/ui/button)
- ThemeToggle (from @/components/theme-toggle)
- AnimatedDots (from @/components/animated-dots)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- Lucide React icons (Brain, Layers, Search, TrendingUp, Target, BarChart3)
- Dynamic imports for client-side components
- Interactive mockup components (ForgeMockup, MissionControlMockup)

## Content Guidelines
- Hero section: High-impact, conversion-focused messaging
- Division of labor: Clear partnership definition and value proposition
- Engagement protocol: Process-driven, transparent methodology
- Art of possible: Vision-driven, aspirational use cases
- FAQ section: Comprehensive, transparent information
- CTAs: Direct, action-oriented language
- Partnership messaging: Collaborative expertise emphasis
- Technical content: Balanced depth with accessibility

## Interactive Features
- Scrollytelling engagement protocol with mockup transitions
- FAQ accordion expand/collapse functionality
- Card hover effects with border and shadow transitions
- Responsive navigation with workforce dropdown
- Dynamic loading with suspense fallbacks
- Theme toggle integration
