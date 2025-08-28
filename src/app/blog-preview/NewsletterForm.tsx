"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsletterForm() {
	return (
		<Card className="bg-gradient-to-r from-accent/10 to-accent/20 border border-accent/30 shadow-xl p-8 mt-16">
			<div className="text-center max-w-2xl mx-auto">
				<h2 className="text-2xl font-bold text-foreground mb-4">
					Stay Updated
				</h2>
				<p className="text-muted-foreground mb-6">
					Get the latest insights on AI workforces and automation delivered to
					your inbox.
				</p>
				<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
					<input
						type="email"
						placeholder="Enter your email"
						className="flex-1 px-4 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
					/>
					<Button className="bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30">
						Subscribe
					</Button>
				</div>
			</div>
		</Card>
	)
}
