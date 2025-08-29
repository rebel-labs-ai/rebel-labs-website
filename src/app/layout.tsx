import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito_Sans, Reddit_Sans } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
})

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700", "800", "900"],
	display: "swap",
})

const redditSans = Reddit_Sans({
	variable: "--font-reddit-sans",
	subsets: ["latin"],
	display: "swap",
})

const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
	preload: true,
})

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai"
	),
	title: {
		template: "%s | Novosapien",
		default: "Novosapien - Digital Workforces for Revenue Generation",
	},
	description:
		"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue. Transform your operations with AI-powered automation.",
	keywords: [
		"AI workforces",
		"automation",
		"revenue generation",
		"digital transformation",
		"business automation",
		"AI agents",
		"workflow automation",
		"revenue operations",
		"lead generation",
		"content automation",
	],
	authors: [{ name: "Novosapien" }],
	creator: "Novosapien",
	publisher: "Novosapien",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 5,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai",
		siteName: "Novosapien",
		title: "Novosapien - Digital Workforces for Revenue Generation",
		description:
			"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue. Transform your operations with AI-powered automation.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Novosapien - Digital Workforces for Revenue Generation",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Novosapien - Digital Workforces for Revenue Generation",
		description:
			"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue.",
		images: ["/og-image.jpg"],
		creator: "@novosapien",
		site: "@novosapien",
	},
	icons: {
		icon: [
			{ url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{
				url: "/favicons/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{ rel: "icon", url: "/favicons/favicon.ico" },
			{
				rel: "mask-icon",
				url: "/favicons/safari-pinned-tab.svg",
				color: "#A1BCD1",
			},
		],
	},
	manifest: "/favicons/site.webmanifest",
	alternates: {
		canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://novosapien.ai",
	},
	category: "technology",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Preconnect to external domains for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				{/* DNS prefetch for analytics (when added) */}
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${redditSans.variable} ${satoshi.variable} antialiased`}
			>
				{/* Skip Navigation Link for Accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg"
				>
					Skip to main content
				</a>
				<ThemeProvider>{children}</ThemeProvider>

				{/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
				{process.env.NEXT_PUBLIC_GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
							`}
						</Script>
					</>
				)}
			</body>
		</html>
	)
}
