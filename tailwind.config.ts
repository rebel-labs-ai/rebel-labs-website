import type { Config } from "tailwindcss"

export default {
	darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				// Core Brand Colors
				"primary-blue": "hsl(var(--primary-blue))",
				"secondary-blue": "hsl(var(--secondary-blue))",
				"accent-teal": "hsl(var(--accent-teal))",
				// Background Colors
				"main-background": "hsl(var(--main-background))",
				"card-background": "hsl(var(--card-background))",
				"section-background": "hsl(var(--section-background))",
				// Status Colors
				"hot-lead": "hsl(var(--hot-lead))",
				"warm-lead": "hsl(var(--warm-lead))",
				"cold-lead": "hsl(var(--cold-lead))",
				"success-alive": "hsl(var(--success-alive))",
				"appointment-booked": "hsl(var(--appointment-booked))",
				// Error & Warning Colors
				"error-red": "hsl(var(--error-red))",
				"error-red-alt": "hsl(var(--error-red-alt))",
				"error-background": "hsl(var(--error-background))",
				"error-text": "hsl(var(--error-text))",
				// Interactive Elements
				"primary-border": "hsl(var(--primary-border))",
				"card-border": "hsl(var(--card-border))",
				// Typography Colors
				"primary-text": "hsl(var(--primary-text))",
				"secondary-text": "hsl(var(--secondary-text))",
				"muted-text": "hsl(var(--muted-text))",
				"placeholder-text": "hsl(var(--placeholder-text))",
				// Legacy aliases (for backward compatibility)
				"success-green": "hsl(var(--accent-teal))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [],
} satisfies Config
