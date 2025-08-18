"use client"

import { useEffect, useState } from "react"

const phrases = [
	"Delivering Outcomes",
	"Booking Meetings",
	"Generating Pipeline",
	"Increasing Revenue"
]

export function AnimatedText() {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
	const [displayedText, setDisplayedText] = useState("")
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		const currentPhrase = phrases[currentPhraseIndex]
		const typingSpeed = isDeleting ? 50 : 100
		
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				// Typing
				if (displayedText.length < currentPhrase.length) {
					setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
				} else {
					// Finished typing, wait then start deleting
					setTimeout(() => setIsDeleting(true), 2000)
				}
			} else {
				// Deleting
				if (displayedText.length > 0) {
					setDisplayedText(displayedText.slice(0, -1))
				} else {
					// Finished deleting, move to next phrase
					setIsDeleting(false)
					setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
				}
			}
		}, typingSpeed)

		return () => clearTimeout(timeout)
	}, [displayedText, isDeleting, currentPhraseIndex])

	return (
		<span className="text-[#A1BCD1] font-normal inline-block min-w-[320px]">
			{displayedText}
			<span className="animate-pulse text-[#A1BCD1]">|</span>
		</span>
	)
}