/**
 * Google Tag Manager Helper Functions
 * These functions make it easy to send events to GTM's dataLayer
 */

declare global {
	interface Window {
		dataLayer: any[]
	}
}

/**
 * Push an event to the GTM dataLayer
 * @param eventName - The name of the event
 * @param eventData - Additional data to send with the event
 */
export const sendGTMEvent = (eventName: string, eventData?: Record<string, any>) => {
	if (typeof window !== "undefined" && window.dataLayer) {
		window.dataLayer.push({
			event: eventName,
			...eventData,
		})
		console.log("📊 GTM Event:", eventName, eventData)
	}
}

/**
 * Track a page view (useful for SPAs)
 * @param pagePath - The path of the page
 * @param pageTitle - The title of the page
 */
export const trackGTMPageView = (pagePath: string, pageTitle?: string) => {
	sendGTMEvent("page_view", {
		page_path: pagePath,
		page_title: pageTitle || document.title,
		page_location: window.location.href,
	})
}

/**
 * Track a click event
 * @param elementId - ID or description of the element clicked
 * @param elementText - Text content of the element
 * @param elementUrl - URL if it's a link
 */
export const trackGTMClick = (
	elementId: string,
	elementText?: string,
	elementUrl?: string
) => {
	sendGTMEvent("click", {
		click_id: elementId,
		click_text: elementText,
		click_url: elementUrl,
		click_timestamp: new Date().toISOString(),
	})
}

/**
 * Track form submissions
 * @param formId - ID of the form
 * @param formName - Name/type of the form
 * @param formData - Optional form data (be careful with PII!)
 */
export const trackGTMFormSubmit = (
	formId: string,
	formName: string,
	formData?: Record<string, any>
) => {
	sendGTMEvent("form_submit", {
		form_id: formId,
		form_name: formName,
		form_destination: window.location.pathname,
		...formData,
	})
}

/**
 * Track scroll depth
 * @param percentage - How far the user has scrolled (25, 50, 75, 100)
 */
export const trackGTMScroll = (percentage: number) => {
	sendGTMEvent("scroll", {
		scroll_depth: percentage,
		page_path: window.location.pathname,
	})
}

/**
 * Track engagement time
 * @param seconds - Number of seconds user has been engaged
 */
export const trackGTMEngagementTime = (seconds: number) => {
	sendGTMEvent("engagement_time", {
		engagement_time_seconds: seconds,
		page_path: window.location.pathname,
	})
}

/**
 * Track e-commerce events
 * @param action - The e-commerce action (view_item, add_to_cart, purchase, etc.)
 * @param data - E-commerce data
 */
export const trackGTMEcommerce = (action: string, data: Record<string, any>) => {
	sendGTMEvent(`ecommerce_${action}`, {
		ecommerce: data,
	})
}

/**
 * Track custom conversions
 * @param conversionName - Name of the conversion
 * @param conversionValue - Optional value
 * @param conversionData - Additional conversion data
 */
export const trackGTMConversion = (
	conversionName: string,
	conversionValue?: number,
	conversionData?: Record<string, any>
) => {
	sendGTMEvent("conversion", {
		conversion_name: conversionName,
		conversion_value: conversionValue,
		conversion_timestamp: new Date().toISOString(),
		...conversionData,
	})
}

/**
 * Track video interactions
 * @param action - video_play, video_pause, video_complete, etc.
 * @param videoTitle - Title of the video
 * @param videoProgress - Progress percentage
 */
export const trackGTMVideo = (
	action: string,
	videoTitle: string,
	videoProgress?: number
) => {
	sendGTMEvent(`video_${action}`, {
		video_title: videoTitle,
		video_progress: videoProgress,
		video_url: window.location.href,
	})
}

/**
 * Track user properties (be careful with PII!)
 * @param userProperties - User properties to track
 */
export const setGTMUserProperties = (userProperties: Record<string, any>) => {
	sendGTMEvent("user_properties", {
		user_properties: userProperties,
	})
}

/**
 * Track errors
 * @param errorMessage - The error message
 * @param errorLocation - Where the error occurred
 */
export const trackGTMError = (errorMessage: string, errorLocation?: string) => {
	sendGTMEvent("error", {
		error_message: errorMessage,
		error_location: errorLocation || window.location.pathname,
		error_timestamp: new Date().toISOString(),
	})
}