"use client"

import { useScrollTracking, ScrollButton } from "./client-components"

interface MissionClientWrapperProps {
	children: React.ReactNode
}

export function MissionClientWrapper({ children }: MissionClientWrapperProps) {
	const { sectionsRef, scrollToSection } = useScrollTracking()

	// Clone children and add refs
	const childrenWithRefs = (
		<div className="relative">
			{/* Hero Section */}
			<section
				ref={el => {
					sectionsRef.current[0] = el
				}}
				className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-18"
			>
				{/* Content will be injected here */}
				<div id="hero-content" />
				<ScrollButton
					targetIndex={1}
					onScroll={scrollToSection}
					className="absolute bottom-12 flex animate-bounce flex-col items-center text-muted-foreground transition-colors hover:text-foreground"
				/>
			</section>

			{/* Main Content */}
			<div className="relative mx-auto max-w-7xl px-6 py-24">
				<div className="space-y-32">
					{/* Section 1: The Old World is Broken */}
					<section
						ref={el => {
							sectionsRef.current[1] = el
						}}
						className="scroll-mt-24"
						id="section-1"
					/>

					{/* Section 2: A New Coat of Paint */}
					<section
						ref={el => {
							sectionsRef.current[2] = el
						}}
						className="scroll-mt-24"
						id="section-2"
					/>

					{/* Section 3: The Burden of the Blank Canvas */}
					<section
						ref={el => {
							sectionsRef.current[3] = el
						}}
						className="scroll-mt-24"
						id="section-3"
					/>

					{/* Section 4: The Principle */}
					<section
						ref={el => {
							sectionsRef.current[4] = el
						}}
						className="scroll-mt-24 pt-12"
						id="section-4"
					/>

					{/* Section 5: The Promised Land */}
					<section
						ref={el => {
							sectionsRef.current[5] = el
						}}
						className="scroll-mt-24"
						id="section-5"
					/>
				</div>
			</div>

			{/* Children will be rendered and matched to sections */}
			{children}
		</div>
	)

	return childrenWithRefs
}
