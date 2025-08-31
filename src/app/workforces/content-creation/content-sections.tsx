import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedDots } from "@/components/animated-dots"
import {
	FileText,
	Video,
	Mail,
	ChevronRight,
	Users,
	MessageSquare,
	Share2,
	Search,
	Layers,
} from "lucide-react"

export function HeroSection() {
	return (
		<div className="relative min-h-screen">
			{/* Animated Dot Pattern Background */}
			<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full">
				<AnimatedDots />
			</div>

			{/* Gradient overlay */}
			<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none"></div>

			{/* Hero Content */}
			<section className="pt-20 sm:pt-32 pb-24 px-4 relative">
				<div className="max-w-5xl mx-auto relative z-10 mt-36">
					<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-6 sm:p-12">
						<div className="text-center mb-4 sm:mb-8">
							<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semism:font-semibold px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
								Content Creation Workforce
							</span>
						</div>
						<div className="text-center">
							{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
							    Original: <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
							    Changed to: h1 (keeping as the main H1)
							    Reason: This is the primary H1 for the page
							    Visual Impact: None - all classes preserved
							    Date: 2025-08-28
							    Agent: Assistant
							*/}
							<h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:font-light tracking-tight font font-medium">
								From Blank Page to Published Campaign.
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed text-center max-w-3xl mx-auto px-2 sm:px-0">
							Turn one strategic brief into 50+ pieces of content across every
							channel. Your self-managing workforce operates 24/7 at machine
							scale.
						</p>
						<Button className=" mt-4 sm:mt-8 mx-auto block bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
							Talk to Us
							{/* Added link to book a strategic session */}
							<a
								href="https://cal.com/george-westbrook-novosapien/content-creation-workforce"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block w-full h-full"
								tabIndex={-1}
								aria-label="Book a Strategic Session for Content Creation Workforce"
								style={{ position: "absolute", inset: 0, zIndex: 10 }}
							></a>
						</Button>
					</Card>
				</div>
			</section>
		</div>
	)
}

