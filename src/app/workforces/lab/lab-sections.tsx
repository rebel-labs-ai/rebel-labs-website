import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
	Brain,
	Layers,
	Search,
	TrendingUp,
	Target,
	BarChart3,
} from "lucide-react"

// Hero Section - Server Component for SEO
export function HeroSection() {
	return (
		<section className="pt-48 sm:pt-32 pb-24 px-4 relative">
			<div className="max-w-5xl mx-auto relative z-10 mt-12 sm:mt-36">
				<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-8 md:p-12">
					<div className="text-center mb-8">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
							The Workforce Lab
						</span>
					</div>
					<div className="text-center">
						{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
						    This is the only H1 on the page - preserved all styling
						    Visual Impact: None - all classes preserved
						    Date: 2025-08-28
						    Agent: Claude
						*/}
						<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
							Forge Your Unfair Advantage.
						</h1>
					</div>
					<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
						For the complex sales and marketing challenges that our standard
						workforces cannot solve, we forge your proprietary workflow into a
						fully autonomous operational asset.
					</p>
					<div className="flex justify-center mt-8">
						<a
							href="https://cal.com/george-westbrook-novosapien/custom-workforce"
							className="inline-block"
							aria-label="Schedule a consultation for custom workforce development"
						>
							<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base min-h-[48px] min-w-[48px] px-6 py-3 ">
								Book a Lab Scoping Session
							</Button>
						</a>
					</div>
				</Card>
			</div>
		</section>
	)
}

// Division of Labor Section - Server Component for SEO
export function DivisionOfLaborSection() {
	return (
		<section className="pt-16 sm:pt-32 pb-16 sm:pb-48 px-4 bg-accent/40">
			<div className="max-w-7xl mx-auto">
				{/* Part A: The Focus */}
				<div className="text-center mb-8 sm:mb-20">
					{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
					    Changed from H2 to H2 (proper hierarchy under H1)
					    Visual Impact: None - all classes preserved
					    Date: 2025-08-28
					    Agent: Claude
					*/}
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-6">
						The New Division of Labor.
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						The Workforce Lab is exclusively focused on solving the most complex
						challenges in revenue operations. Our approach is built on a simple
						but powerful principle: your best people direct the strategy; the
						workforce delivers the outcome.
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
										alt="Novosapien company logo"
										width={60}
										height={60}
										className="w-[60px] h-[60px]"
									/>
								</div>
								<span className="text-2xl text-accent font-light">+</span>
								<div className="relative">
									<Image
										src="/rebel-labs-logo.svg"
										alt="Rebel Labs company logo"
										width={120}
										height={30}
										className="w-[120px] h-auto"
									/>
								</div>
							</div>

							{/* Novosapien description - below logos on mobile */}
							<div className="space-y-3 mb-6">
								<h3 className="text-base font-bold text-foreground text-center">
									Novosapien - The Architects of the System
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed text-center">
									Novosapien provides the foundational architecture and the
									productized, plug-and-play Digital Workforces that form the
									backbone of modern revenue operations.
								</p>
							</div>

							{/* Rebel Labs description - at the bottom on mobile */}
							<div className="space-y-3">
								<h3 className="text-base font-bold text-foreground text-center">
									Rebel Labs - The Elite Forging & Deployment Partner
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed text-center">
									Rebel Labs provides the specialized agentic engineering to
									both seamlessly deploy our productized solutions and to forge
									bespoke workforces for unique, mission-critical challenges.
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
											alt="Novosapien company logo"
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
											alt="Rebel Labs company logo"
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
									<h3 className="text-base sm:text-lg font-bold text-foreground">
										Novosapien - The Architects of the System
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
										Novosapien provides the foundational architecture and the
										productized, plug-and-play Digital Workforces that form the
										backbone of modern revenue operations.
									</p>
								</div>
								<div className="space-y-3 sm:space-y-4">
									<h3 className="text-base sm:text-lg font-bold text-foreground">
										Rebel Labs - The Elite Forging & Deployment Partner
									</h3>
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
							execution layer, we free them from the operational &apos;how&apos;
							so they can focus exclusively on the strategic &apos;what&apos;
							and &apos;why&apos;.
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
	)
}

// Art of the Possible Section - Server Component for SEO
export function ArtOfPossibleSection() {
	return (
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
							and customer interaction to identify patterns, predict churn, and
							deliver real-time coaching insights?
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
	)
}

// Final CTA Section - Server Component for SEO
export function FinalCTASection() {
	return (
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
						strategic session with the leadership to determine if your challenge
						and our capabilities are a perfect match.
					</p>

					<a
						href="https://cal.com/george-westbrook-novosapien/custom-workforce"
						className="inline-block mb-6 sm:mb-8"
						aria-label="Schedule a consultation for custom workforce development"
					>
						<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base min-h-[48px] min-w-[48px] px-6 py-3">
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
	)
}
