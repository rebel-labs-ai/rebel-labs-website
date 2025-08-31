---
title: "Navigation Content"
description: "Global navigation content for Novosapien website"
last_updated: "2025-08-31"
source_file: "/Users/georgewestbrook/Programming/novosapien/novosapien-website-v2/src/components/navigation.tsx"
---

# Navigation Content

## Brand Identity

### Logo
- **Alt text**: "Novosapien Logo"
- **File**: `/logo.svg`
- **Dimensions**: 24x24 pixels

### Brand Text
- **Full text**: "novosapien"
- **Split presentation**:
  - **"novo"** (accent color)
  - **"sapien"** (foreground color with dark theme variation)
- **Styling**: lowercase, medium font weight, Reddit Sans font
- **Font class**: `font-reddit-sans`

## Desktop Navigation Items

### 1. Home
- **Text**: "Home"
- **Link**: `/`
- **Type**: Internal navigation
- **Word count**: 1

### 2. Workforces (Dropdown)
- **Text**: "Workforces"
- **Type**: CSS hover-triggered dropdown
- **Word count**: 1
- **Icon**: ChevronDown (rotates 180° on hover)

#### Workforces Dropdown Items:

##### Inbound Sales
- **Text**: "Inbound Sales"
- **Link**: `/workforces/inbound-sales`
- **Word count**: 2

##### Content Creation
- **Text**: "Content Creation"
- **Link**: `/workforces/content-creation`
- **Word count**: 2

##### The Lab
- **Text**: "The Lab"
- **Link**: `/workforces/lab`
- **Word count**: 2

### 3. Mission
- **Text**: "Mission"
- **Link**: `/mission`
- **Type**: Internal navigation
- **Word count**: 1

### 4. Blog
- **Text**: "Blog"
- **Link**: `/blog`
- **Type**: Internal navigation
- **Word count**: 1

### 5. Contact
- **Text**: "Contact"
- **Link**: `/contact`
- **Type**: Internal navigation
- **Word count**: 1

## Mobile Navigation Items

### Primary Items (same as desktop)
- Home
- Workforces (expandable)
- Mission
- Blog
- Contact

### Additional Mobile Items
- **Careers**: `/careers`
- **Theme Toggle**: "Light Mode" / "Dark Mode" with Sun/Moon icons

### Mobile Menu Controls
- **Menu Button**: Hamburger/X icon toggle
- **Aria Label**: "Toggle menu"

## Interactive Features

### Theme Toggle (Mobile Only)
- **Light Mode Text**: "Light Mode" with Sun icon
- **Dark Mode Text**: "Dark Mode" with Moon icon
- **Functionality**: Toggles between light/dark themes

### Mobile Menu Toggle
- **Open Icon**: Menu (hamburger)
- **Close Icon**: X
- **Aria Label**: "Toggle menu"

## Complete Text Inventory

### Brand Elements (1 word):
- "novosapien" (brand text)

### Desktop Navigation (6 words):
- "Home" (1 word)
- "Workforces" (1 word)
- "Mission" (1 word)
- "Blog" (1 word)
- "Contact" (1 word)

### Dropdown Items (6 words):
- "Inbound Sales" (2 words)
- "Content Creation" (2 words)
- "The Lab" (2 words)

### Mobile-Specific Items (2 words):
- "Careers" (1 word)
- "Light Mode" / "Dark Mode" (2 words each)

### Alt Text and Accessibility (4 words):
- "Novosapien Logo" (2 words)
- "Toggle menu" (2 words)

### Total Word Count: 19 words (excluding theme toggle variations)

## URL Destinations

### Internal Pages:
- `/` (Home)
- `/workforces/inbound-sales`
- `/workforces/content-creation`
- `/workforces/lab`
- `/mission`
- `/blog`
- `/contact`
- `/careers` (mobile only)

### No External Links
- All navigation items are internal to the site

## Content Variations by Device

### Desktop Only:
- Horizontal layout with dropdown
- CSS hover interactions
- Logo with brand text inline

### Mobile Only:
- Careers link
- Theme toggle with mode switching
- Collapsible menu with hamburger icon
- Expandable workforces section

## Accessibility Features

### ARIA Labels:
- "Toggle menu" for mobile menu button
- "Novosapien Logo" for logo image

### Interactive Elements:
- Keyboard-accessible buttons
- Proper focus states
- Semantic HTML structure

## Content Purpose

### Primary Navigation:
- **Home**: Main landing page
- **Workforces**: Service offerings with specialized sub-pages
- **Mission**: Company purpose and values
- **Blog**: Content marketing and thought leadership
- **Contact**: Direct contact information

### Secondary Navigation (Mobile):
- **Careers**: Job opportunities
- **Theme Toggle**: User experience customization
