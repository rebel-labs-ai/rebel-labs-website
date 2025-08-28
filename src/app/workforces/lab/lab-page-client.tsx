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

// Scrollytelling component for Section 3
function EngagementProtocol() {
	const [activePhase, setActivePhase] = useState(0)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return

			const rect = sectionRef.current.getBoundingClientRect()
			const sectionHeight = rect.height
			const scrollProgress = Math.max(
				0,
				Math.min(1, -rect.top / (sectionHeight - window.innerHeight))
			)

			if (scrollProgress < 0.33) {
				setActivePhase(0)
			} else if (scrollProgress < 0.66) {
				setActivePhase(1)
			} else {
				setActivePhase(2)
			}
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const phases = [
		{
			indicator: "PHASE I (WEEKS 1-2)",
			title: "From Strategic Intent to Architectural Blueprint",
			description:
				"We begin with an intensive discovery sprint. Our senior architects and your subject matter experts co-author the definitive architectural blueprint, defining the mission, mapping your unique workflows, and specifying the precise business outcomes.",
			mockup: <MissionArchitectMockup />,
		},
		{
			indicator: "PHASE II (WEEKS 3-10)",
			title: "From Blueprint to Functional Asset",
			description:
				"This is the core build-out. Operating in a series of two-week engineering sprints, we forge the components of your workforce. Each sprint concludes with a joint review to demonstrate tangible progress and gather feedback, ensuring a transparent and collaborative process.",
			mockup: <ForgeMockup />,
		},
		{
			indicator: "PHASE III (WEEKS 11-12)",
			title: "From Functional Asset to Full Autonomy",
			description:
				"The final phase focuses on seamless integration and activation. We deploy the forged workforce into your live environment, handle all technical setup, and conclude with the final handover where the workforce is switched to full autonomy, ready to execute its mission.",
			mockup: <MissionControlMockup />,
		},
	]

	return (
		<section
			ref={sectionRef}
			className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/20 to-accent/40"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						The Engagement Protocol
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						From initial blueprint to full deployment in 12 weeks. A proven,
						three-phase process that transforms your strategic vision into
						operational reality.
					</p>
				</div>

				<div className="relative min-h-[200vh]">
					<div className="sticky top-20">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-6">
								<span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
									{phases[activePhase].indicator}
								</span>
								<h3 className="text-3xl md:text-4xl font-bold text-foreground">
									{phases[activePhase].title}
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed">
									{phases[activePhase].description}
								</p>

								{/* Phase indicators */}
								<div className="flex gap-2 mt-8">
									{[0, 1, 2].map(index => (
										<div
											key={index}
											className={`h-2 flex-1 rounded-full transition-all duration-500 ${
												index <= activePhase ? "bg-accent" : "bg-accent/20"
											}`}
										/>
									))}
								</div>
							</div>

							<div className="relative">
								<Card className="aspect-[4/3] bg-card-background border border-accent/30 shadow-xl overflow-hidden">
									{phases[activePhase].mockup}
								</Card>
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
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground">
					Mission Architect
				</h3>
			</div>

			<div className="space-y-4">
				<Card className="p-4 bg-muted">
					<h4 className="text-sm font-semibold text-foreground mb-2">
						Client Directive
					</h4>
					<p className="text-sm text-muted-foreground">
						&ldquo;Automate our proprietary enterprise deal desk process&rdquo;
					</p>
				</Card>

				<div className="grid grid-cols-3 gap-3">
					<Card className="p-3 bg-slate-100 dark:bg-primary/10">
						<h5 className="text-xs font-semibold text-slate-700 dark:text-primary mb-2">
							Identified Bottlenecks
						</h5>
						<ul className="space-y-1">
							<li className="text-xs text-muted-foreground">
								• Manual quote generation
							</li>
							<li className="text-xs text-muted-foreground">
								• Multi-system data entry
							</li>
						</ul>
					</Card>

					<Card className="p-3 bg-slate-100 dark:bg-primary/10">
						<h5 className="text-xs font-semibold text-slate-700 dark:text-primary mb-2">
							Required Integrations
						</h5>
						<div className="flex gap-2 flex-wrap">
							<span className="text-xs bg-white dark:bg-background px-2 py-1 rounded">
								Salesforce
							</span>
							<span className="text-xs bg-white dark:bg-background px-2 py-1 rounded">
								SAP
							</span>
							<span className="text-xs bg-white dark:bg-background px-2 py-1 rounded">
								Internal API
							</span>
						</div>
					</Card>

					<Card className="p-3 bg-slate-100 dark:bg-primary/10">
						<h5 className="text-xs font-semibold text-slate-700 dark:text-primary mb-2">
							Outcome Metrics
						</h5>
						<ul className="space-y-1">
							<li className="text-xs text-muted-foreground">
								• Reduce Time-to-Quote by 50%+
							</li>
							<li className="text-xs text-muted-foreground">
								• Eliminate data entry errors
							</li>
						</ul>
					</Card>
				</div>

				<div className="flex justify-end">
					<span className="bg-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
						Status: Approved
					</span>
				</div>
			</div>
		</div>
	)
}

function ForgeMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground">
					The Forge: Sprint Dashboard
				</h3>
			</div>

			<div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
				<div className="space-y-3">
					<h4 className="text-sm font-semibold text-muted-foreground">
						Build History
					</h4>
					<div className="space-y-2">
						<Card className="p-2 bg-accent/20 border-accent">
							<span className="text-xs font-semibold text-foreground">
								Sprint 4/5 - Active
							</span>
						</Card>
						<Card className="p-2 bg-muted">
							<span className="text-xs text-muted-foreground">
								Sprint 3 - Complete
							</span>
						</Card>
						<Card className="p-2 bg-muted">
							<span className="text-xs text-muted-foreground">
								Sprint 2 - Complete
							</span>
						</Card>
					</div>
				</div>

				<div className="space-y-3">
					<h4 className="text-sm font-semibold text-muted-foreground">
						Active Development
					</h4>
					<Card className="p-3 bg-slate-100 dark:bg-primary/10">
						<ul className="space-y-2">
							<li className="text-xs text-foreground">
								• Agent: Quoting Engine
							</li>
							<li className="text-xs text-foreground">
								• Agent: Compliance Check
							</li>
							<li className="text-xs text-foreground">
								• Integration: SAP Connector
							</li>
						</ul>
					</Card>
				</div>

				<div className="space-y-3">
					<h4 className="text-sm font-semibold text-muted-foreground">
						Sprint Review & Feedback
					</h4>
					<Card className="p-3 bg-amber-50 dark:bg-yellow-500/10">
						<p className="text-xs font-semibold text-amber-700 dark:text-yellow-400 mb-1">
							Client Feedback
						</p>
						<p className="text-xs text-muted-foreground">
							&ldquo;Can we add a final approval step before sending?&rdquo;
						</p>
					</Card>
					<Card className="p-3 bg-emerald-50 dark:bg-green-500/10">
						<p className="text-xs font-semibold text-emerald-700 dark:text-green-400 mb-1">
							Architect&apos;s Response
						</p>
						<p className="text-xs text-muted-foreground">
							✓ Acknowledged. Approval gate added to Sprint 5 scope.
						</p>
					</Card>
				</div>
			</div>
		</div>
	)
}

function MissionControlMockup() {
	return (
		<div className="p-6 h-full bg-background">
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-foreground">
					Mission Control
				</h3>
			</div>

			<div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
				<Card className="p-4 bg-muted">
					<h4 className="text-sm font-semibold text-foreground mb-3">
						Core Integrations
					</h4>
					<div className="space-y-2">
						{["Salesforce", "SAP", "Internal API"].map(system => (
							<div key={system} className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">{system}</span>
								<div className="flex items-center gap-1">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
									<span className="text-xs text-green-600 dark:text-green-400">
										Connected
									</span>
								</div>
							</div>
						))}
					</div>
				</Card>

				<Card className="p-4 bg-accent/10 border-accent flex flex-col items-center justify-center">
					<h4 className="text-sm font-semibold text-foreground mb-4">
						System Status
					</h4>
					<div className="relative">
						<div className="w-32 h-16 bg-green-500/20 border-2 border-green-500 rounded-lg flex items-center justify-center">
							<span className="text-sm font-bold text-green-600 dark:text-green-400">
								Autonomous Mode: ON
							</span>
						</div>
						<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
					</div>
				</Card>

				<Card className="p-4 bg-muted">
					<h4 className="text-sm font-semibold text-foreground mb-3">
						Live Outcome Metrics
					</h4>
					<div className="space-y-2">
						<div className="flex justify-between">
							<span className="text-xs text-muted-foreground">Quote Time</span>
							<span className="text-xs font-semibold text-green-600 dark:text-green-400">
								-67%
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-xs text-muted-foreground">Error Rate</span>
							<span className="text-xs font-semibold text-green-600 dark:text-green-400">
								0%
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-xs text-muted-foreground">Throughput</span>
							<span className="text-xs font-semibold text-green-600 dark:text-green-400">
								+340%
							</span>
						</div>
					</div>
				</Card>
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
			<div className="fixed top-4 right-4 z-50 hidden md:block">
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
									THE WORKFORCE LAB
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans">
									Forge Your Unfair Advantage.
								</h1>
							</div>
							<p className="text-muted-foreground text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
								Deploy a mission-specific Digital Workforce for your most
								complex revenue operations.
							</p>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 2: The New Division of Labor */}
			<section className="py-24 px-4 bg-accent/40">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							The New Division of Labor.
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Off-the-shelf automation fails because it doesn&apos;t respect the
							role of your human talent. Our approach, developed in partnership
							with the elite agentic systems specialists at{" "}
							<span className="font-semibold text-foreground">Rebel Labs</span>,
							is built on a simple but powerful principle: your best people
							direct the strategy; the workforce delivers the outcome.
						</p>
					</div>

					<div className="relative">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							{/* Human Team Card */}
							<Card className="p-8 bg-card-background border-2 border-accent/30">
								<div className="mb-4">
									<Brain className="w-12 h-12 text-accent mb-4" />
									<h3 className="text-2xl font-bold text-foreground mb-2">
										Your Team: The Strategists
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									Freed from the burden of repetitive execution, your human
									experts are elevated to their highest purpose. They provide
									the strategic judgment, creative insights, and mission command
									that guide the entire operation.
								</p>
							</Card>

							{/* Digital Workforce Card */}
							<Card className="p-8 bg-card-background border-2 border-accent/30">
								<div className="mb-4">
									<Layers className="w-12 h-12 text-accent mb-4" />
									<h3 className="text-2xl font-bold text-foreground mb-2">
										The Workforce: The Operators
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									Your bespoke Digital Workforce operates as a tireless,
									autonomous execution layer. It runs the complex, high-volume
									workflows with perfect consistency, learning and optimizing
									its performance 24/7 to achieve the mission you have set.
								</p>
							</Card>
						</div>

						{/* Central Diagram */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
									<Brain className="w-8 h-8 text-accent" />
								</div>
								<div className="flex flex-col items-center">
									<ArrowDown className="w-6 h-6 text-accent animate-bounce" />
									<span className="text-xs font-semibold text-accent mt-1">
										MISSION
									</span>
								</div>
								<div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
									<Layers className="w-8 h-8 text-accent" />
								</div>
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
