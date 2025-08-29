# SEO Optimization Checklist

**Page:** Contact
**URL:** https://novosapien.com/contact
**Agent:** SEO Agent
**Date Started:** 2025-01-28

## Pre-Optimization Capture

- [ ] Screenshot taken (desktop) - saved as: contact-desktop-before.png
- [ ] Screenshot taken (mobile) - saved as: contact-mobile-before.png
- [ ] Current Lighthouse scores recorded:
  - Performance: TBD
  - SEO: TBD
  - Accessibility: TBD
  - Best Practices: TBD
- [ ] Current TypeScript errors noted: none
- [ ] Console errors checked: none

## 1. Metadata

- [ ] Title tag unique and optimized (50-60 chars)
  - Current: "Contact Us"
  - Optimized: "Contact Novosapien - Schedule Your AI Consultation"
- [ ] Meta description unique and optimized (150-160 chars)
  - Current: "Get in touch with Novosapien to learn how digital workforces can transform your business. Schedule a consultation to discuss your automation needs."
  - Optimized: "Schedule a free consultation with Novosapien's AI experts. Transform your business with autonomous digital workforces. Book your 30-minute call today."
- [ ] Open Graph tags complete
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (verify file exists)
  - [ ] og:url
- [ ] Twitter Card tags added
- [ ] Canonical URL set correctly: https://cal.com/george-westbrook-novosapien/30min
- [ ] Favicon and app icons verified in /public

## 2. Heading Structure

- [ ] Only ONE H1 tag on page
  - H1 Content: N/A (redirect page)
- [ ] H2-H6 hierarchy is logical
- [ ] All headings in Server Components
- [ ] Styles preserved when tags changed

## 3. Component Architecture

- [ ] Critical content in Server Components
- [ ] Interactive elements in Client Components
- [ ] No SEO content trapped in "use client"
- [ ] Components properly split
- [ ] Document component changes:
  - Convert client-side redirect to server-side redirect

## 4. Images

- [ ] All <img> converted to Next.js Image
  - Count converted: 0 (no images on page)
- [ ] Alt text added for all images
- [ ] Priority set for above-fold images
- [ ] Width/height attributes set
- [ ] Sizes prop configured for responsive
- [ ] Original classes preserved

## 5. Schema Markup

- [ ] Appropriate schema type implemented
  - Type used: ContactPage/Organization
- [ ] Required schema fields populated
- [ ] Breadcrumb schema added (if applicable)
- [ ] Schema validates (validator.schema.org)

## 6. Breadcrumbs

- [ ] Breadcrumb component added (skip - redirect page)
- [ ] Correct hierarchy shown
- [ ] Current page has no href
- [ ] Schema markup included

## 7. Internal Linking

- [ ] All links use Next.js Link component
- [ ] Descriptive anchor text
- [ ] Related content section (N/A for redirect)
- [ ] At least 3 internal links point to this page
  - From: Navigation menus
- [ ] No broken internal links

## 8. Performance

- [ ] Heavy components use dynamic imports
- [ ] Suspense boundaries added where needed
- [ ] Third-party scripts loading strategy set
- [ ] No client-side data fetching for SEO content
- [ ] Server-side redirect instead of client-side

## 9. Mobile Optimization

- [ ] All touch targets minimum 48x48px
- [ ] Touch targets don't overlap
- [ ] Content readable without zooming
- [ ] Interactive elements thumb-friendly

## 10. Accessibility

- [ ] ARIA labels on interactive elements
- [ ] Form inputs properly labeled
- [ ] Skip navigation link present
- [ ] Focus states visible
- [ ] Alt text descriptive

## 11. Technical Validation

- [ ] TypeScript compiles without new errors
- [ ] No console errors in browser
- [ ] HTML validates
- [ ] Schema validates
- [ ] Lighthouse SEO score improved

## Changes Log

### Change 1: [Enhanced Metadata]

- Improve title and description for better CTR
- Add OpenGraph and Twitter Card tags
- Set canonical URL to redirect destination

### Change 2: [Server-Side Redirect]

- Convert from client-side redirect to server-side
- Better for SEO crawlers to understand redirect intent

### Change 3: [Schema Markup]

- Add ContactPage schema with organization details
- Include redirect information

## Issues Requiring Manual Review

None anticipated

## Performance Metrics

To be measured after implementation

## Validation Results

To be completed after implementation

## Final Summary

To be completed after implementation

## Sign-off

- [ ] All checklist items addressed
- [ ] Zero visual changes confirmed
- [ ] Documentation complete
- [ ] Ready for review

Agent: SEO Agent
Date Completed: In Progress
Time Spent: TBD
Status: 🔄 In Progress

## Notes

This is a redirect page to an external booking system (Cal.com). SEO optimizations are limited but we can improve metadata and ensure proper redirect handling for search engines.
