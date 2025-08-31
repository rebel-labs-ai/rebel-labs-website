SEO Optimization Agent Reference Guide
Next.js 15 TypeScript/TSX Implementation
Document Purpose
This reference guide provides comprehensive technical implementation guidelines for SEO optimization. Each agent should:

Create a working document at /seo/[pagename]-seo.md (e.g., homepage-seo.md, mission-seo.md)
Copy the Universal Checklist Template to their document
Use this reference guide for implementation details
Complete their checklist, documenting all changes

Core Principle
Preserve ALL visual presentation while optimizing technical SEO structure. Users should see ZERO visual changes after optimization. Only behind-the-scenes technical improvements should be made.

Comprehensive Technical Implementation Reference

1. Heading Tag Optimization
   Why This Matters for SEO

Search engines use heading hierarchy to understand content structure
Multiple H1 tags confuse the main topic of the page
Proper hierarchy (H1→H2→H3) helps Google understand content relationships
H1 is given the most weight for keywords and topic relevance

Implementation Guidelines
1.1 Identifying and Fixing Multiple H1s
Problem Detection:
Look for multiple <h1> tags on a single page. This commonly happens when developers use H1 for visual prominence rather than semantic meaning.
tsx// INCORRECT: Multiple H1s confuse search engines

<h1 className="text-4xl font-bold mb-8">Company Name - AI Solutions</h1>
<h1 className="text-2xl font-semibold mb-4">Our Services</h1>
<h1 className="text-xl font-medium">Get Started Today</h1>
Solution:
Identify the PRIMARY topic of the page - this stays as H1. Convert others based on logical hierarchy, NOT visual size.
tsx// CORRECT: Clear hierarchy for search engines
<h1 className="text-4xl font-bold mb-8">Company Name - AI Solutions</h1>
<h2 className="text-2xl font-semibold mb-4">Our Services</h2>
<h3 className="text-xl font-medium">Get Started Today</h3>
1.2 Preserving Visual Appearance When Changing Tags
Critical: When you change an H1 to H2 (or any heading change), the visual appearance MUST remain identical.
Method 1: Using Inline Styles (Most Reliable)
tsximport { CSSProperties } from 'react'

// Step 1: Identify original H1 styles from global CSS or inspect element
// Step 2: Create preservation styles
const preservedH1Styles: CSSProperties = {
fontSize: '2.25rem', // 36px - original h1 size
fontWeight: 700, // bold - original h1 weight
lineHeight: 1.2, // original h1 line-height
marginBottom: '2rem', // 32px - original h1 margin
fontFamily: 'var(--font-satoshi)', // preserve font
color: 'inherit', // preserve color
letterSpacing: '-0.02em', // preserve letter spacing if set
}

// Step 3: Apply to converted element

<h2 style={preservedH1Styles}>Section Title</h2>
Method 2: Using Tailwind Classes
tsx// If original H1 uses these classes, copy ALL of them to H2
// Original H1
<h1 className="text-4xl font-bold leading-tight mb-8 text-gray-900">

// Converted H2 with identical classes

<h2 className="text-4xl font-bold leading-tight mb-8 text-gray-900">
Method 3: Creating Preservation Classes
tsx// Add to global CSS
.preserve-h1 {
  /* Copy all h1 styles from your global CSS */
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
  /* Include ALL properties that affect appearance */
}

// Apply to converted element

<h2 className="preserve-h1">Section Title</h2>
1.3 Documenting Your Changes
Always add comments explaining the SEO fix:
tsx{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
    Original: <h1 className="text-2xl font-semibold">
    Changed to: <h2 className="text-2xl font-semibold">
    Reason: Page had 3 H1 tags, kept primary H1 only
    Visual Impact: None - all classes preserved
    Date: [Date]
    Agent: Agent_[X]
*/}
<h2 className="text-2xl font-semibold">Our Services</h2>

2. Server vs Client Component Optimization
   Why This Matters for SEO

