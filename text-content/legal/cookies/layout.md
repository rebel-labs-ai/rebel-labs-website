# Cookie Policy Page - Layout Structure

## Page Architecture

### Overall Layout Structure

- **Framework**: Next.js page component with shared layout elements
- **Container**: Full-screen layout with fixed navigation and footer
- **Theme**: Supports light/dark theme switching via ThemeToggle component

### Component Hierarchy

```
CookiesPage
├── Navigation (fixed header)
├── ThemeToggle (fixed top-right)
├── Main Content Area
│   └── Centered Content Container
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

- **Layout**: Flex container with centered alignment (`flex-1 flex items-center justify-center`)
- **Padding**: Substantial vertical and horizontal padding (`py-24 px-4`)
- **Background**: Theme-aware background color (`bg-background`)
- **Centering**: Both horizontal and vertical centering via flexbox

#### 4. Content Container

- **Structure**: Simple text-centered div
- **Alignment**: Center-aligned text content
- **Content**: Contains only the page title

#### 5. Page Title Section

- **Heading**: H1 element with "Cookie Policy" text
- **Typography Styling**:
  - **Size**: `text-4xl` (large but smaller than Privacy page)
  - **Weight**: `font-bold` (heavier weight than Privacy page)
  - **Tracking**: `tracking-tight` (condensed letter spacing)
  - **Color**: `text-foreground` (theme-aware)
- **Font**: Uses default system font (not custom Geist Sans)

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

- **Page Title**: 2 words (12 characters)
- **Total Page-Specific Text**: 2 words
- **Navigation Text**: ~15 navigation items and labels
- **Footer Text**: ~25+ links and descriptive text items

### Responsive Behavior

- **Mobile**:
  - Navigation collapses appropriately
  - Footer stacks vertically
  - Maintains centered layout
- **Desktop**:
  - Full horizontal layout with dropdown menus
  - Perfect vertical centering maintained
- **Theme**: Seamless switching between light and dark modes

### Visual Elements

- **Logo**: SVG logo appears in navigation and footer
- **Icons**: Theme toggle icons (sun/moon), chevron for dropdown
- **Background**: Solid theme-aware background color
- **Typography**: Standard bold heading treatment

### Interactive Elements

- **Theme Toggle**: Positioned separately from navigation
- **Navigation**: Hover effects on all buttons and links
- **Footer Links**: Hover state color changes
- **Dropdown**: CSS-based hover dropdown with animations

## Layout Guidelines

### Spacing

- **Vertical Centering**: Main content perfectly centered vertically (`flex items-center justify-center`)
- **Padding**: Substantial padding on all sides (`py-24 px-4`)
- **Container**: Uses flex-based centering rather than margin centering
- **Mobile-friendly**: Responsive padding for all screen sizes

### Typography Hierarchy

- **Primary**: Large, bold heading treatment
- **Standard Font**: Uses system font stack (not custom typeface)
- **Moderate Sizing**: Smaller than Privacy page but appropriate for content type
- **Theme Colors**: Consistent with brand color system

### Accessibility

- **Heading Structure**: Proper H1 for page title
- **Semantic HTML**: Main element with proper flex structure
- **Theme Toggle**: Positioned accessibly with aria-label
- **Color Contrast**: Theme-aware colors ensure proper contrast ratios

## Current Content Status

- **Status**: Minimal placeholder content
- **Page Title Only**: Contains only the main heading
- **Missing**: Cookie policy content, sections, detailed policy text
- **Typography**: Standard treatment (less prominent than Privacy page)
- **Completion**: ~5% (structure only, no cookie policy content)

## Design Comparison with Other Legal Pages

### Relative to Terms Page

- **Layout**: More sophisticated centering (vertical + horizontal vs. just vertical)
- **Typography**: Similar sizing but different positioning approach
- **Spacing**: More generous padding treatment

### Relative to Privacy Page

- **Typography**: Less prominent (4xl vs 6xl/7xl, bold vs light weight)
- **Font**: Standard font vs. custom Geist Sans
- **Layout**: Flex centering vs. container-based approach
- **Priority**: Suggests lower content priority than Privacy page

## Layout Architecture Notes

- **Flex-based Centering**: Uses modern flexbox for perfect centering
- **Scalable Structure**: Easy to extend with content sections when needed
- **Consistent Theme**: Maintains brand consistency across legal pages
- **Performance**: Efficient layout with minimal DOM complexity

The page uses a clean, centered layout approach that would accommodate cookie policy content sections while maintaining visual hierarchy and accessibility standards.
