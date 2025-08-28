"use client"

import { useState } from "react"
import {
	ChevronLeft,
	ChevronRight,
	Search,
	Brain,
	Users,
	PenTool,
	FileText,
	Video,
	Share2,
	MessageSquare,
	Mail,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function AgentTeamCarousel() {
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
				icon: <Search className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Brain className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Users className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <PenTool className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <FileText className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Video className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Share2 className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <MessageSquare className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Mail className="w-8 h-8 text-[#A1BCD1]" />,
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
		<>
			{/* Tab Navigation */}
			<div className="flex justify-center mb-12">
				<div className="inline-flex bg-background border border-accent/30 rounded-lg p-1">
					{tabs.map(tab => (
						<button
							key={tab.id}
							onClick={() =>
								setActiveTab(
									tab.id as "intelligence" | "creation" | "amplification"
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
							const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
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
							const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
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

			{/* Agent Detail Modal */}
			{selectedAgent && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
					onClick={() => setSelectedAgent(null)}
				>
					<Card
						className="bg-card-background border border-accent shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
						onClick={e => e.stopPropagation()}
					>
						<button
							onClick={() => setSelectedAgent(null)}
							className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
						>
							✕
						</button>

						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
								{selectedAgent.icon}
							</div>
							<div>
								<h3 className="text-2xl font-bold text-foreground">
									{selectedAgent.name}
								</h3>
								<p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
									{selectedAgent.role}
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<div>
								<h4 className="text-lg font-semibold text-foreground mb-2">
									Introduction
								</h4>
								<p className="text-muted-foreground">
									{selectedAgent.introduction}
								</p>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-foreground mb-2">
									Core Responsibilities
								</h4>
								<ul className="list-disc list-inside space-y-1 text-muted-foreground">
									{selectedAgent.responsibilities.map((resp, idx) => (
										<li key={idx}>{resp}</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-foreground mb-2">
									Strategic Importance
								</h4>
								<p className="text-muted-foreground">
									{selectedAgent.strategicImportance}
								</p>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-foreground mb-2">
									Collaboration
								</h4>
								<p className="text-muted-foreground">
									{selectedAgent.collaboration}
								</p>
							</div>
						</div>
					</Card>
				</div>
			)}
		</>
	)
}
