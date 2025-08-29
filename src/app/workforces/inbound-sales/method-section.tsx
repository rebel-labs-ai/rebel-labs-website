"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Database, Brain, Zap, FileText } from "lucide-react"

export function MethodSection() {
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
				<div className="text-center mb-8 sm:mb-16">
					<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block mb-3 sm:mb-4">
						Our Method
					</span>
					<h2 className="text-foreground text-2xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
						A Disciplined Protocol for Delivering Results
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
						Your workforce follows a proven, four-step protocol to ensure every
						lead is converted with maximum efficiency and intelligence, from
						initial contact to the final handoff.
					</p>
				</div>

				{/* Mobile Layout - Cards with Images */}
				<div className="block lg:hidden">
					{methodSteps.map((step, index) => (
						<div key={step.id} className="mb-12">
							<div className="mb-3">
								<span className="bg-accent/10 text-foreground font-semibold px-3 py-1 rounded-full text-xs border border-accent/30 inline-block">
									{step.label}
								</span>
							</div>
							<h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
								{step.title}
							</h3>
							<p className="text-base leading-relaxed text-muted-foreground mb-6">
								{step.description}
							</p>
							{/* Mobile Image - No background card, larger size */}
							<div className="flex justify-center">
								{/* Light mode image */}
								<Image
									src={`/workforces/leads/step${index + 1}.svg`}
									alt={`${step.title} Visualization`}
									width={500}
									height={400}
									className="w-full h-auto max-h-[300px] object-contain dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src={`/workforces/leads/step${index + 1}-dark.svg`}
									alt={`${step.title} Visualization`}
									width={500}
									height={400}
									className="w-full h-auto max-h-[300px] object-contain hidden dark:block"
								/>
							</div>
						</div>
					))}
				</div>

				{/* Desktop Sticky Scroll Container */}
				<div className="relative hidden lg:block">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
										<h3 className="text-3xl font-bold mb-6 text-foreground">
											{step.title}
										</h3>
										<p className="text-xl leading-relaxed text-muted-foreground">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Right Column - Sticky Visual */}
						<div className="relative hidden lg:block mt-80 mb-32">
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
