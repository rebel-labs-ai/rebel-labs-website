"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isMobileWorkforceOpen, setIsMobileWorkforceOpen] = useState(false)

	const isActive = (path: string) => pathname === path
	const isWorkforceActive = () => pathname?.startsWith("/workforces")

	const getButtonVariant = (path: string) => {
		if (path === "/workforces") {
			return isWorkforceActive() ? "outline" : "ghost"
		}
		return isActive(path) ? "outline" : "ghost"
	}

	const getButtonClassName = (path: string) => {
		const isCurrentlyActive =
			path === "/workforces" ? isWorkforceActive() : isActive(path)

		if (isCurrentlyActive) {
			return "rounded-md px-4 py-1.5 bg-white/70 dark:bg-accent/10 text-foreground dark:text-white border border-accent dark:border-accent/30 hover:bg-accent/30 dark:hover:bg-accent/20 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
		}
		return "rounded-md px-4 py-2 text-foreground dark:text-white hover:bg-white/50 dark:hover:bg-accent/10 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
	}

	return (
		<nav className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
				{/* Desktop Navigation - Hidden on mobile */}
				<div className="hidden md:flex items-center justify-center">
					{/* Navigation Links with Logo */}
					<div className="backdrop-blur-sm rounded-lg p-1 flex space-x-1 border border-accent bg-background/80 dark:bg-accent/30 items-center">
						<div className="flex items-center space-x-2 px-3">
							<Image
								src="/logo.svg"
								alt="Novosapien Logo"
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<span className="text-lg font-reddit-sans lowercase font-medium">
								<span className="text-accent">novo</span>
								<span className="text-foreground">sapien</span>
							</span>
						</div>
						<div className="w-px h-6 bg-border mx-2"></div>
						<Link href="/">
							<Button
								variant={getButtonVariant("/")}
								className={getButtonClassName("/")}
							>
								Home
							</Button>
						</Link>
						{/* Workforces Dropdown using CSS hover */}
						<div className="relative group">
							<Button
								variant={getButtonVariant("/workforces")}
								className={`${getButtonClassName("/workforces")} flex items-center gap-1`}
							>
								Workforces
								<ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
							</Button>
							{/* Invisible bridge to prevent gap issues */}
							<div className="absolute top-full left-0 right-0 h-2 invisible group-hover:visible" />
							{/* Dropdown Menu */}
							<div className="absolute top-full left-0 mt-1 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
								<div className="bg-background/95 backdrop-blur-sm border border-accent rounded-md shadow-lg overflow-hidden">
									<Link
										href="/workforces/lead"
										className="block px-4 py-2 text-sm text-foreground hover:bg-accent/20 transition-colors"
									>
										Inbound Sales
									</Link>
									<Link
										href="/workforces/content"
										className="block px-4 py-2 text-sm text-foreground hover:bg-accent/20 transition-colors"
									>
										Content Creation
									</Link>
									<Link
										href="/workforces/lab"
										className="block px-4 py-2 text-sm text-foreground hover:bg-accent/20 transition-colors"
									>
										The Lab
									</Link>
								</div>
							</div>
						</div>
						<Link href="/mission">
							<Button
								variant={getButtonVariant("/mission")}
								className={getButtonClassName("/mission")}
							>
								Mission
							</Button>
						</Link>
						<a
							href="https://cal.com/george-westbrook-novosapien/30min"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="ghost"
								className={getButtonClassName("/contact")}
							>
								Speak to us
							</Button>
						</a>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden">
					{/* Mobile Header Bar */}
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Image
								src="/logo.svg"
								alt="Novosapien Logo"
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<span className="text-lg font-reddit-sans lowercase font-medium">
								<span className="text-accent">novo</span>
								<span className="text-foreground">sapien</span>
							</span>
						</div>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 rounded-md hover:bg-accent/20 transition-colors"
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>

					{/* Mobile Menu Overlay */}
					{isMobileMenuOpen && (
						<div className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-sm z-50">
							<div className="px-4 py-6 space-y-4">
								<Link
									href="/"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-4 py-3 rounded-md transition-colors ${
										isActive("/")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Home
								</Link>

								{/* Workforces Dropdown */}
								<div>
									<button
										onClick={() =>
											setIsMobileWorkforceOpen(!isMobileWorkforceOpen)
										}
										className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-colors ${
											isWorkforceActive()
												? "bg-accent/20 text-foreground font-medium"
												: "hover:bg-accent/10"
										}`}
									>
										<span>Workforces</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												isMobileWorkforceOpen ? "rotate-180" : ""
											}`}
										/>
									</button>
									{isMobileWorkforceOpen && (
										<div className="mt-2 ml-4 space-y-2">
											<Link
												href="/workforces/lead"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
											>
												Inbound Sales
											</Link>
											<Link
												href="/workforces/content"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
											>
												Content Creation
											</Link>
											<Link
												href="/workforces/lab"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
											>
												The Lab
											</Link>
										</div>
									)}
								</div>

								<Link
									href="/mission"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-4 py-3 rounded-md transition-colors ${
										isActive("/mission")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Mission
								</Link>

								<a
									href="https://cal.com/george-westbrook-novosapien/30min"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block px-4 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors text-center"
								>
									Speak to us
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
