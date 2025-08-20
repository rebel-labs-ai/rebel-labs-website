"use client"

import { useEffect, useRef, useState } from "react"

export function RealTimeOptimization() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const animationRef = useRef<number>(0)
	const timeRef = useRef(0)
	const [performance, setPerformance] = useState(91.4)
	const [insight, setInsight] = useState("")
	
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		
		const ctx = canvas.getContext("2d")
		if (!ctx) return
		
		// Function to check if we're in dark mode
		const isDarkMode = () => {
			return document.documentElement.getAttribute('data-theme') === 'dark'
		}
		
		// Set canvas size
		const resizeCanvas = () => {
			const rect = canvas.getBoundingClientRect()
			canvas.width = rect.width * window.devicePixelRatio
			canvas.height = rect.height * window.devicePixelRatio
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
		}
		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)
		
		// Animation states
		let actionProgress = 0
		let outcomeProgress = 0
		let feedbackProgress = 0
		let currentPhase = "action" // "action", "outcome", "feedback", "pause"
		let pauseCounter = 0
		let cycleCount = 0
		
		const animate = () => {
			const width = canvas.width / window.devicePixelRatio
			const height = canvas.height / window.devicePixelRatio
			
			// Clear canvas
			ctx.clearRect(0, 0, width, height)
			
			// Get theme-aware colors
			const isInDarkMode = isDarkMode()
			const textColor = isInDarkMode ? "rgba(168, 205, 255, 0.8)" : "rgba(100, 116, 139, 0.9)"
			const nodeColor = isInDarkMode ? "#A1BCD1" : "#8AACCC"
			const pathColor = isInDarkMode ? "rgba(168, 205, 255, 0.3)" : "rgba(100, 116, 139, 0.3)"
			const glowColor = isInDarkMode ? "rgba(168, 205, 255, 0.6)" : "rgba(161, 188, 209, 0.6)"
			
			// Calculate positions
			const centerX = width / 2
			const centerY = height / 2 - 10
			const radius = Math.min(width, height) * 0.25
			
			// Node positions in triangle formation
			const workforceX = centerX
			const workforceY = centerY - radius * 0.6
			
			const actionX = centerX - radius
			const actionY = centerY + radius * 0.5
			
			const outcomeX = centerX + radius
			const outcomeY = centerY + radius * 0.5
			
			// Draw paths (connections)
			ctx.strokeStyle = pathColor
			ctx.lineWidth = 2
			ctx.setLineDash([5, 5])
			
			// Workforce to Action path
			ctx.beginPath()
			ctx.moveTo(workforceX, workforceY + 20)
			ctx.lineTo(actionX, actionY - 20)
			ctx.stroke()
			
			// Action to Outcome path
			ctx.beginPath()
			ctx.moveTo(actionX + 20, actionY)
			ctx.lineTo(outcomeX - 20, outcomeY)
			ctx.stroke()
			
			// Outcome to Workforce path (feedback)
			ctx.beginPath()
			ctx.moveTo(outcomeX, outcomeY - 20)
			ctx.lineTo(workforceX + 20, workforceY + 20)
			ctx.stroke()
			
			ctx.setLineDash([])
			
			// Draw animated pulse along paths
			if (currentPhase === "action" && actionProgress > 0) {
				const pulseX = workforceX + (actionX - workforceX) * actionProgress
				const pulseY = (workforceY + 20) + (actionY - 20 - workforceY - 20) * actionProgress
				
				ctx.shadowColor = glowColor
				ctx.shadowBlur = 10
				ctx.fillStyle = "#22C55E"
				ctx.beginPath()
				ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2)
				ctx.fill()
				ctx.shadowBlur = 0
			}
			
			if (currentPhase === "outcome" && outcomeProgress > 0) {
				const pulseX = (actionX + 20) + (outcomeX - 20 - actionX - 20) * outcomeProgress
				const pulseY = actionY + (outcomeY - actionY) * outcomeProgress
				
				ctx.shadowColor = glowColor
				ctx.shadowBlur = 10
				ctx.fillStyle = "#22C55E"
				ctx.beginPath()
				ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2)
				ctx.fill()
				ctx.shadowBlur = 0
			}
			
			if (currentPhase === "feedback" && feedbackProgress > 0) {
				const pulseX = outcomeX + (workforceX + 20 - outcomeX) * feedbackProgress
				const pulseY = (outcomeY - 20) + (workforceY + 20 - outcomeY + 20) * feedbackProgress
				
				ctx.shadowColor = glowColor
				ctx.shadowBlur = 10
				ctx.fillStyle = "#22C55E"
				ctx.beginPath()
				ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2)
				ctx.fill()
				ctx.shadowBlur = 0
			}
			
			// Draw Workforce node (center top)
			ctx.fillStyle = nodeColor
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.arc(workforceX, workforceY, 25, 0, Math.PI * 2)
			ctx.stroke()
			ctx.fillStyle = isInDarkMode ? "rgba(161, 188, 209, 0.1)" : "rgba(161, 188, 209, 0.2)"
			ctx.fill()
			
			// Workforce icon (simplified robot/gear)
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 1.5
			ctx.beginPath()
			ctx.arc(workforceX, workforceY, 10, 0, Math.PI * 2)
			ctx.stroke()
			ctx.beginPath()
			ctx.moveTo(workforceX - 5, workforceY)
			ctx.lineTo(workforceX + 5, workforceY)
			ctx.moveTo(workforceX, workforceY - 5)
			ctx.lineTo(workforceX, workforceY + 5)
			ctx.stroke()
			
			// Draw Action node (bottom left)
			ctx.fillStyle = nodeColor
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.arc(actionX, actionY, 20, 0, Math.PI * 2)
			ctx.stroke()
			ctx.fillStyle = isInDarkMode ? "rgba(161, 188, 209, 0.1)" : "rgba(161, 188, 209, 0.2)"
			ctx.fill()
			
			// Action icon (arrow)
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 1.5
			ctx.beginPath()
			ctx.moveTo(actionX - 8, actionY)
			ctx.lineTo(actionX + 8, actionY)
			ctx.lineTo(actionX + 4, actionY - 4)
			ctx.moveTo(actionX + 8, actionY)
			ctx.lineTo(actionX + 4, actionY + 4)
			ctx.stroke()
			
			// Draw Outcome node (bottom right)
			ctx.fillStyle = nodeColor
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.arc(outcomeX, outcomeY, 20, 0, Math.PI * 2)
			ctx.stroke()
			ctx.fillStyle = isInDarkMode ? "rgba(161, 188, 209, 0.1)" : "rgba(161, 188, 209, 0.2)"
			ctx.fill()
			
			// Outcome icon (checkmark)
			ctx.strokeStyle = nodeColor
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.moveTo(outcomeX - 6, outcomeY)
			ctx.lineTo(outcomeX - 2, outcomeY + 4)
			ctx.lineTo(outcomeX + 6, outcomeY - 4)
			ctx.stroke()
			
			// Draw labels
			ctx.fillStyle = textColor
			ctx.font = "12px system-ui"
			ctx.textAlign = "center"
			
			ctx.fillText("Workforce", workforceX, workforceY - 35)
			ctx.fillText("Action", actionX, actionY + 35)
			ctx.fillText("Outcome", outcomeX, outcomeY + 35)
			
			// Draw performance metric in center
			ctx.font = "bold 16px system-ui"
			ctx.fillStyle = nodeColor
			ctx.textAlign = "center"
			ctx.fillText(`Performance: ${performance.toFixed(1)}%`, centerX, centerY + 10)
			
			// Show insight when feedback completes
			if (insight) {
				ctx.font = "11px system-ui"
				ctx.fillStyle = "#22C55E"
				ctx.textAlign = "center"
				const lines = insight.split('\n')
				lines.forEach((line, i) => {
					ctx.fillText(line, centerX, height - 25 + (i * 12))
				})
			}
			
			// Update animation phases
			const speed = 0.02
			
			if (currentPhase === "action") {
				actionProgress += speed
				if (actionProgress >= 1) {
					actionProgress = 0
					currentPhase = "outcome"
				}
			} else if (currentPhase === "outcome") {
				outcomeProgress += speed
				if (outcomeProgress >= 1) {
					outcomeProgress = 0
					currentPhase = "feedback"
				}
			} else if (currentPhase === "feedback") {
				feedbackProgress += speed
				if (feedbackProgress >= 1) {
					feedbackProgress = 0
					currentPhase = "pause"
					pauseCounter = 0
					cycleCount++
					
					// Update performance and show insight
					if (cycleCount % 3 === 0) {
						const newPerformance = Math.min(99.9, performance + 0.1)
						setPerformance(newPerformance)
						setInsight("Insight: Pattern 'B' is 3% more effective.\nAdopting as new standard.")
						setTimeout(() => setInsight(""), 3000)
					}
				}
			} else if (currentPhase === "pause") {
				pauseCounter++
				if (pauseCounter > 60) { // Pause for 1 second at 60fps
					currentPhase = "action"
				}
			}
			
			animationRef.current = requestAnimationFrame(animate)
		}
		
		animate()
		
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
			window.removeEventListener("resize", resizeCanvas)
		}
	}, [performance])
	
	return (
		<canvas
			ref={canvasRef}
			className="w-full h-full"
			style={{ width: "100%", height: "100%" }}
		/>
	)
}