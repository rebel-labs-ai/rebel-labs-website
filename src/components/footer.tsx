import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import {
	footerSections,
	legalLinks,
	footerTagline,
} from "@/config/navigation.config"

export function Footer() {
	return (
		<footer className="bg-card/50 border-t border-accent/40">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
				{/* Mobile: simplified brand and tagline */}
				<div className="md:hidden mb-6">
					<div className="flex items-center space-x-2 mb-3">
						<Image
							src={siteConfig.logo.path}
							alt={siteConfig.logo.alt}
							width={32}
							height={32}
							className="w-8 h-8"
						/>
						<span className="text-xl font-reddit-sans lowercase font-medium">
							<span className="text-accent">
								{siteConfig.nameStyled.prefix}
							</span>
							<span className="text-foreground">
								{siteConfig.nameStyled.suffix}
							</span>
						</span>
					</div>
					<p className="text-sm text-muted-foreground">
						{footerTagline.mobile}
					</p>
				</div>

				{/* Desktop & tablet: full footer columns */}
				<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="sm:col-span-2 md:col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<Image
								src={siteConfig.logo.path}
								alt={siteConfig.logo.alt}
								width={32}
								height={32}
								className="w-8 h-8"
							/>
							<span className="text-xl font-reddit-sans lowercase font-medium">
								<span className="text-accent">
									{siteConfig.nameStyled.prefix}
								</span>
								<span className="text-foreground">
									{siteConfig.nameStyled.suffix}
								</span>
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							{footerTagline.desktop}
						</p>
					</div>

					{/* Dynamic footer sections */}
					{footerSections.map(section => (
						<div key={section.title}>
							<h3 className="font-semibold text-foreground mb-4">
								{section.title}
							</h3>
							<ul className="space-y-2">
								{section.links.map(link =>
									link.external ? (
										<li key={link.href}>
											<a
												href={
													link.href === "/contact"
														? siteConfig.bookingUrl
														: link.href
												}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-muted-foreground hover:text-foreground transition-colors"
											>
												{link.label}
											</a>
										</li>
									) : (
										<li key={link.href}>
											<Link
												href={link.href}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors"
											>
												{link.label}
											</Link>
										</li>
									)
								)}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom section */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
						<p className="text-sm text-muted-foreground text-center sm:text-left">
							{siteConfig.copyright}
						</p>
						<div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
							{legalLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
