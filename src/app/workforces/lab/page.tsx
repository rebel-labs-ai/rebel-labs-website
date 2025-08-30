import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedDots } from "@/components/animated-dots"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import {
	HeroSection,
	DivisionOfLaborSection,
	ArtOfPossibleSection,
	FinalCTASection,
} from "./lab-sections"
import { FAQSection } from "./faq-section"
import { RelatedSolutionsSection } from "./related-solutions"

// Dynamic import for the interactive Engagement Protocol section
const EngagementProtocol = dynamic(
	() =>
		import("./lab-page-client").then(mod => ({
			default: mod.EngagementProtocol,
		})),
	{
		loading: () => (
			<div className="py-16 sm:py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="h-96 bg-accent/10 rounded-xl animate-pulse" />
				</div>
			</div>
		),
		ssr: true, // Keep SSR for initial render
	}
)

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

export const metadata: Metadata = {
	title: "Custom AI Workforce Lab | Build Bespoke Digital Workforces",
	description:
		"Transform complex revenue operations with custom AI workforces. The Lab builds mission-specific autonomous systems for your unique business challenges. 8-12 week deployment.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/workforces/lab`,
		siteName: "Novosapien",
		title: "The Workforce Lab - Custom AI Solutions for Complex Operations",
		description:
			"Build proprietary AI workforces for your most complex challenges. Transform unique workflows into autonomous operational assets.",
		images: [
			{
				url: "/og-lab-workforce.jpg",
				width: 1200,
				height: 630,
				alt: "Novosapien Workforce Lab - Custom AI Development",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Custom AI Workforce Lab",
		description:
			"Build bespoke AI workforces for complex revenue operations. Transform proprietary workflows into autonomous systems.",
		images: ["/og-lab-workforce.jpg"],
	},
	alternates: {
		canonical: `${baseUrl}/workforces/lab`,
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export default function LabPage() {
	// Schema markup for the Lab Service
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${baseUrl}/workforces/lab#service`,
		name: "Workforce Lab - Custom AI Development",
		description:
			"Custom AI workforce development service for complex, mission-critical revenue operations",
		provider: [
			{
				"@type": "Organization",
				name: "Novosapien",
				url: baseUrl,
			},
			{
				"@type": "Organization",
				name: "Rebel Labs",
				url: "https://rebel-labs.co",
			},
		],
		serviceType: "Custom AI Workforce Development",
		areaServed: {
			"@type": "Country",
			name: "Worldwide",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Custom Workforce Development Services",
			itemListElement: [
				{
					"@type": "Service",
					name: "Enterprise Deal Desk Automation",
					description:
						"Custom workforce for complex quoting and deal approval workflows",
				},
				{
					"@type": "Service",
					name: "Pipeline Intelligence System",
					description: "AI-powered pipeline monitoring and intervention system",
				},
				{
					"@type": "Service",
					name: "Custom Lead Scoring Engine",
					description: "Proprietary lead scoring based on your unique data",
				},
			],
		},
		// Removed aggregateRating - will add back when we have real customer reviews
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>
			<div className="min-h-screen bg-background">
				{/* Navigation */}
				<Navigation />

				{/* Theme Toggle */}
				<div className="fixed top-4 right-4 z-50 hidden md:block">
					<ThemeToggle />
				</div>

				{/* Breadcrumbs - hidden but present for SEO */}
				<Breadcrumbs
					items={[
						{ name: "Home", href: "/" },
						{ name: "AI Workforces", href: "/workforces" },
						{ name: "The Lab" },
					]}
				/>

				{/* Hero Section with animated background */}
				<div className="relative min-h-screen">
					{/* Animated Dot Pattern Background */}
					<div className="absolute inset-0">
						<AnimatedDots />
					</div>

					{/* Gradient overlay */}
					<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none" />

					{/* Hero Content - Server Component */}
					<HeroSection />
				</div>

				{/* Division of Labor Section - Server Component */}
				<DivisionOfLaborSection />

				{/* Engagement Protocol - Client Component for scrollytelling */}
				<Suspense
					fallback={
						<div className="py-16 sm:py-32 px-4">
							<div className="max-w-6xl mx-auto">
								<div className="h-96 bg-accent/10 rounded-xl animate-pulse" />
							</div>
						</div>
					}
				>
					<EngagementProtocol />
				</Suspense>

				{/* Art of the Possible - Server Component */}
				<ArtOfPossibleSection />

				{/* Final CTA - Server Component */}
				<FinalCTASection />

				{/* Related Solutions - Server Component */}
				<RelatedSolutionsSection />

				{/* FAQ Section - Server Component */}
				<FAQSection />

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}
