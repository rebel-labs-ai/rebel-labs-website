// Blog FAQ Section - SEO optimized with schema markup

const faqs = [
	{
		question: "What topics does the Novosapien blog cover?",
		answer:
			"Our blog focuses on AI workforces, automation strategies, digital transformation, and practical insights for businesses looking to scale with intelligent automation. We cover case studies, technical deep-dives, implementation guides, and industry trends.",
	},
	{
		question: "How often is new content published?",
		answer:
			"We publish new articles weekly, ensuring you stay updated with the latest developments in AI automation and digital workforce technologies. Our content calendar includes thought leadership pieces, technical tutorials, and real-world success stories.",
	},
	{
		question: "Can I contribute a guest post to the blog?",
		answer:
			"Yes, we welcome contributions from industry experts and practitioners. Guest posts should align with our focus on AI workforces, automation, and digital transformation. Please contact our editorial team with your article proposal and writing samples.",
	},
	{
		question: "How can I stay updated with new blog posts?",
		answer:
			"Subscribe to our newsletter to receive weekly updates directly in your inbox. You can also follow us on LinkedIn and Twitter/X for real-time notifications about new content, industry insights, and company updates.",
	},
	{
		question: "Are the strategies shared applicable to small businesses?",
		answer:
			"Absolutely. While we showcase enterprise implementations, our content includes scalable strategies suitable for businesses of all sizes. We specifically highlight cost-effective approaches and entry-level automation solutions for smaller organizations.",
	},
	{
		question: "Do you provide implementation guides and tutorials?",
		answer:
			"Yes, many of our articles include step-by-step implementation guides, best practices, and technical tutorials. We break down complex concepts into actionable insights that your team can apply immediately.",
	},
	{
		question: "Can I request coverage of specific topics?",
		answer:
			"We value reader feedback and topic suggestions. If there's a specific aspect of AI workforces or automation you'd like us to cover, please reach out through our contact form or social media channels. We regularly incorporate reader requests into our content planning.",
	},
	{
		question: "Is the blog content suitable for non-technical readers?",
		answer:
			"Yes, we write for a diverse audience. While we do publish technical deep-dives, most of our content is accessible to business leaders, managers, and professionals without a technical background. We always explain complex concepts in clear, practical terms.",
	},
]

export function BlogFAQSection() {
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
				<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-center mb-8 sm:mb-12">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<details
							key={index}
							className="group bg-card-background border border-accent/20 rounded-lg"
						>
							<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors min-h-[48px]">
								<h3 className="text-foreground text-lg font-medium pr-4">
									{faq.question}
								</h3>
								<svg
									className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
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
								<p className="text-muted-foreground leading-relaxed">
									{faq.answer}
								</p>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
