import Image from "next/image"
import { FailureCardsClient } from "./src/app/workforces/inbound-sales/lead-page-client"

export function FailureCardsSection() {
	return (
		<>
			{/* Funnel Diagram with Annotations */}
			<div className="max-w-7xl mx-auto">
				{/* Mobile Layout - Just the cards, no funnel */}
				<div className="block lg:hidden">
					<FailureCardsClient />
				</div>

				{/* Desktop Layout - 3 column grid with funnel in center */}
				<div className="hidden lg:block">
					<div className="relative">
						{/* Cards Container - Using FailureCardsClient which returns the proper layout */}
						<div className="grid grid-cols-3 gap-6 items-center">
							<FailureCardsClient />
						</div>

						{/* Funnel Image - Absolute positioned in center */}
						<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
							<div className="relative max-w-xs w-full">
								{/* Light mode funnel */}
								<Image
									src="/workforces/leads/funnel.svg"
									alt="Inbound sales funnel diagram showing lead flow from top to qualified meetings"
									width={300}
									height={400}
									className="w-full h-auto dark:hidden"
									priority
								/>
								{/* Dark mode funnel */}
								<Image
									src="/workforces/leads/funnel-dark.svg"
									alt="Inbound sales funnel diagram showing lead flow from top to qualified meetings"
									width={300}
									height={400}
									className="w-full h-auto hidden dark:block"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
