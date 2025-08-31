# Page Layout: Blog Listing Page

## Component Structure

- Navigation (from @/components/navigation)
- Theme Toggle (fixed top-right, hidden on mobile)
- Main Content Container
  - Breadcrumbs Component
    - Links: Home → Blog
  - Page Header
    - Main heading (h1): "Novosapien Blog" ~2 words
    - Subtitle (p): ~20 words, centered, max-width 3xl
  - BlogFilters Component (centered)
    - Search Input: "Search articles..." placeholder
    - Category Dropdown: "All Articles" default with counts
  - Featured Post Section (conditional rendering)
    - Card Layout: 2-column grid (image + content)
    - Badge: "Featured Post" + Category label
    - Title (h2): Variable length from CMS
    - Excerpt (p): Variable length from CMS 
    - Meta info: Author, read time, date
    - CTA Button: "Read More" with arrow icon
  - Blog Posts Grid
    - Responsive Grid: 1/2/3 columns
    - Post Cards (variable quantity)
      - Image: 400x300 optimized from Sanity/fallback
      - Category tag: ~2-3 words
      - Title (h3): Variable from CMS
      - Excerpt (p): Variable from CMS, line-clamped
      - Meta row: Author, read time, date
      - Read more link: "Read Article" with arrow
  - Empty State (conditional)
    - Heading (h3): "No posts found" ~3 words
    - Message (p): Variable based on filter state ~15-25 words
    - CTA Button: "View All Posts" (optional)
- Footer (from @/components/footer)

## Responsive Behavior

- Desktop (lg+): 3-column blog grid, full featured post layout
- Tablet (md): 2-column blog grid, maintained featured layout  
- Mobile (sm): Single column, theme toggle hidden, simplified spacing

## Key Components Used

- Navigation (global navigation component)
- Footer (global footer component)
- ThemeToggle (from @/components/theme-toggle)
- BlogFilters (from @/components/blog/blog-filters)
- Breadcrumbs (from @/components/seo/Breadcrumbs)
- Card (from @/components/ui/card)
- Button (from @/components/ui/button)
- Image (Next.js optimized images)
- Link (Next.js routing)
- Sanity client integration (urlFor helper)
- Lucide icons: User, ArrowRight

## Content Guidelines

### Page Header
- Title: Brand name + "Blog" - direct and recognizable
- Description: Value proposition focused on AI workforces - ~20 words

### Search and Filtering  
- Search: Intuitive placeholder, debounced input, clear functionality
- Categories: Business-focused labels, post counts for context
- Results: Clear empty states with helpful guidance

### Featured Post Section
- Layout: Prominent card design with visual hierarchy
- Content: Highlight most important/recent content
- Meta info: Author credibility, reading time, recency
- CTA: Clear call-to-action with visual indicator

### Blog Post Cards
- Imagery: Consistent aspect ratios, fallback handling
- Content: Scannable titles, informative excerpts
- Meta data: Author, reading time, publication date
- Interaction: Hover effects, clear navigation paths

### Content Strategy Notes
- Focus on AI workforce and automation topics
- Educational and actionable insights
- Mix of technical depth and business value
- Author authority and content freshness emphasized

## Dynamic Content Integration

### Sanity CMS Integration
- Real-time content fetching with revalidation (60s)
- Structured content queries (POSTS_QUERY)
- Image optimization through Sanity CDN
- Author relationship handling
- Category taxonomy system

### Content Processing
- Automatic read time calculation from body text
- Date formatting for different contexts
- Search functionality across title/excerpt/author
- Category filtering with post counts
- Featured post logic and conditional rendering

### Performance Considerations  
- Image lazy loading and optimization
- Content caching and revalidation strategy
- Responsive image sizing
- Efficient client-side filtering

## SEO and Accessibility

### Structured Data
- Blog schema with organization publisher
- Individual BlogPosting schemas
- Author Person entities
- Proper URL structure and canonical tags

### Navigation and UX
- Breadcrumb navigation for context
- Theme toggle for user preference
- Clear content hierarchy
- Accessible form controls and interactions
- Responsive design patterns

## Interactive Features

### Client-Side Functionality
- Real-time search with debouncing (300ms)
- Category filtering with URL state management
- Responsive dropdown interactions
- Theme switching capability
- Smooth transitions and hover effects

### Content Discovery
- Featured content prominence
- Category-based organization
- Search across multiple content fields
- Clear empty states with recovery actions
- Pagination-ready architecture (50 post limit)

## Layout Constraints

### Container Sizing
- Max width: 7xl (1280px) for main content
- Responsive padding: 4 (16px) on mobile
- Section spacing: 12-16 units between major sections
- Card spacing: 8 units in grid layouts

### Typography Scale
- Page title: 4xl-5xl responsive
- Section headings: 2xl-4xl responsive  
- Post titles: xl-3xl responsive
- Body text: base-lg responsive
- Meta text: xs-sm responsive

### Visual Hierarchy
- Featured content gets premium placement and sizing
- Clear content grouping with cards and sections
- Consistent spacing and alignment patterns
- Accent colors for interactive elements and highlights