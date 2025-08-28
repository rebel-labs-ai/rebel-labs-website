"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import {
	Brain,
	ArrowDown,
	Layers,
	Target,
	TrendingUp,
	BarChart3,
	Search,
} from "lucide-react"
import { ForgeMockup } from "./forge-mockup"
import { MissionControlMockup } from "./mission-control-mockup"

// Scrollytelling component for Section 3
function EngagementProtocol() {
	const [activePhase, setActivePhase] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)
	const phaseRefs = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			const viewportCenter = viewportHeight / 2

			// Find the phase that's most centered in the viewport
			let closestPhase = 0
			let closestDistance = Infinity

			phaseRefs.current.forEach((ref, index) => {
				if (!ref) return

				const rect = ref.getBoundingClientRect()
				const phaseCenter = rect.top + rect.height / 2
				const distance = Math.abs(phaseCenter - viewportCenter)

				// Update if this phase is closer to center than previous closest
				if (distance < closestDistance) {
					closestDistance = distance
					closestPhase = index
				}
			})

			// Only update if the closest phase is actually visible
			if (closestDistance < viewportHeight / 2) {
				setActivePhase(closestPhase)
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll() // Initial check

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const phases = [
		{
			indicator: "Phase One",
			title: "Strategic Intent to Architectural Blueprint",
			description:
				"We begin with an intensive discovery sprint. Our senior architects and your subject matter experts co-author the definitive architectural blueprint, defining the mission, mapping your unique workflows, and specifying the precise business outcomes.",
			mockup: <MissionArchitectMockup />,
		},
		{
			indicator: "Phase Two",
			title: "Blueprint to Functional Asset",
			description:
				"This is the core build-out. Operating in a series of two-week engineering sprints, we forge the components of your workforce. Each sprint concludes with a joint review to demonstrate tangible progress and gather feedback, ensuring a transparent and collaborative process.",
			mockup: <ForgeMockup />,
		},
		{
			indicator: "Phase Three",
			title: "Functional Asset to Full Autonomy",
			description:
				"The final phase focuses on seamless integration and activation. We deploy the forged workforce into your live environment, handle all technical setup, and conclude with the final handover where the workforce is switched to full autonomy, ready to execute its mission.",
			mockup: <MissionControlMockup />,
		},
	]

	return (
		<section
			ref={containerRef}
			className="relative px-4 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
					The Engagement Protocol
				</h2>

				{/* Main container */}
				<div className="relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Left side - Text phases */}
						<div>
							{phases.map((phase, index) => (
								<div
									key={index}
									ref={el => {
										phaseRefs.current[index] = el
									}}
									className={`${
										index === 0 ? "min-h-[60vh]" : "min-h-[90vh]"
									} flex items-center`}
								>
									<div
										className={`transition-all duration-500 ${
											activePhase === index
												? "opacity-100 scale-100"
												: "opacity-30 scale-95"
										}`}
									>
										<div className="mb-6">
											<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
												{phase.indicator}
											</span>
										</div>
										<h3 className="text-3xl font-bold mb-6">{phase.title}</h3>
										<p className="text-xl leading-relaxed text-muted-foreground">
											{phase.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Right side - Sticky mockup container */}
						<div className="relative hidden lg:block mt-96 mb-12">
							{/* Sticky container that stays centered */}
							<div className="sticky top-1/2 -translate-y-1/2">
								<div className="relative h-[500px] w-full">
									{/* Mockup cards that transition */}
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activePhase === 0
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										<Card className="w-full h-full bg-card-background dark:border-0 border border-accent/30 shadow-xl overflow-hidden">
											<MissionArchitectMockup />
										</Card>
									</div>
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activePhase === 1
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										<Card className="w-full h-full bg-card-background dark:border-0 border border-accent/30 shadow-xl overflow-hidden">
											<ForgeMockup />
										</Card>
									</div>
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activePhase === 2
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										<Card className="w-full h-full bg-card-background dark:border-0 border border-accent/30 shadow-xl overflow-hidden">
											<MissionControlMockup />
										</Card>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// UI Mockup Components for Section 3
function MissionArchitectMockup() {
	return (
		<div className="p-8 h-full bg-background relative overflow-hidden">
			{/* Grid background - properly behind everything */}
			<div
				className="absolute inset-0 opacity-5 pointer-events-none"
				style={{ zIndex: 0 }}
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
						backgroundSize: "30px 30px",
					}}
				/>
			</div>

			{/* Content wrapper with higher z-index */}
			<div className="relative" style={{ zIndex: 1 }}>
				{/* Header with animated pulse */}
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-3">
						<div className="flex gap-1">
							<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
							<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-75" />
							<div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-150" />
						</div>
						<h3 className="text-xl font-bold text-foreground">
							Mission Architect
						</h3>
					</div>
					<span className="text-xs text-muted-foreground">Phase 1 of 3</span>
				</div>

				{/* Main Content */}
				<div className="space-y-4">
					{/* Mission Analysis Dashboard */}
					<div className="rounded-lg p-5 bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
						<div className="flex items-center justify-between mb-4">
							<h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
								Mission Parameters
							</h4>
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
								<span className="text-xs text-green-500">Scanning</span>
							</div>
						</div>
						<div className="space-y-3 font-mono text-xs">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Target Process:</span>
								<span className="text-foreground">Enterprise Deal Desk</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Current SLA:</span>
								<span className="text-red-400">48-72 hours</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Target SLA:</span>
								<span className="text-green-500">&lt; 2 minutes</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Complexity Score:</span>
								<div className="flex items-center gap-2">
									<div className="w-24 h-1.5 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-[85%] h-full bg-accent/50 rounded-full" />
									</div>
									<span className="text-foreground font-bold">8.5/10</span>
								</div>
							</div>
						</div>
					</div>

					{/* Real-time Discovery Grid */}
					<div className="grid grid-cols-2 gap-3">
						{/* Workflow Map */}
						<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
							<div className="flex items-center justify-between mb-3">
								<span className="text-xs font-bold text-foreground">
									Workflow Map
								</span>
								<Search className="w-3 h-3 text-muted-foreground" />
							</div>
							<div className="space-y-2">
								{[
									"Quote Request",
									"Validation",
									"Pricing",
									"Approval",
									"Generation",
								].map((step, i) => (
									<div key={step} className="flex items-center gap-2">
										<div
											className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
												i < 3
													? "bg-accent/20 text-foreground"
													: "bg-muted/30 text-muted-foreground"
											}`}
										>
											{i + 1}
										</div>
										<span className="text-xs text-muted-foreground">
											{step}
										</span>
										{i < 3 && (
											<div className="w-1 h-1 bg-green-500 rounded-full animate-pulse ml-auto" />
										)}
									</div>
								))}
							</div>
						</div>

						{/* System Health */}
						<div className="rounded-lg p-4 bg-gray-100 dark:[background-color:hsl(221,31%,23%)]">
							<div className="flex items-center justify-between mb-3">
								<span className="text-xs font-bold text-foreground">
									System Health
								</span>
								<BarChart3 className="w-3 h-3 text-muted-foreground" />
							</div>
							<div className="space-y-3">
								<div>
									<div className="flex justify-between text-xs mb-1">
										<span className="text-muted-foreground">Data Quality</span>
										<span className="text-foreground">92%</span>
									</div>
									<div className="h-1 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-[92%] h-full bg-accent/50 rounded-full" />
									</div>
								</div>
								<div>
									<div className="flex justify-between text-xs mb-1">
										<span className="text-muted-foreground">Integration</span>
										<span className="text-foreground">87%</span>
									</div>
									<div className="h-1 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-[87%] h-full bg-accent/40 rounded-full" />
									</div>
								</div>
								<div>
									<div className="flex justify-between text-xs mb-1">
										<span className="text-muted-foreground">Automation</span>
										<span className="text-foreground">74%</span>
									</div>
									<div className="h-1 bg-muted/30 rounded-full overflow-hidden">
										<div className="w-[74%] h-full bg-accent/30 rounded-full" />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Agent Discovery Feed */}
					<div className="rounded-lg p-4 bg-gray-50 dark:[background-color:hsl(221,31%,23%)]">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Brain className="w-4 h-4 text-muted-foreground" />
								<span className="text-xs font-bold text-foreground uppercase tracking-wider">
									Agent Discovery
								</span>
							</div>
							<span className="text-xs text-muted-foreground">Live</span>
						</div>
						<div className="space-y-2 font-mono text-xs">
							<div className="text-green-400">
								✓ Identified 12 decision trees in pricing logic
							</div>
							<div className="text-blue-400">
								→ Mapping approval matrix (7 levels detected)
							</div>
							<div className="text-yellow-500/80">
								⚠ Complex discount rules require human validation
							</div>
							<div className="text-muted-foreground/60">
								→ Building agent roster: 24 specialists needed...
							</div>
						</div>
					</div>

					{/* Blueprint Progress */}
					<div className="flex items-center justify-between pt-3 border-t border-muted/30">
						<div className="flex items-center gap-3">
							<span className="text-xs text-muted-foreground">
								Blueprint Progress:
							</span>
							<div className="w-32 h-1.5 bg-muted/30 rounded-full overflow-hidden">
								<div className="w-[75%] h-full bg-accent/50 rounded-full" />
							</div>
							<span className="text-xs font-bold text-foreground">75%</span>
						</div>
						<span className="text-xs font-bold text-foreground uppercase">
							READY IN 2:47
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export function LabPageClient() {
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
				<div className="absolute inset-0">
					<AnimatedDots />
				</div>

				{/* Gradient overlay */}
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none" />

				{/* Hero Content */}
				<section className="pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-12">
							<div className="text-center mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									The Workforce Lab
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans">
									Forge Your Unfair Advantage.
								</h1>
							</div>
							<p className="text-muted-foreground text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
							For the complex sales and marketing challenges that our standard workforces cannot solve, we forge your proprietary workflow into a fully autonomous operational asset.
							</p>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 2: The New Division of Labor */}
			<section className="pt-32 pb-48 px-4 bg-accent/40">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
							The New Division of Labor
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Off-the-shelf automation fails because it doesn&apos;t respect the
							role of your human talent. Our approach, developed in partnership
							with the elite agentic systems specialists at{" "}
							<span className="font-semibold text-foreground">Rebel Labs</span>,
							is built on a simple but powerful principle: your best people
							direct the strategy; the workforce delivers the outcome.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Human Team Card */}
						<Card className="group relative overflow-hidden bg-card-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative p-10">
								<div className="flex items-start gap-4 mb-6">
									<div className="p-3 rounded-lg bg-accent/10">
										<Brain className="w-8 h-8 text-accent" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-foreground mb-1">
											Your Team
										</h3>
										<p className="text-sm font-medium text-accent uppercase tracking-wider">
											The Strategists
										</p>
									</div>
								</div>
								<p className="text-muted-foreground leading-relaxed text-base">
									Freed from the burden of repetitive execution, your human
									experts are elevated to their highest purpose. They provide
									the strategic judgment, creative insights, and mission command
									that guide the entire operation.
								</p>
								<div className="mt-6 pt-6 border-t border-accent/10">
									<ul className="space-y-2">
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Define strategic objectives
										</li>
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Provide creative solutions
										</li>
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Make critical decisions
										</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* Digital Workforce Card */}
						<Card className="group relative overflow-hidden bg-card-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative p-10">
								<div className="flex items-start gap-4 mb-6">
									<div className="p-3 rounded-lg bg-accent/10">
										<Layers className="w-8 h-8 text-accent" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-foreground mb-1">
											The Workforce
										</h3>
										<p className="text-sm font-medium text-accent uppercase tracking-wider">
											The Operators
										</p>
									</div>
								</div>
								<p className="text-muted-foreground leading-relaxed text-base">
									Your bespoke Digital Workforce operates as a tireless,
									autonomous execution layer. It runs the complex, high-volume
									workflows with perfect consistency, learning and optimizing
									its performance 24/7 to achieve the mission you have set.
								</p>
								<div className="mt-6 pt-6 border-t border-accent/10">
									<ul className="space-y-2">
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Execute workflows 24/7
										</li>
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Maintain perfect consistency
										</li>
										<li className="flex items-center gap-2 text-sm text-muted-foreground">
											<div className="w-1.5 h-1.5 rounded-full bg-accent" />
											Learn and optimize continuously
										</li>
									</ul>
								</div>
							</div>
						</Card>
					</div>

					{/* Connection Visual */}
					<div className="flex justify-center items-center mt-12">
						<div className="flex items-center gap-8">
							<div className="text-center">
								<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-2">
									<Brain className="w-10 h-10 text-accent" />
								</div>
								<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Strategy
								</span>
							</div>
							<div className="flex flex-col items-center">
								<ArrowDown className="w-8 h-8 text-accent" />
								<span className="text-sm font-bold text-accent mt-2">
									MISSION
								</span>
								<ArrowDown className="w-8 h-8 text-accent mt-2" />
							</div>
							<div className="text-center">
								<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-2">
									<Layers className="w-10 h-10 text-accent" />
								</div>
								<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Execution
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Engagement Protocol */}
			<EngagementProtocol />

			{/* Section 4: The Art of the Possible */}
			<section className="py-24 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							The Art of the Possible.
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							The Lab exists to answer the question, &ldquo;What if you could
							build an autonomous system for...?&rdquo;
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Sales Intelligence Card */}
						<Card className="p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-4">
								<Search className="w-10 h-10 text-accent mb-4" />
								<h3 className="text-lg font-semibold text-foreground mb-2">
									The Sales Intelligence Prompt
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">
									What if you could...
								</span>{" "}
								create a workforce that analyzes every sales call and customer
								interaction to identify patterns, predict churn, and deliver
								real-time coaching insights?
							</p>
							<p className="text-sm text-accent mt-4 font-semibold">
								Strategic Focus: Weaponizing sales data.
							</p>
						</Card>

						{/* Pipeline Health Card */}
						<Card className="p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-4">
								<TrendingUp className="w-10 h-10 text-accent mb-4" />
								<h3 className="text-lg font-semibold text-foreground mb-2">
									The Pipeline Health Prompt
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">
									What if you could...
								</span>{" "}
								forge a workforce that monitors your entire sales pipeline,
								identifies at-risk deals based on behavioral data, and
								autonomously launches intervention campaigns to save them?
							</p>
							<p className="text-sm text-accent mt-4 font-semibold">
								Strategic Focus: Proactive revenue protection.
							</p>
						</Card>

						{/* Prospecting Card */}
						<Card className="p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-4">
								<Target className="w-10 h-10 text-accent mb-4" />
								<h3 className="text-lg font-semibold text-foreground mb-2">
									The Prospecting Prompt
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">
									What if you could...
								</span>{" "}
								create an &ldquo;Ideal Customer Profile&rdquo; discovery engine
								that analyzes your best customers and then builds a complete,
								autonomous outbound prospecting campaign to find more of them?
							</p>
							<p className="text-sm text-accent mt-4 font-semibold">
								Strategic Focus: Autonomous customer acquisition.
							</p>
						</Card>

						{/* Marketing Optimization Card */}
						<Card className="p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-4">
								<BarChart3 className="w-10 h-10 text-accent mb-4" />
								<h3 className="text-lg font-semibold text-foreground mb-2">
									The Marketing Optimization Prompt
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">
									What if you could...
								</span>{" "}
								deploy a closed-loop marketing workforce that analyzes ad spend,
								content performance, and lead quality to autonomously reallocate
								your budget in real-time to the highest-ROI activities?
							</p>
							<p className="text-sm text-accent mt-4 font-semibold">
								Strategic Focus: Autonomous, ROI-driven marketing.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 5: The Next Step - Commission Your Workforce */}
			<section className="py-32 px-4 bg-gradient-to-t from-transparent to-accent/20">
				<div className="max-w-4xl mx-auto">
					<Card className="p-16 text-center bg-card-background backdrop-blur-sm border-2 border-accent/30 shadow-2xl">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
							Commission Your Workforce.
						</h2>

						<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
							The journey begins with a direct conversation. A confidential,
							strategic session with the leadership of{" "}
							<span className="font-semibold text-foreground">
								Novosapien and Rebel Labs
							</span>{" "}
							to determine if your challenge and our capabilities are a perfect
							match.
						</p>

						<a href="https://cal.com/novosapien/demo" className="inline-block">
							<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/80 hover:dark:bg-accent/40 text-lg px-8 py-4">
								Book a Lab Scoping Session
							</Button>
						</a>

						{/* Logos */}
						<div className="flex justify-center items-center gap-8 mt-12 opacity-70">
							<span className="text-sm text-muted-foreground">Powered by</span>
							<span className="font-semibold text-foreground">
								Novosapien × Rebel Labs
							</span>
						</div>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
