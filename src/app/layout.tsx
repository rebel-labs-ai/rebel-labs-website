import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito_Sans, Reddit_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700", "800", "900"],
})

const redditSans = Reddit_Sans({
	variable: "--font-reddit-sans",
	subsets: ["latin"],
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
})

export const metadata: Metadata = {
	title: {
		template: "Novosapien - %s",
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
	],
	authors: [{ name: "Novosapien" }],
	creator: "Novosapien",
	publisher: "Novosapien",
	metadataBase: new URL("https://novosapien.com"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://novosapien.com",
		siteName: "Novosapien",
		title: "Novosapien - Digital Workforces for Revenue Generation",
		description:
			"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue.",
		images: [
			{
				url: "/logo.svg",
				width: 257,
				height: 256,
				alt: "Novosapien Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Novosapien - Digital Workforces for Revenue Generation",
		description:
			"We deploy digital workforces into your business so you can stop managing tools and start scaling revenue.",
		images: ["/logo.svg"],
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
		other: [{ rel: "icon", url: "/favicon.ico" }],
	},
	manifest: "/favicons/site.webmanifest",
	themeColor: "#A1BCD1",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${redditSans.variable} ${satoshi.variable} antialiased`}
			>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
