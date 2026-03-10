"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { siteConfig } from "@/config/site.config"
import {
	mainNavItems,
	mobileOnlyLinks,
	isDropdown,
	type NavLink,
	type NavDropdown,
} from "@/config/navigation.config"

export function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const isActive = (path: string) => pathname === path
	const isPathActive = (basePath: string) => pathname?.startsWith(basePath)

	const getButtonVariant = (item: NavLink | NavDropdown) => {
		if ("basePath" in item) {
			return isPathActive(item.basePath) ? "outline" : "ghost"
		}
		return isActive(item.href) ? "outline" : "ghost"
	}

	const getButtonClassName = (item: NavLink | NavDropdown) => {
		const isCurrentlyActive =
			"basePath" in item ? isPathActive(item.basePath) : isActive(item.href)

		if (isCurrentlyActive) {
			return "rounded-md px-4 py-1.5 bg-white/70 dark:bg-accent/10 text-foreground dark:text-white border border-accent dark:border-accent/30 hover:bg-accent/30 dark:hover:bg-accent/20 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
		}
		return "rounded-md px-4 py-2 text-foreground dark:text-white hover:bg-white/50 dark:hover:bg-accent/10 hover:text-foreground dark:hover:text-white hover:py-1.5 transition-all duration-200 font-medium"
	}

	const getMobileLinkClassName = (path: string) =>
		`block px-3 py-2 rounded-md transition-colors text-sm ${
			isActive(path)
				? "bg-accent/20 text-foreground font-medium"
				: "hover:bg-accent/10"
		}`

	/** The dropdown item (if any) for mobile */
	const mobileDropdown = mainNavItems.find(isDropdown) as
		| NavDropdown
		| undefined

	return (
		<nav className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
				{/* Desktop Navigation - Hidden on mobile */}
				<div className="hidden md:flex items-center justify-center">
					{/* Navigation Links with Logo */}
					<div className="backdrop-blur-sm rounded-lg p-1 flex space-x-1 border border-accent bg-background/80 dark:bg-accent/35 items-center">
						<Link
							href="/"
							className="flex items-center space-x-2 px-3 hover:opacity-80 transition-opacity"
						>
							<Image
								src={siteConfig.logo.path}
								alt={siteConfig.logo.alt}
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<span className="text-xl font-reddit-sans lowercase font-medium">
								<span className="text-accent">
									{siteConfig.nameStyled.prefix}
								</span>
								<span className="text-[#09142f] dark:text-[#09142f]/80-">
									{siteConfig.nameStyled.suffix}
								</span>
							</span>
						</Link>
						<div className="w-px h-6 bg-border mx-2"></div>

						{mainNavItems.map(item =>
							isDropdown(item) ? (
								<div key={item.label} className="relative group">
									<Button
										variant={getButtonVariant(item) as "outline" | "ghost"}
										className={`${getButtonClassName(item)} flex items-center gap-1`}
									>
										{item.label}
										<ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
									</Button>
									{/* Invisible bridge to prevent gap issues */}
									<div className="absolute top-full left-0 right-0 h-2 invisible group-hover:visible" />
									{/* Dropdown Menu */}
									<div className="absolute top-full left-0 mt-1 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
										<div className="bg-background/95 backdrop-blur-sm border border-accent rounded-md shadow-lg overflow-hidden">
											{item.items.map(subItem => (
												<Link
													key={subItem.href}
													href={subItem.href}
													className="block px-4 py-2 text-sm text-foreground hover:bg-accent/20 transition-colors"
												>
													{subItem.label}
												</Link>
											))}
										</div>
									</div>
								</div>
							) : (
								<Link key={item.href} href={item.href}>
									<Button
										variant={getButtonVariant(item) as "outline" | "ghost"}
										className={getButtonClassName(item)}
									>
										{item.label}
									</Button>
								</Link>
							)
						)}
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden relative">
					{/* Mobile Header Bar */}
					<div className="flex items-center justify-between backdrop-blur-sm rounded-lg p-3 border border-accent bg-background/80 dark:bg-accent/30">
						<Link
							href="/"
							className="flex items-center space-x-2"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Image
								src={siteConfig.logo.path}
								alt={siteConfig.logo.alt}
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<span className="text-xl font-reddit-sans lowercase font-medium">
								<span className="text-accent">
									{siteConfig.nameStyled.prefix}
								</span>
								<span className="text-[#09142f] dark:text-[#09142f]/80">
									{siteConfig.nameStyled.suffix}
								</span>
							</span>
						</Link>
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
								{/* Home link (first in list) */}
								<Link
									href="/"
									onClick={() => setIsMobileMenuOpen(false)}
									className={getMobileLinkClassName("/")}
								>
									Home
								</Link>

								{/* Dropdown section (Workforces) */}
								{mobileDropdown && (
									<div>
										<button
											onClick={() =>
												setIsMobileDropdownOpen(!isMobileDropdownOpen)
											}
											className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm ${
												isPathActive(mobileDropdown.basePath)
													? "bg-accent/20 text-foreground font-medium"
													: "hover:bg-accent/10"
											}`}
										>
											<span>{mobileDropdown.label}</span>
											<ChevronDown
												className={`h-4 w-4 transition-transform ${
													isMobileDropdownOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isMobileDropdownOpen && (
											<div className="mt-1 ml-4 space-y-1">
												{mobileDropdown.items.map(subItem => (
													<Link
														key={subItem.href}
														href={subItem.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block px-3 py-2 rounded-md hover:bg-accent/10 transition-colors text-sm"
													>
														{subItem.label}
													</Link>
												))}
											</div>
										)}
									</div>
								)}

								{/* Remaining main nav links (skip Home and dropdown) */}
								{mainNavItems
									.filter(
										item => !isDropdown(item) && (item as NavLink).href !== "/"
									)
									.map(item => {
										const link = item as NavLink
										return (
											<Link
												key={link.href}
												href={link.href}
												onClick={() => setIsMobileMenuOpen(false)}
												className={getMobileLinkClassName(link.href)}
											>
												{link.label}
											</Link>
										)
									})}

								{/* Mobile-only links */}
								{mobileOnlyLinks.map(link => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className={getMobileLinkClassName(link.href)}
									>
										{link.label}
									</Link>
								))}

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
