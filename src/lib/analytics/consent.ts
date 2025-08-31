import { getCookie, setCookie } from "cookies-next"

export interface ConsentState {
	analytics: boolean
	marketing: boolean
	functional: boolean
	timestamp?: string
	version?: string
}

const CONSENT_COOKIE_NAME = "cookie-consent-state"
const CONSENT_VERSION = "1.0.0"

export const getConsentState = (): ConsentState | null => {
	try {
		const consent = getCookie(CONSENT_COOKIE_NAME)
		if (consent) {
			return JSON.parse(consent as string)
		}
	} catch (error) {
		console.error("Failed to parse consent state:", error)
	}
	return null
}

export const setConsentState = (state: Partial<ConsentState>) => {
	const currentState = getConsentState() || {
		analytics: false,
		marketing: false,
		functional: true,
	}

	const newState: ConsentState = {
		...currentState,
		...state,
		timestamp: new Date().toISOString(),
		version: CONSENT_VERSION,
	}

	setCookie(CONSENT_COOKIE_NAME, JSON.stringify(newState), {
		maxAge: 365 * 24 * 60 * 60,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
	})

	if (newState.analytics) {
		window.dispatchEvent(new Event("cookie-consent-granted"))
	} else {
		window.dispatchEvent(new Event("cookie-consent-declined"))
	}

	return newState
}

export const hasAnalyticsConsent = (): boolean => {
	const consent = getConsentState()
	return consent?.analytics === true
}

export const hasMarketingConsent = (): boolean => {
	const consent = getConsentState()
	return consent?.marketing === true
}

export const resetConsent = () => {
	setCookie(CONSENT_COOKIE_NAME, "", { maxAge: 0 })
	window.location.reload()
}