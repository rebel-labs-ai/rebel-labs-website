# Page Layout: Content Creation Workforce

## Component Structure

### Navigation & Global Elements
- Navigation Component (imported)
- Theme Toggle: Fixed position top-right (hidden on mobile)
- Breadcrumbs: SEO breadcrumb navigation (hidden but present)
- Schema markup: JSON-LD for Service type

### Hero Section
- Background: Full-screen AnimatedDots with gradient overlay  
- Container: Card with backdrop blur (bg-card-background/80)
- Badge: "Content Creation Workforce" (~3 words)
- Main Heading (h1): "From Blank Page to Published Campaign." (~7 words)
- Subheading (p): ~21 words about autonomous content production
- CTA Button: "Talk to Us" with embedded link
- Responsive typography: text-2xl to text-7xl scaling

### Content Production Protocol Section
- Background: bg-accent/40 with full-width coverage
- Section Title (h2): "The Autonomous Content Lifecycle" (~4 words)
- Description: ~24 words about four-stage loop
- Four Protocol Stages (each):
  - Stage badge: "Stage 1/2/3/4" 
  - Headline (h3): ~7-9 words each
  - Description: ~43-45 words each
  - UI Mockup: Card component with aspect-ratio 4/3
- Layout: Alternating text left/right positioning
- Mockup Components:
  - BriefMockup: Mission Planner interface
  - CreationMockup: Iteration Studio interface  
  - AmplificationMockup: Dashboard with content grid
  - AnalysisMockup: Performance insights charts

### Method Section
- Section Title (h2): "Your Content Operating System" (~4 words)
- Description: ~34 words about custom workforce architecture
- Two-Step Process Cards:
  - Step 1 Card: "We Codify Your Brand DNA" (~6 words)
    - Icon: FileText in accent background
    - 3 bullet points: ~15-20 words each
  - Step 2 Card: "We Clone Your Expert Voices" (~6 words)  
    - Icon: Users in accent background
    - 3 bullet points: ~15-20 words each
  - Connecting Arrow: ChevronRight between cards (desktop only)
- Layout: 2-column grid on desktop, stacked on mobile
- Container: max-width 6xl

### Agent Roster Section (Dynamic Component)
- Background: Gradient from accent/40 to transparent
- Container: Card with accent border and shadow
- Badge: "Meet Your Team" (~3 words)
- Section Title (h2): "Meet Your Self-Managing Content Team" (~6 words)
- Description: ~29 words about specialized agents
- Mobile Layout:
  - Vertical sections for each category
  - Category headers: "Intelligence & Research", "Creation & Refinement", "Amplification & Distribution"
  - Agent cards: Compact with icon, name, arrow
- Desktop Layout:
  - Tab Navigation: 3 tabs with active states
  - Agent Cards Grid: 3 columns on large screens
  - Carousel Controls: Left/right navigation arrows
  - Agent Cards: 260px width, 360px min-height
- Agent Modal System:
  - Backdrop with blur effect
  - Modal: max-width 3xl, scrollable content
  - Agent details: Icon, name, role, description sections

### Impact Amplifier Section  
- Section Title (h2): "The New Definition of Leverage." (~6 words)
- Description: ~40 words about ROI amplification
- Amplifier Diagram Card:
  - Mobile Layout: Vertical flow with arrows
  - Desktop Layout: Horizontal flow
  - Input: Single brief icon with description
  - Processor: Content workflow circle images (light/dark mode)
  - Output: Grid of content types (6-7 items)
  - Visual Elements: Connecting arrows, pulsing animations
- Container: max-width 6xl
- Images: /content/circle.svg and /content/circle-dark.svg

### Final CTA Section
- Container: Card with backdrop blur
- Badge: "Ready to Transform Your Content Process?" (~6 words)
- Title (h2): "Stop Feeding the Content Treadmill." (~5 words)
- Description: ~24 words about scaling brand voice
- CTA Button: "Talk to Us" with embedded calendar link
- Layout: Centered content, max-width 4xl

### Related Solutions Section
- Section Title (h2): "Explore Our Other AI Workforces" (~6 words)
- Description: ~20 words about business operations
- Solution Cards: 2-card grid (md:grid-cols-2)
- Each Card: Title, description, "Learn more →" link
- Container: max-width 6xl, max-width 3xl for grid

### FAQ Section
- Section Title (h2): "Frequently Asked Questions" (~3 words)
- FAQ Items: 8 questions using details/summary elements
- Each FAQ: Question title, collapsible answer
- Container: max-width 4xl
- Schema: FAQ schema markup for SEO

### Footer
- Footer Component (imported)

## Responsive Behavior

- **Desktop (lg+)**: Full layout with animations, 3-column agent grid, horizontal amplifier flow
- **Tablet (md)**: 2-column grids, simplified animations, tab navigation maintained
- **Mobile (sm)**: Single column, vertical stacking, mobile-optimized agent list, simplified mockups

## Key Components Used

- Card (from @/components/ui/card)
- Button (from @/components/ui/button)  
- AnimatedDots (from @/components/animated-dots)
- Navigation (from @/components/navigation)
- Footer (from @/components/footer)
- ThemeToggle (from @/components/theme-toggle)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- Dynamic AgentRoster (client component with Suspense)
- Various Lucide React icons

## Content Guidelines

- Hero section: Impactful, conversion-focused messaging
- Agent descriptions: Detailed, persona-driven voice 
- Process explanations: Clear, step-by-step flow
- CTAs: Action-oriented with strategic session focus
- Technical features: Balanced accessibility with depth
- Brand voice: Professional yet innovative throughout

## Interactive Features

- Tab navigation for agent categories
- Agent detail modals with comprehensive information
- Responsive carousel controls
- Theme-aware image switching
- Hover effects on cards and buttons
- Collapsible FAQ sections
- Background animations and pulsing effects

## Performance Considerations

- Dynamic imports for heavy interactive components
- Suspense fallbacks for loading states
- Image optimization with Next.js Image component
- CSS-in-JS for responsive styling
- Proper semantic HTML structure
- SEO schema markup integration
