# Page Layout: Cookie Policy

## Component Structure

- Navigation (fixed header)
- ThemeToggle (fixed top-right, hidden on mobile)
- Breadcrumbs (hidden but present for SEO)
- Main Content Area
  - Header Section
    - Page Title (h1): "Cookie Policy" (~2 words)
    - Effective Date: Dynamically generated current date
  - Cookie Policy Content (prose sections)
    - Introduction: ~3-4 sentences
    - What Are Cookies: ~2-3 sentences
    - Types of Cookies We Use: 4 subsections, ~2-3 sentences each
    - Specific Cookies Table: 3 example cookies with details
    - Managing Cookies: ~2-3 paragraphs
    - Updates Policy: ~2 sentences
    - Contact Information: Email and address
  - FAQ Section
    - Heading: "Frequently Asked Questions"
    - 5 FAQ items with expandable details
    - Question titles: ~8-15 words each
    - Answers: ~25-40 words each
  - Related Links Section
    - Privacy Policy card: Title + description + link
    - Terms of Service card: Title + description + link
- Footer

## Responsive Behavior

- Desktop: Full layout with fixed theme toggle visible
- Tablet: 2-column grid for related links, table remains scrollable
- Mobile: Single column, theme toggle hidden, FAQ fully collapsed

## Key Components Used

- Navigation (from @/components/navigation)
- Footer (from @/components/footer)
- ThemeToggle (from @/components/theme-toggle)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- Link (from Next.js)
- Schema markup with JSON-LD structured data

## Content Guidelines

### Header Section
- Large, prominent heading: ~6xl-7xl text size, light weight, Geist Sans font
- Centered layout with substantial padding
- Dynamic effective date with proper formatting

### Policy Content
- Prose styling with large text: ~lg size for readability
- Proper heading hierarchy: h2 for main sections, h3 for subsections
- Sectioned content with clear spacing between topics
- Table for specific cookie details with responsive overflow handling

### FAQ Section
- Interactive details/summary elements for collapsible content
- Card-style background with border for visual separation
- Hover effects and smooth transitions for better UX
- Rotating chevron icons to indicate expand/collapse state

### Related Links
- Two-column grid layout on desktop
- Card-style links with hover effects
- Clear call-to-action text with arrow indicators
- Consistent styling with main content cards

## Layout Structure Details

- **Container**: Max-width 4xl with centered alignment
- **Spacing**: pt-32 pb-24 px-4 for main content area
- **Background**: Theme-aware background color
- **Typography**: Prose layout with dark mode support
- **Interactive Elements**: 
  - Details/summary for FAQ expansion
  - Hover effects on links and cards
  - Theme toggle functionality
  - Smooth transitions throughout

## SEO and Accessibility Features

- Hidden breadcrumbs for SEO navigation structure
- Schema markup for both WebPage and FAQPage
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic HTML with proper roles and landmarks
- Table with appropriate headers and structure
- Link accessibility with descriptive text

## Content Length Estimates

- **Introduction**: ~50-60 words
- **What Are Cookies**: ~40-50 words  
- **Cookie Types**: ~200-250 words total (4 subsections)
- **Cookie Table**: 3 rows of specific cookie data
- **Management Instructions**: ~150-200 words
- **FAQ Answers**: ~30-40 words per answer (5 questions)
- **Total Content**: ~600-800 words excluding navigation/footer
