import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TrendingUp, Zap } from "lucide-react"

const relatedSolutions = [
	{
		href: "/workforces/inbound-sales",
		icon: <TrendingUp className="w-6 h-6 text-accent" />,
		title: "Inbound Sales Workforce",
		description:
			"Never lose an inbound lead again. Deploy an autonomous AI workforce that converts raw leads into qualified meetings 24/7.",
		features: ["85% faster response", "3.5x conversion rate", "24/7 operation"],
	},
	{
		href: "/workforces/lab",
		icon: <Zap className="w-6 h-6 text-accent" />,
		title: "Workforce Lab",
		description:
			"Experiment with cutting-edge AI capabilities and preview upcoming workforce features in our innovation lab.",
		features: ["Beta features", "Custom experiments", "Early access"],
	},
]

export function RelatedSolutionsSection() {
	return (
		<section className="py-16 sm:py-24 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
						Explore Our Other AI Workforces
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
						Discover how our suite of specialized AI workforces can transform
						every aspect of your business operations.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
					{relatedSolutions.map((solution, index) => (
						<Link key={index} href={solution.href} className="block group">
							<Card className="p-6 border border-accent/30 hover:border-accent hover:shadow-lg transition-all group-hover:scale-[1.02] h-full">
								<h3 className="text-xl font-semibold mb-2 text-foreground">
									{solution.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{solution.description}
								</p>
								<span className="text-accent font-semibold text-sm group-hover:text-accent/80">
									Learn more →
								</span>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
