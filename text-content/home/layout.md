# Homepage Layout Documentation

## Page Structure Overview

The homepage follows a vertical flow design with the following major sections:

### 1. Navigation (Fixed Header)

- **Component**: Navigation component
- **Position**: Fixed top navigation with backdrop blur
- **Content**: Logo + navigation links + CTA button
- **Interactive Elements**: Dropdown for "Workforces" with hover states

### 2. Hero Section (Full Screen)

- **Background**: Animated dots pattern with gradient overlay
- **Layout**: Centered content with large typography
- **Text Elements**:
  - Badge text (1 line, ~6 words)
  - Main headline (2 lines, ~6 words total)
  - Animated text component (4 rotating phrases)
  - Subtitle paragraph (~15 words)
  - 2 CTA buttons
- **Visual Elements**:
  - AnimatedDots background component
  - Gradient overlay for visual hierarchy
  - Hero images (commented out in current version)

### 3. Revenue Operations Section

- **Layout**: Grid layout (3 columns on desktop)
- **Text Elements**:
  - Section headline (~10 words)
  - Section description paragraph (~45 words)
  - Left column: 3 feature cards (3-4 words headline, ~12 words description each)
  - Right column: 3 feature cards (3-4 words headline, ~12 words description each)
- **Visual Elements**:
  - Central workforce stack image (light/dark variants)
  - Feature icons (SVG)
  - Background color section

### 4. Digital Workforce Definition Section

- **Layout**: Two-column layout
- **Text Elements**:
  - Badge with icon (~3 words)
  - Section headline (question format, ~6 words)
  - Description paragraph (~40 words)
- **Visual Elements**:
  - Digital workforce illustration (light/dark variants)
  - Gradient background

### 5. Solution Overview Section

- **Layout**: Two-card grid
- **Text Elements**:
  - Badge (~2 words)
  - Section headline (~8 words)
  - Section description paragraph (~30 words)
  - 2 workforce cards with headlines (3-4 words each), descriptions (~20 words each), and CTA links
- **Visual Elements**:
  - Workforce images in each card (light/dark variants)
  - Card hover effects

### 6. How We Do It Section (ScrollAnimatedSteps)

- **Layout**: Two-column with sticky right sidebar
- **Text Elements**:
  - Section headline (~4 words)
  - 3 step sections with badges, headlines (3-4 words each), and detailed descriptions (~50-60 words each)
- **Interactive Elements**:
  - Scroll-triggered animations
  - Image transitions based on scroll position
- **Visual Elements**:
  - Step illustration images (light/dark variants)
  - Sticky positioning for images

### 7. Core Capabilities Section

- **Layout**: Mixed grid (1 large, 5 smaller cards)
- **Text Elements**:
  - Section headline (~2 words)
  - Section description paragraph (~25 words)
  - 6 capability cards with headlines (2-4 words each) and descriptions (~15-30 words each)
- **Visual Elements**:
  - ElasticInfrastructureGraph component
  - Various capability illustrations (SVG)
  - Card grid with different sizes

### 8. Value Proposition Section

- **Layout**: Two-column comparison (Before/After)
- **Text Elements**:
  - Section headline (~6 words)
  - Before column: headline (~2 words) + 6 bullet points (~8-12 words each)
  - After column: headline (~2 words) + 6 bullet points (~8-12 words each)
- **Visual Elements**:
  - Color-coded sections (red for before, green for after)
  - Different shadow effects for visual hierarchy
  - Icons for bullet points

### 9. Final CTA Section

- **Layout**: Centered card design
- **Text Elements**:
  - Badge (~5 words)
  - Headline with emphasis (~8 words, split across 2 lines)
  - Description paragraph (~25 words)
  - CTA button
- **Visual Elements**:
  - Card with backdrop blur
  - Highlighted accent text

### 10. Footer

- **Layout**: Four-column grid with bottom section
- **Text Elements**: Multiple navigation sections with links and company information

## Text Content Metrics

### Word Count by Section:

1. **Hero Section**: ~30 words (excluding animated phrases)
2. **Revenue Operations**: ~150 words
3. **Digital Workforce**: ~50 words
4. **Solution Overview**: ~80 words
5. **How We Do It**: ~180 words
6. **Core Capabilities**: ~200 words
7. **Value Proposition**: ~120 words
8. **Final CTA**: ~40 words

**Total Homepage Content**: ~850 words (excluding navigation and footer)

## Interactive Elements

1. **Animated Text Component**: 4 rotating phrases with typewriter effect
2. **Navigation Dropdown**: Hover-triggered workforce options
3. **Scroll Animations**: Step-by-step reveal with image transitions
4. **Card Hover Effects**: Border and shadow changes
5. **Button Hover States**: Multiple CTA buttons with state changes
6. **Theme Toggle**: Dark/light mode switching (affects all images and colors)
7. **Elastic Infrastructure Graph**: Custom animated component

## Responsive Behavior

- **Desktop**: Full grid layouts, side-by-side content
- **Tablet**: Reduced columns, maintained hierarchy
- **Mobile**: Single column stack, adjusted typography sizes

## Content Guidelines

- Headlines use large, bold typography (text-4xl to text-7xl)
- Descriptions use muted colors for hierarchy
- Consistent badge styling for section identifiers
- Action-oriented language in CTAs
- Technical terminology balanced with accessible explanations
