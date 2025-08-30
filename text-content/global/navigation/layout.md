# Navigation Layout Documentation

## Overview

The navigation is a fixed header component positioned at the top of the page (`fixed top-0 left-0 right-0 z-50`) with high z-index for overlay positioning.

## Container Structure

- **Container**: `max-w-6xl mx-auto px-6 py-4` - Centered with maximum width and padding
- **Main Navigation Bar**: Backdrop-blurred rounded container with border and semi-transparent background
- **Layout**: Horizontal flex layout with centered alignment

## Logo Section

- **Logo Image**: 24x24px SVG logo (`/logo.svg`)
- **Brand Text**: "novosapien" in lowercase with color distinction:
  - "novo" in accent color
  - "sapien" in foreground color
- **Font**: Reddit Sans, medium weight, large size (text-lg)
- **Separator**: 1px vertical divider after logo section

## Navigation Items Layout

### Primary Navigation

Horizontal layout with consistent button styling:

1. **Home** - Single button (1 word)
2. **Workforces** - Dropdown button with chevron icon (1 word + icon)
3. **Mission** - Single button (1 word)
4. **Speak to us** - External link button (3 words)

### Workforces Dropdown

- **Trigger**: Workforces button with rotating chevron icon
- **Dropdown Menu**: Absolute positioned, appears on hover
- **Animation**: Scale and opacity transitions (200ms duration)
- **Backdrop**: Semi-transparent with blur effect
- **Items**: Vertical list with 3 options

## Text Content Word Counts

### Primary Navigation Items (4 total words):

- "Home" - 1 word
- "Workforces" - 1 word
- "Mission" - 1 word
- "Speak to us" - 3 words

### Brand Text (1 compound word):

- "novosapien" - 1 word (displayed as "novo" + "sapien")

### Logo Alt Text (2 words):

- "Novosapien Logo" - 2 words

### Dropdown Items (4 total words):

- "Inbound Sales" - 2 words
- "Content Creation" - 2 words
- "Custom" - 1 word

### Total Navigation Text Count:

- **Primary navigation**: 4 words
- **Brand text**: 1 word
- **Logo alt text**: 2 words
- **Dropdown items**: 5 words
- **Grand total**: 12 words

## Visual Elements

### Icons and Graphics

- **Logo**: SVG logo image (24x24px)
- **Chevron Icon**: Lucide React ChevronDown icon (16x16px)
  - Rotates 180° on dropdown hover
  - Smooth transition animation (200ms)

### Interactive Elements

- **Hover Effects**: All buttons have hover state transitions
- **Active States**: Current page highlighted with different styling
- **Dropdown Interaction**: CSS-only hover-based dropdown (no JavaScript clicks)
- **External Link**: "Speak to us" opens Cal.com in new tab

### Responsive Behavior

- **Fixed positioning**: Stays at top during scroll
- **Backdrop blur**: Semi-transparent background with blur effect
- **Border styling**: Consistent accent border throughout
- **Theme support**: Dark/light mode compatible with CSS variables

## Layout Constraints

- **Maximum width**: 6xl (1152px)
- **Fixed height**: Based on padding (py-4) and button heights
- **Z-index**: 50 (high priority overlay)
- **Backdrop filter**: Blur effect for glass morphism appearance

## Animation Details

- **Dropdown transitions**: 200ms scale and opacity
- **Button hover effects**: Smooth background and text color transitions
- **Chevron rotation**: 180° transform on hover
- **Active state transitions**: Smooth border and background changes

## Text Content Metrics

### Word Count by Section:

1. **Brand Text**: 1 word ("novosapien")
2. **Primary Navigation**: 6 words (4 main nav items)
3. **Dropdown Items**: 5 words (3 workforce options)
4. **Alt Text**: 2 words (logo description)

**Total Navigation Content**: 14 words

## Interactive Elements

1. **Dropdown Menu**: Hover-triggered workforce options with smooth transitions
2. **Active States**: Current page highlighting with accent styling
3. **External Link**: Cal.com booking integration with new tab opening
4. **Theme Support**: Full light/dark mode compatibility
5. **Hover Effects**: Smooth color and background transitions
6. **Icon Animation**: Chevron rotation on dropdown hover

## Responsive Behavior

- **Desktop**: Full horizontal navigation with dropdown
- **Fixed Positioning**: Stays at top with backdrop blur
- **Theme Switching**: Automatic color adaptation
- **Mobile Considerations**: Current layout optimized for desktop

## Content Guidelines

- **Brand Identity**: Lowercase styling with accent color distinction
- **Navigation Labels**: Concise, industry-standard terminology
- **Call-to-Action**: Conversational "Speak to us" vs formal "Contact Us"
- **Dropdown Organization**: Logical service categorization
- **Accessibility**: Proper alt text and semantic structure
