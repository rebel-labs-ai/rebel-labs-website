# Page Layout: Homepage

## Component Structure

### Navigation
- Fixed positioned navigation bar with backdrop blur
- Logo (text-based: "novosapien")
- Navigation links (Home, Workforces dropdown, Mission)
- Primary CTA button ("Book a Demo")
- Mobile-responsive with hamburger menu

### Theme Toggle
- Fixed positioned in top-right corner
- Hidden on mobile devices
- Switches between light and dark themes

### Hero Section (Full Screen)
- Background: AnimatedDots component with gradient overlay
- Layout: Centered content with responsive padding
- Badge: ~6-8 words with special styling and border
- Main Heading (h1): Split into two lines
  - Line 1: "Stop Managing Tools." (~3 words)
  - Line 2: "Start [AnimatedText]" (~2 words + animation)
- AnimatedText component: 4 rotating phrases
- Subtitle (p): ~15-20 words, responsive line breaks
- CTA Button: Primary action button
- Min height: 85vh on mobile, full screen on desktop

### Revenue Operations Full Stack Section
- Background: Accent color with opacity
- Layout: 3-column grid on desktop (1-column on mobile)
- Section header: ~10-12 words with text shadow effect
- Section description: ~45-50 words
- Left column: "The Operational Power"
  - Column header: ~3 words
  - 3 feature items, each with:
    - Icon (SVG, ~40x48px)
    - Title: ~3-4 words
    - Description: ~15-20 words
- Center column: Workforce stack image
  - Light/dark variants
  - Responsive sizing (260px-400px width)
- Right column: "The Strategic Impact"
  - Column header: ~3 words
  - 3 feature items (same structure as left)

### Digital Workforce Definition Section
- Background: Gradient from accent
- Layout: 2-column grid (text left, image right)
- Badge: "In a nutshell" with icon
- Section heading (h2): ~6 words
- Description paragraph: ~40-45 words
- Image: Digital workforce illustration (light/dark variants)
- Responsive: Stacks on mobile

### Solution Overview Section
- Background: White/default
- Layout: 2-card grid
- Badge: "The Solution" (~2 words)
- Section heading (h2): Split across 2 lines, ~8 words total
- Section description: ~30-35 words
- Two workforce cards:
  - Card 1: "Inbound Conversion Workforce"
    - Title: ~3 words
    - Description: ~20-25 words
    - Image: Lead workforce diagram (400x320px)
    - CTA link: "Explore Inbound Sales →"
  - Card 2: "Content Creation Workforce"
    - Title: ~3 words
    - Description: ~20-25 words
    - Image: Content workforce diagram (400x320px)
    - CTA link: "Explore Content Workforce →"

### How We Do It Section
- Component: ScrollAnimatedSteps
- Animated scroll-triggered content
- Process steps with visual transitions

### Core Capabilities Section
- Layout: Mixed grid (1 large card + 5 smaller cards)
- Section heading (h2): ~2 words
- Section description: ~25-30 words
- Grid arrangement:
  - Large card (2x2): "Elastic Infrastructure"
    - Title: ~2 words
    - Description: ~20-25 words
    - Interactive component: ElasticInfrastructureGraph
  - Medium card (2x1): "Seamless Integration"
    - Title: ~2 words
    - Description: ~20-25 words
  - Small card (1x1): "Autonomous Execution"
    - Title: ~2 words
    - Description: ~15-20 words
  - Large card (1x2): "Collaborative Reasoning"
    - Title: ~2 words
    - Description: ~20-25 words
    - Image: Reasoning diagram (SVG)
  - Medium card (2x1): "Understand the Why, Not Just the What"
    - Title: ~8 words
    - Description: ~20-25 words
    - Image: Analytics visualization
  - Small card (1x1): "Outcome-Centric Reporting"
    - Title: ~2 words
    - Description: ~20-25 words

### Value Proposition Section
- Layout: 2-column comparison layout
- Section heading (h2): ~6 words
- Before column: "Rigid Operations"
  - Badge: "Before" with red styling
  - 6 bullet points: ~8-15 words each
  - Red color scheme and inset shadow
- After column: "Elastic Operations"
  - Badge: "After" with green styling
  - 6 bullet points: ~8-15 words each
  - Green color scheme and enhanced shadow

### Final CTA Section
- Layout: Centered card with backdrop blur
- Badge: ~5 words
- Headline: Split across 2 lines
  - Line 1: "Stop Buying Smarter Shovels." (~4 words)
  - Line 2: "Start Delivering Outcomes." (~3 words, accented)
- Description: ~25-30 words
- CTA button: "Book a Demo"

### Blog Section (Conditional)
- Component: SimpleBlogSection
- Shows 3 recent blog posts from Sanity CMS
- Only renders if posts are available
- Dynamic content with error handling

### FAQ Section
- Section heading (h2): ~3 words
- 5 FAQ items using details/summary elements
- Questions: ~8-12 words each
- Answers: ~40-60 words each
- Accordion-style interaction
- Schema markup for SEO

### Footer
- Component: Footer
- Multi-column layout with company information
- Navigation links and legal pages

## Responsive Behavior

### Desktop (lg: 1024px+)
- Full 3-column grids
- Side-by-side layouts
- Large typography (text-4xl to text-7xl)
- All animations and interactions enabled
- Theme toggle visible

### Tablet (md: 768px - 1023px)
- 2-column grids where applicable
- Reduced typography sizes
- Maintained visual hierarchy
- Simplified animations

### Mobile (< 768px)
- Single column layouts
- Stacked content sections
- Smaller typography (text-2xl to text-4xl)
- Touch-friendly button sizes (min 48px)
- Hidden theme toggle
- Simplified navigation with mobile menu

## Key Components Used

### UI Components
- Button (from @/components/ui/button)
- Card (from @/components/ui/card)
- ThemeToggle (from @/components/theme-toggle)

### Custom Components
- Navigation (from @/components/navigation)
- AnimatedDots (background animation)
- AnimatedText (rotating text effect)
- ScrollAnimatedSteps (process animation)
- ElasticInfrastructureGraph (interactive graph)
- Footer (from @/components/footer)
- SimpleBlogSection (blog post display)

### External Libraries
- Lucide React (TrendingUp icon)
- Next.js (Image, Link components)
- Sanity client (blog post data)

## Content Guidelines

### Typography Hierarchy
- Hero: Largest text (text-7xl on desktop)
- Section headings: text-4xl
- Subsections: text-xl
- Body text: text-base to text-lg
- Descriptions: text-muted-foreground

### Content Length Estimates
- Hero section: ~25 words
- Section descriptions: ~30-50 words
- Feature descriptions: ~15-25 words
- FAQ answers: ~40-60 words

### Interactive Elements
1. Animated text rotation (4 phrases)
2. Scroll-triggered animations
3. Card hover effects
4. Button state changes
5. Theme switching (affects all images)
6. Dropdown navigation
7. Accordion FAQ sections
8. Elastic infrastructure graph animation

### Visual Assets
All images have light and dark theme variants:
- workforce-stack.svg / workforce-stack-dark.svg
- digital-workforce.png / digital-workforce-dark.png
- lead-workforce.png / lead-workforce-dark.png
- content-workforce.png / content-workforce-dark.png
- reasoning.svg / reasoning-dark.svg
- understand.svg / understand-dark.svg

### SEO Optimization
- Single H1 tag (fixed from dual H1 issue)
- Structured data for Organization, WebPage, SoftwareApplication
- FAQ schema markup
- Comprehensive meta tags and Open Graph data
- Image alt text for accessibility