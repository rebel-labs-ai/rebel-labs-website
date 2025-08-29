"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<div className="fixed top-4 right-4 z-50">
			<div className="backdrop-blur-sm rounded-lg p-0.5 border border-accent bg-background/80 dark:bg-card/80">
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="rounded-md p-2 h-8 w-10 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 group relative flex items-center justify-center"
					aria-label="Toggle theme"
				>
					{theme === "dark" ? (
						<>
							{/* Moon icon - visible by default, hidden on hover */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 transition-opacity duration-200 group-hover:opacity-0"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
								/>
							</svg>
							{/* Sun icon - hidden by default, visible on hover */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
							>
								<circle cx="12" cy="12" r="4" />
								<path d="M12 2v2" />
								<path d="M12 20v2" />
								<path d="m4.93 4.93 1.41 1.41" />
								<path d="m17.66 17.66 1.41 1.41" />
								<path d="M2 12h2" />
								<path d="M20 12h2" />
								<path d="m6.34 17.66-1.41 1.41" />
								<path d="m19.07 4.93-1.41 1.41" />
							</svg>
						</>
					) : (
						<>
							{/* Sun icon - visible by default, hidden on hover */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 transition-opacity duration-200 group-hover:opacity-0"
							>
								<circle cx="12" cy="12" r="4" />
								<path d="M12 2v2" />
								<path d="M12 20v2" />
								<path d="m4.93 4.93 1.41 1.41" />
								<path d="m17.66 17.66 1.41 1.41" />
								<path d="M2 12h2" />
								<path d="M20 12h2" />
								<path d="m6.34 17.66-1.41 1.41" />
								<path d="m19.07 4.93-1.41 1.41" />
							</svg>
							{/* Moon icon - hidden by default, visible on hover */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
								/>
							</svg>
						</>
					)}
				</Button>
			</div>
		</div>
	)
}
