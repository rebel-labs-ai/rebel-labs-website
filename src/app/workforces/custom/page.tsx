"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AnimatedDots } from "@/components/animated-dots"
import { Footer } from "@/components/footer"

export default function CustomWorkforcePage() {
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

				{/* Hero Section */}
				<section className="pt-32 pb-24 px-4 relative">
					<div className="max-w-5xl mx-auto relative z-10 mt-36">
						<div className="items-center">
							{/* Left side - Card with title */}
							<Card className="bg-card-background/80 backdrop-blur-sm border border-accent/20 shadow-xl p-8">
								<div className="text-center mb-6">
									<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-sm tracking-wider border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)]">
										Custom Solutions
									</span>
								</div>
								<div className="text-center">
									<h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-geist-sans">
										Custom Workforce Solutions
									</h1>
								</div>
								<p className="text-muted-foreground text-lg mt-6 leading-relaxed text-center">
									Tailored autonomous workforces designed specifically for your unique business requirements and processes.
								</p>
								<div className="mt-8 text-center">
									<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-base px-6 py-3">
										Get Custom Solution
									</Button>
								</div>
							</Card>
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	)
}