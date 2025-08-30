import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/client"
import type { PortableTextComponents } from "@portabletext/react"

export const portableTextComponents: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			// Check for different possible image data structures
			const hasAsset =
				value?.asset?._ref || value?.asset?._id || value?.asset?.url

			if (!hasAsset && !value?._type) {
				return null
			}

			// Try to get the image URL
			let imageUrl: string
			try {
				// If we have a direct URL from Sanity
				if (value.asset?.url) {
					imageUrl = value.asset.url
				} else {
					// Otherwise use urlFor builder
					imageUrl = urlFor(value)
						.width(1200)
						.height(800)
						.fit("max")
						.auto("format")
						.url()
				}
			} catch {
				return null
			}

			return (
				<figure className="my-10 space-y-3">
					<div className="relative rounded-xl overflow-hidden border border-accent/10 shadow-lg">
						<Image
							src={imageUrl}
							alt={value.alt || "Blog post image"}
							width={1200}
							height={800}
							className="w-full h-auto object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
							loading="lazy"
							unoptimized={imageUrl.includes("cdn.sanity.io")}
						/>
					</div>
					{value.caption && (
						<figcaption className="text-sm text-muted-foreground text-center italic px-4">
							{value.caption}
						</figcaption>
					)}
				</figure>
			)
		},
	},
	marks: {
		link: ({ children, value }) => {
			const rel = !value.href?.startsWith("/")
				? "noreferrer noopener"
				: undefined
			const target = !value.href?.startsWith("/") ? "_blank" : undefined

			return (
				<Link
					href={value.href}
					rel={rel}
					target={target}
					className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
				>
					{children}
				</Link>
			)
		},
		strong: ({ children }) => (
			<strong className="font-semibold text-foreground">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
		code: ({ children }) => (
			<code className="px-1.5 py-0.5 rounded-md bg-muted text-sm font-mono">
				{children}
			</code>
		),
	},
	block: {
		h1: ({ children }) => (
			<h1 className="text-4xl font-bold mt-12 mb-6 text-foreground">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-3xl font-bold mt-10 mb-5 text-foreground">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">
				{children}
			</h4>
		),
		h5: ({ children }) => (
			<h5 className="text-lg font-semibold mt-5 mb-2 text-foreground">
				{children}
			</h5>
		),
		h6: ({ children }) => (
			<h6 className="text-base font-semibold mt-4 mb-2 text-foreground">
				{children}
			</h6>
		),
		normal: ({ children }) => (
			<p className="mb-6 leading-relaxed text-foreground/90">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-accent/50 pl-6 py-2 my-8 italic text-muted-foreground">
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="list-disc list-inside mb-6 space-y-2 text-foreground/90">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="list-decimal list-inside mb-6 space-y-2 text-foreground/90">
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => (
			<li className="ml-4">
				<span>{children}</span>
			</li>
		),
		number: ({ children }) => (
			<li className="ml-4">
				<span>{children}</span>
			</li>
		),
	},
}
