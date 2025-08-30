import { PortableText, type SanityDocument } from "next-sanity"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { client, urlFor } from "@/sanity/client"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react"
import { portableTextComponents } from "@/components/portable-text-components"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

// Helper function to get human-readable category label
function getCategoryLabel(category: string): string {
	const categoryMap: Record<string, string> = {
		product: "Product Updates",
		"case-studies": "Case Studies",
		"sales-marketing": "Sales & Marketing",
		"content-ai-creation": "Content & AI Creation",
		"ai-automation": "AI & Automation",
		"future-of-work": "Future of Work",
		"guides-tutorials": "Guides & Tutorials",
		"news-updates": "News & Updates",
		"research-data": "Research & Data",
	}
	return categoryMap[category] || category
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  seoTitle,
  metaDescription,
  focusKeyword,
  tags,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url
      }
    }
  },
  author-> {
    name,
    slug,
    role,
    bio,
    image,
    twitter,
    linkedin,
    expertise
  },
  category,
  publishedAt,
  image,
  "estimatedReadTime": round(length(pt::text(body)) / 5 / 200),
  "relatedPosts": *[_type == "post" && slug.current != $slug && category == ^.category][0...3]{
    _id,
    title,
    slug,
    excerpt,
    category,
    author-> {
      name,
      slug,
      role,
      image
    },
    publishedAt,
    image,
    "estimatedReadTime": round(length(pt::text(body)) / 5 / 200)
  }
}`

// Generate metadata for SEO
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params

	let post: SanityDocument | null = null
	try {
		post = await client.fetch<SanityDocument>(POST_QUERY, { slug })
	} catch (error) {
		console.error("Error fetching post for metadata:", error)
	}

	if (!post) return { title: "Post Not Found" }

	return {
		title: post.seoTitle ? `${post.seoTitle} | NovoSapien Blog` : `${post.title} | NovoSapien Blog`,
		description: post.metaDescription || post.excerpt || `Read ${post.title} on the NovoSapien blog`,
		openGraph: {
			type: "article",
			locale: "en_US",
			url: `${baseUrl}/blog/${slug}`,
			siteName: "NovoSapien",
			title: post.title,
			description: post.excerpt,
			images: post.image
				? [
						{
							url: urlFor(post.image).width(1200).height(630).url(),
							width: 1200,
							height: 630,
							alt: post.title,
						},
					]
				: [
						{
							url: "/og-blog-post.jpg",
							width: 1200,
							height: 630,
							alt: post.title,
						},
					],
			publishedTime: post.publishedAt,
			authors: [post.author?.name],
		},
		twitter: {
			card: "summary_large_image",
			site: "@novosapien",
			creator: "@novosapien",
			title: post.title,
			description: post.excerpt,
		},
		alternates: {
			canonical: `${baseUrl}/blog/${slug}`,
			types: {
				"application/rss+xml": `${baseUrl}/blog/rss.xml`,
			},
		},
	}
}

// Generate static params for all posts
export async function generateStaticParams() {
	try {
		const posts = await client.fetch<SanityDocument[]>(
			`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
		)

		// Include fallback post slug
		return [
			...posts.map(post => ({ slug: post.slug })),
			{ slug: "rise-of-autonomous-digital-workforces" },
		]
	} catch (error) {
		console.error("Error generating static params:", error)
		return [{ slug: "rise-of-autonomous-digital-workforces" }]
	}
}

// Revalidate every 60 seconds
export const revalidate = 60

