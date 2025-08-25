"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react"
import Image from "next/image"

// Sample blog posts data
const blogPosts = [
	{
		id: 1,
		title: "The Rise of Autonomous Digital Workforces",
		excerpt: "Explore how AI-powered workforces are transforming the way businesses operate, from lead generation to customer service.",
		author: "Sarah Chen",
		date: "December 15, 2024",
		readTime: "5 min read",
		category: "AI & Automation",
		image: "/blog/post1.jpg",
		featured: true,
	},
	{
		id: 2,
		title: "Building Scalable Sales Teams with AI Agents",
		excerpt: "Learn how companies are achieving 3.5x conversion rates by deploying intelligent sales automation systems.",
		author: "Michael Rodriguez",
		date: "December 12, 2024",
		readTime: "8 min read",
		category: "Sales",
		image: "/blog/post2.jpg",
		featured: false,
	},
	{
		id: 3,
		title: "The Future of Content Creation: AI Workforces",
		excerpt: "Discover how AI content workforces are revolutionizing marketing departments and creative agencies worldwide.",
		author: "Emily Watson",
		date: "December 10, 2024",
		readTime: "6 min read",
		category: "Content",
		image: "/blog/post3.jpg",
		featured: false,
	},
	{
		id: 4,
		title: "Case Study: 85% Faster Lead Response Times",
		excerpt: "A deep dive into how NovoTech reduced their lead response time from hours to minutes with our lead workforce.",
		author: "David Park",
		date: "December 8, 2024",
		readTime: "10 min read",
		category: "Case Studies",
		image: "/blog/post4.jpg",
		featured: false,
	},
	{
		id: 5,
		title: "Understanding Multi-Agent Systems",
		excerpt: "A technical overview of how multiple AI agents work together to solve complex business problems.",
		author: "Alex Kumar",
		date: "December 5, 2024",
		readTime: "12 min read",
		category: "Technology",
		image: "/blog/post5.jpg",
		featured: false,
	},
	{
		id: 6,
		title: "ROI of Digital Workforces: A Complete Guide",
		excerpt: "Everything you need to know about calculating and maximizing the return on investment from AI workforces.",
		author: "Jessica Liu",
		date: "December 3, 2024",
		readTime: "7 min read",
		category: "Business",
		image: "/blog/post6.jpg",
		featured: false,
	},
]

const categories = ["All", "AI & Automation", "Sales", "Content", "Case Studies", "Technology", "Business"]

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState("All")

	const filteredPosts = selectedCategory === "All"
		? blogPosts
		: blogPosts.filter(post => post.category === selectedCategory)

	const featuredPost = blogPosts.find(post => post.featured)

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-32 pb-24 px-4">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans mb-4">
							Insights & Updates
						</h1>
						<p className="text-muted-foreground text-xl max-w-3xl mx-auto">
							Explore the latest in AI workforces, automation strategies, and success stories from the frontier of autonomous business operations.
						</p>
					</div>

					{/* Category Filters */}
					<div className="flex flex-wrap justify-center gap-2 mb-12">
						{categories.map(category => (
							<Button
								key={category}
								onClick={() => setSelectedCategory(category)}
								variant={selectedCategory === category ? "default" : "outline"}
								className={
									selectedCategory === category
										? "bg-accent dark:bg-accent/60 text-white dark:text-white border-accent shadow-md hover:shadow-lg hover:bg-accent/80 hover:dark:bg-accent/40"
										: "bg-transparent text-foreground border-accent/30 hover:bg-accent/10 dark:hover:bg-accent/20"
								}
							>
								{category}
							</Button>
						))}
					</div>

					{/* Featured Post */}
					{featuredPost && selectedCategory === "All" && (
						<div className="mb-16">
							<Card className="bg-card-background border border-accent/20 shadow-xl overflow-hidden">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									{/* Featured Image */}
									<div className="relative h-64 lg:h-full bg-gradient-to-br from-accent/20 to-accent/10">
										<div className="absolute inset-0 flex items-center justify-center">
											<span className="text-accent/50 text-6xl font-bold">Featured</span>
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
										<h2 className="text-3xl font-bold text-foreground mb-4">
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
										<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
											Read More
											<ArrowRight className="ml-2 w-4 h-4" />
										</Button>
									</div>
								</div>
							</Card>
						</div>
					)}

					{/* Blog Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts
							.filter(post => selectedCategory !== "All" || !post.featured)
							.map(post => (
								<Card
									key={post.id}
									className="bg-card-background border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group cursor-pointer"
								>
									{/* Post Image */}
									<div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden">
										<div className="absolute inset-0 flex items-center justify-center">
											<span className="text-accent/30 text-4xl font-bold">{post.id}</span>
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
											<button className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors flex items-center gap-1">
												Read Article
												<ArrowRight className="w-3 h-3" />
											</button>
										</div>
									</div>
								</Card>
							))}
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

					{/* Newsletter Signup */}
					<Card className="bg-gradient-to-r from-accent/10 to-accent/20 border border-accent/30 shadow-xl p-8 mt-16">
						<div className="text-center max-w-2xl mx-auto">
							<h2 className="text-2xl font-bold text-foreground mb-4">
								Stay Updated
							</h2>
							<p className="text-muted-foreground mb-6">
								Get the latest insights on AI workforces and automation delivered to your inbox.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
								/>
								<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
									Subscribe
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}