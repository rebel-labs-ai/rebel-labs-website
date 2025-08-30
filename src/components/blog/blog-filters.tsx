"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BlogFiltersProps {
	categories: Array<{ value: string; label: string }>
	categoryCounts: Record<string, number>
	totalPosts: number
}

export function BlogFilters({ categories, categoryCounts, totalPosts }: BlogFiltersProps) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [isPending, startTransition] = useTransition()
	
	const currentCategory = searchParams.get("category") || "all"
	const currentSearch = searchParams.get("search") || ""
	
	const [searchQuery, setSearchQuery] = useState(currentSearch)

	// Get the label for current category
	const getCategoryLabel = (value: string) => {
		if (value === "all") return "All Articles"
		const cat = categories.find(c => c.value === value)
		return cat?.label || value
	}

	// Handle category change
	const handleCategoryChange = (category: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())
			if (category === "all") {
				params.delete("category")
			} else {
				params.set("category", category)
			}
			router.push(`/blog?${params.toString()}`)
		})
	}

	// Handle search with debounce
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchQuery !== currentSearch) {
				startTransition(() => {
					const params = new URLSearchParams(searchParams.toString())
					if (searchQuery) {
						params.set("search", searchQuery)
					} else {
						params.delete("search")
					}
					router.push(`/blog?${params.toString()}`)
				})
			}
		}, 300)

		return () => clearTimeout(timer)
	}, [searchQuery, currentSearch, searchParams, router])

	const handleClearSearch = () => {
		setSearchQuery("")
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())
			params.delete("search")
			router.push(`/blog?${params.toString()}`)
		})
	}

	return (
		<div className="flex flex-col sm:flex-row gap-4 mb-8">
			{/* Search Bar */}
			<div className="relative flex-1 max-w-md">
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<Input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Search articles..."
					className="pl-10 pr-10 bg-card-background border-accent/20 focus:border-accent"
					aria-label="Search blog posts"
				/>
				{searchQuery && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={handleClearSearch}
						className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
						aria-label="Clear search"
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>

			{/* Category Dropdown */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button 
						variant="outline" 
						className="bg-card-background border-accent/20 hover:border-accent min-w-[200px] justify-between"
						disabled={isPending}
					>
						<span>{getCategoryLabel(currentCategory)}</span>
						<div className="flex items-center gap-2">
							{currentCategory !== "all" && (
								<span className="px-1.5 py-0.5 text-xs bg-accent/10 rounded-full">
									{categoryCounts[currentCategory] || 0}
								</span>
							)}
							<ChevronDown className="h-4 w-4" />
						</div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[200px]">
					<DropdownMenuItem onClick={() => handleCategoryChange("all")}>
						<span className="flex items-center justify-between w-full">
							<span>All Articles</span>
							<span className="text-xs text-muted-foreground">{totalPosts}</span>
						</span>
					</DropdownMenuItem>
					{categories.map((category) => {
						const count = categoryCounts[category.value] || 0
						return (
							<DropdownMenuItem 
								key={category.value}
								onClick={() => handleCategoryChange(category.value)}
							>
								<span className="flex items-center justify-between w-full">
									<span>{category.label}</span>
									{count > 0 && (
										<span className="text-xs text-muted-foreground">{count}</span>
									)}
								</span>
							</DropdownMenuItem>
						)
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}