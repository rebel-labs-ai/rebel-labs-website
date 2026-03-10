/**
 * Central site configuration.
 *
 * This is the single source of truth for brand identity, URLs, SEO defaults,
 * analytics IDs, and CMS settings. Update this file to rebrand the entire site.
 */

export const siteConfig = {
	/** Brand identity */
	name: "Novosapien",
	nameStyled: {
		prefix: "novo",
		suffix: "sapien",
	},
	tagline: "Digital Workforces for Revenue Generation",
	description:
		"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue. Transform your operations with AI-powered automation.",

	/** URLs */
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai",
	bookingUrl: "https://cal.com/george-westbrook-novosapien/30min",

	/** Contact */
	emails: {
		general: "hello@novosapien.com",
		privacy: "privacy@novosapien.ai",
		team: "team@novosapien.ai",
	},

	/** Social */
	social: {
		twitter: "@novosapien",
	},

	/** Assets */
	logo: {
		path: "/logo.svg",
		pngPath: "/logo.png",
		alt: "Novosapien Logo",
	},
	ogImage: {
		default: "/og-image.jpg",
		blog: "/og-blog.jpg",
		blogPost: "/og-blog-post.jpg",
	},
	favicon: {
		themeColor: "#A1BCD1",
	},

	/** SEO defaults */
	seo: {
		titleTemplate: "%s | Novosapien",
		defaultTitle: "Novosapien - Digital Workforces for Revenue Generation",
		keywords: [
			"AI workforces",
			"automation",
			"revenue generation",
			"digital transformation",
			"business automation",
			"AI agents",
			"workflow automation",
			"revenue operations",
			"lead generation",
			"content automation",
		],
	},

	/** Analytics */
	analytics: {
		gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-NBC26J83",
		gaId: process.env.NEXT_PUBLIC_GA_ID || "",
		clarityId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
	},

	/** Sanity CMS */
	sanity: {
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3nnkhkhz",
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
		apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
	},

	/** Copyright */
	copyright: `© ${new Date().getFullYear()} Novosapien. All rights reserved.`,
} as const

export type SiteConfig = typeof siteConfig
