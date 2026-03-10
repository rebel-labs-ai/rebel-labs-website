/**
 * Blog configuration.
 *
 * Single source of truth for blog categories and related settings.
 * Previously duplicated across blog/page.tsx and blog/[slug]/page.tsx.
 */

export interface BlogCategory {
	/** URL-friendly slug used in Sanity and query params */
	value: string
	/** Human-readable display label */
	label: string
}

export const blogCategories: BlogCategory[] = [
	{ value: "product", label: "Product Updates" },
	{ value: "case-studies", label: "Case Studies" },
	{ value: "sales-marketing", label: "Sales & Marketing" },
	{ value: "content-ai-creation", label: "Content & AI Creation" },
	{ value: "ai-automation", label: "AI & Automation" },
	{ value: "future-of-work", label: "Future of Work" },
	{ value: "guides-tutorials", label: "Guides & Tutorials" },
	{ value: "news-updates", label: "News & Updates" },
	{ value: "research-data", label: "Research & Data" },
]

/** Look up a category's display label by its value. Falls back to the raw value. */
export function getCategoryLabel(category: string): string {
	const cat = blogCategories.find(c => c.value === category)
	return cat?.label || category
}
