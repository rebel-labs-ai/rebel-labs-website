"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isMobileWorkforceOpen, setIsMobileWorkforceOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

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
						<Link href="/contact">
							<Button
								variant="ghost"
								className={getButtonClassName("/contact")}
							>
								Contact
							</Button>
						</Link>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden relative">
					{/* Mobile Header Bar */}
					<div className="flex items-center justify-between backdrop-blur-sm rounded-lg p-3 border border-accent bg-background/80 dark:bg-accent/30">
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
							className="p-2 rounded-md hover:bg-accent/20 transition-colors text-foreground"
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6 text-foreground" />
							) : (
								<Menu className="h-6 w-6 text-foreground" />
							)}
						</button>
					</div>

					{/* Mobile Menu Dropdown */}
					{isMobileMenuOpen && (
						<div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md rounded-lg border border-accent bg-background/95 dark:bg-background/75 z-50 shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto">
							<div className="p-3 space-y-1">
								<Link
									href="/"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-3 py-2 rounded-md transition-colors text-sm ${
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
										className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm ${
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
										<div className="mt-1 ml-4 space-y-1">
											<Link
												href="/workforces/lead"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-3 py-2 rounded-md hover:bg-accent/10 transition-colors text-sm"
											>
												Inbound Sales
											</Link>
											<Link
												href="/workforces/content"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-3 py-2 rounded-md hover:bg-accent/10 transition-colors text-sm"
											>
												Content Creation
											</Link>
											<Link
												href="/workforces/lab"
												onClick={() => setIsMobileMenuOpen(false)}
												className="block px-3 py-2 rounded-md hover:bg-accent/10 transition-colors text-sm"
											>
												The Lab
											</Link>
										</div>
									)}
								</div>

								<Link
									href="/mission"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-3 py-2 rounded-md transition-colors text-sm ${
										isActive("/mission")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Mission
								</Link>

								{/* Blog */}
								<Link
									href="/blog"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-3 py-2 rounded-md transition-colors text-sm ${
										isActive("/blog")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Blog
								</Link>

								{/* Careers */}
								<Link
									href="/careers"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-3 py-2 rounded-md transition-colors text-sm ${
										isActive("/careers")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Careers
								</Link>

								{/* Contact */}
								<Link
									href="/contact"
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block px-3 py-2 rounded-md transition-colors text-sm ${
										isActive("/contact")
											? "bg-accent/20 text-foreground font-medium"
											: "hover:bg-accent/10"
									}`}
								>
									Contact
								</Link>

								{/* Divider */}
								<div className="h-px bg-border my-2"></div>

								{/* Theme Toggle */}
								{mounted && (
									<button
										onClick={() =>
											setTheme(theme === "dark" ? "light" : "dark")
										}
										className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent/10 transition-colors text-sm"
									>
										<span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
										{theme === "dark" ? (
											<Sun className="h-4 w-4" />
										) : (
											<Moon className="h-4 w-4" />
										)}
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
