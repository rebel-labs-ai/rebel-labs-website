Pre-Work Setup Document for SEO Optimization
Next.js 15 TypeScript Implementation with App Router & TurbopackOverview
This document outlines all one-time setup tasks that must be completed BEFORE deploying autonomous agents for individual page optimizations. These foundational elements will be used across all pages and ensure consistency in SEO implementation.1. File Structure SetupCreate the following directory structure if it doesn't exist:
/app
layout.tsx
not-found.tsx
error.tsx
loading.tsx
robots.ts
sitemap.ts
/components
/seo
Breadcrumbs.tsx
SEOHead.tsx
/types
seo.ts
/utils
seo-helpers.ts
/public
/fonts (your Satoshi font files)
favicon.ico
og-image.jpg (or appropriate format)
apple-touch-icon.png
manifest.json2. Root Layout Configurationapp/layout.tsxTasks to complete:
Configure Font Loading:

tsx// For Geist from next/font
import { Geist } from 'next/font/google' // or appropriate import

// For local Satoshi font
import localFont from 'next/font/local'

const satoshi = localFont({
src: [
{
path: '../public/fonts/Satoshi-Regular.woff2', // Adjust path
weight: '400',
style: 'normal',
},
{
path: '../public/fonts/Satoshi-Bold.woff2', // Adjust path
weight: '700',
style: 'normal',
},
// Add other weights as needed
],
display: 'swap',
variable: '--font-satoshi',
preload: true,
})

const geist = Geist({
// Configure Geist settings
subsets: ['latin'],
display: 'swap',
variable: '--font-geist',
})
Set Default Metadata:

tsxexport const metadata: Metadata = {
metadataBase: new URL('[YOUR_PRODUCTION_URL]'),
title: {
default: '[YOUR_DEFAULT_TITLE]',
template: '%s | [YOUR_BRAND_NAME]'
},
description: '[YOUR_DEFAULT_DESCRIPTION]',
viewport: 'width=device-width, initial-scale=1',
robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
'max-video-preview': -1,
'max-image-preview': 'large',
'max-snippet': -1,
},
},
icons: {
icon: '/favicon.ico',
apple: '/apple-touch-icon.png',
},
manifest: '/manifest.json',
openGraph: {
type: 'website',
locale: 'en_US',
url: '[YOUR_PRODUCTION_URL]',
siteName: '[YOUR_SITE_NAME]',
images: [{
url: '/og-image.jpg', // Ensure this exists
width: 1200,
height: 630,
alt: '[YOUR_OG_IMAGE_ALT]',
}],
},
twitter: {
card: 'summary_large_image',
site: '@[YOUR_TWITTER_HANDLE]', // If applicable
},
}
Add Preconnect Tags and Scripts:

