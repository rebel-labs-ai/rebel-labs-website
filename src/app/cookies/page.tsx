import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CookiesPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="flex-1 flex items-center justify-center py-24 px-4">
				<div className="text-center">
					<h1 className="text-foreground text-4xl font-bold tracking-tight">
						Cookie Policy
					</h1>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
