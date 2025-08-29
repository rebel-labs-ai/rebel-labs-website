import { MetadataRoute } from "next"
import { client } from "@/sanity/client"
import { type SanityDocument } from "next-sanity"

// Query to get all published blog posts
const POSTS_QUERY = `*[
  _type == "post" 
  && defined(slug.current)
]|order(publishedAt desc){
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Define your base URL
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

	// Get current date for lastModified
	const currentDate = new Date()

	// Fetch all blog posts from Sanity
	let blogPosts: MetadataRoute.Sitemap = []
	try {
		const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
		blogPosts = posts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: new Date(post._updatedAt || post.publishedAt),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		}))
	} catch (error) {
		console.error("Error fetching blog posts for sitemap:", error)
		// Continue without blog posts if there's an error
	}

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/mission`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: "daily", // Changed to daily since blog content updates more frequently
			priority: 0.9,
		},
		{
			url: `${baseUrl}/careers`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/workforces/content-creation`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/workforces/inbound-sales`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/workforces/lab`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: currentDate,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: currentDate,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/cookies`,
			lastModified: currentDate,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	]

	// Combine static pages and dynamic blog posts
	return [...staticPages, ...blogPosts]
}