// FAQ Section for the Lab page - Server Component for SEO

const faqs = [
	{
		question: "What types of custom workforces can the Lab build?",
		answer:
			"The Lab specializes in complex, mission-critical revenue operations that require bespoke solutions. This includes enterprise deal desk automation, custom lead scoring models, multi-touch attribution systems, competitive intelligence gathering, account-based marketing orchestration, and any unique workflow that's core to your business but too complex for off-the-shelf solutions.",
	},
	{
		question: "How long does it take to build a custom workforce?",
		answer:
			"The typical engagement follows a three-phase protocol over 8-12 weeks. Phase One (Strategic Intent) takes 1-2 weeks for discovery and blueprint creation. Phase Two (Build-Out) runs 4-6 weeks with bi-weekly sprint reviews. Phase Three (Deployment) takes 2-4 weeks for integration and handover. Timeline varies based on complexity and scope.",
	},
	{
		question: "How is the Lab different from your standard workforces?",
		answer:
			"Our standard workforces (Content Creation, Inbound Sales) are productized solutions that solve common challenges across many businesses. The Lab creates entirely custom workforces for your unique, proprietary workflows. Think of it as the difference between buying enterprise software versus building a custom system tailored to your exact specifications.",
	},
	{
		question: "What's required from our team during the build process?",
		answer:
			"Your team acts as the subject matter experts and strategic directors. During Phase One, we'll need 8-10 hours of your team's time for discovery sessions. Throughout Phase Two, expect 2-3 hours per sprint for reviews and feedback. Your involvement ensures the workforce perfectly captures your unique business logic and requirements.",
	},
	{
		question: "Can the custom workforce integrate with our existing systems?",
		answer:
			"Yes. Integration is a core part of our build process. Whether you use Salesforce, HubSpot, Microsoft Dynamics, custom databases, or proprietary tools, we engineer the workforce to seamlessly connect with your tech stack. We handle API integrations, data mapping, and ensure secure, compliant data flow.",
	},
	{
		question: "How do we measure ROI on a custom workforce?",
		answer:
			"During Phase One, we establish clear KPIs and success metrics specific to your mission. Common metrics include time-to-completion reduction (typically 80-95%), error rate decrease, throughput increase, cost per transaction, and revenue impact. We build monitoring dashboards so you can track performance in real-time.",
	},
	{
		question: "What happens after the workforce is deployed?",
		answer:
			"After deployment, the workforce operates autonomously but includes monitoring and optimization capabilities. We provide a 30-day hypercare period for fine-tuning, comprehensive documentation, and training for your team. Optional ongoing support packages are available for continuous optimization and expansion.",
	},
	{
		question: "Who owns the IP of the custom workforce?",
		answer:
			"You own the custom business logic and proprietary workflows we build for you. The underlying Novosapien architecture and core agent framework remain our IP, but the specific implementation, trained models, and your unique processes are yours. We sign comprehensive NDAs and IP agreements before beginning any work.",
	},
	{
		question: "What if our needs change after deployment?",
		answer:
			"Custom workforces are built to be modular and adaptable. New agents can be added, existing ones can be retrained, and workflows can be modified. Many clients start with one mission and expand to adjacent use cases. The architecture we build is designed to grow with your business.",
	},
	{
		question: "How do we know if the Lab is right for us?",
		answer:
			"The Lab is ideal if you have a complex, high-value workflow that's currently bottlenecking growth, requires significant manual effort from expensive resources, or represents a unique competitive advantage. If you're thinking 'we need to build something custom because nothing exists for this,' that's exactly what the Lab is for.",
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
								<p className="text-muted-foreground">{faq.answer}</p>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
