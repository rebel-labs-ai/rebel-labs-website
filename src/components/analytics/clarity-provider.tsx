"use client"

import { useEffect } from "react"
import { getCookie } from "cookies-next"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
	interface Window {
		clarity?: (action: string, ...args: unknown[]) => void
	}
}

interface ClarityProviderProps {
	projectId: string
	enabled?: boolean
}

export function ClarityProvider({
	projectId,
	enabled = true,
}: ClarityProviderProps) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const initClarity = () => {
			if (!enabled || !projectId) return

			const isDevelopment = process.env.NODE_ENV === "development"
			if (isDevelopment && !process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV) {
				console.log("📊 Clarity disabled in development")
				return
			}

			const consentState = getCookie("cookie-consent-state")
			if (consentState) {
				try {
					const parsed = JSON.parse(consentState as string)
					if (!parsed.analytics) {
						console.log("📊 Clarity disabled by cookie consent")
						return
					}
				} catch (e) {
					console.error("Failed to parse consent state", e)
					return
				}
			} else {
				console.log("📊 Waiting for cookie consent...")
				return
			}

			try {
				// Initialize Clarity using the traditional script injection method
				if (!window.clarity) {
					/* eslint-disable @typescript-eslint/no-explicit-any */
					;(function (
						c: any,
						l: any,
						a: any,
						r: any,
						i: any,
						t?: any,
						y?: any
					) {
						c[a] =
							c[a] ||
							function () {
								// eslint-disable-next-line prefer-rest-params
								;(c[a].q = c[a].q || []).push(arguments)
							}
						t = l.createElement(r)
						t.async = 1
						t.src = "https://www.clarity.ms/tag/" + i
						y = l.getElementsByTagName(r)[0]
						y.parentNode!.insertBefore(t, y)
					})(window, document, "clarity", "script", projectId)
					/* eslint-enable @typescript-eslint/no-explicit-any */
					console.log("📊 Microsoft Clarity initialized")
				}

				// Wait a bit for Clarity to be ready, then set custom tags
				setTimeout(() => {
					if (window.clarity && searchParams) {
						const campaign =
							searchParams.get("utm_campaign") || searchParams.get("campaign")
						const source =
							searchParams.get("utm_source") || searchParams.get("source")
						const medium =
							searchParams.get("utm_medium") || searchParams.get("medium")

						if (campaign) {
							window.clarity("set", "campaign", campaign)
						}
						if (source) {
							window.clarity("set", "source", source)
						}
						if (medium) {
							window.clarity("set", "medium", medium)
						}

						if (pathname && pathname.startsWith("/lp/")) {
							const landingPage = pathname.split("/lp/")[1]
							window.clarity("set", "landing_page", landingPage)
							window.clarity("event", "landing_page_view")
						}
					}
				}, 1000)
			} catch (error) {
				console.error("Failed to initialize Clarity:", error)
			}
		}

		initClarity()

		const handleConsentGranted = () => {
			console.log("📊 Cookie consent granted, initializing Clarity...")
			initClarity()
		}

		const handleConsentDeclined = () => {
			console.log("📊 Cookie consent declined, Clarity will not be initialized")
		}

		window.addEventListener("cookie-consent-granted", handleConsentGranted)
		window.addEventListener("cookie-consent-declined", handleConsentDeclined)

		return () => {
			window.removeEventListener("cookie-consent-granted", handleConsentGranted)
			window.removeEventListener(
				"cookie-consent-declined",
				handleConsentDeclined
			)
		}
	}, [projectId, enabled, pathname, searchParams])

	useEffect(() => {
		const consentState = getCookie("cookie-consent-state")
		if (consentState) {
			try {
				const parsed = JSON.parse(consentState as string)
				if (parsed.analytics && projectId && window.clarity) {
					window.clarity("event", "page_view")
				}
			} catch (e) {
				console.error("Failed to track page view", e)
			}
		}
	}, [pathname, projectId])

	return null
}

export const trackClarityEvent = (
	eventName: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	data?: Record<string, unknown>
) => {
	try {
		const consentState = getCookie("cookie-consent-state")
		if (consentState) {
			const parsed = JSON.parse(consentState as string)
			if (parsed.analytics && window.clarity) {
				window.clarity("event", eventName)
			}
		}
	} catch (error) {
		console.error("Failed to track Clarity event:", error)
	}
}

export const identifyClarityUser = (
	userId: string,
	sessionId?: string,
	pageId?: string,
	friendlyName?: string
) => {
	try {
		const consentState = getCookie("cookie-consent-state")
		if (consentState) {
			const parsed = JSON.parse(consentState as string)
			if (parsed.analytics && window.clarity) {
				window.clarity("identify", userId, sessionId, pageId, friendlyName)
			}
		}
	} catch (error) {
		console.error("Failed to identify Clarity user:", error)
	}
}

export const setClarityCustomTag = (key: string, value: string | number) => {
	try {
		const consentState = getCookie("cookie-consent-state")
		if (consentState) {
			const parsed = JSON.parse(consentState as string)
			if (parsed.analytics && window.clarity) {
				window.clarity("set", key, value)
			}
		}
	} catch (error) {
		console.error("Failed to set Clarity custom tag:", error)
	}
}
