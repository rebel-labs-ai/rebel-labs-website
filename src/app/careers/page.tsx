import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { CareersForm } from "@/components/careers-form"

export const metadata: Metadata = {
	title: "Careers",
	description:
		"Join Novosapien and help shape the future of AI-powered workforces. Explore career opportunities in automation, AI, and digital transformation.",
}

export default function CareersPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
				<div className="max-w-3xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-geist-sans mb-4">
							Join Our Team
						</h1>
						<p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
							We&apos;re building the future of work with autonomous digital
							workforces. Join us on this journey.
						</p>
					</div>

					{/* Application Form */}
					<CareersForm />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
