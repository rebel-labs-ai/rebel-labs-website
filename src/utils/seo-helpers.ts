import { CSSProperties } from "react"

/**
 * Preserves visual styles when converting heading tags for SEO
 * Maps heading sizes to match your existing design system
 */
export function preserveHeadingStyles(
	originalTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
): CSSProperties {
	// These styles match the typical heading sizes in your Tailwind/design system
	const styles: Record<string, CSSProperties> = {
		h1: {
			fontSize: "3rem", // text-5xl
			fontWeight: "900", // font-black
			lineHeight: "1",
			letterSpacing: "-0.02em",
		},
		h2: {
			fontSize: "2.25rem", // text-4xl
			fontWeight: "800", // font-extrabold
			lineHeight: "1.1",
			letterSpacing: "-0.01em",
		},
		h3: {
			fontSize: "1.875rem", // text-3xl
			fontWeight: "700", // font-bold
			lineHeight: "1.25",
		},
		h4: {
			fontSize: "1.5rem", // text-2xl
			fontWeight: "600", // font-semibold
			lineHeight: "1.333",
		},
		h5: {
			fontSize: "1.25rem", // text-xl
			fontWeight: "600", // font-semibold
			lineHeight: "1.4",
		},
		h6: {
			fontSize: "1.125rem", // text-lg
			fontWeight: "600", // font-semibold
			lineHeight: "1.5",
		},
	}
	return styles[originalTag] || {}
}

/**
 * Type guard for heading elements
 */
export function isHeadingTag(
	tag: string
): tag is "h1" | "h2" | "h3" | "h4" | "h5" | "h6" {
	return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)
}

/**
 * Extracts text content for meta descriptions from HTML/JSX
 * Strips HTML tags and truncates to specified length
 */
export function extractTextContent(
	content: string,
	maxLength: number = 160
): string {
	// Strip HTML tags
	const text = content.replace(/<[^>]*>/g, "").trim()
	// Replace multiple spaces with single space
	const cleanedText = text.replace(/\s+/g, " ")
	// Truncate if necessary
	if (cleanedText.length > maxLength) {
		// Try to break at a word boundary
		const truncated = cleanedText.substring(0, maxLength - 3)
		const lastSpace = truncated.lastIndexOf(" ")
		if (lastSpace > maxLength * 0.8) {
			return truncated.substring(0, lastSpace) + "..."
		}
		return truncated + "..."
	}
	return cleanedText
}

/**
 * Generates canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.com"
	// Ensure path starts with /
	const cleanPath = path.startsWith("/") ? path : `/${path}`
	// Remove trailing slash except for root
	const normalizedPath = cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "")
	return `${baseUrl}${normalizedPath}`
}

/**
 * Generates Open Graph image URL
 */
export function getOgImageUrl(imagePath?: string): string {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.com"
	const defaultImage = "/og-image.jpg"
	const image = imagePath || defaultImage
	// Handle absolute URLs
	if (image.startsWith("http")) {
		return image
	}
	// Ensure image path starts with /
	const cleanImage = image.startsWith("/") ? image : `/${image}`
	return `${baseUrl}${cleanImage}`
}

/**
 * Formats date for schema.org structured data
 */
export function formatSchemaDate(date: Date | string): string {
	const dateObj = typeof date === "string" ? new Date(date) : date
	return dateObj.toISOString()
}

/**
 * Generates organization schema for the company
 */
export function getOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Novosapien",
		url: "https://novosapien.com",
		logo: "https://novosapien.com/logo.svg",
		description:
			"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue.",
		sameAs: [
			// Add social media URLs when available
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer service",
			email: "hello@novosapien.com", // Update with actual contact
		},
	}
}

/**
 * Sanitizes text for use in meta tags
 * Removes special characters that could break meta tag syntax
 */
export function sanitizeMetaContent(text: string): string {
	return text
		.replace(/"/g, "'") // Replace double quotes with single
		.replace(/\n/g, " ") // Replace newlines with spaces
		.replace(/\s+/g, " ") // Replace multiple spaces with single
		.trim()
}

/**
 * Generates keywords from content
 * Useful for automated keyword extraction
 */
export function generateKeywords(
	content: string,
	additionalKeywords: string[] = []
): string[] {
	// Common stop words to exclude
	const stopWords = new Set([
		"the",
		"is",
		"at",
		"which",
		"on",
		"and",
		"a",
		"an",
		"as",
		"are",
		"was",
		"were",
		"been",
		"be",
		"have",
		"has",
		"had",
		"do",
		"does",
		"did",
		"will",
		"would",
		"could",
		"should",
		"may",
		"might",
		"must",
		"can",
		"this",
		"that",
		"these",
		"those",
		"i",
		"you",
		"he",
		"she",
		"it",
		"we",
		"they",
		"what",
		"who",
		"when",
		"where",
		"why",
		"how",
		"all",
		"each",
		"every",
		"both",
		"few",
		"more",
		"most",
		"other",
		"some",
		"such",
		"only",
		"own",
		"same",
		"so",
		"than",
		"too",
		"very",
		"just",
		"but",
		"for",
		"of",
		"to",
		"from",
		"up",
		"out",
		"if",
		"about",
		"into",
		"through",
		"during",
		"before",
		"after",
		"above",
		"below",
		"between",
		"under",
		"again",
		"further",
		"then",
		"once",
	])

	// Extract words from content
	const words = content
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ")
		.split(/\s+/)
		.filter(word => word.length > 3 && !stopWords.has(word))

	// Count word frequency
	const wordFreq = new Map<string, number>()
	words.forEach(word => {
		wordFreq.set(word, (wordFreq.get(word) || 0) + 1)
	})

	// Sort by frequency and get top keywords
	const topKeywords = Array.from(wordFreq.entries())
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10)
		.map(([word]) => word)

	// Combine with additional keywords and remove duplicates
	return [...new Set([...additionalKeywords, ...topKeywords])]
}
