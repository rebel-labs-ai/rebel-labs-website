import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { TwinklingStars, AnimatedHeroContent } from "./client-components"
import { HubSpokeGraphic, RelatedSolutionsSection } from "./mission-sections"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

export const metadata: Metadata = {
	title: "Our Mission - Building the Future of Autonomous Work | Novosapien",
	description:
		"Discover how we're revolutionizing productivity through autonomous AI workforces that deliver outcomes, not just tools. Join us in building elastic operations for tomorrow's businesses.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/mission`,
		siteName: "Novosapien",
		title: "Our Mission - Building the Future of Autonomous Work",
		description:
			"We don't sell tools. We deliver outcomes. Discover how Novosapien is revolutionizing work through autonomous AI workforces.",
		images: [
			{
				url: "/mission/hub.svg", // Using existing mission asset as OG image
				width: 1200,
				height: 630,
				alt: "Novosapien Mission - Elastic Operations Hub",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Our Mission - Building the Future of Autonomous Work",
		description:
			"We don't sell tools. We deliver outcomes through autonomous AI workforces.",
		images: ["/mission/hub.svg"],
	},
	alternates: {
		canonical: `${baseUrl}/mission`,
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

export default function MissionPage() {
	// Schema markup for WebPage
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${baseUrl}/mission#webpage`,
		url: `${baseUrl}/mission`,
		name: "Our Mission - Novosapien",
		description:
			"Discover how we're revolutionizing productivity through autonomous AI workforces that deliver outcomes, not just tools.",
		dateModified: new Date().toISOString(),
		publisher: {
			"@type": "Organization",
			name: "Novosapien",
			url: baseUrl,
			logo: {
				"@type": "ImageObject",
				url: `${baseUrl}/logo.svg`,
			},
		},
		mainEntity: {
			"@type": "Organization",
			name: "Novosapien",
			url: baseUrl,
			description:
				"Building autonomous AI workforces that transform business operations through elastic, outcome-focused solutions.",
			foundingDate: "2023",
			slogan: "We Don't Sell Tools. We Deliver Outcomes.",
			knowsAbout: [
				"Artificial Intelligence",
				"Business Automation",
				"Digital Workforces",
				"Elastic Operations",
			],
		},
	}

	return (
		<>
			{/* AGENT COMMENT: SEO Optimization - Schema Markup
				Added structured data for WebPage and Organization
				This helps search engines understand our mission and company information
				Date: 2025-08-28
				Agent: Claude
			*/}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>

			<div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
				{/* Twinkling Stars Background - Client Component */}
				<TwinklingStars />

				{/* Gradient Overlay for depth */}
				<div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background/40" />

				<div className="relative z-10">
					<Navigation />
					<ThemeToggle />

					{/* AGENT COMMENT: SEO Optimization - Breadcrumbs
						Added breadcrumb navigation for better site structure
						Includes schema markup for search engines
						Date: 2025-08-28
						Agent: Claude
					*/}
					<Breadcrumbs
						items={[{ name: "Home", href: "/" }, { name: "Our Mission" }]}
					/>

					{/* Hero Section with Card - Server rendered content */}
					<MissionHeroSection />

					{/* Main Content with Cards - Server rendered sections */}
					<div className="relative mx-auto max-w-7xl px-6 py-24">
						<div className="space-y-32">
							{/* Section 1: The Old World is Broken */}
							<OldWorldSection />

							{/* Section 2: A New Coat of Paint */}
							<NewCoatSection />

							{/* Section 3: The Burden of the Blank Canvas */}
							<BlankCanvasSection />

							{/* Section 4: The Principle */}
							<PrincipleSection />

							{/* Section 5: The Promised Land */}
							<PromisedLandSection />
						</div>
					</div>

					{/* CTA Section */}
					<CTASection />

					{/* Related Solutions Section - Server component with internal links */}
					<RelatedSolutionsSection />

					<Footer />
				</div>
			</div>
		</>
	)
}

// Hero Section Component
function MissionHeroSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center px-4  sm:pt-18">
			<div className="mx-auto max-w-5xl">
				<div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-card/80 p-10 backdrop-blur-lg shadow-[0_0_50px_rgba(var(--accent),0.1)]">
					{/* Animated gradient border effect */}
					<div className="absolute inset-0 -z-10">
						<div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-accent via-accent-teal to-accent bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]" />
						<div className="absolute inset-0 rounded-3xl bg-card/95" />
					</div>

					<AnimatedHeroContent>
						<div className="relative z-10 text-center">
							<div className="mb-6 flex justify-center">
								<Sparkles className="h-12 w-12 text-accent animate-pulse" />
							</div>
							{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy
								Keeping single H1 for page, all content in server component
								Animation handled via CSS data attributes from client wrapper
								Date: 2025-08-28
								Agent: Claude
							*/}
							<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium transition-all duration-1000 data-[show-intro=true]:translate-y-0 data-[show-intro=true]:opacity-100 data-[show-intro=false]:translate-y-4 data-[show-intro=false]:opacity-0">
								The Future of Productive Work is Not Another, Better Tool.
							</h1>
							<p className="text-muted-foreground text-xl mt-8 leading-relaxed transition-all duration-1000 delay-300 data-[show-subtext=true]:translate-y-0 data-[show-subtext=true]:opacity-100 data-[show-subtext=false]:translate-y-4 data-[show-subtext=false]:opacity-0">
								It is a new means of production, where autonomous workforces
								deliver outcomes, not just assist with tasks.
							</p>
						</div>
					</AnimatedHeroContent>
				</div>
			</div>
		</section>
	)
}

