import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import BlogPostsGrid from "./BlogPostsGrid"
import NewsletterForm from "./NewsletterForm"

// Static blog posts data - moved from client component for SEO
const blogPosts = [
	{
		id: 1,
		title: "The Rise of Autonomous Digital Workforces",
		excerpt:
			"Explore how AI-powered workforces are transforming the way businesses operate, from lead generation to customer service.",
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
		excerpt:
			"Learn how companies are achieving 3.5x conversion rates by deploying intelligent sales automation systems.",
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
		excerpt:
			"Discover how AI content workforces are revolutionizing marketing departments and creative agencies worldwide.",
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
		excerpt:
			"A deep dive into how NovoTech reduced their lead response time from hours to minutes with our lead workforce.",
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
		excerpt:
			"A technical overview of how multiple AI agents work together to solve complex business problems.",
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
		excerpt:
			"Everything you need to know about calculating and maximizing the return on investment from AI workforces.",
		author: "Jessica Liu",
		date: "December 3, 2024",
		readTime: "7 min read",
		category: "Business",
		image: "/blog/post6.jpg",
		featured: false,
	},
]

export const metadata: Metadata = {
	title: "Blog - NovoSapien",
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
		title: "Blog - NovoSapien",
		description:
			"Explore the latest in AI workforces, automation strategies, and success stories from the frontier of autonomous business operations.",
		type: "website",
	},
}

export default function BlogPage() {
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
					{/* Header - Server-rendered for SEO */}
					<div className="text-center mb-12">
						<h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-geist-sans mb-4">
							Insights & Updates
						</h1>
						<p className="text-muted-foreground text-xl max-w-3xl mx-auto">
							Explore the latest in AI workforces, automation strategies, and
							success stories from the frontier of autonomous business
							operations.
						</p>
					</div>

					{/* Blog Posts with Client-side Filtering */}
					<BlogPostsGrid posts={blogPosts} />

					{/* Newsletter Signup */}
					<NewsletterForm />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