Search engine crawlers primarily see server-rendered HTML
Content in "use client" components may not be indexed reliably
Google can execute JavaScript but it's slower and less reliable
Server components guarantee content is in the initial HTML

Implementation Guidelines
2.1 Identifying SEO Problems in Client Components
Red Flags to Look For:
tsx// PROBLEM: Critical SEO content trapped in client component
"use client" // ❌ This directive means client-side only
import { useState, useEffect } from 'react'

export default function ProductPage() {
const [product, setProduct] = useState(null)

useEffect(() => {
// Fetching data client-side
fetchProduct().then(setProduct)
}, [])

return (

<div>
<h1>{product?.name}</h1> // ❌ Not in initial HTML
<p>{product?.description}</p> // ❌ Won't be indexed
<span>{product?.price}</span> // ❌ Missing from SEO
<button onClick={addToCart}>Add to Cart</button>
</div>
)
}
2.2 Proper Component Splitting Strategy
Solution: Extract static content to Server Component, keep interactivity in Client Component
tsx// ProductPage.tsx (Server Component - NO "use client")
import { getProduct } from '@/lib/api'
import AddToCartButton from './AddToCartButton'
import ProductGallery from './ProductGallery'

export default async function ProductPage({ id }: { id: string }) {
// Data fetching happens on server
const product = await getProduct(id)

return (

<div>
{/_ All SEO-critical content in Server Component _/}
<h1>{product.name}</h1> // ✅ In initial HTML
<p>{product.description}</p> // ✅ Indexed by search engines
<span>${product.price}</span> // ✅ Visible to crawlers

      {/* Interactive elements as Client Components */}
      <ProductGallery images={product.images} />
      <AddToCartButton productId={product.id} price={product.price} />
    </div>

)
}

// AddToCartButton.tsx (Client Component)
"use client"
import { useState } from 'react'
import { addToCart } from '@/lib/cart'

interface Props {
productId: string
price: number
}

export default function AddToCartButton({ productId, price }: Props) {
const [quantity, setQuantity] = useState(1)
const [loading, setLoading] = useState(false)

const handleAddToCart = async () => {
setLoading(true)
await addToCart(productId, quantity)
setLoading(false)
}

return (

<div className="flex items-center gap-4">
<input
type="number"
value={quantity}
onChange={(e) => setQuantity(Number(e.target.value))}
min="1"
className="w-20"
/>
<button 
        onClick={handleAddToCart}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
{loading ? 'Adding...' : `Add to Cart - $${price * quantity}`}
</button>
</div>
)
}
2.3 Decision Framework for Component Types
Use Server Components for:

Page titles and headings
Product/service descriptions
Blog post content
Navigation menus
Footer content
Meta information
Testimonials
FAQ sections
Any textual content

Use Client Components for:

Forms with validation
Interactive calculators
Image carousels with gestures
Modal dialogs
Dropdown menus
Real-time search
Shopping cart functionality
User preferences
Animations requiring JS

3. Image Optimization
   Why This Matters for SEO

Page speed is a ranking factor (Core Web Vitals)
Proper image optimization improves LCP (Largest Contentful Paint)
Alt text helps image search and accessibility
Next.js Image component provides automatic optimization

Implementation Guidelines
3.1 Converting Standard img to Next.js Image
Every <img> tag must be converted:
tsximport Image from 'next/image'

// BEFORE: Standard img tag (not optimized)
<img 
  src="/hero-banner.jpg" 
  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
  alt=""
  loading="lazy"
/>

