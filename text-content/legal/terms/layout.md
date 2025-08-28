# Terms of Service Page - Layout Structure

## Page Architecture

### Overall Layout Structure

- **Framework**: Next.js page component with shared layout elements
- **Container**: Full-screen layout with fixed navigation and footer
- **Theme**: Supports light/dark theme switching via ThemeToggle component

### Component Hierarchy

```
TermsPage
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

- **Layout**: Full-screen with proper spacing for navigation (`pt-24 pb-16`)
- **Centering**: Flexbox centered both horizontally and vertically
- **Background**: Theme-aware background color (`bg-background`)

#### 4. Content Container

- **Structure**: Single centered div with text alignment
- **Content**: Only contains the page title
- **Styling**: Simple text-centered layout

#### 5. Page Title Section

- **Heading**: H1 element with "Terms of Service" text
- **Styling**: Large, bold text (`text-4xl font-bold text-foreground`)
- **Theme**: Automatically adapts to light/dark theme

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

- **Page Title**: 3 words (15 characters)
- **Total Page-Specific Text**: 3 words
- **Navigation Text**: ~15 navigation items and labels
- **Footer Text**: ~25+ links and descriptive text items

### Responsive Behavior

- **Mobile**: Navigation collapses, footer stacks vertically
- **Desktop**: Full horizontal layout with dropdown menus
- **Theme**: Seamless switching between light and dark modes

### Visual Elements

- **Logo**: SVG logo appears in navigation and footer
- **Icons**: Theme toggle icons (sun/moon), chevron for dropdown
- **Background**: Solid theme-aware background color
- **Borders**: Subtle accent borders on interactive elements

### Interactive Elements

- **Theme Toggle**: Animated icon transitions on hover/click
- **Navigation**: Hover effects on all buttons and links
- **Footer Links**: Hover state color changes
- **Dropdown**: CSS-based hover dropdown with animations

## Layout Guidelines

### Spacing

- Navigation provides proper top spacing (`pt-24`)
- Content area has generous vertical padding
- Footer has substantial padding (`py-16`)

### Typography

- Consistent font sizing hierarchy
- Theme-aware text colors
- Proper contrast ratios for accessibility

### Accessibility

- Proper heading structure (H1 for page title)
- Semantic HTML elements
- Theme toggle has aria-label
- External links have proper rel attributes

## Current Content Status

- **Status**: Minimal placeholder content
- **Page Title Only**: Contains only the main heading
- **Missing**: Legal terms content, sections, detailed policy text
- **Completion**: ~5% (structure only, no legal content)
