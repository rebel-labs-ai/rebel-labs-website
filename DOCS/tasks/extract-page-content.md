# Page Content Extraction Task

## Overview
This task extracts all text content and layout structure from React component pages and formats them into separate markdown files for content management.

## Input
- **Component Path**: The path to the React component file (e.g., `/src/app/workforces/inbound-sales/page.tsx`)
- **Output Directory**: The target directory in `/DOCS/text-content/` where the content.md and layout.md files should be created

## Process

### Step 1: Read and Analyze Component
1. Read the entire React component file
2. Identify all imported components and their purpose
3. Map the component structure and hierarchy
4. Extract metadata from the Metadata export if present

### Step 2: Extract Content
Extract all text content including:
- **Metadata**: title, description, keywords from the Metadata export
- **Headings**: All h1, h2, h3, etc. elements
- **Paragraphs**: All p elements and text nodes
- **Lists**: ul, ol, and li content
- **Buttons/CTAs**: Button text and links
- **Card content**: Text within Card components
- **Dynamic content placeholders**: Note where content comes from external sources (e.g., Sanity CMS)
- **Alt text**: From images
- **Labels**: Form labels, tooltips, aria-labels

### Step 3: Map Layout Structure
Document the page structure including:
- Component hierarchy (which components contain which)
- Section organization
- Grid/flex layouts and responsive breakpoints
- Animation and interaction patterns
- Conditional rendering logic
- Rough content lengths for each section (e.g., "2-3 sentences", "100-150 words")

### Step 4: Format Output Files

#### content.md Format:
```markdown
---
title: [Page Title from Metadata]
description: [Meta Description]
keywords: [Keywords if present]
last_updated: [Current Date]
source_file: [Path to source component]
---

# [Main Page Heading]

## [Section Name]
[All text content from that section]

## [Next Section]
[Content...]

### Dynamic Content
- [List any dynamic content sources]
- [e.g., "Blog posts from Sanity CMS"]
```

#### layout.md Format:
```markdown
# Page Layout: [Page Name]

## Component Structure
- Navigation
- Hero Section
  - Heading (h1): ~10-15 words
  - Subheading (p): ~20-30 words
  - CTA Button
  - Background Animation (AnimatedDots)
- Features Section
  - Grid: 3 columns on desktop, 1 on mobile
  - Feature Cards (3x)
    - Icon
    - Title: ~3-5 words
    - Description: ~15-20 words
- [Continue mapping all sections...]

## Responsive Behavior
- Desktop: Full layout with animations
- Tablet: 2-column grids
- Mobile: Single column, simplified animations

## Key Components Used
- Button (from @/components/ui/button)
- Card (from @/components/ui/card)
- [List all significant components]

## Content Guidelines
- Hero section: Impactful, conversion-focused
- Feature descriptions: Benefit-driven, concise
- CTAs: Action-oriented, clear value proposition
```

### Step 5: Write Files
1. Create directories if they don't exist
2. Write content.md to the appropriate directory
3. Write layout.md to the same directory
4. Ensure proper formatting and no duplication

## Special Handling

### Global Components
For Navigation and Footer:
- Extract menu items, links, and structure
- Note any conditional rendering (e.g., auth state)
- Document mobile vs desktop variations

### Dynamic Pages
For blog and other dynamic content:
- Document the content structure/template
- Note data sources and queries
- Include sample/placeholder content

### Form Pages
For contact, careers, etc.:
- Extract all form field labels and help text
- Document validation messages
- Include success/error state content

## Success Criteria
- All visible text content is extracted
- Layout structure is clearly documented
- Content lengths are estimated for each section
- Metadata is preserved
- No React/JSX code appears in the markdown files
- Files are properly formatted and readable

## Error Handling
- If a component import fails, note it but continue
- If no content exists for a section, create the files with a note
- If dynamic content source is unclear, document as "Dynamic content source: Unknown"