// AFTER: Optimized Next.js Image
<Image
src="/hero-banner.jpg"
alt="AI workforce solutions dashboard showing automation metrics"
width={1920} // Actual image width
height={1080} // Actual image height
sizes="100vw" // Tell browser the display size
className="w-full h-[500px] object-cover rounded-lg shadow-xl" // PRESERVE all classes
priority={true} // Use for above-fold images
quality={90} // 90 for important images, 75 for others
placeholder="blur" // Optional: if you have blurDataURL
blurDataURL="..." // Optional: base64 blur placeholder
/>
3.2 Responsive Image Configuration
For images that change size based on viewport:
tsx<Image
src="/team-photo.jpg"
alt="Our AI development team at the annual conference"
width={1200}
height={800}
sizes="(max-width: 640px) 100vw, // Full width on mobile
(max-width: 1024px) 50vw, // Half width on tablet
(max-width: 1536px) 33vw, // Third width on desktop
400px" // Fixed width on large screens
className="w-full md:w-1/2 lg:w-1/3 xl:w-[400px]" // Responsive classes preserved
/>
3.3 Background Images
For images used as backgrounds:
tsx// BEFORE: CSS background image

<div 
  className="hero-section" 
  style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
>
  <h1>Welcome</h1>
</div>

// AFTER: Optimized with Next.js Image

<div className="hero-section relative">
  <Image
    src="/hero-bg.jpg"
    alt="" // Decorative image, alt can be empty
    fill // Makes image fill parent container
    sizes="100vw"
    quality={85}
    priority
    className="object-cover object-center"
    style={{ zIndex: -1 }} // Ensure it stays as background
  />
  <h1 className="relative z-10">Welcome</h1> {/* Content above image */}
</div>
3.4 Alt Text Best Practices
Extract meaningful descriptions from context:
tsx// Look at surrounding content for context
<section>
  <h2>Our AI-Powered Dashboard</h2>
  <p>Monitor your entire workflow in real-time...</p>
  <Image 
    alt="Dashboard interface showing real-time workflow monitoring with AI insights"
    // NOT: alt="Image" or alt="Dashboard" or alt=""
  />
</section>

// For decorative images
<Image
alt="" // Empty alt for purely decorative images
/>

// For informative images
<Image
alt="Graph showing 50% increase in productivity after AI implementation"
// Be specific about what the image conveys
/>

4. Metadata Implementation
   Why This Matters for SEO

Title tags appear in search results and influence click-through rates
Meta descriptions provide search snippet text
Open Graph tags control social media sharing appearance
Canonical URLs prevent duplicate content penalties

Implementation Guidelines
4.1 Title Tag Optimization
Rules for effective title tags:
tsxexport const metadata: Metadata = {
title: 'AI Content Generation Workforce | CompanyName',
// Structure: [Primary Keyword] | [Brand]
// Length: 50-60 characters (shows fully in search results)
// Unique: Different for every page
}

// Examples by page type:
// Homepage: "CompanyName - AI Workforce Automation Platform"
// Product: "Content Generation AI | CompanyName"
// Blog: "How to Automate Content Creation | CompanyName Blog"
// Contact: "Contact Our AI Experts | CompanyName"
4.2 Meta Description Optimization
tsxexport const metadata: Metadata = {
description: 'Transform your content creation with our AI workforce. Generate blog posts, social media content, and marketing copy 10x faster. Start free trial today.',
// Length: 150-160 characters (full display in search)
// Include: Primary keyword, value proposition, CTA
// Unique: Extract from page's first paragraph or summary
}
4.3 Complete Metadata Setup
tsximport { Metadata } from 'next'

// Static metadata (known at build time)
export const metadata: Metadata = {
title: 'AI Content Workforce Solutions | CompanyName',
description: 'Automate content creation with AI agents. Generate blog posts, social media, and marketing copy 10x faster.',

// Open Graph for social sharing
openGraph: {
type: 'website',
locale: 'en_US',
url: 'https://example.com/workforces/content',
siteName: 'CompanyName',
title: 'AI Content Workforce Solutions', // Can differ from meta title
description: 'Transform your content creation process with AI',
images: [
{
url: '/og-content-workforce.jpg', // 1200x630px recommended
width: 1200,
height: 630,
alt: 'AI Content Workforce Dashboard',
}
],
},

// Twitter Card
twitter: {
card: 'summary_large_image',
site: '@companyhandle',
creator: '@companyhandle',
title: 'AI Content Workforce Solutions',
description: 'Automate content creation with AI',
images: ['/og-content-workforce.jpg'],
},

// Canonical URL (prevent duplicate content)
alternates: {
canonical: 'https://example.com/workforces/content',
},

// Robots directives
robots: {
index: true,
follow: true,
nocache: false,
googleBot: {
index: true,
follow: true,
'max-image-preview': 'large',
'max-snippet': -1,
},
},
}

