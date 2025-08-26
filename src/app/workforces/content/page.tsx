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
	Calendar,
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

export default function ContentWorkforcePage() {
	const [activeTab, setActiveTab] = useState<
		"ideation" | "creation" | "distribution"
	>("ideation")
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
		{ id: "ideation", label: "Strategy & Ideation" },
		{ id: "creation", label: "Creation & Refinement" },
		{ id: "distribution", label: "Repurposing & Distribution" },
	]

	const agents = {
		ideation: [
			{
				icon: <Search className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Market Intelligence Agent",
				role: "Trend Discovery",
				coreFunction:
					"Continuously monitors industry trends, competitor content, and audience engagement patterns to identify high-impact content opportunities.",
				introduction:
					"I'm your always-on market researcher, scanning the digital landscape to ensure you never miss a content opportunity that matters.",
				responsibilities: [
					"Monitor competitor content strategies and identify gaps",
					"Track trending topics and emerging narratives in your industry",
					"Analyze audience engagement patterns to predict content success",
				],
				strategicImportance:
					"By providing continuous market intelligence, I ensure your content strategy is always data-driven and ahead of the curve.",
				collaboration:
					"I feed insights directly to the Content Strategist Agent, ensuring every piece of content is grounded in market reality.",
			},
			{
				icon: <Brain className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Content Strategist Agent",
				role: "Strategic Planning",
				coreFunction:
					"Transforms market insights into actionable content strategies, ensuring every piece aligns with business objectives and brand positioning.",
				introduction:
					"I bridge the gap between market opportunity and brand strategy, ensuring every content piece serves a strategic purpose.",
				responsibilities: [
					"Develop content calendars aligned with business goals",
					"Create content briefs with clear objectives and messaging",
					"Ensure brand consistency across all content initiatives",
				],
				strategicImportance:
					"My strategic framework ensures that content isn't just created—it's crafted with purpose, maximizing ROI on every piece.",
				collaboration:
					"I work with the Market Intelligence Agent for insights and guide the Content Writer Agents to ensure strategic alignment.",
			},
			{
				icon: <Calendar className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Editorial Calendar Agent",
				role: "Content Orchestration",
				coreFunction:
					"Manages the content pipeline, ensuring consistent publishing cadence and optimal timing for maximum audience engagement.",
				introduction:
					"I'm your content conductor, orchestrating the perfect rhythm of publishing to keep your audience engaged and your pipeline flowing.",
				responsibilities: [
					"Schedule content for optimal engagement times",
					"Balance content types and themes for variety",
					"Coordinate multi-channel content campaigns",
				],
				strategicImportance:
					"By maintaining a strategic publishing cadence, I ensure your brand maintains consistent market presence without content fatigue.",
				collaboration:
					"I coordinate with all agents to ensure smooth content flow from ideation through distribution.",
			},
		],
		creation: [
			{
				icon: <PenTool className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Long-Form Writer Agent",
				role: "Deep Content Creation",
				coreFunction:
					"Creates comprehensive, authoritative content pieces that establish thought leadership and drive organic search traffic.",
				introduction:
					"I craft the cornerstone content that positions your brand as the definitive voice in your industry.",
				responsibilities: [
					"Write in-depth articles, whitepapers, and guides",
					"Incorporate SEO best practices without sacrificing quality",
					"Maintain consistent brand voice across long-form content",
				],
				strategicImportance:
					"My long-form content builds domain authority and creates assets that generate value for years, not just days.",
				collaboration:
					"I work closely with the Content Strategist for direction and the Repurposing Agent to maximize content value.",
			},
			{
				icon: <MessageSquare className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Social Content Agent",
				role: "Social Media Optimization",
				coreFunction:
					"Crafts platform-specific social content that drives engagement, builds community, and amplifies your brand message.",
				introduction:
					"I speak the language of every social platform, ensuring your message resonates wherever your audience lives.",
				responsibilities: [
					"Create platform-optimized posts for LinkedIn, Twitter, Instagram",
					"Develop engaging hooks and calls-to-action",
					"Adapt tone and format for each platform's unique culture",
				],
				strategicImportance:
					"By optimizing for each platform's algorithm and audience expectations, I maximize your social ROI and reach.",
				collaboration:
					"I transform insights from the Long-Form Writer into bite-sized, shareable content that drives traffic back to core assets.",
			},
			{
				icon: <FileText className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Copy Editor Agent",
				role: "Quality Assurance",
				coreFunction:
					"Ensures every piece of content meets the highest standards of clarity, accuracy, and brand consistency before publication.",
				introduction:
					"I'm your final line of defense, ensuring every word that represents your brand is polished to perfection.",
				responsibilities: [
					"Edit for grammar, style, and brand voice consistency",
					"Fact-check claims and verify source accuracy",
					"Optimize readability and content structure",
				],
				strategicImportance:
					"My quality control ensures your brand maintains credibility and professionalism across every piece of content.",
				collaboration:
					"I review all content from the Writer Agents before it moves to distribution, maintaining quality standards.",
			},
		],
		distribution: [
			{
				icon: <Share2 className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Content Repurposing Agent",
				role: "Asset Multiplication",
				coreFunction:
					"Transforms single content pieces into multi-format campaigns, maximizing the value of every strategic idea.",
				introduction:
					"I turn one great idea into a month of content, ensuring no value is left on the table.",
				responsibilities: [
					"Convert blog posts into social threads, videos scripts, and podcasts",
					"Create derivative content for different audience segments",
					"Develop content series from single cornerstone pieces",
				],
				strategicImportance:
					"By multiplying content value, I dramatically improve your content ROI and ensure consistent market presence.",
				collaboration:
					"I work with all Content Agents to identify repurposing opportunities and the Distribution Agent to coordinate release.",
			},
			{
				icon: <Video className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Multimedia Agent",
				role: "Visual Content Creation",
				coreFunction:
					"Creates visual and video content that captures attention and communicates complex ideas simply and memorably.",
				introduction:
					"I bring your content to life visually, ensuring your message cuts through the noise in our visual-first world.",
				responsibilities: [
					"Design infographics and visual content summaries",
					"Create video scripts and coordinate production",
					"Develop visual brand assets for content campaigns",
				],
				strategicImportance:
					"Visual content drives 40x more social shares, making my work critical for content virality and reach.",
				collaboration:
					"I transform written content from all Writer Agents into visual formats that amplify engagement.",
			},
			{
				icon: <Mail className="w-8 h-8 text-[#A1BCD1]" />,
				name: "Distribution Agent",
				role: "Channel Management",
				coreFunction:
					"Manages the automated distribution of content across all channels, ensuring maximum reach and engagement.",
				introduction:
					"I ensure your content reaches the right audience, on the right platform, at the perfect moment.",
				responsibilities: [
					"Publish content across all configured platforms",
					"Optimize posting times for maximum engagement",
					"Track distribution metrics and adjust strategies",
				],
				strategicImportance:
					"My automated distribution ensures consistent brand presence without manual overhead, maximizing efficiency.",
				collaboration:
					"I coordinate with the Editorial Calendar Agent and all content creators to ensure smooth, timely distribution.",
			},
		],
	}

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

			{/* Section 3: The Interactive Roster (moved below Section 2) */}
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

						{/* Tab Navigation */}
						<div className="flex justify-center mb-12">
							<div className="inline-flex bg-background border border-accent/30 rounded-lg p-1">
								{tabs.map(tab => (
									<button
										key={tab.id}
										onClick={() =>
											setActiveTab(
												tab.id as "ideation" | "creation" | "distribution"
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
												| "ideation"
												| "creation"
												| "distribution"
										)
									}}
									className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>

								{/* Cards Grid */}
								<div className="w-full px-12 py-8">
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center max-w-7xl mx-auto">
										{agents[activeTab].map((agent, index) => (
											<Card
												key={index}
												onClick={() => setSelectedAgent(agent)}
												className="bg-card-background border border-[#A1BCD1] shadow-md transition-all hover:border-accent hover:shadow-lg p-5 group cursor-pointer hover:scale-[1.02] flex flex-col items-center justify-between text-center min-h-[360px] w-[260px]"
											>
												<h3 className="text-foreground text-lg font-bold leading-tight mb-2">
													{agent.name}
												</h3>
												<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
													{agent.role}
												</span>
												<div className="w-16 h-16 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mb-8">
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
												| "ideation"
												| "creation"
												| "distribution"
										)
									}}
									className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
								>
									<ChevronRight className="w-6 h-6" />
								</button>
							</div>
						</div>
					</Card>
				</div>
			</section>
			{/* Section 2: The Diagnosis - Content Bottlenecks */}
			{/* <section className="py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							Your Content Engine is Hitting a Wall.
						</h2>
						<p className="text-muted-foreground text-lg max-w-4xl mx-auto">
							The traditional, manual model for content creation wasn&apos;t
							built for the modern demands of scale, consistency, and speed.
							It&apos;s defined by four core bottlenecks that systematically
							limit your impact.
						</p>
					</div> */}

			{/* 2x2 Problem Grid */}
			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{contentBottlenecks.map(bottleneck => (
							<Card
								key={bottleneck.id}
								className="bg-card-background border-2 border-red-500/30 p-6 shadow-lg hover:shadow-xl transition-all"
							>
								<div className="flex items-start gap-3">
									{bottleneck.icon}
									<div className="flex-1">
										<h3 className="text-foreground font-bold mb-2">
											Card {bottleneck.id}: {bottleneck.title}
										</h3>
										<p className="text-muted-foreground text-sm mb-4">
											{bottleneck.description}
										</p>
										<ul className="space-y-2">
											{bottleneck.details.map((detail, idx) => (
												<li
													key={idx}
													className="text-sm text-muted-foreground flex items-start"
												>
													<span className="text-red-500 mr-2">•</span>
													{detail}
												</li>
											))}
										</ul>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section> */}

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
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
								<div className="relative">
									<div className="w-16 h-0.5 bg-accent animate-pulse"></div>
									<ChevronRight className="w-6 h-6 text-accent absolute -right-3 -top-3" />
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

						<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
							Book a Strategic Session
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
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
						<div
							className="bg-card-background border border-accent shadow-2xl rounded-xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 fade-in duration-200"
							onClick={e => e.stopPropagation()}
						>
							{/* Modal Header */}
							<div className="flex items-start justify-between mb-6">
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
										{selectedAgent.icon}
									</div>
									<div>
										<h2 className="text-foreground text-2xl font-bold">
											{selectedAgent.name}
										</h2>
										<span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
											{selectedAgent.role}
										</span>
									</div>
								</div>
								<button
									onClick={() => setSelectedAgent(null)}
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<X className="w-6 h-6" />
								</button>
							</div>

							{/* Core Function */}
							<div className="mb-6">
								<p className="text-lg text-muted-foreground leading-relaxed">
									{selectedAgent.coreFunction}
								</p>
							</div>

							{/* Introduction Quote */}
							<div className="bg-accent/10 border-l-4 border-accent p-4 mb-6 rounded-r-lg">
								<p className="text-muted-foreground italic">
									&ldquo;{selectedAgent.introduction}&rdquo;
								</p>
							</div>

							{/* Details Grid */}
							<div className="space-y-6">
								{/* Responsibilities */}
								<div>
									<h3 className="text-lg font-semibold text-foreground mb-3">
										Responsibilities
									</h3>
									<ul className="space-y-2">
										{selectedAgent.responsibilities.map((resp, idx) => (
											<li
												key={idx}
												className="text-muted-foreground flex items-start"
											>
												<span className="text-accent mr-3 mt-1">•</span>
												<span>{resp}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Strategic Importance */}
								<div>
									<h3 className="text-lg font-semibold text-foreground mb-3">
										Strategic Importance
									</h3>
									<p className="text-muted-foreground">
										{selectedAgent.strategicImportance}
									</p>
								</div>

								{/* Collaboration */}
								<div>
									<h3 className="text-lg font-semibold text-foreground mb-3">
										Collaboration
									</h3>
									<p className="text-muted-foreground">
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
