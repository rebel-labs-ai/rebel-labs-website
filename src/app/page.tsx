import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { AnimatedText } from "@/components/animated-text"
import { ScrollAnimatedSteps } from "@/components/scroll-animated-steps"
import { ElasticInfrastructureGraph } from "@/components/elastic-infrastructure-graph"
import { Footer } from "@/components/footer"

export const metadata = {
	title: "Stop Managing Tools, Start Scaling Revenue",
	description:
		"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue. Discover how AI automation can transform your operations.",
}

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle - Hidden on mobile */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Hero Section with Animated Dots Background */}
			<div className="relative min-h-[85vh] md:min-h-screen md:mb-0">
				{/* Animated Dot Pattern Background for entire hero area */}
				<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full">
					<AnimatedDots />
				</div>

				{/* Gradient overlay from bottom - matches problem section background */}
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40  via-accent/30 via-30% to-transparent pointer-events-none"></div>

				{/* Section 1: Hero - The Declaration */}
				<section className="pt-48 sm:pt-24 md:pt-48 pb-16 md:pb-24 px-4 relative min-h-[75vh] flex items-center md:block md:min-h-0">
					<div className="max-w-4xl mx-auto relative z-10 w-full md:mt-36">
						<div className="text-center mb-6 sm:mb-8">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
								Redefining the way your generate revenue
							</span>
						</div>
						<div className="text-left">
							<h1 className="text-foreground text-[31px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium sm:font-light tracking-tight font-geist-sans">
								Stop Managing Tools.
							</h1>
							<h1 className="text-foreground text-[31px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium sm:font-light tracking-tight font-geist-sans">
								Start <AnimatedText />
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed text-left">
							We deploy digital workforces into your business so you can
							generate revenue on autopilot.
						</p>
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
							<a
								href="https://cal.com/george-westbrook-novosapien/30min"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 w-full sm:w-auto">
									Speak to us
								</Button>
							</a>
							<Button className="bg-white/70 dark:bg-transparent text-foreground dark:text-white border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/30 hover:dark:bg-accent/30 w-full sm:w-auto">
								Try it now
							</Button>
						</div>
					</div>
					{/* Hero Image - Above dots */}
					{/* Light mode image */}
					{/* <img
						src="/home/image.png"
						alt="Hero Image"
						className="w-full max-w-[85%] mx-auto relative z-20 block dark:hidden mt-8"
					 /> */}
					{/* Dark mode image */}
					{/* <img
						src="/home/image-dark.png"
						alt="Hero Image"
						className="w-full max-w-[85%] mx-auto relative z-20 hidden dark:block mt-8"
					/>  */}
				</section>
			</div>

			{/* Section 1.5: We Automate the Full Stack of Revenue Operations */}
			<section className="mx-auto bg-accent/40 relative py-32 sm:py-32">
				<div className="max-w-8xl mx-auto px-4">
					{/* Centered headline and subtext */}
					<div className="text-center mb-8 sm:mb-12">
						<h2
							className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 px-2 sm:px-0"
							style={{
								textShadow:
									"0 0 20px rgba(168, 205, 255, 0.4), 0 0 40px rgba(168, 205, 255, 0.3)",
							}}
						>
							We Automate the Full Stack of Revenue Operations
						</h2>
						<p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
							A Novosapien Digital Workforce isn&apos;t a point solution that
							automates a single task. It&apos;s a complete operational layer
							designed to execute, learn, and scale, freeing your human team to
							focus on what matters most: growth.
						</p>
					</div>

					{/* Content Grid - Three columns layout */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
						{/* Left side - The Operational Power */}
						<div className="space-y-4 sm:space-y-6">
							<div className="mb-3 sm:mb-4 text-left md:text-right">
								<span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
									The Operational Power
								</span>
							</div>

							{/* Element 1: 24/7 Operation */}
							<div className="flex items-start gap-3 sm:gap-4 flex-row md:flex-row-reverse">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div className="text-left md:text-right">
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										24/7 Operation
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										Your workforce operates continuously without breaks,
										holidays, or downtime.
									</p>
								</div>
							</div>

							{/* Element 2: Flawless Execution */}
							<div className="flex items-start gap-3 sm:gap-4 flex-row md:flex-row-reverse">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div className="text-left md:text-right">
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Flawless Execution
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										Eliminate human error. Your workforce runs critical
										processes with perfect consistency and reliability.
									</p>
								</div>
							</div>

							{/* Element 3: Continuous Improvement */}
							<div className="flex items-start gap-3 sm:gap-4 flex-row md:flex-row-reverse">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 13.5l6.785 6.785A48.1 48.1 0 0021 4.5M3 13.5V21h7.5"
										/>
									</svg>
								</div>
								<div className="text-left md:text-right">
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Continuous Improvement
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										Your workforce analyzes every action, learns what works, and
										systematically improves its performance over time.
									</p>
								</div>
							</div>
						</div>

						{/* Middle - Workforce Stack Image */}
						<div className="flex justify-center items-center">
							<div className="max-w-xs w-full">
								{/* Light mode image */}
								<Image
									src="/home/workforce-stack.png"
									alt="Digital Workforce Stack"
									width={400}
									height={300}
									className="w-full h-auto block dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/workforce-stack-dark.png"
									alt="Digital Workforce Stack"
									width={400}
									height={300}
									className="w-full h-auto hidden dark:block"
								/>
							</div>
						</div>

						{/* Right side - The Strategic Impact */}
						<div className="space-y-4 sm:space-y-6">
							<div className="mb-3 sm:mb-4">
								<span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
									The Strategic Impact
								</span>
							</div>

							{/* Element 4: Free Your Talent */}
							<div className="flex items-start gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Free Your Talent
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										Automate the high-volume, repetitive work that frees your
										team for strategic priorities.
									</p>
								</div>
							</div>

							{/* Element 5: Unlock Autonomy */}
							<div className="flex items-start gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Unlock Autonomy
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										A workforce that makes decisions, solves problems, and
										optimizes its own performance to deliver the result.
									</p>
								</div>
							</div>

							{/* Element 6: Scale On Demand */}
							<div className="flex items-start gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 sm:w-6 sm:h-6 text-[#A1BCD1]"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-foreground text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Scale On Demand
									</h3>
									<p className="text-muted-foreground text-xs sm:text-sm">
										Instantly scale your operations to meet any demand, paying
										only for productive output.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 2: What is a Digital Workforce */}
			<section className="py-16 sm:py-32 px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-7xl mx-auto px-2 sm:px-4 rounded-xl relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						{/* Left side - Content */}
						<div>
							<div className="mb-6 sm:mb-8">
								<span className="bg-white dark:bg-transparent text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-3 h-3 sm:w-4 sm:h-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
										/>
									</svg>
									In a nutshell
								</span>
							</div>
							<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
								What is a Digital Workforce?
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
								A Digital Workforce is a collection of autonomous AI agents that
								work together to execute complete business processes from start
								to finish. Unlike traditional automation tools that handle
								single tasks, our digital workers manage entire workflows, make
								decisions, and deliver results 24/7.
							</p>
						</div>

						{/* Right side - Digital Workforce Image */}
						<div className="flex justify-center lg:justify-end">
							<div className="w-full md:max-w-4xl mt-8 md:mt-16">
								{/* Light mode image */}
								<Image
									src="/home/digital-workforce.png"
									alt="Digital Workforce Illustration"
									width={400}
									height={300}
									className="w-full h-auto block dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/digital-workforce-dark.png"
									alt="Digital Workforce Illustration"
									width={400}
									height={300}
									className="w-full h-auto hidden dark:block"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Solution */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8 sm:mb-12">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
							The Solution
						</span>
						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3 sm:mt-4">
							<span className="block sm:inline">We Don&apos;t Sell Tools.</span>{" "}
							<span className="block sm:inline">We Deliver Outcomes.</span>
						</h2>
						<p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2 sm:px-0">
							A Digital Workforce is a collection of autonomous agents that
							execute complete business processes, not individual tasks. They
							operate 24/7, scale instantly, and deliver measurable results.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						<Card className="bg-card-background border border-[#A1BCD1] shadow-lg transition-all hover:border-accent hover:shadow-xl p-6 sm:p-8">
							<div className="flex flex-col h-full">
								<h3 className="text-foreground text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center md:text-left">
									Inbound Conversion Workforce
								</h3>
								<p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 flex-1 text-center md:text-left">
									Transforms website visitors into qualified sales meetings
									through intelligent lead scoring, nurturing sequences, and
									automated follow-up.
								</p>
								{/* Light mode image */}
								<Image
									src="/home/lead-workforce.png"
									alt="Inbound Conversion Workflow"
									width={400}
									height={320}
									className="w-full h-48 sm:h-56 md:h-96 object-contain rounded-lg mb-4 sm:mb-6 block dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/lead-workforce-dark.png"
									alt="Inbound Conversion Workflow"
									width={400}
									height={320}
									className="w-full h-48 sm:h-56 md:h-96 object-contain rounded-lg mb-4 sm:mb-6 hidden dark:block"
								/>
								<div className="text-right">
									<a
										href="/workforces/lead"
										className="text-muted-foreground font-semibold hover:text-accent transition-colors"
									>
										Explore This Workforce →
									</a>
								</div>
							</div>
						</Card>

						<Card className="bg-card-background border border-[#A1BCD1] shadow-lg transition-all hover:border-accent hover:shadow-xl p-6 sm:p-8">
							<div className="flex flex-col h-full">
								<h3 className="text-foreground text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center md:text-left">
									Content Creation Workforce
								</h3>
								<p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 flex-1 text-center md:text-left">
									Produces consistent, high-quality content across all channels,
									from blog posts to social media, aligned with your brand and
									strategy.
								</p>
								{/* Light mode image */}
								<Image
									src="/home/content-workforce.png"
									alt="Content Creation Workflow"
									width={400}
									height={320}
									className="w-full h-48 sm:h-56 md:h-96 object-contain rounded-lg mb-4 sm:mb-6 block dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/content-workforce-dark.png"
									alt="Content Creation Workflow"
									width={400}
									height={320}
									className="w-full h-48 sm:h-56 md:h-96 object-contain rounded-lg mb-4 sm:mb-6 hidden dark:block"
								/>
								<div className="text-right">
									<a href="#" className="text-muted-foreground font-semibold">
										Explore This Workforce →
									</a>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 3.5: The Problem */}
			{/* <section className="py-16 px-4 relative">
				<div className="max-w-7xl mx-auto px-4 py-8 rounded-xl relative z-10">
					<h2 className="text-foreground text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
						Your Revenue is Capped by a Broken Model
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-3xl mx-auto">
						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									Fixed Capacity
								</h3>
								<p className="text-muted-foreground text-sm">
									You pay for idle time and can&apos;t scale instantly.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									Tool Overload
								</h3>
								<p className="text-muted-foreground text-sm">
									Managing dozens of tools creates inefficiency.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									Task Saturation
								</h3>
								<p className="text-muted-foreground text-sm">
									Human talent wasted on repetitive processes.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									High Costs
								</h3>
								<p className="text-muted-foreground text-sm">
									Overhead drains resources without ROI.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									Quality Control
								</h3>
								<p className="text-muted-foreground text-sm">
									Human error impacts deliverable consistency.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
										/>
									</svg>
								</div>
								<h3 className="text-foreground text-lg font-medium mb-2">
									Limited Flexibility
								</h3>
								<p className="text-muted-foreground text-sm">
									Rigid processes can&apos;t adapt to market changes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Section 4: How We Do It */}
			<div className="pt-40">
				<ScrollAnimatedSteps />
			</div>

			{/* Section 5: Core Capabilities */}
			<section className="pt-0 pb-16 sm:pb-24 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-left sm:text-center mb-6 sm:mb-8">
						Core Capabilities
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg text-left sm:text-center max-w-3xl sm:mx-auto mb-8 sm:mb-16">
						Your Digital Workforce is built on an architecture designed to
						deliver outcomes, not just automate tasks. These are its core
						capabilities.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
						{/* Feature One - Elastic Infrastructure (Primary - Large Card) */}
						<div className="md:col-span-2 md:row-span-2 bg-card-background border border-accent shadow-lg rounded-xl p-8 min-h-[350px]">
							<h3 className="text-foreground text-xl font-semibold mb-4">
								Elastic Infrastructure
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-6">
								Your workforce dynamically scales from a single agent to a
								thousand in seconds to meet any demand. You pay for the work
								done, not for idle capacity.
							</p>
							<div className="h-40 md:h-56 rounded-lg overflow-hidden relative">
								<ElasticInfrastructureGraph />
							</div>
						</div>

						{/* Feature Two - Seamless Integration (moved from Feature Five) */}
						<div className="hidden md:block md:col-span-2 bg-card-background border border-accent/30 shadow-lg rounded-xl p-8 min-h-[170px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Seamless Integration
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Your workforce connects natively to your core systems—CRM,
								marketing automation, and calendars—acting as a seamless
								extension of your existing tech stack.
							</p>
						</div>

						{/* Feature Three - Autonomous Execution */}
						<div className="bg-card-background border border-accent/30 shadow-lg rounded-xl p-6 min-h-[170px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Autonomous Execution
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Your workforce manages complex, multi-step processes from end to
								end, executing its mission without the need for your constant
								intervention or management.
							</p>
						</div>

						{/* Feature Four - Collaborative Reasoning (moved from Feature Two) */}
						<div className="md:row-span-2 bg-card-background border border-accent shadow-lg rounded-xl p-6 min-h-[370px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Collaborative Reasoning
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-4">
								Inside your workforce, specialized agents—like Researchers and
								Strategists—debate and critique each other&apos;s work to find
								the optimal path to your objective.
							</p>
							<div className=" rounded-lg h-70 mt-4 overflow-hidden flex items-center justify-center">
								{/* Light mode image */}
								<Image
									src="/home/reasoning.svg"
									alt="Collaborative Reasoning"
									width={400}
									height={300}
									className="w-2/3 md:w-full h-auto max-w-full max-h-full object-contain mt-8 block dark:hidden mx-auto"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/reasoning-dark.svg"
									alt="Collaborative Reasoning"
									width={400}
									height={300}
									className="w-2/3 md:w-full h-auto max-w-full max-h-full object-contain mt-8 hidden dark:block mx-auto"
								/>
							</div>
						</div>

						{/* Feature Five - Real-Time Optimization (moved from Feature Four) */}
						<div className="md:col-span-2 bg-card-background border border-accent/30 shadow-lg rounded-xl p-8 min-h-[200px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Understand the Why, Not Just the What
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-4">
								Your workforce doesn&apos;t just report on performance—it
								explains it. Get clear, actionable insights and strategic
								recommendations delivered automatically.
							</p>
							<div className="hidden md:flex rounded-lg h-20 items-center justify-center">
								{/* Light mode image */}
								<Image
									src="/home/understand.svg"
									alt="Understand the Why"
									width={400}
									height={80}
									className="w-full h-auto max-w-full max-h-full object-contain block dark:hidden"
								/>
								{/* Dark mode image */}
								<Image
									src="/home/understand-dark.svg"
									alt="Understand the Why"
									width={400}
									height={80}
									className="w-full h-auto max-w-full max-h-full object-contain hidden dark:block"
								/>
							</div>
						</div>

						{/* Feature Six - Outcome-Centric Reporting */}
						<div className="hidden md:block bg-card-background border border-accent shadow-lg rounded-xl p-6 min-h-[200px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Outcome-Centric Reporting
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Get transparent reporting focused on the business outcomes your
								workforce delivers and the direct ROI, not on vanity metrics
								like &quot;tasks completed.&quot;
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: The New Equation of Value */}
			<section className="py-16 sm:py-32 px-4 bg-background">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-16">
						The New Equation of Value
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Before: Rigid Operations */}
						<div className="flex flex-col">
							<div className="mb-4">
								<span className="bg-red-500/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] inline-block">
									Before
								</span>
							</div>
							<div
								className="bg-card-background border border-red-500 rounded-xl p-8 flex-1"
								style={{
									boxShadow: "inset 0 6px 12px rgba(239, 68, 68, 0.15)",
								}}
							>
								<h3 className="text-foreground text-xl font-bold mb-6">
									Rigid Operations
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
											Locked into fixed costs for headcount and software.
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
											Growth is capped by the linear speed of your team.
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
											Scaling requires slow, expensive hiring projects.
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
											Execution quality is subject to human error and
											inconsistency.
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
											Pivoting strategy is slow, costly, and risks market
											momentum.
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
											Budget is spent on tasks, not the final result.
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* After: Elastic Operations - Highlighted */}
						<div className="flex flex-col">
							<div className="mb-4">
								<span className="bg-green-500/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)] inline-block">
									After
								</span>
							</div>
							<div
								className="bg-card-background border border-green-500 rounded-xl p-8 flex-1"
								style={{ boxShadow: "0 8px 16px rgba(34, 197, 94, 0.25)" }}
							>
								<h3 className="text-foreground text-xl font-bold mb-6">
									Elastic Operations
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
											Pay for productive output, not for idle time.
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
											Growth is driven by 24/7 autonomous operations.
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
											Scale capacity instantly, on demand, without projects.
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
											Achieve inhuman consistency and precision in every action.
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
											Adapt to market changes instantly with a fluid operational
											model.
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
											Budget is spent directly on the revenue-generating
											outcome.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 7: Final CTA */}
			<section className="py-16 sm:py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-6 sm:p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-4 sm:mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-accent/30 whitespace-nowrap">
								Ready to Transform Your Operations?
							</span>
						</div>

						<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
							Stop Buying Smarter Shovels.
							<br />
							<span className="text-accent">Start Delivering Outcomes.</span>
						</h2>

						<p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
							Join forward-thinking companies who are achieving measurable
							results with Digital Workforces. Your transformation starts with a
							single conversation.
						</p>

						<div className="flex justify-center">
							<a
								href="https://cal.com/george-westbrook-novosapien/30min"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
									Book a Demo
								</Button>
							</a>
						</div>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
