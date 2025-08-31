# Page Layout: Inbound Sales Workforce

## Component Structure

- **Navigation (Fixed Header)**
  - Logo/Brand text: "novosapien"
  - Menu items: Home, Workforces (dropdown), Mission, Speak to us
  - Backdrop blur effect

- **Theme Toggle (Fixed Top-Right)**
  - Light/dark mode switcher
  - Hidden on mobile, visible on desktop

- **Hero Section (Full Viewport)**
  - Animated dots background pattern
  - Gradient overlay from bottom (accent/40 to transparent)
  - Centered card with backdrop blur
  - Badge: "Inbound Sales Workforce"
  - Main H1 heading: ~8-10 words
  - Subheading: ~20-25 words
  - Two CTA buttons: "See It In Action", "Talk to Us"

- **Process Overview Section**
  - Background: accent/40 overlay
  - Section header: ~15-20 words
  - Description paragraph: ~60-80 words
  - Visual process diagram:
    - Mobile: Vertical flow with arrows
    - Desktop: Horizontal flow with input sources, central workforce, output
  - Input labels: 4 items (Website Form, Ads, CRM, API)
  - Central workforce: 3 categories (Research, Strategy, Outreach)
  - Output: Qualified Meeting label

- **Agent Roster Section**
  - Background: Gradient overlay with card container
  - Section badge and heading: ~15-20 words
  - Description: ~40-50 words
  - Interactive components:
    - Mobile: Vertical list by category (3 sections)
    - Desktop: Tabbed interface with 3 tabs
    - 9 agent cards total (3 per category)
    - Modal system for detailed agent profiles
    - Navigation arrows for tab switching
  - Agent card dimensions: 260px wide, 360px min-height
  - Team collaboration subsection:
    - Heading: ~5 words
    - Description: ~40 words
    - 3 benefit cards with icons and descriptions

- **Problem Diagnosis Section**
  - Section header: ~15-20 words
  - Description: ~60-80 words
  - Layout structure:
    - Mobile: Single column with 4 expandable failure cards
    - Desktop: 3-column grid with funnel diagram in center
  - 4 failure cards with expandable content
  - Funnel SVG diagram (light/dark variants)
  - Total failure content: ~400 words when expanded

- **Method Section (Sticky Scroll)**
  - Section header: ~15-20 words
  - Description: ~40-50 words
  - Layout:
    - Mobile: Sequential cards with images
    - Desktop: Left text column, right sticky visuals
  - 4 method steps with step images
  - Scroll-triggered activation system
  - Each step: Label + title (~5-8 words) + description (~40-50 words)

- **Results Section**
  - Section badge and heading: ~10-15 words
  - Metrics grid: 4 cards with large numbers and descriptions
  - Description paragraph: ~60-80 words
  - Before/After comparison image (desktop only)
  - SVG graphics with light/dark variants

- **Final CTA Section**
  - Centered card layout
  - Badge: ~8-10 words
  - Main heading with accent text: ~10-15 words
  - Description: ~40-50 words
  - Two CTA buttons: "Deploy This Workforce", "See It In Action"

- **Related Solutions Section**
  - Section heading: ~8-10 words
  - Description: ~25-30 words
  - 2 solution cards with hover effects
  - Content Workforce and Workforce Lab links

- **FAQ Section**
  - Section heading: ~5-8 words
  - 6 expandable FAQ items
  - Each question: ~10-15 words
  - Each answer: ~60-100 words
  - Accordion-style interaction

- **Footer Component**
  - 4-column layout with company info, solutions, company links, resources
  - Copyright and legal links

## Responsive Behavior

- **Desktop (lg+)**: Full multi-column layouts with sticky elements, side-by-side content
- **Tablet (md-lg)**: 2-column grids, maintained functionality, adapted spacing
- **Mobile (sm and below)**: Single column stacking, vertical layouts, touch-optimized

## Key Components Used

- **UI Components**: Button, Card (from @/components/ui)
- **Layout Components**: Navigation, Footer, ThemeToggle, AnimatedDots
- **Interactive Components**: AgentRosterClient, FailureCardsClient, MethodSection
- **Icons**: 20+ Lucide React icons (Search, Building, Gift, Calendar, etc.)
- **Images**: Next.js Image component with light/dark variants
- **Animations**: Scroll-triggered, hover effects, modal transitions

## Content Guidelines

### Text Length Expectations:

- **Hero section**: Impactful, conversion-focused (~35 words total)
- **Agent descriptions**: Detailed 150-200 word profiles for credibility
- **Problem explanations**: Data-driven failure analysis with statistics (~100 words each)
- **Method steps**: Clear, actionable 40-50 word descriptions
- **FAQ answers**: Comprehensive 60-100 word explanations
- **CTAs**: Action-oriented, clear value proposition (~5-10 words)

### Interactive Elements:

- **Agent Roster**: Tabbed interface with modal details system
- **Problem Cards**: Expandable accordion-style cards
- **Method Section**: Sticky scroll with step activation
- **External Links**: 3 Cal.com booking integrations
- **Theme System**: Complete light/dark mode with dual graphics

### Performance Features:

- **Image Optimization**: Next.js Image component for all graphics
- **Lazy Loading**: Scroll-based activation for method section
- **Theme Support**: Dual light/dark mode graphics and styling
- **Schema Markup**: Service, Breadcrumb, and FAQ structured data
- **Responsive Images**: Breakpoint-specific sizing and positioning

### Visual Design:

- **Color System**: Consistent accent color theming throughout
- **Typography**: Proper heading hierarchy (H1 → H2 → H3)
- **Spacing**: Responsive padding and margins
- **Shadows**: Layered card effects with backdrop blur
- **Animations**: Smooth transitions and hover states

## Total Content Metrics

- **Word Count**: ~3,200 words (including all sections and FAQ)
- **Interactive Elements**: 25+ clickable/hoverable components
- **Visual Elements**: 15+ SVG graphics with theme variants
- **External Integrations**: Cal.com booking, demo links
- **Schema Types**: Service, FAQ, Breadcrumb markup for SEO
