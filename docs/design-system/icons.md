# Icon System Documentation

## Overview

Our icon system provides a comprehensive set of icons using Expo Vector Icons with semantic naming, ensuring consistent iconography across the entire React Native application. The system includes multiple icon families, standardized sizing, and seamless integration with our color and spacing systems.

## Icon Library: Expo Vector Icons

### Why Expo Vector Icons?
- **Already Available** - No additional dependencies needed
- **Multiple Icon Families** - 13 different icon families to choose from
- **React Native Optimized** - Built specifically for React Native/Expo
- **Consistent API** - Same interface across all icon families
- **Tree Shaking** - Only includes icons you actually use
- **TypeScript Support** - Full type safety for icon names
- **Platform Consistency** - Works identically on iOS, Android, and Web

### Available Icon Families
- **Ionicons** - Modern, clean icons (primary choice)
- **MaterialIcons** - Google's Material Design icons
- **MaterialCommunityIcons** - Extended Material Design icons
- **FontAwesome** & **FontAwesome5** - Comprehensive icon library
- **Feather** - Minimalist, stroke-based icons
- **AntDesign** - Ant Design icon set
- **Entypo** - Classic icon collection
- **EvilIcons** - Simple line icons
- **Foundation** - Zurb Foundation icons
- **Octicons** - GitHub's icon set
- **SimpleLineIcons** - Simple line-based icons
- **Zocial** - Social media icons

## Icon Sizes

### Size Scale (Aligned with Spacing System)
- **xs (12px)** - Small inline icons
- **sm (16px)** - Default text icons
- **md (20px)** - Standard UI icons (default)
- **lg (24px)** - Prominent icons
- **xl (32px)** - Large feature icons
- **2xl (48px)** - Hero/display icons
- **3xl (64px)** - Maximum size icons

### Usage Guidelines
- **xs/sm** - Inline with text, small UI elements
- **md** - Standard buttons, navigation, most UI icons
- **lg** - Tab navigation, prominent buttons
- **xl** - Feature highlights, large buttons
- **2xl/3xl** - Hero sections, splash screens

## Semantic Icon System

### Icon Categories
- **Navigation** - home, back, menu, search, filter
- **Action** - add, edit, delete, save, share
- **Content** - image, video, document, calendar
- **Communication** - email, phone, message, notification
- **Status** - success, warning, error, info, loading
- **Interface** - user, lock, eye, settings
- **Business** - cart, payment, money, tag
- **System** - wifi, battery, help, power

### Semantic Names
Instead of remembering specific icon names from different families, use semantic names:

```tsx
// Semantic (recommended)
<Icon name="home" size="md" color="primary" />
<Icon name="search" size="lg" color="muted" />
<Icon name="success" size="md" color="success" />

// Direct (when needed)
<Icon family="Ionicons" name="home-outline" size="md" />
```

## Usage

### Basic Icon Component

```tsx
import Icon from '~/components/ui/Icon'

function MyComponent() {
  return (
    <View>
      {/* Semantic icon usage */}
      <Icon name="home" size="md" color="primary" />
      
      {/* With interaction */}
      <Icon 
        name="menu" 
        size="lg" 
        color="foreground"
        onPress={() => openMenu()}
        accessibilityLabel="Open menu"
      />
      
      {/* Direct icon family usage */}
      <Icon 
        family="MaterialIcons" 
        name="favorite" 
        size="xl" 
        color="error" 
      />
    </View>
  )
}
```

### Icon Variants

```tsx
import { NavigationIcon, ButtonIcon, StatusIcon, IconButton } from '~/components/ui/Icon'

function IconVariants() {
  return (
    <View>
      {/* Navigation icons (with focus states) */}
      <NavigationIcon name="home" focused={true} />
      <NavigationIcon name="search" focused={false} />
      
      {/* Button icons (themed for button contexts) */}
      <ButtonIcon name="add" variant="primary" />
      <ButtonIcon name="edit" variant="secondary" />
      
      {/* Status icons (with semantic colors) */}
      <StatusIcon status="success" />
      <StatusIcon status="error" />
      
      {/* Interactive icon buttons */}
      <IconButton 
        name="heart" 
        size="lg" 
        color="error"
        onPress={() => toggleFavorite()}
      />
    </View>
  )
}
```

### With useIcons Hook

```tsx
import { useIcons } from '~/utils/useIcons'

function MyComponent() {
  const { 
    createIconProps, 
    getNavigationIconProps,
    getButtonIconProps,
    getSizeValue 
  } = useIcons()
  
  // Create icon props programmatically
  const homeIconProps = createIconProps('home', {
    size: 'lg',
    color: 'primary',
    onPress: () => navigateHome()
  })
  
  return (
    <View>
      <Icon {...homeIconProps} />
      
      {/* Navigation icon with focus state */}
      <Icon {...getNavigationIconProps('search', true)} />
      
      {/* Button icon with variant */}
      <Icon {...getButtonIconProps('add', 'primary')} />
    </View>
  )
}
```

## Integration with Design System

### Colors Integration
Icons automatically work with the color system:

```tsx
// Semantic colors
<Icon name="success" color="success" />
<Icon name="warning" color="warning" />
<Icon name="error" color="error" />

// Theme colors
<Icon name="user" color="primary" />
<Icon name="settings" color="muted" />

// Custom colors
<Icon name="heart" color="#FF6B6B" />
```

### Spacing Integration
Icons work seamlessly with spacing:

```tsx
<View className="flex-row items-center gap-2">
  <Icon name="user" size="sm" color="muted" />
  <Text className="text-base">Profile</Text>
</View>

<View className="p-4">
  <Icon name="star" size="xl" color="warning" />
</View>
```

