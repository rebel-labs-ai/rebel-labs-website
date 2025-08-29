// Types for SEO and structured data

export interface BreadcrumbItem {
	name: string
	href?: string
}

export interface PageSEO {
	title: string
	description: string
	canonical: string
	ogImage?: string
	keywords?: string[]
}

export interface SchemaData {
	"@context": "https://schema.org"
	"@type": string
	[key: string]:
		| string
		| string[]
		| number
		| boolean
		| SchemaData
		| SchemaData[]
		| Record<string, unknown>
		| undefined
}

export type SchemaType =
	| "WebPage"
	| "Article"
	| "Product"
	| "Service"
	| "Organization"
	| "FAQPage"
	| "ContactPage"
	| "AboutPage"
	| "CollectionPage"
	| "JobPosting"
	| "BlogPosting"
	| "SoftwareApplication"

export interface SEOChange {
	type: "heading" | "image" | "metadata" | "schema"
	original: string
	modified: string
	stylesPreserved: React.CSSProperties | string[]
	visualImpact: "none" | "minimal" | "significant"
	verified: boolean
}

export interface OrganizationSchema extends SchemaData {
	"@type": "Organization"
	name: string
	url: string
	logo?: string
	description?: string
	sameAs?: string[]
	contactPoint?: {
		"@type": "ContactPoint"
		telephone?: string
		contactType?: string
		email?: string
	}
}

export interface WebPageSchema extends SchemaData {
	"@type": "WebPage"
	name: string
	description: string
	url: string
	breadcrumb?: {
		"@type": "BreadcrumbList"
		itemListElement: Array<{
			"@type": "ListItem"
			position: number
			name: string
			item?: string
		}>
	}
}

export interface ServiceSchema extends SchemaData {
	"@type": "Service"
	name: string
	description: string
	provider: {
		"@type": "Organization"
		name: string
	}
	serviceType?: string
	areaServed?: string
}
