import { ReactNode } from "react"

interface SEOHeadProps {
	children?: ReactNode
	structuredData?: object | object[]
}

/**
 * Wrapper component for common SEO elements
 * Provides a consistent way to add structured data and other SEO elements
 */
export function SEOHead({ children, structuredData }: SEOHeadProps) {
	// Handle single or multiple structured data objects
	const structuredDataArray = structuredData
		? Array.isArray(structuredData)
			? structuredData
			: [structuredData]
		: []

	return (
		<>
			{/* Render structured data scripts */}
			{structuredDataArray.map((data, index) => (
				<script
					key={index}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
				/>
			))}
			{/* Render any additional children */}
			{children}
		</>
	)
}
