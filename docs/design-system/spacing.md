# Spacing System Documentation

## Overview

Our spacing system provides consistent spacing values based on an 8px grid system, ensuring harmonious layouts and improved visual hierarchy across the entire React Native application. The system includes both numerical scale values and semantic naming for different use cases.

## 8px Grid System

### Foundation
- **Base Unit**: 8px
- **Rationale**: 8px is divisible by many common screen densities and provides good balance between granularity and simplicity
- **Benefits**: Consistent spacing, improved visual rhythm, easier design-to-development handoff

### Scale Values
All spacing values are multiples or fractions of the 8px base unit:

- **0px**: No spacing (reset)
- **2px**: Hairline spacing (0.25 × 8px)
- **4px**: Minimal spacing (0.5 × 8px)
- **6px**: Compact spacing (0.75 × 8px)
- **8px**: Base unit (1 × 8px)
- **12px**: Small spacing (1.5 × 8px)
- **16px**: Standard spacing (2 × 8px)
- **20px**: Medium spacing (2.5 × 8px)
- **24px**: Large spacing (3 × 8px)
- **32px**: Extra large spacing (4 × 8px)
- **40px**: Huge spacing (5 × 8px)
- **48px**: Massive spacing (6 × 8px)
- **56px**: Giant spacing (7 × 8px)
- **64px**: Enormous spacing (8 × 8px)
- **80px**: Colossal spacing (10 × 8px)
- **96px**: Maximum spacing (12 × 8px)
- **128px**: Hero spacing (16 × 8px)

## Spacing Scale

### Numerical Scale (Tailwind-style)
- `0` - 0px
- `0.5` - 2px
- `1` - 4px
- `1.5` - 6px
- `2` - 8px
- `3` - 12px
- `4` - 16px
- `5` - 20px
- `6` - 24px
- `8` - 32px
- `10` - 40px
- `12` - 48px
- `14` - 56px
- `16` - 64px
- `20` - 80px
- `24` - 96px
- `32` - 128px

### Semantic Scale
- `none` - 0px (no spacing)
- `xs` - 4px (extra small)
- `sm` - 8px (small)
- `md` - 16px (medium)
- `lg` - 24px (large)
- `xl` - 32px (extra large)
- `2xl` - 48px (2x large)
- `3xl` - 64px (3x large)
- `4xl` - 96px (4x large)

## Component Spacing

### Button Spacing
- **Small**: 8px padding
- **Medium**: 12px padding
- **Large**: 16px padding
- **Gap**: 8px between elements

### Card Spacing
- **Padding**: 16px internal spacing
- **Gap**: 16px between card elements
- **Margin**: 16px external spacing

### Form Spacing
- **Field Gap**: 16px between form fields
- **Label Gap**: 8px between label and input
- **Section Gap**: 24px between form sections

### List Spacing
- **Item Gap**: 12px between list items
- **Section Gap**: 24px between list sections

### Navigation Spacing
- **Item Gap**: 4px between navigation items
- **Section Gap**: 16px between navigation sections
- **Padding**: 16px internal padding

## Layout Spacing

### Container Spacing
- **Mobile**: 16px padding
- **Tablet**: 24px padding
- **Desktop**: 32px padding

### Section Spacing
- **Small**: 32px between small sections
- **Medium**: 48px between medium sections
- **Large**: 64px between large sections

### Grid Spacing
- **Small**: 16px grid gap
- **Medium**: 24px grid gap
- **Large**: 32px grid gap

## Usage

### With NativeWind (Recommended)

```tsx
import { View, Text } from 'react-native'

function MyComponent() {
  return (
    <View className="p-4 m-2">
      {/* Padding and margin with scale values */}
      <View className="p-6 mb-4">
        <Text className="text-lg font-bold mb-2">Section Title</Text>
        <Text className="text-base mb-4">Content with proper spacing</Text>
      </View>
      
      {/* Semantic spacing */}
      <View className="p-md gap-sm">
        <Text className="text-base">Item 1</Text>
        <Text className="text-base">Item 2</Text>
        <Text className="text-base">Item 3</Text>
      </View>
      
      {/* Directional spacing */}
      <View className="px-4 py-6">
        <Text>Horizontal: 16px, Vertical: 24px</Text>
      </View>
    </View>
  )
}
```

### With useSpacing Hook

```tsx
import { View, Text } from 'react-native'
import { useSpacing } from '~/utils/useSpacing'

function MyComponent() {
  const { 
    getValue, 
    padding, 
    margin, 
    card, 
    form 
  } = useSpacing()
  
  return (
    <View style={padding('md')}>
      {/* Using spacing values */}
      <View style={{ 
        ...padding('lg'), 
        ...margin('sm', 'bottom') 
      }}>
        <Text>Content with spacing utilities</Text>
      </View>
      
      {/* Using component spacing */}
      <View style={padding(card.padding)}>
        <Text>Card with standard padding</Text>
      </View>
      
      {/* Using raw values */}
      <View style={{ 
        paddingHorizontal: getValue('4'),
        paddingVertical: getValue('6') 
      }}>
        <Text>Custom spacing combination</Text>
      </View>
    </View>
  )
}
```

