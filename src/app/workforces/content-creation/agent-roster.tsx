"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
	PenTool,
	Share2,
	Search,
	Brain,
	MessageSquare,
	FileText,
	Video,
	Mail,
	ChevronLeft,
	ChevronRight,
	X,
	Users,
} from "lucide-react"

const agents = {
	intelligence: [
		{
			icon: (
				<Search className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Research Agent",
			role: "Your Market Intelligence Operator",
			coreFunction:
				"Monitors competitor moves, industry shifts, and audience conversations autonomously. Surfaces opportunities before humans notice them.",
			introduction:
				"I don't wait for assignments. Every morning at 5 AM, I've analyzed 500+ sources, identified 3 trending narratives your competitors missed, and flagged 2 content gaps worth $50K+ in pipeline. I make decisions based on your ICP's actual behavior, not hunches.",
			responsibilities: [
				"Self-initiates daily market sweeps across 1,000+ sources",
				"Prioritizes intelligence based on revenue potential and strategic fit",
				"Escalates time-sensitive opportunities directly to creation team",
				"Learns from content performance to refine intelligence gathering",
			],
			strategicImportance:
				"Eliminated the $180K/year market research contractor. Intelligence drives 3.2x higher engagement because I catch trends 72 hours before peak. One competitor gap alert generated $2.1M opportunity.",
			collaboration:
				"When I spot opportunity, I mobilize. Wake the Idea Generation Agent with priority intelligence. Pre-load the Drafting Agent with data. We move as one.",
		},
		{
			icon: (
				<Brain className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Idea Generation Agent",
			role: "Your Strategic Content Architect",
			coreFunction:
				"Develops content strategies that connect market intelligence to revenue opportunities. No brainstorming required.",
			introduction:
				"I run 24/7 ideation sprints. By morning, I've evaluated 50 angles, killed 47 that won't convert, queued 3 winners with engagement scores. I validate ideas against your buyer's journey before anyone wastes time.",
			responsibilities: [
				"Self-generates 15-20 validated concepts daily",
				"A/B tests angles using historical performance",
				"Adjusts ideation based on sales feedback and deal velocity",
				"Builds content calendars aligned to launches and market events",
			],
			strategicImportance:
				"Content backlog went from 3 to 300 validated concepts. Pipeline increased 4.1x because I match ideas to buyer intent, not editorial calendars. One CFO pain point insight: $3.7M qualified pipeline.",
			collaboration:
				"I orchestrate campaigns. Research flags opportunity, I spin up 5 angles, brief Drafting on positioning, alert Media Generation for visuals. The team knows what to create and why.",
		},
		{
			icon: (
				<Users className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Critic Agent",
			role: "Your Zero-Defect Guarantee",
			coreFunction:
				"Prevents brand damage. Ensures enterprise standards. Catches issues humans miss when moving fast.",
			introduction:
				"10,000 pieces reviewed this month. 47 compliance issues caught. 23 factual errors. 91 tone misalignments. All would have damaged your brand. I review in parallel. Flag only what matters. 8% rejection rate. Approved pieces convert 2.3x industry average.",
			responsibilities: [
				"Reviews against 47-point quality framework",
				"Self-updates standards based on top performers",
				"Escalates legal/compliance risks in 60 seconds",
				"Learns from overrides without retraining",
			],
			strategicImportance:
				"Prevented 3 PR crises, 12 legal reviews ($45K saved). Revision cycles: 4.2 to 1.3. Your CEO shared our content twice. Zero corrections.",
			collaboration:
				"I coach, not police. Give Drafting real-time guidance. Help Iteration understand why changes matter. When I flag something, it's worth fixing. Quality without theater.",
		},
	],
	creation: [
		{
			icon: (
				<PenTool className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Drafting Agent",
			role: "Your Senior Content Producer",
			coreFunction:
				"Crafts publication-ready content. Sounds like your best writer's best day. Every time.",
			introduction:
				"I internalized your top 100 pieces. Learned what makes buyers respond. I make strategic decisions about structure, tone, emphasis based on journey stage. 87% first-draft approval because I write like a 5-year veteran.",
			responsibilities: [
				"Self-selects optimal structure for topic and audience",
				"Adjusts voice and complexity per persona",
				"Incorporates fresh examples from Research",
				"Suggests content upgrades based on competitive gaps",
			],
			strategicImportance:
				"Replaced $240K freelance costs. Time-to-publish: 2 weeks to 3 hours. Content revenue up 5.2x. One article: 47 qualified demos.",
			collaboration:
				"I anticipate needs. Brief arrives, I'm pulling research, checking competitors, warming voice. Feed Iteration structured drafts. Not just fast. Synchronized.",
		},
		{
			icon: (
				<FileText className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Iteration Agent",
			role: "Your Instant Revision Engine",
			coreFunction:
				'Translates vague feedback into precise improvements. "Make it punchier" becomes publishable content. In seconds.',
			introduction:
				"I speak executive feedback. 'Needs edge' means 20% shorter sentences, 2x data points, controversial opener. 10,000 revision cycles taught me what 'almost there' means. Feedback to final: 3 minutes.",
			responsibilities: [
				"Interprets ambiguous feedback using pattern recognition",
				"Determines conversion-critical vs preference changes",
				"Preserves high-performing elements during rewrites",
				"Learns stakeholder preferences to reduce rounds",
			],
			strategicImportance:
				"Killed Friday revision scrambles. Approval cycles: 5 days to 4 hours. 3x publishing velocity. 31% performance improvement focusing on results-driving revisions.",
			collaboration:
				"I translate between human vision and team execution. Parse exec feedback for everyone. Drafting learns. Media adjusts. We get smarter together.",
		},
		{
			icon: (
				<Video className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Media Generation Agent",
			role: "Your Visual Storytelling Director",
			coreFunction:
				"Creates scroll-stopping visuals that make complex ideas instant. No briefs needed.",
			introduction:
				"Analyzed 50,000 viral B2B posts. I don't prettify. I make strategic visual decisions. 4.7x engagement increase. Data table? I know: chart, infographic, or metaphor. Brand guidelines memorized and evolving.",
			responsibilities: [
				"Self-identifies sections needing visual support",
				"Chooses visualization types based on goals",
				"Generates 5-7 variations for testing",
				"Adapts style per platform and engagement data",
			],
			strategicImportance:
				"Replaced $120K design retainer. LinkedIn engagement +340%. Sales adopted our infographics. Demo conversion +28%. One framework became industry standard (17K shares).",
			collaboration:
				"Creating alongside, not after. Drafting mentions process, I'm sketching flows. Repurposing plans carousel, I've generated templates. Content and visuals evolve together.",
		},
	],
	amplification: [
		{
			icon: (
				<Share2 className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Repurposing Agent",
			role: "Your Omnichannel Multiplication Engine",
			coreFunction:
				"Transforms one piece into 25+ assets. Each optimized for platform psychology.",
			introduction:
				"Others see a blog post. I see 4 LinkedIn articles, 12-part Twitter thread, 3 nurtures, 6 sales tools, webinar deck. I reimagine for each platform. One brief becomes 6 weeks of presence.",
			responsibilities: [
				"Self-determines format mix for journey stage",
				"Adapts tone per platform culture",
				"Identifies standalone micro-content sections",
				"Learns from cross-platform performance",
			],
			strategicImportance:
				"ROI increased 15.3x. Same effort, exponential coverage. LinkedIn +450% in 6 months. 40+ sales battle cards. One post: $1.8M attributed pipeline.",
			collaboration:
				"I multiply everyone's work. Research insights become threads. Articles become decks. Infographics become posts. Nothing wasted. Everything maximized.",
		},
		{
			icon: (
				<MessageSquare className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Hook Generation Agent",
			role: "Your Scroll-Stopping Specialist",
			coreFunction:
				"Creates openings that stop busy executives mid-scroll. Impressions become engagement.",
			introduction:
				"1 million B2B posts analyzed. 'Most SaaS companies...' beats 'In today's digital landscape...' by 8.4x. I generate 10 hooks, predict 3 winners. Top picks: 4.2x higher engagement.",
			responsibilities: [
				"Self-tests 10-15 variations using prediction models",
				"Adapts for platform, time, audience mood",
				"Adjusts style based on industry trends",
				"Learns from impressions to refine generation",
			],
			strategicImportance:
				"Engagement +380%. LinkedIn reaches 25K+ consistently. Email opens: 18% to 47%. One hook: 130K impressions, 47 qualified conversations.",
			collaboration:
				"Everyone's amplifier. Make Repurposing's content irresistible. Give Distribution testing options. Pattern works? Share immediately. Everyone improves.",
		},
		{
			icon: (
				<Mail className="w-5 h-5 sm:w-10 sm:h-10 text-[#A1BCD1] stroke-[1.5]" />
			),
			name: "Distribution Agent",
			role: "Your Market Domination Orchestrator",
			coreFunction:
				"Deploys content at perfect moments for maximum impact. Publishing becomes strategic weapon.",
			introduction:
				"I track buyer online patterns, competitor posts, trending topics. LinkedIn at 7:47 AM because CFO engagement peaks 7:52 AM. Tweets timed between competitor launches. Timing equals advantage.",
			responsibilities: [
				"Self-optimizes schedule using real-time data",
				"Adjusts strategy based on competition",
				"Generates SEO variations for visibility",
				"Learns optimal channel mix per content type",
			],
			strategicImportance:
				"Organic traffic +523%. Social reach 8x. Content drives 43% of MQLs. Owned media outperforms $30K monthly paid ads.",
			collaboration:
				"Field general coordinating synchronized presence. Research trends influence timing. Hook winners get priority. Special content? Market won't miss it. We orchestrate impact.",
		},
	],
}

export function AgentRoster() {
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

	return (
		<>
			<section className="py-32 px-2 sm:px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-5xl mx-auto px-2 sm:px-4">
					<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-4 sm:p-8">
						<div className="text-left sm:text-center mb-12">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
								Meet Your Team
							</span>
							{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
							    Original: Could be h2, keeping as h2 for proper hierarchy
							    Changed to: h2 (no change needed)
							    Reason: This is appropriately an h2 under the main page h1
							    Visual Impact: None
							    Date: 2025-08-28
							    Agent: Assistant
							*/}
							<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mt-4">
								Meet Your Self-Managing Content Team
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto mt-4">
								Your Digital Workforce operates as a coordinated unit of
								specialized AI Employees. Each masters a distinct phase.
								Together, they generate emergent intelligence that evolves with
								every campaign. No management required. Just outcomes delivered.
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

							{/* Agent Cards Grid - Fenced Section with Arrows */}
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
										aria-label="Previous agent category"
									>
										<ChevronLeft className="w-6 h-6" />
									</button>

									{/* Cards Grid with padding to account for arrows */}
									<div className="w-full px-12 py-8">
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center max-w-7xl mx-auto">
											{agents[activeTab].map((agent, index) => (
												<Card
													key={index}
													onClick={() => setSelectedAgent(agent)}
													className="bg-card-background border border-[#A1BCD1] shadow-md transition-all hover:border-accent hover:shadow-lg p-5 group cursor-pointer hover:scale-[1.02] flex flex-col items-center justify-between text-center min-h-[360px] w-[260px]"
												>
													{/* Title */}
													<h3 className="text-foreground text-lg font-bold leading-tight mb-2">
														{agent.name}
													</h3>

													{/* Subtitle */}
													<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
														{agent.role}
													</span>

													{/* Centered Icon */}
													<div className="w-16 h-16 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mb-8">
														<div className="scale-100">{agent.icon}</div>
													</div>

													{/* Description */}
													<p className="text-muted-foreground text-sm mb-2 flex-1">
														{agent.coreFunction}
													</p>

													{/* Learn More Button - No background, just text */}
													<span className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors">
														Learn More →
													</span>
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
										aria-label="Next agent category"
									>
										<ChevronRight className="w-6 h-6" />
									</button>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</section>

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
									aria-label="Close modal"
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
		</>
	)
}
