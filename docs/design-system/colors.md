# Color System Documentation

## Overview

Our design system includes a comprehensive color palette extracted from Figma design tokens, providing consistent colors across the entire React Native application. The system supports both light and dark themes with automatic adaptation.

## Color Families

### Primary Color Families

#### Green Family
- **Usage**: Primary actions, success states, positive feedback
- **Tokens**: `green-10` through `green-70`, `green` (default)
- **Default**: `#21C17C`

#### Purple Family  
- **Usage**: Secondary actions, premium features, highlights
- **Tokens**: `purple-10` through `purple-70`, `purple` (default)
- **Default**: `#6E48BE`

#### Orange Family
- **Usage**: Accent colors, call-to-action, warnings
- **Tokens**: `orange-10` through `orange-70`, `orange` (default)
- **Default**: `#FFA340`

#### Red Family
- **Usage**: Error states, destructive actions, alerts
- **Tokens**: `red-10` through `red-70`, `red` (default)
- **Default**: `#E24955`

#### Blue Family
- **Usage**: Information, links, neutral actions
- **Tokens**: `blue-10` through `blue-70`, `blue` (default)
- **Default**: `#379FDC`

### Neutral Families

#### Black Family
- **Usage**: Text, borders, backgrounds
- **Tokens**: `black-10` through `black-50`, `black` (default)
- **Default**: `#000000`

#### White Family
- **Usage**: Backgrounds, text on dark surfaces
- **Tokens**: `white-50`, `white` (default)
- **Default**: `#FFFFFF`

## Semantic Colors

Semantic colors provide meaning-based color tokens that automatically adapt to light/dark themes:

- `primary` - Main brand color
- `secondary` - Secondary brand color  
- `accent` - Accent/highlight color
- `success` - Success states
- `warning` - Warning states
- `error` - Error states
- `info` - Information states
- `surface` - Card/surface backgrounds
- `background` - Page backgrounds
- `foreground` - Primary text color
- `muted` - Secondary text color
- `border` - Border colors

## Usage

### With NativeWind (Recommended)

```tsx
import { View, Text } from 'react-native'

function MyComponent() {
  return (
    <View className="bg-surface border border-border rounded-lg p-4">
      <Text className="text-foreground text-lg font-bold">
        Title
      </Text>
      <Text className="text-muted text-sm">
        Description text
      </Text>
      <View className="bg-primary p-3 rounded mt-4">
        <Text className="text-white text-center font-medium">
          Primary Button
        </Text>
      </View>
    </View>
  )
}
```

### With useColors Hook

```tsx
import { View, Text } from 'react-native'
import { useColors } from '~/utils/useColors'

function MyComponent() {
  const { primary, surface, foreground, getThemeColor } = useColors()
  
  return (
    <View style={{ backgroundColor: surface }}>
      <Text style={{ color: foreground }}>
        Dynamic theme-aware text
      </Text>
      <View style={{ 
        backgroundColor: getThemeColor('green', 'green-40') 
      }}>
        <Text style={{ color: 'white' }}>
          Theme-aware button
        </Text>
      </View>
    </View>
  )
}
```

### Color Intensities

Use numbered suffixes for different color intensities:

```tsx
// Light to dark variations
<View className="bg-green-10">Lightest green</View>
<View className="bg-green-20">Light green</View>
<View className="bg-green-30">Medium light green</View>
<View className="bg-green">Default green</View>
<View className="bg-green-40">Medium green</View>
<View className="bg-green-60">Dark green</View>
<View className="bg-green-70">Darkest green</View>
```

## Theme Support

### Automatic Theme Detection

The color system automatically detects the user's system color scheme:

```tsx
import { useColors } from '~/utils/useColors'

function MyComponent() {
  const { theme, isDark, isLight } = useColors()
  
  return (
    <View className={`${isDark ? 'bg-black' : 'bg-white'} flex-1`}>
      <Text className="text-foreground">
        Current theme: {theme}
      </Text>
    </View>
  )
}
```

### Manual Theme Colors

```tsx
import { colorUtils } from '~/utils/useColors'

// Access theme-specific colors
const lightColors = colorUtils.light
const darkColors = colorUtils.dark

// Use in StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: lightColors.background,
  },
  darkContainer: {
    backgroundColor: darkColors.background,
  },
})
```

## Accessibility

### Contrast Utilities

```tsx
import { colorUtils } from '~/utils/useColors'

// Check if color is light or dark
const isLight = colorUtils.isLightColor('#21C17C') // false

// Get appropriate contrast color
const contrastColor = colorUtils.getContrastColor('#21C17C') // white
```

### Best Practices

1. **Use semantic colors** for consistent theming
2. **Test contrast ratios** for accessibility compliance
3. **Provide dark mode alternatives** for all custom colors
4. **Use color intensities** for subtle variations
5. **Avoid hardcoded hex values** in components

## Examples

### Button Component

```tsx
import { TouchableOpacity, Text } from 'react-native'
import { useColors } from '~/utils/useColors'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'error'
  children: React.ReactNode
  onPress?: () => void
}

function Button({ variant = 'primary', children, onPress }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary', 
    error: 'bg-error',
  }
  
  return (
    <TouchableOpacity 
      className={`${variantClasses[variant]} p-4 rounded-lg`}
      onPress={onPress}
    >
      <Text className="text-white text-center font-medium">
        {children}
      </Text>
    </TouchableOpacity>
  )
}
```

### Card Component

```tsx
import { View, Text } from 'react-native'

interface CardProps {
  title: string
  description: string
  status?: 'success' | 'warning' | 'error'
}

function Card({ title, description, status }: CardProps) {
  const statusColors = {
    success: 'border-l-success bg-success/10',
    warning: 'border-l-warning bg-warning/10',
    error: 'border-l-error bg-error/10',
  }
  
  return (
    <View className={`
      bg-surface border border-border rounded-lg p-4
      ${status ? statusColors[status] : ''}
      ${status ? 'border-l-4' : ''}
    `}>
      <Text className="text-foreground text-lg font-bold mb-2">
        {title}
      </Text>
      <Text className="text-muted">
        {description}
      </Text>
    </View>
  )
}
```

## File Structure

```
types/
  colors.ts           # TypeScript type definitions
utils/
  colors.ts           # Color tokens and utilities
  colors.config.js    # Tailwind configuration
  useColors.ts        # React hook for color management
components/examples/
  ColorSystemDemo.tsx # Demo component showing all colors
```

## Next Steps

After implementing the color system:

1. **Typography System** - Font families, sizes, weights
2. **Spacing System** - Consistent margins and padding
3. **Icon System** - Standardized iconography
4. **Component Library** - Reusable UI components
5. **Animation System** - Consistent motion design