### Spacing Combinations

```tsx
// Card layout
<View className="bg-surface border border-border rounded-lg p-4 m-2">
  <Text className="text-lg font-bold mb-3">Card Title</Text>
  <Text className="text-base text-muted mb-4">Card description</Text>
  <View className="flex-row gap-3">
    <TouchableOpacity className="flex-1 bg-primary p-3 rounded">
      <Text className="text-white text-center">Action</Text>
    </TouchableOpacity>
  </View>
</View>

// Form layout
<View className="space-y-4">
  <View>
    <Text className="text-sm font-semibold mb-2">Label</Text>
    <TextInput className="border border-border rounded p-3" />
  </View>
  <TouchableOpacity className="bg-primary p-4 rounded mt-6">
    <Text className="text-white text-center font-semibold">Submit</Text>
  </TouchableOpacity>
</View>

// List layout
<View className="space-y-3">
  {items.map(item => (
    <View key={item.id} className="p-4 bg-surface border border-border rounded">
      <Text className="font-medium">{item.title}</Text>
    </View>
  ))}
</View>
```

## Accessibility

### Touch Target Guidelines
- **Minimum touch target**: 44px × 44px
- **Recommended spacing**: 8px minimum between interactive elements
- **Large touch targets**: 48px × 48px for primary actions

### Text Spacing Guidelines
- **Minimum text spacing**: 8px between text elements
- **Paragraph spacing**: 16px between paragraphs
- **Section spacing**: 24px between content sections

### Best Practices
1. **Use consistent spacing** from the design system
2. **Maintain minimum touch targets** for accessibility
3. **Group related content** with smaller spacing
4. **Separate unrelated content** with larger spacing
5. **Test on different screen sizes** to ensure spacing works well

## Examples

### Article Layout
```tsx
function Article() {
  return (
    <View className="p-6">
      <Text className="text-3xl font-bold mb-4">Article Title</Text>
      <Text className="text-sm text-muted mb-6">Published date</Text>
      
      <Text className="text-lg leading-relaxed mb-4">
        Lead paragraph with proper spacing.
      </Text>
      
      <Text className="text-base leading-relaxed mb-6">
        Body paragraph with section spacing.
      </Text>
      
      <View className="flex-row gap-3 mt-8">
        <TouchableOpacity className="bg-primary px-6 py-3 rounded">
          <Text className="text-white font-semibold">Share</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-border px-6 py-3 rounded">
          <Text className="text-foreground font-medium">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
```

### Dashboard Layout
```tsx
function Dashboard() {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-6">Dashboard</Text>
      
      {/* Stats grid with proper spacing */}
      <View className="flex-row gap-4 mb-8">
        <View className="flex-1 bg-surface p-4 rounded-lg">
          <Text className="text-3xl font-bold">98%</Text>
          <Text className="text-sm text-muted">Success Rate</Text>
        </View>
        <View className="flex-1 bg-surface p-4 rounded-lg">
          <Text className="text-3xl font-bold">2.1s</Text>
          <Text className="text-sm text-muted">Load Time</Text>
        </View>
      </View>
      
      {/* Content sections */}
      <View className="space-y-6">
        <View className="bg-surface p-6 rounded-lg">
          <Text className="text-lg font-semibold mb-4">Recent Activity</Text>
          <View className="space-y-3">
            {activities.map(activity => (
              <View key={activity.id} className="flex-row items-center gap-3">
                <View className="w-2 h-2 bg-primary rounded-full" />
                <Text className="flex-1">{activity.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
```

## File Structure

```
types/
  spacing.ts           # TypeScript type definitions
utils/
  spacing.ts           # Spacing tokens and utilities
  spacing.config.js    # Tailwind configuration
  useSpacing.ts        # React hook for spacing
components/examples/
  SpacingSystemDemo.tsx    # Demo showing all spacing values
  SpacingUsageExamples.tsx # Practical usage examples
```

## Integration with Design System

The spacing system works seamlessly with:
- **Color System**: Consistent spacing with themed colors
- **Typography System**: Proper spacing between text elements
- **Component Library**: Pre-defined spacing for components
- **Layout System**: Consistent page and section spacing

## Next Steps

After implementing spacing:
1. **Icon System** - Standardized iconography with proper sizing
2. **Component Library** - Reusable components using all design tokens
3. **Animation System** - Consistent motion and transitions
4. **Layout Templates** - Pre-built layouts using the spacing system
