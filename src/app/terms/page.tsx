import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsPage() {
	return (
		<>
			<Navigation />
			<ThemeToggle />
			
			<main className="min-h-screen bg-background">
				{/* Content area with proper spacing for fixed navigation */}
				<div className="pt-24 pb-16 flex items-center justify-center">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-foreground">
							Terms of Service
						</h1>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}