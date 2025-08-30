"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogSearchProps {
	onSearch: (query: string) => void
	placeholder?: string
	className?: string
	defaultValue?: string
}

export function BlogSearch({
	onSearch,
	placeholder = "Search articles...",
	className,
	defaultValue = "",
}: BlogSearchProps) {
	const [searchQuery, setSearchQuery] = useState(defaultValue)
	const [debouncedQuery, setDebouncedQuery] = useState(defaultValue)

	// Debounce search to avoid too many queries
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(searchQuery)
		}, 300)

		return () => clearTimeout(timer)
	}, [searchQuery])

	// Trigger search when debounced query changes
	useEffect(() => {
		onSearch(debouncedQuery)
	}, [debouncedQuery, onSearch])

	const handleClear = useCallback(() => {
		setSearchQuery("")
		setDebouncedQuery("")
		onSearch("")
	}, [onSearch])

	return (
		<div className={cn("relative", className)}>
			<div className="relative">
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<Input
					type="text"
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder={placeholder}
					className="pl-10 pr-10 bg-card-background border-accent/20 focus:border-accent"
					aria-label="Search blog posts"
				/>
				{searchQuery && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={handleClear}
						className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
						aria-label="Clear search"
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	)
}