export function MethodSection() {
	return (
		<section className="py-16 sm:py-32 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-left sm:text-center mb-8 sm:mb-12">
					{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
					    Original: Would be h2, keeping as h2 for proper hierarchy
					    Changed to: h2 (no change needed)
					    Reason: This is appropriately an h2 under the main page h1
					    Visual Impact: None
					    Date: 2025-08-28
					    Agent: Assistant
					*/}
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
						Your Content Operating System
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
						This is not a one-size-fits-all tool. Deploy a self-directing
						workforce that learns your business, masters your voice, and scales
						your best thinking. Each agent specializes. Together they deliver
						the results.
					</p>
				</div>

				{/* Two-Step Configuration Visual */}
				<div className="relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
						{/* Step 1 Module */}
						<Card className="bg-card-background border-2 border-accent shadow-xl p-6 sm:p-8">
							<div className="mb-6">
								<div className="hidden sm:flex w-12 h-12 bg-accent/20 rounded-lg items-center justify-center mb-4">
									<FileText className="w-6 h-6 text-accent" />
								</div>
								<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
									1. Your Workforce Learns the Business
								</h3>
							</div>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Absorbs Your Strategic Foundation:
										</span>
										<span className="text-muted-foreground ml-2">
											Studies positioning and go-to-market priorities. 48 hours
											to fluency.
										</span>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Masters Your Brand Standards:
										</span>
										<span className="text-muted-foreground ml-2">
											Voice, messaging, quality—encoded and consistent at scale.
										</span>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Maps Your Content Ecosystem:
										</span>
										<span className="text-muted-foreground ml-2">
											Every piece aligned to buyer journey and revenue goals.
										</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Connecting Arrow */}
						<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
							<div className="relative flex items-center">
								<div className="w-16 h-0.5 bg-accent"></div>
								<ChevronRight className="w-6 h-6 text-accent absolute -right-3 top-1/2 -translate-y-1/2" />
							</div>
						</div>

						{/* Step 2 Module */}
						<Card className="bg-card-background border-2 border-accent shadow-xl p-6 sm:p-8">
							<div className="mb-6">
								<div className="hidden sm:flex w-12 h-12 bg-accent/20 rounded-lg items-center justify-center mb-4">
									<Users className="w-6 h-6 text-accent" />
								</div>
								<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
									2. Your Workforce Replicates Your Best Minds
								</h3>
							</div>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Studies Your Subject Matter Experts:
										</span>
										<span className="text-muted-foreground ml-2">
											Analyzes how your top people think and write. Scales their
											perspectives.
										</span>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Develops Specialized Capabilities:
										</span>
										<span className="text-muted-foreground ml-2">
											Each agent masters distinct competencies. Available on
											demand.
										</span>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
									<div>
										<span className="font-semibold text-foreground">
											Scales Expert-Level Thinking:
										</span>
										<span className="text-muted-foreground ml-2">
											Sophistication of your best people. At machine velocity.
										</span>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

export function ImpactAmplifierSection() {
	return (
		<section className="py-16 sm:py-32 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-left sm:text-center mb-8 sm:mb-12">
					{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
					    Original: Would be h2, keeping as h2 for proper hierarchy
					    Changed to: h2 (no change needed)
					    Reason: This is appropriately an h2 under the main page h1
					    Visual Impact: None
					    Date: 2025-08-28
					    Agent: Assistant
					*/}
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
						The New Definition of Leverage
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-3xl sm:mx-auto">
						Your old model gives you a 1:1 return on strategic effort. Your new
						model is an amplifier, systematically transforming one unit of your
						team&apos;s strategic input into an overwhelming multi-platform
						market presence.
					</p>
				</div>

				{/* Impact Amplifier Diagram */}
				<Card className="bg-card-background border border-accent/30 shadow-lg p-6 sm:p-12">
					{/* Mobile Layout - Vertical Stack */}
					<div className="flex flex-col items-center gap-8 lg:hidden">
						{/* Input */}
						<div className="text-center">
							<div className="inline-flex flex-col items-center">
								<div className="w-16 h-16 bg-background border-2 border-accent/30 rounded-lg flex items-center justify-center mb-3">
									<FileText className="w-8 h-8 text-muted-foreground" />
								</div>
								<p className="text-xs font-semibold text-muted-foreground">
									1 Strategic Brief
								</p>
							</div>
						</div>

						{/* Arrow Down */}
						<ChevronRight className="w-6 h-6 text-accent rotate-90" />

						{/* Processor */}
						<div className="text-center">
							<div className="inline-flex flex-col items-center">
								<div className="relative mb-3">
									{/* Light mode image */}
									<Image
										src="/content/circle.svg"
										alt="AI content workforce processing system"
										width={180}
										height={180}
										className="dark:hidden"
										priority
									/>
									{/* Dark mode image */}
									<Image
										src="/content/circle-dark.svg"
										alt="AI content workforce processing system"
										width={180}
										height={180}
										className="hidden dark:block"
										priority
									/>
								</div>
								<p className="text-sm font-bold text-foreground">
									Content Workforce
								</p>
							</div>
						</div>

						{/* Arrow Down */}
						<ChevronRight className="w-6 h-6 text-accent rotate-90" />

						{/* Output */}
						<div className="w-full max-w-sm">
							<div className="grid grid-cols-2 gap-2">
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<FileText className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										Pillar Article
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<MessageSquare className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										LinkedIn Posts
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<Share2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										Tweet Thread
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<Video className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										Video Script
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<Mail className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										Newsletter
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-2">
									<Layers className="w-5 h-5 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground text-center">
										Social Media
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Desktop Layout - Horizontal Flow */}
					<div className="hidden lg:flex items-center justify-between gap-12 max-w-7xl mx-auto">
						{/* Input (Left) */}
						<div className="text-center flex-shrink-0">
							<div className="inline-flex flex-col items-center">
								<div className="w-20 h-20 bg-background border-2 border-accent/30 rounded-lg flex items-center justify-center mb-4">
									<FileText className="w-10 h-10 text-muted-foreground" />
								</div>
								<p className="text-sm font-semibold text-muted-foreground">
									1 Strategic Brief from Your Team
								</p>
							</div>
						</div>

						{/* Arrow from Input to Processor */}
						<div className="hidden lg:flex items-center flex-shrink-0">
							<div className="relative flex items-center">
								<div className="w-16 h-0.5 bg-accent"></div>
								<ChevronRight className="w-6 h-6 text-accent -ml-3" />
							</div>
						</div>

						{/* Processor (Center) */}
						<div className="text-center flex-shrink-0">
							<div className="inline-flex flex-col items-center">
								<div className="relative mb-4">
									{/* Light mode image */}
									<Image
										src="/content/circle.svg"
										alt="AI content workforce processing system"
										width={250}
										height={250}
										className="dark:hidden"
										priority
									/>
									{/* Dark mode image */}
									<Image
										src="/content/circle-dark.svg"
										alt="AI content workforce processing system"
										width={250}
										height={250}
										className="hidden dark:block"
										priority
									/>
									{/* Radiating lines */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-40 h-40 border border-accent/20 rounded-full animate-ping"></div>
									</div>
								</div>
								<p className="text-lg font-bold text-foreground">
									Content Workforce
								</p>
							</div>
						</div>

						{/* Arrow from Processor to Output */}
						<div className="hidden lg:flex items-center flex-shrink-0">
							<div className="relative flex items-center">
								<div className="w-16 h-0.5 bg-accent"></div>
								<ChevronRight className="w-6 h-6 text-accent -ml-3" />
							</div>
						</div>

						{/* Output (Right) - Explosion of content */}
						<div className="text-center flex-shrink-0">
							<div className="grid grid-cols-2 gap-3">
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<FileText className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										1 Pillar Article
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<MessageSquare className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										4 LinkedIn Posts
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<Share2 className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										10-Tweet Thread
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<Video className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										1 Video Script
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<Mail className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										1 Email Newsletter
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3">
									<Search className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										SEO Metadata
									</p>
								</div>
								<div className="bg-background border border-green-500/30 rounded-lg p-3 col-span-2">
									<Layers className="w-6 h-6 text-green-500 mx-auto mb-1" />
									<p className="text-xs font-medium text-foreground">
										Social Media Snippets
									</p>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</section>
	)
}

export function FinalCTASection() {
	return (
		<section className="py-16 sm:py-32 px-4">
			<div className="max-w-4xl mx-auto">
				<Card className="p-6 sm:p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
					<div className="inline-block mb-4 sm:mb-6">
						<span className="bg-accent/10 text-foreground font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-accent/30">
							30 Minutes to Your Content Breakthrough
						</span>
					</div>

					{/* AGENT COMMENT: SEO Optimization - Heading Hierarchy Fix
					    Original: Would be h2, keeping as h2 for proper hierarchy
					    Changed to: h2 (no change needed)
					    Reason: This is appropriately an h2 under the main page h1
					    Visual Impact: None
					    Date: 2025-08-28
					    Agent: Assistant
					*/}
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
						Stop Feeding the Content Treadmill.
					</h2>

					<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
						Your competitors hire their 5th content manager. You deploy a
						workforce producing 10x output at 30% cost. Every week you wait: 50+
						pieces you&apos;re not publishing. 50+ opportunities your
						competition claims.
					</p>

					<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-sm sm:text-base">
						Talk to Us
						{/* Added link to book a strategic session */}
						<a
							href="https://cal.com/george-westbrook-novosapien/content-creation-workforce"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block w-full h-full"
							tabIndex={-1}
							aria-label="Book a Strategic Session for Content Creation Workforce"
							style={{ position: "absolute", inset: 0, zIndex: 10 }}
						></a>
					</Button>
				</Card>
			</div>
		</section>
	)
}
