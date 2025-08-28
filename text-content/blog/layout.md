# Blog Page Layout Documentation

## Page Structure Overview

The blog page follows a standard Next.js App Router layout with the following hierarchical structure:

```
BlogPage
├── Navigation (Fixed Header)
├── ThemeToggle (Fixed Top-Right)
├── Main Content Container
│   └── BlogContent Component
│       ├── Header Section
│       ├── Category Filter Section
│       ├── Featured Post Section (conditional)
│       ├── Blog Posts Grid
│       ├── Load More Section (conditional)
│       └── Newsletter Signup Section
└── Footer
```

## Section Breakdown & Text Lengths

### 1. Navigation Component

- **Location**: Fixed header across top
- **Text Elements**:
  - Brand name: "novosapien" (4 words)
  - Navigation links: "Home", "Workforces", "Mission", "Speak to us" (5 items)
  - Dropdown items: "Inbound Sales", "Content Creation", "Custom" (3 items)

### 2. Header Section

- **Layout**: Centered text block
- **Word Counts**:
  - Main heading: "Insights & Updates" (3 words)
  - Subtitle paragraph: 25 words
- **Typography**: Uses large display fonts (5xl-7xl responsive)

### 3. Category Filters

- **Layout**: Centered horizontal button group
- **Categories**: 7 filter buttons
- **Text**: "All", "AI & Automation", "Sales", "Content", "Case Studies", "Technology", "Business"
- **Interactive**: State-based styling (active/inactive)

### 4. Featured Post Section

- **Layout**: Two-column grid (image + content)
- **Conditional Display**: Only shows when "All" category is selected
- **Text Content**:
  - Badge: "Featured Post" (2 words)
  - Category tag: Variable (2-3 words)
  - Title: Variable (4-8 words)
  - Excerpt: Variable (15-25 words)
  - Author info: Name + date + read time
  - Button: "Read More" (2 words)

### 5. Blog Posts Grid

- **Layout**: Responsive grid (1/2/3 columns)
- **Each Post Card Contains**:
  - Category tag: 2-3 words
  - Title: 4-8 words
  - Excerpt: 15-25 words
  - Author name: 2-3 words
  - Read time: "X min read" (3 words)
  - Date: Month Day, Year format
  - Button: "Read Article" (2 words)

### 6. Newsletter Signup

- **Layout**: Centered card with gradient background
- **Text Content**:
  - Heading: "Stay Updated" (2 words)
  - Description: 15 words
  - Input placeholder: "Enter your email" (3 words)
  - Button: "Subscribe" (1 word)

### 7. Footer Component

- **Layout**: 4-column grid on desktop
- **Text Sections**:
  - Company description: 12 words
  - Solutions links: 3 items (6 words total)
  - Company links: 3 items (4 words total)
  - Resources: 1 item (1 word)
  - Legal links: 3 items (9 words total)
  - Copyright: 6 words

## Visual Elements & Graphics

### Images and Icons

- **Logo**: SVG logo appears in navigation and footer
- **Post Images**: Gradient placeholders with post ID numbers
- **Icons**: Lucide React icons throughout
  - Calendar, Clock, ArrowRight, User, Tag icons
  - ChevronDown for dropdown navigation

### Animations and Interactive Elements

- **Hover Effects**: Cards have shadow and color transitions
- **Button States**: Category filters show active/inactive states
- **Dropdown**: CSS-based hover dropdown for Workforces navigation
- **Theme Toggle**: Fixed position theme switcher

## Layout Constraints & Guidelines

### Responsive Behavior

- **Mobile**: Single column layout for all grids
- **Tablet**: 2-column grid for blog posts
- **Desktop**: 3-column grid for blog posts
- **Max Width**: 7xl container (1280px) for main content

### Spacing and Typography

- **Section Spacing**: 12-16 units between major sections
- **Card Padding**: 6-8 units internal padding
- **Typography Scale**: Responsive text sizing (xl to 7xl for headings)

### Color and Theming

- **Theme Support**: Full light/dark mode support
- **Color Variables**: Uses CSS custom properties
- **Accent Colors**: Consistent accent color throughout
- **Background**: Card-based design with subtle borders

## Interactive Features

### Category Filtering

- **Functionality**: Client-side filtering of blog posts
- **State Management**: React useState for selected category
- **Visual Feedback**: Active state styling on filter buttons

### Conditional Rendering

- **Featured Post**: Only displays when "All" category selected
- **Load More**: Only shows if more than 6 posts exist
- **Responsive Elements**: Different layouts based on screen size

## Content Management

### Blog Post Data Structure

- Each post contains: id, title, excerpt, author, date, readTime, category, image, featured flag
- **Sample Data**: 6 posts across different categories
- **Content Length**: Excerpts are 15-25 words, titles 4-8 words

### Category System

- **Categories**: 7 predefined categories including "All"
- **Filtering**: Dynamic filtering based on selected category
- **Display**: Category tags shown on each post card
