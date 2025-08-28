"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
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
	X,
	Database,
	Brain,
	Zap,
	FileText,
	Globe,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Users,
	AlertCircle,
	TrendingDown,
	Clock,
	Megaphone,
} from "lucide-react"

// The Method Section Component with Sticky Scroll
function MethodSection() {
	const [activeStep, setActiveStep] = useState(0)
	const stepRefs = useRef<(HTMLDivElement | null)[]>([])

	const methodSteps = [
		{
			id: "connect",
			label: "Step One",
			title: "Connect & Ingest",
			description:
				"We begin by plugging directly into your ecosystem—your website forms, marketing automation, and CRM—creating a single, unified pipeline that ensures no inbound lead is ever missed.",
			icon: <Database className="w-12 h-12 text-accent" />,
			visual: "Integration Flow",
		},
		{
			id: "blueprint",
			label: "Step Two",
			title: "Blueprint & Strategize",
			description:
				"For every lead, the workforce builds a deep intelligence blueprint. A strategy agent then analyzes this blueprint to map the prospect's pains to your value, architecting the optimal outreach plan.",
			icon: <Brain className="w-12 h-12 text-accent" />,
			visual: "Lead Blueprint",
		},
		{
			id: "execute",
			label: "Step Three",
			title: "Execute & Optimize",
			description:
				"Your workforce launches a relentless, multi-channel outreach. After every interaction, it analyzes the outcome and instantly optimizes its next move, constantly learning what works.",
			icon: <Zap className="w-12 h-12 text-accent" />,
			visual: "Engagement Timeline",
		},
		{
			id: "deliver",
			label: "Step Four",
			title: "Deliver & Brief",
			description:
				"Once a lead is qualified, the system seamlessly books an appointment in your team's calendar and delivers a complete executive summary, ensuring a perfect, intelligence-led handoff.",
			icon: <FileText className="w-12 h-12 text-accent" />,
			visual: "Meeting Brief",
		},
	]

	useEffect(() => {
		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			const viewportCenter = viewportHeight / 2

			let closestStep = 0
			let closestDistance = Infinity

			stepRefs.current.forEach((ref, index) => {
				if (!ref) return

				const rect = ref.getBoundingClientRect()
				const stepCenter = rect.top + rect.height / 2
				const distance = Math.abs(stepCenter - viewportCenter)

				if (distance < closestDistance) {
					closestDistance = distance
					closestStep = index
				}
			})

			if (closestDistance < viewportHeight / 2) {
				setActiveStep(closestStep)
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<section className="px-4">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-left sm:text-center mb-16">
					<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block mb-4">
						Our Method
					</span>
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
						A Disciplined Protocol for Delivering Results
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
						Your workforce follows a proven, four-step protocol to ensure every
						lead is converted with maximum efficiency and intelligence, from
						initial contact to the final handoff.
					</p>
				</div>

				{/* Mobile Layout - Simple cards with images */}
				<div className="block lg:hidden space-y-12">
					{methodSteps.map((step, index) => (
						<div key={step.id} className="space-y-4">
							<div>
								<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-xs border border-accent/30 inline-block mb-3">
									{step.label}
								</span>
								<h3 className="text-xl font-bold mb-3 text-foreground">
									{step.title}
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									{step.description}
								</p>
							</div>
							{/* Image for each step */}
							<div className="rounded-lg overflow-hidden bg-accent/5 p-6">
								{/* Light mode image */}
								<Image
									src={`/workforces/leads/step${index + 1}.svg`}
									alt={`${step.title} Visualization`}
									width={500}
									height={400}
									className="w-full h-auto max-h-[280px] object-contain dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src={`/workforces/leads/step${index + 1}-dark.svg`}
									alt={`${step.title} Visualization`}
									width={500}
									height={400}
									className="w-full h-auto max-h-[280px] object-contain hidden dark:block"
								/>
							</div>
						</div>
					))}
				</div>

				{/* Desktop Layout - Sticky Scroll (unchanged) */}
				<div className="relative hidden lg:block">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
						{/* Left Column - Scrolling Text */}
						<div>
							{methodSteps.map((step, index) => (
								<div
									key={step.id}
									ref={el => {
										stepRefs.current[index] = el
									}}
									className={`${
										index === 0 ? "min-h-[50vh]" : "min-h-screen"
									} flex items-center`}
								>
									<div
										className={`transition-all duration-500 ${
											activeStep === index
												? "opacity-100 scale-100"
												: "opacity-30 scale-95"
										}`}
									>
										<div className="mb-6">
											<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-sm border border-accent/30 inline-block">
												{step.label}
											</span>
										</div>
										<h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
											{step.title}
										</h3>
										<p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Right Column - Sticky Visual */}
						<div className="relative mt-64">
							<div className="sticky top-1/2 -translate-y-1/2">
								<div className="relative h-[500px] w-full flex items-center justify-center">
									{/* Step Images */}
									{methodSteps.map((step, index) => (
										<div
											key={step.id}
											className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
												activeStep === index
													? "opacity-100 scale-100 z-10"
													: "opacity-0 scale-95 z-0"
											}`}
										>
											{/* Light mode image */}
											<Image
												src={`/workforces/leads/step${index + 1}.svg`}
												alt={`${step.title} Visualization`}
												width={400}
												height={300}
												className="w-full h-auto max-h-full object-contain dark:hidden"
											/>
											{/* Dark mode image */}
											<Image
												src={`/workforces/leads/step${index + 1}-dark.svg`}
												alt={`${step.title} Visualization`}
												width={400}
												height={300}
												className="w-full h-auto max-h-full object-contain hidden dark:block"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default function LeadWorkforcePage() {
	const [activeTab, setActiveTab] = useState<
		"research" | "strategy" | "outreach"
	>("research")
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
	const [expandedFailure, setExpandedFailure] = useState<number | null>(null)

	const tabs = [
		{ id: "research", label: "Research & Planning" },
		{ id: "strategy", label: "Strategy & Analysis" },
		{ id: "outreach", label: "Outreach & Execution" },
	]

	const agents = {
		research: [
			{
				icon: <Search className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Building className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Gift className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Calendar className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Settings className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <LineChart className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Phone className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
				icon: <Mail className="w-5 h-5 sm:w-8 sm:h-8 text-[#A1BCD1] stroke-[1.5]" />,
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
		<div className="min-h-screen bg-background">
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
				<section className="pt-20 sm:pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-12 sm:mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-8 md:p-12">
							<div className="text-center mb-6 sm:mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									Inbound Sales Workforce
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight font-geist-sans">
									Never Lose an Inbound Lead Again.
								</h1>
							</div>
							<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed text-center max-w-3xl mx-auto px-2 sm:px-0">
								Deploy an autonomous workforce that converts your raw leads into
								qualified, sales-ready meetings, 24/7.
							</p>
							<div className="mt-6 sm:mt-8 text-center">
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
			</div>

			{/* Section 1: Part 1.B - The Explanation */}
			<section className="py-16 sm:py-32 px-4 bg-accent/40">
				<div className="max-w-8xl mx-auto px-4">
					{/* Section Header */}
					<div className="text-left sm:text-center mb-12">
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

						{/* Desktop Layout - Horizontal (unchanged) */}
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
			<section className="py-32 px-2 sm:px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-5xl mx-auto px-2 sm:px-4">
					<Card className="bg-card-background border border-accent shadow-lg rounded-xl p-4 sm:p-8">
						<div className="text-left sm:text-center mb-12">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
								Meet Your Team
							</span>
							<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mt-4">
								Meet Your Autonomous Sales Team
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto mt-4 leading-relaxed">
								Your workforce is not a monolith. It is a coordinated team of
								specialized AI agents, each a master of its domain, working in
								concert to deliver your outcome.
							</p>
						</div>

						{/* Mobile Layout - All agents in vertical list */}
						<div className="block sm:hidden space-y-6 -mx-2">
							{/* Research & Planning Section */}
							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">Research & Planning</h3>
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
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">Strategy & Analysis</h3>
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
								<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">Outreach & Execution</h3>
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
													tab.id as "research" | "strategy" | "outreach"
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
						</div>

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
			<section className="py-32 px-4">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<div className="text-left sm:text-center mb-16">
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
						{/* Container with funnel in center and cards around it */}
						<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-center">
							{/* Left Column - Two Cards */}
							<div className="space-y-6 lg:space-y-24">
								{/* Top Left - Failure of Speed */}
								<Card
									className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
									onClick={() =>
										setExpandedFailure(expandedFailure === 1 ? null : 1)
									}
								>
									<div className="flex items-start gap-3">
										<Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="text-foreground font-bold mb-2">
													1. The Failure of Speed
												</h3>
												<span className="text-muted-foreground text-xl">
													{expandedFailure === 1 ? "−" : "+"}
												</span>
											</div>
											<p className="text-muted-foreground text-sm">
												Slow follow-up costs you the deal before the
												conversation even begins.
											</p>
											{expandedFailure === 1 && (
												<div className="mt-4 pt-4 border-t border-red-500/20">
													<p className="text-muted-foreground text-sm mb-3">
														Industry data is unequivocal: the first responder
														wins the deal. Every hour of delay systematically
														degrades the value of your marketing investment.
													</p>
													<ul className="space-y-2 text-sm text-muted-foreground">
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															78% of customers buy from the company that
															responds first.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															A lead is 10x less likely to convert after the
															first hour.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															Your competitors are already engaged while
															you&apos;re still assigning the lead.
														</li>
													</ul>
												</div>
											)}
										</div>
									</div>
								</Card>

								{/* Bottom Left - Failure of Scale */}
								<Card
									className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
									onClick={() =>
										setExpandedFailure(expandedFailure === 3 ? null : 3)
									}
								>
									<div className="flex items-start gap-3">
										<Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="text-foreground font-bold mb-2">
													3. The Failure of Scale
												</h3>
												<span className="text-muted-foreground text-xl">
													{expandedFailure === 3 ? "−" : "+"}
												</span>
											</div>
											<p className="text-muted-foreground text-sm">
												Your growth is trapped in a linear, expensive cycle of
												hiring more headcount to handle more leads.
											</p>
											{expandedFailure === 3 && (
												<div className="mt-4 pt-4 border-t border-red-500/20">
													<p className="text-muted-foreground text-sm mb-3">
														Scaling with headcount is the most expensive and
														least efficient way to grow. It is a model of
														diminishing returns due to the high costs of hiring,
														training, and churn.
													</p>
													<ul className="space-y-2 text-sm text-muted-foreground">
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															The average SDR costs $75k-$90k per year, before
															they book a single meeting.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															It takes 3-6 months for a new hire to become fully
															productive.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															Annual SDR churn rates often exceed 30%, creating
															constant instability.
														</li>
													</ul>
												</div>
											)}
										</div>
									</div>
								</Card>
							</div>

							{/* Center Column - Funnel Image (Desktop only) */}
							<div className="hidden lg:flex justify-center px-4">
								<div className="relative max-w-xs w-full">
									{/* Light mode funnel */}
									<Image
										src="/workforces/leads/funnel.svg"
										alt="Inbound Funnel Diagram"
										width={300}
										height={400}
										className="w-full h-auto dark:hidden"
									/>
									{/* Dark mode funnel */}
									<Image
										src="/workforces/leads/funnel-dark.svg"
										alt="Inbound Funnel Diagram"
										width={300}
										height={400}
										className="w-full h-auto hidden dark:block"
									/>
								</div>
							</div>

							{/* Right Column - Two Cards */}
							<div className="space-y-6 lg:space-y-24">
								{/* Top Right - Failure of Persistence & Quality */}
								<Card
									className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
									onClick={() =>
										setExpandedFailure(expandedFailure === 2 ? null : 2)
									}
								>
									<div className="flex items-start gap-3">
										<AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="text-foreground font-bold mb-2">
													2. The Failure of Persistence & Quality
												</h3>
												<span className="text-muted-foreground text-xl">
													{expandedFailure === 2 ? "−" : "+"}
												</span>
											</div>
											<p className="text-muted-foreground text-sm">
												Inconsistent nurturing and dropped follow-ups allow the
												majority of your pipeline to go cold.
											</p>
											{expandedFailure === 2 && (
												<div className="mt-4 pt-4 border-t border-red-500/20">
													<p className="text-muted-foreground text-sm mb-3">
														The average sale requires 8-12 touchpoints, yet the
														average salesperson gives up after 2. This gap is
														where the majority of your future revenue is lost.
													</p>
													<ul className="space-y-2 text-sm text-muted-foreground">
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															80% of sales require five or more follow-ups to
															close.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															44% of salespeople give up after one
															&ldquo;no.&rdquo;
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															Inconsistent messaging and context erodes brand
															trust with every touchpoint.
														</li>
													</ul>
												</div>
											)}
										</div>
									</div>
								</Card>

								{/* Bottom Right - Failure of Intelligence */}
								<Card
									className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
									onClick={() =>
										setExpandedFailure(expandedFailure === 4 ? null : 4)
									}
								>
									<div className="flex items-start gap-3">
										<TrendingDown className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="text-foreground font-bold mb-2">
													4. The Failure of Intelligence
												</h3>
												<span className="text-muted-foreground text-xl">
													{expandedFailure === 4 ? "−" : "+"}
												</span>
											</div>
											<p className="text-muted-foreground text-sm">
												Without systemic learning, your team is forced to rely
												on guesswork, repeating the same mistakes.
											</p>
											{expandedFailure === 4 && (
												<div className="mt-4 pt-4 border-t border-red-500/20">
													<p className="text-muted-foreground text-sm mb-3">
														Without a systemic way to learn from every
														interaction, your team is forced to rely on gut feel
														and anecdotal evidence, repeating the same mistakes
														indefinitely.
													</p>
													<ul className="space-y-2 text-sm text-muted-foreground">
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															Your best and worst performers are using different
															playbooks, with no way to codify what works.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															Sales and Marketing are misaligned due to a lack
															of objective data on lead quality.
														</li>
														<li className="flex items-start">
															<span className="text-muted-foreground mr-2">
																•
															</span>
															High-stakes strategic decisions are being made on
															the basis of an unreliable pipeline.
														</li>
													</ul>
												</div>
											)}
										</div>
									</div>
								</Card>
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
					<div className="text-left sm:text-center mb-12">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
							Proven Results
						</span>
						<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mt-4">
							Redefine Your Team&apos;s ROI
						</h2>
					</div>

					{/* Metrics Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">85%</div>
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
							<p className="text-foreground text-xs sm:text-sm">Leads Contacted</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-4 sm:p-6 text-center">
							<div className="text-2xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
								24/7
							</div>
							<p className="text-foreground text-xs sm:text-sm">Always-On Operations</p>
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
							alt="Before and After Comparison"
							width={1400}
							height={700}
							className="w-full max-w-7xl h-auto dark:hidden"
						/>
						{/* Dark mode image */}
						<Image
							src="/workforces/leads/before-after-dark.svg"
							alt="Before and After Comparison"
							width={1400}
							height={700}
							className="w-full max-w-7xl h-auto hidden dark:block"
						/>
					</div>
				</div>
			</section>

			{/* Section 7: Final CTA */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-6 sm:p-12 text-left sm:text-center bg-card-background backdrop-blur-sm border-accent/20">
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

						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl sm:mx-auto mb-6 sm:mb-8 leading-relaxed">
							Join companies that are converting 3.5x more leads with an
							autonomous Digital Workforce. See the impact in your pipeline
							within days.
						</p>

						<div className="flex justify-start sm:justify-center">
							<a
								href="https://cal.com/george-westbrook-novosapien/30min"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
									Deploy This Workforce
								</Button>
							</a>
						</div>
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
												<span className="text-accent mr-2 sm:mr-3 mt-0.5 sm:mt-1">•</span>
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
