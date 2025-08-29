import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.com"

// Blog posts data - in production this would come from a CMS or database
const blogPosts = {
	"rise-of-autonomous-digital-workforces": {
		id: 1,
		title: "The Rise of Autonomous Digital Workforces",
		excerpt:
			"Explore how AI-powered workforces are transforming the way businesses operate, from lead generation to customer service.",
		author: "Sarah Chen",
		authorRole: "Head of AI Strategy",
		date: "December 15, 2024",
		readTime: "5 min read",
		category: "AI & Automation",
		image: "/blog/post1.jpg",
		content: `
			<p className="text-lg leading-relaxed mb-6">
				The business landscape is undergoing a fundamental transformation. As we enter 2025, the concept of work itself is being redefined by autonomous digital workforces that operate alongside human teams, handling tasks with unprecedented efficiency and scale.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">The Evolution of Work</h2>
			<p className="mb-6">
				Traditional business operations have long been constrained by human limitations - the need for sleep, the capacity for only so many simultaneous conversations, and the inevitable variations in performance. Digital workforces eliminate these constraints, offering businesses the ability to operate at scale without proportional increases in overhead.
			</p>

			<p className="mb-6">
				Consider the typical sales development team. A human SDR might manage 50-100 leads per day, working standard business hours. An AI-powered lead workforce can engage with thousands of prospects simultaneously, operating 24/7, while maintaining personalized communication tailored to each prospect's specific needs and interests.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">Real-World Applications</h2>
			<p className="mb-6">
				We're seeing remarkable results across industries. In e-commerce, AI workforces are handling customer inquiries with 95% accuracy rates while reducing response times from hours to seconds. In B2B sales, companies using autonomous lead qualification systems are seeing 3.5x improvements in conversion rates.
			</p>

			<blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
				"We replaced our entire tier-1 support team with an AI workforce. Customer satisfaction scores actually increased by 23%, while our operational costs decreased by 68%."
				<cite className="block mt-2 not-italic text-sm text-muted-foreground">- James Mitchell, CTO at TechCorp</cite>
			</blockquote>

			<h2 className="text-3xl font-light mb-4 mt-8">The Human Element</h2>
			<p className="mb-6">
				This isn't about replacing humans - it's about augmentation. By handling repetitive, high-volume tasks, digital workforces free human employees to focus on creative problem-solving, relationship building, and strategic thinking. The most successful implementations we've seen treat AI workforces as team members, not replacements.
			</p>

			<p className="mb-6">
				Human oversight remains crucial. While AI agents can handle routine interactions brilliantly, complex situations requiring empathy, judgment, or creative solutions still benefit from human intervention. The key is finding the right balance and ensuring smooth handoffs between digital and human team members.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">Looking Forward</h2>
			<p className="mb-6">
				As we look to the future, the integration of digital workforces will only deepen. We're already seeing multi-agent systems that can collaborate on complex projects, learning from each interaction and continuously improving their performance.
			</p>

			<p className="mb-6">
				The companies that thrive in this new landscape will be those that embrace this transformation early, building hybrid teams where humans and AI agents work in harmony. The question isn't whether to adopt digital workforces, but how quickly you can integrate them into your operations.
			</p>

			<div className="bg-muted/30 rounded-lg p-6 mt-8">
				<h3 className="text-xl font-semibold mb-3">Key Takeaways</h3>
				<ul className="space-y-2">
					<li className="flex items-start">
						<span className="text-primary mr-2">•</span>
						Digital workforces operate 24/7 without fatigue or performance variation
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">•</span>
						Early adopters are seeing 3-5x improvements in key metrics
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">•</span>
						Success comes from augmenting human teams, not replacing them
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">•</span>
						The technology is ready for mainstream adoption today
					</li>
				</ul>
			</div>
		`,
		relatedPosts: [
			{
				slug: "building-scalable-sales-teams",
				title: "Building Scalable Sales Teams with AI Agents",
				category: "Sales",
			},
			{
				slug: "understanding-multi-agent-systems",
				title: "Understanding Multi-Agent Systems",
				category: "Technology",
			},
		],
	},
	"building-scalable-sales-teams": {
		id: 2,
		title: "Building Scalable Sales Teams with AI Agents",
		excerpt:
			"Learn how companies are achieving 3.5x conversion rates by deploying intelligent sales automation systems.",
		author: "Michael Rodriguez",
		authorRole: "VP of Sales Engineering",
		date: "December 12, 2024",
		readTime: "8 min read",
		category: "Sales",
		image: "/blog/post2.jpg",
		content: `
			<p className="text-lg leading-relaxed mb-6">
				Sales teams face a universal challenge: how to scale personalized outreach without sacrificing quality or burning out your team. The answer lies in intelligent sales automation powered by AI agents that work alongside your human sales force.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">The Scale Challenge</h2>
			<p className="mb-6">
				Traditional sales teams hit a ceiling. Each rep can only handle so many accounts, make so many calls, and send so many personalized emails. Hiring more reps is expensive and slow. This is where AI sales agents change the game entirely.
			</p>

			<p className="mb-6">
				Our data shows that companies using AI-powered sales workforces are achieving remarkable results: 3.5x higher conversion rates, 85% reduction in lead response time, and 60% lower cost per acquisition. These aren't incremental improvements - they're transformative changes that redefine what's possible in sales.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">Implementation Strategy</h2>
			<p className="mb-6">
				Success starts with a phased approach. Begin with lead qualification - let AI agents handle initial outreach and qualification, passing warm leads to your human team. This immediately frees up 40-60% of your SDRs' time for higher-value activities.
			</p>

			<blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
				"Our AI agents qualified 10,000 leads last month. Our human team closed deals with 350 of them. Without AI, we could never have processed that volume."
				<cite className="block mt-2 not-italic text-sm text-muted-foreground">- Lisa Wang, Sales Director at SaaS Innovations</cite>
			</blockquote>

			<p className="mb-6">
				Next, expand to nurture campaigns. AI agents excel at maintaining consistent, personalized communication with prospects over time. They remember every interaction, track engagement patterns, and adjust messaging accordingly.
			</p>

			<h2 className="text-3xl font-light mb-4 mt-8">Best Practices</h2>
			<p className="mb-6">
				Integration is key. Your AI agents should work within your existing CRM and sales tools. They should enrich lead data, update records in real-time, and alert human reps when intervention is needed. Think of them as tireless team members who never miss a follow-up.
			</p>

			<p className="mb-6">
				Personalization at scale becomes possible when AI agents can analyze thousands of data points per prospect - company news, social media activity, technographic data, and behavioral signals. This creates outreach that feels genuinely personalized because it is.
			</p>

			<div className="bg-muted/30 rounded-lg p-6 mt-8">
				<h3 className="text-xl font-semibold mb-3">Implementation Checklist</h3>
				<ul className="space-y-2">
					<li className="flex items-start">
						<span className="text-primary mr-2">✓</span>
						Start with lead qualification to prove ROI quickly
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">✓</span>
						Integrate with existing CRM and sales stack
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">✓</span>
						Define clear handoff points between AI and humans
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">✓</span>
						Monitor and optimize based on conversion metrics
					</li>
					<li className="flex items-start">
						<span className="text-primary mr-2">✓</span>
						Scale gradually as you prove success
					</li>
				</ul>
			</div>
		`,
		relatedPosts: [
			{
				slug: "rise-of-autonomous-digital-workforces",
				title: "The Rise of Autonomous Digital Workforces",
				category: "AI & Automation",
			},
			{
				slug: "roi-digital-workforces-complete-guide",
				title: "ROI of Digital Workforces: A Complete Guide",
				category: "Business",
			},
		],
	},
}

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const post = blogPosts[slug as keyof typeof blogPosts]

	if (!post) {
		return {
			title: "Post Not Found - NovoSapien Blog",
		}
	}

	return {
		title: `${post.title} | NovoSapien Blog`,
		description: post.excerpt,
		authors: [{ name: post.author }],
		keywords: `${post.category}, AI workforces, automation, digital transformation`,
		openGraph: {
			type: "article",
			locale: "en_US",
			url: `${baseUrl}/blog-preview/${slug}`,
			siteName: "NovoSapien",
			title: post.title,
			description: post.excerpt,
			publishedTime: post.date,
			authors: [post.author],
			images: [
				{
					url: post.image || "/og-blog-post.jpg",
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			site: "@novosapien",
			creator: "@novosapien",
			title: post.title,
			description: post.excerpt,
			images: [post.image || "/og-blog-post.jpg"],
		},
		alternates: {
			canonical: `${baseUrl}/blog-preview/${slug}`,
		},
		robots: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	}
}

export async function generateStaticParams() {
	return Object.keys(blogPosts).map(slug => ({
		slug,
	}))
}

export default async function BlogPost({ params }: Props) {
	const { slug } = await params
	const post = blogPosts[slug as keyof typeof blogPosts]

	if (!post) {
		notFound()
	}

	// Schema markup for Article
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${baseUrl}/blog-preview/${slug}#article`,
		headline: post.title,
		description: post.excerpt,
		image: post.image
			? `${baseUrl}${post.image}`
			: `${baseUrl}/og-blog-post.jpg`,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			"@type": "Person",
			name: post.author,
			jobTitle: post.authorRole,
		},
		publisher: {
			"@type": "Organization",
			name: "NovoSapien",
			url: baseUrl,
			logo: {
				"@type": "ImageObject",
				url: `${baseUrl}/logo.png`,
			},
		},
		articleSection: post.category,
		keywords: `${post.category}, AI workforces, automation, digital transformation`,
		wordCount: post.content.split(" ").length,
		url: `${baseUrl}/blog-preview/${slug}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${baseUrl}/blog-preview/${slug}`,
		},
	}

	return (
		<div className="min-h-screen bg-background">
			{/* SEO: Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>

			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* SEO: Breadcrumbs (visually hidden) */}
			<div className="sr-only">
				<Breadcrumbs
					items={[
						{ name: "Home", href: "/" },
						{ name: "Blog", href: "/blog-preview" },
						{ name: post.title },
					]}
				/>
			</div>

			{/* Main Content */}
			<article className="pt-24 sm:pt-32 pb-16 sm:pb-24">
				<div className="max-w-4xl mx-auto px-4">
					{/* Back Link */}
					<Link
						href="/blog-preview"
						className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 min-h-[48px] py-3 px-2 -ml-2"
						aria-label="Navigate back to blog listing"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Blog
					</Link>

					{/* Article Header */}
					<header className="mb-12">
						<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
							<span className="text-primary font-medium">{post.category}</span>
							<span>•</span>
							<span className="flex items-center gap-1">
								<Calendar className="w-3 h-3" />
								{post.date}
							</span>
							<span>•</span>
							<span className="flex items-center gap-1">
								<Clock className="w-3 h-3" />
								{post.readTime}
							</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
							{post.title}
						</h1>

						<p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

						<div className="flex items-center gap-3 pb-8 border-b border-border">
							<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<User className="w-6 h-6 text-primary" />
							</div>
							<div>
								<p className="font-medium text-foreground">{post.author}</p>
								<p className="text-sm text-muted-foreground">
									{post.authorRole}
								</p>
							</div>
						</div>
					</header>

					{/* Hero Image */}
					<div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden bg-muted">
						<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
						{/* In production, you'd use the actual image */}
						<div className="flex items-center justify-center h-full">
							<span className="text-muted-foreground">Article Hero Image</span>
						</div>
					</div>

					{/* Article Content */}
					<div
						className="prose prose-lg max-w-none text-foreground"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* Author Bio */}
					<div className="mt-12 p-6 bg-muted/30 rounded-lg">
						<div className="flex items-start gap-4">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
								<User className="w-8 h-8 text-primary" />
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-1">{post.author}</h3>
								<p className="text-muted-foreground mb-3">{post.authorRole}</p>
								<p className="text-sm">
									Leading our AI strategy initiatives and helping businesses
									transform their operations with intelligent automation.
								</p>
							</div>
						</div>
					</div>

					{/* Related Posts */}
					{post.relatedPosts && post.relatedPosts.length > 0 && (
						<div className="mt-16">
							<h2 className="text-2xl font-light mb-8">Related Articles</h2>
							<div className="grid md:grid-cols-2 gap-6">
								{post.relatedPosts.map(related => (
									<Link
										key={related.slug}
										href={`/blog-preview/${related.slug}`}
										className="group block p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors min-h-[48px]"
									>
										<span className="text-sm text-primary font-medium">
											{related.category}
										</span>
										<h3 className="text-lg font-medium mt-2 group-hover:text-primary transition-colors">
											{related.title}
										</h3>
									</Link>
								))}
							</div>
						</div>
					)}

					{/* CTA Section */}
					<div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl text-center">
						<h2 className="text-2xl font-light mb-4">
							Ready to Scale Your Business with AI?
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							Join thousands of companies using NovoSapien&apos;s digital
							workforces to transform their operations.
						</p>
						<Link
							href="/workforces/inbound-sales"
							className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
						>
							Explore Our Solutions
							<ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
						</Link>
					</div>
				</div>
			</article>

			{/* Footer */}
			<Footer />
		</div>
	)
}
