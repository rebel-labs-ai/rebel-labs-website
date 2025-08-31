# Analytics Documentation

## Overview

This project implements a comprehensive analytics setup with three major tracking tools that work together to provide complete insights into user behavior and campaign performance:

1. **Google Analytics (GA4)** - Tracks WHAT users do
2. **Google Tag Manager (GTM)** - Container for managing all tracking scripts
3. **Microsoft Clarity** - Shows HOW users interact with your site

All analytics tools respect GDPR compliance through a cookie consent system that blocks any tracking until users explicitly consent.

## Quick Start

### 1. Get Your Microsoft Clarity Project ID

1. Sign up for free at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create a new project for your website
3. Copy your Project ID from the setup instructions
4. Add it to your `.env.local`:

```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_project_id_here
```

### 2. Verify Your Configuration

Your `.env.local` should now have:

```env
# Google Analytics (already configured)
NEXT_PUBLIC_GA_ID=G-7CWL8TKX4K

# Google Tag Manager (already configured)
NEXT_PUBLIC_GTM_ID=GTM-NBC26J83

# Microsoft Clarity (add your ID here)
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_clarity_id

# Cookie Consent Settings
NEXT_PUBLIC_REQUIRE_COOKIE_CONSENT=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV=false
```

### 3. Test Your Setup

1. Start your development server: `npm run dev`
2. Visit your site - you should see the cookie consent banner
3. Accept cookies
4. Visit the test landing page: `http://localhost:3000/lp/test-campaign`
5. Check browser console for tracking confirmations (📊 messages)

## What Each Tool Does

### Google Analytics (GA4)
- **Purpose**: Quantitative analytics - the "what" of user behavior
- **Tracks**: 
  - Page views and user sessions
  - Traffic sources (where users come from)
  - User demographics and interests
  - Conversion goals and e-commerce
  - User flow through your site
- **Best For**: Understanding traffic patterns and conversion metrics

### Google Tag Manager (GTM)
- **Purpose**: Tag management container - controls when and how tracking fires
- **Features**:
  - Manage all tracking codes in one place
  - Add/remove tracking without code changes
  - Create triggers based on user actions
  - Preview and debug tracking before publishing
  - Version control for tracking configurations
- **Best For**: Marketing teams to manage tracking independently

### Microsoft Clarity
- **Purpose**: Qualitative analytics - the "how" of user behavior
- **Features**:
  - Session recordings (watch actual user sessions)
  - Heatmaps (see where users click and scroll)
  - Rage click detection (identify frustration points)
  - Dead click detection (find broken elements)
  - JavaScript error tracking
  - Free and unlimited recordings
- **Best For**: UX improvements and identifying usability issues

## Campaign Tracking

### Landing Page Structure

Landing pages are accessible at: `/lp/[campaign-name]`

Example URLs:
- `https://yoursite.com/lp/test-campaign`
- `https://yoursite.com/lp/summer-2025`
- `https://yoursite.com/lp/black-friday?variant=B`

### UTM Parameters

Add UTM parameters to track campaign performance:

```
https://yoursite.com/lp/summer-2025?utm_source=linkedin&utm_medium=social&utm_campaign=summer-sale
```

Supported parameters:
- `utm_source` - Where the traffic comes from (e.g., google, linkedin, newsletter)
- `utm_medium` - Marketing medium (e.g., cpc, social, email)
- `utm_campaign` - Campaign name
- `utm_term` - Paid search keywords
- `utm_content` - Differentiates similar content/links
- `variant` - A/B test variant (A or B)

### A/B Testing

Create variants by adding `?variant=B` to your URLs:

```
Version A: https://yoursite.com/lp/test-campaign
Version B: https://yoursite.com/lp/test-campaign?variant=B
```

Both Clarity and GA will track the variant for analysis.

## Cookie Consent

### How It Works

1. **First Visit**: Users see a cookie consent banner
2. **User Choice**: Can accept all, reject all, or manage preferences
3. **Granular Control**: Three categories of cookies:
   - Essential (always enabled)
   - Analytics (GA & Clarity)
   - Marketing (GTM)
4. **Persistence**: Preferences saved for 365 days

### Consent States

The system respects these consent states:
- **No Consent**: No tracking scripts load
- **Analytics Only**: GA and Clarity load
- **Marketing Only**: GTM loads
- **Full Consent**: All tools load

## Adding New Landing Pages

### 1. Add Campaign Configuration

