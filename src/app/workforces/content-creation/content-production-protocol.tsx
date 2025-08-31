import { Card } from "@/components/ui/card"

const protocolStages = [
	{
		id: "brief",
		number: "1",
		headline: "Brief to Blueprint",
		description: `You give us strategic direction. The workforce transforms it into a complete campaign blueprint enriched with competitor intelligence, untapped opportunities, and platform-specific execution strategies. Your team shapes the final direction. The workforce delivers at scale.`,
		textPosition: "left",
		mockupAlt: "Mission Planner UI showing brief enrichment process",
	},
	{
		id: "creation",
		number: "2",
		headline: "Creation Through Collaboration",
		description: `The workforce orchestrates specialized agents. Drafters create. Critics refine. Perfectors polish. When you provide feedback, the system implements instantly and learns your preferences. What used to take 5 revision cycles now takes 1. Time-to-market drops by 10x.`,
		textPosition: "right",
		mockupAlt: "Iteration Studio UI showing draft refinement and feedback",
	},
	{
		id: "amplification",
		number: "3",
		headline: "One Piece Becomes Everywhere",
		description: `One pillar article transforms into 20+ coordinated assets. Each optimized for its platform-specific psychology. LinkedIn's professional tone. Twitter's punchy threads. Instagram's visual hooks. The workforce knows what works where and executes accordingly.`,
		textPosition: "left",
		mockupAlt: "Amplification Dashboard showing content derivatives",
	},
	{
		id: "analysis",
		number: "4",
		headline: "Performance Becomes Predictive Intelligence",
		description: `The workforce monitors cross-platform performance continuously. Identifies patterns humans miss. Self-adjusts future strategies—topics, timing, formats. Every campaign makes the next one stronger. Compound intelligence that grows without limits.`,
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

export function ContentProductionProtocol() {
	return (
		<div className="bg-accent/40">
			{/* Title Section */}
			<section className="py-12 sm:py-16 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-left sm:text-center">
						{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
						    Original: Would be h2, but keeping as h2 for proper hierarchy
						    Changed to: h2 (no change needed)
						    Reason: This is appropriately an h2 under the main page h1
						    Visual Impact: None
						    Date: 2025-08-28
						    Agent: Assistant
						*/}
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							The Autonomous Content Lifecycle
						</h2>
						<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
							Your workforce operates through four self-managing stages. You
							provide the mission. The workforce delivers the outcome. No
							hand-holding between stages. No project management. Just
							relentless execution.
						</p>
					</div>
				</div>
			</section>

			{/* Stages */}
			{protocolStages.map(stage => (
				<section key={stage.id} className=" sm:py-24 px-4 sm:px-6 lg:px-20">
					<div className="py-6 max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
							{/* Text Content */}
							<div
								className={`${stage.textPosition === "right" ? "lg:order-2" : ""}`}
							>
								<div className="space-y-3 sm:space-y-6">
									<div className="inline-block">
										<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
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
