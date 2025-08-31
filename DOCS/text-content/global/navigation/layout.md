# Page Layout: Navigation Component

## Component Structure

### Fixed Header Container

- **Positioning**: `fixed top-0 left-0 right-0 z-50`
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6 py-4`
- **Layout**: Responsive dual-layout (desktop/mobile)

### Desktop Navigation (hidden on mobile)

- **Container**: Backdrop-blurred rounded container
- **Background**: `bg-background/80 dark:bg-accent/35`
- **Border**: `border border-accent`
- **Layout**: Horizontal flex with centered alignment

#### Desktop Layout Structure:

1. **Logo Section**
   - Logo Image: 24x24px SVG
   - Brand Text: "novosapien" (~10 characters)
   - Vertical Separator: 1px divider

2. **Navigation Links** (6 items)
   - Home Button (~4 characters)
   - Workforces Dropdown (~10 characters + chevron icon)
   - Mission Button (~7 characters)
   - Blog Button (~4 characters)
   - Contact Button (~7 characters)

3. **Workforces Dropdown Menu**
   - Trigger: CSS hover with chevron rotation
   - Menu: Absolute positioned overlay
   - Items: 3 workforce options (~15-20 characters each)
   - Animation: Scale and opacity transitions (200ms)

### Mobile Navigation (hidden on desktop)

- **Header Bar**: Logo + hamburger menu toggle
- **Mobile Menu**: Collapsible dropdown overlay
- **Additional Items**: Careers + theme toggle

#### Mobile Layout Structure:

1. **Mobile Header Bar**
   - Logo Section (left): Image + brand text
   - Menu Toggle (right): Hamburger/X icon

2. **Mobile Menu Dropdown** (when open)
   - Home Link (~4 characters)
   - Workforces Expandable Section (~10 characters)
     - Inbound Sales (~13 characters)
     - Content Creation (~16 characters)
     - The Lab (~7 characters)
   - Mission Link (~7 characters)
   - Blog Link (~4 characters)
   - Careers Link (~7 characters)
   - Contact Link (~7 characters)
   - Divider Line
   - Theme Toggle (~9-10 characters + icon)

## Responsive Behavior

### Desktop (md and above)

- Horizontal navigation with CSS hover dropdown
- Fixed positioning with backdrop blur
- Button-style navigation items
- Logo with inline brand text

### Mobile (below md)

- Collapsible hamburger menu
- Full-width dropdown overlay
- Touch-friendly tap interactions
- Additional navigation items (Careers, Theme Toggle)
- Expandable Workforces section

### Tablet Considerations

- Uses mobile layout (below md breakpoint)
- Touch-optimized interactions
- Adequate spacing for finger taps

## Key Components Used

### External Dependencies

- **Next.js**: `Image`, `Link`, `usePathname`
- **React**: `useState`, `useEffect`
- **Lucide React**: `ChevronDown`, `Menu`, `X`, `Sun`, `Moon`
- **next-themes**: `useTheme`

### Internal Components

- **Button**: `@/components/ui/button`
- **Custom styling**: Dynamic className generation

## Interactive Features

### State Management

- **Mobile Menu State**: `isMobileMenuOpen`
- **Mobile Workforces State**: `isMobileWorkforceOpen`
- **Theme State**: Managed by `next-themes`
- **Mounted State**: Hydration handling

### Dynamic Styling

- **Active Page Detection**: `pathname` matching
- **Button Variants**: Ghost/outline based on active state
- **Conditional Classes**: Theme-aware styling

### Animations and Transitions

- **Chevron Rotation**: 180° on hover (desktop) and click (mobile)
- **Dropdown Transitions**: Scale and opacity (200ms)
- **Button Hover Effects**: Background and text color transitions
- **Mobile Menu Slide**: Smooth open/close transitions

## Content Guidelines

### Text Content Lengths

- **Brand Text**: 1 word (~10 characters)
- **Primary Navigation**: 5 single words (4-10 characters each)
- **Dropdown Items**: 2-word phrases (7-16 characters)
- **Mobile Additions**: 1-2 words (7-10 characters)
- **Theme Toggle**: 2 words + icon

### Navigation Hierarchy

- **Level 1**: Home, Mission, Blog, Contact
- **Level 2**: Workforces (parent category)
- **Level 3**: Inbound Sales, Content Creation, The Lab
- **Auxiliary**: Careers (mobile), Theme Toggle (mobile)

### Brand Identity Guidelines

- **Logo**: Consistent 24x24px sizing
- **Brand Text**: Lowercase with accent color split
- **Font**: Reddit Sans for brand consistency
- **Color Scheme**: Theme-aware with CSS variables

## Technical Implementation

### CSS Classes

- **Dynamic Button Styling**: Conditional className generation
- **Theme Support**: CSS variable integration
- **Responsive Utilities**: Tailwind breakpoint classes
- **Backdrop Effects**: Blur and transparency

### JavaScript Functionality

- **Client-side Only**: `"use client"` directive
- **Path Detection**: `usePathname` for active states
- **Theme Integration**: `next-themes` hook
- **State Management**: React hooks for UI state

### Accessibility Features

- **ARIA Labels**: "Toggle menu" for mobile button
- **Alt Text**: "Novosapien Logo" for image
- **Keyboard Navigation**: Button and link accessibility
- **Focus Management**: Proper tab order

## Performance Considerations

### Optimization Features

- **Next.js Image**: Optimized logo loading
- **CSS Animations**: Hardware-accelerated transforms
- **Conditional Rendering**: Mobile/desktop separation
- **Theme Hydration**: Mounted state handling

### Layout Stability

- **Fixed Positioning**: Prevents layout shift
- **Consistent Heights**: Button sizing consistency
- **Backdrop Blur**: Performance-optimized effects
