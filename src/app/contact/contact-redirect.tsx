"use client"

import { useEffect } from "react"

export function ContactRedirect() {
	useEffect(() => {
		// Redirect to Cal.com booking page
		window.location.href = "https://cal.com/george-westbrook-novosapien/30min"
	}, [])

	// Show a brief loading state while redirecting
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="text-center">
				<p className="text-muted-foreground">Redirecting to booking page...</p>
			</div>
		</div>
	)
}
