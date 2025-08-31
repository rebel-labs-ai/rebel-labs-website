# Footer Component Layout Documentation

## Component Location

- **File**: `/src/components/footer.tsx`
- **Component**: `Footer`
- **Last Updated**: 2025-08-31

## Overall Structure

### Container Layout

- **Background**: Semi-transparent card background (`bg-card/50`) with accent border top (`border-t border-accent/40`)
- **Max Width**: 6xl container (1152px) with auto horizontal margins
- **Padding**: Responsive padding (px-4 sm:px-6 py-12 sm:py-16)
- **Responsive Grid**: Mobile-first approach with conditional rendering

## Responsive Layout Strategy

### Mobile Layout (md:hidden)

- **Single Column**: Simplified brand section only
- **Brand Section**: Logo + company name + shortened tagline
- **Tagline**: "Building the Future. Building digital workforces." (7 words)

### Desktop/Tablet Layout (hidden md:grid)

- **Grid Structure**: 4-column grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-4`)
- **Gap**: 32px between columns (`gap-8`)

## Section Hierarchy

### 1. Company Information Section (Column 1)

**Layout**: `sm:col-span-2 md:col-span-1` (2 columns on tablet, 1 on desktop)

**Content Elements:**

- **Logo**: Next.js Image component (32x32px, `w-8 h-8`)
  - Source: `/logo.svg`
  - Alt text: "Novosapien Logo"
- **Company Name**: Inline text logo with dual-color styling
  - Font: `font-reddit-sans lowercase font-medium`
  - Colors: "novo" (`text-accent`), "sapien" (`text-foreground`)
- **Tagline**: "Building the Digital Workforce to power the future of work." (11 words)
  - Styling: `text-sm text-muted-foreground`

**Content Length**: ~11 words for tagline

### 2. Solutions Section (Column 2)

**Structure:**

- **Header**: "Solutions" (`font-semibold text-foreground mb-4`)
- **Links**: Vertical list (`ul` with `space-y-2`)
  - 3 navigation links
  - Each link: `text-sm text-muted-foreground hover:text-foreground transition-colors`

**Links:**

1. "Inbound Sales" (2 words)
2. "Content Creation" (2 words)
3. "The Lab" (2 words)

**Content Length**: 7 words total

### 3. Company Section (Column 3)

**Structure:**

- **Header**: "Company" (`font-semibold text-foreground mb-4`)
- **Links**: Vertical list (`ul` with `space-y-2`)
  - 3 navigation/action links
  - Same styling as Solutions section

**Links:**

1. "Mission" (1 word)
2. "Careers" (1 word)
3. "Contact" (1 word) - External link to Cal.com with `target="_blank"` and `rel="noopener noreferrer"`

**Content Length**: 4 words total

### 4. Resources Section (Column 4)

**Structure:**

- **Header**: "Resources" (`font-semibold text-foreground mb-4`)
- **Links**: Vertical list (`ul` with `space-y-2`)
  - 1 navigation link
  - Same styling as other sections

**Links:**

1. "Blog" (1 word)

**Content Length**: 2 words total

### 5. Bottom Section (Full Width)

**Layout**:

- **Container**: `mt-12 pt-8 border-t border-border`
- **Flex Layout**: `flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0`
- **Responsive**: Single column on mobile, two-column on desktop

**Elements:**

- **Copyright**: `text-sm text-muted-foreground text-center sm:text-left`
  - "© 2024 NovoSapien. All rights reserved." (6 words)
- **Legal Links**: Horizontal flex container (`flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6`)
  - 3 policy links (9 words total)
  - Same text styling and hover effects as navigation links

## Visual Design Elements

### Typography Hierarchy

- **Company Logo Text**: `text-xl font-reddit-sans lowercase font-medium`
- **Section Headers**: `font-semibold text-foreground mb-4`
- **Navigation Links**: `text-sm text-muted-foreground hover:text-foreground transition-colors`
- **Copyright Text**: `text-sm text-muted-foreground`

### Interactive Elements

1. **Navigation Links**: 8 internal links + 1 external link
   - **Hover Effects**: Color transition from `text-muted-foreground` to `text-foreground`
   - **Transitions**: Smooth color transitions (`transition-colors`)
2. **External Link**: Cal.com booking link with security attributes
3. **Logo Image**: Optimized with Next.js Image component

### Spacing System

- **Section Spacing**: 16px margin bottom for headers (`mb-4`)
- **Link Spacing**: 8px vertical spacing between links (`space-y-2`)
- **Container Padding**: Responsive padding system
- **Grid Gaps**: 32px between columns (`gap-8`)
- **Bottom Section**: 48px top margin (`mt-12`), 32px top padding (`pt-8`)

## Theme Integration

- **Color System**: CSS variables for theme switching compatibility
- **Background**: Semi-transparent card background with opacity
- **Borders**: Accent color borders with opacity values
- **Text Colors**: Semantic color tokens (foreground, muted-foreground, accent)

## Performance Considerations

- **Image Optimization**: Next.js Image component for logo with explicit dimensions
- **Accessibility**: Proper alt text, semantic HTML structure, proper heading hierarchy
- **SEO**: Structured navigation links with descriptive anchor text
- **Security**: External link with proper `rel` attributes

## Content Metrics

### Word Count by Section:

1. **Company Information (Mobile)**: 7 words (shortened tagline)
2. **Company Information (Desktop)**: 11 words (full tagline)
3. **Solutions Section**: 7 words (header + 3 links)
4. **Company Section**: 4 words (header + 3 links)
5. **Resources Section**: 2 words (header + 1 link)
6. **Bottom Section**: 15 words (copyright + 3 legal links)

**Total Desktop Content**: ~39 words
**Total Mobile Content**: ~35 words

### Link Structure:

- **Internal Navigation**: 8 links to site pages
- **External Actions**: 1 link to booking system
- **Legal/Compliance**: 3 policy page links

## Responsive Behavior Details

### Breakpoint Behavior:

- **Mobile (< 768px)**:
  - Simplified brand section only
  - Single column bottom section (centered)
  - No main navigation sections displayed
- **Tablet (768px - 1024px)**:
  - Company info spans 2 columns
  - 4-column grid for navigation
  - Side-by-side bottom section
- **Desktop (> 1024px)**:
  - Full 4-column grid layout
  - Company info takes single column
  - Optimal spacing and typography

### Mobile Simplification Strategy:

- Reduces cognitive load with essential brand info only
- Maintains copyright and legal links
- Removes navigation redundancy (assumed primary nav handles this)

## Content Guidelines

- **Brand Consistency**: Dual-color "novosapien" styling matches site navigation
- **Service Organization**: Solutions categorized by business function
- **Legal Compliance**: Standard policy links for privacy regulations
- **Professional Tone**: Business-focused messaging throughout
- **Link Clarity**: Descriptive anchor text for all navigation elements