Edit `/src/app/lp/[campaign]/page.tsx`:

```typescript
const campaigns: Record<string, CampaignConfig> = {
  // ... existing campaigns
  "your-new-campaign": {
    id: "your-new-campaign",
    title: "Your Campaign Title - Novosapien",
    description: "Campaign description for SEO",
    heroTitle: "Main Headline",
    heroSubtitle: "Supporting text",
    ctaText: "Call to Action",
    ctaLink: "/contact",
    variant: "A",
    features: [
      "Feature 1",
      "Feature 2",
    ],
    testimonial: {
      quote: "Customer testimonial",
      author: "Customer Name",
      role: "Customer Title",
    },
  },
}
```

### 2. Test Your Campaign

1. Visit: `http://localhost:3000/lp/your-new-campaign`
2. Check console for tracking confirmations
3. Test with UTM parameters
4. Verify in Clarity and GA dashboards

## Tracking Custom Events

### Basic Event Tracking

```typescript
import { trackEvent } from "@/lib/analytics/tracking"

// Track a button click
trackEvent("button_click", {
  button_name: "hero_cta",
  page: "homepage",
})
```

### Form Submissions

```typescript
import { trackFormSubmission } from "@/lib/analytics/tracking"

// Track form submission
trackFormSubmission("contact_form", {
  form_location: "header",
  campaign: "summer-2025",
})
```

### Conversions

```typescript
import { trackConversion } from "@/lib/analytics/tracking"

// Track a conversion
trackConversion("lead_generated", 100, "USD")
```

### Campaign-Specific Events

```typescript
import { trackCampaignLanding } from "@/lib/analytics/tracking"

// Automatically tracked on landing pages
trackCampaignLanding({
  campaignName: "summer-2025",
  variant: "B",
  source: "linkedin",
  medium: "social",
})
```

## Debugging

### Check if Analytics is Working

1. **Browser Console**: Look for 📊 emoji messages
2. **Network Tab**: Check for requests to:
   - `google-analytics.com`
   - `googletagmanager.com`
   - `clarity.ms`
3. **Cookie Storage**: Check for consent state in cookies

### Common Issues

**Issue: No tracking after accepting cookies**
- Solution: Refresh the page after accepting cookies
- Check: Console for error messages

**Issue: Clarity not recording sessions**
- Solution: Ensure you have the correct Project ID
- Check: Clarity dashboard for the project status

**Issue: GTM not firing tags**
- Solution: Use GTM Preview mode to debug
- Check: GTM container is published

**Issue: Analytics working in dev but not production**
- Solution: Ensure environment variables are set in production
- Check: Vercel/hosting platform environment settings

## Privacy & Compliance

### GDPR Compliance
- ✅ No tracking before consent
- ✅ Granular consent options
- ✅ Clear privacy policy link
- ✅ Easy opt-out mechanism
- ✅ 365-day consent expiration

### Data Retention
- **GA**: Default 14 months (configurable)
- **GTM**: No data storage (just manages tags)
- **Clarity**: 30 days of recordings

### User Rights
Users can:
- Refuse all tracking
- Choose specific tracking categories
- Change preferences anytime
- Request data deletion (contact support)

## Performance Considerations

### Load Order
1. Essential scripts first
2. Cookie consent check
3. Analytics scripts (if consented)
4. All scripts load asynchronously

### Impact on Core Web Vitals
- Scripts load with `async` or `defer`
- No render blocking
- Minimal impact on LCP
- No layout shift from consent banner

### Best Practices
- ✅ Only load in production by default
- ✅ Lazy load analytics after consent
- ✅ Use performance monitoring
- ✅ Regular audit of tracking needs

## Next Steps

1. **Sign up for Clarity**: Get your free account and Project ID
2. **Configure GTM**: Set up your tags and triggers in GTM dashboard
3. **Create Landing Pages**: Start with `/lp/test-campaign` as a template
4. **Monitor Performance**: Check all three dashboards regularly
5. **Optimize Based on Data**: Use insights to improve conversions

## Support

For issues or questions:
- **Clarity**: [clarity.microsoft.com/docs](https://clarity.microsoft.com/docs)
- **Google Analytics**: [analytics.google.com/analytics/academy](https://analytics.google.com/analytics/academy)
- **GTM**: [tagmanager.google.com/help](https://tagmanager.google.com/help)

Remember: The goal is to understand your users better, not to track everything possible. Focus on metrics that drive business decisions.