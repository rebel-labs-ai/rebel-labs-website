# Page Layout: Privacy Policy

## Component Structure

- Navigation (fixed header)
  - Logo: "novosapien" brand
  - Home link
  - Workforces dropdown (Inbound Sales, Content Creation, Custom)
  - Mission link
  - "Speak to us" CTA button
- Theme Toggle (fixed top-right corner)
  - Light/dark mode switcher
  - Sun/moon animated icons
- Breadcrumbs (hidden but present for SEO)
  - Home > Privacy Policy
- Main Content Container
  - Header Section
    - Page Title (h1): ~2 words "Privacy Policy"
    - Last Updated Date: Dynamic date display (~15-20 words)
  - Privacy Policy Content Section
    - Introduction: ~50-60 words
    - Information We Collect: ~200-250 words
      - Personal Information subsection: ~80-100 words
      - Automatic Collection subsection: ~50-70 words
    - How We Use Information: ~120-150 words
    - Data Security: ~80-100 words
    - Data Sharing: ~150-180 words
    - Your Rights: ~120-150 words
    - Contact Information: ~30-40 words
  - FAQ Section
    - Section Title (h2): ~3 words "Frequently Asked Questions"
    - 5 FAQ Items (collapsible details elements)
      - Each question: ~8-15 words
      - Each answer: ~50-80 words
  - Related Policies Section
    - Section Title (h2): ~2 words "Related Policies"
    - Terms of Service Card
      - Title: ~3 words
      - Description: ~15-20 words
      - CTA Link: ~3 words
    - Cookie Policy Card
      - Title: ~2 words
      - Description: ~15-20 words
      - CTA Link: ~4 words
- Footer
  - Company tagline: ~12 words
  - Solutions links (3 items)
  - Company links (3 items)
  - Resources links (1 item)
  - Legal links (3 items)
  - Copyright notice: ~6 words

## Responsive Behavior

- Desktop: Full layout with large typography (7xl heading)
- Tablet: Maintained structure with adjusted spacing
- Mobile:
  - Reduced heading size (6xl)
  - Single column layout for related policies
  - Collapsed navigation menu
  - Theme toggle visible on all screen sizes

## Key Components Used

- Navigation (from @/components/navigation)
- Footer (from @/components/footer)
- ThemeToggle (from @/components/theme-toggle)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- Link (from next/link)
- Native HTML details/summary elements for FAQ accordion

## Content Guidelines

- Page title: Premium typography treatment with Geist Sans font
- Content sections: Prose styling with consistent spacing
- FAQ section: Interactive accordion interface for user engagement
- Related policies: Card-based layout encouraging exploration
- Contact information: Clear email and address details
- Schema markup: Structured data for SEO optimization

## SEO and Technical Features

- Comprehensive metadata with OpenGraph and Twitter cards
- JSON-LD schema markup for WebPage and FAQPage
- Hidden breadcrumbs for search engine navigation
- Canonical URL specification
- Robot directives for indexing control
- Dynamic date generation for freshness indicators

## Interactive Elements

- FAQ accordion: Expandable details with animated chevron icons
- Related policy cards: Hover effects with shadow and border changes
- Theme toggle: Smooth transitions between light/dark modes
- Navigation links: Hover states and dropdown functionality

## Layout Specifications

- Max content width: 4xl container (896px)
- Top padding: 32 units (128px) to clear fixed navigation
- Bottom padding: 24 units (96px)
- Horizontal padding: 4 units (16px) for mobile responsiveness
- Section spacing: 8 units (32px) between major content blocks
