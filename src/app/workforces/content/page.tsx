import { Metadata } from "next"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import { ContactModalButton } from "./ContactModalButton"
import { AgentTeamCarousel } from "@/components/agent-team-carousel"
import {
	Share2,
	Search,
	Layers,
	MessageSquare,
	FileText,
	Video,
	Mail,
	ChevronRight,
	Users,
} from "lucide-react"

export const metadata: Metadata = {
	title: "Content Creation Workforce",
	description:
		"Deploy AI-powered content creation workforces to automate content generation, optimization, and distribution. Scale your content marketing with intelligent automation.",
}

const protocolStages = [
	{
		id: "brief",
		number: "1",
		headline: "From Strategic Intent to Actionable Brief",
		description: `The process begins with your strategic command. Your team provides a simple, high-level brief—the core idea, the target audience, the desired outcome. The workforce's research agents then enrich this brief, adding market data and competitive intelligence to create a comprehensive, data-backed mission plan.`,
		textPosition: "left",
		mockupAlt: "Mission Planner UI showing brief enrichment process",
	},
	{
		id: "creation",
		number: "2",
		headline: "From First Draft to Perfected Asset",
		description: `A coordinated team of AI agents—a planner, writer, and critic—collaborates to produce the core asset. Your human strategists then act as creative directors, providing simple feedback. The workforce's iteration agents make precise revisions at machine speed, learning your preferences with every cycle.`,
		textPosition: "right",
		mockupAlt: "Iteration Studio UI showing draft refinement and feedback",
	},
	{
		id: "amplification",
		number: "3",
		headline: "From Single Asset to Multi-Platform Campaign",
		description: `This is where we create true leverage. A dedicated repurposing agent systematically "atomizes" the perfected core asset into a complete arsenal of derivative content, with specific tones and formats for each channel, turning one idea into a complete campaign.`,
		textPosition: "left",
		mockupAlt: "Amplification Dashboard showing content derivatives",
	},
	{
		id: "analysis",
		number: "4",
		headline: "From Performance Data to Smarter Strategy",
		description: `This is a closed-loop system. The workforce monitors engagement across all platforms to understand what resonates. This performance data is then used as fuel to make all future content ideas and strategic recommendations even more effective, creating a compounding advantage.`,
		textPosition: "right",
		mockupAlt:
			"Performance Insights dashboard with analytics and recommendations",
	},
]

function BriefMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground mb-2">
					Mission Planner
				</h3>
			</div>
			<div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
				<div className="space-y-3">
					<div className="text-sm text-muted-foreground mb-2">User Brief</div>
					<div className="p-4 bg-muted rounded-lg">
						<p className="text-sm text-foreground">
							Launch blog series on AI in healthcare
						</p>
						<p className="text-xs text-muted-foreground mt-2">
							Target: Healthcare executives
						</p>
						<p className="text-xs text-muted-foreground">
							Goal: Thought leadership
						</p>
					</div>
				</div>
				<div className="space-y-3">
					<div className="text-sm text-muted-foreground mb-2">
						AI-Enhanced Intel
					</div>
					<div className="space-y-2">
						<div className="p-3 bg-slate-100 dark:bg-primary/10 rounded-lg">
							<p className="text-xs font-semibold text-slate-700 dark:text-primary">
								Relevant Trends
							</p>
							<p className="text-xs text-muted-foreground mt-1">
								• AI diagnostics growth +47%
							</p>
							<p className="text-xs text-muted-foreground">
								• Regulatory shifts in 2024
							</p>
						</div>
						<div className="p-3 bg-slate-100 dark:bg-primary/10 rounded-lg">
							<p className="text-xs font-semibold text-slate-700 dark:text-primary">
								Competitor Angles
							</p>
							<p className="text-xs text-muted-foreground mt-1">
								• Focus on ROI metrics
							</p>
							<p className="text-xs text-muted-foreground">
								• Implementation barriers
							</p>
						</div>
						<div className="p-3 bg-slate-100 dark:bg-primary/10 rounded-lg">
							<p className="text-xs font-semibold text-slate-700 dark:text-primary">
								Target Keywords
							</p>
							<p className="text-xs text-muted-foreground mt-1">
								• &quot;healthcare AI ROI&quot;
							</p>
							<p className="text-xs text-muted-foreground">
								• &quot;medical AI compliance&quot;
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function CreationMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground mb-2">
					Iteration Studio
				</h3>
			</div>
			<div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
				<div className="space-y-3">
					<div className="text-sm text-muted-foreground mb-2">
						Version History
					</div>
					<div className="space-y-2">
						<div className="p-2 bg-slate-200 dark:bg-primary/20 rounded text-xs text-foreground">
							v3 - Current
						</div>
						<div className="p-2 bg-muted rounded text-xs text-muted-foreground">
							v2 - 2 min ago
						</div>
						<div className="p-2 bg-muted rounded text-xs text-muted-foreground">
							v1 - 5 min ago
						</div>
					</div>
				</div>
				<div className="space-y-3">
					<div className="text-sm text-muted-foreground mb-2">Draft</div>
					<div className="p-4 bg-muted rounded-lg h-full overflow-hidden">
						<p className="text-xs text-foreground font-semibold mb-2">
							The AI Revolution in Healthcare: Beyond the Hype
						</p>
						<p className="text-xs text-muted-foreground leading-relaxed">
							Healthcare executives face a critical inflection point. As AI
							diagnostics show 47% growth...
						</p>
					</div>
				</div>
				<div className="space-y-3">
					<div className="text-sm text-muted-foreground mb-2">
						Feedback Panel
					</div>
					<div className="p-3 bg-amber-50 dark:bg-yellow-500/10 rounded-lg">
						<p className="text-xs text-amber-700 dark:text-yellow-400 font-semibold">
							Human Feedback
						</p>
						<p className="text-xs text-muted-foreground mt-2">
							&quot;Make the intro more provocative&quot;
						</p>
					</div>
					<div className="p-3 bg-emerald-50 dark:bg-green-500/10 rounded-lg mt-2">
						<p className="text-xs text-emerald-700 dark:text-green-400 font-semibold">
							AI Response
						</p>
						<p className="text-xs text-muted-foreground mt-2">
							✓ Revised introduction with stronger hook
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

function AmplificationMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground mb-2">
					Amplification Dashboard
				</h3>
			</div>
			<div className="space-y-4">
				<div className="p-4 bg-slate-100 dark:bg-primary/20 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<span className="text-sm font-semibold text-foreground">
							Pillar Article
						</span>
						<span className="text-xs bg-emerald-100 dark:bg-green-500/20 text-emerald-700 dark:text-green-400 px-2 py-1 rounded">
							Published
						</span>
					</div>
					<p className="text-xs text-muted-foreground">
						2,500 words • Healthcare AI Revolution
					</p>
				</div>
				<div className="grid grid-cols-3 gap-3">
					{[
						{ platform: "LinkedIn Post", status: "Ready", words: "150" },
						{ platform: "Tweet Thread", status: "Ready", words: "280x5" },
						{ platform: "Video Script", status: "Ready", words: "500" },
						{ platform: "Newsletter", status: "Ready", words: "800" },
						{ platform: "Instagram", status: "Processing", words: "125" },
						{ platform: "Podcast Outline", status: "Ready", words: "1,200" },
					].map((item, i) => (
						<div key={i} className="p-3 bg-muted rounded-lg">
							<div className="flex justify-between items-start mb-1">
								<p className="text-xs font-semibold text-foreground">
									{item.platform}
								</p>
								<span
									className={`text-xs px-1.5 py-0.5 rounded ${
										item.status === "Ready"
											? "bg-emerald-100 dark:bg-green-500/20 text-emerald-700 dark:text-green-400"
											: "bg-amber-100 dark:bg-yellow-500/20 text-amber-700 dark:text-yellow-400"
									}`}
								>
									{item.status}
								</span>
							</div>
							<p className="text-xs text-muted-foreground">
								{item.words} words
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

function AnalysisMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground mb-2">
					Performance Insights
				</h3>
			</div>
			<div className="space-y-4">
				<div className="p-4 bg-muted rounded-lg">
					<div className="mb-3">
						<p className="text-sm font-semibold text-foreground mb-2">
							Campaign Engagement
						</p>
						<div className="h-24 flex items-end justify-between gap-1">
							{[40, 65, 45, 80, 90, 85, 95].map((height, i) => (
								<div
									key={i}
									className="flex-1 bg-slate-300 dark:bg-primary/30 rounded-t"
									style={{ height: `${height}%` }}
								/>
							))}
						</div>
						<div className="flex justify-between mt-2">
							<span className="text-xs text-muted-foreground">Mon</span>
							<span className="text-xs text-muted-foreground">Sun</span>
						</div>
					</div>
				</div>
				<div className="space-y-3">
					<div className="p-3 bg-slate-100 dark:bg-primary/10 rounded-lg">
						<p className="text-xs font-semibold text-slate-700 dark:text-primary mb-2">
							Key Insights
						</p>
						<ul className="space-y-1">
							<li className="text-xs text-muted-foreground">
								• Posts with data points receive 40% more engagement
							</li>
							<li className="text-xs text-muted-foreground">
								• Peak engagement: Tuesday 10am EST
							</li>
							<li className="text-xs text-muted-foreground">
								• LinkedIn drives 3x more qualified traffic
							</li>
						</ul>
					</div>
					<div className="p-3 bg-emerald-50 dark:bg-green-500/10 rounded-lg">
						<p className="text-xs font-semibold text-emerald-700 dark:text-green-400 mb-2">
							Recommendations
						</p>
						<ul className="space-y-1">
							<li className="text-xs text-muted-foreground">
								• Prioritize data-driven topics for next campaign
							</li>
							<li className="text-xs text-muted-foreground">
								• Schedule posts for Tuesday morning slots
							</li>
							<li className="text-xs text-muted-foreground">
								• Increase LinkedIn content allocation by 25%
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

function ContentProductionProtocol() {
	return (
		<div className="bg-accent/40">
			{/* Title Section */}
			<section className="py-16 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-center">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							The Autonomous Content Lifecycle
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Your workforce operates in a continuous, four-stage loop,
							transforming your strategic intent into a high-performance,
							multi-platform content campaign.
						</p>
					</div>
				</div>
			</section>

			{/* Stages */}
			{protocolStages.map(stage => (
				<section key={stage.id} className="py-24 px-6 lg:px-20">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							{/* Text Content */}
							<div
								className={`${stage.textPosition === "right" ? "lg:order-2" : ""}`}
							>
								<div className="space-y-6">
									<div className="inline-block">
										<span className="text-sm text-muted-foreground uppercase tracking-wider">
											Stage {stage.number}
										</span>
									</div>
									<h3 className="text-3xl md:text-4xl font-bold text-foreground">
										{stage.headline}
									</h3>
									<p className="text-lg text-muted-foreground leading-relaxed">
										{stage.description}
									</p>
								</div>
							</div>

							{/* UI Mockup */}
							<div
								className={`${stage.textPosition === "right" ? "lg:order-1" : ""}`}
							>
								<Card className="relative aspect-[4/3] bg-card-background border border-accent/30 shadow-lg overflow-hidden">
									{stage.id === "brief" && <BriefMockup />}
									{stage.id === "creation" && <CreationMockup />}
									{stage.id === "amplification" && <AmplificationMockup />}
									{stage.id === "analysis" && <AnalysisMockup />}
								</Card>
							</div>
						</div>
					</div>
				</section>
			))}
		</div>
	)
}

export default function ContentWorkforcePage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Section 1: Hero - The Promise */}
			<div className="relative min-h-screen">
				{/* Animated Dot Pattern Background */}
				<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full">
					<AnimatedDots />
				</div>

				{/* Gradient overlay */}
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none"></div>

				{/* Hero Content */}
				<section className="pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-12">
							<div className="text-center mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									Content Creation Workforce
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans">
									From Blank Page to Published Campaign.
								</h1>
							</div>
							<p className="text-muted-foreground text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
								Deploy an autonomous content production team that transforms
								your strategic directives into high-quality, on-brand
								assets—from drafting and research to multi-platform repurposing.
							</p>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 1.5: The Content Production Protocol | Definitive Blueprint (v4.0) */}
			<ContentProductionProtocol />

			{/* Section 3: Meet Your Team */}
			<section className="py-32 px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-5xl mx-auto">
					<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-8">
						<div className="text-center mb-12">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
								Meet Your Team
							</span>
							<h2 className="text-foreground text-4xl font-bold tracking-tight mt-4">
								Meet Your On-Demand Content Team.
							</h2>
							<p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
								Your workforce is a coordinated team of specialized AI agents,
								each a master of the content lifecycle, working in concert to
								execute your strategy.
							</p>
						</div>

						{/* Agent Categories - Using Interactive Carousel */}
						<AgentTeamCarousel />
					</Card>
				</div>
			</section>

			{/* Section 4: The Method (Your Custom Content OS) */}
			<section className="py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							We Build Your Custom Content Operating System.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							This is not a one-size-fits-all tool. We work with you to
							architect a workforce that acts as a true extension of your team,
							aligned to your unique brand, experts, and strategic goals.
						</p>
					</div>

					{/* Two-Step Configuration Visual */}
					<div className="relative">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
							{/* Step 1 Module */}
							<Card className="bg-card-background border-2 border-accent shadow-xl p-8">
								<div className="mb-6">
									<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
										<FileText className="w-6 h-6 text-accent" />
									</div>
									<h3 className="text-2xl font-bold text-foreground mb-4">
										1. We Codify Your Brand DNA
									</h3>
								</div>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Brand Voice & Tone:
											</span>
											<span className="text-muted-foreground ml-2">
												We analyze your existing content to define its unique
												personality.
											</span>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Strategic Pillars:
											</span>
											<span className="text-muted-foreground ml-2">
												We codify your core messaging and non-negotiable themes.
											</span>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Platform Requirements:
											</span>
											<span className="text-muted-foreground ml-2">
												We configure the specific formats and styles for all
												your target channels.
											</span>
										</div>
									</div>
								</div>
							</Card>

							{/* Connecting Arrow */}
							<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
								<div className="relative flex items-center">
									<div className="w-16 h-0.5 bg-accent"></div>
									<ChevronRight className="w-6 h-6 text-accent absolute -right-3 top-1/2 -translate-y-1/2" />
								</div>
							</div>

							{/* Step 2 Module */}
							<Card className="bg-card-background border-2 border-accent shadow-xl p-8">
								<div className="mb-6">
									<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
										<Users className="w-6 h-6 text-accent" />
									</div>
									<h3 className="text-2xl font-bold text-foreground mb-4">
										2. We Clone Your Expert Voices
									</h3>
								</div>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Analyze Past Content:
											</span>
											<span className="text-muted-foreground ml-2">
												The workforce ingests your experts&apos; existing
												articles and posts.
											</span>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Create Voice Profiles:
											</span>
											<span className="text-muted-foreground ml-2">
												It creates unique models that capture their individual
												style and perspective.
											</span>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
										<div>
											<span className="font-semibold text-foreground">
												Generate Authentic Content:
											</span>
											<span className="text-muted-foreground ml-2">
												The system can now generate new, original content that
												sounds authentically like them.
											</span>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Section 5: The Choice - The Impact Amplifier */}
			<section className="py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							The New Definition of Leverage.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							The old model gives you a 1:1 return on strategic effort. Our
							model is an amplifier, systematically transforming one unit of
							your team&apos;s strategic input into an overwhelming
							multi-platform market presence.
						</p>
					</div>

					{/* Impact Amplifier Diagram */}
					<Card className="bg-card-background border border-accent/30 shadow-lg p-12">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
							{/* Input (Left) */}
							<div className="text-center flex-shrink-0">
								<div className="inline-flex flex-col items-center">
									<div className="w-20 h-20 bg-background border-2 border-accent/30 rounded-lg flex items-center justify-center mb-4">
										<FileText className="w-10 h-10 text-muted-foreground" />
									</div>
									<p className="text-sm font-semibold text-muted-foreground">
										1 Strategic Brief from Your Team
									</p>
								</div>
							</div>

							{/* Arrow from Input to Processor */}
							<div className="hidden lg:flex items-center flex-shrink-0">
								<div className="relative flex items-center">
									<div className="w-16 h-0.5 bg-accent"></div>
									<ChevronRight className="w-6 h-6 text-accent -ml-3" />
								</div>
							</div>

							{/* Processor (Center) */}
							<div className="text-center flex-shrink-0">
								<div className="inline-flex flex-col items-center">
									<div className="relative mb-4">
										{/* Light mode image */}
										<Image
											src="/content/circle.svg"
											alt="Content Workforce"
											width={250}
											height={250}
											className="dark:hidden"
										/>
										{/* Dark mode image */}
										<Image
											src="/content/circle-dark.svg"
											alt="Content Workforce"
											width={250}
											height={250}
											className="hidden dark:block"
										/>
										{/* Radiating lines */}
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-40 h-40 border border-accent/20 rounded-full animate-ping"></div>
										</div>
									</div>
									<p className="text-lg font-bold text-foreground">
										Content Workforce
									</p>
								</div>
							</div>

							{/* Arrow from Processor to Output */}
							<div className="hidden lg:flex items-center flex-shrink-0">
								<div className="relative flex items-center">
									<div className="w-16 h-0.5 bg-accent"></div>
									<ChevronRight className="w-6 h-6 text-accent -ml-3" />
								</div>
							</div>

							{/* Output (Right) - Explosion of content */}
							<div className="text-center flex-shrink-0">
								<div className="grid grid-cols-2 gap-3">
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<FileText className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											1 Pillar Article
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<MessageSquare className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											4 LinkedIn Posts
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<Share2 className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											10-Tweet Thread
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<Video className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											1 Video Script
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<Mail className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											1 Email Newsletter
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3">
										<Search className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											SEO Metadata
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-3 col-span-2">
										<Layers className="w-6 h-6 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground">
											Social Media Snippets
										</p>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Section 6: Final CTA */}
			<section className="py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-4 py-2 rounded-full text-sm border border-accent/30">
								Ready to Transform Your Content Process?
							</span>
						</div>

						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							Stop Feeding the Content Treadmill.
						</h2>

						<p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
							Deploy an on-demand content workforce that scales your
							brand&apos;s voice, not your headcount. Your first strategic
							session is the starting point.
						</p>

						<ContactModalButton />
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
