import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"
import { MethodSection } from "./method-section"
import { AgentRoster } from "./agent-roster"
import { FailureCards } from "./failure-cards"
import {
	Database,
	Zap,
	Globe,
	ArrowRight,
	Calendar,
	Megaphone,
	Search,
	LineChart,
	Mail,
} from "lucide-react"

export const metadata: Metadata = {
	title: "Inbound Sales Workforce",
	description:
		"Deploy AI-powered inbound sales workforces to automate lead generation, qualification, and conversion. Scale your sales operations with intelligent automation.",
}

export default function LeadWorkforcePage() {
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
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-accent/40 via-accent/30 via-30% to-transparent pointer-events-none"></div>

				{/* Section 1: Part 1.A - The Promise (Hero) */}
				<section className="pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-36">
						<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-12">
							<div className="text-center mb-8">
								<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
									Inbound Sales Workforce
								</span>
							</div>
							<div className="text-center">
								<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans">
									Never Lose an Inbound Lead Again.
								</h1>
							</div>
							<p className="text-muted-foreground text-xl mt-6 leading-relaxed text-center max-w-3xl mx-auto">
								Deploy an autonomous workforce that converts your raw leads into
								qualified, sales-ready meetings, 24/7.
							</p>
							<div className="mt-8 text-center">
								<a
									href="https://demo.novosapien.ai"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-base px-6 py-3">
										See It In Action
									</Button>
								</a>
							</div>
						</Card>
					</div>
				</section>
			</div>

			{/* Section 1: Part 1.B - The Explanation */}
			<section className="py-32 px-4 bg-accent/40">
				<div className="max-w-8xl mx-auto px-4">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2
							className="text-foreground text-4xl font-bold tracking-tight mb-6"
							style={{
								textShadow:
									"0 0 20px rgba(168, 205, 255, 0.4), 0 0 40px rgba(168, 205, 255, 0.3)",
							}}
						>
							A Self-Managing Team for Your Pipeline.
						</h2>
						<p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
							This is not a chatbot or a simple automation tool. It is a
							complete, multi-agent system that autonomously manages the entire
							lead lifecycle—from deep research and strategic outreach to
							intelligent nurturing and appointment setting—delivering a
							flawless handoff to your human sales team.
						</p>
					</div>

					{/* Visual Process Diagram */}
					<div className=" max-w-7xl mx-auto">
						<div className="flex items-center justify-between max-w-6xl mx-auto">
							{/* Input Sources (Left) */}
							<div className="flex flex-col gap-4">
								<div className="text-center">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white mb-4 uppercase tracking-wider">
										Inputs
									</h3>
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Globe className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Website Form</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Megaphone className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">Ads</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Database className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">CRM</span>
									</div>
									<div className="flex items-center gap-3 bg-background/50 border border-accent/20 rounded-lg px-4 py-3">
										<Zap className="w-5 h-5 text-accent" />
										<span className="text-sm font-medium">API</span>
									</div>
								</div>
							</div>

							{/* Arrow */}
							<div className="flex items-center">
								<ArrowRight className="mt-3 w-8 h-8 text-muted-foreground dark:text-white" />
							</div>

							{/* Central Workforce (Center) */}
							<div className="flex-1 max-w-md mx-8 mt-4">
								<div className="bg-accent/10 border-2 border-accent rounded-xl p-6 shadow-xl relative">
									<h3 className="text-lg font-bold text-center mb-4 text-foreground">
										Inbound Conversion Workforce
									</h3>
									<div className="grid grid-cols-3 gap-4">
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Search className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Research
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<LineChart className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white">
												Strategy
											</span>
										</div>
										<div className="text-center">
											<div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center mx-auto mb-2">
												<Mail className="w-6 h-6 text-muted-foreground dark:text-white" />
											</div>
											<span className="text-xs text-foreground dark:text-white ">
												Outreach
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Arrow */}
							<div className="flex items-center">
								<ArrowRight className="w-8 h-8 mt-3 text-muted-foreground dark:text-white" />
							</div>

							{/* Output (Right) */}
							<div className="flex flex-col gap-4">
								<div className="text-center">
									<h3 className="text-sm font-semibold text-muted-foreground dark:text-white mb-4 uppercase tracking-wider">
										Output
									</h3>
								</div>
								<div className="bg-green-500/10 border-2 border-green-500 rounded-lg px-6 py-4">
									<div className="flex items-center gap-3">
										<Calendar className="w-6 h-6 text-green-500" />
										<div>
											<span className="text-sm font-bold text-foreground block">
												Qualified Meeting
											</span>
											<span className="text-xs text-muted-foreground">
												Booked & Briefed
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: The Interactive Roster (Your Digital Team) */}
			<AgentRoster />

			{/* Section 2: The Diagnosis - The Broken Funnel */}
			<FailureCards />

			{/* Section 4: The Method - 4-Step Protocol with Sticky Scroll */}
			<div className="pt-32">
				<MethodSection />
			</div>

			{/* Section 5: Results & ROI */}
			<section className="px-4">
				<div className="max-w-6xl mx-auto">
					{/* Section Header - Proven Results First */}
					<div className="text-center mb-12">
						<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block">
							Proven Results
						</span>
						<h2 className="text-foreground text-4xl font-bold tracking-tight mt-4">
							Redefine Your Team&apos;s ROI
						</h2>
					</div>

					{/* Metrics Grid */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
						<Card className="bg-card-background border border-accent shadow-lg p-6 text-center">
							<div className="text-4xl font-bold text-foreground mb-2">85%</div>
							<p className="text-foreground text-sm">
								Faster Lead Response Time
							</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-6 text-center">
							<div className="text-4xl font-bold text-foreground mb-2">
								3.5x
							</div>
							<p className="text-foreground text-sm">
								Decrease in Human Wasted Time
							</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-6 text-center">
							<div className="text-4xl font-bold text-foreground mb-2">
								99.9%
							</div>
							<p className="text-foreground text-sm">Leads Contacted</p>
						</Card>
						<Card className="bg-card-background border border-accent shadow-lg p-6 text-center">
							<div className="text-4xl font-bold text-foreground mb-2">
								24/7
							</div>
							<p className="text-foreground text-sm">Always-On Operations</p>
						</Card>
					</div>

					{/* Subtitle */}
					<div className="text-center mb-16">
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							The old model measures your team on effort and activity. The new
							model measures them on results. By systemically eliminating the
							manual process, we transform your sales operation from a high-cost
							activity center into a high-leverage growth engine.
						</p>
					</div>

					{/* Before/After Comparison */}
					<div className="flex justify-center">
						{/* Light mode image */}
						<Image
							src="/workforces/leads/before-after.svg"
							alt="Before and After Comparison"
							width={1200}
							height={600}
							className="w-full max-w-6xl h-auto dark:hidden"
						/>
						{/* Dark mode image */}
						<Image
							src="/workforces/leads/before-after-dark.svg"
							alt="Before and After Comparison"
							width={1200}
							height={600}
							className="w-full max-w-6xl h-auto hidden dark:block"
						/>
					</div>
				</div>
			</section>

			{/* Section 7: Final CTA */}
			<section className="py-32 px-4">
				<div className="max-w-4xl mx-auto">
					<Card className="p-12 text-center bg-card-background backdrop-blur-sm border-accent/20">
						<div className="inline-block mb-6">
							<span className="bg-accent/10 text-foreground font-semibold px-4 py-2 rounded-full text-sm border border-accent/30">
								Ready to Transform Your Lead Process?
							</span>
						</div>

						<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
							Stop Losing Leads.
							<br />
							<span className="text-accent">
								Start Converting Automatically.
							</span>
						</h2>

						<p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
							Join companies that are converting 3.5x more leads with an
							autonomous Digital Workforce. See the impact in your pipeline
							within days.
						</p>

						<div className="flex justify-center">
							<a
								href="https://cal.com/george-westbrook-novosapien/30min"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
									Deploy This Workforce
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
