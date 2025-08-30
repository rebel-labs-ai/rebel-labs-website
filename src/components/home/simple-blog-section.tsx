import Link from "next/link"
import Image from "next/image"
import { type SanityDocument } from "next-sanity"
import { urlFor } from "@/sanity/client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

interface BlogPost extends SanityDocument {
	title: string
	slug: { current: string }
	excerpt: string
	author?: {
		name: string
		slug?: { current: string }
	}
	category: string
	publishedAt: string
	image?: any
	estimatedReadTime?: number
}

interface SimpleBlogSectionProps {
	posts: BlogPost[]
}

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

export function SimpleBlogSection({ posts }: SimpleBlogSectionProps) {
	return (
		<section className="py-16 sm:py-24 px-4 bg-background">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-8 sm:mb-12">
					<span className="bg-[#A8CDFF]/10 text-foreground dark:text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-[#A8CDFF] shadow-[0_0_15px_rgba(168,205,255,0.4)] inline-block mb-4">
						Latest Insights
					</span>
					<h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Learn More About Digital Workforces
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
						Explore insights on digital workforces, how they work, and how they can transform your business
					</p>
				</div>

				{/* Blog Posts Grid - Limited to 3 posts */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{posts.slice(0, 3).map((post) => (
						<Card key={post._id} className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group h-full flex flex-col">
								{/* Post Image */}
								<Link href={`/blog/${post.slug.current}`}>
									<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
										{post.image ? (
											<Image
												src={urlFor(post.image).width(400).height(300).url()}
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
										<h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors line-clamp-2 cursor-pointer">
											{post.title}
										</h3>
									</Link>

									{/* Excerpt */}
									<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
										{post.excerpt}
									</p>

									{/* Meta */}
									<div className="flex items-center gap-2.5 text-xs text-muted-foreground">
										{post.author && (
											<>
												{post.author.image ? (
													<div className="relative w-5 h-5 rounded-full overflow-hidden bg-accent/10 flex-shrink-0">
														<Image
															src={urlFor(post.author.image).width(40).height(40).url()}
															alt={post.author.name}
															fill
															className="object-cover"
														/>
													</div>
												) : (
													<div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
														<User className="w-3 h-3" />
													</div>
												)}
												{post.author.slug ? (
													<Link
														href={`/author/${post.author.slug.current}`}
														className="hover:text-accent transition-colors"
													>
														{post.author.name}
													</Link>
												) : (
													<span>{post.author.name}</span>
												)}
											</>
										)}
										{post.author && post.estimatedReadTime && (
											<span className="text-muted-foreground/50">•</span>
										)}
										{post.estimatedReadTime && (
											<span>{post.estimatedReadTime} min</span>
										)}
										{(post.author || post.estimatedReadTime) && (
											<span className="text-muted-foreground/50">•</span>
										)}
										<span>
											{new Date(post.publishedAt).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
											})}
										</span>
									</div>
								</div>
							</Card>
					))}
				</div>

				{/* View All Link */}
				<div className="text-center mt-12">
					<Link href="/blog">
						<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
							View All Articles
							<ArrowRight className="ml-2 w-4 h-4" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}