// Dynamic metadata (for dynamic routes)
export async function generateMetadata({
params
}: {
params: { slug: string }
}): Promise<Metadata> {
const page = await getPageData(params.slug)

return {
title: `${page.title} | CompanyName`,
description: page.summary.substring(0, 160),
openGraph: {
title: page.title,
description: page.summary,
url: `https://example.com/${params.slug}`,
images: [page.featuredImage],
},
}
}

5. Schema Markup (Structured Data)
   Why This Matters for SEO

Enables rich snippets in search results (stars, prices, FAQs)
Helps Google understand your content type and relationships
Can trigger special search features (knowledge panels, carousels)
Improves visibility and click-through rates

Implementation Guidelines
5.1 Basic Schema Implementation
tsx// Add to your page component (not in metadata)
export default function Page() {
const schemaData = {
'@context': 'https://schema.org',
'@type': 'WebPage', // Or specific type
'@id': 'https://example.com/page#webpage',
url: 'https://example.com/page',
name: 'Page Title from H1',
description: 'Page description from content',
dateModified: new Date().toISOString(),

    // Include breadcrumbs
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://example.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Current Page',
          item: 'https://example.com/page'
        }
      ]
    }

}

return (
<>

<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
/>
{/_ Rest of page content _/}
</>
)
}
5.2 Page-Specific Schema Types
For Service/Product Pages:
tsxconst productSchema = {
'@context': 'https://schema.org',
'@type': 'Product', // or 'Service'
name: 'AI Content Workforce',
description: 'Automated content generation solution',
brand: {
'@type': 'Brand',
name: 'CompanyName'
},
offers: {
'@type': 'Offer',
priceCurrency: 'USD',
price: '99.00',
priceValidUntil: '2024-12-31',
availability: 'https://schema.org/InStock'
},
aggregateRating: {
'@type': 'AggregateRating',
ratingValue: '4.8',
reviewCount: '230'
}
}
For FAQ Sections:
tsxconst faqSchema = {
'@context': 'https://schema.org',
'@type': 'FAQPage',
mainEntity: [
{
'@type': 'Question',
name: 'How does AI content generation work?',
acceptedAnswer: {
'@type': 'Answer',
text: 'Our AI analyzes patterns in successful content...'
}
},
// Add more Q&A pairs
]
}
For Contact Pages:
tsxconst contactSchema = {
'@context': 'https://schema.org',
'@type': 'ContactPage',
name: 'Contact Us',
description: 'Get in touch with our AI experts',
url: 'https://example.com/contact',
mainEntity: {
'@type': 'Organization',
name: 'CompanyName',
telephone: '+1-555-0100',
email: 'contact@example.com',
address: {
'@type': 'PostalAddress',
streetAddress: '123 AI Street',
addressLocality: 'San Francisco',
addressRegion: 'CA',
postalCode: '94102',
addressCountry: 'US'
}
}
}

6. Breadcrumb Implementation
   Why This Matters for SEO

Shows site hierarchy to search engines
Appears in search results, improving visibility
Helps users understand site structure
Distributes link equity throughout site

Implementation Guidelines
6.1 Adding Breadcrumbs to Pages
tsximport Breadcrumbs from '@/components/seo/Breadcrumbs'

