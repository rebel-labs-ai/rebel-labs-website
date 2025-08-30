import Image from "next/image"
import Link from "next/link"

// Hub & Spoke Graphic Component - Server rendered with no interactivity
export function HubSpokeGraphic() {
	const spokes = [
		{
			title: "Elastic Operations",
			description:
				"A new state where your execution capacity is no longer a fixed asset, but a fluid resource you summon on demand.",
			angle: 0,
		},
		{
			title: "End Fixed Costs",
			description:
				"Escape the prison of rigid headcount and software seats. Pay only for the productive output that is delivered.",
			angle: 60,
		},
		{
			title: "Infinite Scalability",
			description:
				"Instantly scale from one to a thousand agents to meet any market demand without the delays of hiring.",
			angle: 120,
		},
		{
			title: "Liberate Your Talent",
			description:
				"Free your best people from repetitive execution to focus exclusively on high-value strategy, creativity, and growth.",
			angle: 180,
		},
		{
			title: "Eliminate All Waste",
			description:
				"Create a business perfectly synchronized with reality, where you never pay for idle time or unused capacity.",
			angle: 240,
		},
		{
			title: "Invest Directly in Outcomes",
			description:
				"Shift your budget from paying for effort and capacity to investing directly in the business results that matter.",
			angle: 300,
		},
	]

	// Pre-calculate positions to avoid hydration mismatches
	const spokePositions = spokes.map(spoke => {
		const radiusX = 400 // Horizontal radius - wider for more spacing
		const radiusY = 250 // Vertical radius - shorter to reduce vertical gaps
		const angleInRadians = (spoke.angle * Math.PI) / 180
		// Round to avoid floating point precision issues
		const x = Math.round(Math.cos(angleInRadians) * radiusX)
		const y = Math.round(Math.sin(angleInRadians) * radiusY)
		return { x, y }
	})

	return (
		<div className="flex items-center justify-center py-8">
			{/* Mobile Layout - Just the Hub */}
			<div className="block lg:hidden w-full">
				{/* Central Hub SVG for Mobile */}
				<div className="flex justify-center">
					<Image
						src="/mission/hub.svg"
						alt="Novosapien central hub representing elastic operations"
						width={160}
						height={160}
						className="w-40 h-40 dark:hidden"
						priority
					/>
					<Image
						src="/mission/hub-dark.svg"
						alt="Novosapien central hub representing elastic operations"
						width={160}
						height={160}
						className="w-40 h-40 hidden dark:block"
						priority
					/>
				</div>
			</div>

			{/* Desktop Layout - Elliptical */}
			<div className="hidden lg:block relative h-[700px] w-full max-w-7xl px-4">
				{/* Central Hub SVG */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
					<Image
						src="/mission/hub.svg"
						alt="Novosapien central hub representing elastic operations"
						width={224}
						height={224}
						className="w-56 h-56 dark:hidden"
						priority
					/>
					<Image
						src="/mission/hub-dark.svg"
						alt="Novosapien central hub representing elastic operations"
						width={224}
						height={224}
						className="w-56 h-56 hidden dark:block"
						priority
					/>
				</div>

				{/* Spoke Boxes positioned in an ellipse */}
				{spokes.map((spoke, index) => {
					const position = spokePositions[index]
					return (
						<div
							key={index}
							className="absolute left-1/2 top-1/2"
							style={{
								transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
							}}
						>
							{/* Text Box - Wider and shorter */}
							<div className="w-80 rounded-xl border border-accent/30 bg-card/90 p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
								<h4 className="mb-2 text-lg font-semibold text-accent">
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

// Related Solutions Section - Server component with internal linking
export function RelatedSolutionsSection() {
	return (
		<section className="py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<h2 className="text-3xl font-light tracking-tight text-foreground mb-8 text-center">
					Explore Our AI Workforce Solutions
				</h2>
				<div className="grid gap-6 md:grid-cols-3">
					<Link
						href="/workforces/content-creation"
						className="block rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:border-accent"
					>
						<h3 className="text-xl font-semibold mb-2 text-foreground">
							Content Workforce
						</h3>
						<p className="text-muted-foreground mb-4">
							Generate high-quality blog posts, social media content, and
							marketing copy at scale with AI-powered content creation.
						</p>
						<span className="text-accent font-medium inline-flex items-center">
							Learn more →
						</span>
					</Link>

					<Link
						href="/workforces/inbound-sales"
						className="block rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:border-accent"
					>
						<h3 className="text-xl font-semibold mb-2 text-foreground">
							Inbound Sales Workforce
						</h3>
						<p className="text-muted-foreground mb-4">
							Never lose an inbound lead again. Deploy an autonomous workforce
							that converts your raw leads into qualified, sales-ready meetings,
							24/7.
						</p>
						<span className="text-accent font-medium inline-flex items-center">
							Learn more →
						</span>
					</Link>

					<Link
						href="/workforces/lab"
						className="block rounded-xl border border-accent/30 bg-card/90 p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:border-accent"
					>
						<h3 className="text-xl font-semibold mb-2 text-foreground">
							Workforce Lab
						</h3>
						<p className="text-muted-foreground mb-4">
							Experiment with cutting-edge AI capabilities and preview upcoming
							workforce features in our innovation lab.
						</p>
						<span className="text-accent font-medium inline-flex items-center">
							Explore lab →
						</span>
					</Link>
				</div>
			</div>
		</section>
	)
}
