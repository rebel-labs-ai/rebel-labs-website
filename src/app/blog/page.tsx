import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Bell, Sparkles, Calendar } from "lucide-react"

export const metadata: Metadata = {
	title: "Blog - Coming Soon | NovoSapien",
	description:
		"Our blog is coming soon. Stay tuned for insights on AI workforces, automation strategies, and digital transformation.",
}

export default function BlogComingSoonPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 min-h-[80vh] flex items-center justify-center">
				<div className="max-w-4xl mx-auto text-center">
					{/* Animated Icon */}
					<div className="mb-8 relative">
						<div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center animate-pulse">
							<Sparkles className="w-12 h-12 text-accent" />
						</div>
						<div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br from-accent/10 to-accent/20 rounded-full animate-ping" />
					</div>

					{/* Coming Soon Text */}
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
						Coming Soon
					</h1>

					<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						We&apos;re crafting insightful content about AI workforces,
						automation strategies, and the future of digital transformation.
					</p>

					{/* Feature Preview */}
					<div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
						<div className="p-6 bg-muted/30 rounded-lg border border-accent/20">
							<div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
								<Sparkles className="w-5 h-5 text-accent" />
							</div>
							<h3 className="font-medium text-foreground mb-2">
								Expert Insights
							</h3>
							<p className="text-sm text-muted-foreground">
								Deep dives into AI technology and automation strategies
							</p>
						</div>

						<div className="p-6 bg-muted/30 rounded-lg border border-accent/20">
							<div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
								<Calendar className="w-5 h-5 text-accent" />
							</div>
							<h3 className="font-medium text-foreground mb-2">
								Weekly Updates
							</h3>
							<p className="text-sm text-muted-foreground">
								Fresh content on the latest in digital workforce innovation
							</p>
						</div>

						<div className="p-6 bg-muted/30 rounded-lg border border-accent/20">
							<div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
								<Bell className="w-5 h-5 text-accent" />
							</div>
							<h3 className="font-medium text-foreground mb-2">Case Studies</h3>
							<p className="text-sm text-muted-foreground">
								Real success stories from companies using AI workforces
							</p>
						</div>
					</div>

					{/* Newsletter Signup */}
					<div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8 max-w-2xl mx-auto border border-accent/20">
						<h2 className="text-2xl font-light mb-4 text-foreground">
							Be the First to Know
						</h2>
						<p className="text-muted-foreground mb-6">
							Join our newsletter to get notified when we launch our blog and
							receive exclusive insights.
						</p>
						<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 rounded-lg bg-background border border-accent/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm"
								required
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap text-sm"
							>
								Notify Me
								<ArrowRight className="w-3 h-3" />
							</button>
						</form>
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