export default function WorkforcePage() {
return (
<>
{/_ Add breadcrumbs at top of page content _/}
<Breadcrumbs items={[
{ name: 'Home', href: '/' },
{ name: 'AI Workforces', href: '/workforces' },
{ name: 'Content Generation' } // Current page, no href
]} />

      <h1>Content Generation Workforce</h1>
      {/* Rest of content */}
    </>

)
}
6.2 Breadcrumb Component with Schema
tsx// This component should already exist from pre-work
// Verify it includes schema markup:
const breadcrumbSchema = {
'@context': 'https://schema.org',
'@type': 'BreadcrumbList',
itemListElement: items.map((item, index) => ({
'@type': 'ListItem',
position: index + 1,
name: item.name,
item: item.href ? `https://example.com${item.href}` : undefined
}))
}

7. Internal Linking Strategy
   Why This Matters for SEO

Distributes page authority (PageRank) throughout site
Helps Google discover all pages
Establishes topical relationships
Improves user navigation and engagement

Implementation Guidelines
7.1 Adding Related Content Sections
tsx// Add to bottom of content pages

<section className="mt-12 pt-8 border-t">
  <h2 className="text-2xl font-bold mb-6">Related Solutions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Link 
      href="/workforces/lead" 
      className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">Lead Generation AI</h3>
      <p className="text-gray-600">
        Automate your sales pipeline with intelligent lead scoring
      </p>
      <span className="text-blue-600 mt-2 inline-block">
        Learn more →
      </span>
    </Link>
    
    <Link 
      href="/workforces/custom" 
      className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
      <p className="text-gray-600">
        Build tailored AI workforces for your unique needs
      </p>
      <span className="text-blue-600 mt-2 inline-block">
        Learn more →
      </span>
    </Link>
    
    {/* Add more related links */}
  </div>
</section>
7.2 Contextual In-Content Links
tsx// INCORRECT: Generic anchor text
<p>
  To learn more about our AI solutions, 
  <Link href="/workforces">click here</Link>.
</p>

// CORRECT: Descriptive anchor text

<p>
  Explore our 
  <Link href="/workforces">
    comprehensive AI workforce solutions
  </Link> 
  to find the perfect fit for your business.
</p>
7.3 Footer Link Optimization
Ensure footer contains comprehensive internal links:
tsx<footer>
  <div className="grid grid-cols-4 gap-8">
    <div>
      <h4 className="font-semibold mb-4">Products</h4>
      <ul className="space-y-2">
        <li><Link href="/workforces/content">Content AI</Link></li>
        <li><Link href="/workforces/lead">Lead Generation</Link></li>
        <li><Link href="/workforces/custom">Custom Solutions</Link></li>
      </ul>
    </div>
    {/* Continue for other sections */}
  </div>
</footer>

8. Mobile Optimization
   Why This Matters for SEO

Mobile-first indexing means Google primarily uses mobile version
Core Web Vitals measured on mobile affect rankings
Small touch targets hurt user experience metrics
Mobile usability is a direct ranking factor

Implementation Guidelines
8.1 Touch Target Optimization
Minimum 48x48px for all interactive elements:
tsx// PROBLEM: Button too small on mobile
<button className="px-2 py-1 text-sm">
Submit
</button>

// SOLUTION: Ensure minimum size
<button className="min-h-[48px] min-w-[48px] px-4 py-3 text-sm">
Submit
</button>

// For inline links, add invisible padding

<Link 
  href="/page"
  className="inline-block py-2 px-1 -my-1 -mx-0.5"
  // This adds touch area without changing visual layout
>
  small link text
</Link>

// For icon buttons
<button
className="w-12 h-12 flex items-center justify-center"
aria-label="Open menu"

> <IconMenu className="w-6 h-6" /> {/_ Icon stays small, button is 48px _/}
> </button>
> 8.2 Navigation Touch Targets
> tsx// Ensure nav items are easily tappable

<nav>
  <ul className="flex flex-col md:flex-row">
    <li>
      <Link 
        href="/"
        className="block py-4 px-6 hover:bg-gray-50"
        // Block display + padding ensures 48px+ height
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        href="/about"
        className="block py-4 px-6 hover:bg-gray-50"
      >
        About
      </Link>
    </li>
  </ul>