// Section 1: The Old World is Broken
function OldWorldSection() {
	return (
		<section className="scroll-mt-24">
			<div>
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Content */}
					<div>
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-6">
							The Old World is Broken.
						</h2>
						<div className="space-y-4">
							<p className="text-lg text-muted-foreground">
								For the last two decades, &quot;Software as a Service&quot; has
								sold you a simple promise: a better tool. A better CRM, a better
								spreadsheet, a better email client.
							</p>
							<p className="text-lg text-muted-foreground">
								They gave your team better hammers and better shovels. But your
								team was still in the ditch, digging. The work itself
								didn&apos;t change. The human remained the bottleneck.
							</p>
							<p className="text-lg font-semibold text-foreground border-l-4 border-accent pl-4 mt-6">
								This era of incremental tools is over.
							</p>
						</div>
					</div>

					{/* Visual Card */}
					<div className="relative overflow-hidden rounded-2xl p-8 flex items-center justify-center">
						{/* AGENT COMMENT: SEO Optimization - Image Optimization
							Converting img to Next.js Image with proper alt text
							Using priority for above-fold image
							Date: 2025-08-28
							Agent: Claude
						*/}
						<Image
							src="/mission/conveyer1.svg"
							alt="Traditional assembly line representing the old world of rigid work processes and human bottlenecks"
							width={600}
							height={400}
							className="w-full h-auto dark:hidden"
							priority
						/>
						<Image
							src="/mission/conveyer1-dark.svg"
							alt="Traditional assembly line representing the old world of rigid work processes and human bottlenecks"
							width={600}
							height={400}
							className="w-full h-auto hidden dark:block"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

// Section 2: A New Coat of Paint
function NewCoatSection() {
	return (
		<section className="scroll-mt-24">
			<div>
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Visual Card */}
					<div className="relative order-2 overflow-hidden rounded-2xl p-8 flex items-center justify-center lg:order-1">
						{/* AGENT COMMENT: SEO Optimization - Image Optimization
							Converting img to Next.js Image with descriptive alt text
							Date: 2025-08-28
							Agent: Claude
						*/}
						<Image
							src="/mission/conveyer2.svg"
							alt="AI-enhanced tools sprinkled on traditional systems showing incremental improvements without fundamental change"
							width={600}
							height={400}
							className="w-full h-auto dark:hidden"
						/>
						<Image
							src="/mission/conveyer2-dark.svg"
							alt="AI-enhanced tools sprinkled on traditional systems showing incremental improvements without fundamental change"
							width={600}
							height={400}
							className="w-full h-auto hidden dark:block"
						/>
					</div>

					{/* Content */}
					<div className="order-1 lg:order-2">
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-6">
							A New Coat of Paint on a Crumbling Foundation.
						</h2>
						<div className="space-y-4">
							<p className="text-lg text-muted-foreground">
								First, the old guard of SaaS began to sprinkle AI onto their
								broken models. &quot;AI-powered&quot; features and
								&quot;smarter&quot; suggestions were bolted onto the same
								underlying tools.
							</p>
							<p className="text-lg text-muted-foreground">
								The fundamental paradigm never changed. Your team was still
								forced to manage a fragmented stack of applications, now with a
								few new bells and whistles.
							</p>
							<p className="text-lg font-semibold text-foreground border-l-4 border-accent pl-4 mt-6">
								It was a smarter interface on the same rigid process.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// Section 3: The Burden of the Blank Canvas
function BlankCanvasSection() {
	return (
		<section className="scroll-mt-24">
			<div>
				<div className="grid gap-8 lg:grid-cols-[1fr_300px]">
					<div>
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-6">
							The Burden of the Blank Canvas.
						</h2>
						<div className="space-y-4">
							<p className="text-lg text-muted-foreground">
								Now, the full storm has arrived: the generative AI chatbot.
								Powerful, conversational interfaces like ChatGPT and Claude that
								promise limitless potential.
							</p>
							<p className="text-lg text-muted-foreground">
								But this promise comes with a hidden cost. Their value is not
								inherent in the tool; it is entirely dependent on the skill of
								the user. The quality of the output is a direct reflection of
								the quality of the input.
							</p>
							<p className="text-lg text-muted-foreground">
								Your team&apos;s ability to extract value is now capped by their
								ability to write the perfect prompt. The human is still the
								strategic bottleneck, now burdened with the new, specialized
								task of &quot;prompt engineer.&quot;
							</p>
							<p className="mt-8 border-l-4 border-accent pl-4 text-xl font-bold text-foreground">
								It is a tool of infinite potential, but a tool nonetheless.
							</p>
						</div>
					</div>
					<div className="relative">
						{/* AI Logos */}
						<div className="flex items-center justify-center p-4">
							{/* AGENT COMMENT: SEO Optimization - Image Optimization
								Converting img to Next.js Image with alt text
								Date: 2025-08-28
								Agent: Claude
							*/}
							<Image
								src="/mission/ai-logos.svg"
								alt="Logos of various AI technologies including ChatGPT and Claude representing the current state of AI tools"
								width={280}
								height={280}
								className="w-full h-auto max-w-[280px] dark:hidden"
							/>
							<Image
								src="/mission/ai-logos-dark.svg"
								alt="Logos of various AI technologies including ChatGPT and Claude representing the current state of AI tools"
								width={280}
								height={280}
								className="w-full h-auto max-w-[280px] hidden dark:block"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// Section 4: The Principle
function PrincipleSection() {
	return (
		<section className="scroll-mt-24 pt-12">
			<div>
				<div className="space-y-24">
					{/* Main Content */}
					<div className="text-center">
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-6">
							We Don&apos;t Sell Tools. We Deliver Outcomes.
						</h2>
						<p className="text-xl text-muted-foreground">
							The world doesn&apos;t need another application to manage or
							another prompt to write. It needs the job to be done.
						</p>
					</div>

					{/* Comparison Cards */}
					<div className="grid gap-6 md:grid-cols-3">
						<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
							<p className="text-sm text-muted-foreground mb-3">
								Instead of...
							</p>
							<p className="mb-4 text-base line-through opacity-50">
								&quot;A smarter email assistant&quot;
							</p>
							<p className="text-lg font-bold text-accent">
								We deliver a booked sales meeting.
							</p>
						</div>
						<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
							<p className="text-sm text-muted-foreground mb-3">
								Instead of...
							</p>
							<p className="mb-4 text-base line-through opacity-50">
								&quot;A faster content writer&quot;
							</p>
							<p className="text-lg font-bold text-accent">
								We deliver a published, multi-platform campaign.
							</p>
						</div>
						<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
							<p className="text-sm text-muted-foreground mb-3">
								Instead of...
							</p>
							<p className="mb-4 text-base line-through opacity-50">
								&quot;A better research tool&quot;
							</p>
							<p className="text-lg font-bold text-accent">
								We deliver the finished, actionable intelligence that wins the
								deal.
							</p>
						</div>
					</div>

					{/* Digital Workforces Card */}
					<div className="relative p-8 text-center">
						<h3 className="mb-4 text-2xl font-bold text-foreground">
							We Build Digital Workforces.
						</h3>
						<p className="mx-auto max-w-3xl text-lg text-muted-foreground">
							A complete, self-managing digital team. It is composed of
							specialized AI agents, researchers, strategists, and executioners,
							that work together as a single, cohesive unit to own a business
							outcome from end to end.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

// Section 5: The Promised Land
function PromisedLandSection() {
	return (
		<section className="scroll-mt-24">
			<div>
				<div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-gradient-to-br from-accent/5 via-card/80 to-accent/5 p-12 backdrop-blur-lg shadow-[0_0_50px_rgba(var(--accent),0.1)]">
					<div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
					<div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

					<div className="relative z-10">
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-8">
							The Promised Land: Elastic Operations.
						</h2>

						{/* Introductory Paragraph */}
						<div>
							<p className="text-lg text-muted-foreground">
								The enemy of your ambition has always been the fixed cost of
								capacity. It is the iron law of the old world that dictates you
								must buy your capacity—whether human or software—in rigid,
								expensive blocks. This is the prison of rigid operations. We
								deliver elastic operations as the escape.
							</p>
						</div>

						{/* Hub & Spoke Diagram - Server Component */}
						<HubSpokeGraphic />

						{/* Concluding Statement */}
						<div className="text-center">
							<div className="rounded-lg border border-accent/30 bg-accent/5 p-8">
								<p className="text-xl font-regular text-foreground mb-2">
									It&apos;s a future where you are no longer paying for
									capacity.
								</p>
								<p className="text-xl font-semibold text-accent">
									You are investing directly in outcomes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// CTA Section Component
function CTASection() {
	return (
		<section className="pb-24 px-4">
			<div className="max-w-4xl mx-auto">
				<Card className="p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
					<div className="inline-block mb-4">
						<span className="bg-accent/10 text-foreground font-semibold px-4 py-2 rounded-full text-sm border border-accent/30">
							Ready to Build the Future?
						</span>
					</div>

					<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-4">
						Stop Managing Tools.
						<br />
						<span className="text-accent">Start Commanding Outcomes.</span>
					</h2>

					<p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
						Join the revolution of elastic operations. Experience how digital
						workforces transform your business or be part of building this
						future.
					</p>

					{/* AGENT COMMENT: SEO Optimization - Touch Targets
						Ensuring buttons meet 48x48px minimum for mobile
						Date: 2025-08-28
						Agent: Claude
					*/}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://cal.com/george-westbrook-novosapien/30min"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Book a demo meeting with Novosapien"
						>
							<Button className="min-h-[48px] min-w-[48px] px-6 py-3 bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
								Book a Demo
							</Button>
						</a>
						<Link
							href="/careers"
							aria-label="View career opportunities at Novosapien"
						>
							<Button
								variant="outline"
								className="min-h-[48px] min-w-[48px] px-6 py-3 border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-200"
							>
								Join Our Team
							</Button>
						</Link>
					</div>
				</Card>
			</div>
		</section>
	)
}
