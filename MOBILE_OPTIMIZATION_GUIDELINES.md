# Mobile Optimization Guidelines

This document outlines the standards and patterns for optimizing pages for mobile devices based on the successful optimizations made to the lead workforce page.

## Core Principles

1. **Mobile-first responsive design**: Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, etc.)
2. **Preserve desktop experience**: Never modify desktop layouts when making mobile optimizations
3. **Consistency across pages**: Maintain uniform spacing, sizing, and alignment patterns

## Typography

### Headings
- **H1 (Hero/Main Title)**: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl`
- **H2 (Section Titles)**: `text-2xl sm:text-3xl md:text-4xl`
- **H3 (Subsection Titles)**: `text-xl sm:text-2xl`
- **H4 (Card Titles)**: `text-lg sm:text-xl`

### Body Text
- **Large Body**: `text-base sm:text-lg md:text-xl`
- **Standard Body**: `text-base sm:text-lg`
- **Small Body**: `text-sm sm:text-base`
- **Extra Small**: `text-xs sm:text-sm`

### Badges/Labels
- **Size**: `text-xs sm:text-sm`
- **Padding**: `px-3 py-1`
- **Style**: `rounded-full` with border and subtle shadow

## Spacing

### Section Padding
- **Vertical**: `py-16 sm:py-32` (64px mobile, 128px desktop)
- **Horizontal**: `px-2 sm:px-4` for tight sections, `px-4` for normal sections

### Component Spacing
- **Section Header Pattern**:
  ```
  Badge → Title: mb-3 (12px)
  Title → Description: mb-3 sm:mb-4
  Header → Content: mb-8 sm:mb-16
  ```

### Between Sections
- Use consistent `pt-16 sm:pt-32` for section transitions
- Maintain visual rhythm throughout the page

## Layout Patterns

### Hero Sections
```jsx
<section className="pt-20 sm:pt-32 pb-24 px-4">
  <div className="max-w-5xl mx-auto mt-12 sm:mt-36">
    <Card className="p-6 sm:p-8 md:p-12">
      <!-- Content -->
    </Card>
  </div>
</section>
```

### Content Sections
```jsx
<section className="py-16 sm:py-32 px-2 sm:px-4">
  <div className="max-w-5xl mx-auto px-2 sm:px-4">
    <!-- Content -->
  </div>
</section>
```

## Mobile-Specific Optimizations

### 1. Agent/Team Cards
**Desktop**: Grid layout with tabs and full cards
**Mobile**: Vertical list with compact cards

```jsx
// Mobile Layout
<div className="block sm:hidden space-y-6 -mx-2">
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
      Section Title
    </h3>
    <div className="space-y-2 px-1">
      {items.map(item => (
        <Card className="bg-card-background border border-accent/20 px-3 py-3 rounded-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center">
              {/* Icon */}
            </div>
            <div className="flex-1">
              <h4 className="text-foreground font-semibold text-sm">{item.name}</h4>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  </div>
</div>
```

### 2. Process Diagrams
**Desktop**: Horizontal flow with arrows
**Mobile**: Vertical stack

```jsx
// Mobile - Vertical
<div className="flex flex-col items-center gap-6 sm:hidden">
  {/* Stacked items with rotate-90 arrows between them */}
</div>

// Desktop - Horizontal
<div className="hidden sm:flex items-center justify-between">
  {/* Horizontal layout */}
</div>
```

### 3. Method/Process Sections
**Desktop**: Sticky scroll with side-by-side layout
**Mobile**: Simple cards with images below text

```jsx
<div className="block lg:hidden space-y-12">
  {steps.map(step => (
    <div className="space-y-4">
      <div>
        <span className="badge">Step Label</span>
        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
        <p className="text-base">{step.description}</p>
      </div>
      <div className="rounded-lg bg-accent/5 p-6">
        <Image className="w-full h-auto max-h-[280px] object-contain" />
      </div>
    </div>
  ))}
</div>
```

### 4. Metrics/Stats Grid
**Desktop**: 1x4 grid
**Mobile**: 2x2 grid with smaller text

```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
  <Card className="p-4 sm:p-6 text-center">
    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">85%</div>
    <p className="text-xs sm:text-sm">Metric Label</p>
  </Card>
</div>
```

### 5. Modal/Dialog Responsiveness
```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
  <div className="bg-card-background p-4 sm:p-8 max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
    <div className="flex items-start justify-between mb-4 sm:mb-6">
      <div className="flex items-start gap-3 sm:gap-4 flex-1">
        <div className="w-10 h-10 sm:w-14 sm:h-14">
          {/* Icon */}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg sm:text-2xl font-bold leading-tight">{title}</h2>
        </div>
      </div>
      <button className="ml-2 p-1 -mr-1 -mt-1">
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  </div>
</div>
```

## Icon Guidelines

### Size and Weight
- **Mobile**: `w-5 h-5` with `stroke-[1.5]`
- **Desktop**: `w-8 h-8` or `w-10 h-10`
- **Container**: Keep background size consistent (e.g., `w-10 h-10` container with `w-5 h-5` icon)

```jsx
<Search className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
```

## Alignment Patterns

### Text Alignment
- **Headers**: `text-left sm:text-center` (left on mobile, centered on desktop)
- **Body paragraphs**: Include `sm:mx-auto` when centered on desktop
- **CTAs**: Can remain centered on both mobile and desktop

### Container Alignment
```jsx
// Left-aligned on mobile, centered on desktop
<div className="text-left sm:text-center">
  <h2 className="text-2xl sm:text-4xl font-bold mb-3">Title</h2>
  <p className="text-base sm:text-lg max-w-3xl sm:mx-auto">Description</p>
</div>
```

## Images and Media

### Responsive Images
- **Mobile max heights**: `max-h-[200px]` to `max-h-[280px]`
- **Object fit**: Always use `object-contain` for diagrams
- **Container padding**: `p-4` to `p-6` for image containers

### Hiding Elements
- Use `hidden lg:block` to hide complex desktop layouts on mobile
- Use `block lg:hidden` for mobile-specific layouts
- Hide decorative images on mobile when they don't add value: `hidden sm:flex`

## CTA Cards

```jsx
<Card className="p-6 sm:p-12 text-center">
  <span className="badge text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
    Label
  </span>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
    CTA Title
  </h2>
  <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
    Description
  </p>
  <Button className="text-sm sm:text-base">Action</Button>
</Card>
```

## Common Patterns to Avoid

1. **Don't use fixed heights** on mobile - use min/max heights instead
2. **Don't assume desktop spacing** works on mobile - always test
3. **Don't hide critical content** on mobile - restructure instead
4. **Don't use horizontal scrolling** - convert to vertical layouts
5. **Don't maintain complex interactions** (like sticky scroll) on mobile - simplify

## Testing Checklist

- [ ] Text is readable without zooming (minimum 14px/text-sm)
- [ ] Touch targets are at least 44x44 pixels
- [ ] Content doesn't bleed off screen edges
- [ ] Spacing is consistent throughout the page
- [ ] Images are appropriately sized and don't slow loading
- [ ] Modals and overlays are accessible and closeable
- [ ] Navigation is easily accessible
- [ ] Forms are easy to fill out on mobile keyboards

## Implementation Notes

1. Always use responsive utilities rather than separate mobile components
2. Test on actual devices, not just browser DevTools
3. Consider thumb reach zones for important interactive elements
4. Maintain visual hierarchy even with reduced sizes
5. Ensure sufficient contrast ratios are maintained in both light and dark modes