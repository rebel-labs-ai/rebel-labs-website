'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Sparkles, Zap, Brain, Rocket, Target, Users } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

// Twinkling Stars Background Component
function TwinklingStars() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Set canvas size
		const setCanvasSize = () => {
			canvas.width = window.innerWidth
			canvas.height = document.documentElement.scrollHeight
		}
		setCanvasSize()
		window.addEventListener('resize', setCanvasSize)

		// Create stars
		const stars: Array<{
			x: number
			y: number
			size: number
			opacity: number
			twinkleSpeed: number
		}> = []

		for (let i = 0; i < 200; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 2,
				opacity: Math.random(),
				twinkleSpeed: 0.005 + Math.random() * 0.01,
			})
		}

		// Animation loop
		let animationId: number
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			stars.forEach((star) => {
				// Update opacity for twinkling effect
				star.opacity += star.twinkleSpeed
				if (star.opacity > 1 || star.opacity < 0) {
					star.twinkleSpeed = -star.twinkleSpeed
				}

				// Draw star
				ctx.beginPath()
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
				ctx.fill()
			})

			animationId = requestAnimationFrame(animate)
		}
		animate()

		return () => {
			cancelAnimationFrame(animationId)
			window.removeEventListener('resize', setCanvasSize)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0"
			style={{ background: 'transparent' }}
		/>
	)
}

