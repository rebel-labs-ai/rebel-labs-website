import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CampaignTracker } from "./campaign-tracker"

export interface CampaignConfig {
	id: string
	title: string
	description: string
	heroTitle: string
	heroSubtitle: string
	ctaText: string
	ctaLink: string
	variant?: "A" | "B"
	features?: string[]
	testimonial?: {
		quote: string
		author: string
		role: string
	}
	allowIndexing?: boolean // Default false - set true only if you want Google to index this specific campaign
}

const campaigns: Record<string, CampaignConfig> = {
	"test-campaign": {
		id: "test-campaign",
		title: "Test Campaign - Novosapien",
		description: "This is a test landing page for tracking verification",
		heroTitle: "Transform Your Business with AI Workforces",
		heroSubtitle: "Stop managing tools. Start scaling revenue.",
		ctaText: "Get Started Today",
		ctaLink: "/contact",
		variant: "A",
		allowIndexing: false, // Explicitly set to false for test campaign
		features: [
			"Automated lead generation",
			"24/7 customer engagement",
			"Intelligent content creation",
			"Revenue optimization",
		],
		testimonial: {
			quote: "Novosapien helped us 10x our lead generation in just 3 months.",
			author: "Test User",
			role: "CEO, Test Company",
		},
	},
	"summer-2025": {
		id: "summer-2025",
		title: "Summer 2025 Special - AI Workforces",
		description: "Limited time offer on our AI workforce solutions",
		heroTitle: "Summer Special: 30% Off AI Workforces",
		heroSubtitle:
			"Transform your business this summer with intelligent automation",
		ctaText: "Claim Your Discount",
		ctaLink: "/contact?offer=summer2025",
		variant: "A",
		features: [
			"30% discount for 3 months",
			"Free onboarding support",
			"Priority implementation",
			"Success guarantee",
		],
	},
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ campaign: string }>
}): Promise<Metadata> {
	const { campaign: campaignId } = await params
	const campaign = campaigns[campaignId]

	if (!campaign) {
		return {
			title: "Campaign Not Found",
			description: "The requested campaign page could not be found.",
			robots: {
				index: false,
				follow: false,
			},
		}
	}

	// By default, prevent search engines from indexing campaign landing pages
	// Only allow indexing if explicitly set in campaign config
	const shouldIndex = campaign.allowIndexing === true

	return {
		title: campaign.title,
		description: campaign.description,
		robots: {
			index: shouldIndex,
			follow: shouldIndex,
			noarchive: !shouldIndex,
			nosnippet: !shouldIndex,
			noimageindex: !shouldIndex,
			googleBot: {
				index: shouldIndex,
				follow: shouldIndex,
			},
		},
		openGraph: {
			title: campaign.heroTitle,
			description: campaign.heroSubtitle,
			type: "website",
		},
	}
}

export default async function CampaignLandingPage({
	params,
	searchParams,
}: {
	params: Promise<{ campaign: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const { campaign: campaignId } = await params
	const resolvedSearchParams = await searchParams
	const campaign = campaigns[campaignId]

	if (!campaign) {
		notFound()
	}

	const variant =
		(resolvedSearchParams.variant as string) || campaign.variant || "A"

	return (
		<>
			<CampaignTracker
				campaign={campaign}
				searchParams={resolvedSearchParams}
			/>

			<main className="min-h-screen bg-gradient-to-b from-background to-section-background">
				<section className="relative py-24 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center">
							<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
								{variant === "B" && campaign.id === "test-campaign"
									? "Revolutionize Your Operations with AI"
									: campaign.heroTitle}
							</h1>
							<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
								{campaign.heroSubtitle}
							</p>
							<div className="mt-10">
								<a
									href={campaign.ctaLink}
									className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
								>
									{campaign.ctaText}
								</a>
							</div>
						</div>

						{campaign.features && (
							<div className="mt-20">
								<h2 className="text-2xl font-bold text-center mb-10">
									What You&apos;ll Get
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
									{campaign.features.map((feature, index) => (
										<div
											key={index}
											className="flex items-start p-6 bg-card rounded-lg border border-border"
										>
											<svg
												className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span className="text-foreground">{feature}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{campaign.testimonial && (
							<div className="mt-20 max-w-4xl mx-auto">
								<div className="bg-card p-8 rounded-lg border border-border">
									<blockquote className="text-xl italic text-center">
										&ldquo;{campaign.testimonial.quote}&rdquo;
									</blockquote>
									<div className="mt-6 text-center">
										<p className="font-semibold">
											{campaign.testimonial.author}
										</p>
										<p className="text-sm text-muted-foreground">
											{campaign.testimonial.role}
										</p>
									</div>
								</div>
							</div>
						)}

						<div className="mt-20 text-center">
							<p className="text-sm text-muted-foreground mb-4">
								Ready to transform your business?
							</p>
							<a
								href={campaign.ctaLink}
								className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
							>
								{campaign.ctaText}
							</a>
						</div>
					</div>
				</section>

				<section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
					<div className="max-w-7xl mx-auto text-center">
						<p className="text-sm text-muted-foreground">
							Campaign ID: {campaign.id} | Variant: {variant}
						</p>
					</div>
				</section>
			</main>
		</>
	)
}

export function generateStaticParams() {
	return Object.keys(campaigns).map(campaign => ({
		campaign,
	}))
}
