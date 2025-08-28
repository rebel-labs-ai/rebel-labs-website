import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { ApplicationForm } from "@/components/application-form"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
	Brain,
	Users,
	Rocket,
	Globe,
	Heart,
	MapPin,
	DollarSign,
	CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
	title: "Careers - Join the Future of Work",
	description:
		"Join Novosapien and help shape the future of AI-powered workforces. Explore career opportunities in automation, AI, and digital transformation. Remote-first company with competitive benefits.",
	keywords:
		"careers, jobs, AI, automation, digital transformation, remote work, software engineering, machine learning",
}

// Job positions data (server-side, SEO-friendly)
const jobPositions = [
	{
		id: 1,
		title: "Senior AI Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		salary: "$120,000 - $180,000",
		description:
			"Lead the development of our autonomous digital workforce platform. Design and implement AI models for task automation and decision-making.",
		requirements: [
			"5+ years experience in machine learning and AI",
			"Proficiency in Python, TensorFlow/PyTorch",
			"Experience with MLOps and model deployment",
			"Strong understanding of NLP and computer vision",
		],
		benefits: [
			"Stock options",
			"Health insurance",
			"Remote work",
			"Learning budget",
		],
	},
	{
		id: 2,
		title: "Full Stack Developer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		salary: "$90,000 - $140,000",
		description:
			"Build and maintain our web platform that enables businesses to deploy and manage their digital workforces seamlessly.",
		requirements: [
			"3+ years experience in full-stack development",
			"Proficiency in React, Node.js, TypeScript",
			"Experience with cloud platforms (AWS/Azure)",
			"Knowledge of database design and optimization",
		],
		benefits: [
			"Stock options",
			"Health insurance",
			"Remote work",
			"Flexible hours",
		],
	},
	{
		id: 3,
		title: "Product Manager",
		department: "Product",
		location: "Remote",
		type: "Full-time",
		salary: "$100,000 - $150,000",
		description:
			"Drive product strategy and roadmap for our AI workforce solutions. Work closely with engineering and design teams to deliver exceptional user experiences.",
		requirements: [
			"4+ years experience in product management",
			"Background in B2B SaaS products",
			"Experience with AI/automation products preferred",
			"Strong analytical and communication skills",
		],
		benefits: [
			"Stock options",
			"Health insurance",
			"Remote work",
			"Product development budget",
		],
	},
	{
		id: 4,
		title: "DevOps Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		salary: "$95,000 - $145,000",
		description:
			"Build and maintain scalable infrastructure for our AI workforce platform. Ensure high availability and performance of our distributed systems.",
		requirements: [
			"3+ years experience in DevOps/SRE",
			"Proficiency with Kubernetes, Docker, Terraform",
			"Experience with CI/CD pipelines",
			"Knowledge of monitoring and observability tools",
		],
		benefits: [
			"Stock options",
			"Health insurance",
			"Remote work",
			"Tech allowance",
		],
	},
]

// Company culture values
const cultureValues = [
	{
		icon: Brain,
		title: "Innovation First",
		description:
			"We encourage creative thinking and bold ideas that push the boundaries of what's possible with AI.",
	},
	{
		icon: Users,
		title: "Collaborative Spirit",
		description:
			"We believe the best solutions come from diverse perspectives working together towards common goals.",
	},
	{
		icon: Rocket,
		title: "Growth Mindset",
		description:
			"We invest in our team's continuous learning and provide opportunities for career advancement.",
	},
	{
		icon: Globe,
		title: "Remote-First",
		description:
			"We&apos;re built for remote work from day one, with flexible schedules and global talent.",
	},
	{
		icon: Heart,
		title: "Work-Life Balance",
		description:
			"We value sustainable productivity and support our team's well-being and personal growth.",
	},
]

// Company benefits
const benefits = [
	"Competitive salary and equity packages",
	"Comprehensive health, dental, and vision insurance",
	"Flexible PTO and sabbatical options",
	"$3,000 annual learning and development budget",
	"Top-tier equipment and home office setup",
	"Regular team retreats and virtual social events",
	"401(k) with company matching",
	"Mental health and wellness support",
]

export default function CareersPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Theme Toggle */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* Main Content */}
			<main className="pt-32 pb-24 px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-geist-sans mb-6">
							Join Our Team
						</h1>
						<p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-8">
							We&apos;re building the future of work with autonomous digital
							workforces. Join us in creating AI solutions that transform how
							businesses operate and scale.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Globe className="w-4 h-4" />
								<span>Remote-First Company</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4" />
								<span>25+ Team Members</span>
							</div>
							<div className="flex items-center gap-2">
								<Rocket className="w-4 h-4" />
								<span>Series A Startup</span>
							</div>
						</div>
					</div>

					{/* Open Positions */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight font-geist-sans mb-4">
								Open Positions
							</h2>
							<p className="text-muted-foreground text-lg">
								We&apos;re actively hiring talented individuals across multiple
								departments
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							{jobPositions.map(position => (
								<Card
									key={position.id}
									className="bg-card-background border border-accent/20 p-6 hover:shadow-lg transition-shadow"
								>
									<div className="flex justify-between items-start mb-4">
										<div>
											<h3 className="text-foreground text-xl font-medium mb-2">
												{position.title}
											</h3>
											<div className="flex flex-wrap gap-2 mb-3">
												<Badge
													variant="secondary"
													className="bg-accent/10 text-accent"
												>
													{position.department}
												</Badge>
												<Badge variant="outline">{position.type}</Badge>
											</div>
										</div>
									</div>

									<div className="space-y-3 mb-4">
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<MapPin className="w-4 h-4" />
											<span>{position.location}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<DollarSign className="w-4 h-4" />
											<span>{position.salary}</span>
										</div>
									</div>

									<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
										{position.description}
									</p>

									<div className="mb-4">
										<h4 className="text-foreground font-medium text-sm mb-2">
											Key Requirements:
										</h4>
										<ul className="space-y-1">
											{position.requirements.slice(0, 2).map((req, index) => (
												<li
													key={index}
													className="flex items-center gap-2 text-sm text-muted-foreground"
												>
													<CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
													<span>{req}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
										{position.benefits.slice(0, 3).map((benefit, index) => (
											<Badge key={index} variant="outline" className="text-xs">
												{benefit}
											</Badge>
										))}
									</div>
								</Card>
							))}
						</div>
					</section>

					{/* Company Culture */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight font-geist-sans mb-4">
								Our Culture
							</h2>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								We&apos;ve built a culture that values innovation,
								collaboration, and personal growth
							</p>
						</div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{cultureValues.map((value, index) => (
								<div key={index} className="text-center">
									<div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
										<value.icon className="w-8 h-8 text-accent" />
									</div>
									<h3 className="text-foreground text-lg font-medium mb-3">
										{value.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Benefits & Perks */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight font-geist-sans mb-4">
								Benefits & Perks
							</h2>
							<p className="text-muted-foreground text-lg">
								We offer comprehensive benefits to support your career and
								well-being
							</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className="flex items-center gap-3 p-4 bg-card-background/50 rounded-lg"
								>
									<CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
									<span className="text-foreground">{benefit}</span>
								</div>
							))}
						</div>
					</section>

					{/* Application Form Section */}
					<section>
						<div className="text-center mb-12">
							<h2 className="text-foreground text-3xl md:text-4xl font-light tracking-tight font-geist-sans mb-4">
								Ready to Join Us?
							</h2>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								Don&apos;t see a perfect match? We&apos;re always interested in
								hearing from talented individuals who share our vision
							</p>
						</div>

						<div className="max-w-3xl mx-auto">
							<ApplicationForm />
						</div>
					</section>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