</nav>

9. Performance Optimizations
   Why This Matters for SEO

Core Web Vitals (LCP, FID, CLS) are ranking factors
Faster pages have better user engagement metrics
Google rewards fast-loading pages
Performance impacts crawl budget

Implementation Guidelines
9.1 Dynamic Imports for Heavy Components
tsximport dynamic from 'next/dynamic'

// Lazy load components not needed immediately
const ChartComponent = dynamic(
() => import('./ChartComponent'),
{
loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
ssr: false // Set false if component needs browser APIs
}
)

const InteractiveDemo = dynamic(
() => import('./InteractiveDemo'),
{
loading: () => (
<div className="h-96 flex items-center justify-center">
<span>Loading demo...</span>
</div>
)
}
)

// Usage in page
export default function Page() {
return (
<>
{/_ Critical content loads immediately _/}
<h1>AI Workforce Platform</h1>
<p>Essential information here...</p>

      {/* Heavy component loads when needed */}
      <InteractiveDemo />
    </>

)
}
9.2 Preconnect to Critical Domains
tsx// Add to page metadata or layout
export const metadata: Metadata = {
other: {
'link': [
{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
{ rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
]
}
}
9.3 Script Loading Optimization
tsximport Script from 'next/script'

// Load analytics after page is interactive

<Script 
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive" // Won't block page load
/>

// Load non-critical features when idle
<Script 
  src="https://widget.intercom.io/widget/app_id"
  strategy="lazyOnload" // Loads when browser is idle
/>

// Inline critical scripts
<Script id="critical-config" strategy="beforeInteractive">
  {`window.config = { apiUrl: '...' }`}
</Script>

10. ARIA Labels and Accessibility
    Why This Matters for SEO

Google uses accessibility signals for rankings
Better accessibility = better user experience metrics
Screen reader compatibility improves content understanding
Required for compliance and inclusivity

Implementation Guidelines
10.1 Navigation Landmarks
tsx// Main navigation

<nav aria-label="Main navigation">
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
  </ul>
</nav>

// Secondary navigation

<nav aria-label="Footer navigation">
  {/* Footer links */}
</nav>

// Breadcrumbs

<nav aria-label="Breadcrumb">
  <ol>
    {/* Breadcrumb items */}
  </ol>
</nav>
10.2 Interactive Elements
tsx// Buttons with icons need labels
<button 
  onClick={handleSearch}
  aria-label="Search for AI solutions"
  className="p-2"
>
  <SearchIcon />
</button>

// Form inputs

<form aria-label="Contact form">
  <label htmlFor="email" className="sr-only">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    aria-label="Enter your email address"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    placeholder="your@email.com"
  />
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email address
    </span>
  )}
</form>

// Toggle buttons
<button
onClick={toggleMenu}
aria-expanded={isMenuOpen}
aria-controls="mobile-menu"
aria-label="Toggle navigation menu"

>   <MenuIcon />
> </button>
> 10.3 Images and Links
> tsx// Informative images
> <Image 
>   src="/dashboard.png"
>   alt="AI dashboard showing 50% productivity increase over 6 months"
>   // Be specific about what information the image conveys
> />

// Decorative images
<Image
src="/decorative-pattern.png"
alt="" // Empty alt for decorative images
role="presentation"
/>

// Image links need context

<Link 
  href="/case-study"
  aria-label="Read the full TechCorp case study"
>
  <Image src="/techcorp-logo.png" alt="TechCorp logo" />
</Link>

Critical Rules and Preservation Techniques
Visual Preservation Checklist
When making ANY change, verify:

Font properties remain identical (size, weight, family, color)
Spacing unchanged (margin, padding, gap)
Layout preserved (flex, grid, positioning)
Interactive states maintained (hover, focus, active)
Responsive behavior intact (breakpoints, scaling)
Animations still work (transitions, transforms)

