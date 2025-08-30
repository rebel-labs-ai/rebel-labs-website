import Link from "next/link"
import Image from "next/image"
import { type SanityDocument } from "next-sanity"
import { client, urlFor } from "@/sanity/client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlogFilters } from "@/components/blog/blog-filters"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
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
		types: {
			"application/rss+xml": `${baseUrl}/blog/rss.xml`,
		},
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

// Categories with code-friendly names and human-readable labels
const BLOG_CATEGORIES = [
	{ value: "product", label: "Product Updates" },
	{ value: "case-studies", label: "Case Studies" },
	{ value: "sales-marketing", label: "Sales & Marketing" },
	{ value: "content-ai-creation", label: "Content & AI Creation" },
	{ value: "ai-automation", label: "AI & Automation" },
	{ value: "future-of-work", label: "Future of Work" },
	{ value: "guides-tutorials", label: "Guides & Tutorials" },
	{ value: "news-updates", label: "News & Updates" },
	{ value: "research-data", label: "Research & Data" },
]

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...50]{
  _id, 
  title, 
  slug, 
  excerpt,
  author-> {
    name,
    slug
  },
  category,
  publishedAt,
  image,
  featured,
  "estimatedReadTime": round(length(pt::text(body)) / 5 / 200)
}`

// Revalidate every 60 seconds
export const revalidate = 60

// Helper function to get category label
function getCategoryLabel(category: string): string {
	const cat = BLOG_CATEGORIES.find((c) => c.value === category)
	return cat?.label || category
}

export default async function BlogPage({
	searchParams,
}: {
	searchParams: { category?: string; search?: string }
}) {
	let posts: SanityDocument[] = []

	try {
		posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
	} catch (error) {
		console.error("Error fetching posts:", error)
	}

	// Filter posts by category and search if provided
	const selectedCategory = searchParams.category || "all"
	const searchQuery = searchParams.search || ""
	
	let filteredPosts = posts
	
	// Apply category filter
	if (selectedCategory !== "all") {
		filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory)
	}
	
	// Apply search filter
	if (searchQuery) {
		const query = searchQuery.toLowerCase()
		filteredPosts = filteredPosts.filter(
			(post) =>
				post.title?.toLowerCase().includes(query) ||
				post.excerpt?.toLowerCase().includes(query) ||
				post.author?.name?.toLowerCase().includes(query)
		)
	}

	// Separate featured post
	const featuredPost = filteredPosts.find((post) => post.featured)
	const regularPosts = filteredPosts.filter((post) => !post.featured)

	// Calculate category counts
	const categoryCounts: Record<string, number> = {}
	posts.forEach((post) => {
		if (post.category) {
			categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
		}
	})

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
		blogPost: filteredPosts.map((post) => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			author: post.author
				? {
						"@type": "Person",
						name: post.author.name || post.author,
				  }
				: undefined,
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

					{/* Page Header - Centered */}
					<div className="mb-12 text-center">
						<h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
							NovoSapien Blog
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Explore the latest trends in AI workforces and AI employees for sales and marketing
						</p>
					</div>

					{/* Search and Category Filters - Centered */}
					<div className="flex justify-center mb-8">
						<BlogFilters 
							categories={BLOG_CATEGORIES}
							categoryCounts={categoryCounts}
							totalPosts={posts.length}
						/>
					</div>

					{/* Featured Post - Only show if no filters are active */}
					{featuredPost && selectedCategory === "all" && !searchQuery && (
						<div className="mb-16">
							<Card className="bg-card-background border border-accent/20 shadow-xl overflow-hidden">
								<div className="grid grid-cols-1 md:grid-cols-2">
									{/* Featured Image */}
									<div className="relative h-64 lg:h-full bg-gradient-to-br from-accent/20 to-accent/10">
										<Image
											src={
												featuredPost.image
													? urlFor(featuredPost.image)
															.width(800)
															.height(600)
															.url()
													: "/og-blog.jpg"
											}
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
											<span className="text-xs text-muted-foreground">
												{getCategoryLabel(featuredPost.category)}
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
												{featuredPost.author && (
													<span className="flex items-center gap-1">
														<User className="w-4 h-4" />
														{featuredPost.author.slug ? (
															<Link
																href={`/author/${featuredPost.author.slug.current}`}
																className="hover:text-accent transition-colors"
															>
																{featuredPost.author.name}
															</Link>
														) : (
															featuredPost.author.name
														)}
													</span>
												)}
												<span className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{new Date(
														featuredPost.publishedAt
													).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric",
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
					{regularPosts.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{regularPosts.map((post) => (
								<Card key={post._id} className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group h-full flex flex-col">
										{/* Post Image */}
										<Link href={`/blog/${post.slug.current}`}>
											<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
												<Image
													src={
														post.image
															? urlFor(post.image).width(400).height(300).url()
															: "/og-blog.jpg"
													}
													alt={post.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-300"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
											</div>
										</Link>

										{/* Post Content */}
										<div className="p-6">
											{/* Category */}
											<div className="flex items-center gap-2 mb-3">
												<span className="text-xs text-accent font-semibold">
													{getCategoryLabel(post.category)}
												</span>
											</div>

											{/* Title */}
											<Link href={`/blog/${post.slug.current}`}>
												<h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
													{post.title}
												</h3>
											</Link>

											{/* Excerpt */}
											<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
												{post.excerpt}
											</p>

											{/* Meta */}
											<div className="flex items-center justify-between text-xs text-muted-foreground">
												<div className="flex items-center gap-3">
													{post.author && (
														<span className="flex items-center gap-1">
															<User className="w-3 h-3" />
															{post.author.slug ? (
																<Link
																	href={`/author/${post.author.slug.current}`}
																	className="hover:text-accent transition-colors"
																>
																	{post.author.name}
																</Link>
															) : (
																post.author.name
															)}
														</span>
													)}
													{post.estimatedReadTime && (
														<span className="flex items-center gap-1">
															<Clock className="w-3 h-3" />
															{post.estimatedReadTime} min
														</span>
													)}
												</div>
												<span className="flex items-center gap-1">
													<Calendar className="w-3 h-3" />
													{new Date(post.publishedAt).toLocaleDateString(
														"en-US",
														{
															month: "short",
															day: "numeric",
														}
													)}
												</span>
											</div>

											{/* Read More Link */}
											<div className="mt-4 pt-4 border-t border-accent/10">
												<Link href={`/blog/${post.slug.current}`}>
													<span className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors flex items-center gap-1 cursor-pointer">
														Read Article
														<ArrowRight className="w-3 h-3" />
													</span>
												</Link>
											</div>
										</div>
									</Card>
							))}
						</div>
					) : (
						<div className="text-center py-16">
							<div className="max-w-md mx-auto">
								<h3 className="text-2xl font-bold mb-4">No posts found</h3>
								<p className="text-muted-foreground mb-8">
									{searchQuery
										? `No posts found matching "${searchQuery}". Try a different search term.`
										: selectedCategory !== "all"
										? "No posts found in this category. Try selecting a different category."
										: "Check back soon for insights on AI workforces and automation strategies."}
								</p>
								{(selectedCategory !== "all" || searchQuery) && (
									<Link href="/blog">
										<Button variant="outline">View All Posts</Button>
									</Link>
								)}
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