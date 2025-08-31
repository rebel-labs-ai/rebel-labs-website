"use client"

import { useEffect, useState } from "react"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import { getCookie, setCookie } from "cookies-next"

interface ConsentState {
	analytics: boolean
	marketing: boolean
	functional: boolean
}

export function CookieConsentBanner() {
	const [showBanner, setShowBanner] = useState(false)
	const [showSettings, setShowSettings] = useState(false)
	const [consentState, setConsentState] = useState<ConsentState>({
		analytics: false,
		marketing: false,
		functional: true,
	})

	useEffect(() => {
		// Check if consent has already been given
		const consentValue = getCookieConsentValue("novosapien-cookie-consent")
		const savedConsent = getCookie("cookie-consent-state")
		
		if (savedConsent) {
			try {
				const parsed = JSON.parse(savedConsent as string)
				setConsentState(parsed)
				if (parsed.analytics) {
					window.dispatchEvent(new Event("cookie-consent-granted"))
				}
			} catch (e) {
				console.error("Failed to parse cookie consent state", e)
			}
		}
		
		// Only show banner if no consent has been given
		if (!consentValue || (consentValue !== "true" && consentValue !== "false")) {
			setShowBanner(true)
		}
		
		// Cleanup function to remove any lingering overlays
		return () => {
			// Remove any overlay elements that might have been left behind
			const overlays = document.querySelectorAll('.CookieConsent')
			overlays.forEach(overlay => overlay.remove())
		}
	}, [])

	const handleAcceptAll = () => {
		const fullConsent = {
			analytics: true,
			marketing: true,
			functional: true,
		}
		setConsentState(fullConsent)
		setCookie("cookie-consent-state", JSON.stringify(fullConsent), {
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "lax",
		})
		window.dispatchEvent(new Event("cookie-consent-granted"))
	}

	const handleDecline = () => {
		const minimalConsent = {
			analytics: false,
			marketing: false,
			functional: true,
		}
		setConsentState(minimalConsent)
		setCookie("cookie-consent-state", JSON.stringify(minimalConsent), {
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "lax",
		})
		window.dispatchEvent(new Event("cookie-consent-declined"))
	}

	const handleSavePreferences = () => {
		setCookie("cookie-consent-state", JSON.stringify(consentState), {
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "lax",
		})
		setShowSettings(false)
		if (consentState.analytics) {
			window.dispatchEvent(new Event("cookie-consent-granted"))
		} else {
			window.dispatchEvent(new Event("cookie-consent-declined"))
		}
	}

	// Don't render anything if banner shouldn't be shown
	if (!showBanner) {
		return null
	}

	return (
		<>
			<CookieConsent
				location="bottom"
				buttonText="Accept All"
				declineButtonText="Reject All"
				cookieName="novosapien-cookie-consent"
				style={{
					background: "hsl(var(--card))",
					color: "hsl(var(--card-foreground))",
					fontSize: "14px",
					padding: "20px",
					alignItems: "center",
					boxShadow: "0 -4px 6px -1px rgb(0 0 0 / 0.1)",
				}}
				buttonStyle={{
					background: "hsl(var(--primary))",
					color: "hsl(var(--primary-foreground))",
					fontSize: "14px",
					padding: "10px 20px",
					borderRadius: "6px",
					fontWeight: "600",
				}}
				declineButtonStyle={{
					background: "transparent",
					border: "1px solid hsl(var(--border))",
					color: "hsl(var(--foreground))",
					fontSize: "14px",
					padding: "10px 20px",
					borderRadius: "6px",
					fontWeight: "600",
				}}
				expires={365}
				enableDeclineButton
				onAccept={() => {
					handleAcceptAll()
					setShowBanner(false)
				}}
				onDecline={() => {
					handleDecline()
					setShowBanner(false)
				}}
				containerClasses="cookie-consent-container"
				contentClasses="cookie-consent-content"
				buttonWrapperClasses="cookie-consent-buttons"
				overlay={false}
				disableStyles={false}
			>
				<div className="flex flex-col gap-3">
					<p className="text-base font-semibold">🍪 Cookie Preferences</p>
					<p className="text-sm">
						We use cookies to enhance your browsing experience, analyze site traffic,
						and personalize content. By clicking &quot;Accept All&quot;, you consent
						to our use of cookies.
					</p>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
							setShowSettings(true)
						}}
						className="text-sm text-primary hover:underline text-left"
					>
						Manage Preferences
					</button>
				</div>
			</CookieConsent>

			{showSettings && (
				<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
					<div className="bg-card p-6 rounded-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
						<h2 className="text-xl font-bold mb-4">Cookie Settings</h2>
						<div className="space-y-4">
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<h3 className="font-semibold">Essential Cookies</h3>
									<p className="text-sm text-muted-foreground">
										Required for the website to function properly. Cannot be
										disabled.
									</p>
								</div>
								<input
									type="checkbox"
									checked={true}
									disabled
									className="mt-1 h-4 w-4"
								/>
							</div>

							<div className="flex items-start justify-between">
								<div className="flex-1">
									<h3 className="font-semibold">Analytics Cookies</h3>
									<p className="text-sm text-muted-foreground">
										Help us understand how visitors interact with our website
										(Google Analytics, Microsoft Clarity).
									</p>
								</div>
								<input
									type="checkbox"
									checked={consentState.analytics}
									onChange={(e) =>
										setConsentState({ ...consentState, analytics: e.target.checked })
									}
									className="mt-1 h-4 w-4 cursor-pointer"
								/>
							</div>

							<div className="flex items-start justify-between">
								<div className="flex-1">
									<h3 className="font-semibold">Marketing Cookies</h3>
									<p className="text-sm text-muted-foreground">
										Used to track visitors across websites for advertising
										purposes (Google Tag Manager).
									</p>
								</div>
								<input
									type="checkbox"
									checked={consentState.marketing}
									onChange={(e) =>
										setConsentState({ ...consentState, marketing: e.target.checked })
									}
									className="mt-1 h-4 w-4 cursor-pointer"
								/>
							</div>
						</div>

						<div className="flex gap-3 mt-6">
							<button
								onClick={handleSavePreferences}
								className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90"
							>
								Save Preferences
							</button>
							<button
								onClick={() => setShowSettings(false)}
								className="flex-1 border border-border px-4 py-2 rounded-md font-semibold hover:bg-accent"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}