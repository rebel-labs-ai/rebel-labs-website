"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
	ChevronDown,
	Sparkles,
	Zap,
	Brain,
	Rocket,
	Target,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Twinkling Stars Background Component
function TwinklingStars() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Set canvas size
		const setCanvasSize = () => {
			canvas.width = window.innerWidth
			canvas.height = document.documentElement.scrollHeight
		}
		setCanvasSize()
		window.addEventListener("resize", setCanvasSize)

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

			stars.forEach(star => {
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
			window.removeEventListener("resize", setCanvasSize)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0"
			style={{ background: "transparent" }}
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
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(index)
					}
				}
			})
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (index: number) => {
		sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
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
					ref={el => {
						sectionsRef.current[0] = el
					}}
					className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-18"
				>
					<div className="mx-auto max-w-5xl">
						<div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-card/80 p-12 backdrop-blur-lg shadow-[0_0_50px_rgba(var(--accent),0.1)]">
							{/* Animated gradient border effect */}
							<div className="absolute inset-0 -z-10">
								<div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-accent via-accent-teal to-accent bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]" />
								<div className="absolute inset-0 rounded-3xl bg-card/95" />
							</div>

							<div className="relative z-10 text-center">
								<div className="mb-6 flex justify-center">
									<Sparkles className="h-12 w-12 text-accent animate-pulse" />
								</div>
								<h1
									className={`text-foreground text-5xl md:text-7xl font-light tracking-tight transition-all duration-1000 ${
										showIntro
											? "translate-y-0 opacity-100"
											: "translate-y-4 opacity-0"
									}`}
								>
									The Future of Productive Work is Not Another, Better Tool.
								</h1>
								<p
									className={`text-muted-foreground text-xl mt-8 leading-relaxed transition-all duration-1000 delay-300 ${
										showSubtext
											? "translate-y-0 opacity-100"
											: "translate-y-4 opacity-0"
									}`}
								>
									It is a new means of production, where autonomous workforces
									deliver outcomes, not just assist with tasks.
								</p>
							</div>
						</div>
					</div>
					<button
						onClick={() => scrollToSection(1)}
						className="absolute bottom-12 flex animate-bounce flex-col items-center text-muted-foreground transition-colors hover:text-foreground"
					>
						<ChevronDown className="h-8 w-8" />
					</button>
				</section>

				{/* Main Content with Cards */}
				<div className="relative mx-auto max-w-7xl px-6 py-24">
					<div className="space-y-32">
						{/* Section 1: The Old World is Broken */}
						<section
							ref={el => {
								sectionsRef.current[1] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 1
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-30"
								}`}
							>
								<div className="grid gap-8 lg:grid-cols-2">
									{/* Content */}
									<div>
										<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
											The Old World is Broken.
										</h2>
										<div className="space-y-4">
											<p className="text-lg text-muted-foreground">
												For the last two decades, &quot;Software as a
												Service&quot; has sold you a simple promise: a better
												tool. A better CRM, a better spreadsheet, a better
												email client.
											</p>
											<p className="text-lg text-muted-foreground">
												They gave your team better hammers and better shovels.
												But your team was still in the ditch, digging. The
												work itself didn&apos;t change. The human remained the
												bottleneck.
											</p>
											<p className="text-lg font-semibold text-foreground border-l-4 border-accent pl-4 mt-6">
												This era of incremental tools is over.
											</p>
										</div>
									</div>

									{/* Visual Card */}
									<div className="relative overflow-hidden rounded-2xl p-8 flex items-center justify-center">
										<img
											src="/mission/conveyer1.svg"
											alt="Old World Assembly Line"
											className="w-full h-auto dark:hidden"
										/>
										<img
											src="/mission/conveyer1-dark.svg"
											alt="Old World Assembly Line"
											className="w-full h-auto hidden dark:block"
										/>
									</div>
								</div>
							</div>
						</section>

						{/* Section 2: A New Coat of Paint */}
						<section
							ref={el => {
								sectionsRef.current[2] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 2
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-30"
								}`}
							>
								<div className="grid gap-8 lg:grid-cols-2">
									{/* Visual Card */}
									<div className="relative order-2 overflow-hidden rounded-2xl p-8 flex items-center justify-center lg:order-1">
										<img
											src="/mission/conveyer2.svg"
											alt="AI Sprinkled Tools"
											className="w-full h-auto dark:hidden"
										/>
										<img
											src="/mission/conveyer2-dark.svg"
											alt="AI Sprinkled Tools"
											className="w-full h-auto hidden dark:block"
										/>
									</div>

									{/* Content */}
									<div className="order-1 lg:order-2">
										<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
											A New Coat of Paint on a Crumbling Foundation.
										</h2>
										<div className="space-y-4">
											<p className="text-lg text-muted-foreground">
												First, the old guard of SaaS began to sprinkle AI onto
												their broken models. &quot;AI-powered&quot; features
												and &quot;smarter&quot; suggestions were bolted onto
												the same underlying tools.
											</p>
											<p className="text-lg text-muted-foreground">
												The fundamental paradigm never changed. Your team was
												still forced to manage a fragmented stack of
												applications, now with a few new bells and whistles.
											</p>
											<p className="text-lg font-semibold text-foreground border-l-4 border-accent pl-4 mt-6">
												It was a smarter interface on the same rigid process.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Section 3: The Burden of the Blank Canvas */}
						<section
							ref={el => {
								sectionsRef.current[3] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 3
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-30"
								}`}
							>
								<div className="grid gap-8 lg:grid-cols-[1fr_300px]">
									<div>
										<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight mb-6">
											The Burden of the Blank Canvas.
										</h2>
										<div className="space-y-4">
											<p className="text-lg text-muted-foreground">
												Now, the full storm has arrived: the generative AI
												chatbot. Powerful, conversational interfaces like
												ChatGPT and Claude that promise limitless potential.
											</p>
											<p className="text-lg text-muted-foreground">
												But this promise comes with a hidden cost. Their value
												is not inherent in the tool; it is entirely dependent
												on the skill of the user. The quality of the output is
												a direct reflection of the quality of the input.
											</p>
											<p className="text-lg text-muted-foreground">
												Your team&apos;s ability to extract value is now
												capped by their ability to write the perfect prompt.
												The human is still the strategic bottleneck, now
												burdened with the new, specialized task of
												&quot;prompt engineer.&quot;
											</p>
											<p className="mt-8 border-l-4 border-accent pl-4 text-xl font-bold text-foreground">
												It is a tool of infinite potential, but a tool
												nonetheless.
											</p>
										</div>
									</div>
									<div className="relative">
										{/* AI Logos */}
										<div className="flex items-center justify-center p-4">
											<img
												src="/mission/ai-logos.svg"
												alt="AI Technology Logos"
												className="w-full h-auto max-w-[280px] dark:hidden"
											/>
											<img
												src="/mission/ai-logos-dark.svg"
												alt="AI Technology Logos"
												className="w-full h-auto max-w-[280px] hidden dark:block"
											/>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Section 4: The Principle */}
						<section
							ref={el => {
								sectionsRef.current[4] = el
							}}
							className="scroll-mt-24 pt-12"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 4
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-30"
								}`}
							>
								<div className="space-y-24">
									{/* Main Content */}
									<div className="text-center">
										<h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-6">
											We Don&apos;t Sell Tools. We Deliver Outcomes.
										</h2>
										<p className="text-xl text-muted-foreground">
											The world doesn&apos;t need another application to manage or
											another prompt to write. It needs the job to be done.
										</p>
									</div>

									{/* Comparison Cards */}
									<div className="grid gap-6 md:grid-cols-3">
										<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
											<p className="text-sm text-muted-foreground mb-3">
												Instead of...
											</p>
											<p className="mb-4 text-base line-through opacity-50">
												&quot;A smarter email assistant&quot;
											</p>
											<p className="text-lg font-bold text-accent">
												We deliver a booked sales meeting.
											</p>
										</div>
										<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
											<p className="text-sm text-muted-foreground mb-3">
												Instead of...
											</p>
											<p className="mb-4 text-base line-through opacity-50">
												&quot;A faster content writer&quot;
											</p>
											<p className="text-lg font-bold text-accent">
												We deliver a published, multi-platform campaign.
											</p>
										</div>
										<div className="rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg">
											<p className="text-sm text-muted-foreground mb-3">
												Instead of...
											</p>
											<p className="mb-4 text-base line-through opacity-50">
												&quot;A better research tool&quot;
											</p>
											<p className="text-lg font-bold text-accent">
												We deliver the finished, actionable intelligence that
												wins the deal.
											</p>
										</div>
									</div>

									{/* Digital Workforces Card */}
									<div className="relative p-8 text-center">
										<h3 className="mb-4 text-2xl font-bold text-foreground">
											We Build Digital Workforces.
										</h3>
										<p className="mx-auto max-w-3xl text-lg text-muted-foreground">
											A complete, self-managing digital
											team. It is composed of specialized AI agents,
											researchers, strategists, and executioners, that work
											together as a single, cohesive unit to own a business
											outcome from end to end.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Section 5: The Promised Land */}
						<section
							ref={el => {
								sectionsRef.current[5] = el
							}}
							className="scroll-mt-24"
						>
							<div
								className={`transition-all duration-1000 ${
									activeSection >= 5
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-30"
								}`}
							>
								<div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-gradient-to-br from-accent/5 via-card/80 to-accent/5 p-12 backdrop-blur-lg shadow-[0_0_50px_rgba(var(--accent),0.1)]">
									<div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
									<div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

									<div className="relative z-10">
										<div className="mb-8 inline-flex rounded-lg bg-accent/10 p-4">
											<Rocket className="h-8 w-8 text-accent" />
										</div>
										<h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-8">
											The Promised Land: Elastic Operations.
										</h2>

										{/* Introductory Paragraph */}
										<div className="mb-12">
											<p className="text-lg text-muted-foreground">
												The enemy of your ambition has always been the fixed
												cost of capacity. It is the iron law of the old world
												that dictates you must buy your capacity—whether human
												or software—in rigid, expensive blocks. This is the
												prison of rigid operations. We deliver elastic
												operations as the escape.
											</p>
										</div>

										{/* Hub & Spoke Diagram */}
										<div className="mb-12">
											<HubSpokeGraphic />
										</div>

										{/* Concluding Statement */}
										<div className="text-center">
											<div className="rounded-lg border border-accent/30 bg-accent/5 p-8">
												<p className="text-xl font-regular text-foreground mb-2">
													It&apos;s a future where you are no longer paying for
													capacity.
												</p>
												<p className="text-xl font-semibold text-accent">
													You are investing directly in outcomes.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>

				{/* CTA Section */}
				<section className="py-24 px-4">
					<div className="max-w-4xl mx-auto">
						<Card className="p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
							<div className="inline-block mb-6">
								<span className="bg-accent/10 text-foreground font-semibold px-4 py-2 rounded-full text-sm border border-accent/30">
									Ready to Build the Future?
								</span>
							</div>

							<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							Stop Managing Tools.
							<br />
							<span className="text-accent">Start Commanding Outcomes.</span>
							</h2>

							<p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
								Join the revolution of elastic operations. Experience how digital 
								workforces transform your business or be part of building this future.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/speak">
									<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
										Book a Demo
									</Button>
								</Link>
								<Link href="/careers">
									<Button variant="outline" className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-200">
										Join Our Team
									</Button>
								</Link>
							</div>
						</Card>
					</div>
				</section>

				<Footer />
			</div>
		</div>
	)
}


