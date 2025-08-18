"use client"

import { useEffect, useRef } from "react"

export function AnimatedDots() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Dot configuration
		const dotSpacing = 40
		const dotRadius = 2
		const baseColor = "#A1BCD1"
		const animatedColor = "#A8CDFF"

		// Create dots array with animation states
		const dots: Array<{
			x: number
			y: number
			isAnimating: boolean
			animationProgress: number
			fadePhase: "in" | "out"
		}> = []

		// Set canvas size and recreate dots
		const setCanvasSize = () => {
			canvas.width = canvas.offsetWidth
			canvas.height = canvas.offsetHeight

			// Recreate dots array when canvas resizes
			dots.length = 0
			const startX = dotSpacing / 2
			const startY = dotSpacing / 2

			for (let x = startX; x <= canvas.width + dotSpacing; x += dotSpacing) {
				for (let y = startY; y <= canvas.height + dotSpacing; y += dotSpacing) {
					dots.push({
						x,
						y,
						isAnimating: false,
						animationProgress: 0,
						fadePhase: "in",
					})
				}
			}
		}
		setCanvasSize()
		window.addEventListener("resize", setCanvasSize)

		// Track how many dots are currently animating
		let animatingCount = 0
		const maxAnimatingDots = 6

		// Animation loop
		let animationId: number
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Count currently animating dots
			animatingCount = dots.filter(d => d.isAnimating).length

			// Randomly trigger new animations if under the limit
			dots.forEach(dot => {
				// Start new animation if we're under the limit
				if (
					!dot.isAnimating &&
					animatingCount < maxAnimatingDots &&
					Math.random() < 0.004
				) {
					dot.isAnimating = true
					dot.animationProgress = 0
					dot.fadePhase = "in"
					animatingCount++
				}

				// Update animation with separate fade in and fade out phases
				if (dot.isAnimating) {
					if (dot.fadePhase === "in") {
						dot.animationProgress += 0.02 // Fast fade in
						if (dot.animationProgress >= 1) {
							dot.fadePhase = "out"
							dot.animationProgress = 1
						}
					} else {
						dot.animationProgress -= 0.005 // Much slower fade out
						if (dot.animationProgress <= 0) {
							dot.isAnimating = false
							dot.animationProgress = 0
							dot.fadePhase = "in"
						}
					}
				}

				// Draw dot
				ctx.beginPath()
				ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)

				// Calculate position-based fading (only fade dots near very bottom)
				const fadeStartY = canvas.height * 0.7 // Start fading at 70% from top
				const fadeEndY = canvas.height * 0.95 // Full fade at 95% from top (very bottom)
				let fadeAmount = 0
				
				if (dot.y > fadeStartY) {
					fadeAmount = Math.min(1, (dot.y - fadeStartY) / (fadeEndY - fadeStartY))
				}

				// Apply pulsing effect with fade to transparent at bottom
				if (dot.isAnimating) {
					ctx.fillStyle = animatedColor
					// Fade to transparent near bottom
					ctx.globalAlpha = (0.4 + dot.animationProgress * 0.6) * (1 - fadeAmount * 0.8)
					
					// Draw glow effect for animated dots
					ctx.shadowBlur = dot.animationProgress * 10 * (1 - fadeAmount * 0.7)
					ctx.shadowColor = animatedColor
				} else {
					ctx.fillStyle = baseColor
					// Fade to transparent near bottom
					ctx.globalAlpha = 0.4 * (1 - fadeAmount * 0.9)
					ctx.shadowBlur = 0
				}

				ctx.fill()
				ctx.shadowBlur = 0 // Reset shadow for next dot
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
			className="absolute inset-0 w-full h-full"
			style={{ pointerEvents: "none" }}
		/>
	)
}
