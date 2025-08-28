"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function CareersForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		await new Promise(resolve => setTimeout(resolve, 2000))

		setIsSubmitting(false)
		alert("Thank you for your application! We'll be in touch soon.")

		const form = e.currentTarget
		form.reset()
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					name="name"
					type="text"
					placeholder="John Doe"
					required
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="john@example.com"
					required
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="phone">Phone Number</Label>
				<Input
					id="phone"
					name="phone"
					type="tel"
					placeholder="+1 (555) 000-0000"
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="position">Position of Interest</Label>
				<Input
					id="position"
					name="position"
					type="text"
					placeholder="e.g., AI Engineer, Product Manager"
					required
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="linkedin">LinkedIn Profile</Label>
				<Input
					id="linkedin"
					name="linkedin"
					type="url"
					placeholder="https://linkedin.com/in/yourprofile"
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="portfolio">Portfolio/Website</Label>
				<Input
					id="portfolio"
					name="portfolio"
					type="url"
					placeholder="https://yourportfolio.com"
					disabled={isSubmitting}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="message">Tell us about yourself</Label>
				<Textarea
					id="message"
					name="message"
					placeholder="Share your experience, what interests you about Novosapien, and why you'd be a great fit..."
					className="min-h-[150px]"
					required
					disabled={isSubmitting}
				/>
			</div>

			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Submit Application"}
			</Button>
		</form>
	)
}
