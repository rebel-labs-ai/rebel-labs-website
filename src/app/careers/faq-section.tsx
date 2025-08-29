// FAQ Section for the Careers page - Server Component for SEO

const faqs = [
	{
		question: "What is it like working at Novosapien?",
		answer:
			"At Novosapien, you'll be at the forefront of AI innovation, building autonomous digital workforces that transform how businesses operate. We foster a culture of creativity, continuous learning, and impact. Our remote-first approach allows flexibility while maintaining strong collaboration through regular virtual sessions and quarterly in-person gatherings.",
	},
	{
		question: "What benefits and perks do you offer?",
		answer:
			"We offer competitive compensation, equity participation, comprehensive health coverage, unlimited PTO, professional development budget, top-tier equipment, and flexible working hours. Additionally, we provide access to cutting-edge AI tools, conference attendance opportunities, and a monthly wellness stipend.",
	},
	{
		question: "What kind of roles are you typically hiring for?",
		answer:
			"We're always looking for talented AI/ML engineers, full-stack developers, product designers, sales engineers, and customer success specialists. We particularly value individuals who can work autonomously, think creatively about AI applications, and are passionate about building the future of work.",
	},
	{
		question: "Is remote work available?",
		answer:
			"Yes! We're a remote-first company with team members across multiple time zones. We believe great talent exists everywhere, and we've built our culture and processes to support distributed teams. We do organize quarterly in-person meetups for team building and strategic planning.",
	},
	{
		question: "What's your interview process like?",
		answer:
			"Our process typically includes an initial screening call, a technical or role-specific assessment, a virtual meeting with team members, and a final culture fit conversation with leadership. We aim to complete the entire process within 2-3 weeks and provide feedback at every stage.",
	},
	{
		question: "Do you offer internships or entry-level positions?",
		answer:
			"We occasionally offer internships and are open to exceptional entry-level candidates who demonstrate strong potential. We believe in investing in talent development and provide mentorship programs to help junior team members grow rapidly in their careers.",
	},
	{
		question: "What technologies and tools do you work with?",
		answer:
			"Our tech stack includes Python, TypeScript, React, Next.js, various AI/ML frameworks (TensorFlow, PyTorch), cloud platforms (AWS, GCP), and modern DevOps tools. We're always exploring new technologies and encourage team members to experiment and innovate.",
	},
	{
		question: "How does Novosapien support professional growth?",
		answer:
			"We provide annual learning budgets for courses, certifications, and conferences. Team members have dedicated time for research and experimentation, regular knowledge-sharing sessions, and opportunities to work on diverse projects. We also support publishing research and speaking at industry events.",
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
			{/* AGENT COMMENT: SEO Optimization - FAQ Schema
				Added structured data for FAQ rich snippets in search results
				SEO Reason: Improves visibility with FAQ rich snippets
				Agent: SEO Agent
				Date: 2025-01-28
			*/}
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
