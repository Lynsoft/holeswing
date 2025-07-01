# Typography System Documentation

## Overview

Our typography system provides a comprehensive set of text styles extracted from Figma design tokens, ensuring consistent typography across the entire React Native application. The system uses Inter font family and supports both semantic and Figma-specific style naming.

## Font Family

### Primary Font: Inter
- **Usage**: All text throughout the application
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold)
- **Characteristics**: Modern, highly legible, optimized for UI

### Fallback Fonts
- **System**: Platform default sans-serif
- **Monospace**: Courier New for code snippets

## Typography Scale

### Font Sizes (from Figma)
- **xs (10px)**: Smallest text, timestamps, minimal content
- **sm (12px)**: Fine print, helper text, captions
- **base (14px)**: Small body text, secondary content
- **lg (16px)**: Default body text, button text
- **xl (20px)**: Large body text, important content
- **2xl (22px)**: Section headings
- **3xl (24px)**: Main page titles
- **4xl (28px)**: Large display text
- **5xl (36px)**: Hero headlines, display text

### Font Weights
- **Normal (400)**: Body text, descriptions
- **Medium (500)**: Emphasized text
- **Semibold (600)**: Titles, labels, buttons
- **Bold (700)**: Headings, important text

## Figma Typography Styles

### Large Styles
- **Large 36**: Hero headlines, display text
- **Large 28**: Large section headers

### Heading Styles
- **Heading 1 (24px, Bold)**: Main page titles
- **Heading 2 (22px, Bold)**: Section headings
- **Heading 3 (20px, Bold)**: Subsection headings
- **Heading 4 (16px, Bold)**: Component headings
- **Heading 5 (14px, Bold)**: Small headings, labels

### Title Styles (Semi Bold)
- **Title 20**: Large titles, important labels
- **Title 16**: Button text, form labels
- **Title 14**: Small buttons, tabs
- **Title 12**: Captions, metadata
- **Title 10**: Overlines, small labels

### Text Styles (Regular)
- **Text 20**: Large body text, descriptions
- **Text 16**: Default body text
- **Text 14**: Small body text, secondary content
- **Text 12**: Fine print, helper text
- **Text 10**: Smallest text, timestamps

## Semantic Typography

### Display & Headings
- `display` - Largest text for hero sections
- `h1` through `h6` - Hierarchical headings

### Body Text
- `body` - Default body text (16px)
- `bodyLarge` - Large body text (20px)
- `bodySmall` - Small body text (14px)

### UI Elements
- `button` - Button text styling
- `caption` - Image captions, helper text
- `overline` - Category labels, overlines
- `label` - Form labels, UI labels
- `code` - Code snippets (monospace)

## Usage

### With NativeWind (Recommended)

```tsx
import { View, Text } from 'react-native'

function MyComponent() {
  return (
    <View className="p-4">
      {/* Using font size and weight classes */}
      <Text className="text-3xl font-bold text-foreground mb-4">
        Main Heading
      </Text>
      
      {/* Using semantic combinations */}
      <Text className="text-lg font-semibold text-foreground mb-2">
        Section Title
      </Text>
      
      {/* Body text with line height */}
      <Text className="text-base leading-relaxed text-foreground mb-4">
        This is body text with relaxed line height for better readability
        in longer paragraphs and content sections.
      </Text>
      
      {/* Small text with letter spacing */}
      <Text className="text-xs font-medium tracking-wide text-muted">
        OVERLINE TEXT
      </Text>
    </View>
  )
}
```

### With useTypography Hook

```tsx
import { View, Text } from 'react-native'
import { useTypography } from '~/utils/useTypography'

function MyComponent() {
  const { 
    getStyleByName, 
    getSemanticClassName,
    h1, 
    body, 
    caption 
  } = useTypography()
  
  return (
    <View>
      {/* Using style objects */}
      <Text style={h1}>Heading with style object</Text>
      <Text style={body}>Body text with style object</Text>
      
      {/* Using Figma style names */}
      <Text style={getStyleByName('heading-1')}>
        Figma heading style
      </Text>
      
      {/* Using semantic class names */}
      <Text className={getSemanticClassName('h2')}>
        Semantic heading
      </Text>
    </View>
  )
}
```

### Typography Combinations

