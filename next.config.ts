import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	// Image optimization configuration
	images: {
		domains: ["novosapien.ai", "cdn.sanity.io"], // Add any external image domains here
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60, // Cache optimized images for 60 seconds
	},

	// Enable compression
	compress: true,

	// Remove X-Powered-By header for security
	poweredByHeader: false,

	// Strict mode for better development experience
	reactStrictMode: true,

	// SEO-friendly trailing slash handling
	trailingSlash: false,

	// Redirects for SEO (add any needed redirects here)
	async redirects() {
		return [
			// Example redirects - uncomment and modify as needed
			// {
			// 	source: "/old-page",
			// 	destination: "/new-page",
			// 	permanent: true, // 301 redirect for SEO
			// },
		]
	},

	// Security and performance headers
	async headers() {
		return [
			{
				// Apply these headers to all routes
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			{
				// Cache static assets
				source: "/fonts/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Cache images
				source: "/images/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Cache favicons
				source: "/favicons/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		]
	},

	// Experimental features (Turbopack is enabled by default in Next.js 15)
	experimental: {
		// Add any experimental features here if needed
	},
}

export default nextConfig