Documentation Requirements
For EVERY change made:
tsx{/_ AGENT COMMENT: [Change Type]
File: [filename]
Original: [original code]
Modified: [new code]
SEO Reason: [why this helps SEO]
Visual Preservation: [how styles were maintained]
Testing: [how you verified no visual change]
Agent: Agent\_[X]
Date: [Date]
_/}
Testing Each Change
Before marking any item complete:

Visual test: Compare before/after screenshots
Functional test: Ensure all interactions work
Mobile test: Check responsive behavior
TypeScript test: Run npm run build
Console test: Check for new errors

Universal SEO Checklist Template
Copy this template to /seo/[pagename]-seo.md and complete for your assigned page.
markdown# SEO Optimization Checklist
**Page:** [Page Name]
**URL:** https://[domain]/[path]
**Agent:** Agent\_[X]
**Date Started:** [Date]

## Pre-Optimization Capture

- [ ] Screenshot taken (desktop) - saved as: [filename]
- [ ] Screenshot taken (mobile) - saved as: [filename]
- [ ] Current Lighthouse scores recorded:
  - Performance: [score]
  - SEO: [score]
  - Accessibility: [score]
  - Best Practices: [score]
- [ ] Current TypeScript errors noted: [count or "none"]
- [ ] Console errors checked: [list any or "none"]

## 1. Metadata

- [ ] Title tag unique and optimized (50-60 chars)
  - Current: "[current title]"
  - Optimized: "[new title]"
- [ ] Meta description unique and optimized (150-160 chars)
  - Current: "[current description]"
  - Optimized: "[new description]"
- [ ] Open Graph tags complete
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (verify file exists)
  - [ ] og:url
- [ ] Twitter Card tags added
- [ ] Canonical URL set correctly: https://[domain]/[path]
- [ ] Favicon and app icons verified in /public

## 2. Heading Structure

- [ ] Only ONE H1 tag on page
  - H1 Content: "[H1 text]"
  - Location: [component/file]
- [ ] H2-H6 hierarchy is logical
- [ ] All headings in Server Components
- [ ] Styles preserved when tags changed
- [ ] Document heading changes:
  ```tsx
  // File: [filename]
  // Original: <h1 className="...">
  // Changed to: <h2 className="..." style={preservedStyles}>
  // Preservation method: [inline styles/classes/other]
  ```

3. Component Architecture

Critical content in Server Components
Interactive elements in Client Components
No SEO content trapped in "use client"
Components properly split
Document component changes:
tsx// Moved from: [ClientComponent.tsx]
// Moved to: [ServerComponent.tsx]
// Interactive parts extracted to: [NewClientComponent.tsx]

4. Images

All <img> converted to Next.js Image

Count converted: [X]

Alt text added for all images

Example: "[sample alt text]"

Priority set for above-fold images

Images with priority: [list]

Width/height attributes set
Sizes prop configured for responsive
Original classes preserved
Sample conversion:
tsx// Before: <img src="..." className="...">
// After: <Image src="..." alt="..." width={} height={} className="...">

5. Schema Markup

Appropriate schema type implemented

Type used: [WebPage/Article/Product/Service/etc]

Required schema fields populated
Breadcrumb schema added
Schema validates (validator.schema.org)
Schema implementation:
tsx// Location: [component/file]
// Schema type: [type]
// Fields included: [list main fields]

6. Breadcrumbs

Breadcrumb component added (skip if homepage)
Correct hierarchy shown
Current page has no href
Schema markup included
Implementation:
tsx// Items: Home > [Section] > [Current Page]

7. Internal Linking

All links use Next.js Link component
Descriptive anchor text (no "click here")

Fixed: [count] generic anchors

Related content section added

Location: [where added]
Links to: [pages linked]

At least 3 internal links point to this page

From: [list source pages]

No broken internal links

8. Performance

Heavy components use dynamic imports

