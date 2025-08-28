"use client"

import { Button } from "@/components/ui/button"

const categories = [
	"All",
	"AI & Automation",
	"Sales",
	"Content",
	"Case Studies",
	"Technology",
	"Business",
]

interface BlogCategoryFilterProps {
	selectedCategory: string
	onCategoryChange: (category: string) => void
}

export default function BlogCategoryFilter({
	selectedCategory,
	onCategoryChange,
}: BlogCategoryFilterProps) {
	return (
		<div className="flex flex-wrap justify-center gap-2 mb-12">
			{categories.map(category => (
				<Button
					key={category}
					onClick={() => onCategoryChange(category)}
					variant={selectedCategory === category ? "default" : "outline"}
					className={
						selectedCategory === category
							? "bg-accent dark:bg-accent/60 text-white dark:text-white border-accent shadow-md hover:shadow-lg hover:bg-accent/80 hover:dark:bg-accent/40"
							: "bg-transparent text-foreground border-accent/30 hover:bg-accent/10 dark:hover:bg-accent/20"
					}
				>
					{category}
				</Button>
			))}
		</div>
	)
}
