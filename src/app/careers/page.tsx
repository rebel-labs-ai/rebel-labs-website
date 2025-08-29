/* AGENT COMMENT: SEO Optimization - Server Component Architecture
   Converted from client component to server component for better SEO
   Moved interactive form to separate client component
   SEO Reason: Server-rendered content is guaranteed to be indexed
   Visual Preservation: All styles and layout remain identical
   Agent: SEO Agent
   Date: 2025-01-28
*/

import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { CareersForm } from "./careers-form"
import { FAQSection } from "./faq-section"
import { RelatedLinks } from "./related-links"

/* AGENT COMMENT: SEO Optimization - Comprehensive Metadata
   Added metadata for search engines and social sharing
   SEO Reason: Improves visibility and click-through rates
   Agent: SEO Agent
   Date: 2025-01-28
*/
export const metadata: Metadata = {
	title: "Careers at Novosapien - Join Our AI Workforce Team",
	description:
		"Join Novosapien's team building autonomous AI workforces. Remote-first culture, competitive benefits, and cutting-edge AI innovation. Apply today!",
	keywords:
		"AI careers, machine learning jobs, remote work, autonomous AI, digital workforce, tech careers, Novosapien careers",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://novosapien.com/careers",
		siteName: "Novosapien",
		title: "Careers at Novosapien - Build the Future of Work",
		description:
			"Join our team building autonomous AI workforces. Remote-first, competitive benefits, cutting-edge innovation.",
		images: [
			{
				url: "/og-careers.jpg",
				width: 1200,
				height: 630,
				alt: "Careers at Novosapien",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Careers at Novosapien",
		description:
			"Join our team building autonomous AI workforces. Remote-first culture with competitive benefits.",
		images: ["/og-careers.jpg"],
	},
	alternates: {
		canonical: "https://novosapien.com/careers",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export default function CareersPage() {
	/* AGENT COMMENT: SEO Optimization - Schema Markup
	   Added Organization schema for structured data
	   SEO Reason: Helps search engines understand page context
	   Agent: SEO Agent
	   Date: 2025-01-28
	*/
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://novosapien.com/#organization",
		name: "Novosapien",
		url: "https://novosapien.com",
		description:
			"Building autonomous AI workforces that transform how businesses operate",
		sameAs: [
			"https://twitter.com/novosapien",
			"https://linkedin.com/company/novosapien",
			"https://github.com/novosapien",
		],
		jobLocation: {
			"@type": "Place",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Remote",
				addressCountry: "Worldwide",
			},
		},
	}

	return (
		<>
			{/* Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>

			<div className="min-h-screen bg-background">
				{/* Navigation */}
				<Navigation />

				{/* Theme Toggle - Hidden on mobile, visible on desktop */}
				<div className="fixed top-4 right-4 z-50 hidden md:block">
					<ThemeToggle />
				</div>

				{/* Main Content */}
				<main className="pt-32 pb-24 px-4">
					<div className="max-w-3xl mx-auto">
						{/* AGENT COMMENT: SEO Optimization - Breadcrumbs
						   Added breadcrumb navigation for better site structure
						   SEO Reason: Helps search engines understand site hierarchy
						   Visual Preservation: Hidden visually with sr-only class
						   Agent: SEO Agent
						   Date: 2025-01-28
						*/}
						<Breadcrumbs
							items={[{ name: "Home", href: "/" }, { name: "Careers" }]}
						/>

						{/* Header */}
						<div className="text-center mb-12">
							{/* AGENT COMMENT: SEO Optimization - Single H1
							   Maintaining single H1 tag for clear page hierarchy
							   SEO Reason: Clear primary topic for search engines
							   Visual Preservation: All styles remain identical
							   Agent: SEO Agent
							   Date: 2025-01-28
							*/}
							<h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-geist-sans mb-4">
								Join Our Team
							</h1>
							<p className="text-muted-foreground text-lg">
								We&apos;re building the future of work with autonomous digital
								workforces. Join us on this journey.
							</p>
						</div>

						{/* Application Form - Client Component */}
						<CareersForm />

						{/* Related Links Section */}
						<RelatedLinks />
					</div>
				</main>

				{/* FAQ Section */}
				<FAQSection />

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}
