export const analyticsConfig = {
	googleAnalytics: {
		measurementId: process.env.NEXT_PUBLIC_GA_ID || "",
		enabled: !!process.env.NEXT_PUBLIC_GA_ID,
	},
	googleTagManager: {
		containerId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-NBC26J83",
		enabled: !!process.env.NEXT_PUBLIC_GTM_ID || true,
	},
	microsoftClarity: {
		projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
		enabled: !!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
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
		site: "novosapien",
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
