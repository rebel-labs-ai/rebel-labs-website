"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export function AnimatedHero() {
	const [showIntro, setShowIntro] = useState(false)
	const [showSubtext, setShowSubtext] = useState(false)

	useEffect(() => {
		setTimeout(() => setShowIntro(true), 100)
		setTimeout(() => setShowSubtext(true), 800)
	}, [])

	return (
		<div className="relative overflow-hidden rounded-3xl border border-accent/50 bg-card/80 p-12 backdrop-blur-lg shadow-[0_0_50px_rgba(var(--accent),0.1)]">
			{/* Animated gradient border effect */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-accent via-accent-teal to-accent bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]" />
				<div className="absolute inset-0 rounded-3xl bg-card/95" />
			</div>

			<div className="relative z-10 text-center">
				<div className="mb-6 flex justify-center">
					<Sparkles className="h-12 w-12 text-accent animate-pulse" />
				</div>
				<h1
					className={`text-foreground text-5xl md:text-7xl font-light tracking-tight transition-all duration-1000 ${
						showIntro ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
					}`}
				>
					The Future of Productive Work is Not Another, Better Tool.
				</h1>
				<p
					className={`text-muted-foreground text-xl mt-8 leading-relaxed transition-all duration-1000 delay-300 ${
						showSubtext
							? "translate-y-0 opacity-100"
							: "translate-y-4 opacity-0"
					}`}
				>
					It is a new means of production, where autonomous workforces deliver
					outcomes, not just assist with tasks.
				</p>
			</div>
		</div>
	)
}
