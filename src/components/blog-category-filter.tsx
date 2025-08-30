"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Categories as defined in the SEO document with code-friendly names and human-readable labels
export const BLOG_CATEGORIES = [
	{ value: "all", label: "All Articles" },
	{ value: "product", label: "Product Updates" },
	{ value: "case-studies", label: "Case Studies" },
	{ value: "sales-marketing", label: "Sales & Marketing" },
	{ value: "content-ai-creation", label: "Content & AI Creation" },
	{ value: "ai-automation", label: "AI & Automation" },
	{ value: "future-of-work", label: "Future of Work" },
	{ value: "guides-tutorials", label: "Guides & Tutorials" },
	{ value: "news-updates", label: "News & Updates" },
	{ value: "research-data", label: "Research & Data" },
] as const

interface BlogCategoryFilterProps {
	selectedCategory: string
	onCategoryChange: (category: string) => void
	className?: string
	showCounts?: boolean
	categoryCounts?: Record<string, number>
}

export function BlogCategoryFilter({
	selectedCategory,
	onCategoryChange,
	className,
	showCounts = false,
	categoryCounts = {},
}: BlogCategoryFilterProps) {
	return (
		<div className={cn("flex flex-wrap gap-2", className)}>
			{BLOG_CATEGORIES.map((category) => {
				const isActive = selectedCategory === category.value
				const count = categoryCounts[category.value] || 0

				return (
					<Button
						key={category.value}
						variant={isActive ? "default" : "outline"}
						size="sm"
						onClick={() => onCategoryChange(category.value)}
						className={cn(
							"transition-all duration-200",
							isActive
								? "bg-accent text-white border-accent shadow-md hover:bg-accent/90"
								: "bg-card-background border-accent/20 hover:border-accent hover:bg-accent/10"
						)}
						aria-pressed={isActive}
						aria-label={`Filter by ${category.label} category`}
					>
						<span className="flex items-center gap-2">
							{category.label}
							{showCounts && count > 0 && category.value !== "all" && (
								<span className="ml-1 px-1.5 py-0.5 text-xs bg-background/20 rounded-full">
									{count}
								</span>
							)}
						</span>
					</Button>
				)
			})}
		</div>
	)
}