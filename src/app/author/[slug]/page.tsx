import { Metadata } from "next"
import { notFound } from "next/navigation"
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
import {
	Calendar,
	Clock,
	Linkedin,
	Award,
	BookOpen,
	ArrowRight,
	ArrowLeft,
} from "lucide-react"
import { siteConfig } from "@/config/site.config"
import { getCategoryLabel } from "@/config/blog.config"

const baseUrl = siteConfig.url

// Type definitions
interface BlogPost {
	_id: string
	title: string
	slug: { current: string }
	excerpt: string
	publishedAt: string
	image?: SanityDocument
	category?: string
	estimatedReadTime?: number
}

// Query to fetch author data with all their posts
const AUTHOR_QUERY = `*[_type == "author" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  role,
  bio,
  image,
  twitter,
  linkedin,
  expertise,
  "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
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
	const author = await client.fetch<SanityDocument>(AUTHOR_QUERY, {
		slug,
	})

	if (!author) {
		return {
			title: "Author Not Found | ${siteConfig.name}",
			description: "The author you're looking for could not be found.",
		}
	}

	const title = `${author.name} - ${author.role} | ${siteConfig.name}`
	const description =
		author.bio ||
		`Read articles and insights from ${author.name}, ${author.role} at ${siteConfig.name}.`

	return {
		title,
		description,
		authors: [{ name: author.name }],
		openGraph: {
			type: "profile",
			title,
			description,
			url: `${baseUrl}/author/${author.slug.current}`,
			images: author.image
				? [
						{
							url: urlFor(author.image).width(1200).height(630).url(),
							width: 1200,
							height: 630,
							alt: author.name,
						},
					]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			site: siteConfig.social.twitter,
			creator: author.twitter
				? `@${author.twitter}`
				: siteConfig.social.twitter,
			title,
			description,
			images: author.image
				? [urlFor(author.image).width(1200).height(630).url()]
				: undefined,
		},
		alternates: {
			canonical: `${baseUrl}/author/${author.slug.current}`,
		},
	}
}

// Generate static params for all authors
export async function generateStaticParams() {
	const authors = await client.fetch<SanityDocument[]>(
		`*[_type == "author" && defined(slug.current)]{slug}`
	)
	return authors.map(author => ({
		slug: author.slug.current,
	}))
}

export default async function AuthorPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const author = await client.fetch<SanityDocument>(AUTHOR_QUERY, {
		slug,
	})

	if (!author) {
		notFound()
	}

	// Schema.org structured data for Person
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${baseUrl}/author/${author.slug.current}#person`,
		name: author.name,
		jobTitle: author.role,
		description: author.bio,
		url: `${baseUrl}/author/${author.slug.current}`,
		image: author.image
			? urlFor(author.image).width(800).height(800).url()
			: undefined,
		sameAs: [
			author.twitter && `https://twitter.com/${author.twitter}`,
			author.linkedin,
		].filter(Boolean),
		knowsAbout: author.expertise || [],
		worksFor: {
			"@type": "Organization",
			name: siteConfig.name,
			url: baseUrl,
		},
		memberOf: {
			"@type": "Organization",
			name: siteConfig.name,
			url: baseUrl,
		},
	}

	// Schema for author's articles
	const articlesSchema = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: `Articles by ${author.name}`,
		description: `All articles written by ${author.name}, ${author.role} at ${siteConfig.name}`,
		url: `${baseUrl}/author/${author.slug.current}`,
		author: {
			"@id": `${baseUrl}/author/${author.slug.current}#person`,
		},
		hasPart: author.posts?.map((post: BlogPost) => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			url: `${baseUrl}/blog/${post.slug.current}`,
			datePublished: post.publishedAt,
			author: {
				"@id": `${baseUrl}/author/${author.slug.current}#person`,
			},
		})),
	}

	const combinedSchema = {
		"@context": "https://schema.org",
		"@graph": [personSchema, articlesSchema],
	}

	return (
		<div className="min-h-screen bg-background">
			{/* SEO: Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
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
					{/* Breadcrumbs */}
					<div className="mb-4">
						<Breadcrumbs
							items={[
								{ name: "Home", href: "/" },
								{ name: "Blog", href: "/blog" },
								{ name: author.name },
							]}
						/>
					</div>

					{/* Back to Blog Button */}
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Blog
					</Link>

					{/* Author Profile Section */}
					<div className="mb-16">
						<Card className="bg-card-background border border-accent/20 shadow-xl overflow-hidden">
							<div className="p-8 lg:p-12">
								<div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
									{/* Author Image */}
									<div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent/10 flex-shrink-0">
										{author.image ? (
											<Image
												src={urlFor(author.image).width(320).height(320).url()}
												alt={author.name}
												fill
												className="object-cover"
											/>
										) : (
											<div className="w-full h-full flex items-center justify-center">
												<span className="text-4xl">👤</span>
											</div>
										)}
									</div>

									{/* Author Info */}
									<div className="flex-1 text-center lg:text-left">
										<h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
											{author.name}
										</h1>
										<p className="text-xl text-accent font-semibold mb-4">
											{author.role}
										</p>

										{author.bio && (
											<p className="text-muted-foreground text-lg mb-6 max-w-3xl">
												{author.bio}
											</p>
										)}

										{/* Expertise Areas */}
										{author.expertise && author.expertise.length > 0 && (
											<div className="mb-6">
												<div className="flex items-center gap-2 mb-3">
													<Award className="w-5 h-5 text-accent" />
													<span className="font-semibold text-foreground">
														Areas of Expertise
													</span>
												</div>
												<div className="flex flex-wrap gap-2">
													{author.expertise.map(
														(area: string, index: number) => (
															<span
																key={index}
																className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30"
															>
																{area}
															</span>
														)
													)}
												</div>
											</div>
										)}

										{/* Social Links */}
										<div className="flex gap-4 justify-center lg:justify-start">
											{author.twitter && (
												<a
													href={`https://twitter.com/${author.twitter}`}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-accent transition-colors"
													aria-label={`Follow ${author.name} on X`}
												>
													{/* X (formerly Twitter) Logo */}
													<svg
														className="w-6 h-6"
														viewBox="0 0 24 24"
														fill="currentColor"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
													</svg>
												</a>
											)}
											{author.linkedin && (
												<a
													href={author.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-accent transition-colors"
													aria-label={`Connect with ${author.name} on LinkedIn`}
												>
													<Linkedin className="w-6 h-6" />
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</Card>
					</div>

					{/* Author's Articles */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<BookOpen className="w-6 h-6 text-accent" />
							<h2 className="text-2xl sm:text-3xl font-bold text-foreground">
								Articles by {author.name}
							</h2>
							{author.posts && author.posts.length > 0 && (
								<span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm font-semibold">
									{author.posts.length}
								</span>
							)}
						</div>

						{author.posts && author.posts.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{author.posts.map((post: BlogPost) => (
									<Link key={post._id} href={`/blog/${post.slug.current}`}>
										<Card className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group cursor-pointer h-full">
											{/* Post Image */}
											<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
												{post.image ? (
													<Image
														src={urlFor(post.image)
															.width(400)
															.height(300)
															.url()}
														alt={post.title}
														fill
														className="object-cover group-hover:scale-105 transition-transform duration-300"
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center">
														<span className="text-4xl text-accent/30">📄</span>
													</div>
												)}
												<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
											</div>

											{/* Post Content */}
											<div className="p-6">
												{/* Category */}
												<div className="flex items-center gap-2 mb-3">
													<span className="text-xs text-accent font-semibold">
														{post.category && getCategoryLabel(post.category)}
													</span>
												</div>

												{/* Title */}
												<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
													{post.title}
												</h3>

												{/* Excerpt */}
												<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
													{post.excerpt}
												</p>

												{/* Meta */}
												<div className="flex items-center justify-between text-xs text-muted-foreground">
													<div className="flex items-center gap-3">
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
																year: "numeric",
															}
														)}
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
						) : (
							<Card className="bg-card-background border border-accent/20 p-12 text-center">
								<p className="text-muted-foreground text-lg mb-6">
									No articles published yet.
								</p>
								<Link href="/blog">
									<Button variant="outline">Browse All Articles</Button>
								</Link>
							</Card>
						)}
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
