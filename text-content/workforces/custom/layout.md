# Custom Workforce Page - Layout Structure

## Page Hierarchy

### 1. Navigation Section

- **Component**: Fixed top navigation bar
- **Position**: Fixed at top of page (z-index: 50)
- **Elements**:
  - Logo and brand name (24x24px logo)
  - Navigation links (Home, Workforces dropdown, Mission)
  - Workforces dropdown with 3 options
  - External "Speak to us" CTA button
- **Styling**: Backdrop blur with accent border, transparent background

### 2. Theme Toggle

- **Component**: ThemeToggle button
- **Position**: Fixed top-right corner
- **Functionality**: Light/dark theme switcher

### 3. Hero Section

- **Structure**: Full-screen section with layered elements
- **Background Elements**:
  - Animated dots pattern (full coverage)
  - Gradient overlay (bottom 60% of hero area)
- **Content Structure**:
  - Single centered card with content
  - Badge/tag element
  - Main heading (H1)
  - Descriptive paragraph
  - Primary CTA button

### 4. Footer Section

- **Component**: Full-width footer with 4-column grid
- **Sections**: Company info, Solutions, Company links, Resources
- **Bottom section**: Copyright and legal links

## Layout Constraints & Guidelines

### Hero Section Specifications

- **Minimum Height**: Full viewport height (min-h-screen)
- **Content Positioning**: Centered horizontally with max-width constraint
- **Card Container**:
  - Semi-transparent background (80% opacity)
  - Backdrop blur effect
  - Accent border with 20% opacity
  - Box shadow for depth
- **Padding**: 8 units (32px) around card content
- **Margin Top**: 36 units (144px) for content positioning

### Typography Hierarchy

- **Badge Text**: Small (text-sm), all caps tracking
- **Main Heading**: Large responsive text (4xl→5xl→6xl)
- **Body Text**: Large size (text-lg) with relaxed line height
- **Button Text**: Base size with medium padding

### Visual Elements & Graphics

#### Animated Dots Background

- **Coverage**: Full hero section background
- **Pattern**: Grid-based dot placement (40px spacing)
- **Animation**: Pulsing effect with color transitions
- **Colors**: Base (#A1BCD1) to animated (#A8CDFF)
- **Behavior**: Maximum 6 concurrent animations, random triggering

#### Gradient Overlay

- **Type**: Linear gradient from transparent to accent color
- **Coverage**: Bottom 60% of hero section
- **Opacity**: 40% at bottom, fading to 30% and transparent
- **Purpose**: Creates visual connection to potential lower sections

### Interactive Elements

- **Navigation**: Hover states, active states, dropdown functionality
- **Theme Toggle**: Light/dark mode switching
- **CTA Button**: Hover effects, shadow transitions
- **All Links**: Hover state color transitions

### Text Content Distribution

#### Badge Section

- **Word Count**: 2 words
- **Character Count**: ~15 characters
- **Purpose**: Category identification

#### Main Heading

- **Word Count**: 3 words
- **Character Count**: ~26 characters
- **Typography**: Light weight, tight tracking

#### Description

- **Word Count**: 13 words
- **Character Count**: ~79 characters
- **Purpose**: Value proposition explanation

#### CTA Button

- **Word Count**: 3 words
- **Character Count**: ~18 characters
- **Action**: Primary conversion point

## Responsive Behavior

- **Mobile**: Single column layout, reduced text sizes
- **Tablet**: Maintains desktop layout with adjusted spacing
- **Desktop**: Full layout as described above

## Performance Considerations

- Animated background uses requestAnimationFrame for smooth performance
- Canvas-based dots animation with optimized rendering
- Backdrop blur effects may impact performance on older devices
