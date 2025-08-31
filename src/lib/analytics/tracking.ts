import { trackClarityEvent, setClarityCustomTag } from "@/components/analytics/clarity-provider"
import { hasAnalyticsConsent } from "./consent"

declare global {
	interface Window {
		gtag?: (...args: any[]) => void
		dataLayer?: any[]
	}
}

export const trackEvent = (
	eventName: string,
	parameters?: Record<string, any>
) => {
	if (!hasAnalyticsConsent()) return

	if (window.gtag) {
		window.gtag("event", eventName, parameters)
	}

	trackClarityEvent(eventName, parameters)

	if (window.dataLayer) {
		window.dataLayer.push({
			event: eventName,
			...parameters,
		})
	}

	console.log("📊 Event tracked:", eventName, parameters)
}

export const trackPageView = (url: string, title?: string) => {
	if (!hasAnalyticsConsent()) return

	if (window.gtag) {
		window.gtag("event", "page_view", {
			page_location: url,
			page_title: title,
		})
	}

	trackClarityEvent("page_view", { url, title })
}

export const trackCampaignLanding = (campaignData: {
	campaignName: string
	variant?: string
	source?: string
	medium?: string
}) => {
	if (!hasAnalyticsConsent()) return

	trackEvent("campaign_landing", campaignData)

	Object.entries(campaignData).forEach(([key, value]) => {
		if (value) {
			setClarityCustomTag(key, value)
		}
	})
}

export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
	trackEvent("form_submit", {
		form_name: formName,
		...formData,
	})
}

export const trackConversion = (conversionType: string, value?: number, currency?: string) => {
	trackEvent("conversion", {
		conversion_type: conversionType,
		value,
		currency: currency || "USD",
	})
}

export const trackEngagement = (action: string, category: string, label?: string, value?: number) => {
	trackEvent("engagement", {
		action,
		category,
		label,
		value,
	})
}