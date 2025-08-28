"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, User, Mail, Phone, FileText } from "lucide-react"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export function ApplicationForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		xProfile: "",
		github: "",
		linkedin: "",
		message: "",
	})
	const [cvFileName, setCvFileName] = useState("")

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setCvFileName(file.name)
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log("Form submitted:", formData, "CV:", cvFileName)
	}

	return (
		<Card className="bg-card-background border border-accent/20 shadow-xl p-8">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Name Field - Required */}
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-foreground mb-2"
					>
						Name <span className="text-red-500">*</span>
					</label>
					<div className="relative">
						<User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
						<input
							type="text"
							id="name"
							name="name"
							required
							value={formData.name}
							onChange={handleInputChange}
							className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
							placeholder="Your full name"
						/>
					</div>
				</div>

				{/* Email Field */}
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-foreground mb-2"
					>
						Email
					</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
							placeholder="your@email.com"
						/>
					</div>
				</div>

				{/* Phone Field */}
				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-foreground mb-2"
					>
						Phone
					</label>
					<div className="relative">
						<Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
							placeholder="+1 (555) 123-4567"
						/>
					</div>
				</div>

				{/* Social Profiles */}
				<div className="space-y-4">
					<h3 className="text-sm font-medium text-foreground">
						Social Profiles
					</h3>

					{/* X (Twitter) Profile */}
					<div>
						<label
							htmlFor="xProfile"
							className="block text-sm font-medium text-muted-foreground mb-2"
						>
							X (Twitter) Profile
						</label>
						<div className="relative">
							<FaXTwitter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
							<input
								type="url"
								id="xProfile"
								name="xProfile"
								value={formData.xProfile}
								onChange={handleInputChange}
								className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
								placeholder="https://x.com/yourhandle"
							/>
						</div>
					</div>

					{/* GitHub Profile */}
					<div>
						<label
							htmlFor="github"
							className="block text-sm font-medium text-muted-foreground mb-2"
						>
							GitHub Profile
						</label>
						<div className="relative">
							<FaGithub className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
							<input
								type="url"
								id="github"
								name="github"
								value={formData.github}
								onChange={handleInputChange}
								className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
								placeholder="https://github.com/yourusername"
							/>
						</div>
					</div>

					{/* LinkedIn Profile */}
					<div>
						<label
							htmlFor="linkedin"
							className="block text-sm font-medium text-muted-foreground mb-2"
						>
							LinkedIn Profile
						</label>
						<div className="relative">
							<FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
							<input
								type="url"
								id="linkedin"
								name="linkedin"
								value={formData.linkedin}
								onChange={handleInputChange}
								className="w-full pl-10 pr-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground"
								placeholder="https://linkedin.com/in/yourprofile"
							/>
						</div>
					</div>
				</div>

				{/* CV Upload */}
				<div>
					<label
						htmlFor="cv"
						className="block text-sm font-medium text-foreground mb-2"
					>
						Upload CV/Resume
					</label>
					<div className="relative">
						<input
							type="file"
							id="cv"
							accept=".pdf,.doc,.docx"
							onChange={handleFileChange}
							className="hidden"
						/>
						<label
							htmlFor="cv"
							className="flex items-center justify-center w-full px-4 py-3 bg-background border-2 border-dashed border-accent/30 rounded-lg cursor-pointer hover:border-accent transition-colors"
						>
							<Upload className="w-5 h-5 mr-2 text-muted-foreground" />
							<span className="text-muted-foreground">
								{cvFileName || "Choose file or drag and drop"}
							</span>
						</label>
						{cvFileName && (
							<div className="mt-2 flex items-center text-sm text-accent">
								<FileText className="w-4 h-4 mr-1" />
								{cvFileName}
							</div>
						)}
					</div>
					<p className="mt-1 text-xs text-muted-foreground">
						PDF, DOC, or DOCX up to 10MB
					</p>
				</div>

				{/* Message Field - Required */}
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-foreground mb-2"
					>
						Tell us about yourself <span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={6}
						value={formData.message}
						onChange={handleInputChange}
						className="w-full px-3 py-2 bg-background border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-muted-foreground resize-none"
						placeholder="Share your experience, skills, and why you're interested in joining Novosapien..."
					/>
					<p className="mt-1 text-xs text-muted-foreground">
						Minimum 50 characters required
					</p>
				</div>

				{/* Submit Button */}
				<div className="pt-4">
					<Button
						type="submit"
						className="w-full bg-accent dark:bg-accent/60 text-white dark:text-white dark:border border-foreground dark:border-accent shadow-md hover:shadow-lg transition-all duration-200 hover:bg-accent/60 hover:dark:bg-accent/30 text-base px-6 py-3"
					>
						Submit Application
					</Button>
				</div>
			</form>
		</Card>
	)
}
