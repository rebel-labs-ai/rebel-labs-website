import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { siteConfig } from "@/config/site.config"

export const client = createClient({
	projectId: siteConfig.sanity.projectId,
	dataset: siteConfig.sanity.dataset,
	apiVersion: siteConfig.sanity.apiVersion,
	useCdn: false, // We'll use Next.js caching instead
})

// Helper for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
	return builder.image(source)
}
