import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

export const metadata: Metadata = {
	title: "Cookie Policy",
	description:
		"Understand how Novosapien uses cookies to improve your experience. Learn about cookie types, management options, and your privacy choices.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/cookies`,
		siteName: "Novosapien",
		title: "Cookie Policy | Novosapien",
		description:
			"Learn how Novosapien uses cookies to enhance your experience. Understand cookie types and management options.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Novosapien Cookie Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Cookie Policy | Novosapien",
		description:
			"Learn how Novosapien uses cookies to enhance your experience. Understand cookie types and management options.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${baseUrl}/cookies`,
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

export default function CookiesPage() {
	// Schema markup for SEO
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${baseUrl}/cookies#webpage`,
		url: `${baseUrl}/cookies`,
		name: "Cookie Policy | Novosapien",
		description:
			"Understand how Novosapien uses cookies to improve your experience. Learn about cookie types, management options, and your privacy choices.",
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
					name: "Cookie Policy",
					item: `${baseUrl}/cookies`,
				},
			],
		},
		publisher: {
			"@type": "Organization",
			name: "Novosapien",
			url: baseUrl,
		},
	}

	// FAQ data for cookie questions
	const faqs = [
		{
			question: "What are cookies and why does Novosapien use them?",
			answer:
				"Cookies are small text files stored on your device when you visit our website. We use them to remember your preferences, analyze site usage, provide personalized experiences, and ensure our platform functions properly.",
		},
		{
			question: "What types of cookies does Novosapien use?",
			answer:
				"We use essential cookies (required for site functionality), performance cookies (to analyze usage), functionality cookies (to remember your preferences), and marketing cookies (to deliver relevant advertisements).",
		},
		{
			question: "How can I manage or disable cookies?",
			answer:
				"You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling essential cookies may affect the functionality of our platform.",
		},
		{
			question: "Does Novosapien use third-party cookies?",
			answer:
				"Yes, we use third-party cookies from trusted partners for analytics (Google Analytics), marketing, and to improve user experience. These partners have their own privacy policies governing their use of cookies.",
		},
		{
			question: "How long do cookies remain on my device?",
			answer:
				"Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period (typically 30 days to 2 years) or until you delete them manually.",
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
					items={[{ name: "Home", href: "/" }, { name: "Cookie Policy" }]}
				/>

				{/* Main Content */}
				<main className="pt-32 pb-24 px-4">
					<div className="max-w-4xl mx-auto">
						{/* Header */}
						<div className="text-center mb-12">
							<h1 className="text-foreground text-6xl md:text-7xl font-light tracking-tight font-geist-sans mb-4">
								Cookie Policy
							</h1>
							<p className="text-muted-foreground text-lg">
								Effective Date:{" "}
								{new Date().toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</p>
						</div>

						{/* Cookie Policy Content */}
						<div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
							{/* Introduction */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Introduction
								</h2>
								<p className="text-muted-foreground">
									This Cookie Policy explains how Novosapien (&quot;we&quot;,
									&quot;us&quot;, or &quot;our&quot;) uses cookies and similar
									tracking technologies when you visit our website and use our
									AI workforce platform. By using our services, you consent to
									the use of cookies as described in this policy.
								</p>
							</section>

							{/* What Are Cookies */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									What Are Cookies?
								</h2>
								<p className="text-muted-foreground">
									Cookies are small text files that are placed on your computer
									or mobile device when you visit a website. They are widely
									used to make websites work more efficiently, provide a better
									user experience, and provide information to the owners of the
									site.
								</p>
							</section>

							{/* Types of Cookies We Use */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Types of Cookies We Use
								</h2>
								<div className="space-y-4">
									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Essential Cookies
										</h3>
										<p className="text-muted-foreground">
											These cookies are necessary for the website to function
											properly. They enable basic functions like page
											navigation, secure area access, and remembering your
											cookie preferences. The website cannot function properly
											without these cookies.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Performance Cookies
										</h3>
										<p className="text-muted-foreground">
											These cookies help us understand how visitors interact
											with our website by collecting and reporting information
											anonymously. This helps us improve how our website works.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Functionality Cookies
										</h3>
										<p className="text-muted-foreground">
											These cookies allow the website to remember choices you
											make (such as your username, language, or region) and
											provide enhanced, more personalized features.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-medium text-foreground mb-2">
											Marketing Cookies
										</h3>
										<p className="text-muted-foreground">
											These cookies track your online activity to help
											advertisers deliver more relevant advertising or limit how
											many times you see an ad. These cookies can share that
											information with other organizations or advertisers.
										</p>
									</div>
								</div>
							</section>

							{/* Specific Cookies We Use */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Specific Cookies We Use
								</h2>
								<div className="overflow-x-auto">
									<table className="min-w-full border border-accent/20">
										<thead>
											<tr className="bg-accent/5">
												<th className="px-4 py-2 text-left text-foreground font-medium">
													Cookie Name
												</th>
												<th className="px-4 py-2 text-left text-foreground font-medium">
													Type
												</th>
												<th className="px-4 py-2 text-left text-foreground font-medium">
													Purpose
												</th>
												<th className="px-4 py-2 text-left text-foreground font-medium">
													Duration
												</th>
											</tr>
										</thead>
										<tbody className="text-muted-foreground">
											<tr className="border-t border-accent/20">
												<td className="px-4 py-2">sessionId</td>
												<td className="px-4 py-2">Essential</td>
												<td className="px-4 py-2">Maintains user session</td>
												<td className="px-4 py-2">Session</td>
											</tr>
											<tr className="border-t border-accent/20">
												<td className="px-4 py-2">_ga</td>
												<td className="px-4 py-2">Performance</td>
												<td className="px-4 py-2">Google Analytics tracking</td>
												<td className="px-4 py-2">2 years</td>
											</tr>
											<tr className="border-t border-accent/20">
												<td className="px-4 py-2">preferences</td>
												<td className="px-4 py-2">Functionality</td>
												<td className="px-4 py-2">Stores user preferences</td>
												<td className="px-4 py-2">1 year</td>
											</tr>
										</tbody>
									</table>
								</div>
							</section>

							{/* Managing Cookies */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									How to Manage Cookies
								</h2>
								<p className="text-muted-foreground mb-4">
									You can control and manage cookies in various ways. Please
									note that removing or blocking cookies can impact your user
									experience and parts of our website may no longer be fully
									accessible.
								</p>
								<div className="space-y-3">
									<div>
										<h3 className="text-lg font-medium text-foreground mb-2">
											Browser Controls
										</h3>
										<p className="text-muted-foreground">
											Most browsers allow you to control cookies through their
											settings preferences. Here are links to cookie management
											instructions for popular browsers:
										</p>
										<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
											<li>Chrome: Settings → Privacy and security → Cookies</li>
											<li>Firefox: Settings → Privacy & Security → Cookies</li>
											<li>Safari: Preferences → Privacy → Cookies</li>
											<li>
												Edge: Settings → Privacy, search, and services → Cookies
											</li>
										</ul>
									</div>
								</div>
							</section>

							{/* Updates to This Policy */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Updates to This Policy
								</h2>
								<p className="text-muted-foreground">
									We may update this Cookie Policy from time to time to reflect
									changes in our practices or for legal, operational, or
									regulatory reasons. We will notify you of any material changes
									by posting the new policy on this page with an updated
									effective date.
								</p>
							</section>

							{/* Contact Information */}
							<section>
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Contact Us
								</h2>
								<p className="text-muted-foreground">
									If you have questions about our use of cookies or this Cookie
									Policy, please contact us at:
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
									href="/privacy"
									className="block p-6 bg-card-background border border-accent/20 rounded-lg hover:shadow-lg hover:border-accent/40 transition-all"
								>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Privacy Policy
									</h3>
									<p className="text-muted-foreground">
										Learn how we collect, use, and protect your personal
										information.
									</p>
									<span className="text-primary-blue mt-2 inline-block font-medium">
										Read Privacy Policy →
									</span>
								</Link>
								<Link
									href="/terms"
									className="block p-6 bg-card-background border border-accent/20 rounded-lg hover:shadow-lg hover:border-accent/40 transition-all"
								>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Terms of Service
									</h3>
									<p className="text-muted-foreground">
										Review our terms and conditions for using the Novosapien
										platform.
									</p>
									<span className="text-primary-blue mt-2 inline-block font-medium">
										Read Terms →
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
