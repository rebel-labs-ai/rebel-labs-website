# SEO Optimization Checklist

**Page:** Careers
**URL:** https://novosapien.com/careers
**Agent:** SEO Agent
**Date Started:** 2025-01-28

## Pre-Optimization Capture

- [ ] Screenshot taken (desktop) - saved as: careers-desktop-before.png
- [ ] Screenshot taken (mobile) - saved as: careers-mobile-before.png
- [ ] Current Lighthouse scores recorded:
  - Performance: TBD
  - SEO: TBD
  - Accessibility: TBD
  - Best Practices: TBD
- [ ] Current TypeScript errors noted: none
- [ ] Console errors checked: none

## 1. Metadata

- [ ] Title tag unique and optimized (50-60 chars)
  - Current: "None (using client component)"
  - Optimized: "Careers at Novosapien - Join Our AI Workforce Team"
- [ ] Meta description unique and optimized (150-160 chars)
  - Current: "None"
  - Optimized: "Join Novosapien's team building autonomous AI workforces. Remote-first culture, competitive benefits, and cutting-edge AI innovation. Apply today!"
- [ ] Open Graph tags complete
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (verify file exists)
  - [ ] og:url
- [ ] Twitter Card tags added
- [ ] Canonical URL set correctly: https://novosapien.com/careers
- [ ] Favicon and app icons verified in /public

## 2. Heading Structure

- [ ] Only ONE H1 tag on page
  - H1 Content: "Join Our Team"
  - Location: CareersPage component
- [ ] H2-H6 hierarchy is logical
- [ ] All headings in Server Components
- [ ] Styles preserved when tags changed
- [ ] Document heading changes

## 3. Component Architecture

- [ ] Critical content in Server Components
- [ ] Interactive elements in Client Components
- [ ] No SEO content trapped in "use client"
- [ ] Components properly split
- [ ] Document component changes

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
  - Type used: Organization/JobPosting
- [ ] Required schema fields populated
- [ ] Breadcrumb schema added
- [ ] Schema validates (validator.schema.org)
- [ ] FAQ schema for new FAQ section

## 6. Breadcrumbs

- [ ] Breadcrumb component added
- [ ] Correct hierarchy shown (Home > Careers)
- [ ] Current page has no href
- [ ] Schema markup included

## 7. Internal Linking

- [ ] All links use Next.js Link component
- [ ] Descriptive anchor text (no "click here")
- [ ] Related content section added
  - Location: Bottom of page
  - Links to: Mission, About, Workforces
- [ ] At least 3 internal links point to this page
- [ ] No broken internal links

## 8. Performance

- [ ] Heavy components use dynamic imports
- [ ] Suspense boundaries added where needed
- [ ] Third-party scripts loading strategy set
- [ ] No client-side data fetching for SEO content
- [ ] Preconnect tags for critical domains

## 9. Mobile Optimization

- [ ] All touch targets minimum 48x48px
  - Fixed: Form inputs and buttons
- [ ] Touch targets don't overlap
- [ ] Content readable without zooming
- [ ] Interactive elements thumb-friendly

## 10. Accessibility

- [ ] ARIA labels on interactive elements
  - Count added: All form inputs
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

### Change 1: [Component Architecture Split]

- Will split client component into server and client parts
- Move static content to server component
- Keep form interactivity in client component

### Change 2: [Add Metadata]

- Add comprehensive metadata with title, description, OG tags

### Change 3: [Add FAQ Section]

- Create FAQ component following lab page pattern
- Include FAQ schema markup

### Change 4: [Add Breadcrumbs]

- Add breadcrumb navigation using existing component

### Change 5: [Internal Links]

- Add related content section at bottom

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

Page currently uses "use client" directive which prevents server-side rendering of content. Will need to restructure to maximize SEO benefits while maintaining form functionality.
