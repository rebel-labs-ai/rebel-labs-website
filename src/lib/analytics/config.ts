import { siteConfig } from "@/config/site.config"

export const analyticsConfig = {
	googleAnalytics: {
		measurementId: siteConfig.analytics.gaId,
		enabled: !!siteConfig.analytics.gaId,
	},
	googleTagManager: {
		containerId: siteConfig.analytics.gtmId,
		enabled: !!siteConfig.analytics.gtmId,
	},
	microsoftClarity: {
		projectId: siteConfig.analytics.clarityId,
		enabled: !!siteConfig.analytics.clarityId,
	},
	general: {
		requireCookieConsent:
			process.env.NEXT_PUBLIC_REQUIRE_COOKIE_CONSENT === "true",
		enableInDevelopment:
			process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV === "true",
		enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "false",
	},
}

export const isAnalyticsEnabled = () => {
	if (!analyticsConfig.general.enableAnalytics) return false
	if (
		process.env.NODE_ENV === "development" &&
		!analyticsConfig.general.enableInDevelopment
	) {
		return false
	}
	return true
}

export const campaignConfig = {
	defaultTags: {
		site: siteConfig.name.toLowerCase(),
		version: "v2",
	},
	utmParams: [
		"utm_source",
		"utm_medium",
		"utm_campaign",
		"utm_term",
		"utm_content",
	],
	customParams: ["campaign", "source", "variant", "test_id"],
}

export type CampaignData = {
	name: string
	variant?: string
	testId?: string
	source?: string
	medium?: string
	landingPage?: string
	customTags?: Record<string, string | number>
}
