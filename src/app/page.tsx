import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />
			
			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Hero Section with Animated Dots Background */}
			<div className="relative min-h-screen">
				{/* Animated Dot Pattern Background for entire hero area */}
				<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full">
					<AnimatedDots />
				</div>
				
				{/* Section 1: Hero - The Declaration */}
				<section className="pt-32 pb-24 px-4 text-center relative">
					<div className="max-w-5xl mx-auto relative z-10">
					<span className="bg-[#A1BCD1]/10 text-[#A1BCD1] font-semibold px-3 py-1 rounded-full text-sm border border-[#A1BCD1]/10">
						Redefining the way your generate revenue
					</span>
					<h1 className="text-foreground text-5xl md:text-6xl font-bold tracking-tight mt-4">
						Stop Managing Tools.
					</h1>
					<h1 className="text-foreground text-5xl md:text-6xl font-bold tracking-tight mt-2">
						Start  <b className="text-[#A1BCD1]">Delivering Outcomes.</b>
					</h1>
					<p className="text-muted-foreground text-xl max-w-4xl mx-auto mt-6 leading-relaxed">
						We deploy digital workforces into your business so you can generate revenue on autopilot.
					</p>
					<Button className="mt-6 bg-[#A1BCD1] text-white hover:bg-[#8AACCC] border border-[#A1BCD1] shadow-md hover:shadow-lg transition-all duration-200">Speak to us</Button>
					<Button className="mt-6 bg-[#A1BCD1] text-white hover:bg-[#8AACCC] border border-[#A1BCD1] shadow-md hover:shadow-lg transition-all duration-200 ml-4">Try it now</Button>
				</div>
				</section>
				
				{/* Hero Image - Above dots */}
				<img src="/image.png" alt="Hero Image" className="w-full max-w-7xl mx-auto relative z-20 block" />
			</div>

			{/* Section 2: The Problem */}
			<section className="px-4 bg-[#D1E6FA]/10 max-w-7xl mx-auto">
				<div className="max-w-7xl mx-auto py-8">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-8">
						Your Growth is Capped by a Broken Model
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								Fixed Capacity
							</h3>
							<p className="text-muted-foreground mt-2">
								You pay for idle time and can&apos;t scale instantly to meet
								demand.
							</p>
						</div>
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								Tool Overload
							</h3>
							<p className="text-muted-foreground mt-2">
								Managing dozens of tools creates inefficiency and skill gaps.
							</p>
						</div>
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								Task Saturation
							</h3>
							<p className="text-muted-foreground mt-2">
								Human talent is wasted on repetitive, time-consuming processes.
							</p>
						</div>
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								High Costs
							</h3>
							<p className="text-muted-foreground mt-2">
								Salaries, benefits, and overhead drain resources without guaranteed ROI.
							</p>
						</div>
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								Quality Control
							</h3>
							<p className="text-muted-foreground mt-2">
								Human error and inconsistency impact deliverable quality.
							</p>
						</div>
						<div className="p-6 text-center">
							<div className="w-12 h-12 text-muted-foreground mx-auto mb-4">
								<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-foreground text-xl font-bold mt-4">
								Limited Flexibility
							</h3>
							<p className="text-muted-foreground mt-2">
								Rigid processes can't adapt quickly to changing market demands.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Solution */}
			<section className="py-16 px-4 bg-background">
				<div className="max-w-6xl mx-auto">
					
					<div className="text-center mb-12">
						<p className="text-muted-foreground font-semibold uppercase tracking-widest text-sm">
							THE SOLUTION
						</p>
						<h2 className="text-foreground text-4xl font-bold tracking-tight mt-4">
							We Don&apos;t Sell Tools. We Deliver Outcomes.
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
							A Digital Workforce is a collection of autonomous agents that
							execute complete business processes, not individual tasks. They
							operate 24/7, scale instantly, and deliver measurable results.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Card className="bg-card-background border border-[#A1BCD1] shadow-lg transition-all hover:border-accent hover:shadow-xl p-8">
							<div className="flex flex-col h-full">
								<h3 className="text-foreground text-2xl font-bold mb-4">
									Inbound Conversion Workforce
								</h3>
								<p className="text-muted-foreground mb-6 flex-1">
									Transforms website visitors into qualified sales meetings
									through intelligent lead scoring, nurturing sequences, and
									automated follow-up.
								</p>
								<div className="bg-muted/30 rounded-lg h-32 mb-6 flex items-center justify-center">
									<div className="w-16 h-16 bg-muted rounded-lg"></div>
								</div>
								<a href="#" className="text-accent font-bold">
									Explore This Workforce →
								</a>
							</div>
						</Card>

						<Card className="bg-card-background border border-[#A1BCD1] shadow-lg transition-all hover:border-accent hover:shadow-xl p-8">
							<div className="flex flex-col h-full">
								<h3 className="text-foreground text-2xl font-bold mb-4">
									Content Creation Workforce
								</h3>
								<p className="text-muted-foreground mb-6 flex-1">
									Produces consistent, high-quality content across all channels,
									from blog posts to social media, aligned with your brand and
									strategy.
								</p>
								<div className="bg-muted/30 rounded-lg h-32 mb-6 flex items-center justify-center">
									<div className="w-16 h-16 bg-muted rounded-lg"></div>
								</div>
								<a href="#" className="text-accent font-bold">
									Explore This Workforce →
								</a>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 3.5: How We Do It */}
			<section className="py-16 px-4 bg-muted">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
						How We Do It
					</h2>
					
					{/* Step 1: Text left, Image right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
						<div>
							<h3 className="text-foreground text-3xl font-bold mb-6">
								Step One: Discovery & Strategy
							</h3>
							<p className="text-muted-foreground text-xl leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div className="bg-card-background border border-[#A1BCD1] rounded-lg p-8 shadow-lg">
							<div className="w-full h-80 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-24 h-24 bg-muted rounded-lg"></div>
							</div>
						</div>
					</div>

					{/* Step 2: Image left, Text right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
						<div className="bg-card-background border border-[#A1BCD1] rounded-lg p-8 shadow-lg lg:order-first">
							<div className="w-full h-80 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-24 h-24 bg-muted rounded-lg"></div>
							</div>
						</div>
						<div>
							<h3 className="text-foreground text-3xl font-bold mb-6">
								Step Two: Implementation & Setup
							</h3>
							<p className="text-muted-foreground text-xl leading-relaxed">
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>

					{/* Step 3: Text left, Image right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-foreground text-3xl font-bold mb-6">
								Step Three: Optimization & Results
							</h3>
							<p className="text-muted-foreground text-xl leading-relaxed">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
							</p>
						</div>
						<div className="bg-card-background border border-[#A1BCD1] rounded-lg p-8 shadow-lg">
							<div className="w-full h-80 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-24 h-24 bg-muted rounded-lg"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Bento Grid Layout */}
			<section className="py-16 px-4 bg-muted">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
						Powerful Features
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
						Everything you need to streamline your workflow and boost productivity.
					</p>
					
					<div className="grid grid-cols-5 gap-4 h-[600px]">
						{/* Left Large Card - 2/5 width, full height */}
						<div className="col-span-2 row-span-2 bg-card-background border border-[#A1BCD1] shadow-lg rounded-xl p-6 flex flex-col">
							<h3 className="text-foreground text-lg font-bold mb-3">
								Feature One
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
							</p>
							<div className="flex-1 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-12 h-12 bg-muted rounded-lg"></div>
							</div>
						</div>

						{/* Top Right - 3/5 width, half height */}
						<div className="col-span-3 bg-card-background border border-[#A1BCD1] shadow-lg rounded-xl p-6 flex flex-col">
							<h3 className="text-foreground text-lg font-bold mb-3">
								Feature Two
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</p>
							<div className="flex-1 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-12 h-12 bg-muted rounded-lg"></div>
							</div>
						</div>

						{/* Bottom Left - 1/5 width */}
						<div className="col-span-1 bg-card-background border border-[#A1BCD1] shadow-lg rounded-xl p-4">
							<h4 className="text-foreground text-sm font-bold mb-2">
								Feature Three
							</h4>
							<p className="text-muted-foreground text-xs leading-relaxed mb-3">
								Duis aute irure dolor in reprehenderit.
							</p>
							<div className="bg-muted/30 rounded-lg h-12 flex items-center justify-center">
								<div className="w-6 h-6 bg-muted rounded"></div>
							</div>
						</div>

						{/* Bottom Center - 1/5 width */}
						<div className="col-span-1 bg-card-background border border-[#A1BCD1] shadow-lg rounded-xl p-4">
							<h4 className="text-foreground text-sm font-bold mb-2">
								Feature Four
							</h4>
							<p className="text-muted-foreground text-xs leading-relaxed mb-3">
								Excepteur sint occaecat cupidatat.
							</p>
							<div className="bg-muted/30 rounded-lg h-12 flex items-center justify-center">
								<div className="w-6 h-6 bg-muted rounded"></div>
							</div>
						</div>

						{/* Bottom Right - 1/5 width */}
						<div className="col-span-1 bg-card-background border border-[#A1BCD1] shadow-lg rounded-xl p-4">
							<h4 className="text-foreground text-sm font-bold mb-2">
								Feature Five
							</h4>
							<p className="text-muted-foreground text-xs leading-relaxed mb-3">
								Non proident, sunt in culpa qui.
							</p>
							<div className="bg-muted/30 rounded-lg h-12 flex items-center justify-center">
								<div className="w-6 h-6 bg-muted rounded"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 5: The New Equation of Value */}
			<section className="py-16 px-4 bg-background">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
						The New Equation of Value
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Before: Rigid Operations */}
						<div className="bg-card-background border border-red-500 rounded-xl p-8 min-h-[400px]" style={{boxShadow: "inset 0 6px 12px rgba(239, 68, 68, 0.15)"}}>
							<h3 className="text-foreground text-xl font-bold mb-6">
								Before: Rigid Operations
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Fixed headcount limits growth potential
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Manual processes create bottlenecks
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Tool management consumes resources
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Inconsistent execution across teams
									</span>
								</li>
							</ul>
						</div>

						{/* After: Elastic Operations - Highlighted */}
						<div className="bg-card-background border border-green-500 rounded-xl p-8 min-h-[400px]" style={{boxShadow: "0 8px 16px rgba(34, 197, 94, 0.25)"}}>
							<h3 className="text-foreground text-xl font-bold mb-6">
								After: Elastic Operations
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Unlimited capacity scales with demand
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Automated end-to-end process execution
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Single platform orchestrates everything
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0">
										<svg fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-muted-foreground">
										Perfect consistency at infinite scale
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: Final CTA */}
			<section className="py-20 px-4 bg-primary">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-primary-foreground text-4xl font-bold tracking-tight">
						Stop Buying Smarter Shovels
					</h2>
					<p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
						Deploy a workforce that delivers the outcome. Your first strategic
						session is the starting point.
					</p>
					<Button
						className="bg-accent text-accent-foreground hover:bg-accent/90 mt-8"
						size="lg"
					>
						Book a Strategic Session
					</Button>
				</div>
			</section>
		</div>
	)
}
