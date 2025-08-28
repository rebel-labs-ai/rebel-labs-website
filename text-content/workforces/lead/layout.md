# Workforces Lead Page - Layout Documentation

## Page Metadata

- **Title**: Inbound Sales Workforce
- **Description**: Deploy AI-powered inbound sales workforces to automate lead generation, qualification, and conversion. Scale your sales operations with intelligent automation.

## Overall Page Structure

### 1. Navigation Component (Fixed Header)

- **Position**: Fixed top navigation with backdrop blur
- **Brand**: Novosapien logo with "novosapien" text
- **Menu Items**: Home, Workforces (dropdown), Mission, Speak to us
- **Workforces Dropdown**: Inbound Sales, Content Creation, Custom
- **Text Element Count**: 8 navigation labels

### 2. Theme Toggle

- **Position**: Fixed top-right corner
- **Interactive Element**: Theme switcher for light/dark mode

### 3. Hero Section (Full Viewport Height)

- **Background**: Animated dots pattern with gradient overlay
- **Layout**: Centered card with backdrop blur
- **Text Elements**: 4 main text components (~35 words total)
- **CTA Button**: "See It In Action" (external link)

### 4. Explanation Section

- **Background**: Accent color overlay (accent/40)
- **Layout**: Centered with visual process diagram
- **Text Elements**: Header, description, input/output labels (~80 words total)
- **Visual Elements**: Process flow diagram with icons and arrows

### 5. Interactive Roster Section (Meet Your Team)

- **Background**: Gradient overlay with card container
- **Layout**: Tabbed interface with 3 categories
- **Interactive Elements**:
  - Tab navigation (Research & Planning, Strategy & Analysis, Outreach & Execution)
  - Agent cards (3 per tab, 9 total)
  - Modal system for detailed agent information
  - Navigation arrows for tab switching
- **Text Elements**: ~200 words in section headers, ~2000+ words in agent details
- **Cards**: 9 agent cards with consistent 260px width, 360px min-height

### 6. Problem Diagnosis Section (The Broken Funnel)

- **Layout**: Central funnel diagram with 4 failure cards positioned around it
- **Interactive Elements**: Expandable cards with detailed failure explanations
- **Text Elements**: ~400 words total across all failure descriptions
- **Visual**: SVG funnel diagram (light/dark mode variants)

### 7. Method Section (4-Step Protocol)

- **Layout**: Sticky scroll implementation with left text, right visuals
- **Interactive Elements**: Scroll-triggered step activation
- **Text Elements**: 4 method steps (~150 words total)
- **Visual Elements**: Step-specific SVGs that change based on scroll position
- **Animation**: Opacity and scale transitions for active steps

### 8. Results & ROI Section

- **Layout**: Metrics grid (4 cards) + before/after comparison image
- **Text Elements**: 4 metric cards + descriptive text (~60 words total)
- **Visual**: Large before/after comparison SVG

### 9. Final CTA Section

- **Layout**: Centered card with call-to-action
- **Text Elements**: Header, description, button (~50 words total)
- **CTA Button**: "Deploy This Workforce" (external booking link)

### 10. Footer Component

- **Layout**: 4-column grid with company info, solutions, company links, resources
- **Text Elements**: ~40 footer links and labels
- **Bottom Section**: Copyright and legal links

### 11. Modal System (Agent Details)

- **Trigger**: Clicking on any agent card
- **Layout**: Centered overlay with backdrop blur
- **Content**: Detailed agent information with structured sections
- **Interactive**: Close button and click-outside-to-close

## Layout Constraints and Guidelines

### Responsive Design

- **Desktop**: Full multi-column layouts with sticky elements
- **Mobile**: Single-column stacking with reduced spacing
- **Breakpoints**: Standard Tailwind breakpoints (md, lg)

### Text Element Lengths (Word Counts)

#### Short Text Elements (1-10 words)

- Navigation items: 8 items
- Button labels: 6 buttons
- Section badges: 5 badges
- Metric values: 4 metrics

#### Medium Text Elements (10-50 words)

- Hero headline and description: ~35 words
- Section headers: ~15-25 words each
- Agent card descriptions: ~20-30 words each

#### Long Text Elements (50+ words)

- Section descriptions: 60-100 words each
- Agent detail modals: 150-200 words each
- Failure explanations: 80-120 words each
- Method step descriptions: 30-50 words each

### Interactive Elements

- **Hover Effects**: All cards, buttons, and navigation items
- **Scroll Animations**: Method section sticky scroll
- **Click Interactions**: Agent cards, failure cards, tabs
- **External Links**: 3 booking/demo links
- **Modal System**: Agent details overlay

### Visual Elements

- **SVG Graphics**: 12+ different graphics (light/dark variants)
- **Icons**: 20+ Lucide React icons throughout
- **Animated Elements**: Dots background, scroll-triggered animations
- **Color System**: Consistent accent color theming

### Performance Considerations

- **Image Optimization**: Next.js Image component for all graphics
- **Lazy Loading**: Scroll-based activation for method section
- **Theme Support**: Dual light/dark mode graphics and styling
