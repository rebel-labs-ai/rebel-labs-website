import type { Metadata } from "next"
import { redirect } from "next/navigation"

/* AGENT COMMENT: SEO Optimization - Enhanced Metadata
   Improved metadata for better search visibility and social sharing
   Added OpenGraph, Twitter Card, and canonical URL
   SEO Reason: Improves click-through rates and social sharing
   Agent: SEO Agent
   Date: 2025-01-28
*/
export const metadata: Metadata = {
	title: "Contact Novosapien - Schedule Your AI Consultation",
	description:
		"Schedule a free consultation with Novosapien's AI experts. Transform your business with autonomous digital workforces. Book your 30-minute call today.",
	keywords:
		"contact Novosapien, AI consultation, digital workforce demo, schedule meeting, AI automation experts",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://novosapien.ai/contact",
		siteName: "Novosapien",
		title: "Contact Novosapien - Schedule Your AI Consultation",
		description:
			"Book a free 30-minute consultation with our AI experts. Discover how autonomous workforces can transform your business.",
		images: [
			{
				url: "/og-contact.jpg",
				width: 1200,
				height: 630,
				alt: "Contact Novosapien",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@novosapien",
		creator: "@novosapien",
		title: "Contact Novosapien",
		description:
			"Schedule your free AI consultation. Transform your business with autonomous digital workforces.",
		images: ["/og-contact.jpg"],
	},
	alternates: {
		canonical: "https://cal.com/george-westbrook-novosapien/30min",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export default function ContactPage() {
	/* AGENT COMMENT: SEO Optimization - Server-Side Redirect
	   Using Next.js redirect() for proper server-side redirect
	   SEO Reason: Search engines better understand redirect intent
	   Agent: SEO Agent
	   Date: 2025-01-28
	*/
	redirect("https://cal.com/george-westbrook-novosapien/30min")
}
