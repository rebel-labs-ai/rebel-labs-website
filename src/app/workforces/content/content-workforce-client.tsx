"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import {
	PenTool,
	Share2,
	Search,
	Brain,
	Layers,
	MessageSquare,
	FileText,
	Video,
	Mail,
	ChevronLeft,
	ChevronRight,
	X,
	Users,
} from "lucide-react"

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

function ContentProductionProtocol() {
	return (
		<div className="bg-accent/40">
			{/* Title Section */}
			<section className="py-12 sm:py-16 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-left sm:text-center">
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							The Autonomous Content Lifecycle
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
							Your workforce operates in a continuous, four-stage loop,
							transforming your strategic intent into a high-performance,
							multi-platform content campaign.
						</p>
					</div>
				</div>
			</section>

			{/* Stages */}
			{protocolStages.map(stage => (
				<section
					key={stage.id}
					className="py-12 sm:py-24 px-4 sm:px-6 lg:px-20"
				>
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
							{/* Text Content */}
							<div
								className={`${stage.textPosition === "right" ? "lg:order-2" : ""}`}
							>
								<div className="space-y-3 sm:space-y-6">
									<div className="inline-block">
										<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-accent/30 inline-block">
											Stage {stage.number}
										</span>
									</div>
									<h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
										{stage.headline}
									</h3>
									<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
					<div className="text-sm text-muted-foreground mb-2">
						Current
						<br className="sm:hidden" />
						<span className="hidden sm:inline"> </span>
						Draft
					</div>
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
								{/* Mobile: Show dot only, Desktop: Show status text */}
								<span className="sm:hidden">
									<span
										className={`inline-block w-2 h-2 rounded-full ${
											item.status === "Ready" ? "bg-green-500" : "bg-amber-500"
										}`}
									/>
								</span>
								<span
									className={`hidden sm:inline text-xs px-1.5 py-0.5 rounded ${
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

export function ContentWorkforceClient() {
	const [activeTab, setActiveTab] = useState<
		"intelligence" | "creation" | "amplification"
	>("intelligence")
	const [selectedAgent, setSelectedAgent] = useState<{
		icon: React.ReactNode
		name: string
		role: string
		coreFunction: string
		introduction: string
		responsibilities: string[]
		strategicImportance: string
		collaboration: string
	} | null>(null)

	const tabs = [
		{ id: "intelligence", label: "The Intelligence Core" },
		{ id: "creation", label: "The Creation Studio" },
		{ id: "amplification", label: "The Amplification Factory" },
	]

	const agents = {
		intelligence: [
			{
				icon: (
					<Search className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Research Agent",
				role: "Scanning the Market",
				coreFunction:
					"Constantly scans the market, competitor landscape, and social trends for the raw data and insights that fuel your content strategy.",
				introduction:
					"I am your eyes and ears on the market. I provide the foundational intelligence that ensures your content is always relevant, timely, and strategically sound.",
				responsibilities: [
					"Monitors industry news, competitor content, and emerging narratives.",
					"Identifies high-potential keywords and topics aligned with your strategic pillars.",
					"Gathers the raw data and proof points required to build authoritative content.",
				],
				strategicImportance:
					"I ensure your strategy is built on data, not guesswork. By grounding every idea in market reality, I de-risk your content investment and maximize its potential for impact.",
				collaboration:
					"I provide a continuous stream of raw intelligence to the Idea Generation Agent, who synthesizes it into concrete content concepts.",
			},
			{
				icon: (
					<Brain className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Idea Generation Agent",
				role: "Architecting Content Concepts",
				coreFunction:
					"Synthesizes market research into a relentless stream of on-brand, high-potential content ideas, each justified with clear strategic intelligence.",
				introduction:
					"I am the engine that kills the 'blank page' problem. I transform raw data into compelling content concepts and strategic briefs for the creation team.",
				responsibilities: [
					"Synthesizes inputs from the Research Agent into unique angles and topics.",
					"Develops the core thesis and strategic justification for each new content idea.",
					"Creates the initial brief that guides the work of the Creation Studio agents.",
				],
				strategicImportance:
					"I keep your content pipeline perpetually full of high-quality, strategically-aligned ideas, ensuring your brand maintains a consistent and authoritative market presence.",
				collaboration:
					"I translate the intelligence from the Research Agent into actionable briefs for the Drafting and Media Generation Agents.",
			},
			{
				icon: (
					<Users className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Critic Agent",
				role: "Ensuring Quality & Coherence",
				coreFunction:
					"Acts as the universal quality control system, providing objective, data-driven feedback to all other agents to ensure strategic alignment and quality.",
				introduction:
					"I am the voice of reason and the guardian of quality. I provide objective, critical feedback at every stage of the process to ensure the final output is flawless.",
				responsibilities: [
					"Reviews first drafts for logical flow, clarity, and alignment with the initial brief.",
					"Analyzes repurposed content to ensure it is contextually appropriate for its target platform.",
					"Provides data-driven feedback to the Iteration Agent to guide the refinement process.",
				],
				strategicImportance:
					"I am the mechanism that ensures quality at scale. By providing constant, intelligent critique, I allow the system to self-correct and improve, guaranteeing a high-quality output every time.",
				collaboration:
					"I am a universal collaborator. I provide critical feedback to the Drafting, Iteration, and Repurposing agents to guide their work and ensure excellence.",
			},
		],
		creation: [
			{
				icon: (
					<PenTool className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Drafting Agent",
				role: "Producing Written Content",
				coreFunction:
					"Acts as the primary writer, generating complete, structured, and on-brand first drafts of articles, scripts, and posts.",
				introduction:
					"I am your infinitely scalable writer. I handle the heavy lifting of transforming a strategic brief into a high-quality, well-structured written asset at machine speed.",
				responsibilities: [
					"Synthesizes the brief and research into a coherent narrative.",
					"Writes the initial draft of the content, adhering to the specified brand and expert voice profiles.",
					"Structures the content logically with clear headings, introductions, and conclusions.",
				],
				strategicImportance:
					"I cut your idea-to-market time from weeks to hours. By automating the most time-consuming part of the content process, I free your human strategists from the production treadmill.",
				collaboration:
					"I execute the brief from the Idea Generation Agent and work in a tight loop with the Critic and Iteration Agents to refine the final output.",
			},
			{
				icon: (
					<FileText className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Iteration Agent",
				role: "Refining to Perfection",
				coreFunction:
					"Rapidly revises both written and visual drafts based on simple, high-level feedback from your human creative directors.",
				introduction:
					"I am built for seamless human-AI collaboration. I turn the painful, slow process of feedback and revision into a rapid, efficient workflow.",
				responsibilities: [
					"Parses simple, natural language feedback from your human strategists.",
					"Makes precise, targeted revisions to drafts without altering the core structure.",
					"Learns from feedback over time to reduce the number of required revisions on future projects.",
				],
				strategicImportance:
					"I empower your human team to act as true creative directors, not line editors. I amplify their creativity by handling the mechanical work of revision instantly.",
				collaboration:
					"I work in a tight loop with the Drafting and Media Generation Agents, guided by feedback from the Critic Agent and your human team.",
			},
			{
				icon: (
					<Video className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Media Generation Agent",
				role: "Creating Visual Assets",
				coreFunction:
					"Creates on-brand visual assets—including images, carousels, and infographics—to accompany and enhance the core written content.",
				introduction:
					"I am your on-demand visual designer. I transform text-based concepts into compelling visual content that captures attention and communicates ideas more effectively.",
				responsibilities: [
					"Generates on-brand images and infographics to illustrate key points in an article.",
					"Creates multi-image carousels for platforms like LinkedIn and Instagram.",
					"(Coming Soon) Produces animated videos based on written scripts.",
				],
				strategicImportance:
					"I increase the engagement and impact of every piece of content. By adding a powerful visual dimension, I ensure your message breaks through the noise and is more memorable.",
				collaboration:
					"I work in parallel with the Drafting Agent to ensure the text and visuals are perfectly aligned, and with the Repurposing Agent to create platform-specific visual formats.",
			},
		],
		amplification: [
			{
				icon: (
					<Share2 className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Repurposing Agent",
				role: "Maximizing Content Leverage",
				coreFunction:
					'Intelligently "atomizes" any single piece of pillar content into a complete arsenal of derivative assets for every channel.',
				introduction:
					"I am the engine of content leverage. I ensure that one hour of your expert's time is systematically transformed into a month's worth of high-impact marketing assets with zero waste.",
				responsibilities: [
					"Takes a single pillar asset (e.g., a blog post) as input.",
					"Generates a complete campaign of derivative content (e.g., LinkedIn posts, tweet threads).",
					"Perfectly formats each piece for the unique language and requirements of its target platform.",
				],
				strategicImportance:
					"I fundamentally change the ROI of your content. By maximizing the value of every single idea, I allow you to dominate your market's conversation across all platforms.",
				collaboration:
					"I take the final, approved pillar content and create the full suite of assets for the Hook Generation and Distribution Agents to finalize.",
			},
			{
				icon: (
					<MessageSquare className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Hook Generation Agent",
				role: "Crafting Compelling Hooks",
				coreFunction:
					"Generates a selection of compelling, platform-specific hooks and opening lines for every piece of repurposed content.",
				introduction:
					"I am the specialist in capturing attention. In a world of infinite scroll, the first line is everything. I craft the openings that make your audience stop and read.",
				responsibilities: [
					"Analyzes the core message of a piece of content.",
					"Generates multiple hook variations tailored to different platform psychologies (e.g., LinkedIn vs. Twitter).",
					"A/B tests hook performance over time to identify winning patterns.",
				],
				strategicImportance:
					"I am the tip of the spear. By optimizing the most critical part of your social content, I dramatically increase the reach and engagement of your entire campaign.",
				collaboration:
					"I work directly on the outputs of the Repurposing Agent, providing the final layer of creative polish before the Distribution Agent takes over.",
			},
			{
				icon: (
					<Mail className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
				),
				name: "Distribution Agent",
				role: "Engineering for Discovery & Distribution",
				coreFunction:
					"Generates all necessary SEO and social metadata and then publishes the final, approved content across all your channels.",
				introduction:
					"I am your central distribution hub. I handle the final, critical steps of optimizing for discovery and deploying your content to the market.",
				responsibilities: [
					"Generates SEO-focused titles, meta descriptions, and relevant keywords.",
					"Creates platform-specific tags and hashtags for social media.",
					"Schedules and publishes all approved content to your integrated accounts.",
				],
				strategicImportance:
					"I provide speed, efficiency, and control over your entire distribution process, ensuring your message hits the market in a coordinated and technically sound manner.",
				collaboration:
					"I am the final step in the production line, taking the fully repurposed and hooked assets and deploying them to the world.",
			},
		],
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
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
				<section className="pt-24 sm:pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-12">
							<div className="text-center mb-4 sm:mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semism:font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									Content Creation Workforce
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
									From Blank Page to Published Campaign.
								</h1>
							</div>
							<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed text-center max-w-3xl mx-auto px-2 sm:px-0">
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

			{/* Section 3: The Interactive Roster (moved below Section 2) */}
			<section className="py-32 px-2 sm:px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-5xl mx-auto px-2 sm:px-4">
					<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-4 sm:p-8">
						<div className="text-left sm:text-center mb-12">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
								Meet Your Team
							</span>
							<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mt-4">
								Meet Your On-Demand Content Team.
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto mt-4">
								Your workforce is a coordinated team of specialized AI agents,
								each a master of the content lifecycle, working in concert to
								execute your strategy.
							</p>
						</div>

						{/* Mobile Layout - All agents in vertical list */}
						<div className="block sm:hidden space-y-6 -mx-2">
							{/* Intelligence & Research Section */}
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
									Intelligence & Research
								</h3>
								<div className="space-y-2 px-1">
									{agents.intelligence.map((agent, index) => (
										<Card
											key={index}
											onClick={() => setSelectedAgent(agent)}
											className="bg-card-background border border-accent/20 px-2 py-2.5 cursor-pointer hover:border-accent transition-all rounded-md"
										>
											<div className="flex items-center gap-2">
												{/* Icon on the left */}
												<div className="w-9 h-9 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
													{agent.icon}
												</div>

												{/* Text content */}
												<div className="flex-1">
													<h4 className="text-foreground font-semibold text-sm">
														{agent.name}
													</h4>
												</div>

												{/* Arrow on the right */}
												<ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
											</div>
										</Card>
									))}
								</div>
							</div>

							{/* Creation & Refinement Section */}
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
									Creation & Refinement
								</h3>
								<div className="space-y-2 px-1">
									{agents.creation.map((agent, index) => (
										<Card
											key={index}
											onClick={() => setSelectedAgent(agent)}
											className="bg-card-background border border-accent/20 px-2 py-2.5 cursor-pointer hover:border-accent transition-all rounded-md"
										>
											<div className="flex items-center gap-2">
												{/* Icon on the left */}
												<div className="w-9 h-9 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
													{agent.icon}
												</div>

												{/* Text content */}
												<div className="flex-1">
													<h4 className="text-foreground font-semibold text-sm">
														{agent.name}
													</h4>
												</div>

												{/* Arrow on the right */}
												<ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
											</div>
										</Card>
									))}
								</div>
							</div>

							{/* Amplification & Distribution Section */}
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
									Amplification & Distribution
								</h3>
								<div className="space-y-2 px-1">
									{agents.amplification.map((agent, index) => (
										<Card
											key={index}
											onClick={() => setSelectedAgent(agent)}
											className="bg-card-background border border-accent/20 px-2 py-2.5 cursor-pointer hover:border-accent transition-all rounded-md"
										>
											<div className="flex items-center gap-2">
												{/* Icon on the left */}
												<div className="w-9 h-9 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
													{agent.icon}
												</div>

												{/* Text content */}
												<div className="flex-1">
													<h4 className="text-foreground font-semibold text-sm">
														{agent.name}
													</h4>
												</div>

												{/* Arrow on the right */}
												<ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
											</div>
										</Card>
									))}
								</div>
							</div>
						</div>

						{/* Desktop Layout - Tab Navigation and Grid (unchanged) */}
						<div className="hidden sm:block">
							{/* Tab Navigation */}
							<div className="flex justify-center mb-12">
								<div className="inline-flex bg-background border border-accent/30 rounded-lg p-1">
									{tabs.map(tab => (
										<button
											key={tab.id}
											onClick={() =>
												setActiveTab(
													tab.id as
														| "intelligence"
														| "creation"
														| "amplification"
												)
											}
											className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
												activeTab === tab.id
													? "bg-accent dark:bg-accent/60 text-white dark:text-white shadow-md hover:shadow-lg hover:bg-accent/80 hover:dark:bg-accent/40"
													: "text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20"
											}`}
										>
											{tab.label}
										</button>
									))}
								</div>
							</div>

							{/* Agent Cards Grid */}
							<div className="border border-accent/30 rounded-xl p-8 bg-accent/10 dark:bg-background/50 relative">
								<div className="flex items-center justify-between">
									{/* Left Arrow */}
									<button
										onClick={() => {
											const currentIndex = tabs.findIndex(
												tab => tab.id === activeTab
											)
											const prevIndex =
												currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
											setActiveTab(
												tabs[prevIndex].id as
													| "intelligence"
													| "creation"
													| "amplification"
											)
										}}
										className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
									>
										<ChevronLeft className="w-6 h-6" />
									</button>

									{/* Cards Grid */}
									<div className="w-full px-12 py-8">
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center max-w-7xl mx-auto">
											{agents[activeTab].map((agent, index) => (
												<Card
													key={index}
													onClick={() => setSelectedAgent(agent)}
													className="bg-card-background border border-[#A1BCD1] shadow-md transition-all hover:border-accent hover:shadow-lg p-6 group cursor-pointer hover:scale-[1.02] flex flex-col items-center justify-between text-center min-h-[400px] w-[280px]"
												>
													<h3 className="text-foreground text-lg font-bold leading-tight mb-2">
														{agent.name}
													</h3>
													<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
														{agent.role}
													</span>
													<div className="w-20 h-20 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mb-8">
														{agent.icon}
													</div>
													<p className="text-muted-foreground text-sm mb-2 flex-1">
														{agent.coreFunction}
													</p>
													<button className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors">
														Learn More →
													</button>
												</Card>
											))}
										</div>
									</div>

									{/* Right Arrow */}
									<button
										onClick={() => {
											const currentIndex = tabs.findIndex(
												tab => tab.id === activeTab
											)
											const nextIndex = (currentIndex + 1) % tabs.length
											setActiveTab(
												tabs[nextIndex].id as
													| "intelligence"
													| "creation"
													| "amplification"
											)
										}}
										className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
									>
										<ChevronRight className="w-6 h-6" />
									</button>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Section 4: The Method (Your Custom Content OS) */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-left sm:text-center mb-8 sm:mb-12">
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							We Build Your Custom Content Operating System.
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
							This is not a one-size-fits-all tool. We work with you to
							architect a workforce that acts as a true extension of your team,
							aligned to your unique brand, experts, and strategic goals.
						</p>
					</div>

					{/* Two-Step Configuration Visual */}
					<div className="relative">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
							{/* Step 1 Module */}
							<Card className="bg-card-background border-2 border-accent shadow-xl p-6 sm:p-8">
								<div className="mb-6">
									<div className="hidden sm:flex w-12 h-12 bg-accent/20 rounded-lg items-center justify-center mb-4">
										<FileText className="w-6 h-6 text-accent" />
									</div>
									<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
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
							<Card className="bg-card-background border-2 border-accent shadow-xl p-6 sm:p-8">
								<div className="mb-6">
									<div className="hidden sm:flex w-12 h-12 bg-accent/20 rounded-lg items-center justify-center mb-4">
										<Users className="w-6 h-6 text-accent" />
									</div>
									<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
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
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-left sm:text-center mb-8 sm:mb-12">
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							The New Definition of Leverage.
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
							The old model gives you a 1:1 return on strategic effort. Our
							model is an amplifier, systematically transforming one unit of
							your team&apos;s strategic input into an overwhelming
							multi-platform market presence.
						</p>
					</div>

					{/* Impact Amplifier Diagram */}
					<Card className="bg-card-background border border-accent/30 shadow-lg p-6 sm:p-12">
						{/* Mobile Layout - Vertical Stack */}
						<div className="flex flex-col items-center gap-8 lg:hidden">
							{/* Input */}
							<div className="text-center">
								<div className="inline-flex flex-col items-center">
									<div className="w-16 h-16 bg-background border-2 border-accent/30 rounded-lg flex items-center justify-center mb-3">
										<FileText className="w-8 h-8 text-muted-foreground" />
									</div>
									<p className="text-xs font-semibold text-muted-foreground">
										1 Strategic Brief
									</p>
								</div>
							</div>

							{/* Arrow Down */}
							<ChevronRight className="w-6 h-6 text-accent rotate-90" />

							{/* Processor */}
							<div className="text-center">
								<div className="inline-flex flex-col items-center">
									<div className="relative mb-3">
										{/* Light mode image */}
										<Image
											src="/content/circle.svg"
											alt="Content Workforce"
											width={180}
											height={180}
											className="dark:hidden"
										/>
										{/* Dark mode image */}
										<Image
											src="/content/circle-dark.svg"
											alt="Content Workforce"
											width={180}
											height={180}
											className="hidden dark:block"
										/>
									</div>
									<p className="text-sm font-bold text-foreground">
										Content Workforce
									</p>
								</div>
							</div>

							{/* Arrow Down */}
							<ChevronRight className="w-6 h-6 text-accent rotate-90" />

							{/* Output */}
							<div className="w-full max-w-sm">
								<div className="grid grid-cols-2 gap-2">
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<FileText className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											Pillar Article
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<MessageSquare className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											LinkedIn Posts
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<Share2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											Tweet Thread
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<Video className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											Video Script
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<Mail className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											Newsletter
										</p>
									</div>
									<div className="bg-background border border-green-500/30 rounded-lg p-2">
										<Layers className="w-5 h-5 text-green-500 mx-auto mb-1" />
										<p className="text-xs font-medium text-foreground text-center">
											Social Media
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Desktop Layout - Horizontal Flow */}
						<div className="hidden lg:flex items-center justify-between gap-12 max-w-7xl mx-auto">
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
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-6 sm:p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-4 sm:mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-accent/30">
								Ready to Transform Your Content Process?
							</span>
						</div>

						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							Stop Feeding the Content Treadmill.
						</h2>

						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
							Deploy an on-demand content workforce that scales your
							brand&apos;s voice, not your headcount. Your first strategic
							session is the starting point.
						</p>

						<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
							Talk to Us
							{/* Added link to book a strategic session */}
							<a
								href="https://cal.com/george-westbrook-novosapien/content-creation-workforce"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block w-full h-full"
								tabIndex={-1}
								aria-label="Book a Strategic Session"
								style={{ position: "absolute", inset: 0, zIndex: 10 }}
							></a>
						</Button>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />

			{/* Agent Details Modal */}
			{selectedAgent && (
				<>
					{/* Backdrop with blur */}
					<div
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in"
						onClick={() => setSelectedAgent(null)}
					/>

					{/* Modal Content */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
						<div
							className="bg-card-background border border-accent shadow-2xl rounded-xl p-4 sm:p-8 max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 fade-in duration-200"
							onClick={e => e.stopPropagation()}
						>
							{/* Modal Header */}
							<div className="flex items-start justify-between mb-4 sm:mb-6">
								<div className="flex items-start gap-3 sm:gap-4 flex-1">
									<div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
										{selectedAgent.icon}
									</div>
									<div className="flex-1 min-w-0">
										<h2 className="text-foreground text-lg sm:text-2xl font-bold leading-tight">
											{selectedAgent.name}
										</h2>
										<span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
											{selectedAgent.role}
										</span>
									</div>
								</div>
								<button
									onClick={() => setSelectedAgent(null)}
									className="text-muted-foreground hover:text-foreground transition-colors ml-2 p-1 -mr-1 -mt-1"
								>
									<X className="w-5 h-5 sm:w-6 sm:h-6" />
								</button>
							</div>

							{/* Core Function */}
							<div className="mb-4 sm:mb-6">
								<p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
									{selectedAgent.coreFunction}
								</p>
							</div>

							{/* Introduction Quote */}
							<div className="bg-accent/10 border-l-4 border-accent p-3 sm:p-4 mb-4 sm:mb-6 rounded-r-lg">
								<p className="text-sm sm:text-base text-muted-foreground italic">
									&ldquo;{selectedAgent.introduction}&rdquo;
								</p>
							</div>

							{/* Details Grid */}
							<div className="space-y-4 sm:space-y-6">
								{/* Responsibilities */}
								<div>
									<h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
										Responsibilities
									</h3>
									<ul className="space-y-1.5 sm:space-y-2">
										{selectedAgent.responsibilities.map((resp, idx) => (
											<li
												key={idx}
												className="text-sm sm:text-base text-muted-foreground flex items-start"
											>
												<span className="text-accent mr-2 sm:mr-3 mt-0.5 sm:mt-1">
													•
												</span>
												<span>{resp}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Strategic Importance */}
								<div>
									<h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
										Strategic Importance
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										{selectedAgent.strategicImportance}
									</p>
								</div>

								{/* Collaboration */}
								<div>
									<h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
										Collaboration
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										{selectedAgent.collaboration}
									</p>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
