"use client"

import { useEffect } from "react"
import { trackCampaignLanding } from "@/lib/analytics/tracking"
import { setClarityCustomTag } from "@/components/analytics/clarity-provider"
import { CampaignConfig } from "./page"

interface CampaignTrackerProps {
	campaign: CampaignConfig
	searchParams: { [key: string]: string | string[] | undefined }
}

export function CampaignTracker({ campaign, searchParams }: CampaignTrackerProps) {
	useEffect(() => {
		const utmSource = searchParams.utm_source || searchParams.source
		const utmMedium = searchParams.utm_medium || searchParams.medium
		const utmCampaign = searchParams.utm_campaign || campaign.id
		const variant = searchParams.variant || campaign.variant

		const campaignData = {
			campaignName: campaign.id,
			variant: variant as string,
			source: utmSource as string,
			medium: utmMedium as string,
		}

		trackCampaignLanding(campaignData)

		setClarityCustomTag("campaign_id", campaign.id)
		if (variant) {
			setClarityCustomTag("campaign_variant", variant as string)
		}

		console.log("📊 Campaign tracked:", {
			id: campaign.id,
			variant,
			utm_source: utmSource,
			utm_medium: utmMedium,
			utm_campaign: utmCampaign,
		})
	}, [campaign, searchParams])

	return null
}