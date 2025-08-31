# Page Layout: Terms of Service

## Component Structure

### Overall Architecture

- **Framework**: Next.js 15 App Router page with SEO optimization
- **Schema Markup**: JSON-LD for WebPage and FAQ structured data
- **SEO Components**: Breadcrumbs (hidden for SEO), comprehensive meta tags
- **Theme Support**: Full light/dark theme integration

### Component Hierarchy

```
TermsPage
├── Schema Markup (JSON-LD scripts)
├── Navigation (shared component)
├── ThemeToggle (fixed position, desktop only)
├── Breadcrumbs (hidden but present for SEO)
├── Main Content Area
│   ├── Header Section
│   │   ├── Page Title (H1): ~3 words
│   │   └── Effective Date (dynamic): ~8-12 words
│   ├── Terms Content (prose layout)
│   │   ├── 12 Legal Sections (H2 headings)
│   │   │   ├── Agreement to Terms: ~35 words
│   │   │   ├── Description of Services: ~45 words + 5-item list
│   │   │   ├── Account Registration: ~50 words
│   │   │   ├── Acceptable Use Policy: ~20 words + 6-item list
│   │   │   ├── Intellectual Property Rights: ~2 subsections
│   │   │   ├── Payment and Billing: ~50 words
│   │   │   ├── Termination: ~60 words
│   │   │   ├── Disclaimers and Limitations: ~75 words
│   │   │   ├── Indemnification: ~40 words
│   │   │   ├── Governing Law: ~35 words
│   │   │   ├── Changes to Terms: ~45 words
│   │   │   └── Contact Information: ~15 words + contact details
│   ├── FAQ Section
│   │   ├── Section Title (H2): ~3 words
│   │   └── FAQ Items (6 collapsible details/summary)
│   │       ├── Each Question: ~8-15 words
│   │       └── Each Answer: ~35-65 words
│   └── Related Policies Section
│       ├── Section Title (H2): ~2 words
│       └── Policy Cards (2x grid)
│           ├── Privacy Policy Card: ~30 words
│           └── Cookie Policy Card: ~25 words
└── Footer (shared component)
```

## Responsive Behavior

### Desktop (>= 768px)

- Full 4-column max-width layout (max-w-4xl)
- Theme toggle visible in fixed top-right position
- FAQ accordion with hover states and smooth animations
- Related policies in 2-column grid

### Tablet (768px - 1024px)

- Content maintains max-width constraint
- Related policies remain in 2-column grid
- Theme toggle remains visible

### Mobile (< 768px)

- Theme toggle hidden (accessible via navigation)
- Related policies stack to single column (grid-cols-1)
- FAQ items maintain full-width accordion behavior
- Optimized touch targets for interactive elements

## Key Components Used

### Core UI Components

- **Navigation**: Shared navigation component with dropdown menus
- **Footer**: Shared footer component with multi-column layout
- **ThemeToggle**: Theme switcher with sun/moon icons
- **Breadcrumbs**: SEO-focused breadcrumb navigation (visually hidden)

### Interactive Elements

- **Details/Summary**: Native HTML accordion for FAQ items
  - Smooth rotation animation for chevron icons (180deg on open)
  - Hover states with color transitions
  - Proper ARIA labeling for accessibility

### Custom Styling

- **Prose Layout**: Custom prose styling with dark mode support
- **Card Backgrounds**: Uses `bg-card-background` with border accents
- **Hover Effects**: Subtle shadow and border color changes

## Content Guidelines

### Legal Content Structure

- **Comprehensive Coverage**: 12 major legal sections covering all standard terms
- **Clear Hierarchy**: H2 for main sections, H3 for subsections
- **Readable Length**: Sections range from 15-75 words for optimal readability
- **List Formatting**: Bulleted lists for service features and restrictions

### FAQ Section Guidelines

- **User-Focused Questions**: 6 practical questions covering common concerns
- **Concise Answers**: 35-65 words per answer for quick comprehension
- **Interactive Design**: Collapsible accordion with visual feedback
- **SEO Optimization**: Structured data markup for rich snippets

### Related Policies Section

- **Clear Navigation**: Direct links to related legal documents
- **Descriptive Content**: Brief explanations of what each policy covers
- **Consistent CTAs**: Action-oriented link text with arrow indicators

## SEO and Technical Features

### Metadata Optimization

- **Open Graph**: Complete social sharing tags
- **Twitter Cards**: Large image card format
- **Canonical URLs**: Proper canonical link structure
- **Robot Directives**: Optimized indexing instructions

### Structured Data

- **WebPage Schema**: Complete page identification
- **FAQ Schema**: Rich snippets for FAQ section
- **Breadcrumb Schema**: Navigation structure for search engines

### Performance Considerations

- **Static Generation**: Page pre-rendered at build time
- **Optimized Images**: OG image optimization with proper dimensions
- **Clean Markup**: Semantic HTML structure for accessibility

## Layout Measurements

### Content Density

- **Total Word Count**: ~1,200+ words of legal content
- **Reading Time**: ~5-7 minutes
- **Sections**: 12 main terms + 6 FAQ items + 2 related policies
- **Interactive Elements**: 8 collapsible FAQ items + 2 CTA cards

### Spacing and Typography

- **Header Spacing**: pt-32 pb-24 for proper navigation clearance
- **Content Spacing**: space-y-8 between major sections
- **Typography Scale**: 6xl/7xl for main heading, 2xl for section headings
- **Font Usage**: Geist Sans for headings, system fonts for body text
