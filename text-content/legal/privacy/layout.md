# Privacy Policy Page - Layout Structure

## Page Architecture

### Overall Layout Structure

- **Framework**: Next.js page component with shared layout elements
- **Container**: Full-screen layout with fixed navigation and footer
- **Theme**: Supports light/dark theme switching via ThemeToggle component

### Component Hierarchy

```
PrivacyPolicyPage
├── Navigation (fixed header)
├── ThemeToggle (fixed top-right)
├── Main Content Area
│   └── Content Container
│       └── Page Title Section
└── Footer (bottom)
```

### Section Breakdown

#### 1. Navigation Component

- **Position**: Fixed at top of viewport (`fixed top-0 left-0 right-0 z-50`)
- **Content**: Logo, navigation links, dropdown menu, contact button
- **Interactive Elements**:
  - Logo and brand name ("novosapien")
  - Home button
  - Workforces dropdown (Inbound Sales, Content Creation, Custom)
  - Mission button
  - "Speak to us" external link button
- **Styling**: Backdrop blur, responsive design, hover states

#### 2. Theme Toggle Component

- **Position**: Fixed top-right corner (`fixed top-4 right-4 z-50`)
- **Functionality**: Light/dark theme switcher
- **Visual**: Animated sun/moon icons with hover effects
- **Interactive**: Button with smooth transitions

#### 3. Main Content Area

- **Layout**: Full-screen with significant top padding (`pt-32 pb-24`)
- **Container**: Constrained max-width container (`max-w-4xl mx-auto`)
- **Background**: Theme-aware background color (`bg-background`)
- **Padding**: Horizontal padding for mobile responsiveness (`px-4`)

#### 4. Content Container

- **Structure**: Centered content area with maximum width constraint
- **Responsive**: Auto-margins for centering, mobile-friendly padding
- **Content**: Contains the page title section

#### 5. Page Title Section

- **Alignment**: Text-centered layout
- **Heading**: H1 element with "Privacy Policy" text
- **Typography**: Very large, light-weight font styling
  - **Size**: `text-6xl md:text-7xl` (responsive sizing)
  - **Weight**: `font-light` (thin font weight)
  - **Tracking**: `tracking-tight` (condensed letter spacing)
  - **Font Family**: `font-geist-sans` (custom font)
- **Theme**: Automatically adapts to light/dark theme (`text-foreground`)

#### 6. Footer Component

- **Structure**: Four-column grid layout on desktop, stacked on mobile
- **Sections**:
  - Company Info (logo, tagline)
  - Solutions (workforce links)
  - Company (mission, careers, contact)
  - Resources (blog)
- **Bottom Section**: Copyright and legal links (Privacy Policy, Terms of Service, Cookie Policy)

## Layout Constraints

### Text Content Measurements

- **Page Title**: 2 words (13 characters)
- **Total Page-Specific Text**: 2 words
- **Navigation Text**: ~15 navigation items and labels
- **Footer Text**: ~25+ links and descriptive text items

### Responsive Behavior

- **Mobile**:
  - Text size reduces from 7xl to 6xl
  - Navigation collapses appropriately
  - Footer stacks vertically
- **Desktop**:
  - Large typography display
  - Full horizontal layout with dropdown menus
- **Theme**: Seamless switching between light and dark modes

### Visual Elements

- **Logo**: SVG logo appears in navigation and footer
- **Icons**: Theme toggle icons (sun/moon), chevron for dropdown
- **Background**: Solid theme-aware background color
- **Typography**: Premium typography treatment with custom font

### Interactive Elements

- **Theme Toggle**: Positioned separately from navigation
- **Navigation**: Hover effects on all buttons and links
- **Footer Links**: Hover state color changes
- **Dropdown**: CSS-based hover dropdown with animations

## Layout Guidelines

### Spacing

- **Top Padding**: Generous spacing (`pt-32`) for title prominence
- **Bottom Padding**: Substantial spacing (`pb-24`)
- **Container**: Proper max-width constraint for readability
- **Responsive Padding**: Mobile-friendly horizontal padding

### Typography Hierarchy

- **Primary**: Very large, light-weight display heading
- **Responsive**: Scales appropriately across screen sizes
- **Font**: Custom Geist Sans for modern appearance
- **Color**: Theme-aware foreground color

### Accessibility

- **Heading Structure**: Proper H1 for page title
- **Semantic HTML**: Appropriate main element structure
- **Theme Toggle**: Positioned accessibly with aria-label
- **Contrast**: Theme-aware colors ensure proper contrast ratios

## Current Content Status

- **Status**: Minimal placeholder content
- **Page Title Only**: Contains only the main heading with premium typography
- **Missing**: Privacy policy content, sections, detailed policy text
- **Typography**: Enhanced display treatment compared to other legal pages
- **Completion**: ~5% (structure only, no privacy content)

## Unique Design Elements

- **Enhanced Typography**: Larger, more prominent title treatment than Terms page
- **Custom Font**: Uses Geist Sans for modern appearance
- **Responsive Sizing**: More aggressive responsive typography scaling
- **Premium Layout**: Suggests this page may receive more detailed content treatment