```tsx
// Article header
<Text className="text-xs font-semibold tracking-widest text-muted mb-2">
  TECHNOLOGY • 5 MIN READ
</Text>
<Text className="text-3xl font-bold leading-tight text-foreground mb-4">
  Article Title
</Text>

// Button text
<Text className="text-base font-semibold text-center text-white">
  Button Text
</Text>

// Form label
<Text className="text-sm font-semibold text-foreground mb-2">
  Form Label
</Text>

// Caption text
<Text className="text-xs text-muted mt-1">
  Helper text or caption information
</Text>
```

## Line Heights

- **none (1.0)**: Tight spacing for large headings
- **tight (1.1)**: Compact text, display headings
- **snug (1.2)**: Headings, titles
- **normal (1.4)**: Default for most text
- **relaxed (1.6)**: Body text, improved readability
- **loose (1.8)**: Very spacious, special cases

## Letter Spacing

- **tighter (-0.05em)**: Large headings, display text
- **tight (-0.025em)**: Headings
- **normal (0em)**: Default spacing
- **wide (0.025em)**: Small text, labels
- **wider (0.05em)**: Buttons, emphasis
- **widest (0.1em)**: Overlines, categories

## Accessibility

### Font Size Guidelines
- **Minimum readable size**: 12px for normal text
- **Minimum readable size**: 10px for bold text (600+ weight)
- **Recommended body size**: 16px for optimal readability
- **Large text threshold**: 18px+ for improved accessibility

### Contrast Requirements
- **Normal text**: 4.5:1 contrast ratio (WCAG AA)
- **Large text**: 3:1 contrast ratio (WCAG AA)
- **Enhanced**: 7:1 contrast ratio (WCAG AAA)

### Best Practices
1. **Use semantic typography** for consistent hierarchy
2. **Test with system font scaling** for accessibility
3. **Maintain sufficient contrast** with background colors
4. **Use appropriate line heights** for readability
5. **Limit font weight variations** to maintain consistency

## Examples

### Article Layout
```tsx
function Article() {
  return (
    <View className="p-6">
      <Text className="text-xs font-semibold tracking-widest text-muted mb-2">
        CATEGORY • READ TIME
      </Text>
      <Text className="text-3xl font-bold leading-tight text-foreground mb-4">
        Article Headline
      </Text>
      <Text className="text-sm text-muted mb-6">
        Published date and author
      </Text>
      <Text className="text-lg leading-relaxed text-foreground mb-4">
        Lead paragraph with larger text for emphasis.
      </Text>
      <Text className="text-base leading-relaxed text-foreground">
        Body paragraphs with standard text size and relaxed line height.
      </Text>
    </View>
  )
}
```

### Card Component
```tsx
function Card() {
  return (
    <View className="bg-surface border border-border rounded-lg p-4">
      <Text className="text-xs font-semibold tracking-wide text-success mb-2">
        STATUS LABEL
      </Text>
      <Text className="text-xl font-bold text-foreground mb-2">
        Card Title
      </Text>
      <Text className="text-base leading-normal text-muted mb-4">
        Card description with normal line height.
      </Text>
      <Text className="text-sm font-semibold text-primary">
        Action Link
      </Text>
    </View>
  )
}
```

### Form Elements
```tsx
function FormField() {
  return (
    <View className="mb-4">
      <Text className="text-sm font-semibold text-foreground mb-2">
        Field Label
      </Text>
      <TextInput className="text-base text-foreground" />
      <Text className="text-xs text-muted mt-1">
        Helper text for additional guidance.
      </Text>
    </View>
  )
}
```

## File Structure

```
types/
  typography.ts           # TypeScript type definitions
utils/
  typography.ts           # Typography tokens and utilities
  typography.config.js    # Tailwind configuration
  useTypography.ts        # React hook for typography
components/examples/
  TypographySystemDemo.tsx    # Demo showing all styles
  TypographyUsageExamples.tsx # Practical usage examples
```

## Integration with Design System

The typography system works seamlessly with:
- **Color System**: Text colors adapt to light/dark themes
- **Spacing System**: Consistent margins and padding
- **Component Library**: Pre-styled components with typography
- **Accessibility**: WCAG compliant contrast and sizing

## Next Steps

After implementing typography:
1. **Spacing System** - Consistent margins, padding, and layout
2. **Icon System** - Standardized iconography with proper sizing
3. **Component Library** - Reusable components using typography
4. **Animation System** - Consistent motion and transitions
