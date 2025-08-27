"use client"

import { Button } from "@/components/ui/button"

export function ContactModalButton() {
	const handleBookSession = () => {
		// For now, we'll use a simple redirect to the booking page
		// This can be enhanced later with a proper modal if needed
		window.open("https://cal.com/novosapien/demo", "_blank")
	}

	return (
		<Button
			onClick={handleBookSession}
			className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30"
		>
			Book a Strategic Session
		</Button>
	)
}
