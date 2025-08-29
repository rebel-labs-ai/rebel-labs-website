import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import {
	Search,
	Building,
	Gift,
	Calendar,
	Settings,
	LineChart,
	Phone,
	Mail,
	Database,
	Brain,
	Zap,
	FileText,
	Globe,
	ArrowRight,
	Users,
	Megaphone,
} from "lucide-react"
import { AgentRosterClient, FailureCardsClient } from "./lead-page-client"
import { MethodSection } from "./method-section"

/* AGENT COMMENT: SEO Optimization - Metadata Implementation
   Added comprehensive metadata for search engines and social sharing
   SEO Reason: Improves click-through rates and social sharing appearance
   Agent: SEO Optimization Assistant
   Date: 2025-08-28
*/
export const metadata: Metadata = {
	title: "Inbound Sales Workforce - AI Lead Conversion | NovoSapien",
	description:
		"Never lose an inbound lead again. Deploy an autonomous AI workforce that converts raw leads into qualified meetings 24/7. 85% faster response, 3.5x conversion.",
	keywords:
		"AI sales automation, lead conversion, inbound sales, sales workforce, lead qualification, automated follow-up, sales AI agents",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://novosapien.ai/workforces/inbound-sales",
		siteName: "NovoSapien",
		title: "Inbound Sales Workforce - Never Lose a Lead Again",
		description:
			"Transform your lead conversion with autonomous AI agents. 85% faster response time, 3.5x conversion rate, 24/7 operation.",
		images: [
			{
				url: "/og-inbound-sales.jpg",
				width: 1200,
				height: 630,
				alt: "NovoSapien Inbound Sales Workforce Dashboard",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Inbound Sales Workforce - AI Lead Conversion",
		description:
			"Deploy an autonomous AI workforce that converts raw leads into qualified meetings 24/7.",
		images: ["/og-inbound-sales.jpg"],
	},
	alternates: {
		canonical: "https://novosapien.ai/workforces/inbound-sales",
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

// Agent data moved to server component
const agents = {
	research: [
		{
			icon: (
				<Search className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Individual Profile Agent",
			role: "Building Lead Blueprints",
			coreFunction:
				"Builds a deep, actionable blueprint of the individual lead's professional history, motivations, and behavioral patterns.",
			introduction:
				"I specialize in gathering and organizing behavioral insights, preferences, and professional data to create a detailed, personalized profile for each lead.",
			responsibilities: [
				"Studies the lead's professional profile, job title, and career history.",
				"Identifies key behavioral patterns, decision-making styles, and personal motivations.",
				"Builds a complete, actionable blueprint for personalized engagement.",
			],
			strategicImportance:
				"By providing deep insights into each lead, I enable highly personalized engagement strategies that resonate with individuals on a personal level.",
			collaboration:
				"I work closely with the Company Profile Agent to create a holistic view of each lead, which the Strategy Agents then use to craft tailored approaches.",
		},
		{
			icon: (
				<Building className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Company Profile Agent",
			role: "Mapping Business Landscapes",
			coreFunction:
				"Maps the target company's structure, priorities, and pain points to ensure perfect strategic alignment.",
			introduction:
				"I focus on collecting critical information about target companies to ensure our outreach aligns with organizational priorities and pain points.",
			responsibilities: [
				"Researches company structures, hierarchies, and industries.",
				"Analyzes organizational challenges, growth opportunities, and market positioning.",
				"Identifies the key stakeholders and decision-makers within the company.",
			],
			strategicImportance:
				"My insights allow our strategies to be tailored to each company's unique situation, increasing the relevance and effectiveness of our outreach.",
			collaboration:
				"I provide crucial business context that complements the Individual Profile Agent's data, helping create more targeted and effective engagement plans.",
		},
		{
			icon: (
				<Gift className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Personalized Offering Agent",
			role: "Crafting Tailored Solutions",
			coreFunction:
				"Crafts a hyper-relevant value proposition by mapping your solution to the lead's specific needs.",
			introduction:
				"I craft value-driven, highly relevant offers by blending insights from individual and company profiles.",
			responsibilities: [
				"Analyzes data to identify which products, services, and features best fit the lead's needs.",
				"Develops customized value propositions and pain-point narratives.",
				"Generates offers that align perfectly with both individual and business challenges.",
			],
			strategicImportance:
				"By creating highly personalized offerings, I significantly increase the chances of engagement and conversion, making each interaction more valuable.",
			collaboration:
				"I synthesize the data from both Profile Agents to create offerings that the Outreach Agents can present in the most effective manner.",
		},
	],
	strategy: [
		{
			icon: (
				<Calendar className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Initial Strategy Agent",
			role: "Crafting Engagement Blueprints",
			coreFunction:
				"Designs the optimal, multi-step engagement plan for each unique lead.",
			introduction:
				"I develop the first touchpoint plan, tailoring the initial outreach strategy based on lead profiles and business needs.",
			responsibilities: [
				"Determines the optimal outreach method based on the lead's profile.",
				"Customizes the tone and style to fit the lead's preferences.",
				"Develops a step-by-step plan that sets clear goals and timelines.",
			],
			strategicImportance:
				"My role ensures that every lead interaction starts with a well-thought-out plan, increasing the chances of successful engagement from the very beginning.",
			collaboration:
				"I work closely with the Research Agents to translate their insights into actionable strategies, which are then executed by the Outreach Agents.",
		},
		{
			icon: (
				<Settings className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Strategy Optimization Agent",
			role: "Refining Engagement Approaches",
			coreFunction:
				"Continuously analyzes interaction data to refine and improve the sales strategy in real-time.",
			introduction:
				"I continuously improve strategies in real-time based on data from previous outreach interactions.",
			responsibilities: [
				"Monitors key metrics, like open rates, click rates, and engagement levels.",
				"Identifies underperforming elements and adjusts for higher conversion rates.",
				"Refines timing, tone, and content for follow-ups to ensure relevance.",
			],
			strategicImportance:
				"By constantly refining our approach, I ensure that our strategies remain effective and adapt to changing circumstances, maximizing our conversion rates.",
			collaboration:
				"I work hand-in-hand with the Interactions Analysis Agent, using their insights to make data-driven improvements to our strategies.",
		},
		{
			icon: (
				<LineChart className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Interactions Analysis Agent",
			role: "Decoding Engagement",
			coreFunction:
				"Pinpoints patterns of success by analyzing sentiment and engagement in every reply.",
			introduction:
				"I track and analyze every interaction to pinpoint engagement patterns and illuminate pathways for success.",
			responsibilities: [
				"Analyzes lead responses, sentiment, and engagement data.",
				"Discovers patterns in successful outreach campaigns.",
				"Provides actionable insights that inform future interactions.",
			],
			strategicImportance:
				"My analysis ensures that we learn from every interaction, continuously improving our approach and increasing our overall effectiveness.",
			collaboration:
				"I provide crucial feedback to the Strategy Optimization Agent and inform the Initial Strategy Agent to improve future plans.",
		},
	],
	outreach: [
		{
			icon: (
				<Phone className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Phone Call Agent",
			role: "Orchestrating Targeted Conversations",
			coreFunction:
				"Executes intelligent, context-aware phone outreach to foster connections and drive action.",
			introduction:
				"I automate and personalize follow-up calls to engage leads directly, fostering connections and next steps.",
			responsibilities: [
				"Schedules and conducts phone calls based on the lead's profile.",
				"Customizes scripts to address the lead's pain points and motivations.",
				"Tracks call outcomes and refines the approach over time.",
			],
			strategicImportance:
				"By automating and personalizing phone interactions, I significantly increase our capacity for meaningful engagements while maintaining a human touch.",
			collaboration:
				"I work closely with the Email Agent to coordinate multi-channel outreach, and rely on the Strategy Agents for guidance on timing and content.",
		},
		{
			icon: (
				<Mail className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Email Agent",
			role: "Delivering Personalized Messaging",
			coreFunction:
				"Delivers a sequence of personalized, context-aware emails designed to resonate and convert.",
			introduction:
				"I strategically craft and execute email campaigns designed to resonate with leads.",
			responsibilities: [
				"Develops targeted email content based on lead and company profiles.",
				"Optimizes timing to maximize open and click-through rates.",
				"Analyzes results to continuously improve future email outreach.",
			],
			strategicImportance:
				"My role ensures that our email communications are always relevant, timely, and effective, significantly boosting our engagement and conversion rates.",
			collaboration:
				"I coordinate closely with the Phone Call Agent for integrated outreach, and rely on insights from the Strategy and Research Agents to refine my approach.",
		},
	],
}

export default function LeadWorkforcePage() {
	// Schema markup for Service
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Inbound Sales Workforce",
		provider: {
			"@type": "Organization",
			name: "NovoSapien",
			url: "https://novosapien.ai",
		},
		description:
			"Autonomous AI workforce that converts inbound leads into qualified sales meetings 24/7 with 85% faster response time and 3.5x conversion rate.",
		serviceType: "AI Sales Automation",
		areaServed: {
			"@type": "Country",
			name: "Global",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "AI Sales Workforce Features",
			itemListElement: [
				{
					"@type": "Service",
					name: "24/7 Lead Response",
					description: "Instant response to all inbound leads within 5 minutes",
				},
				{
					"@type": "Service",
					name: "Multi-Channel Outreach",
					description: "Coordinated email and phone follow-up sequences",
				},
				{
					"@type": "Service",
					name: "Intelligent Lead Qualification",
					description: "AI-powered lead scoring and qualification",
				},
			],
		},
	}

	// Breadcrumb schema
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://novosapien.ai",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "AI Workforces",
				item: "https://novosapien.ai/workforces",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Inbound Sales",
				item: "https://novosapien.ai/workforces/inbound-sales",
			},
		],
	}

	// FAQ Schema for failure points
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Why do companies fail at lead response speed?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "78% of customers buy from the company that responds first, and leads are 10x less likely to convert after the first hour. Manual processes simply cannot compete with this speed requirement.",
				},
			},
			{
				"@type": "Question",
				name: "How many follow-ups does the average sale require?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "The average sale requires 8-12 touchpoints, yet 44% of salespeople give up after one 'no'. This gap is where the majority of future revenue is lost.",
				},
			},
			{
				"@type": "Question",
				name: "What is the cost of scaling sales with headcount?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "The average SDR costs $75k-$90k per year, takes 3-6 months to become productive, and annual churn rates often exceed 30%, creating constant instability and increasing costs.",
				},
			},
		],
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Hero Section with Animated Dots Background */}
			<div className="relative min-h-screen">
				{/* Animated Dot Pattern Background for entire hero area */}
				<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full">
					<AnimatedDots />
				</div>

				{/* Gradient overlay from bottom - matches problem section background */}
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none"></div>

				{/* Section 1: Part 1.A - The Promise (Hero) */}
				<section className="pt-48 sm:pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-12 sm:mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-8 md:p-12">
							<div className="text-center mb-6 sm:mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									Inbound Sales Workforce
								</span>
							</div>
							<div className="text-center">
								{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
								    Keep this as the only H1 on the page
								    SEO Reason: Single H1 provides clear page topic for search engines
								    Visual Impact: None - all styling preserved
								    Agent: SEO Optimization Assistant
								    Date: 2025-08-28
								*/}
								<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
									Never Lose an Inbound Lead Again.
								</h1>
							</div>
							<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed text-center max-w-3xl mx-auto px-2 sm:px-0">
								Deploy an autonomous workforce that converts your raw leads into
								qualified, sales-ready meetings, 24/7.
							</p>
							<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center items-center">
								<a
									href="https://demo.novosapien.ai"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
										See It In Action
									</Button>
								</a>
								<a
									href="https://cal.com/george-westbrook-novosapien/inbound-sales-workforce"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
										Talk to Us
									</Button>
								</a>
							</div>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 1: Part 1.B - The Explanation */}
			<section className="py-16 sm:py-32 px-4 bg-accent/40">
				<div className="max-w-8xl mx-auto px-4">
					{/* Section Header */}
					<div className="text-left sm:text-center mb-12">
						{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
						    Original: <h2> with H1-level styling
						    Changed to: <h2> keeping all classes for visual preservation
						    SEO Reason: Proper H1→H2 hierarchy
						    Visual Impact: None - all classes preserved
						    Agent: SEO Optimization Assistant
						    Date: 2025-08-28
						*/}
						<h2
							className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6"
							style={{
								textShadow:
									"0 0 20px rgba(168, 205, 255, 0.4), 0 0 40px rgba(168, 205, 255, 0.3)",
							}}
						>
							A Self-Managing Team for Your Pipeline.
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-4xl sm:mx-auto leading-relaxed">
							This is not a chatbot or a simple automation tool. It is a
							complete, multi-agent system that autonomously manages the entire
							lead lifecycle—from deep research and strategic outreach to
							intelligent nurturing and appointment setting—delivering a
							flawless handoff to your human sales team.
						</p>
					</div>

					{/* Visual Process Diagram */}
					<div className="max-w-7xl mx-auto">
						{/* Mobile Layout - Vertical */}
						<div className="flex flex-col items-center gap-6 sm:hidden">
							{/* Input Sources (Top) */}
							<div className="w-full max-w-sm">
								<div className="text-center mb-4">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white uppercase tracking-wider">
										Inputs
									</h3>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Globe className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Website Form</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Megaphone className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Ads</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Database className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">CRM</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Zap className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">API</span>
									</div>
								</div>
							</div>

							{/* Arrow Down */}
							<div className="flex justify-center">
								<ArrowRight className="w-8 h-8 text-muted-foreground dark:text-white rotate-90" />
							</div>

							{/* Central Workforce (Middle) */}
							<div className="w-full max-w-sm">
								<div className="bg-accent/10 border-2 border-accent rounded-xl p-6 shadow-xl">
									<h3 className="text-lg font-bold text-center mb-4 text-foreground">
										Inbound Conversion Workforce
									</h3>
									<div className="grid grid-cols-3 gap-4">
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Search className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Research
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<LineChart className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Strategy
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Mail className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Outreach
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Arrow Down */}
							<div className="flex justify-center">
								<ArrowRight className="w-8 h-8 text-muted-foreground dark:text-white rotate-90" />
							</div>

							{/* Output (Bottom) */}
							<div className="w-full max-w-sm">
								<div className="text-center mb-4">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white uppercase tracking-wider">
										Output
									</h3>
								</div>
								<div className="bg-green-500/10 border-2 border-green-500 rounded-lg px-6 py-4">
									<div className="flex items-center gap-3">
										<Calendar className="w-6 h-6 text-green-500" />
										<div>
											<span className="text-sm font-bold text-foreground block">
												Qualified Meeting
											</span>
											<span className="text-xs text-muted-foreground">
												Booked & Briefed
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Desktop Layout - Horizontal */}
						<div className="hidden sm:flex items-center justify-between max-w-6xl mx-auto">
							{/* Input Sources (Left) */}
							<div className="flex flex-col gap-4">
								<div className="text-center">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white mb-4 uppercase tracking-wider">
										Inputs
									</h3>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Globe className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Website Form</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Megaphone className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Ads</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Database className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">CRM</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Zap className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">API</span>
									</div>
								</div>
							</div>

							{/* Arrow */}
							<div className="flex items-center">
								<ArrowRight className="mt-3 w-8 h-8 text-muted-foreground dark:text-white" />
							</div>

							{/* Central Workforce (Center) */}
							<div className="flex-1 max-w-md mx-8 mt-4">
								<div className="bg-accent/10 border-2 border-accent rounded-xl p-6 shadow-xl relative">
									<h3 className="text-lg font-bold text-center mb-4 text-foreground">
										Inbound Conversion Workforce
									</h3>
									<div className="grid grid-cols-3 gap-4">
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Search className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Research
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<LineChart className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Strategy
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Mail className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Outreach
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Arrow */}
							<div className="flex items-center">
								<ArrowRight className="w-8 h-8 mt-3 text-muted-foreground dark:text-white" />
							</div>

							{/* Output (Right) */}
							<div className="flex flex-col gap-4">
								<div className="text-center">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white mb-4 uppercase tracking-wider">
										Output
									</h3>
								</div>
								<div className="bg-green-500/10 border-2 border-green-500 rounded-lg px-6 py-4">
									<div className="flex items-center gap-3">
										<Calendar className="w-6 h-6 text-green-500" />
										<div>
											<span className="text-sm font-bold text-foreground block">
												Qualified Meeting
											</span>
											<span className="text-xs text-muted-foreground">
												Booked & Briefed
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Interactive Roster (Your Digital Team) */}
			<section className="py-16 sm:py-32 px-2 sm:px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-5xl mx-auto px-2 sm:px-4">
					<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-4 sm:p-8">
						<div className="text-left sm:text-center mb-12">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
								Meet Your Team
							</span>
							{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
							    Changed from H2 with H1 prominence to proper H2
							    Visual Impact: None - all classes preserved
							    Agent: SEO Optimization Assistant
							    Date: 2025-08-28
							*/}
							<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mt-4">
								Meet Your Autonomous Sales Team
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto mt-4 leading-relaxed">
								Your workforce is not a monolith. It is a coordinated team of
								specialized AI agents, each a master of its domain, working in
								concert to deliver your outcome.
							</p>
						</div>

						{/* Client Component for Interactive Agent Roster */}
						<AgentRosterClient agents={agents} />

						{/* Collaborative Work Section */}
						<div className="mt-16">
							<div className="text-left sm:text-center mb-8">
								<h3 className="text-foreground text-xl sm:text-2xl font-bold mb-4">
									How They Work Together
								</h3>
								<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto px-0 sm:px-0">
									Your roster operates as a unified team, with each agent
									playing a critical role in the lead conversion process. They
									communicate in real-time, share insights, and coordinate
									actions to maximize conversion rates.
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								<div className="text-center">
									<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8 text-green-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h4 className="text-foreground text-lg font-semibold mb-2">
										Instant Response
									</h4>
									<p className="text-muted-foreground text-sm">
										Engage leads within 5 minutes of their first interaction,
										24/7/365
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8 text-green-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
											/>
										</svg>
									</div>
									<h4 className="text-foreground text-lg font-semibold mb-2">
										Smart Prioritization
									</h4>
									<p className="text-muted-foreground text-sm">
										Focus sales efforts on high-intent leads while nurturing
										others automatically
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8 text-green-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
											/>
										</svg>
									</div>
									<h4 className="text-foreground text-lg font-semibold mb-2">
										Continuous Improvement
									</h4>
									<p className="text-muted-foreground text-sm">
										Learn from every interaction to optimize conversion
										strategies over time
									</p>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Section 2: The Diagnosis - The Broken Funnel */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<div className="text-left sm:text-center mb-16">
						{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
						    Changed from prominent H2 to maintain proper hierarchy
						    Visual Impact: None - all classes preserved
						    Agent: SEO Optimization Assistant
						    Date: 2025-08-28
						*/}
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
							The Four Systemic Failures of Your Inbound Funnel.
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-4xl sm:mx-auto leading-relaxed">
							The traditional model of human-led follow-up is not just
							inefficient; it is a complete architectural failure. It breaks
							down at every critical stage, leaking revenue, wasting investment,
							and destroying your ability to forecast.
						</p>
					</div>

					{/* Funnel Diagram with Annotations */}
					<div className="max-w-7xl mx-auto">
						{/* The component now handles both mobile and desktop layouts */}
						<div className="relative">
							<FailureCardsClient />

							{/* Funnel Image - Desktop only, positioned absolutely over the center column */}
							<div className="hidden lg:block absolute inset-0 pointer-events-none">
								<div className="grid grid-cols-3 gap-6 h-full">
									{/* Empty left column */}
									<div></div>

									{/* Center column with funnel */}
									<div className="flex justify-center items-center">
										<div className="relative max-w-xs w-full">
											{/* Light mode funnel */}
											<Image
												src="/workforces/leads/funnel.svg"
												alt="Inbound sales funnel diagram showing lead flow from top to qualified meetings"
												width={300}
												height={400}
												className="w-full h-auto dark:hidden"
												priority
											/>
											{/* Dark mode funnel */}
											<Image
												src="/workforces/leads/funnel-dark.svg"
												alt="Inbound sales funnel diagram showing lead flow from top to qualified meetings"
												width={300}
												height={400}
												className="w-full h-auto hidden dark:block"
												priority
											/>
										</div>
									</div>

									{/* Empty right column */}
									<div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: The Method - 4-Step Protocol with Sticky Scroll */}
			<div className="pt-16 sm:pt-32">
				<MethodSection />
			</div>

			{/* Section 5: Results & ROI */}
			<section className="px-4 pt-16 sm:pt-0">
				<div className="max-w-6xl mx-auto">
					{/* Section Header - Proven Results First */}
					<div className="text-left sm:text-center mb-8 sm:mb-12">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block mb-3">
							Proven Results
						</span>
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight">
							Redefine Your Team&apos;s ROI
						</h2>
					</div>

					{/* Metrics Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
								85%
							</div>
							<p className="text-foreground text-xs sm:text-sm">
								Faster Lead Response Time
							</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
								3.5x
							</div>
							<p className="text-foreground text-xs sm:text-sm">
								Decrease in Human Wasted Time
							</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
								99.9%
							</div>
							<p className="text-foreground text-xs sm:text-sm">
								Leads Contacted
							</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
								24/7
							</div>
							<p className="text-foreground text-xs sm:text-sm">
								Always-On Operations
							</p>
						</Card>
					</div>

					{/* Subtitle */}
					<div className="text-left sm:text-center mb-16">
						<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
							The old model measures your team on effort and activity. The new
							model measures them on results. By systemically eliminating the
							manual process, we transform your sales operation from a high-cost
							activity center into a high-leverage growth engine.
						</p>
					</div>

					{/* Before/After Comparison - Desktop Only */}
					<div className="hidden sm:flex justify-center">
						{/* Light mode image */}
						<Image
							src="/workforces/leads/before-after.svg"
							alt="Before and after comparison showing transformation from manual SDR process to AI-powered workforce with improved metrics"
							width={1400}
							height={700}
							className="w-full max-w-7xl h-auto dark:hidden"
						/>
						{/* Dark mode image */}
						<Image
							src="/workforces/leads/before-after-dark.svg"
							alt="Before and after comparison showing transformation from manual SDR process to AI-powered workforce with improved metrics"
							width={1400}
							height={700}
							className="w-full max-w-7xl h-auto hidden dark:block"
						/>
					</div>
				</div>
			</section>

			{/* Related Solutions Section - Internal Linking */}
			<section className="py-16 sm:py-24 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
							Explore Our Other AI Workforces
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
							Discover how our suite of specialized AI workforces can transform
							every aspect of your business operations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
						<Link href="/workforces/content-creation" className="block group">
							<Card className="p-6 border border-accent/30 hover:border-accent hover:shadow-lg transition-all group-hover:scale-[1.02] h-full">
								<h3 className="text-xl font-semibold mb-2 text-foreground">
									Content Workforce
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									Generate high-quality blog posts, social media content, and
									marketing copy at scale with AI-powered content creation.
								</p>
								<span className="text-accent font-semibold text-sm group-hover:text-accent/80">
									Learn more →
								</span>
							</Card>
						</Link>

						<Link href="/workforces/lab" className="block group">
							<Card className="p-6 border border-accent/30 hover:border-accent hover:shadow-lg transition-all group-hover:scale-[1.02] h-full">
								<h3 className="text-xl font-semibold mb-2 text-foreground">
									Workforce Lab
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									Experiment with cutting-edge AI capabilities and preview
									upcoming workforce features in our innovation lab.
								</p>
								<span className="text-accent font-semibold text-sm group-hover:text-accent/80">
									Explore lab →
								</span>
							</Card>
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 sm:py-24 px-4 bg-background">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{/* FAQ Item 1 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									How quickly can the Inbound Sales Workforce respond to new
									leads?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									The workforce responds to new leads within 5 minutes of their
									submission, 24/7/365. This instant response dramatically
									increases conversion rates, as 78% of customers buy from the
									company that responds first. Unlike human teams, the AI
									workforce never sleeps, takes breaks, or misses a lead.
								</p>
							</div>
						</details>

						{/* FAQ Item 2 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									What makes this different from chatbots or basic automation?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									Unlike simple chatbots that follow scripts, this is a complete
									multi-agent system with specialized AI workers. Each agent has
									a specific role - from deep lead research and strategic
									planning to multi-channel outreach. They collaborate in
									real-time, learn from every interaction, and continuously
									optimize their approach. The system handles the entire lead
									lifecycle autonomously, not just initial responses.
								</p>
							</div>
						</details>

						{/* FAQ Item 3 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									How many follow-ups will the workforce perform?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									The workforce executes 8-12 touchpoints on average, matching
									what's required for 80% of successful sales. Unlike human
									teams where 44% give up after one "no," the AI workforce
									persistently nurtures leads with personalized, timely
									follow-ups across email and phone channels until they're
									either qualified for a meeting or definitively not a fit.
								</p>
							</div>
						</details>

						{/* FAQ Item 4 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									What kind of lead intelligence does the workforce gather?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									The workforce builds a comprehensive blueprint for each lead,
									including professional history, behavioral patterns, company
									structure, pain points, and decision-making styles. This deep
									intelligence enables hyper-personalized outreach that
									resonates with each prospect's specific situation,
									dramatically increasing engagement and conversion rates.
								</p>
							</div>
						</details>

						{/* FAQ Item 5 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									How does the handoff to our human sales team work?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									Once a lead is qualified, the workforce automatically books a
									meeting in your team's calendar and delivers a complete
									executive brief. This includes the lead's background, pain
									points, engagement history, and recommended talking points.
									Your sales team walks into every meeting fully prepared, with
									all the context needed for a productive conversation.
								</p>
							</div>
						</details>

						{/* FAQ Item 6 */}
						<details className="group bg-card-background border border-accent/20 rounded-lg">
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									What ROI can we expect from the Inbound Sales Workforce?
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6 pt-2">
								<p className="text-muted-foreground leading-relaxed">
									Our clients typically see 85% faster lead response times, 3.5x
									increase in conversion rates, and 99.9% lead coverage. The
									workforce eliminates the need for 3-5 SDRs while delivering
									better results. Most companies see positive ROI within 30
									days, with the system paying for itself through increased
									conversions and reduced labor costs.
								</p>
							</div>
						</details>
					</div>
				</div>

				{/* Enhanced FAQ Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: "How quickly can the Inbound Sales Workforce respond to new leads?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "The workforce responds to new leads within 5 minutes of their submission, 24/7/365. This instant response dramatically increases conversion rates, as 78% of customers buy from the company that responds first.",
									},
								},
								{
									"@type": "Question",
									name: "What makes this different from chatbots or basic automation?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Unlike simple chatbots that follow scripts, this is a complete multi-agent system with specialized AI workers. Each agent has a specific role - from deep lead research and strategic planning to multi-channel outreach. They collaborate in real-time, learn from every interaction, and continuously optimize their approach.",
									},
								},
								{
									"@type": "Question",
									name: "How many follow-ups will the workforce perform?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "The workforce executes 8-12 touchpoints on average, matching what's required for 80% of successful sales. The AI workforce persistently nurtures leads with personalized, timely follow-ups across email and phone channels.",
									},
								},
								{
									"@type": "Question",
									name: "What kind of lead intelligence does the workforce gather?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "The workforce builds a comprehensive blueprint for each lead, including professional history, behavioral patterns, company structure, pain points, and decision-making styles. This deep intelligence enables hyper-personalized outreach.",
									},
								},
								{
									"@type": "Question",
									name: "How does the handoff to our human sales team work?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Once a lead is qualified, the workforce automatically books a meeting in your team's calendar and delivers a complete executive brief including the lead's background, pain points, engagement history, and recommended talking points.",
									},
								},
								{
									"@type": "Question",
									name: "What ROI can we expect from the Inbound Sales Workforce?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Clients typically see 85% faster lead response times, 3.5x increase in conversion rates, and 99.9% lead coverage. The workforce eliminates the need for 3-5 SDRs while delivering better results, with most companies seeing positive ROI within 30 days.",
									},
								},
							],
						}),
					}}
				/>
			</section>

			{/* Section 7: Final CTA */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-6 sm:p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-4 sm:mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-accent/30">
								Ready to Transform Your Lead Process?
							</span>
						</div>

						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							Stop Losing Leads.
							<br />
							<span className="text-accent">
								Start Converting Automatically.
							</span>
						</h2>

						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
							Join companies that are converting 3.5x more leads with an
							autonomous Digital Workforce. See the impact in your pipeline
							within days.
						</p>

						<div className="flex justify-center gap-3 sm:gap-4">
							<a
								href="https://cal.com/george-westbrook-novosapien/inbound-sales-workforce"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
									Deploy This Workforce
								</Button>
							</a>
							<a
								href="https://demo.novosapien.ai"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
									See It In Action
								</Button>
							</a>
						</div>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
