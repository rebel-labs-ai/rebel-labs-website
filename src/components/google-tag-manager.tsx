"use client"

import Script from "next/script"
import { useEffect } from "react"
import { getCookie } from "cookies-next"

interface GoogleTagManagerProps {
	gtmId: string
}

declare global {
	interface Window {
		dataLayer: any[]
	}
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
	useEffect(() => {
		// Initialize dataLayer
		window.dataLayer = window.dataLayer || []
		
		// Push initial consent state
		const consentState = getCookie("cookie-consent-state")
		if (consentState) {
			try {
				const parsed = JSON.parse(consentState as string)
				window.dataLayer.push({
					event: 'consent_update',
					analytics_consent: parsed.analytics ? 'granted' : 'denied',
					marketing_consent: parsed.marketing ? 'granted' : 'denied'
				})
			} catch (e) {
				console.error("Failed to parse consent state", e)
			}
		}
	}, [])
	
	return (
		<>
			<Script
				id="gtm-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${gtmId}');
					`,
				}}
			/>
		</>
	)
}

export function GoogleTagManagerNoscript({ gtmId }: GoogleTagManagerProps) {
	return (
		<noscript>
			<iframe
				src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			/>
		</noscript>
	)
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${gaId}');
				`}
			</Script>
		</>
	)
}
