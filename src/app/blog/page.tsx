import Link from "next/link"
import Image from "next/image"
import { type SanityDocument } from "next-sanity"
import { client, urlFor } from "@/sanity/client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { Calendar, Clock, User, Tag, ArrowRight } from "lucide-react"
import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

export const metadata: Metadata = {
	title: "AI Insights & Automation Blog | NovoSapien",
	description:
		"Stay updated with the latest insights on AI workforces, automation strategies, and digital transformation. Learn how to scale your business with intelligent automation.",
	keywords: [
		"AI workforces",
		"automation",
		"digital transformation",
		"AI agents",
		"business automation",
		"lead generation",
		"sales automation",
	].join(", "),
	authors: [{ name: "NovoSapien Team" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${baseUrl}/blog`,
		siteName: "NovoSapien",
		title: "AI Insights & Automation Blog | NovoSapien",
		description:
			"Explore the latest in AI workforces, automation strategies, and success stories from the frontier of autonomous business operations.",
		images: [
			{
				url: "/og-blog.jpg",
				width: 1200,
				height: 630,
				alt: "NovoSapien Blog - AI Insights & Automation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "AI Insights & Automation Blog",
		description:
			"Latest insights on AI workforces, automation strategies, and digital transformation.",
		images: ["/og-blog.jpg"],
	},
	alternates: {
		canonical: `${baseUrl}/blog`,
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  excerpt,
  author,
  category,
  publishedAt,
  image,
  featured,
  "estimatedReadTime": round(length(pt::text(body)) / 5 / 200)
}`

// Revalidate every 60 seconds
export const revalidate = 60

// Fallback posts for preview when no Sanity posts exist
const fallbackPosts = [
	{
		_id: "1",
		title: "The Rise of Autonomous Digital Workforces",
		slug: { current: "rise-of-autonomous-digital-workforces" },
		excerpt:
			"Explore how AI-powered workforces are transforming the way businesses operate, from lead generation to customer service.",
		author: "Sarah Chen",
		publishedAt: "2024-12-15",
		estimatedReadTime: 5,
		category: "AI & Automation",
		featured: true,
	},
	{
		_id: "2",
		title: "Building Scalable Sales Teams with AI Agents",
		slug: { current: "building-scalable-sales-teams" },
		excerpt:
			"Learn how companies are achieving 3.5x conversion rates by deploying intelligent sales automation systems.",
		author: "Michael Rodriguez",
		publishedAt: "2024-12-12",
		estimatedReadTime: 8,
		category: "Sales",
		featured: false,
	},
	{
		_id: "3",
		title: "The Future of Content Creation: AI Workforces",
		slug: { current: "future-content-creation-ai-workforces" },
		excerpt:
			"Discover how AI content workforces are revolutionizing marketing departments and creative agencies worldwide.",
		author: "Emily Watson",
		publishedAt: "2024-12-10",
		estimatedReadTime: 6,
		category: "Content",
		featured: false,
	},
]

export default async function BlogPage() {
	let posts: SanityDocument[] = []
	let useFallback = false

	try {
		posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
		if (posts.length === 0) {
			posts = fallbackPosts
			useFallback = true
		}
	} catch (error) {
		console.error("Error fetching posts:", error)
		posts = fallbackPosts
		useFallback = true
	}

	const featuredPost = posts.find(post => post.featured)
	const regularPosts = posts.filter(post => !post.featured)

	// Schema markup for Blog
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": `${baseUrl}/blog#blog`,
		url: `${baseUrl}/blog`,
		name: "NovoSapien AI Insights Blog",
		description:
			"Explore insights on AI workforces, automation strategies, and digital transformation",
		publisher: {
			"@type": "Organization",
			name: "NovoSapien",
			url: baseUrl,
			logo: {
				"@type": "ImageObject",
				url: `${baseUrl}/logo.png`,
			},
		},
		blogPost: posts.map(post => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			author: {
				"@type": "Person",
				name: post.author,
			},
			datePublished: post.publishedAt,
			articleSection: post.category,
			url: `${baseUrl}/blog/${post.slug.current}`,
		})),
	}

	return (
		<div className="min-h-screen bg-background">
			{/* SEO: Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>

			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle - Hidden on mobile */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
				<div className="max-w-7xl mx-auto">
					{/* SEO: Breadcrumbs */}
					<div className="mb-8">
						<Breadcrumbs
							items={[{ name: "Home", href: "/" }, { name: "Blog" }]}
						/>
					</div>

					{/* Page Header */}
					<div className="mb-12">
						<h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
							AI Insights & Innovation
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl">
							Explore the latest trends in AI workforces, automation strategies, and digital transformation
						</p>
						{useFallback && (
							<div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded-lg">
								<p className="text-sm text-muted-foreground">
									Preview mode: Showing sample posts. Connect your Sanity CMS to display real content.
								</p>
							</div>
						)}
					</div>

					{/* Featured Post */}
					{featuredPost && (
						<div className="mb-16">
							<Card className="bg-card-background border border-accent/20 shadow-xl overflow-hidden">
								<div className="grid grid-cols-1 md:grid-cols-2">
									{/* Featured Image */}
									<div className="relative h-64 lg:h-full bg-gradient-to-br from-accent/20 to-accent/10">
										<Image
											src={featuredPost.image ? urlFor(featuredPost.image).width(800).height(600).url() : "/og-blog.jpg"}
											alt={featuredPost.title}
											fill
											className="object-cover"
										/>
									</div>
									{/* Featured Content */}
									<div className="p-8 lg:p-12">
										<div className="flex items-center gap-3 mb-4">
											<span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold border border-accent/30">
												Featured Post
											</span>
											<span className="text-xs text-muted-foreground flex items-center gap-1">
												<Tag className="w-3 h-3" />
												{featuredPost.category}
											</span>
										</div>
										<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
											{featuredPost.title}
										</h2>
										<p className="text-muted-foreground text-lg mb-6">
											{featuredPost.excerpt}
										</p>
										<div className="flex items-center justify-between mb-6">
											<div className="flex items-center gap-4 text-sm text-muted-foreground">
												<span className="flex items-center gap-1">
													<User className="w-4 h-4" />
													{featuredPost.author}
												</span>
												<span className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric"
													})}
												</span>
												{featuredPost.estimatedReadTime && (
													<span className="flex items-center gap-1">
														<Clock className="w-4 h-4" />
														{featuredPost.estimatedReadTime} min read
													</span>
												)}
											</div>
										</div>
										<Link href={`/blog/${featuredPost.slug.current}`}>
											<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
												Read More
												<ArrowRight className="ml-2 w-4 h-4" />
											</Button>
										</Link>
									</div>
								</div>
							</Card>
						</div>
					)}

					{/* Blog Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{regularPosts.map(post => (
							<Link key={post._id} href={`/blog/${post.slug.current}`}>
								<Card className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group cursor-pointer h-full">
									{/* Post Image */}
									<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
										<Image
											src={post.image ? urlFor(post.image).width(400).height(300).url() : "/og-blog.jpg"}
											alt={post.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
									</div>

									{/* Post Content */}
									<div className="p-6">
										{/* Category */}
										<div className="flex items-center gap-2 mb-3">
											<span className="text-xs text-accent font-semibold">
												{post.category}
											</span>
										</div>

										{/* Title */}
										<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
											{post.title}
										</h3>

										{/* Excerpt */}
										<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
											{post.excerpt}
										</p>

										{/* Meta */}
										<div className="flex items-center justify-between text-xs text-muted-foreground">
											<div className="flex items-center gap-3">
												<span className="flex items-center gap-1">
													<User className="w-3 h-3" />
													{post.author}
												</span>
												{post.estimatedReadTime && (
													<span className="flex items-center gap-1">
														<Clock className="w-3 h-3" />
														{post.estimatedReadTime} min
													</span>
												)}
											</div>
											<span className="flex items-center gap-1">
												<Calendar className="w-3 h-3" />
												{new Date(post.publishedAt).toLocaleDateString("en-US", {
													month: "short",
													day: "numeric"
												})}
											</span>
										</div>

										{/* Read More Link */}
										<div className="mt-4 pt-4 border-t border-accent/10">
											<span className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors flex items-center gap-1">
												Read Article
												<ArrowRight className="w-3 h-3" />
											</span>
										</div>
									</div>
								</Card>
							</Link>
						))}
					</div>

					{/* Empty State */}
					{posts.length === 0 && !useFallback && (
						<div className="text-center py-16">
							<div className="max-w-md mx-auto">
								<h3 className="text-2xl font-bold mb-4">No posts yet</h3>
								<p className="text-muted-foreground mb-8">
									Check back soon for insights on AI workforces and automation strategies.
								</p>
								<Link href="/">
									<Button variant="outline">
										Return Home
									</Button>
								</Link>
							</div>
						</div>
					)}
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}