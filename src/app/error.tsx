"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log error to your error reporting service
		console.error("Application error:", error)
		// In production, you'd send this to an error tracking service like Sentry
	}, [error])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<div className="mb-8">
					<svg
						className="mx-auto h-24 w-24 text-accent-orange"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				</div>
				<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
					Something went wrong!
				</h2>
				<p className="mb-8 text-lg text-muted-foreground">
					We encountered an unexpected error. Our team has been notified and is
					working to fix the issue. Please try again or return to the homepage.
				</p>
				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button onClick={reset} size="lg">
						Try Again
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/">Return to Homepage</Link>
					</Button>
				</div>
				{process.env.NODE_ENV === "development" && error.message && (
					<div className="mt-8 rounded-lg bg-muted p-4 text-left">
						<p className="text-sm font-mono text-muted-foreground">
							{error.message}
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
