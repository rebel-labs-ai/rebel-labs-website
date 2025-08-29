// Removed Card import - using details/summary for collapsible FAQs

const faqs = [
	{
		question:
			"How quickly can the AI Content Workforce start producing content?",
		answer:
			"After the initial onboarding and configuration process (typically 3-5 days), your content workforce can begin producing content immediately. The system learns and improves with each iteration, becoming more aligned with your brand voice over time.",
	},
	{
		question: "Will the content sound generic or AI-generated?",
		answer:
			"No. We configure the workforce with your brand DNA and expert voice profiles. The AI analyzes your existing content to capture your unique style, tone, and perspective. The result is authentic content that sounds like it came from your team, not a machine.",
	},
	{
		question: "Can I review and edit content before it's published?",
		answer:
			"Absolutely. While the workforce can automate the entire process, we recommend human oversight for strategic content. Your team acts as creative directors, providing feedback that the AI uses to refine content instantly. You maintain full control over what gets published.",
	},
	{
		question: "What types of content can the workforce create?",
		answer:
			"The workforce handles the full content spectrum: long-form blog posts, social media content (LinkedIn, Twitter/X, Instagram), email newsletters, video scripts, case studies, whitepapers, and more. Each piece is optimized for its specific platform and audience.",
	},
	{
		question: "How does the content repurposing work?",
		answer:
			"The Repurposing Agent takes a single pillar piece (like a blog post) and automatically creates derivative content for all your channels. One 2,000-word article becomes 4 LinkedIn posts, a 10-tweet thread, an email newsletter, Instagram captions, and more—each formatted perfectly for its platform.",
	},
	{
		question: "Can the AI workforce integrate with our existing tools?",
		answer:
			"Yes. The workforce integrates with popular CMS platforms, social media schedulers, email marketing tools, and analytics platforms. We can work with your existing tech stack or recommend optimizations based on your needs.",
	},
	{
		question: "How do you ensure content quality at scale?",
		answer:
			"The Critic Agent acts as a built-in quality control system, reviewing every piece of content for accuracy, coherence, and brand alignment. Combined with your team's strategic oversight, this ensures consistently high-quality output regardless of volume.",
	},
	{
		question: "What makes this different from ChatGPT or other AI tools?",
		answer:
			"This isn't a generic AI tool—it's a complete content operating system custom-built for your business. Unlike ChatGPT, which requires constant prompting and produces inconsistent results, your workforce operates autonomously, maintains perfect brand consistency, and improves continuously based on performance data.",
	},
]

export function FAQSection() {
	// Generate FAQ schema for SEO
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map(faq => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	}

	return (
		<section className="py-16 sm:py-24 px-4 bg-background">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<details
							key={index}
							className="group bg-card-background border border-accent/20 rounded-lg"
						>
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
								<h3 className="text-foreground text-lg font-semibold pr-4">
									{faq.question}
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6">
								<p className="text-muted-foreground">{faq.answer}</p>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
