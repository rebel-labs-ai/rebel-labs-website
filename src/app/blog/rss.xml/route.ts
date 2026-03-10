import { client } from "@/sanity/client"
import { type SanityDocument } from "next-sanity"
import { siteConfig } from "@/config/site.config"

const baseUrl = siteConfig.url

// Type definitions for Portable Text
interface PortableTextChild {
	_type: string
	text?: string
}

interface PortableTextBlock {
	_type: string
	children?: PortableTextChild[]
}

// Query to get recent blog posts for RSS
const RSS_POSTS_QUERY = `*[
  _type == "post" 
  && defined(slug.current)
]|order(publishedAt desc)[0...20]{
  _id,
  title,
  slug,
  excerpt,
  body[]{
    ...,
    _type == "block" => {
      children[]{
        _type == "span" => {
          text
        }
      }
    }
  },
  author,
  category,
  publishedAt,
  _updatedAt
}`

function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;")
}

function extractTextFromPortableText(body: PortableTextBlock[]): string {
	if (!Array.isArray(body)) return ""

	return body
		.filter(block => block._type === "block")
		.map(block => {
			if (!block.children) return ""
			return block.children
				.filter((child: PortableTextChild) => child.text)
				.map((child: PortableTextChild) => child.text)
				.join("")
		})
		.join("\n\n")
		.slice(0, 500) // Limit to 500 chars for RSS description
}

export async function GET() {
	try {
		// Fetch posts from Sanity
		const posts = await client.fetch<SanityDocument[]>(RSS_POSTS_QUERY)

		// Generate RSS XML
		const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${siteConfig.name} Blog - AI Insights &amp; Automation</title>
    <description>Stay updated with the latest insights on AI workforces, automation strategies, and digital transformation. Learn how to scale your business with intelligent automation.</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <copyright>${siteConfig.copyright}</copyright>
    <generator>Next.js/Sanity CMS</generator>
    <webMaster>${siteConfig.emails.team} (${siteConfig.name} Team)</webMaster>
    <managingEditor>${siteConfig.emails.team} (${siteConfig.name} Editorial)</managingEditor>
    <ttl>3600</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>${siteConfig.name}</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${posts
			.map(post => {
				const postUrl = `${baseUrl}/blog/${post.slug.current}`
				const description =
					post.excerpt || extractTextFromPortableText(post.body)
				const pubDate = new Date(post.publishedAt).toUTCString()
				const lastModified = post._updatedAt
					? new Date(post._updatedAt).toUTCString()
					: pubDate

				return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(description)}</description>
      <content:encoded><![CDATA[${description}]]></content:encoded>
      <dc:creator>${escapeXml(post.author)}</dc:creator>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <lastBuildDate>${lastModified}</lastBuildDate>
      <source url="${baseUrl}/blog/rss.xml">${siteConfig.name} Blog</source>
    </item>`
			})
			.join("")}
  </channel>
</rss>`

		// Return XML response with proper headers
		return new Response(rssXml, {
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				"Cache-Control":
					"public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400",
				"X-Content-Type-Options": "nosniff",
			},
		})
	} catch (error) {
		console.error("Error generating RSS feed:", error)

		// Return a minimal valid RSS feed on error
		const errorRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} Blog</title>
    <link>${baseUrl}/blog</link>
    <description>AI Insights & Automation Blog</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  </channel>
</rss>`

		return new Response(errorRss, {
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
			},
		})
	}
}
