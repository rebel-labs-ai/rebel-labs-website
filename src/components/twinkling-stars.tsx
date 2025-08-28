"use client"

import { useEffect, useRef } from "react"

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
		/>
	)
}
