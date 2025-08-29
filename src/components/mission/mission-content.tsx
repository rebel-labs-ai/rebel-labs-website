"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"
import { TwinklingStars } from "@/components/twinkling-stars"
import {
	ScrollHandler,
	ScrollToNextButton,
} from "@/components/mission/scroll-handler"
import { AnimatedHero } from "@/components/mission/animated-hero"

export function MissionContent() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
			{/* Twinkling Stars Background */}
			<TwinklingStars />

			{/* Gradient Overlay for depth */}
			<div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background/40" />

			<ScrollHandler>
				{({ sectionsRef, scrollToSection }) => (
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
								<AnimatedHero />
							</div>
							<ScrollToNextButton onClick={() => scrollToSection(1)} />
						</section>

						{/* Main Content with Cards */}
						<div className="relative mx-auto max-w-7xl px-6 py-24">
							{/* Leadership Section */}
							<section
								ref={el => {
									sectionsRef.current[1] = el
								}}
								className="mb-32"
							>
								<Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background via-card to-background p-12">
									<div className="grid gap-8 md:grid-cols-2 md:gap-12">
										<div>
											<h2 className="mb-4 text-3xl font-bold text-foreground">
												Leadership
											</h2>
											<p className="mb-6 text-muted-foreground">
												Our founder has been at the forefront of technological
												innovation for over two decades, building and scaling
												companies that define industries.
											</p>
											<div className="space-y-4">
												<div className="flex items-start space-x-4">
													<img
														src="/images/logos/roblox.svg"
														alt="Roblox"
														className="mt-1 h-6 w-6"
													/>
													<div>
														<h4 className="font-semibold">Roblox</h4>
														<p className="text-sm text-muted-foreground">
															Led product growth initiatives, scaling the
															platform to millions of daily active users through
															innovative engagement features.
														</p>
													</div>
												</div>
												<div className="flex items-start space-x-4">
													<img
														src="/images/logos/pinterest.svg"
														alt="Pinterest"
														className="mt-1 h-6 w-6"
													/>
													<div>
														<h4 className="font-semibold">Pinterest</h4>
														<p className="text-sm text-muted-foreground">
															Architected AI-powered content discovery systems,
															driving significant improvements in user
															engagement and retention metrics.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div>
											<div className="space-y-4">
												<div className="flex items-start space-x-4">
													<img
														src="/images/logos/openai.svg"
														alt="OpenAI"
														className="mt-1 h-6 w-6"
													/>
													<div>
														<h4 className="font-semibold">OpenAI</h4>
														<p className="text-sm text-muted-foreground">
															Early contributor to breakthrough AI research,
															advancing the field of large language models and
															multimodal intelligence.
														</p>
													</div>
												</div>
												<div className="flex items-start space-x-4">
													<img
														src="/images/logos/anthropic.svg"
														alt="Anthropic"
														className="mt-1 h-6 w-6"
													/>
													<div>
														<h4 className="font-semibold">Anthropic</h4>
														<p className="text-sm text-muted-foreground">
															Pioneered constitutional AI approaches, focusing
															on building safe, beneficial AI systems that align
															with human values.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Card>
							</section>

							{/* Agent Network Section */}
							<section
								ref={el => {
									sectionsRef.current[2] = el
								}}
								className="mb-32"
							>
								<Card className="border-2 border-primary/20 bg-gradient-to-br from-background via-card to-background p-12">
									<h2 className="mb-8 text-center text-3xl font-bold text-foreground">
										The Agent Network
									</h2>
									<div className="mx-auto max-w-4xl space-y-8">
										<div className="rounded-lg bg-background/50 p-6">
											<div className="mb-6 flex items-center justify-center">
												<div className="flex -space-x-2">
													{[1, 2, 3, 4, 5].map(i => (
														<div
															key={i}
															className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary text-xs font-bold text-primary-foreground"
														>
															A{i}
														</div>
													))}
												</div>
											</div>
											<h3 className="mb-2 text-center text-xl font-semibold">
												Multi-Agent Collaboration
											</h3>
											<p className="text-center text-muted-foreground">
												Our agents don&apos;t work in isolation. They form
												intelligent networks, collaborating and sharing
												knowledge to achieve complex business goals with
												unprecedented efficiency.
											</p>
										</div>

										<div className="grid gap-6 md:grid-cols-2">
											<div className="rounded-lg bg-background/50 p-6">
												<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
													<img
														src="/images/icons/brain.svg"
														alt="Intelligence"
														className="h-6 w-6"
													/>
												</div>
												<h4 className="mb-2 font-semibold">
													Collective Intelligence
												</h4>
												<p className="text-sm text-muted-foreground">
													Each agent specializes in specific tasks, combining
													their expertise to solve problems no single AI could
													handle alone.
												</p>
											</div>
											<div className="rounded-lg bg-background/50 p-6">
												<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
													<img
														src="/images/icons/growth.svg"
														alt="Growth"
														className="h-6 w-6"
													/>
												</div>
												<h4 className="mb-2 font-semibold">
													Continuous Learning
												</h4>
												<p className="text-sm text-muted-foreground">
													The network evolves with your business, learning from
													every interaction and improving performance over time.
												</p>
											</div>
										</div>
									</div>
								</Card>
							</section>

							{/* Vision Section */}
							<section
								ref={el => {
									sectionsRef.current[3] = el
								}}
								className="mb-32"
							>
								<Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background via-card to-background">
									<div className="grid md:grid-cols-2">
										<div className="p-12">
											<h2 className="mb-6 text-3xl font-bold text-foreground">
												Our Vision
											</h2>
											<div className="space-y-6 text-muted-foreground">
												<p>
													We envision a future where businesses of all sizes can
													leverage the power of AI workforces to compete and
													thrive in the digital economy.
												</p>
												<p>
													By 2030, we aim to have deployed over 100,000 digital
													workers, transforming how companies operate and scale
													their operations globally.
												</p>
												<p className="font-semibold text-foreground">
													The future of work is not about replacing humans, but
													empowering them to achieve more than ever before.
												</p>
											</div>
											<div className="mt-8">
												<Link
													href="/workforces/inbound-sales"
													className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
												>
													Explore Our Workforces
												</Link>
											</div>
										</div>
										<div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
											<div className="absolute inset-0 bg-grid-white/5" />
											<div className="relative flex h-full items-center justify-center p-12">
												<div className="space-y-4 text-center">
													<div className="text-6xl font-bold text-primary">
														100K+
													</div>
													<p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
														Digital Workers by 2030
													</p>
												</div>
											</div>
										</div>
									</div>
								</Card>
							</section>

							{/* Values Section */}
							<section
								ref={el => {
									sectionsRef.current[4] = el
								}}
								className="mb-32"
							>
								<h2 className="mb-12 text-center text-3xl font-bold text-foreground">
									Our Values
								</h2>
								<div className="grid gap-6 md:grid-cols-3">
									{[
										{
											title: "Innovation First",
											description:
												"We push the boundaries of what&apos;s possible with AI, constantly exploring new frontiers in automation and intelligence.",
											icon: "🚀",
										},
										{
											title: "Human-Centric",
											description:
												"Technology should enhance human capabilities. Our AI workforces are designed to amplify human potential, not replace it.",
											icon: "🤝",
										},
										{
											title: "Ethical AI",
											description:
												"We&apos;re committed to developing AI that&apos;s safe, transparent, and aligned with human values and business ethics.",
											icon: "⚖️",
										},
									].map((value, index) => (
										<Card
											key={index}
											className="group border-2 border-primary/10 bg-gradient-to-br from-background to-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
										>
											<div className="mb-4 text-4xl">{value.icon}</div>
											<h3 className="mb-3 text-xl font-semibold text-foreground">
												{value.title}
											</h3>
											<p className="text-muted-foreground">
												{value.description}
											</p>
										</Card>
									))}
								</div>
							</section>

							{/* Future Section */}
							<section
								ref={el => {
									sectionsRef.current[5] = el
								}}
								className="mb-32"
							>
								<Card className="border-2 border-primary/20 bg-gradient-to-br from-background via-card to-background p-12">
									<h2 className="mb-8 text-center text-3xl font-bold text-foreground">
										Building the Future
									</h2>
									<div className="mx-auto max-w-3xl space-y-6 text-center">
										<p className="text-lg text-muted-foreground">
											We&apos;re not just creating AI agents – we&apos;re
											building the infrastructure for the next generation of
											business operations.
										</p>
										<div className="grid gap-4 pt-8 md:grid-cols-3">
											<div className="rounded-lg bg-background/50 p-6">
												<div className="mb-2 text-2xl font-bold text-primary">
													24/7
												</div>
												<p className="text-sm text-muted-foreground">
													Always-on workforce
												</p>
											</div>
											<div className="rounded-lg bg-background/50 p-6">
												<div className="mb-2 text-2xl font-bold text-primary">
													∞
												</div>
												<p className="text-sm text-muted-foreground">
													Infinite scalability
												</p>
											</div>
											<div className="rounded-lg bg-background/50 p-6">
												<div className="mb-2 text-2xl font-bold text-primary">
													0
												</div>
												<p className="text-sm text-muted-foreground">
													Zero downtime
												</p>
											</div>
										</div>
										<div className="pt-8">
											<Link
												href="/careers"
												className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
											>
												Join Our Mission
											</Link>
										</div>
									</div>
								</Card>
							</section>

							{/* Technology Stack Section */}
							<section
								ref={el => {
									sectionsRef.current[6] = el
								}}
								className="mb-32"
							>
								<h2 className="mb-12 text-center text-3xl font-bold text-foreground">
									Powered by Cutting-Edge Technology
								</h2>
								<div className="grid gap-8 md:grid-cols-2">
									<Card className="border-2 border-primary/10 bg-gradient-to-br from-background to-card p-8">
										<h3 className="mb-6 text-xl font-semibold">
											Advanced AI Models
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">GPT-4 & Beyond</span>
												<span className="text-sm text-primary">Latest</span>
											</div>
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">Claude 3</span>
												<span className="text-sm text-primary">Integrated</span>
											</div>
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">Custom Models</span>
												<span className="text-sm text-primary">
													Proprietary
												</span>
											</div>
										</div>
									</Card>
									<Card className="border-2 border-primary/10 bg-gradient-to-br from-background to-card p-8">
										<h3 className="mb-6 text-xl font-semibold">
											Enterprise Infrastructure
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">99.99% Uptime</span>
												<span className="text-sm text-primary">Guaranteed</span>
											</div>
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">SOC 2 Compliant</span>
												<span className="text-sm text-primary">Certified</span>
											</div>
											<div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
												<span className="font-medium">Global CDN</span>
												<span className="text-sm text-primary">Active</span>
											</div>
										</div>
									</Card>
								</div>
							</section>

							{/* CTA Section */}
							<section
								ref={el => {
									sectionsRef.current[7] = el
								}}
								className="mb-32"
							>
								<Card className="overflow-hidden border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-16 text-center">
									<h2 className="mb-4 text-4xl font-bold text-foreground">
										Ready to Transform Your Business?
									</h2>
									<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
										Join the companies already leveraging AI workforces to scale
										their operations and accelerate growth.
									</p>
									<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
										<a
											href="https://cal.com/novosapien/demo"
											className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
										>
											Schedule a Demo
										</a>
										<Link
											href="/workforces/inbound-sales"
											className="inline-flex items-center justify-center rounded-md border border-primary bg-background px-8 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
										>
											Explore Workforces
										</Link>
									</div>
								</Card>
							</section>
						</div>

						<Footer />
					</div>
				)}
			</ScrollHandler>
		</div>
	)
}