export default function MissionPage() {
	const [activeSection, setActiveSection] = useState(0)
	const [showIntro, setShowIntro] = useState(false)
	const [showSubtext, setShowSubtext] = useState(false)
	const sectionsRef = useRef<(HTMLElement | null)[]>([])

	useEffect(() => {
		setTimeout(() => setShowIntro(true), 100)
		setTimeout(() => setShowSubtext(true), 800)

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2

			sectionsRef.current.forEach((section, index) => {
				if (section) {
					const { offsetTop, offsetHeight } = section
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(index)
					}
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (index: number) => {
		sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
			{/* Twinkling Stars Background */}
			<TwinklingStars />
			
			{/* Gradient Overlay for depth */}
			<div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background/40" />
			
			<div className="relative z-10">
				<Navigation />
				<ThemeToggle />

				{/* Hero Section with Card */}
				<section
					ref={(el) => {
						sectionsRef.current[0] = el
					}}
					className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-32"
				>
					<div className="mx-auto max-w-5xl">
						<div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-12 backdrop-blur-lg transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(var(--primary),0.1)]">
							{/* Animated gradient border effect */}
							<div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
								<div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]" />
								<div className="absolute inset-0 rounded-3xl bg-card/95" />
							</div>
							
							<div className="relative z-10 text-center">
								<div className="mb-6 flex justify-center">
									<Sparkles className="h-12 w-12 text-primary animate-pulse" />
								</div>
								<h1
									className={`text-foreground text-5xl md:text-7xl font-light tracking-tight transition-all duration-1000 ${
										showIntro ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
									}`}
								>
									The Future of Productive Work is Not Another, Better Tool.
								</h1>
								<p
									className={`text-muted-foreground text-xl mt-8 leading-relaxed transition-all duration-1000 delay-300 ${
										showSubtext ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
									}`}
								>
									It is a new means of production, where autonomous workforces deliver outcomes, not
									just assist with tasks.
								</p>
								<div className="mt-12 flex justify-center gap-4">
									<div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
										Paradigm Shift
									</div>
									<div className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
										Autonomous Workforces
									</div>
									<div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
										Outcome Delivery
									</div>
								</div>
							</div>
						</div>
					</div>
					<button
						onClick={() => scrollToSection(1)}
						className="absolute bottom-12 flex animate-bounce flex-col items-center text-muted-foreground transition-colors hover:text-foreground"
					>
						<span className="mb-2 text-sm font-medium">Unpack the Old World</span>
						<ChevronDown className="h-6 w-6" />
					</button>
				</section>

				{/* Main Content with Cards */}
				<div className="relative mx-auto max-w-7xl px-6 py-24">
					<div className="space-y-32">
						{/* Section 1: The Old World is Broken */}
						<section
							ref={(el) => {
								sectionsRef.current[1] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
								}`}
							>
								<div className="grid gap-8 lg:grid-cols-2">
									{/* Content Card */}
									<div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-lg transition-all duration-500 hover:border-destructive/50 hover:shadow-[0_0_30px_rgba(var(--destructive),0.1)]">
										<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-destructive/10 blur-3xl" />
										<div className="relative z-10">
											<div className="mb-4 inline-flex rounded-lg bg-destructive/10 p-3">
												<Zap className="h-6 w-6 text-destructive" />
											</div>
											<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
												The Old World is Broken.
											</h2>
											<div className="space-y-4">
												<p className="text-lg text-muted-foreground">
													For the last two decades, "Software as a Service" has sold you a simple
													promise: a better tool. A better CRM, a better spreadsheet, a better email
													client.
												</p>
												<p className="text-lg text-muted-foreground">
													They gave your team better hammers and better shovels. But your team was still
													in the ditch, digging. The work itself didn't change. The human remained the
													bottleneck.
												</p>
												<p className="text-lg font-semibold text-foreground border-l-4 border-destructive pl-4 mt-6">
													This era of incremental tools is over.
												</p>
											</div>
										</div>
									</div>

									{/* Visual Card */}
									<div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-lg">
										<AssemblyLineGraphic />
									</div>
								</div>
							</div>
						</section>

						{/* Section 2: A New Coat of Paint */}
						<section
							ref={(el) => {
								sectionsRef.current[2] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
								}`}
							>
								<div className="grid gap-8 lg:grid-cols-2">
									{/* Visual Card */}
									<div className="relative order-2 overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-lg lg:order-1">
										<SprinkledAIGraphic />
									</div>

									{/* Content Card */}
									<div className="group relative order-1 overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-lg transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.1)] lg:order-2">
										<div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />
										<div className="relative z-10">
											<div className="mb-4 inline-flex rounded-lg bg-orange-500/10 p-3">
												<Brain className="h-6 w-6 text-orange-500" />
											</div>
											<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
												A New Coat of Paint on a Crumbling Foundation.
											</h2>
											<div className="space-y-4">
												<p className="text-lg text-muted-foreground">
													First, the old guard of SaaS began to sprinkle AI onto their broken models.
													"AI-powered" features and "smarter" suggestions were bolted onto the same
													underlying tools.
												</p>
												<p className="text-lg text-muted-foreground">
													The work didn't change. The fundamental paradigm remained.
												</p>
												<div className="mt-6 flex items-center gap-2 rounded-lg bg-orange-500/5 p-4 text-orange-500">
													<span className="text-2xl">⚠️</span>
													<span className="font-medium">Same problems, shinier interface</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Section 3: The Seductive Promise */}
						<section
							ref={(el) => {
								sectionsRef.current[3] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
								}`}
							>
								<div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-12 backdrop-blur-lg transition-all duration-500 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
									<div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />
									<div className="grid gap-8 lg:grid-cols-[1fr_300px]">
										<div className="relative z-10">
											<div className="mb-4 inline-flex rounded-lg bg-yellow-500/10 p-3">
												<Users className="h-6 w-6 text-yellow-500" />
											</div>
											<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
												The Seductive Promise of a Smarter Shovel.
											</h2>
											<div className="space-y-4">
												<p className="text-lg text-muted-foreground">
													Now, the full storm has arrived: the "AI Agent" or the "AI Employee." A
													singular, intelligent assistant to help your team dig faster.
												</p>
												<p className="text-lg text-muted-foreground">
													This is the second, and more seductive, false dawn. It is the same broken
													paradigm wrapped in a new layer of hype.
												</p>
												<p className="text-lg text-muted-foreground">
													An AI employee is a commodity. It still requires a human manager. It still
													automates a single task, not the entire outcome. It creates incremental
													efficiency, but it does not create a fundamental competitive advantage.
												</p>
												<p className="mt-8 border-l-4 border-yellow-500 pl-4 text-xl font-bold text-foreground">
													We are not here to build better tools.
												</p>
											</div>
										</div>
										<div className="relative">
											<SmarterShovelGraphic />
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Section 4: The Principle */}
						<section
							ref={(el) => {
								sectionsRef.current[4] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
								}`}
							>
								<div className="space-y-8">
									{/* Main Card */}
									<div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card/80 to-accent/5 p-12 backdrop-blur-lg transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(var(--primary),0.15)]">
										<div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
										<div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
										<div className="relative z-10">
											<div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
												<Target className="h-8 w-8 text-primary" />
											</div>
											<h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-8">
												We Don't Sell Tools. We Deliver Outcomes.
											</h2>
											<p className="text-xl text-muted-foreground mb-12">
												This is the non-negotiable principle upon which Novosapien is founded. We do
												not automate tasks; we deliver the outcomes those tasks were meant to achieve.
											</p>
										</div>
									</div>

									{/* Comparison Cards */}
									<div className="grid gap-6 md:grid-cols-3">
										<div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
											<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
											<div className="relative z-10">
												<p className="text-sm text-muted-foreground mb-3">Instead of...</p>
												<p className="mb-4 text-base line-through opacity-50">
													"A smarter email assistant"
												</p>
												<p className="text-lg font-bold text-primary">
													We deliver a booked sales meeting.
												</p>
											</div>
										</div>
										<div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
											<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
											<div className="relative z-10">
												<p className="text-sm text-muted-foreground mb-3">Instead of...</p>
												<p className="mb-4 text-base line-through opacity-50">
													"A faster content writer"
												</p>
												<p className="text-lg font-bold text-accent-foreground">
													We deliver a published campaign.
												</p>
											</div>
										</div>
										<div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
											<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
											<div className="relative z-10">
												<p className="text-sm text-muted-foreground mb-3">Instead of...</p>
												<p className="mb-4 text-base line-through opacity-50">
													"A better research tool"
												</p>
												<p className="text-lg font-bold text-primary">
													We deliver actionable intelligence.
												</p>
											</div>
										</div>
									</div>

									{/* Digital Workforces Card */}
									<div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/90 to-accent/10 p-8 backdrop-blur-lg">
										<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
										<div className="relative z-10 text-center">
											<h3 className="mb-4 text-2xl font-bold text-foreground">
												This is why we don't build AI Agents.
											</h3>
											<p className="mb-6 text-3xl font-light text-primary">
												We build Digital Workforces.
											</p>
											<p className="mx-auto max-w-3xl text-lg text-muted-foreground">
												An AI Agent is a single employee. A Novosapien Digital Workforce is an entire,
												high-performance team. It is a coordinated system of specialized agents that
												collaborate as a single, cohesive unit. This is the difference between a lone
												freelancer and an elite, self-managing special forces team.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Section 5: The Promised Land */}
						<section
							ref={(el) => {
								sectionsRef.current[5] = el
							}}
							className="scroll-mt-24 pb-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-30'
								}`}
							>
								<div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-emerald-500/5 via-card/80 to-primary/5 p-12 backdrop-blur-lg transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)]">
									<div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
									<div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
									
									<div className="relative z-10">
										<div className="mb-8 inline-flex rounded-lg bg-emerald-500/10 p-4">
											<Rocket className="h-8 w-8 text-emerald-500" />
										</div>
										<h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-8">
											The Promised Land: Elastic Operations.
										</h2>
										
										<div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
											<div className="space-y-6">
												<p className="text-lg text-muted-foreground">
													The enemy of your ambition has always been the fixed cost of capacity. It is
													the iron law of the old world that dictates you must buy your capacity—whether
													human or software—in rigid, expensive blocks. This is the prison of rigid
													operations.
												</p>
												<div className="rounded-lg bg-emerald-500/5 p-6">
													<p className="text-lg text-foreground">
														We deliver <span className="font-bold text-emerald-500">elastic operations.</span>{' '}
														This is a new state where your operational capacity is no longer a fixed asset
														you must purchase, but a fluid resource you can summon on demand.
													</p>
												</div>
												<ul className="space-y-4">
													<li className="flex items-start gap-3">
														<span className="mt-1 text-emerald-500">✓</span>
														<p className="text-lg text-muted-foreground">
															Deploy a thousand-agent workforce to handle a sudden surge of 10,000 requests
														</p>
													</li>
													<li className="flex items-start gap-3">
														<span className="mt-1 text-emerald-500">✓</span>
														<p className="text-lg text-muted-foreground">
															Scale down to ten agents the next day, paying only for work done
														</p>
													</li>
													<li className="flex items-start gap-3">
														<span className="mt-1 text-emerald-500">✓</span>
														<p className="text-lg text-muted-foreground">
															Let human experts focus on strategy while execution materializes on demand
														</p>
													</li>
												</ul>
												<div className="mt-8 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6">
													<p className="text-xl font-bold text-foreground">
														It's a future where you are no longer paying for capacity.
													</p>
													<p className="mt-2 text-xl font-bold text-emerald-500">
														You are investing directly in outcomes.
													</p>
												</div>
											</div>
											<div className="relative">
												<ElasticSystemGraphic />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	)
}

// Enhanced Graphics Components
function AssemblyLineGraphic() {
	return (
		<div className="flex h-[400px] w-full items-center justify-center p-8">
			<div className="relative w-full">
				{/* Conveyor Belt */}
				<div className="h-3 w-full animate-scroll-left rounded-full bg-gradient-to-r from-muted via-muted-foreground/30 to-muted shadow-inner"></div>

				{/* Tools on Belt */}
				<div className="absolute -top-20 flex w-full animate-scroll-left items-center justify-around">
					{['CRM', 'Excel', 'Email', 'Task', 'CRM', 'Excel'].map((tool, i) => (
						<div
							key={i}
							className="flex h-14 w-24 items-center justify-center rounded-lg border-2 border-muted-foreground/20 bg-background shadow-lg transition-transform hover:scale-110"
						>
							<span className="text-sm font-medium">{tool}</span>
						</div>
					))}
				</div>

				{/* Stick Figure */}
				<div className="absolute -top-40 left-1/2 -translate-x-1/2">
					<div className="animate-bob flex flex-col items-center">
						<div className="h-10 w-10 rounded-full border-2 border-foreground bg-background shadow-lg"></div>
						<div className="h-16 w-0.5 bg-foreground"></div>
						<div className="relative h-10 w-20">
							<div className="absolute left-0 h-0.5 w-10 rotate-12 bg-foreground"></div>
							<div className="absolute right-0 h-0.5 w-10 -rotate-12 bg-foreground"></div>
						</div>
					</div>
				</div>

				{/* Exhaustion lines */}
				<div className="absolute -top-32 left-1/2 ml-12 space-y-1">
					<div className="h-0.5 w-4 bg-muted-foreground/40"></div>
					<div className="h-0.5 w-3 bg-muted-foreground/30"></div>
					<div className="h-0.5 w-5 bg-muted-foreground/20"></div>
				</div>
			</div>
		</div>
	)
}

function SprinkledAIGraphic() {
	return (
		<div className="flex h-[400px] w-full items-center justify-center p-8">
			<div className="relative w-full">
				{/* Same Belt */}
				<div className="h-3 w-full animate-scroll-left rounded-full bg-gradient-to-r from-orange-500/20 via-orange-500/30 to-orange-500/20 shadow-inner"></div>

				{/* Tools on Belt with AI Sparkles */}
				<div className="absolute -top-20 flex w-full animate-scroll-left items-center justify-around">
					{['AI CRM', 'AI Excel', 'AI Email', 'AI Task', 'AI CRM', 'AI Excel'].map((tool, i) => (
						<div
							key={i}
							className="group relative flex h-14 w-24 items-center justify-center rounded-lg border-2 border-orange-500/30 bg-gradient-to-br from-background to-orange-500/5 shadow-lg transition-all hover:scale-110 hover:border-orange-500/50"
						>
							<span className="text-sm font-medium">{tool}</span>
							{/* AI Sparkles */}
							<div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center">
								<div className="absolute h-full w-full animate-ping rounded-full bg-orange-500/50"></div>
								<div className="h-3 w-3 rounded-full bg-orange-500"></div>
							</div>
						</div>
					))}
				</div>

				{/* Same Stick Figure - still tired */}
				<div className="absolute -top-40 left-1/2 -translate-x-1/2">
					<div className="animate-bob flex flex-col items-center">
						<div className="h-10 w-10 rounded-full border-2 border-foreground bg-background shadow-lg"></div>
						<div className="h-16 w-0.5 bg-foreground"></div>
						<div className="relative h-10 w-20">
							<div className="absolute left-0 h-0.5 w-10 rotate-12 bg-foreground"></div>
							<div className="absolute right-0 h-0.5 w-10 -rotate-12 bg-foreground"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function SmarterShovelGraphic() {
	return (
		<div className="flex h-[300px] w-full items-center justify-center p-8">
			<div className="relative">
				{/* Faster Belt */}
				<div className="h-3 w-full animate-scroll-fast rounded-full bg-gradient-to-r from-yellow-500/20 via-yellow-500/30 to-yellow-500/20 shadow-inner"></div>

				{/* Stick Figure with AI Chip - still digging */}
				<div className="absolute -top-32 left-1/2 -translate-x-1/2">
					<div className="animate-bob-fast flex flex-col items-center">
						<div className="relative h-10 w-10 rounded-full border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-background shadow-lg">
							<div className="absolute -right-3 -top-3 rounded-lg bg-yellow-500 px-2 py-1 text-xs font-bold text-background">
								AI
							</div>
						</div>
						<div className="h-16 w-0.5 bg-foreground"></div>
						<div className="relative h-10 w-20">
							<div className="absolute left-0 h-0.5 w-10 rotate-12 bg-foreground"></div>
							<div className="absolute right-0 h-0.5 w-10 -rotate-12 bg-foreground"></div>
						</div>
					</div>
				</div>

				{/* Speed lines */}
				<div className="absolute -top-24 left-1/2 -ml-16 space-y-1">
					<div className="h-0.5 w-8 bg-yellow-500/60"></div>
					<div className="h-0.5 w-6 bg-yellow-500/40"></div>
					<div className="h-0.5 w-10 bg-yellow-500/20"></div>
				</div>
			</div>
		</div>
	)
}

function ElasticSystemGraphic() {
	const [scale, setScale] = useState(1)

	useEffect(() => {
		const interval = setInterval(() => {
			setScale(0.5 + Math.random() * 1.5)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex h-[300px] w-full items-center justify-center p-4">
			<div className="relative h-full w-full">
				{/* Demand Line */}
				<svg className="absolute inset-0 h-full w-full">
					<polyline
						className="animate-draw-line"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeDasharray="4 2"
						opacity="0.3"
						points="0,150 50,100 100,180 150,80 200,140 250,90 300,160"
					/>
					<text x="10" y="20" className="fill-muted-foreground text-xs">
						Demand
					</text>
				</svg>

				{/* Elastic Outcome Orb */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div
						className="flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-500/60 shadow-2xl transition-all duration-1000"
						style={{
							width: `${80 * scale}px`,
							height: `${80 * scale}px`,
						}}
					>
						<span className="text-xs font-bold text-white">Outcome</span>
					</div>
				</div>

				{/* Pulsing rings */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div
						className="animate-ping rounded-full border border-emerald-500/30"
						style={{
							width: `${120 * scale}px`,
							height: `${120 * scale}px`,
						}}
					/>
				</div>
			</div>
		</div>
	)
}