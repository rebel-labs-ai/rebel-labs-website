/**
 * Navigation and footer link configuration.
 *
 * Single source of truth for all navigation structures across the site.
 * Update links here and both the navbar and footer will reflect the changes.
 */

export interface NavLink {
	label: string
	href: string
	external?: boolean
}

export interface NavDropdown {
	label: string
	/** Base path used for active-state detection (e.g. "/workforces") */
	basePath: string
	items: NavLink[]
}

export type NavItem = NavLink | NavDropdown

export function isDropdown(item: NavItem): item is NavDropdown {
	return "items" in item
}

/** Main navigation bar links (desktop + mobile) */
export const mainNavItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{
		label: "Workforces",
		basePath: "/workforces",
		items: [
			{ label: "Inbound Sales", href: "/workforces/inbound-sales" },
			{ label: "Content Creation", href: "/workforces/content-creation" },
			{ label: "The Lab", href: "/workforces/lab" },
		],
	},
	{ label: "Mission", href: "/mission" },
	{ label: "Blog", href: "/blog" },
	{ label: "Contact", href: "/contact" },
]

/** Additional links that appear only in the mobile menu */
export const mobileOnlyLinks: NavLink[] = [
	{ label: "Careers", href: "/careers" },
]

/** Footer column sections */
export interface FooterSection {
	title: string
	links: NavLink[]
}

export const footerSections: FooterSection[] = [
	{
		title: "Solutions",
		links: [
			{ label: "Inbound Sales", href: "/workforces/inbound-sales" },
			{ label: "Content Creation", href: "/workforces/content-creation" },
			{ label: "The Lab", href: "/workforces/lab" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "Mission", href: "/mission" },
			{ label: "Careers", href: "/careers" },
			{ label: "Contact", href: "/contact", external: true },
		],
	},
	{
		title: "Resources",
		links: [{ label: "Blog", href: "/blog" }],
	},
]

/** Legal links shown at the bottom of the footer */
export const legalLinks: NavLink[] = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms of Service", href: "/terms" },
	{ label: "Cookie Policy", href: "/cookies" },
]

/** Footer taglines */
export const footerTagline = {
	desktop: "Building the Digital Workforce to power the future of work.",
	mobile: "Building the Future. Building digital workforces.",
}
