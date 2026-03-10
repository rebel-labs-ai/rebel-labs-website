# Color System

> **When to read:** When changing the site's colors, theme, or palette. Covers the full pipeline from CSS variables through Tailwind to components.

---

## How Colors Work

Colors flow through a three-layer pipeline:

```
globals.css (HSL values)
    ↓
tailwind.config.ts (maps vars to class names)
    ↓
Components (use Tailwind classes like bg-primary)
```

You only need to change **Layer 1** (CSS variable values in `globals.css`) for most color changes. The other layers automatically pick up the new values.

---

## Layer 1: CSS Variables (globals.css)

File: `src/app/globals.css`

Colors are defined as **HSL triplets without the `hsl()` wrapper**:

```css
--primary: 223 68% 8%;     /* Hue Saturation% Lightness% */
```

There are TWO selectors — you must update BOTH:

- `:root` — Light theme values
- `[data-theme='dark']` — Dark theme values

### Core UI Variables (update these for basic rebranding)

| Variable | Light Theme Purpose | Usage |
|----------|-------------------|-------|
| `--background` | Page background color | `bg-background` |
| `--foreground` | Default text color | `text-foreground` |
| `--card` | Card/surface background | `bg-card` |
| `--card-foreground` | Card text color | `text-card-foreground` |
| `--primary` | Primary interactive color | `bg-primary`, `text-primary` |
| `--primary-foreground` | Text on primary background | `text-primary-foreground` |
| `--secondary` | Secondary surfaces | `bg-secondary` |
| `--secondary-foreground` | Text on secondary | `text-secondary-foreground` |
| `--muted` | Muted backgrounds | `bg-muted` |
| `--muted-foreground` | Muted/subtle text | `text-muted-foreground` |
| `--accent` | Accent/highlight color | `bg-accent`, `text-accent` |
| `--accent-foreground` | Text on accent | `text-accent-foreground` |
| `--destructive` | Error/danger color | `bg-destructive` |
| `--border` | Border color | `border-border` |
| `--input` | Form input backgrounds | `bg-input` |
| `--ring` | Focus ring color | `ring-ring` |

### Brand-Specific Variables (optional — rename or remove)

These are domain-specific and may not apply to your brand:

| Variable | Purpose | Action |
|----------|---------|--------|
| `--primary-blue` | Brand primary | Rename to match your brand |
| `--secondary-blue` | Brand secondary | Rename to match your brand |
| `--accent-teal` | Brand accent | Rename to match your brand |
| `--hot-lead`, `--warm-lead`, `--cold-lead` | Status indicators | Remove if not needed, or rename |
| `--success-alive`, `--appointment-booked` | Status indicators | Remove if not needed, or rename |

If you rename brand variables, also update `tailwind.config.ts` to match.

### Background Variables

| Variable | Purpose |
|----------|---------|
| `--main-background` | Main page background |
| `--card-background` | Card surfaces |
| `--section-background` | Alternating section backgrounds |

### Typography Variables

| Variable | Purpose |
|----------|---------|
| `--primary-text` | Main body text |
| `--secondary-text` | Secondary/supporting text |
| `--muted-text` | De-emphasized text |
| `--placeholder-text` | Form placeholders |

---

## Layer 2: Tailwind Config

File: `tailwind.config.ts`

The config maps CSS variables to Tailwind class names:

```typescript
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  // ... etc
}
```

**Usually you don't need to change this.** Only modify if:
- You're adding NEW color tokens (new variables)
- You're renaming brand-specific tokens
- You need to update the two hardcoded hex values:
  - `accent-hex: "#A1BCD1"` — should match your `--accent` color
  - `primary-blue-hex: "#0066CC"` — should match your primary brand color

---

## Layer 3: Components

Components use Tailwind classes that reference the CSS variables:

```tsx
<div className="bg-background text-foreground">    {/* Theme-aware */}
<button className="bg-primary text-primary-foreground"> {/* Auto-themes */}
<p className="text-muted-foreground">              {/* Subtle text */}
<div className="border-accent bg-accent/10">       {/* Accent with opacity */}
```

**You don't need to change component classes** unless you're adding new semantic colors.

---

## Building a New Palette

### Step 1: Choose Your Brand Colors

Pick 3-4 core colors:
- **Primary** — Your main brand color (buttons, key UI)
- **Accent** — Highlight/emphasis color (links, active states)
- **Background** — Base page color
- **Foreground** — Base text color

### Step 2: Convert to HSL

Use any color converter. Enter values as space-separated triplets:

```
#0066CC → 210 100% 40%  →  --accent: 210 100% 40%;
```

### Step 3: Create Light Theme (:root)

- Background should be light (high lightness: 95-100%)
- Foreground should be dark (low lightness: 5-20%)
- Accent/primary at full saturation

### Step 4: Create Dark Theme ([data-theme='dark'])

- Background should be dark (low lightness: 5-15%)
- Foreground should be light (high lightness: 90-100%)
- Accent/primary may need slightly adjusted lightness for contrast

### Step 5: Test Contrast

Ensure text is readable:
- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- Interactive elements: clearly distinguishable in both themes

---

## Quick Example: Rebranding to Green

```css
:root {
  --background: 0 0% 100%;
  --foreground: 150 40% 10%;
  --primary: 150 40% 10%;
  --primary-foreground: 0 0% 100%;
  --accent: 160 84% 39%;          /* Your green */
  --accent-foreground: 150 40% 10%;
  --muted-foreground: 150 10% 50%;
  --border: 150 20% 92%;
}

[data-theme="dark"] {
  --background: 150 40% 6%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 150 40% 6%;
  --accent: 160 84% 45%;          /* Slightly lighter for dark bg */
  --accent-foreground: 0 0% 100%;
  --muted-foreground: 150 10% 60%;
  --border: 150 20% 20%;
}
```

Then update `tailwind.config.ts`:
```typescript
"accent-hex": "#10B981",  // Match your --accent
```
