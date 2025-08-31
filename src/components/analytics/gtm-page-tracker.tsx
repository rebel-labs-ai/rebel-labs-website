"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackGTMPageView, sendGTMEvent } from "@/lib/analytics/gtm"

/**
 * Component that tracks page views and sends route changes to GTM
 * Add this to your layout or specific pages where you want tracking
 */
export function GTMPageTracker() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		// Track page view
		trackGTMPageView(pathname)

		// Track if it's a landing page
		if (pathname.startsWith("/lp/")) {
			const campaignName = pathname.split("/lp/")[1]
			const utmSource = searchParams.get("utm_source")
			const utmMedium = searchParams.get("utm_medium")
			const utmCampaign = searchParams.get("utm_campaign")
			const variant = searchParams.get("variant")

			sendGTMEvent("landing_page_view", {
				campaign_name: campaignName,
				utm_source: utmSource,
				utm_medium: utmMedium,
				utm_campaign: utmCampaign,
				variant: variant,
				full_url: window.location.href,
			})
		}
	}, [pathname, searchParams])

	return null
}