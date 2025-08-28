"use client"

import { useEffect, useRef } from "react"

export function ElasticInfrastructureGraph() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const animationRef = useRef<number>(0)
	const timeRef = useRef(0)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Function to check if we're in dark mode
		const isDarkMode = () => {
			return document.documentElement.getAttribute("data-theme") === "dark"
		}

		// Set canvas size
		const resizeCanvas = () => {
			const rect = canvas.getBoundingClientRect()
			const dpr = window.devicePixelRatio || 1
			
			// Set actual size in memory
			canvas.width = rect.width * dpr
			canvas.height = rect.height * dpr
			
			// Scale context to ensure correct drawing operations
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
		}
		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)

		// Generate demand points (smooth, realistic fluctuation)
		const generateDemandPoint = (x: number) => {
			// Create varying demand with multiple sine waves for realistic fluctuation
			const base = 0.5
			const variation1 = Math.sin(x * 0.02) * 0.2
			const variation2 = Math.sin(x * 0.05) * 0.15
			const variation3 = Math.sin(x * 0.08) * 0.1
			const spike = x % 200 < 50 ? Math.sin((x % 200) * 0.1) * 0.2 : 0
			return Math.max(
				0.1,
				Math.min(0.9, base + variation1 + variation2 + variation3 + spike)
			)
		}

		const animate = () => {
			const dpr = window.devicePixelRatio || 1
			const width = canvas.width / dpr
			const height = canvas.height / dpr

			// Clear canvas
			ctx.clearRect(0, 0, width, height)

			// Move time forward (slower animation)
			timeRef.current += 0.5

			// Get theme-aware colors
			const isInDarkMode = isDarkMode()
			const textColor = isInDarkMode
				? "rgba(168, 205, 255, 0.6)"
				: "rgba(100, 116, 139, 0.8)" // muted-foreground
			const gridColor = isInDarkMode
				? "rgba(168, 205, 255, 0.1)"
				: "rgba(100, 116, 139, 0.1)"
			const axisColor = isInDarkMode
				? "rgba(168, 205, 255, 0.3)"
				: "rgba(100, 116, 139, 0.3)"

			// Draw grid lines
			ctx.strokeStyle = gridColor
			ctx.lineWidth = 0.5

			// Horizontal grid lines
			for (let i = 0; i <= 4; i++) {
				const y = (height - 40) * (i / 4) + 20
				ctx.beginPath()
				ctx.moveTo(30, y)
				ctx.lineTo(width - 10, y)
				ctx.stroke()
			}

			// Draw axes
			ctx.strokeStyle = axisColor
			ctx.lineWidth = 1

			// Y-axis
			ctx.beginPath()
			ctx.moveTo(30, 20)
			ctx.lineTo(30, height - 20)
			ctx.stroke()

			// X-axis
			ctx.beginPath()
			ctx.moveTo(30, height - 20)
			ctx.lineTo(width - 10, height - 20)
			ctx.stroke()

			// Draw labels
			ctx.fillStyle = textColor
			ctx.font = "10px system-ui"

			// Y-axis label
			ctx.save()
			ctx.translate(10, height / 2)
			ctx.rotate(-Math.PI / 2)
			ctx.textAlign = "center"
			ctx.fillText("CAPACITY", 0, 0)
			ctx.restore()

			// X-axis label
			ctx.textAlign = "center"
			ctx.fillText("TIME", width / 2, height - 5)

			// Generate points for the line
			const points = []
			const graphWidth = width - 40
			const graphHeight = height - 60
			const numPoints = 100

			for (let i = 0; i < numPoints; i++) {
				const x = (i / (numPoints - 1)) * graphWidth
				const timeOffset = timeRef.current + i * 2
				const value = generateDemandPoint(timeOffset)
				points.push({ x: x + 30, y: 20 + graphHeight * (1 - value) })
			}

			// Draw filled area under the line
			ctx.fillStyle = "rgba(161, 188, 209, 0.15)"
			ctx.beginPath()
			ctx.moveTo(points[0].x, height - 20)
			points.forEach(p => ctx.lineTo(p.x, p.y))
			ctx.lineTo(points[points.length - 1].x, height - 20)
			ctx.closePath()
			ctx.fill()

			// Draw the main line (representing both demand and capacity)
			ctx.strokeStyle = "#A1BCD1"
			ctx.lineWidth = 2
			ctx.beginPath()
			points.forEach((p, i) => {
				if (i === 0) ctx.moveTo(p.x, p.y)
				else ctx.lineTo(p.x, p.y)
			})
			ctx.stroke()

			// Draw a green dot following the line (showing real-time capacity matching)
			const dotIndex = Math.floor(numPoints * 0.7) // Position the dot at 70% along the line
			const dotPoint = points[dotIndex]

			// Glow effect for the dot
			ctx.shadowColor = "rgba(34, 197, 94, 0.8)"
			ctx.shadowBlur = 8
			ctx.fillStyle = "rgba(34, 197, 94, 1)"
			ctx.beginPath()
			ctx.arc(dotPoint.x, dotPoint.y, 5, 0, Math.PI * 2)
			ctx.fill()
			ctx.shadowBlur = 0

			// Draw legend
			ctx.font = "11px system-ui"
			const legendY = 10

			// Demand legend (blue line)
			ctx.strokeStyle = "#A1BCD1"
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.moveTo(width - 120, legendY)
			ctx.lineTo(width - 90, legendY)
			ctx.stroke()
			ctx.fillStyle = isInDarkMode ? "#A1BCD1" : "rgba(100, 116, 139, 0.8)"
			ctx.textAlign = "left"
			ctx.fillText("Demand", width - 85, legendY + 3)

			// Capacity legend (green dot)
			ctx.fillStyle = "rgba(34, 197, 94, 1)"
			ctx.beginPath()
			ctx.arc(width - 105, legendY + 18, 3, 0, Math.PI * 2)
			ctx.fill()
			ctx.fillStyle = "rgba(34, 197, 94, 0.8)"
			ctx.fillText("Capacity", width - 85, legendY + 21)

			// Add "Zero Waste" indicator
			ctx.fillStyle = "rgba(34, 197, 94, 0.8)"
			ctx.font = "9px system-ui"
			ctx.textAlign = "center"
			ctx.fillText("ZERO WASTE", width / 2, height - 25)

			animationRef.current = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
			window.removeEventListener("resize", resizeCanvas)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="w-full h-full"
		/>
	)
}
