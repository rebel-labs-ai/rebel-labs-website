"use client"

import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { GoogleAnalytics, GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager"
import { ClarityProvider } from "./clarity-provider"
import { analyticsConfig } from "@/lib/analytics/config"

export function AnalyticsManager() {
	const gaId = analyticsConfig.googleAnalytics.measurementId
	const gtmId = analyticsConfig.googleTagManager.containerId
	const clarityId = analyticsConfig.microsoftClarity.projectId

	useEffect(() => {
		const checkConsent = () => {
			const consentState = getCookie("cookie-consent-state")
			if (consentState) {
				try {
					const parsed = JSON.parse(consentState as string)
					console.log("📊 Analytics consent state:", {
						analytics: parsed.analytics,
						marketing: parsed.marketing,
					})
				} catch (e) {
					console.error("Failed to parse consent state", e)
				}
			}
		}

		checkConsent()

		const handleConsentChange = () => checkConsent()
		window.addEventListener("cookie-consent-granted", handleConsentChange)
		window.addEventListener("cookie-consent-declined", handleConsentChange)

		return () => {
			window.removeEventListener("cookie-consent-granted", handleConsentChange)
			window.removeEventListener("cookie-consent-declined", handleConsentChange)
		}
	}, [])

	return <ClarityProvider projectId={clarityId} enabled={!!clarityId} />
}

export function ConditionalAnalytics() {
	const gaId = analyticsConfig.googleAnalytics.measurementId
	const gtmId = analyticsConfig.googleTagManager.containerId

	const [hasConsent, setHasConsent] = useState(false)

	useEffect(() => {
		const checkConsent = () => {
			const consentState = getCookie("cookie-consent-state")
			if (consentState) {
				try {
					const parsed = JSON.parse(consentState as string)
					setHasConsent(parsed.analytics || parsed.marketing)
				} catch (e) {
					console.error("Failed to parse consent state", e)
				}
			}
		}

		checkConsent()

		const handleConsentGranted = () => {
			checkConsent()
			// Removed window.location.reload() to prevent layout issues
			// Analytics will initialize on next navigation
		}

		window.addEventListener("cookie-consent-granted", handleConsentGranted)
		return () => {
			window.removeEventListener("cookie-consent-granted", handleConsentGranted)
		}
	}, [])

	if (!hasConsent) return null

	return (
		<>
			{gaId && <GoogleAnalytics gaId={gaId} />}
			{gtmId && <GoogleTagManager gtmId={gtmId} />}
		</>
	)
}

export function GTMNoScript() {
	const gtmId = analyticsConfig.googleTagManager.containerId
	if (!gtmId) return null
	return <GoogleTagManagerNoscript gtmId={gtmId} />
}