### Typography Integration
Icons sized to match text:

```tsx
<Text className="text-lg flex-row items-center">
  <Icon name="star" size="lg" color="warning" />
  <Text className="ml-2">Featured Course</Text>
</Text>
```

## Accessibility

### Guidelines
- **Interactive Icons**: Minimum 44px touch target
- **Accessibility Labels**: Always provide for screen readers
- **Color Independence**: Icons work without color (shape/outline)
- **Semantic Meaning**: Clear icon-to-function mapping

### Implementation
```tsx
// Interactive icon with proper accessibility
<IconButton
  name="menu"
  size="lg"
  onPress={openMenu}
  accessibilityLabel="Open navigation menu"
  accessibilityHint="Opens the main navigation drawer"
/>

// Decorative icon (no accessibility label needed)
<Icon name="star" size="sm" color="warning" />

// Informative icon (needs label)
<Icon 
  name="warning" 
  size="md" 
  color="warning"
  accessibilityLabel="Warning: Check your input"
/>
```

## Examples

### App Header
```tsx
function AppHeader() {
  return (
    <View className="bg-primary p-4 flex-row items-center justify-between">
      <IconButton name="menu" size="lg" color="white" onPress={openMenu} />
      <Text className="text-white text-lg font-semibold">Golf Field</Text>
      <View className="flex-row gap-2">
        <IconButton name="search" size="lg" color="white" onPress={openSearch} />
        <IconButton name="notification" size="lg" color="white" onPress={openNotifications} />
      </View>
    </View>
  )
}
```

### Tab Navigation
```tsx
function TabBar() {
  const tabs = [
    { name: 'home', label: 'Home', focused: true },
    { name: 'search', label: 'Search', focused: false },
    { name: 'calendar', label: 'Schedule', focused: false },
    { name: 'user', label: 'Profile', focused: false },
  ]

  return (
    <View className="flex-row bg-surface border-t border-border">
      {tabs.map(tab => (
        <TouchableOpacity key={tab.name} className="flex-1 items-center py-3">
          <NavigationIcon name={tab.name} focused={tab.focused} />
          <Text className={`text-xs mt-1 ${tab.focused ? 'text-primary' : 'text-muted'}`}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
```

### Action Buttons
```tsx
function ActionButtons() {
  return (
    <View className="space-y-3">
      <TouchableOpacity className="bg-primary p-4 rounded-lg flex-row items-center justify-center gap-2">
        <ButtonIcon name="add" variant="primary" />
        <Text className="text-white font-semibold">Book Tee Time</Text>
      </TouchableOpacity>
      
      <View className="flex-row gap-3">
        <TouchableOpacity className="flex-1 border border-border p-3 rounded-lg flex-row items-center justify-center gap-2">
          <ButtonIcon name="map" variant="secondary" />
          <Text className="text-foreground font-medium">View Map</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 border border-border p-3 rounded-lg flex-row items-center justify-center gap-2">
          <ButtonIcon name="share" variant="secondary" />
          <Text className="text-foreground font-medium">Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
```

### Status Cards
```tsx
function StatusCard({ status, title, message }) {
  return (
    <View className={`bg-surface border rounded-lg p-4 flex-row gap-3 border-l-4 border-l-${status}`}>
      <StatusIcon status={status} />
      <View className="flex-1">
        <Text className="text-base font-semibold text-foreground mb-1">{title}</Text>
        <Text className="text-sm text-muted">{message}</Text>
      </View>
    </View>
  )
}
```

### Settings List
```tsx
function SettingsList() {
  const settings = [
    { icon: 'user', label: 'Profile Settings' },
    { icon: 'notification', label: 'Notifications' },
    { icon: 'lock', label: 'Privacy & Security' },
    { icon: 'help', label: 'Help & Support' },
  ]

  return (
    <View className="bg-surface border border-border rounded-lg">
      {settings.map((item, index) => (
        <TouchableOpacity 
          key={item.icon}
          className={`p-4 flex-row items-center gap-3 ${
            index < settings.length - 1 ? 'border-b border-border' : ''
          }`}
        >
          <Icon name={item.icon} size="lg" color="primary" />
          <Text className="flex-1 text-base font-medium text-foreground">{item.label}</Text>
          <Icon name="forward" size="sm" color="muted" />
        </TouchableOpacity>
      ))}
    </View>
  )
}
```

## File Structure

```
types/
  icons.ts                    # TypeScript type definitions
utils/
  icons.ts                    # Icon tokens and utilities
  useIcons.ts                 # React hook for icon management
components/ui/
  Icon.tsx                    # Main icon component and variants
components/examples/
  IconSystemDemo.tsx          # Demo showing all icons
  IconUsageExamples.tsx       # Practical usage examples
```

## Best Practices

1. **Use Semantic Names** - Prefer semantic names over direct icon names
2. **Consistent Sizing** - Use the standardized size scale
3. **Proper Accessibility** - Always provide labels for interactive/informative icons
4. **Color Integration** - Use design system colors for consistency
5. **Touch Targets** - Ensure interactive icons meet 44px minimum
6. **Context Appropriate** - Choose icon sizes appropriate for context
7. **Performance** - Icons are optimized and tree-shaken automatically

## Next Steps

With the complete design system foundation (Colors, Typography, Spacing, Icons):
1. **Component Library** - Build reusable components using all design tokens
2. **Animation System** - Add consistent motion and transitions
3. **Layout Templates** - Create pre-built layouts using the design system
4. **Theme Variants** - Extend with additional theme variations
