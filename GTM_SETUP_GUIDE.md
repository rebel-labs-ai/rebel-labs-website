# Google Tag Manager Setup Guide

## 🚀 Your GTM is Ready!

Your GTM container (GTM-NBC26J83) is now properly installed and configured. Here's how to use it:

## 📊 Access Your GTM Dashboard

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. You should see your container: **GTM-NBC26J83**
3. Click on it to enter the dashboard

## 🎯 GTM Dashboard Overview

### Main Areas:

- **Workspace**: Where you make changes
- **Tags**: Your tracking scripts (GA, Clarity, pixels)
- **Triggers**: When tags should fire
- **Variables**: Data you can use
- **Folder**: Organize your tags
- **Templates**: Pre-built tag types

## 🏷️ Create Your First Tag: Button Click Tracking

Let's track when someone clicks "Get Started" buttons:

### Step 1: Create the Tag

1. Click **Tags** → **New**
2. Name it: `Click - Get Started Button`
3. Click **Tag Configuration**
4. Choose **Google Analytics: GA4 Event**
5. Configure:
   - Configuration Tag: Select your GA4 Config tag (or create one with your GA ID)
   - Event Name: `get_started_click`
   - Event Parameters: Add any you want:
     - Parameter Name: `button_location`
     - Value: `{{Page Path}}`

### Step 2: Create the Trigger

1. Click **Triggering**
2. Click **+** to create new trigger
3. Name it: `Trigger - Get Started Click`
4. Choose **Click - All Elements**
5. Select **Some Clicks**
6. Add condition:
   - `Click Text` `contains` `Get Started`
7. Save

### Step 3: Test with Preview Mode

1. Click **Preview** (top right)
2. Enter your website URL
3. A new tab opens with your site + Tag Assistant
4. Click a "Get Started" button
5. Check Tag Assistant to see if your tag fired

### Step 4: Publish

1. If test successful, click **Submit**
2. Add version name: `Added Get Started tracking`
3. Click **Publish**

## 📈 Common Tags to Set Up

### 1. Scroll Depth Tracking

**What**: Track how far users scroll
**Tag Configuration**: GA4 Event
**Event Name**: `scroll`
**Trigger**: Scroll Depth (25%, 50%, 75%, 90%)

### 2. Contact Form Submission

**What**: Track form completions
**Tag Configuration**: GA4 Event
**Event Name**: `form_submit`
**Trigger**: Form Submission

### 3. Outbound Link Clicks

**What**: Track when users leave your site
**Tag Configuration**: GA4 Event
**Event Name**: `outbound_click`
**Trigger**: Click - Just Links where URL doesn't contain your domain

### 4. Video Engagement

**What**: Track video plays
**Tag Configuration**: GA4 Event
**Event Name**: `video_play`
**Trigger**: YouTube Video trigger

### 5. Page View Timer

**What**: Track engaged users
**Tag Configuration**: GA4 Event
**Event Name**: `engaged_user`
**Trigger**: Timer - 30 seconds

## 🔧 Using GTM Events from Your Code

Your code can send custom events to GTM. Here's how:

### From Any Component:

```javascript
import { sendGTMEvent } from "@/lib/analytics/gtm"

// Track a custom event
sendGTMEvent("special_offer_viewed", {
	offer_name: "Summer Sale",
	discount_percentage: 30,
})
```

### Available Helper Functions:

```javascript
import {
	trackGTMClick,
	trackGTMFormSubmit,
	trackGTMScroll,
	trackGTMConversion,
} from "@/lib/analytics/gtm"

// Track a click
trackGTMClick("header_cta", "Start Free Trial", "/signup")

// Track form submission
trackGTMFormSubmit("newsletter", "Newsletter Signup")

// Track conversion
trackGTMConversion("trial_started", 0)
```

## 🎨 GTM Variables You Can Use

### Built-in Variables (Enable in Variables section):

- `{{Page Path}}` - Current page path
- `{{Page URL}}` - Full URL
- `{{Referrer}}` - Where user came from
- `{{Click Text}}` - Text of clicked element
- `{{Click URL}}` - URL of clicked link
- `{{Form ID}}` - ID of submitted form

### Custom Variables You Can Create:

- User Type (new vs returning)
- Page Category (blog, landing page, etc.)
- Scroll Percentage
- Time on Page

## 🚦 Best Practices

### Naming Convention:

```
Tags: [Type] - [Description]
  ✅ "GA4 - Page View"
  ✅ "FB Pixel - Purchase"
  ❌ "Tag 1"

Triggers: Trigger - [Description]
  ✅ "Trigger - Contact Form Submit"
  ✅ "Trigger - 50% Scroll"
  ❌ "New Trigger"

Variables: Var - [Description]
  ✅ "Var - User Type"
  ✅ "Var - Campaign Name"
  ❌ "Variable1"
```

### Testing Checklist:

- [ ] Always use Preview mode first
- [ ] Test on multiple pages
- [ ] Check both desktop and mobile
- [ ] Verify in GA4 real-time reports
- [ ] Document what each tag does

## 🎯 Quick Wins to Try Now

### 1. See Your Data Layer

Open browser console and type:

```javascript
dataLayer
```

You'll see all events being tracked!

### 2. Track Rage Clicks

Create trigger for multiple clicks in same spot - indicates user frustration

### 3. Track Dead Clicks

Clicks that don't do anything - might indicate broken elements

### 4. Landing Page Performance

Your landing pages already send events! In GTM, create tags that listen for `landing_page_view` events

## 🔍 Debugging Tips

### If Tags Don't Fire:

1. Check trigger conditions
2. Verify element selectors
3. Look for JavaScript errors
4. Check cookie consent
5. Disable ad blockers

### See What GTM Captures:

In Preview mode, click any element and Tag Assistant shows:

- All variables available
- Which triggers activated
- Why tags did/didn't fire

## 📚 Your Custom Events

These events are already being sent from your code:

- `page_view` - Every page navigation
- `landing_page_view` - Landing page visits with campaign data
- `consent_update` - When users accept/reject cookies
- `cookie-consent-granted` - Can use as trigger for tags

## 🎉 Next Steps

1. **Start Simple**: Create one scroll depth tag
2. **Test It**: Use Preview mode
3. **Check Data**: Look in GA4 real-time
4. **Iterate**: Add more tags based on what you learn
5. **Document**: Keep notes on what each tag does

## 💡 Pro Tips

- **Version Control**: Always name your versions clearly
- **Backup**: Export container backup before major changes
- **Folders**: Organize tags by type (Analytics, Ads, Testing)
- **Comments**: GTM supports notes - use them!
- **Debugging**: Enable all built-in variables for easier debugging

Remember: GTM is powerful but start small. Add one tag, test it, understand it, then add more. You can always roll back if something breaks!

## Need Help?

- Check browser console for `dataLayer` events
- Use Preview mode to debug
- GA4 DebugView shows events in real-time
- Roll back to previous version if needed
