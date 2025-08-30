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
	Brain,
	Layers,
	Target,
	TrendingUp,
	BarChart3,
	Search,
} from "lucide-react"
import { ForgeMockup } from "./forge-mockup"
import { MissionControlMockup } from "./mission-control-mockup"

// Scrollytelling component for Section 3 - Exported for dynamic import
export function EngagementProtocol() {
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
			className="relative py-16 sm:py-32 px-4 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
		>
			<div className="max-w-6xl mx-auto">
				{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
				    Changed from H2 to H2 (proper hierarchy under H1)
				    Visual Impact: None - all classes preserved
				    Date: 2025-08-28
				    Agent: Claude
				*/}
				<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-16">
					The Engagement Protocol
				</h2>

				{/* Mobile Layout - Phases with mockups below each */}
				<div className="block lg:hidden">
					{phases.map((phase, index) => (
						<div key={index} className="mb-24">
							<div className="mb-6">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block mb-4">
									{phase.indicator}
								</span>
								<h3 className="text-xl sm:text-2xl font-bold mb-3">
									{phase.title}
								</h3>
								<p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
									{phase.description}
								</p>
							</div>
							{/* Mockup below text on mobile */}
							<Card className="bg-card-background dark:border-0 border border-accent/30 shadow-xl overflow-hidden">
								<div className="h-[300px] sm:h-[400px]">{phase.mockup}</div>
							</Card>
						</div>
					))}
				</div>

				{/* Desktop Layout - Original scrollytelling */}
				<div className="relative hidden lg:block">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
						<div className="relative hidden lg:block mt-64">
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
						<span className="text-xl font-bold text-foreground">
							Mission Architect
						</span>
					</div>
					<span className="text-xs text-muted-foreground">Phase 1 of 3</span>
				</div>

				{/* Main Content */}
				<div className="space-y-4">
					{/* Mission Analysis Dashboard */}
					<div className="rounded-lg p-5 bg-gray-50 dark:[background-color:hsl(216,23%,36%)]">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-bold text-foreground uppercase tracking-wider">
								Mission Parameters
							</span>
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

// Legacy client component - kept for backward compatibility
// Main functionality has been moved to page.tsx and lab-sections.tsx
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
				<section className="pt-48 sm:pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-12 sm:mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-8 md:p-12">
							<div className="text-center mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									The Workforce Lab
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
									Forge Your Unfair Advantage.
								</h1>
							</div>
							<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
								For the complex sales and marketing challenges that our standard
								workforces cannot solve, we forge your proprietary workflow into
								a fully autonomous operational asset.
							</p>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 2: The New Division of Labor - Three Parts */}
			<section className="pt-16 sm:pt-32 pb-16 sm:pb-48 px-4 bg-accent/40">
				<div className="max-w-7xl mx-auto">
					{/* Part A: The Focus */}
					<div className="text-center mb-8 sm:mb-20">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-6">
							The New Division of Labor.
						</h2>
						<p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							The Workforce Lab is exclusively focused on solving the most
							complex challenges in revenue operations. Our approach is built on
							a simple but powerful principle: your best people direct the
							strategy; the workforce delivers the outcome.
						</p>
					</div>

					{/* Part B: The Partnership - Single framed block */}
					<div className="mb-8 sm:mb-20">
						<Card className="bg-transparent border-none p-6 sm:p-8 md:p-12">
							{/* Mobile Layout - Both descriptions below logos */}
							<div className="block sm:hidden">
								{/* Logos at the top */}
								<div className="flex justify-center items-center gap-4 mb-6">
									<div className="relative">
										<Image
											src="/logo.svg"
											alt="Novosapien"
											width={60}
											height={60}
											className="w-[60px] h-[60px]"
										/>
									</div>
									<span className="text-2xl text-accent font-light">+</span>
									<div className="relative">
										<Image
											src="/rebel-labs-logo.svg"
											alt="Rebel Labs"
											width={120}
											height={30}
											className="w-[120px] h-auto"
										/>
									</div>
								</div>

								{/* Novosapien description - below logos on mobile */}
								<div className="space-y-3 mb-6">
									<h4 className="text-base font-bold text-foreground text-center">
										Novosapien - The Architects of the System
									</h4>
									<p className="text-sm text-muted-foreground leading-relaxed text-center">
										Novosapien provides the foundational architecture and the
										productized, plug-and-play Digital Workforces that form the
										backbone of modern revenue operations.
									</p>
								</div>

								{/* Rebel Labs description - at the bottom on mobile */}
								<div className="space-y-3">
									<h4 className="text-base font-bold text-foreground text-center">
										Rebel Labs - The Elite Forging & Deployment Partner
									</h4>
									<p className="text-sm text-muted-foreground leading-relaxed text-center">
										Rebel Labs provides the specialized agentic engineering to
										both seamlessly deploy our productized solutions and to
										forge bespoke workforces for unique, mission-critical
										challenges.
									</p>
								</div>
							</div>

							{/* Desktop Layout - Original side-by-side */}
							<div className="hidden sm:block">
								<div className="text-center mb-8">
									{/* Partnership Lockup with actual logos */}
									<div className="flex justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-10">
										<div className="relative">
											<Image
												src="/logo.svg"
												alt="Novosapien"
												width={100}
												height={100}
												className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
											/>
										</div>
										<span className="text-2xl sm:text-4xl text-accent font-light">
											+
										</span>
										<div className="relative">
											<Image
												src="/rebel-labs-logo.svg"
												alt="Rebel Labs"
												width={200}
												height={48}
												className="w-[120px] h-auto sm:w-[160px] md:w-[200px]"
											/>
										</div>
									</div>
								</div>

								{/* Two-column partnership definition */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
									<div className="space-y-3 sm:space-y-4">
										<h4 className="text-base sm:text-lg font-bold text-foreground">
											Novosapien - The Architects of the System
										</h4>
										<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
											Novosapien provides the foundational architecture and the
											productized, plug-and-play Digital Workforces that form
											the backbone of modern revenue operations.
										</p>
									</div>
									<div className="space-y-3 sm:space-y-4">
										<h4 className="text-base sm:text-lg font-bold text-foreground">
											Rebel Labs - The Elite Forging & Deployment Partner
										</h4>
										<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
											Rebel Labs provides the specialized agentic engineering to
											both seamlessly deploy our productized solutions and to
											forge bespoke workforces for unique, mission-critical
											challenges.
										</p>
									</div>
								</div>
							</div>
						</Card>
					</div>

					{/* Part C: The Philosophy */}
					<div>
						{/* Center text */}
						<div className="text-center mb-8 sm:mb-12">
							<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-6">
								Your Strategy, Autonomously Executed.
							</h3>
							<p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
								This model is designed to liberate your most valuable asset—your
								human team. By providing them with a dedicated, autonomous
								execution layer, we free them from the operational
								&apos;how&apos; so they can focus exclusively on the strategic
								&apos;what&apos; and &apos;why&apos;.
							</p>
						</div>

						{/* Cards in two columns */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
							{/* Your Team Card - Left */}
							<Card className="group relative overflow-hidden bg-card-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300">
								<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								<div className="relative p-6 sm:p-8 md:p-10">
									<div className="flex items-start gap-4 mb-6">
										<div className="p-2 sm:p-3 rounded-lg bg-accent/10">
											<Brain className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
										</div>
										<div>
											<h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
												Your Team: The Strategists
											</h4>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
										Freed from the burden of repetitive execution, your human
										experts are elevated to their highest purpose. They provide
										the strategic judgment, creative insights, and mission
										command that guide the entire operation.
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

							{/* The Workforce Card - Right */}
							<Card className="group relative overflow-hidden bg-card-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300">
								<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								<div className="relative p-6 sm:p-8 md:p-10">
									<div className="flex items-start gap-4 mb-6">
										<div className="p-2 sm:p-3 rounded-lg bg-accent/10">
											<Layers className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
										</div>
										<div>
											<h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
												The Workforce: The Operators
											</h4>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
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
					</div>
				</div>
			</section>

			{/* Section 3: The Engagement Protocol */}
			<EngagementProtocol />

			{/* Section 4: The Art of the Possible */}
			<section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent via-accent/10 to-transparent">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-8">
							The Art of the Possible.
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-12">
							The Lab exists to answer a simple question:
						</p>
						<p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
							What if you could...
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
						{/* Sales Intelligence Card */}
						<Card className="p-6 sm:p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-3 sm:mb-4">
								<Search className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
							</div>
							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								...create a workforce that{" "}
								<span className="font-bold text-foreground">
									analyzes every sales call
								</span>{" "}
								and customer interaction to identify patterns, predict churn,
								and deliver real-time coaching insights?
							</p>
						</Card>

						{/* Pipeline Health Card */}
						<Card className="p-6 sm:p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-3 sm:mb-4">
								<TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
							</div>
							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								...forge a workforce that{" "}
								<span className="font-bold text-foreground">
									monitors your entire sales pipeline
								</span>
								, identifies at-risk deals based on behavioral data, and
								autonomously launches intervention campaigns to save them?
							</p>
						</Card>

						{/* Prospecting Card */}
						<Card className="p-6 sm:p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-3 sm:mb-4">
								<Target className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
							</div>
							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								...create an ideal customer profile discovery engine that{" "}
								<span className="font-bold text-foreground">
									analyzes your best customers
								</span>{" "}
								and then builds a complete, autonomous outbound prospecting
								campaign to find more of them?
							</p>
						</Card>

						{/* Marketing Optimization Card */}
						<Card className="p-6 sm:p-8 bg-card-background border border-accent/30 hover:border-accent transition-colors group">
							<div className="mb-3 sm:mb-4">
								<BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
							</div>
							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								...deploy a closed-loop marketing workforce that{" "}
								<span className="font-bold text-foreground">
									analyzes ad spend, content performance, and lead quality
								</span>{" "}
								to autonomously reallocate your budget in real-time to the
								highest-ROI activities?
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 5: The Next Step - Commission Your Workforce */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-6 sm:p-8 md:p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-3 sm:mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-accent/30">
								Ready to Forge Your Workforce?
							</span>
						</div>

						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							Commission Your Workforce.
						</h2>

						<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
							The journey begins with a direct conversation. A confidential,
							strategic session with the leadership to determine if your
							challenge and our capabilities are a perfect match.
						</p>

						<a
							href="https://cal.com/george-westbrook-novosapien/custom-workforce"
							className="inline-block mb-6 sm:mb-8"
						>
							<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
								Book a Lab Scoping Session
							</Button>
						</a>

						{/* Powered by */}
						<div className="pt-6 sm:pt-8 border-t border-accent/10">
							<p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
								Powered by
							</p>
							<p className="text-sm sm:text-base font-semibold text-foreground">
								Novosapien × Rebel Labs
							</p>
						</div>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
