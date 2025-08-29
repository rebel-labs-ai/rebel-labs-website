import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn how Novosapien protects your data and privacy. Our comprehensive privacy policy covers data collection, usage, security, and your rights.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/privacy`,
		siteName: "Novosapien",
		title: "Privacy Policy | Novosapien",
		description:
			"Learn how Novosapien protects your data and privacy. Comprehensive coverage of data collection, usage, and your rights.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Novosapien Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Privacy Policy | Novosapien",
		description:
			"Learn how Novosapien protects your data and privacy. Comprehensive coverage of data collection, usage, and your rights.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${baseUrl}/privacy`,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export default function PrivacyPolicyPage() {
	// Schema markup for SEO
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${baseUrl}/privacy#webpage`,
		url: `${baseUrl}/privacy`,
		name: "Privacy Policy | Novosapien",
		description:
			"Learn how Novosapien protects your data and privacy. Our comprehensive privacy policy covers data collection, usage, security, and your rights.",
		dateModified: new Date().toISOString(),
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: baseUrl,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Privacy Policy",
					item: `${baseUrl}/privacy`,
				},
			],
		},
		publisher: {
			"@type": "Organization",
			name: "Novosapien",
			url: baseUrl,
		},
	}

	// FAQ data for privacy concerns
	const faqs = [
		{
			question: "What personal information does Novosapien collect?",
			answer:
				"We collect information you provide directly (name, email, company details), usage data (how you interact with our platform), and technical data (IP address, browser type). We only collect what's necessary to provide and improve our AI workforce solutions.",
		},
		{
			question: "How does Novosapien use my data?",
			answer:
				"We use your data to provide our AI workforce services, improve our platform, communicate important updates, ensure security, and comply with legal obligations. We never sell your personal data to third parties.",
		},
		{
			question: "Is my business data secure with Novosapien?",
			answer:
				"Yes. We implement industry-standard security measures including encryption, secure data centers, regular security audits, and strict access controls. Your business data is isolated and never shared with other customers.",
		},
		{
			question: "Can I request deletion of my data?",
			answer:
				"Yes. Under GDPR and CCPA, you have the right to request deletion of your personal data. Contact us at privacy@novosapien.ai, and we'll process your request within 30 days, except where we're legally required to retain certain information.",
		},
		{
			question: "Does Novosapien use cookies?",
			answer:
				"Yes, we use essential cookies for functionality, analytics cookies to improve our service, and preference cookies to remember your settings. You can manage cookie preferences through our Cookie Policy page.",
		},
	]

	// FAQ schema for SEO
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
		<>
			{/* Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			<div className="min-h-screen bg-background">
				{/* Navigation */}
				<Navigation />

				{/* Theme Toggle */}
				<div className="fixed top-4 right-4 z-50 hidden md:block">
					<ThemeToggle />
				</div>

				{/* Breadcrumbs - hidden but present for SEO */}
				<Breadcrumbs
					items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
				/>

				{/* Main Content */}
				<main className="pt-32 pb-24 px-4">
					<div className="max-w-4xl mx-auto">
						{/* Header */}
						<div className="text-center mb-12">
							<h1 className="text-foreground text-6xl md:text-7xl font-light tracking-tight font-geist-sans mb-4">
								Privacy Policy
							</h1>
							<p className="text-muted-foreground text-lg">
								Last updated:{" "}
								{new Date().toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</p>
						</div>

						{/* Privacy Policy Content */}
						<div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
							{/* Introduction */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Introduction
								</h2>
								<p className="text-muted-foreground">
									At Novosapien, we take your privacy seriously. This Privacy
									Policy explains how we collect, use, disclose, and safeguard
									your information when you use our AI workforce platform and
									services. We are committed to protecting your personal
									information and your right to privacy.
								</p>
							</section>

							{/* Information We Collect */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Information We Collect
								</h2>
								<div className="space-y-4">
									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Personal Information You Provide
										</h3>
										<p className="text-muted-foreground">
											When you register for an account, contact us, or use our
											services, you may provide us with:
										</p>
										<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
											<li>
												Name and contact information (email address, phone
												number)
											</li>
											<li>Company information and business details</li>
											<li>Payment and billing information</li>
											<li>Account credentials</li>
											<li>Communications you send to us</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Information Collected Automatically
										</h3>
										<p className="text-muted-foreground">
											When you use our platform, we automatically collect
											certain information, including:
										</p>
										<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
											<li>Usage data and analytics</li>
											<li>Device and browser information</li>
											<li>IP address and location data</li>
											<li>Cookies and similar tracking technologies</li>
										</ul>
									</div>
								</div>
							</section>

							{/* How We Use Your Information */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									How We Use Your Information
								</h2>
								<p className="text-muted-foreground mb-3">
									We use the information we collect to:
								</p>
								<ul className="list-disc pl-6 space-y-1 text-muted-foreground">
									<li>
										Provide, maintain, and improve our AI workforce services
									</li>
									<li>Process transactions and send related information</li>
									<li>Send administrative information and updates</li>
									<li>Respond to your comments and questions</li>
									<li>Monitor and analyze usage patterns and trends</li>
									<li>Detect, prevent, and address technical issues</li>
									<li>Comply with legal obligations</li>
								</ul>
							</section>

							{/* Data Security */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Data Security
								</h2>
								<p className="text-muted-foreground">
									We implement appropriate technical and organizational security
									measures to protect your personal information against
									unauthorized access, alteration, disclosure, or destruction.
									These measures include encryption, secure servers, regular
									security assessments, and restricted access to personal
									information.
								</p>
							</section>

							{/* Data Sharing */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Data Sharing and Disclosure
								</h2>
								<p className="text-muted-foreground mb-3">
									We do not sell, trade, or rent your personal information to
									third parties. We may share your information only in the
									following circumstances:
								</p>
								<ul className="list-disc pl-6 space-y-1 text-muted-foreground">
									<li>With your consent or at your direction</li>
									<li>With service providers who assist in our operations</li>
									<li>To comply with legal obligations or court orders</li>
									<li>To protect our rights, privacy, safety, or property</li>
									<li>
										In connection with a business transaction (merger,
										acquisition, etc.)
									</li>
								</ul>
							</section>

							{/* Your Rights */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Your Rights and Choices
								</h2>
								<p className="text-muted-foreground mb-3">
									Depending on your location, you may have the following rights
									regarding your personal information:
								</p>
								<ul className="list-disc pl-6 space-y-1 text-muted-foreground">
									<li>
										Access and receive a copy of your personal information
									</li>
									<li>Correct or update inaccurate information</li>
									<li>Delete your personal information</li>
									<li>Object to or restrict certain processing</li>
									<li>Data portability</li>
									<li>Withdraw consent</li>
								</ul>
								<p className="text-muted-foreground mt-3">
									To exercise these rights, please contact us at
									privacy@novosapien.ai.
								</p>
							</section>

							{/* Contact Information */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Contact Us
								</h2>
								<p className="text-muted-foreground">
									If you have questions or concerns about this Privacy Policy or
									our data practices, please contact us at:
								</p>
								<div className="mt-3 space-y-1 text-muted-foreground">
									<p>Email: privacy@novosapien.ai</p>
									<p>Address: Novosapien, Inc.</p>
								</div>
							</section>
						</div>

						{/* FAQ Section */}
						<section className="mt-16">
							<h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
								Frequently Asked Questions
							</h2>
							<div className="space-y-4">
								{faqs.map((faq, index) => (
									<details
										key={index}
										className="group bg-card-background border border-accent/20 rounded-lg"
									>
										<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors">
											<h3 className="text-foreground text-lg font-medium pr-4">
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
						</section>

						{/* Related Links Section */}
						<section className="mt-16 pt-8 border-t border-accent/20">
							<h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
								Related Policies
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Link
									href="/terms"
									className="block p-6 bg-card-background border border-accent/20 rounded-lg hover:shadow-lg hover:border-accent/40 transition-all"
								>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Terms of Service
									</h3>
									<p className="text-muted-foreground">
										Read our terms and conditions for using Novosapien&apos;s AI
										workforce platform.
									</p>
									<span className="text-primary-blue mt-2 inline-block font-medium">
										Read Terms →
									</span>
								</Link>
								<Link
									href="/cookies"
									className="block p-6 bg-card-background border border-accent/20 rounded-lg hover:shadow-lg hover:border-accent/40 transition-all"
								>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Cookie Policy
									</h3>
									<p className="text-muted-foreground">
										Learn how we use cookies to enhance your experience on our
										platform.
									</p>
									<span className="text-primary-blue mt-2 inline-block font-medium">
										View Cookie Policy →
									</span>
								</Link>
							</div>
						</section>
					</div>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}
