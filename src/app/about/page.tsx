import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<ThemeToggle />

			<main className="flex items-center justify-center min-h-screen pt-16">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-foreground">About Us</h1>
				</div>
			</main>

			<Footer />
		</div>
	)
}
