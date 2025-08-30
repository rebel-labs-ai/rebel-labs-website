# Careers Page - Layout Structure

## Page Overview

The careers page is a single-page application with a clean, form-focused design built using Next.js App Router architecture.

## Section Hierarchy

### 1. Navigation Bar

- Fixed top navigation with navigation component
- Theme toggle button (fixed top-right)
- No text content in these components (handled separately)

### 2. Header Section

- **Container**: Centered max-width container with padding
- **Title**: Large heading (h1) with responsive font sizing
  - Word count: 3 words ("Join Our Team")
  - Character count: ~13 characters
- **Subtitle**: Descriptive paragraph
  - Word count: 13 words
  - Character count: ~76 characters

### 3. Main Content - Application Form

- **Container**: Card component with styled background and border
- **Form Structure**: Single form with multiple field groups

#### Form Field Groups:

1. **Personal Information** (3 fields)
   - Name (required field with asterisk)
   - Email
   - Phone

2. **Social Profiles Section** (3 fields)
   - Section heading: "Social Profiles"
   - X (Twitter) Profile
   - GitHub Profile
   - LinkedIn Profile

3. **File Upload**
   - CV/Resume upload with drag-and-drop interface
   - File type restrictions noted

4. **Message Field** (required)
   - Large textarea for personal message
   - Character minimum requirement noted

5. **Submit Button**
   - Full-width primary action button

### 4. Footer

- Standard footer component (content handled separately)

## Text Element Lengths

### Headings

- **H1 (Main Title)**: 3 words, ~13 characters
- **H3 (Form Section)**: 2 words, ~15 characters ("Social Profiles")

### Body Text

- **Header description**: 13 words, ~76 characters
- **Form labels**: 1-3 words each (8 total labels)
- **Placeholder text**: 3-8 words per field (11 total placeholders)
- **Help text**: 1-6 words per instance (4 help text instances)
- **Button text**: 2 words, ~18 characters

### Total Estimated Content

- **Total word count**: ~80 words
- **Total character count**: ~500 characters

## Graphics and Visual Elements

### Icons Used

- **Lucide React Icons**:
  - User icon (name field)
  - Mail icon (email field)
  - Phone icon (phone field)
  - Upload icon (file upload)
  - FileText icon (uploaded file display)

- **React Icons (Social)**:
  - FaXTwitter (X/Twitter field)
  - FaGithub (GitHub field)
  - FaLinkedin (LinkedIn field)

### Visual Design Elements

- Card container with shadow and border
- Input fields with left-side icons
- Dashed border upload area
- File upload drag-and-drop zone
- Theme-aware styling (light/dark mode support)

## Layout Constraints and Guidelines

### Responsive Design

- Mobile-first responsive design
- Max-width container (max-w-3xl)
- Responsive heading font sizes (text-4xl md:text-5xl lg:text-6xl)
- Consistent padding and margins

### Form Layout

- Single column form layout
- Consistent spacing between fields (space-y-6)
- Full-width form fields
- Icon positioning in input fields
- Form validation styling (required field indicators)

### Theme Integration

- CSS variables for theme colors
- Dark/light mode compatible
- Theme-aware button styling
- Consistent color usage across components

## Interactive Elements

### Form Interactions

- **Input Fields**: Focus states with ring styling
- **File Upload**: Click and drag-and-drop functionality
- **Form Validation**: Required field indicators (\* symbols)
- **Button Hover**: Shadow and color transition effects
- **File Display**: Dynamic filename display after upload

### State Management

- React useState for form data
- File name state for upload feedback
- Form submission handling (currently console log)

## Animations and Transitions

- Button hover transitions (shadow and background color)
- Focus ring animations on form fields
- Theme toggle animation (handled by theme component)
- Smooth color transitions for theme switching

## Accessibility Features

- Proper form labels with htmlFor attributes
- Required field indicators
- Semantic HTML structure
- Icon alt text through Lucide React
- Keyboard navigation support
- Focus management for form fields

## Text Content Metrics

### Word Count by Section:

1. **Header Section**: 18 words (title + subtitle)
2. **Form Labels**: 22 words (9 field labels)
3. **Placeholder Text**: 28 words (8 placeholders)
4. **Help Text**: 10 words (instructions and validation)
5. **Button Text**: 2 words

**Total Careers Page Content**: ~80 words (excluding navigation and footer)

## Interactive Elements

1. **Form Validation**: Required field indicators and validation
2. **File Upload**: Drag-and-drop with file type restrictions
3. **Input Focus States**: Ring styling and transitions
4. **Button Hover Effects**: Shadow and color transitions
5. **Form Submission**: State management for form data
6. **Theme Support**: Full light/dark mode compatibility

## Responsive Behavior

- **Desktop**: Centered form with max-width constraints
- **Tablet**: Maintained single-column form layout
- **Mobile**: Optimized spacing and touch-friendly inputs

## Content Guidelines

- **Form Labels**: Clear, descriptive field identifiers
- **Placeholder Text**: Helpful examples and formatting guides
- **Help Text**: Concise instructions for user guidance
- **Error Messages**: Clear validation feedback
- **Professional Tone**: Welcoming yet professional language throughout