export default async function PostPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	let post: SanityDocument | null = null

	try {
		post = await client.fetch<SanityDocument>(POST_QUERY, { slug })
	} catch (error) {
		console.error("Error fetching post:", error)
	}

	if (!post) {
		notFound()
	}

	const postImageUrl = post.image
		? urlFor(post.image).width(1200).height(630).url()
		: null

	// Enhanced Schema markup for BlogPosting
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `${baseUrl}/blog/${slug}#article`,
		headline: post.title,
		description: post.excerpt,
		datePublished: post.publishedAt,
		dateModified: post._updatedAt || post.publishedAt,
		articleSection: post.category,
		keywords: [post.focusKeyword, post.category, ...(post.tags || [])].filter(Boolean).join(', '),
		author: {
			"@type": "Person",
			name: post.author?.name,
			jobTitle: post.author?.role,
			description: post.author?.bio,
			image: post.author?.image ? urlFor(post.author.image).width(200).height(200).url() : undefined,
			sameAs: [
				post.author?.twitter ? `https://twitter.com/${post.author.twitter}` : undefined,
				post.author?.linkedin,
			].filter(Boolean),
			url: `${baseUrl}/author/${post.author?.slug?.current}`,
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
		image: postImageUrl || `${baseUrl}/og-blog-post.jpg`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${baseUrl}/blog/${slug}`,
		},
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

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50 hidden md:block">
				<ThemeToggle />
			</div>

			<main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
				<div className="max-w-4xl mx-auto">
					{/* SEO: Breadcrumbs */}
					<div className="mb-8">
						<Breadcrumbs
							items={[
								{ name: "Home", href: "/" },
								{ name: "Blog", href: "/blog" },
								{ name: post.title },
							]}
						/>
					</div>

					{/* Back Button */}
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Blog
					</Link>

					<article>
						{/* Article Header */}
						<header className="mb-12">
							{/* Category Badge */}
							<div className="mb-4">
								<span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold border border-accent/30">
									{getCategoryLabel(post.category)}
								</span>
							</div>

							{/* Title */}
							<h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
								{post.title}
							</h1>

							{/* Excerpt */}
							{post.excerpt && (
								<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
									{post.excerpt}
								</p>
							)}

							{/* Meta Information */}
							<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-accent/20">
								{post.author && (
									<Link 
										href={`/author/${post.author.slug?.current || ''}`}
										className="flex items-center gap-2 hover:text-accent transition-colors"
									>
										{post.author.image ? (
											<div className="relative w-8 h-8 rounded-full overflow-hidden bg-accent/10 flex-shrink-0">
												<Image
													src={urlFor(post.author.image).width(64).height(64).url()}
													alt={post.author.name}
													fill
													className="object-cover"
												/>
											</div>
										) : (
											<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
												<User className="w-4 h-4" />
											</div>
										)}
										<span>{post.author.name}</span>
									</Link>
								)}
								<span className="text-muted-foreground/50">•</span>
								<span className="flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									{new Date(post.publishedAt).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</span>
								{post.estimatedReadTime && (
									<>
										<span className="text-muted-foreground/50">•</span>
										<span className="flex items-center gap-2">
											<Clock className="w-4 h-4" />
											{post.estimatedReadTime} min read
										</span>
									</>
								)}
							</div>
						</header>

						{/* Featured Image */}
						{postImageUrl && (
							<div className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden">
								<Image
									src={postImageUrl}
									alt={post.image?.alt || post.title}
									fill
									className="object-cover"
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
								/>
							</div>
						)}

						{/* Article Body */}
						<div className="prose prose-lg dark:prose-invert max-w-none mb-12">
							{Array.isArray(post.body) && (
								<PortableText
									value={post.body}
									components={portableTextComponents}
								/>
							)}
						</div>

						{/* Tags Section */}
						{post.tags && post.tags.length > 0 && (
							<div className="mt-8 mb-12">
								<div className="flex items-center gap-2 mb-3">
									<Tag className="w-4 h-4 text-muted-foreground" />
									<span className="text-sm font-semibold text-muted-foreground">Related Topics</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{post.tags.map((tag: string) => (
										<Link
											key={tag}
											href={`/blog?tag=${tag}`}
											className="inline-block bg-background hover:bg-accent/10 text-foreground px-3 py-1 rounded-full text-sm border border-accent/20 hover:border-accent/40 transition-colors"
										>
											{tag}
										</Link>
									))}
								</div>
							</div>
						)}

						{/* Related Posts */}
						{post.relatedPosts && post.relatedPosts.length > 0 && (
							<section className="mt-16 pt-12 border-t border-accent/20">
								<h2 className="text-3xl font-bold text-foreground mb-8">
									Related Articles
								</h2>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{post.relatedPosts.map(
										(relatedPost: {
											_id: string
											slug: { current: string }
											category: string
											title: string
											excerpt: string
											image?: { alt?: string; [key: string]: unknown }
											author: { name: string }
											publishedAt: string
											estimatedReadTime: number
										}) => (
											<Link
												key={relatedPost._id}
												href={`/blog/${relatedPost.slug.current}`}
											>
												<Card className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group cursor-pointer h-full">
													{/* Post Image */}
													<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
														<Image
															src={
																relatedPost.image
																	? urlFor(relatedPost.image)
																			.width(400)
																			.height(300)
																			.url()
																	: "/og-blog-post.jpg"
															}
															alt={relatedPost.title}
															fill
															className="object-cover group-hover:scale-105 transition-transform duration-300"
														/>
														<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
													</div>

													{/* Post Content */}
													<div className="p-5">
														<div className="flex items-center gap-2 mb-2">
															<span className="text-xs text-accent font-semibold">
																{getCategoryLabel(relatedPost.category)}
															</span>
														</div>
														<h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
															{relatedPost.title}
														</h3>
														{relatedPost.excerpt && (
															<p className="text-sm text-muted-foreground line-clamp-2 mb-3">
																{relatedPost.excerpt}
															</p>
														)}
														<div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-accent/10">
															<span>{relatedPost.author?.name}</span>
															{relatedPost.estimatedReadTime && (
																<span>{relatedPost.estimatedReadTime} min</span>
															)}
														</div>
													</div>
												</Card>
											</Link>
										)
									)}
								</div>
							</section>
						)}
					</article>

					{/* CTA Section */}
					<div className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
						<h3 className="text-2xl font-bold mb-4">
							Explore Our AI Workforces
						</h3>
						<p className="text-muted-foreground mb-6">
							Ready to transform your business with autonomous digital workers?
						</p>
						<div className="flex flex-wrap gap-4">
							<Link href="/workforces/inbound-sales">
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white hover:bg-accent/80">
									Explore Solutions
									<ArrowRight className="ml-2 w-4 h-4" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button variant="outline">Get in Touch</Button>
							</Link>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
