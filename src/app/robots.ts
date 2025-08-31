import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [
					"/api/",
					"/admin/",
					"/*.json$",
					"/_next/",
					"/static/",
					"/lp/", // Block all landing pages from being crawled
				],
			},
			// Specific rules for major search engine bots
			{
				userAgent: ["Googlebot", "Bingbot"],
				allow: "/",
				crawlDelay: 0,
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	}
}
