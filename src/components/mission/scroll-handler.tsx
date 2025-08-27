"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

interface ScrollHandlerProps {
	children: (props: {
		sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>
		scrollToSection: (index: number) => void
	}) => React.ReactNode
}

export function ScrollHandler({ children }: ScrollHandlerProps) {
	const sectionsRef = useRef<(HTMLElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2

			sectionsRef.current.forEach(section => {
				if (section) {
					const { offsetTop, offsetHeight } = section
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						// We could track active section here if needed for highlighting navigation
					}
				}
			})
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (index: number) => {
		sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
	}

	return <>{children({ sectionsRef, scrollToSection })}</>
}

interface ScrollToNextButtonProps {
	onClick: () => void
}

export function ScrollToNextButton({ onClick }: ScrollToNextButtonProps) {
	return (
		<button
			onClick={onClick}
			className="absolute bottom-12 flex animate-bounce flex-col items-center text-muted-foreground transition-colors hover:text-foreground"
		>
			<ChevronDown className="h-8 w-8" />
		</button>
	)
}
