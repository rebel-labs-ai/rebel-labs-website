"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
	Search,
	Building,
	Gift,
	Calendar,
	Settings,
	LineChart,
	Phone,
	Mail,
	X,
	ChevronLeft,
	ChevronRight,
} from "lucide-react"

interface Agent {
	icon: React.ReactNode
	name: string
	role: string
	coreFunction: string
	introduction: string
	responsibilities: string[]
	strategicImportance: string
	collaboration: string
}

export function AgentRoster() {
	const [activeTab, setActiveTab] = useState<
		"research" | "strategy" | "outreach"
	>("research")
	const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)

	const tabs = [
		{ id: "research", label: "Research & Planning" },
		{ id: "strategy", label: "Strategy & Analysis" },
		{ id: "outreach", label: "Outreach & Execution" },
	]

	const agents = {
		research: [
			{
				icon: <Search className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Building className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Gift className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Calendar className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Settings className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <LineChart className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Phone className="w-8 h-8 text-[#A1BCD1]" />,
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
				icon: <Mail className="w-8 h-8 text-[#A1BCD1]" />,
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

	return (
		<section className="py-32 px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
			<div className="max-w-5xl mx-auto px-4">
				<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-8">
					<div className="text-center mb-12">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
							Meet Your Team
						</span>
						<h2 className="text-foreground text-4xl font-bold tracking-tight mt-4">
							Meet Your Autonomous Sales Team
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
							Your workforce is not a monolith. It is a coordinated team of
							specialized AI agents, each a master of its domain, working in
							concert to deliver your outcome.
						</p>
					</div>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-12">
						<div className="inline-flex bg-background border border-accent/30 rounded-lg p-1">
							{tabs.map(tab => (
								<button
									key={tab.id}
									onClick={() =>
										setActiveTab(tab.id as "research" | "strategy" | "outreach")
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
										tabs[prevIndex].id as "research" | "strategy" | "outreach"
									)
								}}
								className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
								aria-label="Previous tab"
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
										tabs[nextIndex].id as "research" | "strategy" | "outreach"
									)
								}}
								className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-accent/30 text-muted-foreground hover:text-foreground hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
								aria-label="Next tab"
							>
								<ChevronRight className="w-6 h-6" />
							</button>
						</div>
					</div>

					{/* Collaborative Work Section */}
					<div className="mt-16">
						<div className="text-center mb-8">
							<h3 className="text-foreground text-2xl font-bold mb-4">
								How They Work Together
							</h3>
							<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
								Your roster operates as a unified team, with each agent playing
								a critical role in the lead conversion process. They communicate
								in real-time, share insights, and coordinate actions to maximize
								conversion rates.
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
									Learn from every interaction to optimize conversion strategies
									over time
								</p>
							</div>
						</div>
					</div>
				</Card>
			</div>

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
		</section>
	)
}
