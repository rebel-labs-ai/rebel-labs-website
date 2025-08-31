# Page Layout: Mission

## Component Structure
- Navigation
- ThemeToggle
- Breadcrumbs
- Hero Section (MissionHeroSection)
  - Card with animated gradient border
  - Sparkles icon animation
  - Main heading (h1): ~15-20 words
  - Subheading (p): ~20-25 words
  - Background: TwinklingStars animation (200 stars)
- Main Content Sections
  - OldWorldSection: Grid layout with conveyor illustration
  - NewCoatSection: Reversed grid with AI-enhanced illustration
  - BlankCanvasSection: Asymmetric grid with AI logos
  - PrincipleSection: Centered content with comparison cards
  - PromisedLandSection: Featured card with HubSpokeGraphic
- CTA Section
  - Badge: ~5 words
  - Heading: ~8 words
  - Description: ~25 words
  - Dual buttons (Book Demo / Join Team)
- RelatedSolutionsSection: 3-column grid with workforce links
- Footer

## Responsive Behavior
- Desktop: Multi-column layouts with full hub-spoke diagram
- Tablet: Adapted grids maintaining visual hierarchy
- Mobile: Single column, hub-only display for complex diagrams

## Key Components Used
- Button (from @/components/ui/button)
- Card (from @/components/ui/card)
- Navigation (from @/components/navigation)
- Footer (from @/components/footer)
- ThemeToggle (from @/components/theme-toggle)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- TwinklingStars (client component with canvas animation)
- AnimatedHeroContent (client component for entrance animations)
- HubSpokeGraphic (server component with 6-spoke diagram)
- RelatedSolutionsSection (server component with workforce links)
- Image (Next.js optimized images with light/dark variants)

## Content Guidelines
- Hero section: Dramatic, transformation-focused messaging
- Problem sections: Progressive narrative building from SaaS to AI tools
- Solution sections: Outcome-focused, specific deliverables
- Hub-spoke diagram: Benefits of elastic operations model
- CTA section: Action-oriented, dual-path conversion (demo vs. careers)
- Visual storytelling: Each section has dedicated illustration supporting narrative
- Progressive disclosure: Information complexity increases through sections
- Theme consistency: All graphics have light/dark variants for seamless theme switching

## Layout Structure Details

### Hero Section Layout
- Container: max-w-5xl, centered
- Card: rounded-3xl with animated gradient border
- Content: centered text with icon
- Background: Full-screen twinkling stars canvas

### Content Sections Layout  
- Container: max-w-7xl with space-y-32 between sections
- Grid patterns: 2-column, reversed 2-column, asymmetric [1fr_300px]
- Cards: rounded-xl with backdrop-blur and accent borders
- Images: Next.js optimized with theme-aware variants

### Special Components
- **HubSpokeGraphic**: Elliptical positioning with 6 spoke cards around central hub
- **ComparisonCards**: 3-column grid with strikethrough/accent text styling
- **RelatedSolutions**: 3-column workforce link cards

### Animation Architecture
- **TwinklingStars**: Client-side canvas with 200 particle animation
- **AnimatedHeroContent**: Staggered entrance animations with data attributes
- **Gradient Border**: CSS animation on hero card border
- **Hover States**: Smooth transitions on all interactive elements
