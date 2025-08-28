"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Step {
	title: string
	description: string
}

const steps: Step[] = [
	{
		title: "Mission & Blueprint",
		description:
			"We begin by mapping your exact operational reality and defining the precise business outcome you need to achieve. Our strategists work with your team to create a comprehensive blueprint for your Digital Workforce, ensuring perfect alignment with your existing workflows and success metrics from day one.",
	},
	{
		title: "Deployment & Integration",
		description:
			"With the blueprint approved, our engineers deploy your configured Digital Workforce into your environment. We handle all technical setup and seamlessly integrate the workforce with your core systems—like your CRM and marketing platforms—ensuring a smooth and rapid activation.",
	},
	{
		title: "Optimization & Reporting",
		description:
			"Your Digital Workforce is not static. It continuously monitors its own performance, learning and optimizing its strategies to maximize impact. We provide transparent, outcome-focused reporting so you have a clear, real-time view of the results being delivered and the direct ROI.",
	},
]

export function ScrollAnimatedSteps() {
	const [activeStep, setActiveStep] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)
	const stepRefs = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			const viewportCenter = viewportHeight / 2

			// Find the step that's most centered in the viewport
			let closestStep = 0
			let closestDistance = Infinity

			stepRefs.current.forEach((ref, index) => {
				if (!ref) return

				const rect = ref.getBoundingClientRect()
				const stepCenter = rect.top + rect.height / 2
				const distance = Math.abs(stepCenter - viewportCenter)

				// Update if this step is closer to center than previous closest
				if (distance < closestDistance) {
					closestDistance = distance
					closestStep = index
				}
			})

			// Only update if the closest step is actually visible
			if (closestDistance < viewportHeight / 2) {
				setActiveStep(closestStep)
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll() // Initial check

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<section ref={containerRef} className="relative">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12 md:mb-16">
					How We Do It
				</h2>

				{/* Main container */}
				<div className="relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Left side - Text steps */}
						<div>
							{steps.map((step, index) => (
								<div
									key={index}
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
											<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
												{index === 0
													? "Step One"
													: index === 1
														? "Step Two"
														: "Step Three"}
											</span>
										</div>
										<h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
											{step.title}
										</h3>
										<p className="text-xl leading-relaxed text-muted-foreground">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Right side - Sticky image container */}
						<div className="relative hidden lg:block mt-64 mb-20">
							{/* Sticky container that stays centered */}
							<div className="sticky top-1/2 -translate-y-1/2">
								<div className="relative h-[400px] w-full">
									{/* Image cards that transition */}
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activeStep === 0
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										{/* Light mode image */}
										<Image
											src="/home/step1.png"
											alt="Mission & Blueprint"
											width={600}
											height={400}
											className="w-full h-full object-contain block dark:hidden"
										/>
										{/* Dark mode image */}
										<Image
											src="/home/step1-dark.png"
											alt="Mission & Blueprint"
											width={600}
											height={400}
											className="w-full h-full object-contain hidden dark:block"
										/>
									</div>
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activeStep === 1
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										{/* Light mode image */}
										<Image
											src="/home/step2.png"
											alt="Deployment & Integration"
											width={600}
											height={400}
											className="w-full h-full object-contain block dark:hidden"
										/>
										{/* Dark mode image */}
										<Image
											src="/home/step2-dark.png"
											alt="Deployment & Integration"
											width={600}
											height={400}
											className="w-full h-full object-contain hidden dark:block"
										/>
									</div>
									<div
										className={`absolute inset-0 transition-all duration-700 ${
											activeStep === 2
												? "opacity-100 scale-100 z-10"
												: "opacity-0 scale-95 z-0"
										}`}
									>
										{/* Light mode image */}
										<Image
											src="/home/step3.png"
											alt="Optimization & Reporting"
											width={600}
											height={400}
											className="w-full h-full object-contain block dark:hidden"
										/>
										{/* Dark mode image */}
										<Image
											src="/home/step3-dark.png"
											alt="Optimization & Reporting"
											width={600}
											height={400}
											className="w-full h-full object-contain hidden dark:block"
										/>
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
