import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-32 pb-24 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center">
						<h1 className="text-foreground text-6xl md:text-7xl font-light tracking-tight font-geist-sans">
							Privacy Policy
						</h1>
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
