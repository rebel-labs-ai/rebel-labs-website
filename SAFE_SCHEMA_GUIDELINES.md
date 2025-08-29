# Safe Schema.org Guidelines for Novosapien

## ✅ Safe Schema Types to Use

### Organization Schema

- **Safe to use**: Company information, logo, contact details
- **Requirements**: Must be accurate company information

```json
{
	"@type": "Organization",
	"name": "Novosapien",
	"url": "https://novosapien.com",
	"logo": "https://novosapien.com/logo.svg",
	"contactPoint": {
		"@type": "ContactPoint",
		"contactType": "sales"
	}
}
```

### Service Schema

- **Safe to use**: Describing actual services you offer
- **Requirements**: Services must actually be available

```json
{
	"@type": "Service",
	"name": "AI Content Creation Workforce",
	"description": "Automated content creation service",
	"provider": { "@type": "Organization", "name": "Novosapien" }
}
```

### WebPage/WebSite Schema

- **Safe to use**: Page structure and navigation
- **Requirements**: Accurate page information

```json
{
  "@type": "WebPage",
  "name": "Page Title",
  "description": "Page description",
  "breadcrumb": {...}
}
```

### BreadcrumbList Schema

- **Safe to use**: Navigation hierarchy
- **Requirements**: Must match actual site structure

```json
{
	"@type": "BreadcrumbList",
	"itemListElement": [
		{ "@type": "ListItem", "position": 1, "name": "Home", "item": "/" }
	]
}
```

### SoftwareApplication Schema

- **Safe to use**: Describing your platform
- **Requirements**: Accurate feature descriptions

```json
{
	"@type": "SoftwareApplication",
	"name": "Novosapien Platform",
	"applicationCategory": "BusinessApplication",
	"featureList": ["Feature 1", "Feature 2"]
}
```

### BlogPosting/Article Schema

- **Safe to use**: For actual blog posts
- **Requirements**: Real authors, real publish dates

```json
{
	"@type": "BlogPosting",
	"headline": "Article Title",
	"author": { "@type": "Person", "name": "Real Author Name" },
	"datePublished": "2024-01-01"
}
```

### FAQPage Schema

- **Safe to use**: Frequently asked questions
- **Requirements**: Real questions and accurate answers

```json
{
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "Real question?",
			"acceptedAnswer": { "@type": "Answer", "text": "Real answer" }
		}
	]
}
```

### HowTo Schema

- **Safe to use**: Step-by-step guides
- **Requirements**: Actual instructions that work

```json
{
	"@type": "HowTo",
	"name": "How to use Novosapien",
	"step": [{ "@type": "HowToStep", "text": "Step 1: Sign up" }]
}
```

## 🚫 Schema Types to AVOID Without Real Data

### AggregateRating

- **DO NOT USE** unless you have:
  - Real customer reviews
  - Verifiable rating system
  - Reviews displayed on the page
- **Penalty**: Manual action, rich snippets removal

### Review/ReviewRating

- **DO NOT USE** unless:
  - Reviews are from real customers
  - Reviews are displayed on page
  - You can verify authenticity
- **Penalty**: Severe ranking penalties

### Offer with Price

- **BE CAREFUL** with:
  - Price must be accurate
  - Availability must be real
  - Don't use "$0" unless truly free
- **Better alternative**: Use Service schema without pricing

### Person (as Author)

- **DO NOT USE** fake authors
- **Only use** for real team members
- **Include** real job titles and roles

### Event

- **DO NOT USE** for fake events
- **Only use** for actual scheduled events
- **Must have** real dates, locations, organizers

### JobPosting

- **DO NOT USE** for non-existent positions
- **Only use** for actual open positions
- **Must be** actively recruiting

### Product

- **BE CAREFUL** - only for physical/digital products
- **Not for** services (use Service schema instead)
- **Requires** actual product details

### LocalBusiness

- **Only if** you have physical locations
- **Requires** real address, hours, contact info

## 📋 Schema Validation Checklist

Before implementing any schema:

1. ✅ Is the information 100% accurate?
2. ✅ Is it visible on the page?
3. ✅ Can users verify it?
4. ✅ Will it remain true in 6 months?
5. ✅ Does it match what's displayed?

## 🛠️ Testing Your Schema

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor for schema errors
4. **Structured Data Testing Tool**: Chrome extension

## ⚠️ Warning Signs of Problems

- Schema data doesn't match visible content
- Using ratings without review system
- Prices that aren't real
- Authors who don't exist
- Events that won't happen
- Services you don't offer

## 💡 Best Practices

1. **Start Small**: Implement basic schemas first
2. **Be Conservative**: When in doubt, leave it out
3. **Match Content**: Schema must match visible content
4. **Update Regularly**: Keep schema current
5. **Monitor Performance**: Check Search Console weekly
6. **Document Changes**: Track what schemas you add

## 🔄 Implementation Status

### Currently Implemented (Safe):

- ✅ Organization schema (all pages via layout)
- ✅ WebPage schema (homepage, service pages)
- ✅ Service schema (workforce pages)
- ✅ BreadcrumbList (all pages)
- ✅ SoftwareApplication (homepage - without offers/ratings)
- ✅ BlogPosting (blog preview pages - verify authors are real)

### Removed (Unsafe):

- ❌ AggregateRating (all pages - no real reviews)
- ❌ Offer with "$0" price (misleading)
- ⚠️ Converted Offer to Service in catalogs

### Future Opportunities (When Ready):

- 📅 FAQPage schema (create real FAQ section)
- 📅 HowTo schema (create guides)
- 📅 VideoObject (when you have videos)
- 📅 Review schema (after collecting real reviews)
- 📅 Event schema (for webinars/demos)

## 🚨 Emergency Response

If you receive a manual action:

1. Remove problematic schema immediately
2. Fix the underlying issue
3. Request reconsideration in Search Console
4. Document what happened
5. Wait 2-6 weeks for response

Remember: **No schema is better than fake schema**. Google rewards honesty and penalizes deception severely.
