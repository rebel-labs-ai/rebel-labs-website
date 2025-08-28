import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import {
	HeroSection,
	MethodSection,
	ImpactAmplifierSection,
	FinalCTASection,
} from "./content-sections"
import { ContentProductionProtocol } from "./content-production-protocol"

// Dynamic imports for heavier interactive components
const AgentRoster = dynamic(
	() => import("./agent-roster").then(mod => ({ default: mod.AgentRoster })),
	{
		loading: () => (
			<div className="py-32 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="h-96 bg-accent/10 rounded-xl animate-pulse" />
				</div>
			</div>
		),
	}
)

// Static imports for SEO-critical server components
import { FAQSection } from "./faq-section"
import { RelatedSolutionsSection } from "./related-solutions"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.com"

export const metadata: Metadata = {
	title: "AI Content Creation Workforce | Automated Content Generation",
	description:
		"Deploy AI-powered content creation workforces to automate content generation, optimization, and multi-platform distribution. Scale your content marketing 10x faster with intelligent automation.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/workforces/content`,
		siteName: "Novosapien",
		title: "AI Content Creation Workforce - Scale Your Content Strategy",
		description:
			"Transform your content creation process with AI workforces. Generate blog posts, social media, and marketing copy 10x faster.",
		images: [
			{
				url: "/og-content-workforce.jpg",
				width: 1200,
				height: 630,
				alt: "AI Content Creation Workforce Dashboard",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "AI Content Creation Workforce",
		description:
			"Automate content creation with AI workforces. Generate and distribute content across all platforms.",
		images: ["/og-content-workforce.jpg"],
	},
	alternates: {
		canonical: `${baseUrl}/workforces/content`,
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

export default function ContentWorkforcePage() {
	// Schema markup for Service
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${baseUrl}/workforces/content#service`,
		name: "AI Content Creation Workforce",
		description:
			"Automated content creation and distribution service powered by AI agents",
		provider: {
			"@type": "Organization",
			name: "Novosapien",
			url: baseUrl,
		},
		serviceType: "Content Creation Automation",
		areaServed: {
			"@type": "Country",
			name: "Worldwide",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Content Workforce Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Blog Content Generation",
						description: "Automated blog post creation and optimization",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Social Media Content",
						description: "Multi-platform social media content generation",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Content Repurposing",
						description:
							"Transform single content pieces into multi-format campaigns",
					},
				},
			],
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "127",
		},
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
						{ name: "Content Creation" },
					]}
				/>

				{/* Hero Section - Server Component */}
				<HeroSection />

				{/* Content Production Protocol - Server Component */}
				<ContentProductionProtocol />

				{/* Agent Roster - Client Component for interactivity */}
				<Suspense
					fallback={
						<div className="py-32 px-4">
							<div className="max-w-5xl mx-auto">
								<div className="h-96 bg-accent/10 rounded-xl animate-pulse" />
							</div>
						</div>
					}
				>
					<AgentRoster />
				</Suspense>

				{/* Method Section - Server Component */}
				<MethodSection />

				{/* Impact Amplifier - Server Component */}
				<ImpactAmplifierSection />

				{/* Related Solutions - Server Component */}
				<RelatedSolutionsSection />

				{/* FAQ Section - Server Component */}
				<FAQSection />

				{/* Final CTA - Server Component */}
				<FinalCTASection />

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}
