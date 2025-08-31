# Page Layout: Contact

## Component Structure

- **Primary Component**: ContactPage (/src/app/contact/page.tsx)
- **Layout Type**: Server-side redirect (no visual content rendered)
- **Redirect Method**: Next.js redirect() function
- **Target URL**: https://cal.com/george-westbrook-novosapien/30min

## Page Behavior

### Server-Side Redirect
- Immediate redirect using Next.js redirect() function
- No page content or loading state rendered
- Direct server-to-server redirect for optimal performance
- SEO-optimized with proper redirect status codes

### User Experience Flow
1. User navigates to `/contact` URL
2. Server immediately redirects to Cal.com booking page
3. No intermediate loading state or page content shown
4. Seamless transition to external booking system

## Responsive Behavior

- **All Devices**: Immediate redirect (no responsive considerations needed)
- **Performance**: Server-side redirect eliminates client-side rendering overhead
- **Accessibility**: No interactive elements to consider (direct redirect)

## Key Components Used

### Next.js Components
- `redirect` (from "next/navigation") - Server-side redirect function
- `Metadata` type import for TypeScript typing

### External Integration
- Cal.com booking system integration
- No UI components from the design system used

## SEO and Metadata Structure

### Enhanced Metadata Configuration
- **Title**: ~8-10 words focused on AI consultation booking
- **Description**: ~25-30 words emphasizing free consultation and business transformation
- **Keywords**: Targeted SEO terms for AI consultation and digital workforce demos
- **OpenGraph**: Complete social sharing metadata with dedicated image
- **Twitter Cards**: Summary large image format for social sharing
- **Canonical URL**: Points directly to Cal.com booking link
- **Robots Configuration**: Full indexing and following permissions

### Social Sharing Optimization
- Dedicated OpenGraph image (/og-contact.jpg - 1200x630)
- Platform-specific titles and descriptions for Twitter and Facebook
- Social media handle attribution (@novosapien)

## Content Guidelines

### Metadata Content Strategy
- **Page Title**: Action-oriented, includes "Schedule" and "Consultation"
- **Meta Description**: Benefit-focused, mentions "free consultation" and "transform your business"
- **Keywords**: Mix of branded terms and search-relevant phrases
- **Social Descriptions**: Conversion-focused, emphasizes expert consultation

### SEO Optimization Features
- **Server-Side Redirect**: Better for search engine understanding
- **Enhanced Metadata**: Comprehensive social sharing and search optimization
- **Canonical URL**: Proper redirect destination specification
- **Structured Data**: Implicit through comprehensive metadata

## Technical Implementation

### Performance Considerations
- **Server-Side Execution**: No client-side JavaScript required
- **Immediate Redirect**: Zero loading time for users
- **SEO Benefits**: Search engines understand redirect intent clearly

### Integration Points
- **Navigation Integration**: "Speak to us" button links to same Cal.com URL
- **Footer Integration**: "Contact" link points to same destination
- **Consistent Booking Flow**: All contact paths lead to unified booking system

## External Dependencies

### Cal.com Integration
- **Booking System**: George Westbrook's 30-minute consultation calendar
- **URL Structure**: /george-westbrook-novosapien/30min
- **Scheduling Features**: Handled entirely by Cal.com platform
- **Follow-up**: Managed through Cal.com notification system
