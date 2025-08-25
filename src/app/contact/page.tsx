import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="flex-1">
				<div className="container mx-auto px-4 py-32">
					<div className="flex items-center justify-center min-h-[60vh]">
						<h1 className="text-foreground text-4xl md:text-6xl font-light tracking-tight font-geist-sans text-center">
							Contact
						</h1>
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}