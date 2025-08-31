// Removed Card import - using details/summary for collapsible FAQs

const faqs = [
	{
		question: "Will the content sound generic or AI-generated?",
		answer:
			"Your workforce learns from your best content. We analyze 50+ linguistic markers. Sentence cadence. Vocabulary. Storytelling patterns. All encoded into each agent. Research captures your insights. Writer maintains voice. Critic ensures authenticity. Result: Content indistinguishable from your best human writers.",
	},
	{
		question: "Can I maintain control over what gets published?",
		answer:
			"You set boundaries. Workforce executes within them. Auto-publish social. Review blogs. Approve case studies. Your team directs strategy, not tasks. You're commanding an autonomous operation, not managing writers.",
	},
	{
		question: "What types of content can the workforce create?",
		answer:
			"2,500-word SEO articles. LinkedIn thought leadership. Case studies from raw data. Each agent specializes. The workforce coordinates. Message consistency across channels.",
	},
	{
		question: "How does the content repurposing work?",
		answer:
			"One piece becomes a campaign. Your 2,000-word blog autonomously becomes: 5 LinkedIn posts, 12-part Twitter thread, 3 segmented newsletters, 15 social clips, 2 sales one-pagers, FAQ docs. Each optimized for platform algorithms and audience behavior. Zero additional effort. 10x reach.",
	},
	{
		question: "Won't I lose the human creativity and strategic thinking?",
		answer:
			'Workforce amplifies creativity, doesn\'t replace it. Your team provides strategy, concepts, insights. Workforce handles execution at scale. Film director vs production crew. One CMO: "My team finally works at the level they were hired for."',
	},
	{
		question: "How do you ensure content quality at scale?",
		answer:
			"Three-layer architecture. Critic Agent reviews before you see anything. Performance data feeds continuous improvement. Your feedback trains in real-time. Quality improves with volume, not degrades.",
	},
	{
		question: "What makes this different from ChatGPT or other AI tools?",
		answer:
			"ChatGPT is a tool. You work. This is a workforce. It works. No prompting. No copy-paste. No inconsistency. Your Content Workforce operates 24/7. Perfect brand consistency across 1 or 1,000 pieces. Improves automatically from performance data. Swiss Army knife vs production studio.",
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
