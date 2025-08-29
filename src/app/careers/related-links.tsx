import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RelatedLinks() {
	return (
		<section className="mt-12 pt-8 border-t border-accent/20">
			{/* AGENT COMMENT: SEO Optimization - Internal Linking
				Added related content section to distribute page authority
				SEO Reason: Improves internal linking and topical relevance
				Agent: SEO Agent
				Date: 2025-01-28
			*/}
			<h2 className="text-2xl font-bold mb-6 text-foreground">
				Learn More About Novosapien
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Link
					href="/mission"
					className="block p-6 border border-accent/20 rounded-lg hover:shadow-lg transition-shadow bg-card-background"
					aria-label="Learn about Novosapien's mission and vision"
				>
					<h3 className="text-xl font-semibold mb-2 text-foreground">
						Our Mission
					</h3>
					<p className="text-muted-foreground mb-3">
						Discover how we&apos;re revolutionizing work with autonomous AI
						workforces
					</p>
					<span className="text-accent inline-flex items-center">
						Learn more <ArrowRight className="ml-1 w-4 h-4" />
					</span>
				</Link>

				<Link
					href="/workforces/lab"
					className="block p-6 border border-accent/20 rounded-lg hover:shadow-lg transition-shadow bg-card-background"
					aria-label="Explore our AI content workforce solutions"
				>
					<h3 className="text-xl font-semibold mb-2 text-foreground">
						Workforce Lab
					</h3>
					<p className="text-muted-foreground mb-3">
						Explore the autonomous digital workforces we&apos;re building
					</p>
					<span className="text-accent inline-flex items-center">
						Explore lab <ArrowRight className="ml-1 w-4 h-4" />
					</span>
				</Link>
				

				<Link
					href="/blog"
					className="block p-6 border border-accent/20 rounded-lg hover:shadow-lg transition-shadow bg-card-background"
					aria-label="Read our latest blog posts and insights"
				>
					<h3 className="text-xl font-semibold mb-2 text-foreground">
						Blog & Insights
					</h3>
					<p className="text-muted-foreground mb-3">
						Read about the latest developments in AI and automation
					</p>
					<span className="text-accent inline-flex items-center">
						Read blog <ArrowRight className="ml-1 w-4 h-4" />
					</span>
				</Link>
			</div>
		</section>
	)
}
