import Image from "next/image"
import Link from "next/link"

export function Footer() {
	return (
		<footer className="bg-card/50 border-t border-accent/40">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
				{/* Mobile: simplified brand and tagline */}
				<div className="md:hidden mb-6">
					<div className="flex items-center space-x-2 mb-3">
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
						Building the Future. Building digital workforces.
					</p>
				</div>

				{/* Desktop & tablet: full footer columns */}
				<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="sm:col-span-2 md:col-span-1">
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
							Building the Digital Workforce to power the future of work.
						</p>
					</div>

					{/* Solutions */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Solutions</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/workforces/inbound-sales"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Inbound Sales
								</Link>
							</li>
							<li>
								<Link
									href="/workforces/content-creation"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Content Creation
								</Link>
							</li>
							<li>
								<Link
									href="/workforces/lab"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									The Lab
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/mission"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Mission
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<a
									href="https://cal.com/george-westbrook-novosapien/30min"
									target="_blank"
									rel="noopener noreferrer"
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
								<Link
									href="/blog"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
						<p className="text-sm text-muted-foreground text-center sm:text-left">
							© 2024 NovoSapien. All rights reserved.
						</p>
						<div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
							<Link
								href="/privacy"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								href="/cookies"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
