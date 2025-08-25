import Image from "next/image"

export function Footer() {
	return (
		<footer className="bg-card/50 border-t border-accent/40">
			<div className="max-w-6xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="md:col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<Image
								src="/logo.svg"
								alt="Novosapien Logo"
								width={32}
								height={32}
								className="w-8 h-8"
							/>
							<span className="text-xl font-reddit-sans lowercase font-medium">
								<span className="text-accent">novo</span>
								<span className="text-foreground">sapien</span>
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Building the future of work with intelligent Digital Workforces
							that deliver measurable business outcomes.
						</p>
					</div>

					{/* Solutions */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Solutions</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/workforces/lead"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Lead Workforce
								</a>
							</li>
							<li>
								<a
									href="/workforces/content"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Content Workforce
								</a>
							</li>
							<li>
								<a
									href="/workforces/custom"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Custom Solutions
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/about"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="/mission"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Mission
								</a>
							</li>
							<li>
								<a
									href="/careers"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/blog"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-muted-foreground">
							© 2024 NovoSapien. All rights reserved.
						</p>
						<div className="flex space-x-6">
							<a
								href="/privacy"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="/terms"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="/cookies"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