function HubSpokeGraphic() {
	const spokes = [
		{
			title: "Elastic Operations",
			description: "A new state where your execution capacity is no longer a fixed asset, but a fluid resource you summon on demand.",
			angle: 0,
		},
		{
			title: "End Fixed Costs",
			description: "Escape the prison of rigid headcount and software seats. Pay only for the productive output that is delivered.",
			angle: 60,
		},
		{
			title: "Infinite Scalability",
			description: "Instantly scale from one to a thousand agents to meet any market demand without the delays of hiring.",
			angle: 120,
		},
		{
			title: "Liberate Your Talent",
			description: "Free your best people from repetitive execution to focus exclusively on high-value strategy, creativity, and growth.",
			angle: 180,
		},
		{
			title: "Eliminate All Waste",
			description: "Create a business perfectly synchronized with reality, where you never pay for idle time or unused capacity.",
			angle: 240,
		},
		{
			title: "Invest Directly in Outcomes",
			description: "Shift your budget from paying for effort and capacity to investing directly in the business results that matter.",
			angle: 300,
		},
	]

	return (
		<div className="flex items-center justify-center py-8">
			<div className="relative h-[700px] w-full max-w-7xl px-4">
				{/* Central Hub SVG */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
					<img
						src="/mission/hub.svg"
						alt="Novosapien Hub"
						className="w-56 h-56 dark:hidden"
					/>
					<img
						src="/mission/hub-dark.svg"
						alt="Novosapien Hub"
						className="w-56 h-56 hidden dark:block"
					/>
				</div>

				{/* Spoke Boxes positioned in an ellipse */}
				{spokes.map((spoke, index) => {
					const radiusX = 400 // Horizontal radius - wider for more spacing
					const radiusY = 250 // Vertical radius - shorter to reduce vertical gaps
					const angleInRadians = (spoke.angle * Math.PI) / 180
					const x = Math.cos(angleInRadians) * radiusX
					const y = Math.sin(angleInRadians) * radiusY

					return (
						<div
							key={index}
							className="absolute left-1/2 top-1/2"
							style={{
								transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
							}}
						>
							{/* Text Box - Wider and shorter */}
							<div className="w-80 rounded-xl border border-accent/30 bg-card/90 p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
								<h4 className="mb-2 text-lg font-bold text-accent">
									{spoke.title}
								</h4>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{spoke.description}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
