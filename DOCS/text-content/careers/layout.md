# Page Layout: Careers

## Component Structure
- Navigation (global component)
- Theme Toggle (fixed top-right, hidden on mobile)
- SEO Components
  - Breadcrumbs (screen-reader only for accessibility)
  - Schema markup scripts (Organization and FAQ schemas)
- Main Content Container
  - Header Section
    - Heading (h1): 3 words ("Join Our Team")
    - Subtitle (p): 15 words describing company mission
  - Application Form (CareersForm client component)
    - Personal Information Fields (3 fields)
    - Social Profiles Section (3 fields with icons)
    - File Upload Area (drag-and-drop functionality)
    - Message Textarea (required field)
    - Submit Button
  - Related Links Section (RelatedLinks component)
    - Grid Layout (3 cards)
    - Links to Mission, Workforce Lab, and Blog pages
- FAQ Section (FAQSection component)
  - 8 Expandable FAQ Items
  - Structured data schema for SEO
- Footer (global component)

## Responsive Behavior
- Desktop: Full layout with theme toggle, centered content (max-w-3xl)
- Tablet: Maintained single-column layout, responsive typography
- Mobile: Hidden theme toggle, optimized form spacing

## Key Components Used
- Card (from @/components/ui/card) - Form container
- Button (from @/components/ui/button) - Submit button
- Navigation (from @/components/navigation) - Site navigation
- Footer (from @/components/footer) - Site footer
- ThemeToggle (from @/components/theme-toggle) - Light/dark mode
- Breadcrumbs (from @/components/seo/Breadcrumbs) - SEO breadcrumbs
- CareersForm (local client component) - Application form
- FAQSection (local server component) - FAQ accordion
- RelatedLinks (local server component) - Related content links

## Content Guidelines

### Header Section
- Title: Short, action-oriented (3 words)
- Subtitle: Mission-focused, inspirational (15 words)

### Application Form
- Form Design: Single column, icon-enhanced inputs
- Required Fields: Name and personal message only
- Optional Fields: Contact info and social profiles
- File Upload: PDF/DOC resume upload with drag-and-drop
- Placeholder Text: Helpful examples and formatting guides
- Validation: Clear requirements and error states

### Related Links Section
- Layout: 3-column grid on desktop, single column on mobile
- Content: Brief descriptions with call-to-action links
- Cards: Hover effects with shadow transitions
- Links: Internal navigation to key site sections

### FAQ Section
- Layout: Expandable details/summary elements
- Content: 8 comprehensive questions covering:
  - Company culture and working environment
  - Benefits and compensation
  - Hiring roles and opportunities
  - Remote work policies
  - Interview process
  - Entry-level and internship opportunities
  - Technology stack and tools
  - Professional development support
- Interaction: Click to expand/collapse with arrow rotation
- SEO: Structured data markup for rich snippets

## Technical Implementation
- Server Component Architecture: Main page is server-rendered for SEO
- Client Components: Form interactivity handled separately
- State Management: React useState for form data and file uploads
- Theme Integration: Full light/dark mode support with CSS variables
- Accessibility: Proper labels, ARIA attributes, keyboard navigation
- SEO Optimization: Meta tags, Open Graph, Twitter cards, schema markup

## Performance Considerations
- Server-side rendering for main content
- Client-side interactivity only where needed
- Optimized imports and component splitting
- Theme-aware styling with CSS variables
- Responsive images and icon optimization

## Content Length Estimates
- Header: ~18 words total
- Form Labels and Placeholders: ~50 words
- Related Links: ~45 words
- FAQ Content: ~650 words (8 questions with detailed answers)
- Total Page Content: ~760 words excluding navigation and footer