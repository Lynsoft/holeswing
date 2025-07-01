/**
 * Icon Usage Examples
 * Demonstrates practical usage of the icon system in real components
 */

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon, { ButtonIcon, IconButton, NavigationIcon, StatusIcon } from '~/components/ui/Icon'
import { useColors } from '~/utils/useColors'

// Example App Header with Icons
function AppHeaderExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">App Header Example</Text>
      <View className="bg-surface border border-border rounded-lg overflow-hidden">
        <View className="bg-primary p-4 flex-row items-center justify-between">
          <IconButton
            name="menu"
            size="lg"
            color="white"
            onPress={() => console.log('Menu pressed')}
            accessibilityLabel="Open menu"
          />
          <Text className="text-white text-lg font-semibold">Golf Field</Text>
          <View className="flex-row gap-2">
            <IconButton
              name="search"
              size="lg"
              color="white"
              onPress={() => console.log('Search pressed')}
              accessibilityLabel="Search"
            />
            <IconButton
              name="notification"
              size="lg"
              color="white"
              onPress={() => console.log('Notifications pressed')}
              accessibilityLabel="Notifications"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

// Example Tab Navigation with Icons
function TabNavigationExample() {
  const tabs = [
    { name: 'home', label: 'Home', focused: true },
    { name: 'search', label: 'Search', focused: false },
    { name: 'calendar', label: 'Schedule', focused: false },
    { name: 'user', label: 'Profile', focused: false },
  ] as const

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Tab Navigation Example</Text>
      <View className="bg-surface border border-border rounded-lg overflow-hidden">
        <View className="flex-row border-t border-border bg-surface">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.name}
              className="flex-1 items-center py-3"
              onPress={() => console.log(`${tab.label} tab pressed`)}>
              <NavigationIcon name={tab.name} focused={tab.focused} />
              <Text
                className={`text-xs mt-1 ${
                  tab.focused ? 'text-primary font-medium' : 'text-muted'
                }`}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

// Example Action Buttons with Icons
function ActionButtonsExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Action Buttons Example</Text>
      <View className="bg-surface border border-border rounded-lg p-4">
        <Text className="text-lg font-semibold text-foreground mb-4">Course Actions</Text>

        <View className="space-y-3">
          {/* Primary actions */}
          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-1 bg-primary p-4 rounded-lg flex-row items-center justify-center gap-2">
              <ButtonIcon name="add" variant="primary" />
              <Text className="text-white font-semibold">Book Tee Time</Text>
            </TouchableOpacity>
          </View>

          {/* Secondary actions */}
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

          {/* Icon-only actions */}
          <View className="flex-row justify-center gap-4 pt-2">
            <IconButton
              name="heart"
              size="xl"
              color="error"
              onPress={() => console.log('Favorite pressed')}
              accessibilityLabel="Add to favorites"
            />
            <IconButton
              name="bookmark"
              size="xl"
              color="warning"
              onPress={() => console.log('Bookmark pressed')}
              accessibilityLabel="Bookmark course"
            />
            <IconButton
              name="phone"
              size="xl"
              color="success"
              onPress={() => console.log('Call pressed')}
              accessibilityLabel="Call course"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

// Example Status Cards with Icons
function StatusCardsExample() {
  const statusItems = [
    {
      status: 'success' as const,
      title: 'Booking Confirmed',
      message: 'Your tee time has been successfully booked for tomorrow at 9:00 AM.',
    },
    {
      status: 'warning' as const,
      title: 'Weather Alert',
      message: 'Rain is expected during your tee time. Consider rescheduling.',
    },
    {
      status: 'error' as const,
      title: 'Payment Failed',
      message: 'Unable to process payment. Please update your payment method.',
    },
    {
      status: 'info' as const,
      title: 'Course Update',
      message: 'Hole 7 is temporarily closed for maintenance.',
    },
  ]

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Status Cards Example</Text>
      <View className="space-y-3">
        {statusItems.map((item) => (
          <View
            key={item.title}
            className={`bg-surface border rounded-lg p-4 flex-row gap-3 ${
              item.status === 'success'
                ? 'border-l-4 border-l-success bg-success/5'
                : item.status === 'warning'
                  ? 'border-l-4 border-l-warning bg-warning/5'
                  : item.status === 'error'
                    ? 'border-l-4 border-l-error bg-error/5'
                    : 'border-l-4 border-l-info bg-info/5'
            }`}>
            <StatusIcon status={item.status} />
            <View className="flex-1">
              <Text className="text-base font-semibold text-foreground mb-1">{item.title}</Text>
              <Text className="text-sm text-muted">{item.message}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

// Example Settings List with Icons
function SettingsListExample() {
  const settingsItems = [
    { icon: 'user', label: 'Profile Settings', description: 'Manage your account information' },
    {
      icon: 'notification',
      label: 'Notifications',
      description: 'Configure notification preferences',
    },
    { icon: 'lock', label: 'Privacy & Security', description: 'Manage privacy settings' },
    { icon: 'payment', label: 'Payment Methods', description: 'Add or remove payment methods' },
    { icon: 'help', label: 'Help & Support', description: 'Get help and contact support' },
    { icon: 'info-circle', label: 'About', description: 'App version and legal information' },
  ] as const

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Settings List Example</Text>
      <View className="bg-surface border border-border rounded-lg overflow-hidden">
        {settingsItems.map((item, index) => (
          <TouchableOpacity
            key={item.icon}
            className={`p-4 flex-row items-center gap-3 ${
              index < settingsItems.length - 1 ? 'border-b border-border' : ''
            }`}
            onPress={() => console.log(`${item.label} pressed`)}>
            <Icon name={item.icon} size="lg" color="primary" />
            <View className="flex-1">
              <Text className="text-base font-medium text-foreground">{item.label}</Text>
              <Text className="text-sm text-muted">{item.description}</Text>
            </View>
            <Icon name="forward" size="sm" color="muted" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

// Example Course Features with Icons
function CourseFeaturesExample() {
  const features = [
    { icon: 'cart', label: 'Pro Shop', available: true },
    { icon: 'location', label: 'GPS Yardage', available: true },
    { icon: 'wifi', label: 'Free WiFi', available: true },
    { icon: 'cart', label: 'Cart Rental', available: false },
    { icon: 'gift', label: 'Lessons Available', available: true },
    { icon: 'phone', label: '24/7 Support', available: false },
  ] as const

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Course Features Example</Text>
      <View className="bg-surface border border-border rounded-lg p-4">
        <Text className="text-lg font-semibold text-foreground mb-4">Available Features</Text>
        <View className="flex-row flex-wrap gap-3">
          {features.map((feature) => (
            <View
              key={feature.label}
              className={`flex-row items-center gap-2 px-3 py-2 rounded-full border ${
                feature.available
                  ? 'bg-success/10 border-success/20'
                  : 'bg-muted/10 border-muted/20'
              }`}>
              <Icon name={feature.icon} size="sm" color={feature.available ? 'success' : 'muted'} />
              <Text
                className={`text-sm font-medium ${
                  feature.available ? 'text-success' : 'text-muted'
                }`}>
                {feature.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default function IconUsageExamples() {
  const { background } = useColors()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Icon Usage Examples</Text>

      <AppHeaderExample />
      <TabNavigationExample />
      <ActionButtonsExample />
      <StatusCardsExample />
      <SettingsListExample />
      <CourseFeaturesExample />

      <View className="h-20" />
    </ScrollView>
  )
}
