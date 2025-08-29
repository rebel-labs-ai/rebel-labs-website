import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
	name: string
	href?: string
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[]
	className?: string
}

export default function Breadcrumbs({
	items,
	className = "",
}: BreadcrumbsProps) {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"

	// Generate schema.org structured data for breadcrumbs
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.href ? `${baseUrl}${item.href}` : undefined,
		})),
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<nav aria-label="Breadcrumb" className={`sr-only ${className}`}>
				<ol className="flex items-center space-x-1">
					{items.map((item, index) => (
						<li key={index} className="flex items-center">
							{index > 0 && (
								<ChevronRight
									className="mx-1 h-4 w-4 flex-shrink-0 text-muted-foreground"
									aria-hidden="true"
								/>
							)}
							{item.href ? (
								<Link
									href={item.href}
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{item.name}
								</Link>
							) : (
								<span
									className="font-medium text-foreground"
									aria-current="page"
								>
									{item.name}
								</span>
							)}
						</li>
					))}
				</ol>
			</nav>
		</>
	)
}