tsxexport default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (

<html lang="en" className={`${satoshi.variable} ${geist.variable}`}>
<head>
{/_ Preconnect to any third-party domains you use _/}
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
{/_ Add other preconnects as needed _/}

        {/* Critical inline CSS (if needed) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Only include critical above-the-fold styles */
              /* Extract these from your actual design */
            `
          }}
        />
      </head>
      <body>
        {children}

        {/* Analytics scripts - use your actual IDs */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>

)
}3. 404 Error Pageapp/not-found.tsx
tsximport Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
title: '404 - Page Not Found | [YOUR_BRAND]',
description: 'The page you are looking for could not be found.',
robots: 'noindex, nofollow',
}

export default function NotFound() {
return (

<div className="[YOUR_CONTAINER_STYLES]">
{/_ Create a 404 page matching your design _/}
<h1>404 - Page Not Found</h1>
<p>[YOUR_404_MESSAGE]</p>
<Link href="/">
Return to Homepage
</Link>
</div>
)
}4. Error Boundaryapp/error.tsx
tsx'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
error,
reset,
}: {
error: Error & { digest?: string }
reset: () => void
}) {
useEffect(() => {
// Log error to your error reporting service
console.error(error)
}, [error])

return (

<div className="[YOUR_CONTAINER_STYLES]">
<h2>Something went wrong!</h2>
<button onClick={reset}>Try again</button>
<Link href="/">Return to Homepage</Link>
</div>
)
}5. Loading Stateapp/loading.tsx
tsxexport default function Loading() {
return (
<div className="[YOUR_LOADING_STYLES]">
{/_ Add your loading indicator _/}
{/_ Could be spinner, skeleton, or progress bar _/}
</div>
)
}6. Dynamic Sitemapapp/sitemap.ts
tsximport { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
// Define your base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://[YOUR_DOMAIN]'

// List all pages with their properties
return [
{
url: baseUrl,
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 1.0,
},
{
url: `${baseUrl}/mission`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.8,
},
{
url: `${baseUrl}/blog`,
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 0.9,
},
{
url: `${baseUrl}/careers`,
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 0.7,
},
{
url: `${baseUrl}/contact`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.7,
},
{
url: `${baseUrl}/workforces/content`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.8,
},
{
url: `${baseUrl}/workforces/lead`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.8,
},
{
url: `${baseUrl}/workforces/custom`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.8,
},
{
url: `${baseUrl}/workforces/lab`,
lastModified: new Date(),
changeFrequency: 'monthly',
priority: 0.7,
},
]
}7. Robots Configurationapp/robots.ts
tsximport { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://[YOUR_DOMAIN]'

return {
rules: {
userAgent: '_',
allow: '/',
disallow: [
'/api/',
'/admin/',
'/_.json$',
        '/*?*',  // Block URL parameters if not needed for SEO
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
}
}8. Reusable SEO Componentscomponents/seo/Breadcrumbs.tsx
tsximport Link from 'next/link'
import { ChevronRight } from 'lucide-react' // or your icon solution

interface BreadcrumbItem {
name: string
href?: string
}

interface BreadcrumbsProps {
items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

const breadcrumbSchema = {
'@context': 'https://schema.org',
'@type': 'BreadcrumbList',
itemListElement: items.map((item, index) => ({
'@type': 'ListItem',
position: index + 1,
name: item.name,
item: item.href ? `${baseUrl}${item.href}` : undefined
}))
}

return (
<>

<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
/>
<nav aria-label="Breadcrumb" className="[YOUR_BREADCRUMB_STYLES]">
<ol className="[YOUR_LIST_STYLES]">
{items.map((item, index) => (
<li key={index} className="[YOUR_ITEM_STYLES]">
{index > 0 && (
<span className="[YOUR_SEPARATOR_STYLES]" aria-hidden="true">
{/_ Use your separator - could be /, >, or an icon _/}
<ChevronRight />
</span>
)}
{item.href ? (
<Link href={item.href} className="[YOUR_LINK_STYLES]">
{item.name}
</Link>
) : (
<span className="[YOUR_CURRENT_PAGE_STYLES]" aria-current="page">
{item.name}
</span>
)}
</li>
))}
</ol>
</nav>
</>
)
}components/seo/SEOHead.tsx
tsx// Wrapper component for common SEO elements
export function SEOHead({ children }: { children: React.ReactNode }) {
return (
<>
{/_ Add any common SEO elements all pages need _/}
{children}
</>
)
}9. Type Definitionstypes/seo.ts
tsximport { Metadata } from 'next'

export interface BreadcrumbItem {
name: string
href?: string
}

export interface PageSEO {
title: string
description: string
canonical: string
ogImage?: string
}

export interface SchemaData {
'@context': 'https://schema.org'
'@type': string
[key: string]: any
}

export type SchemaType =
| 'WebPage'
| 'Article'
| 'Product'
| 'Service'
| 'Organization'
| 'FAQPage'
| 'ContactPage'
| 'AboutPage'
| 'CollectionPage'
| 'JobPosting'

export interface SEOChange {
type: 'heading' | 'image' | 'metadata' | 'schema'
original: string
modified: string
stylesPreserved: React.CSSProperties | string[]
visualImpact: 'none' | 'minimal' | 'significant'
verified: boolean
}10. SEO Helper Utilitiesutils/seo-helpers.ts
tsximport { CSSProperties } from 'react'

/\*\*

- Preserves visual styles when converting heading tags for SEO
  \*/
  export function preserveHeadingStyles(
  originalTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  ): CSSProperties {
  // Map these to your actual global CSS styles
  const styles: Record<string, CSSProperties> = {
  h1: {
  fontSize: '[YOUR_H1_SIZE]',
  fontWeight: '[YOUR_H1_WEIGHT]',
  lineHeight: '[YOUR_H1_LINE_HEIGHT]',
  marginBottom: '[YOUR_H1_MARGIN]',
  fontFamily: '[YOUR_H1_FONT]',
  },
  h2: {
  fontSize: '[YOUR_H2_SIZE]',
  fontWeight: '[YOUR_H2_WEIGHT]',
  lineHeight: '[YOUR_H2_LINE_HEIGHT]',
  marginBottom: '[YOUR_H2_MARGIN]',
  fontFamily: '[YOUR_H2_FONT]',
  },
  // Continue for h3-h6
  }
  return styles[originalTag] || {}
  }

/\*\*

- Type guard for heading elements
  \*/
  export function isHeadingTag(
  tag: string
  ): tag is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
  }

/\*\*

- Extracts text content for meta descriptions from HTML/JSX
  _/
  export function extractTextContent(content: string, maxLength: number = 160): string {
  // Strip HTML tags, truncate to maxLength
  const text = content.replace(/<[^>]_>/g, '').trim()
  return text.length > maxLength
  ? text.substring(0, maxLength - 3) + '...'
  : text
  }

/\*\*

- Generates canonical URL
  _/
  export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || ''
  return `${baseUrl}${path}`
  }11. Global CSS Utilitiesapp/globals.css
  Add these utility classes to your existing global CSS:css/_ Touch target optimization for mobile \*/
  .touch-target {
  min-height: 48px;
  min-width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  }

/_ Screen reader only content _/
.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

/_ Focus visible for keyboard navigation _/
\*:focus-visible {
outline: 2px solid [YOUR_BRAND_COLOR];
outline-offset: 2px;
}

/_ Skip to main content link (accessibility) _/
.skip-link {
position: absolute;
top: -40px;
left: 0;
background: [YOUR_BACKGROUND_COLOR];
color: [YOUR_TEXT_COLOR];
padding: 8px;
text-decoration: none;
z-index: 100;
}

.skip-link:focus {
top: 0;
}

/_ Ensure interactive elements meet minimum size _/
button,
a,
input[type="submit"],
input[type="button"],
select {
min-height: 44px; /_ iOS recommendation _/
min-width: 44px;
}

/_ Preserve heading styles when tags change for SEO _/
.preserve-h1 {
/_ Copy your actual h1 styles here _/
}

.preserve-h2 {
/_ Copy your actual h2 styles here _/
}

/_ Continue for other headings _/12. Next.js Configurationnext.config.js
javascript/\*_ @type {import('next').NextConfig} _/
const nextConfig = {
// Turbopack is default in Next.js 15
experimental: {
turbo: {
// Turbopack specific optimizations if needed
},
},

images: {
domains: ['[YOUR_IMAGE_DOMAINS]'],
formats: ['image/avif', 'image/webp'],
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
},

compress: true,
poweredByHeader: false,

// Redirects for SEO
async redirects() {
return [
// Add any necessary redirects
// Example:
// {
// source: '/old-path',
// destination: '/new-path',
// permanent: true, // 301 redirect
// },
]
},

// Headers for security and performance
async headers() {
return [
{
source: '/:path*',
headers: [
{
key: 'X-DNS-Prefetch-Control',
value: 'on'
},
{
key: 'X-Frame-Options',
value: 'SAMEORIGIN'
},
{
key: 'X-Content-Type-Options',
value: 'nosniff'
},
{
key: 'Referrer-Policy',
value: 'strict-origin-when-cross-origin'
},
],
},
{
source: '/fonts/:path*',
headers: [
{
key: 'Cache-Control',
value: 'public, max-age=31536000, immutable',
},
],
},
]
},
}

module.exports = nextConfig13. Environment Variables.env.local
bash# Site Configuration
NEXT_PUBLIC_SITE_URL=https://[YOUR_PRODUCTION_URL]
NEXT_PUBLIC_SITE_NAME=[YOUR_SITE_NAME]

# Analytics (if applicable)

NEXT_PUBLIC_GA_ID=[YOUR_GA_MEASUREMENT_ID]
NEXT_PUBLIC_GTM_ID=[YOUR_GTM_ID]

# Social Media (if applicable)

NEXT_PUBLIC_TWITTER_HANDLE=[YOUR_TWITTER]
NEXT_PUBLIC_FACEBOOK_APP_ID=[YOUR_FB_APP_ID]

# API Keys (if needed)

# Keep sensitive keys server-side only (no NEXT*PUBLIC* prefix)14. Public Assets ChecklistEnsure these files exist in /public:

favicon.ico
apple-touch-icon.png (180x180)
og-image.jpg (1200x630)
manifest.json
Satoshi font files in /public/fonts/
Any other brand assets
Sample manifest.json
json{
"name": "[YOUR_APP_NAME]",
"short_name": "[YOUR_SHORT_NAME]",
"description": "[YOUR_DESCRIPTION]",
"start_url": "/",
"display": "standalone",
"background_color": "#ffffff",
"theme_color": "[YOUR_BRAND_COLOR]",
"icons": [
{
"src": "/icon-192.png",
"sizes": "192x192",
"type": "image/png"
},
{
"src": "/icon-512.png",
"sizes": "512x512",
"type": "image/png"
}
]
}15. Pre-Deployment ChecklistBefore sending agents to optimize individual pages, verify:Core Files

Root layout.tsx configured with fonts and metadata
not-found.tsx created and styled
error.tsx boundary implemented
loading.tsx states defined
sitemap.ts with all pages listed
robots.ts configured
Components

Breadcrumbs component created
SEO helper components ready
Type definitions in place
Utility functions available
Configuration

next.config.js properly configured
Environment variables set
Global CSS utilities added
Font files properly loaded
Assets

Favicon and app icons present
OG image created and optimized
manifest.json configured
Font files in correct location
Analytics & Monitoring

Google Analytics/GTM configured
Error tracking set up
Performance monitoring ready
Testing

Build successfully with npm run build
No TypeScript errors
Lighthouse score baseline recorded
Mobile responsiveness verified
Notes for Implementation
Replace all placeholders marked with [YOUR_...] with actual values
Map heading styles in preserveHeadingStyles() to match your actual CSS
Test font loading to ensure both Satoshi and Geist load properly
Verify Turbopack is working correctly with your setup
Check all external domain preconnects are necessary
Ensure schema types match your content types
