import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { AnimatedText } from "@/components/animated-text"

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
				
				{/* Gradient overlay from bottom - matches problem section background */}
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40  via-accent/30 via-30% to-transparent pointer-events-none"></div>

				{/* Section 1: Hero - The Declaration */}
				<section className="pt-32 pb-24 px-4 relative">
					<div className="max-w-4xl mx-auto relative z-10 mt-36">
						<div className="text-center mb-8">
							<span className="bg-[#A8CDFF]/10 text-[#A8CDFF] dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
								Redefining the way your generate revenue
							</span>
						</div>
						<div className="text-left">
							<h1 className="text-foreground text-6xl md:text-7xl font-light tracking-tight font-geist-sans">
								Stop Managing Tools.
							</h1>
							<h1 className="text-foreground text-6xl md:text-7xl font-light tracking-tight mt-2 font-geist-sans">
								Start <AnimatedText />
							</h1>
						</div>
						<p className="text-muted-foreground text-xl mt-6 leading-relaxed text-left">
							We deploy digital workforces into your business so you can
							generate revenue on autopilot.
						</p>
						<div className="mt-8 text-center">
							<Button className="bg-[#A1BCD1] text-white hover:bg-[#8AACCC] border border-[#A1BCD1] shadow-md hover:shadow-lg transition-all duration-200">
								Speak to us
							</Button>
							<Button className="bg-[#A1BCD1] text-white hover:bg-[#8AACCC] border border-[#A1BCD1] shadow-md hover:shadow-lg transition-all duration-200 ml-4">
								Try it now
							</Button>
						</div>
					</div>
									{/* Hero Image - Above dots */}
					{/* Light mode image */}
					{/* <img
						src="/image.png"
						alt="Hero Image"
						className="w-full max-w-[85%] mx-auto relative z-20 block dark:hidden mt-8"
					 /> */}
					{/* Dark mode image */}
 					{/* <img
						src="/image-dark.png"
						alt="Hero Image"
						className="w-full max-w-[85%] mx-auto relative z-20 hidden dark:block mt-8"
					/>  */}
				</section>


			</div>

			{/* Section 2: What is a Digital Workforce */}
			<section className="mx-auto bg-accent/40 relative">
				<div className="max-w-7xl mx-auto px-4 py-16 rounded-xl relative z-10">
					<div className="text-center mb-8">
						<span className="bg-white dark:bg-background text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(168,205,255,0.4)]">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
							</svg>
							In a nutshell
						</span>
					</div>
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-8">
						What is a Digital Workforce?
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16">
						A Digital Workforce is a collection of autonomous AI agents that work together to execute complete business processes from start to finish. Unlike traditional automation tools that handle single tasks, our digital workers manage entire workflows, make decisions, and deliver results 24/7.
					</p>
					{/* Key characteristics */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="bg-card-background border border-accent/30 rounded-lg p-6 text-center">
							<div className="w-12 h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#A1BCD1]">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.091zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
								</svg>
							</div>
							<h3 className="text-foreground text-lg font-semibold mb-2">Autonomous</h3>
							<p className="text-muted-foreground text-sm">Makes decisions and adapts to situations without human intervention</p>
						</div>
						<div className="bg-card-background border border-accent/30 rounded-lg p-6 text-center">
							<div className="w-12 h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#A1BCD1]">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
								</svg>
							</div>
							<h3 className="text-foreground text-lg font-semibold mb-2">Scalable</h3>
							<p className="text-muted-foreground text-sm">Instantly scales up or down based on demand and workload</p>
						</div>
						<div className="bg-card-background border border-accent/30 rounded-lg p-6 text-center">
							<div className="w-12 h-12 bg-[#A1BCD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#A1BCD1]">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-foreground text-lg font-semibold mb-2">24/7 Operation</h3>
							<p className="text-muted-foreground text-sm">Works continuously without breaks, holidays, or downtime</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Solution */}
			<section className="py-16 px-4 bg-gradient-to-b from-accent/40 via-accent/20 via-30% to-transparent">
				<div className="max-w-6xl mx-auto mt-40">
					<div className="text-center mb-12">
						<span className="bg-[#A8CDFF]/10 text-[#A8CDFF] dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
							THE SOLUTION
						</span>
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
								<img 
									src="https://via.placeholder.com/400x200/A1BCD1/FFFFFF?text=Inbound+Conversion" 
									alt="Inbound Conversion Workflow" 
									className="w-full h-48 object-cover rounded-lg mb-6"
								/>
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
								<img 
									src="https://via.placeholder.com/400x200/A1BCD1/FFFFFF?text=Content+Creation" 
									alt="Content Creation Workflow" 
									className="w-full h-48 object-cover rounded-lg mb-6"
								/>
								<a href="#" className="text-accent font-bold">
									Explore This Workforce →
								</a>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Section 3.5: The Problem */}
			<section className="py-16 px-4 relative">
				<div className="max-w-7xl mx-auto px-4 py-8 rounded-xl relative z-10">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-8">
						Your Revenue is Capped by a Broken Model
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
					{/* Uniform 6-Square Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-3xl mx-auto">
						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									You pay for idle time and can't scale instantly.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden bg-card-background border border-accent/30 rounded-lg p-3 hover:border-accent transition-all duration-300 aspect-square flex flex-col justify-center">
							<div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="text-center">
								<div className="w-10 h-10 text-accent/70 mx-auto mb-3">
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
									Rigid processes can't adapt to market changes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: How We Do It */}
			<section className="py-40 px-4 ">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-32">
						How We Do It
					</h2>

					{/* Step 1: Text left, Image right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
						<div>
							<h3 className="text-foreground text-3xl font-bold mb-6">
								Step One: Discovery & Strategy
							</h3>
							<p className="text-muted-foreground text-xl leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div className="bg-card-background border border-[#A1BCD1] rounded-lg p-8 shadow-lg">
							<div className="w-full h-80 bg-muted/30 rounded-lg flex items-center justify-center">
								<div className="w-24 h-24 bg-muted rounded-lg"></div>
							</div>
						</div>
					</div>

					{/* Step 2: Image left, Text right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
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
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>

					{/* Step 3: Text left, Image right */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
						<div>
							<h3 className="text-foreground text-3xl font-bold mb-6">
								Step Three: Optimization & Results
							</h3>
							<p className="text-muted-foreground text-xl leading-relaxed">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt.
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

			{/* Section 5: Bento Grid Layout */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
						Powerful Features
					</h2>
					<p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
						Everything you need to streamline your workflow and boost
						productivity.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
						{/* Feature One - Large but not full height */}
						<div className="md:col-span-2 md:row-span-2 bg-card-background border border-accent shadow-lg rounded-xl p-8 min-h-[350px]">
							<h3 className="text-foreground text-xl font-semibold mb-4">
								Feature One
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna.
							</p>
							<div className="h-40 bg-muted/20 rounded-lg flex items-center justify-center">
								<div className="w-16 h-16 bg-muted rounded-lg"></div>
							</div>
						</div>

						{/* Feature Two - Wide top right */}
						<div className="md:col-span-2 bg-card-background border border-accent/30 shadow-lg rounded-xl p-8 min-h-[170px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Feature Two
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip.
							</p>
						</div>

						{/* Feature Three - Medium square */}
						<div className="bg-card-background border border-accent/30 shadow-lg rounded-xl p-6 min-h-[170px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Feature Three
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Duis aute irure dolor in reprehenderit.
							</p>
							<div className="bg-muted/20 rounded-lg h-16 mt-4 flex items-center justify-center">
								<div className="w-8 h-8 bg-muted rounded"></div>
							</div>
						</div>

						{/* Feature Four - Tall, spans height of Three and Six */}
						<div className="md:row-span-2 bg-card-background border border-accent shadow-lg rounded-xl p-6 min-h-[370px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Feature Four
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-4">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
							</p>
							<div className="bg-muted/20 rounded-lg h-48 mt-4 flex items-center justify-center">
								<div className="w-12 h-12 bg-muted rounded"></div>
							</div>
						</div>

						{/* Feature Five - Wide bottom */}
						<div className="md:col-span-2 bg-card-background border border-accent/30 shadow-lg rounded-xl p-8 min-h-[200px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Feature Five
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed mb-4">
								Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<div className="bg-muted/20 rounded-lg h-20 flex items-center justify-center">
								<div className="w-12 h-12 bg-muted rounded-lg"></div>
							</div>
						</div>

						{/* Feature Six - Medium square */}
						<div className="bg-card-background border border-accent shadow-lg rounded-xl p-6 min-h-[200px]">
							<h3 className="text-foreground text-xl font-semibold mb-3">
								Feature Six
							</h3>
							<p className="text-muted-foreground text-base leading-relaxed">
								Sed ut perspiciatis unde omnis iste natus.
							</p>
							<div className="bg-muted/20 rounded-lg h-20 mt-4 flex items-center justify-center">
								<div className="w-10 h-10 bg-muted rounded"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: The New Equation of Value */}
			<section className="py-16 px-4 bg-background">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-foreground text-4xl font-bold tracking-tight text-center mb-16">
						The New Equation of Value
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Before: Rigid Operations */}
						<div
							className="bg-card-background border border-red-500 rounded-xl p-8 min-h-[400px]"
							style={{ boxShadow: "inset 0 6px 12px rgba(239, 68, 68, 0.15)" }}
						>
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
						<div
							className="bg-card-background border border-green-500 rounded-xl p-8 min-h-[400px]"
							style={{ boxShadow: "0 8px 16px rgba(34, 197, 94, 0.25)" }}
						>
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

			{/* Section 7: Final CTA */}
			<section className="py-20 px-4 bg-">
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
