# Contact Page Layout Documentation

## Overview

The contact page (`/contact`) employs a redirect-based approach rather than a traditional contact form. The page immediately redirects users to an external Cal.com booking system for scheduling consultations.

## Page Structure

### Primary Component: ContactPage (/src/app/contact/page.tsx)

**Layout Type**: Single-section redirect page with minimal UI
**Background**: Full-screen background using `min-h-screen bg-background`
**Alignment**: Centered content using flexbox (`flex items-center justify-center`)

### Section Hierarchy

1. **Main Container**
   - Full viewport height container (`min-h-screen`)
   - Background color uses CSS variable system (`bg-background`)
   - Flexbox centering for content

2. **Loading State Display**
   - Centered text container (`text-center`)
   - Single status message paragraph

### Text Content Lengths

- **Page Title** (metadata): 2 words ("Contact Us")
- **Meta Description**: 21 words
- **Loading Message**: 5 words ("Redirecting to booking page...")

### Visual Elements

**Graphics/Images**: None present on the actual contact page
**Animations**: No custom animations - only browser redirect
**Color Scheme**:

- Uses theme-aware background (`bg-background`)
- Muted text color for loading state (`text-muted-foreground`)

### Interactive Elements

1. **Automatic Redirect**
   - Triggered via `useEffect` on component mount
   - Redirects to: `https://cal.com/george-westbrook-novosapien/30min`
   - No user interaction required

2. **Related Contact Elements** (found in other components):
   - Navigation "Speak to us" button (links to same Cal.com URL)
   - Footer "Contact" link (links to same Cal.com URL)

### Layout Constraints

- **Responsive Design**: Fully responsive with viewport-based sizing
- **Loading State**: Brief display before redirect occurs
- **Accessibility**: Simple structure with semantic text elements
- **Theme Support**: Compatible with light/dark theme switching

### Technical Implementation

- **Client-side Component**: Uses `"use client"` directive
- **Redirect Method**: JavaScript `window.location.href` change
- **SEO Metadata**: Includes title and description for search engines
- **Loading UX**: Shows informative message during redirect process

### User Flow

1. User navigates to `/contact` URL
2. Page loads with loading message
3. Automatic redirect triggers immediately via useEffect
4. User is taken to external Cal.com booking page
5. No return to original contact page expected

### External Integration

The contact system relies entirely on Cal.com for:

- Appointment scheduling
- Calendar management
- User interaction and form handling
- Confirmation and follow-up processes
