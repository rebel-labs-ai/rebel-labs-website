"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react"
import BlogCategoryFilter from "./BlogCategoryFilter"

interface BlogPost {
	id: number
	title: string
	excerpt: string
	author: string
	date: string
	readTime: string
	category: string
	image: string
	featured: boolean
	slug?: string
}

interface BlogPostsGridProps {
	posts: BlogPost[]
}

export default function BlogPostsGrid({ posts }: BlogPostsGridProps) {
	const [selectedCategory, setSelectedCategory] = useState("All")

	const filteredPosts =
		selectedCategory === "All"
			? posts
			: posts.filter(post => post.category === selectedCategory)

	const featuredPost = posts.find(post => post.featured)

	return (
		<>
			{/* Category Filters */}
			<BlogCategoryFilter
				selectedCategory={selectedCategory}
				onCategoryChange={setSelectedCategory}
			/>

			{/* Featured Post */}
			{featuredPost && selectedCategory === "All" && (
				<div className="mb-16">
					<Card className="bg-card-background border border-accent/20 shadow-xl overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							{/* Featured Image */}
							<div className="relative h-64 lg:h-full bg-gradient-to-br from-accent/20 to-accent/10">
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-accent/50 text-5xl sm:text-6xl font-bold">
										Featured
									</span>
								</div>
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
								<h2 className="text-4xl sm:text-4xl font-bold text-foreground mb-4">
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
											{featuredPost.date}
										</span>
										<span className="flex items-center gap-1">
											<Clock className="w-4 h-4" />
											{featuredPost.readTime}
										</span>
									</div>
								</div>
								<Link href={`/blog/${featuredPost.slug || 'rise-of-autonomous-digital-workforces'}`}>
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
				{filteredPosts
					.filter(post => selectedCategory !== "All" || !post.featured)
					.map(post => {
						const postSlug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
						return (
							<Link key={post.id} href={`/blog/${postSlug}`}>
								<Card className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group cursor-pointer h-full">
							{/* Post Image */}
							<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-accent/30 text-3xl sm:text-4xl font-bold">
										{post.id}
									</span>
								</div>
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
										<span className="flex items-center gap-1">
											<Clock className="w-3 h-3" />
											{post.readTime}
										</span>
									</div>
									<span className="flex items-center gap-1">
										<Calendar className="w-3 h-3" />
										{post.date}
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
						)
					})}
			</div>

			{/* Load More */}
			{filteredPosts.length > 6 && (
				<div className="text-center mt-12">
					<Button
						variant="outline"
						className="bg-transparent text-foreground border-accent/30 hover:bg-accent/10 dark:hover:bg-accent/20"
					>
						Load More Articles
					</Button>
				</div>
			)}
		</>
	)
}
