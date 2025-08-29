"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
	X,
	ChevronLeft,
	ChevronRight,
	Users,
	AlertCircle,
	TrendingDown,
	Clock,
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

interface LeadPageClientProps {
	agents: {
		research: Agent[]
		strategy: Agent[]
		outreach: Agent[]
	}
}

// Agent Roster Interactive Section
export function AgentRosterClient({ agents }: LeadPageClientProps) {
	const [activeTab, setActiveTab] = useState<
		"research" | "strategy" | "outreach"
	>("research")
	const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)

	const tabs = [
		{ id: "research", label: "Research & Planning" },
		{ id: "strategy", label: "Strategy & Analysis" },
		{ id: "outreach", label: "Outreach & Execution" },
	]

	return (
		<>
			{/* Mobile Layout - All agents in vertical list */}
			<div className="block sm:hidden space-y-6 -mx-2">
				{/* Research & Planning Section */}
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
						Research & Planning
					</h3>
					<div className="space-y-2 px-1">
						{agents.research.map((agent, index) => (
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

				{/* Strategy & Analysis Section */}
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
						Strategy & Analysis
					</h3>
					<div className="space-y-2 px-1">
						{agents.strategy.map((agent, index) => (
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

				{/* Outreach & Execution Section */}
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
						Outreach & Execution
					</h3>
					<div className="space-y-2 px-1">
						{agents.outreach.map((agent, index) => (
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

			{/* Desktop Layout - Tab Navigation and Grid */}
			<div className="hidden sm:block">
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
								aria-label={`View ${tab.label} agents`}
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
								const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
								const prevIndex =
									currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
								setActiveTab(
									tabs[prevIndex].id as "research" | "strategy" | "outreach"
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
										role="button"
										aria-label={`Learn more about ${agent.name}`}
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
								const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
								const nextIndex = (currentIndex + 1) % tabs.length
								setActiveTab(
									tabs[nextIndex].id as "research" | "strategy" | "outreach"
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

			{/* Agent Details Modal */}
			{selectedAgent && (
				<>
					{/* Backdrop with blur */}
					<div
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in"
						onClick={() => setSelectedAgent(null)}
						aria-hidden="true"
					/>

					{/* Modal Content */}
					<div
						className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none"
						role="dialog"
						aria-modal="true"
						aria-labelledby="agent-modal-title"
					>
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
										<h2
											id="agent-modal-title"
											className="text-foreground text-lg sm:text-2xl font-bold leading-tight"
										>
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
									aria-label="Close agent details"
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

// Failure Cards Interactive Section - Now returns individual cards
export function FailureCardsClient() {
	const [expandedFailure, setExpandedFailure] = useState<number | null>(null)

	const renderCard = (failure: {
		id: number
		title: string
		icon: React.ReactNode
		summary: string
		details: string
		points: string[]
	}) => (
		<Card
			key={failure.id}
			className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
			onClick={() =>
				setExpandedFailure(expandedFailure === failure.id ? null : failure.id)
			}
			role="button"
			aria-expanded={expandedFailure === failure.id}
			aria-label={`${expandedFailure === failure.id ? "Collapse" : "Expand"} details about ${failure.title}`}
		>
			<div className="flex items-start gap-3">
				{failure.icon}
				<div className="flex-1">
					<div className="flex items-center justify-between">
						<h3 className="text-foreground font-bold mb-2">
							{failure.id}. {failure.title}
						</h3>
						<span className="text-muted-foreground text-xl" aria-hidden="true">
							{expandedFailure === failure.id ? "−" : "+"}
						</span>
					</div>
					<p className="text-muted-foreground text-sm">{failure.summary}</p>
					{expandedFailure === failure.id && (
						<div className="mt-4 pt-4 border-t border-red-500/20">
							<p className="text-muted-foreground text-sm mb-3">
								{failure.details}
							</p>
							<ul className="space-y-2 text-sm text-muted-foreground">
								{failure.points.map((point, idx) => (
									<li key={idx} className="flex items-start">
										<span className="text-muted-foreground mr-2">•</span>
										{point}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</Card>
	)

	// For mobile, return all cards in a single column
	const mobileView = (
		<div className="block lg:hidden space-y-6">
			{renderCard({
				id: 1,
				title: "The Failure of Speed",
				icon: <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
				summary:
					"Slow follow-up costs you the deal before the conversation even begins.",
				details:
					"Industry data is unequivocal: the first responder wins the deal. Every hour of delay systematically degrades the value of your marketing investment.",
				points: [
					"78% of customers buy from the company that responds first.",
					"A lead is 10x less likely to convert after the first hour.",
					"Your competitors are already engaged while you're still assigning the lead.",
				],
			})}
			{renderCard({
				id: 2,
				title: "The Failure of Persistence & Quality",
				icon: (
					<AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
				),
				summary:
					"Inconsistent nurturing and dropped follow-ups allow the majority of your pipeline to go cold.",
				details:
					"The average sale requires 8-12 touchpoints, yet the average salesperson gives up after 2. This gap is where the majority of your future revenue is lost.",
				points: [
					"80% of sales require five or more follow-ups to close.",
					'44% of salespeople give up after one "no."',
					"Inconsistent messaging and context erodes brand trust with every touchpoint.",
				],
			})}
			{renderCard({
				id: 3,
				title: "The Failure of Scale",
				icon: <Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
				summary:
					"Your growth is trapped in a linear, expensive cycle of hiring more headcount to handle more leads.",
				details:
					"Scaling with headcount is the most expensive and least efficient way to grow. It is a model of diminishing returns due to the high costs of hiring, training, and churn.",
				points: [
					"The average SDR costs $75k-$90k per year, before they book a single meeting.",
					"It takes 3-6 months for a new hire to become fully productive.",
					"Annual SDR churn rates often exceed 30%, creating constant instability.",
				],
			})}
			{renderCard({
				id: 4,
				title: "The Failure of Intelligence",
				icon: (
					<TrendingDown className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
				),
				summary:
					"Without systemic learning, your team is forced to rely on guesswork, repeating the same mistakes.",
				details:
					"Without a systemic way to learn from every interaction, your team is forced to rely on gut feel and anecdotal evidence, repeating the same mistakes indefinitely.",
				points: [
					"Your best and worst performers are using different playbooks, with no way to codify what works.",
					"Sales and Marketing are misaligned due to a lack of objective data on lead quality.",
					"High-stakes strategic decisions are being made on the basis of an unreliable pipeline.",
				],
			})}
		</div>
	)

	// Desktop cards data
	const card1 = {
		id: 1,
		title: "The Failure of Speed",
		icon: <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
		summary:
			"Slow follow-up costs you the deal before the conversation even begins.",
		details:
			"Industry data is unequivocal: the first responder wins the deal. Every hour of delay systematically degrades the value of your marketing investment.",
		points: [
			"78% of customers buy from the company that responds first.",
			"A lead is 10x less likely to convert after the first hour.",
			"Your competitors are already engaged while you're still assigning the lead.",
		],
	}

	const card2 = {
		id: 2,
		title: "The Failure of Persistence & Quality",
		icon: <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
		summary:
			"Inconsistent nurturing and dropped follow-ups allow the majority of your pipeline to go cold.",
		details:
			"The average sale requires 8-12 touchpoints, yet the average salesperson gives up after 2. This gap is where the majority of your future revenue is lost.",
		points: [
			"80% of sales require five or more follow-ups to close.",
			'44% of salespeople give up after one "no."',
			"Inconsistent messaging and context erodes brand trust with every touchpoint.",
		],
	}

	const card3 = {
		id: 3,
		title: "The Failure of Scale",
		icon: <Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
		summary:
			"Your growth is trapped in a linear, expensive cycle of hiring more headcount to handle more leads.",
		details:
			"Scaling with headcount is the most expensive and least efficient way to grow. It is a model of diminishing returns due to the high costs of hiring, training, and churn.",
		points: [
			"The average SDR costs $75k-$90k per year, before they book a single meeting.",
			"It takes 3-6 months for a new hire to become fully productive.",
			"Annual SDR churn rates often exceed 30%, creating constant instability.",
		],
	}

	const card4 = {
		id: 4,
		title: "The Failure of Intelligence",
		icon: <TrendingDown className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />,
		summary:
			"Without systemic learning, your team is forced to rely on guesswork, repeating the same mistakes.",
		details:
			"Without a systemic way to learn from every interaction, your team is forced to rely on gut feel and anecdotal evidence, repeating the same mistakes indefinitely.",
		points: [
			"Your best and worst performers are using different playbooks, with no way to codify what works.",
			"Sales and Marketing are misaligned due to a lack of objective data on lead quality.",
			"High-stakes strategic decisions are being made on the basis of an unreliable pipeline.",
		],
	}

	// Desktop layout - return the proper 3-column structure with left and right cards
	const desktopView = (
		<div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center relative">
			{/* Left Column - Cards 1 and 3 */}
			<div className="space-y-24">
				{renderCard(card1)}
				{renderCard(card3)}
			</div>

			{/* Center Column - Empty space for funnel (will be added by parent) */}
			<div></div>

			{/* Right Column - Cards 2 and 4 */}
			<div className="space-y-24">
				{renderCard(card2)}
				{renderCard(card4)}
			</div>
		</div>
	)

	return (
		<>
			{mobileView}
			{desktopView}
		</>
	)
}
