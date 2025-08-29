"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Clock, AlertCircle, Users, TrendingDown } from "lucide-react"

export function FailureCards() {
	const [expandedFailure, setExpandedFailure] = useState<number | null>(null)

	return (
		<section className="py-32 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-foreground text-4xl font-bold tracking-tight mb-4">
						The Four Systemic Failures of Your Inbound Funnel.
					</h2>
					<p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
						The traditional model of human-led follow-up is not just
						inefficient; it is a complete architectural failure. It breaks down
						at every critical stage, leaking revenue, wasting investment, and
						destroying your ability to forecast.
					</p>
				</div>

				{/* Funnel Diagram with Annotations */}
				<div className="max-w-7xl mx-auto">
					{/* Container with funnel in center and cards around it */}
					<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ">
						{/* Left Column - Two Cards */}
						<div className="space-y-24">
							{/* Top Left - Failure of Speed */}
							<Card
								className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
								onClick={() =>
									setExpandedFailure(expandedFailure === 1 ? null : 1)
								}
							>
								<div className="flex items-start gap-3">
									<Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-foreground font-bold mb-2">
												1. The Failure of Speed
											</h3>
											<span className="text-muted-foreground text-xl">
												{expandedFailure === 1 ? "−" : "+"}
											</span>
										</div>
										<p className="text-muted-foreground text-sm">
											Slow follow-up costs you the deal before the conversation
											even begins.
										</p>
										{expandedFailure === 1 && (
											<div className="mt-4 pt-4 border-t border-red-500/20">
												<p className="text-muted-foreground text-sm mb-3">
													Industry data is unequivocal: the first responder wins
													the deal. Every hour of delay systematically degrades
													the value of your marketing investment.
												</p>
												<ul className="space-y-2 text-sm text-muted-foreground">
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														78% of customers buy from the company that responds
														first.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														A lead is 10x less likely to convert after the first
														hour.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														Your competitors are already engaged while
														you&apos;re still assigning the lead.
													</li>
												</ul>
											</div>
										)}
									</div>
								</div>
							</Card>

							{/* Bottom Left - Failure of Scale */}
							<Card
								className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
								onClick={() =>
									setExpandedFailure(expandedFailure === 3 ? null : 3)
								}
							>
								<div className="flex items-start gap-3">
									<Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-foreground font-bold mb-2">
												3. The Failure of Scale
											</h3>
											<span className="text-muted-foreground text-xl">
												{expandedFailure === 3 ? "−" : "+"}
											</span>
										</div>
										<p className="text-muted-foreground text-sm">
											Your growth is trapped in a linear, expensive cycle of
											hiring more headcount to handle more leads.
										</p>
										{expandedFailure === 3 && (
											<div className="mt-4 pt-4 border-t border-red-500/20">
												<p className="text-muted-foreground text-sm mb-3">
													Scaling with headcount is the most expensive and least
													efficient way to grow. It is a model of diminishing
													returns due to the high costs of hiring, training, and
													churn.
												</p>
												<ul className="space-y-2 text-sm text-muted-foreground">
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														The average SDR costs $75k-$90k per year, before
														they book a single meeting.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														It takes 3-6 months for a new hire to become fully
														productive.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														Annual SDR churn rates often exceed 30%, creating
														constant instability.
													</li>
												</ul>
											</div>
										)}
									</div>
								</div>
							</Card>
						</div>

						{/* Center Column - Funnel Image (Smaller) */}
						<div className="flex justify-center px-4">
							<div className="relative max-w-xs w-full">
								{/* Light mode funnel */}
								<Image
									src="/workforces/leads/funnel.svg"
									alt="Inbound Funnel Diagram"
									width={300}
									height={400}
									className="w-full h-auto dark:hidden"
								/>
								{/* Dark mode funnel */}
								<Image
									src="/workforces/leads/funnel-dark.svg"
									alt="Inbound Funnel Diagram"
									width={300}
									height={400}
									className="w-full h-auto hidden dark:block"
								/>
							</div>
						</div>

						{/* Right Column - Two Cards */}
						<div className="space-y-24">
							{/* Top Right - Failure of Persistence & Quality */}
							<Card
								className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
								onClick={() =>
									setExpandedFailure(expandedFailure === 2 ? null : 2)
								}
							>
								<div className="flex items-start gap-3">
									<AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-foreground font-bold mb-2">
												2. The Failure of Persistence & Quality
											</h3>
											<span className="text-muted-foreground text-xl">
												{expandedFailure === 2 ? "−" : "+"}
											</span>
										</div>
										<p className="text-muted-foreground text-sm">
											Inconsistent nurturing and dropped follow-ups allow the
											majority of your pipeline to go cold.
										</p>
										{expandedFailure === 2 && (
											<div className="mt-4 pt-4 border-t border-red-500/20">
												<p className="text-muted-foreground text-sm mb-3">
													The average sale requires 8-12 touchpoints, yet the
													average salesperson gives up after 2. This gap is
													where the majority of your future revenue is lost.
												</p>
												<ul className="space-y-2 text-sm text-muted-foreground">
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														80% of sales require five or more follow-ups to
														close.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														44% of salespeople give up after one
														&ldquo;no.&rdquo;
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														Inconsistent messaging and context erodes brand
														trust with every touchpoint.
													</li>
												</ul>
											</div>
										)}
									</div>
								</div>
							</Card>

							{/* Bottom Right - Failure of Intelligence */}
							<Card
								className="bg-card-background border-2 border-red-500/30 p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl"
								onClick={() =>
									setExpandedFailure(expandedFailure === 4 ? null : 4)
								}
							>
								<div className="flex items-start gap-3">
									<TrendingDown className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-foreground font-bold mb-2">
												4. The Failure of Intelligence
											</h3>
											<span className="text-muted-foreground text-xl">
												{expandedFailure === 4 ? "−" : "+"}
											</span>
										</div>
										<p className="text-muted-foreground text-sm">
											Without systemic learning, your team is forced to rely on
											guesswork, repeating the same mistakes.
										</p>
										{expandedFailure === 4 && (
											<div className="mt-4 pt-4 border-t border-red-500/20">
												<p className="text-muted-foreground text-sm mb-3">
													Without a systemic way to learn from every
													interaction, your team is forced to rely on gut feel
													and anecdotal evidence, repeating the same mistakes
													indefinitely.
												</p>
												<ul className="space-y-2 text-sm text-muted-foreground">
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														Your best and worst performers are using different
														playbooks, with no way to codify what works.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														Sales and Marketing are misaligned due to a lack of
														objective data on lead quality.
													</li>
													<li className="flex items-start">
														<span className="text-muted-foreground mr-2">
															•
														</span>
														High-stakes strategic decisions are being made on
														the basis of an unreliable pipeline.
													</li>
												</ul>
											</div>
										)}
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
