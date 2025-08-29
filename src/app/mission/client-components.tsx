"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

// Twinkling Stars Background Component - Interactive client component
export function TwinklingStars() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Set canvas size
		const setCanvasSize = () => {
			canvas.width = window.innerWidth
			canvas.height = document.documentElement.scrollHeight
		}
		setCanvasSize()
		window.addEventListener("resize", setCanvasSize)

		// Create stars
		const stars: Array<{
			x: number
			y: number
			size: number
			opacity: number
			twinkleSpeed: number
		}> = []

		for (let i = 0; i < 200; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 2,
				opacity: Math.random(),
				twinkleSpeed: 0.005 + Math.random() * 0.01,
			})
		}

		// Animation loop
		let animationId: number
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			stars.forEach(star => {
				// Update opacity for twinkling effect
				star.opacity += star.twinkleSpeed
				if (star.opacity > 1 || star.opacity < 0) {
					star.twinkleSpeed = -star.twinkleSpeed
				}

				// Draw star
				ctx.beginPath()
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
				ctx.fill()
			})

			animationId = requestAnimationFrame(animate)
		}
		animate()

		return () => {
			cancelAnimationFrame(animationId)
			window.removeEventListener("resize", setCanvasSize)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0"
			style={{ background: "transparent" }}
			aria-hidden="true"
		/>
	)
}

// Scroll to Section Button - Interactive client component
interface ScrollButtonProps {
	targetIndex: number
	onScroll: (index: number) => void
	className?: string
}

export function ScrollButton({
	targetIndex,
	onScroll,
	className = "",
}: ScrollButtonProps) {
	return (
		<button
			onClick={() => onScroll(targetIndex)}
			className={`min-h-[48px] min-w-[48px] p-3 ${className}`}
			aria-label="Scroll to next section"
		>
			<ChevronDown className="h-8 w-8" />
		</button>
	)
}

// Animation wrapper for hero content - Handles animation state
interface AnimatedHeroContentProps {
	children: React.ReactNode
}

export function AnimatedHeroContent({ children }: AnimatedHeroContentProps) {
	const [showIntro, setShowIntro] = useState(false)
	const [showSubtext, setShowSubtext] = useState(false)

	useEffect(() => {
		setTimeout(() => setShowIntro(true), 100)
		setTimeout(() => setShowSubtext(true), 800)
	}, [])

	return (
		<div
			data-show-intro={showIntro}
			data-show-subtext={showSubtext}
			className="relative"
		>
			{children}
		</div>
	)
}

// Scroll handler hook for section tracking
export function useScrollTracking() {
	const [activeSection, setActiveSection] = useState(0)
	const sectionsRef = useRef<(HTMLElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2

			sectionsRef.current.forEach((section, index) => {
				if (section) {
					const { offsetTop, offsetHeight } = section
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(index)
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

	return { activeSection, sectionsRef, scrollToSection }
}