Components: [list dynamically imported]

Suspense boundaries added where needed
Third-party scripts loading strategy set

Scripts: [list with strategies]

No client-side data fetching for SEO content
Preconnect tags for critical domains

Domains: [list]

9. Mobile Optimization

All touch targets minimum 48x48px

Fixed: [count] small targets

Touch targets don't overlap
Content readable without zooming
Interactive elements thumb-friendly
Mobile-specific issues addressed:
[List any specific mobile fixes]

10. Accessibility

ARIA labels on interactive elements

Count added: [X]

Form inputs properly labeled
Skip navigation link present
Focus states visible
Alt text descriptive
Sample ARIA implementation:
tsx// Example: <button aria-label="[label]">

11. Technical Validation

TypeScript compiles without new errors
No console errors in browser
HTML validates
Schema validates
Lighthouse SEO score improved

Before: [score]
After: [score]

Changes Log
Change 1: [Heading Hierarchy Fix]
File: [filename.tsx]
Line: [line numbers]
Before:
tsx<h1 className="text-2xl font-bold">Secondary Heading</h1>
After:
tsx<h2 className="text-2xl font-bold">Secondary Heading</h2>
Style Preservation Method: All Tailwind classes retained
Visual Impact: None - verified via screenshot comparison
SEO Impact: Clear hierarchy for search engines
Change 2: [Client/Server Component Split]
Files Affected: [list files]
Before Structure:
tsx"use client"
// All content in client component
After Structure:
tsx// Server Component (Page.tsx)
// SEO content here

// Client Component (InteractiveElement.tsx)
"use client"
// Only interactive parts
Visual Impact: None - functionality preserved
SEO Impact: Content now server-rendered and indexed
Change 3: [Continue for each change...]
Issues Requiring Manual Review
Issue 1: [Complex Component Restructure Needed]
Description: [What needs to be done]
Reason: [Why agent can't complete]
Recommendation: [Suggested approach]
Priority: [High/Medium/Low]
Issue 2: [Continue for each issue...]
Performance Metrics
Lighthouse Scores
MetricBeforeAfterChangePerformanceXY+ZSEOXY+ZAccessibilityXY+ZBest PracticesXY+Z
Core Web Vitals
MetricBeforeAfterStatusLCPXsXs✅ Good / ⚠️ Needs ImprovementFIDXmsXms✅ GoodCLSXX✅ Good
Validation Results

Visual Comparison: No changes detected

Method: [Screenshot diff/Manual review]

TypeScript: Compiles successfully

Command: npm run build

Schema: Validates correctly

Tool: validator.schema.org

Console: No new errors

Tested in: [Chrome/Firefox/Safari]

Final Summary
Achievements

Fixed [X] heading hierarchy issues
Converted [X] images to Next.js Image
Moved [X] components from client to server
Added [X] ARIA labels
Improved Lighthouse SEO score by [X] points

Remaining Work

[List any incomplete items]
[Estimated time to complete]

Recommendations for Future

[Suggestion 1]
[Suggestion 2]

Sign-off

All checklist items addressed
Zero visual changes confirmed
Documentation complete
Ready for review

Agent: Agent\_[X]
Date Completed: [Date]
Time Spent: [Hours]
Status: ✅ Complete / 🔄 In Progress / ⚠️ Blocked
Notes
[Any additional observations, challenges faced, or context for reviewers]

---

## Agent Working Process

1. **Create your working document** at `/seo/[pagename]-seo.md`
2. **Copy the Universal Checklist Template** above
3. **Take before screenshots** and record metrics
4. **Work through each section** referring to this guide
5. **Document every change** in detail
6. **Test thoroughly** after each change
7. **Update metrics** after completion
8. **Mark complete** when all items addressed

Remember: **Quality over speed.** Better to complete fewer optimizations correctly than rush and break the visual design. Every change must preserve the exact visual appearance while improving SEO.

Please for the lab page add an FAQ
