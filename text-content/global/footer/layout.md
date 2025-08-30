# Footer Component Layout Documentation

## Component Location

- File: `/src/components/footer.tsx`
- Component: `Footer`

## Overall Structure

### Container Layout

- **Background**: Semi-transparent card background with accent border top
- **Max Width**: 6xl container (1152px) with auto horizontal margins
- **Padding**: 24px horizontal, 64px vertical (responsive)
- **Grid Layout**: Single column on mobile, 4-column grid on medium screens and up

## Section Hierarchy

### 1. Company Information Section (Column 1)

**Content Elements:**

- **Logo**: SVG image (32x32px, w-8 h-8 classes)
  - Source: `/logo.svg`
  - Alt text: "Novosapien Logo"
- **Company Name**: Text logo with dual-color styling
  - Font: Reddit Sans, lowercase, medium weight
  - Colors: "novo" (accent), "sapien" (foreground)
- **Tagline**: Descriptive text (11 words, ~70 characters)
  - Styling: Small text, muted foreground color

**Word Count**: 11 words
**Character Count**: ~84 characters (including spaces)

### 2. Solutions Section (Column 2)

**Structure:**

- **Header**: "Solutions" (1 word)
- **Links**: 3 navigation links in vertical list
  - 2-3 words each
  - Total: 7 words in link text

**Word Count**: 8 words total
**Character Count**: ~45 characters

### 3. Company Section (Column 3)

**Structure:**

- **Header**: "Company" (1 word)
- **Links**: 3 navigation links in vertical list
  - 1-2 words each
  - Total: 4 words in link text

**Word Count**: 5 words total
**Character Count**: ~25 characters

### 4. Resources Section (Column 4)

**Structure:**

- **Header**: "Resources" (1 word)
- **Links**: 1 navigation link
  - Total: 1 word in link text

**Word Count**: 2 words total
**Character Count**: ~14 characters

### 5. Bottom Section (Full Width)

**Layout**: Flex container with responsive behavior

- **Mobile**: Single column, centered
- **Desktop**: Two-column layout (copyright left, legal links right)

**Elements:**

- **Copyright**: Single line (6 words, ~35 characters)
- **Legal Links**: 3 policy links (9 words, ~45 characters)

**Word Count**: 15 words total
**Character Count**: ~80 characters

## Visual Elements

### Graphics

1. **Logo**: SVG format, 32x32px
   - Theme-aware (likely has light/dark variants)
   - Positioned inline with text logo

### Typography Hierarchy

- **Main Logo**: xl size (20px), medium weight, Reddit Sans font
- **Section Headers**: Semibold weight, foreground color
- **Links**: Small text (14px), muted foreground with hover states
- **Copyright**: Small text (14px), muted foreground

### Interactive Elements

1. **Navigation Links**: 7 internal links total
   - Hover effects: color transition from muted to foreground
   - Smooth transitions enabled
2. **External Link**: 1 contact link (Cal.com booking)
   - Opens in new tab
   - Proper rel attributes for security

### Responsive Behavior

- **Mobile**: Single column layout, stacked sections
- **Tablet+**: 4-column grid layout
- **Bottom Section**: Switches from stacked to side-by-side layout

### Layout Constraints

- **Spacing**: Consistent 8px gaps between sections
- **Margins**: 12px top margin, 8px top padding for bottom section
- **Border**: Top border separation for bottom section

## Theme Integration

- **Color System**: Uses CSS variables for theme switching
- **Border**: Accent color with 40% opacity
- **Background**: Card background with 50% opacity
- **Text Colors**: Semantic color tokens (foreground, muted-foreground, accent)

## Performance Considerations

- **Image Optimization**: Next.js Image component for logo
- **Accessibility**: Proper alt text, semantic HTML structure
- **SEO**: Proper link structure and rel attributes

## Text Content Metrics

### Word Count by Section:

1. **Company Information**: 12 words (brand + tagline + alt text)
2. **Solutions Section**: 8 words (header + 3 links)
3. **Company Section**: 5 words (header + 3 links)
4. **Resources Section**: 2 words (header + 1 link)
5. **Bottom Section**: 15 words (copyright + 3 legal links)

**Total Footer Content**: 42 words across all sections

## Interactive Elements

1. **Navigation Links**: 8 total links (7 internal, 1 external)
2. **Hover Effects**: Smooth color transitions from muted to foreground
3. **External Booking**: Cal.com integration with proper security attributes
4. **Theme Support**: Full light/dark mode compatibility
5. **Logo Display**: Themed SVG with responsive sizing

## Responsive Behavior

- **Desktop**: 4-column grid layout with side-by-side bottom section
- **Tablet**: Maintained 4-column layout with adapted spacing
- **Mobile**: Single column stacking with centered bottom section

## Content Guidelines

- **Brand Consistency**: Dual-color "novosapien" styling matching navigation
- **Service Organization**: Logical categorization of workforce solutions
- **Legal Compliance**: Standard policy links for GDPR/privacy compliance
- **Professional Tone**: Business-focused tagline and section headers
- **Link Structure**: Clear hierarchy with descriptive text
