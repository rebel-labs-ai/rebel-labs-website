"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import {
	PenTool,
	Share2,
	BarChart,
	Search,
	Brain,
	Layers,
	Calendar,
	MessageSquare,
	FileText,
	Video,
	Mail,
	ChevronDown,
	ChevronUp,
	ChevronLeft,
	ChevronRight,
	X,
	Users,
	Clock,
	Target,
} from "lucide-react"

export default function ContentWorkforcePage() {
	const [expandedCard, setExpandedCard] = useState<number | null>(null)
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

	const lifecycleSteps = [
		{
			id: 1,
			title: "Proactive Idea Generation",
			description:
				'Your workforce constantly scans the market for trends and competitor moves to generate a relentless stream of on-brand content ideas. Each idea is delivered with the underlying strategic intelligence—the "why"—so your team can direct the mission with absolute confidence.',
			icon: <Search className="w-6 h-6 text-accent" />,
		},
		{
			id: 2,
			title: "High-Speed Production & Iteration",
			description:
				"A coordinated team of AI agents drafts the content and incorporates your feedback through a seamless iteration loop. Your human strategists act as creative directors, providing high-level feedback while the workforce handles the rapid revisions, learning your preferences with every cycle.",
			icon: <PenTool className="w-6 h-6 text-accent" />,
		},
		{
			id: 3,
			title: "Systematic Multi-Platform Amplification",
			description:
				"The workforce intelligently repurposes each core asset into a complete campaign of derivative content, with specific tones and formats for each channel. It then handles the direct publishing to your preferred platforms, turning one idea into a month of market presence.",
			icon: <Share2 className="w-6 h-6 text-accent" />,
		},
		{
			id: 4,
			title: "Closed-Loop Performance Analysis",
			description:
				"This is a system that learns. The workforce monitors engagement to understand what works and what doesn't. This performance data is then used as fuel to make all future content ideas and strategies even more effective, creating a compounding advantage.",
			icon: <BarChart className="w-6 h-6 text-accent" />,
		},
	]

	const contentBottlenecks = [
		{
			id: 1,
			title: "The Scale Bottleneck",
			description:
				"Your output is linearly tied to your headcount, making it impossible to increase market presence without a massive increase in cost.",
			icon: <Users className="w-5 h-5 text-red-500" />,
			details: [
				"Every piece of content requires human hours that don't scale",
				"Hiring more writers means exponentially more management overhead",
				"Quality degrades as you add more contributors without strong processes",
			],
		},
		{
			id: 2,
			title: "The Consistency Bottleneck",
			description:
				"Managing freelancers and internal stakeholders leads to a chaotic process and a diluted brand voice, damaging your most valuable asset.",
			icon: <Target className="w-5 h-5 text-red-500" />,
			details: [
				"Different writers interpret brand guidelines differently",
				"Tone and messaging varies wildly across content pieces",
				"Brand erosion happens slowly, then all at once",
			],
		},
		{
			id: 3,
			title: "The Leverage Bottleneck",
			description:
				"Your best strategic ideas are under-utilized, trapped in single assets instead of being systematically repurposed into multi-platform campaigns.",
			icon: <Layers className="w-5 h-5 text-red-500" />,
			details: [
				"High-value content dies after a single use",
				"Manual repurposing is time-consuming and often forgotten",
				"You're leaving 10x the value on the table with every piece",
			],
		},
		{
			id: 4,
			title: "The Speed Bottleneck",
			description:
				"The slow, manual creation process means you're always weeks behind, losing the narrative battle to more agile competitors.",
			icon: <Clock className="w-5 h-5 text-red-500" />,
			details: [
				"By the time content is approved, the moment has passed",
				"Competitors dominate trending topics while you're still drafting",
				"Your pipeline is always playing catch-up, never leading",
			],
		},
	]

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
									CONTENT CREATION WORKFORCE
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
							<div className="mt-8 text-center">
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-base px-6 py-3">
									See the Content Factory
								</Button>
							</div>

							{/* Animated Visual - Content Atomization */}
							<div className="mt-12 flex justify-center">
								<div className="relative w-96 h-96">
									{/* Central Pillar Asset */}
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-lg flex items-center justify-center border-2 border-accent">
										<FileText className="w-12 h-12 text-accent" />
									</div>

									{/* Radiating Content Types */}
									<div
										className="absolute top-10 left-1/2 -translate-x-1/2 animate-pulse"
										style={{ animationDelay: "0s" }}
									>
										<div className="bg-background border border-accent/30 rounded-lg px-3 py-2 text-sm">
											LinkedIn Post
										</div>
									</div>
									<div
										className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse"
										style={{ animationDelay: "0.5s" }}
									>
										<div className="bg-background border border-accent/30 rounded-lg px-3 py-2 text-sm">
											Tweet Thread
										</div>
									</div>
									<div
										className="absolute top-1/2 left-10 -translate-y-1/2 animate-pulse"
										style={{ animationDelay: "1s" }}
									>
										<div className="bg-background border border-accent/30 rounded-lg px-3 py-2 text-sm">
											Video Script
										</div>
									</div>
									<div
										className="absolute top-1/2 right-10 -translate-y-1/2 animate-pulse"
										style={{ animationDelay: "1.5s" }}
									>
										<div className="bg-background border border-accent/30 rounded-lg px-3 py-2 text-sm">
											Email Newsletter
										</div>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 1.5: The Autonomous Content Lifecycle */}
			<section className="py-32 px-4 bg-accent/40">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							The Autonomous Content Lifecycle.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Your workforce operates in a continuous, four-stage loop,
							transforming your strategic intent into a high-performance,
							multi-platform content campaign.
						</p>
					</div>

					{/* Process Accordion */}
					<div className="space-y-4">
						{lifecycleSteps.map(step => (
							<Card
								key={step.id}
								className="bg-card-background border border-accent/30 shadow-lg cursor-pointer transition-all hover:shadow-xl"
								onClick={() =>
									setExpandedCard(expandedCard === step.id ? null : step.id)
								}
							>
								<div className="p-6">
									<div className="flex items-start justify-between">
										<div className="flex items-start gap-4 flex-1">
											<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
												{step.icon}
											</div>
											<div className="flex-1">
												<h3 className="text-xl font-bold text-foreground mb-2">
													Card {step.id}: {step.title}
												</h3>
												{expandedCard === step.id && (
													<p className="text-muted-foreground mt-4">
														{step.description}
													</p>
												)}
											</div>
										</div>
										<div className="text-muted-foreground ml-4">
											{expandedCard === step.id ? (
												<ChevronUp className="w-5 h-5" />
											) : (
												<ChevronDown className="w-5 h-5" />
											)}
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Section 2: The Diagnosis - Content Bottlenecks */}
			<section className="py-32 px-4">
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
					</div>

					{/* 2x2 Problem Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
			</section>

			{/* Section 3: The Interactive Roster */}
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

			{/* Section 4: The Method - Onboarding Protocol */}
			<section className="py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							The Protocol for Activating Your Workforce.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							We follow a disciplined, two-step protocol to configure your
							workforce. This isn&apos;t about mapping your old process;
							it&apos;s about upgrading you to a new, superior operating system
							for content.
						</p>
					</div>

					{/* Two Side-by-Side Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Card className="bg-card-background border border-accent shadow-lg p-8">
							<div className="mb-6">
								<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-sm border border-accent/30">
									Card 1
								</span>
							</div>
							<h3 className="text-2xl font-bold text-foreground mb-4">
								Codify Your Brand DNA
							</h3>
							<p className="text-muted-foreground">
								First, we work with you to codify your core strategic
								assets—your brand voice, your non-negotiable messaging, your
								content pillars, and your platform requirements. This becomes
								the infallible set of instructions that ensures every asset your
								workforce produces is perfectly and consistently on-brand.
							</p>
						</Card>

						<Card className="bg-card-background border border-accent shadow-lg p-8">
							<div className="mb-6">
								<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-sm border border-accent/30">
									Card 2
								</span>
							</div>
							<h3 className="text-2xl font-bold text-foreground mb-4">
								Clone Your Expert Voices
							</h3>
							<p className="text-muted-foreground">
								Next, we create unique voice profiles for your key executives
								and subject matter experts. By analyzing their existing content,
								the workforce learns to generate new content that sounds
								authentically like them. This allows you to scale their
								influence and turn your entire team into a powerful, on-brand
								marketing force.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 5: The Choice - Economic Model */}
			<section className="py-32 px-4 bg-gradient-to-b from-accent/20 to-transparent">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							The New Economic Model for Content.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Stop funding a high-overhead cost center. Start investing in a
							scalable production asset. Our model fundamentally changes the
							relationship between your budget and your market impact.
						</p>
					</div>

					{/* Comparative Dashboard */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Traditional Model */}
						<Card className="bg-card-background border-2 border-red-500/30 shadow-lg p-8">
							<h3 className="text-xl font-bold text-foreground mb-6">
								Traditional Model
							</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Headcount</span>
									<span className="text-red-500 font-bold">$180k/year</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Freelancers</span>
									<span className="text-red-500 font-bold">$60k/year</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Tools</span>
									<span className="text-red-500 font-bold">$24k/year</span>
								</div>
								<div className="border-t border-red-500/30 pt-4 mt-4">
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">
											Monthly Output
										</span>
										<span className="text-foreground">20 assets</span>
									</div>
									<div className="flex justify-between items-center mt-2">
										<span className="text-muted-foreground font-bold">
											Cost Per Asset
										</span>
										<span className="text-red-500 font-bold text-xl">
											$1,100
										</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Novosapien Model */}
						<Card className="bg-card-background border-2 border-green-500/30 shadow-lg p-8">
							<h3 className="text-xl font-bold text-foreground mb-6">
								Novosapien Model
							</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">
										Workforce Subscription
									</span>
									<span className="text-green-500 font-bold">
										Elastic pricing
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">
										Additional Costs
									</span>
									<span className="text-green-500 font-bold">$0</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">
										Management Overhead
									</span>
									<span className="text-green-500 font-bold">Minimal</span>
								</div>
								<div className="border-t border-green-500/30 pt-4 mt-4">
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">
											Monthly Output
										</span>
										<span className="text-foreground">200+ assets</span>
									</div>
									<div className="flex justify-between items-center mt-2">
										<span className="text-muted-foreground font-bold">
											Cost Per Asset
										</span>
										<span className="text-green-500 font-bold text-xl">
											~$50
										</span>
									</div>
								</div>
							</div>
						</Card>
					</div>
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
