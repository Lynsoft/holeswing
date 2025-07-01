/**
 * Typography Usage Examples
 * Demonstrates practical usage of the typography system in real components
 */

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useColors } from '~/utils/useColors'

// Example Article Component
function ArticleExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Article Layout Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        {/* Article header */}
        <Text className="text-xs font-semibold tracking-widest text-muted mb-2">
          TECHNOLOGY • 5 MIN READ
        </Text>
        <Text className="text-3xl font-bold leading-tight text-foreground mb-4">
          The Future of Mobile Development with React Native
        </Text>
        <Text className="text-sm text-muted mb-6">Published on March 15, 2024 by John Doe</Text>

        {/* Article content */}
        <Text className="text-lg leading-relaxed text-foreground mb-4">
          React Native continues to evolve as one of the most popular frameworks for cross-platform
          mobile development. With its latest updates and improvements, developers can build
          high-performance applications that feel truly native.
        </Text>

        <Text className="text-base leading-relaxed text-foreground mb-4">
          The framework's ability to share code between iOS and Android while maintaining
          platform-specific optimizations makes it an ideal choice for teams looking to maximize
          their development efficiency without compromising on user experience.
        </Text>

        <Text className="text-base leading-relaxed text-foreground mb-6">
          In this article, we'll explore the latest features and best practices that are shaping the
          future of React Native development.
        </Text>

        {/* Call to action */}
        <TouchableOpacity className="bg-primary p-4 rounded-lg">
          <Text className="text-base font-semibold text-center text-white">Read Full Article</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// Example Card Component with Typography
function CardExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Card Components Example</Text>
      <View className="space-y-4">
        {/* Feature card */}
        <View className="bg-surface border border-border rounded-lg p-6">
          <Text className="text-xs font-semibold tracking-wide text-success mb-2">NEW FEATURE</Text>
          <Text className="text-xl font-bold text-foreground mb-3">Advanced Typography System</Text>
          <Text className="text-base leading-normal text-muted mb-4">
            A comprehensive typography system with Figma integration, semantic styles, and full
            NativeWind support for consistent text styling across your app.
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity className="bg-primary px-4 py-2 rounded mr-3">
              <Text className="text-sm font-semibold text-white">Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm font-medium text-primary">View Docs</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats card */}
        <View className="bg-surface border border-border rounded-lg p-6">
          <Text className="text-sm font-semibold text-foreground mb-4">Performance Metrics</Text>
          <View className="flex-row justify-between">
            <View className="flex-1 mr-4">
              <Text className="text-3xl font-bold text-foreground">98%</Text>
              <Text className="text-sm text-muted">User Satisfaction</Text>
            </View>
            <View className="flex-1 mr-4">
              <Text className="text-3xl font-bold text-foreground">2.1s</Text>
              <Text className="text-sm text-muted">Load Time</Text>
            </View>
            <View className="flex-1">
              <Text className="text-3xl font-bold text-foreground">99.9%</Text>
              <Text className="text-sm text-muted">Uptime</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

// Example Form Component
function FormExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Form Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        <Text className="text-xl font-semibold text-foreground mb-6">Create Account</Text>

        {/* Form fields */}
        <View className="space-y-4">
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Full Name</Text>
            <View className="border border-border rounded-lg p-3">
              <Text className="text-base text-muted">Enter your full name</Text>
            </View>
          </View>

          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Email Address</Text>
            <View className="border border-border rounded-lg p-3">
              <Text className="text-base text-muted">Enter your email</Text>
            </View>
            <Text className="text-xs text-muted mt-1">
              We'll never share your email with anyone else.
            </Text>
          </View>

          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">Password</Text>
            <View className="border border-border rounded-lg p-3">
              <Text className="text-base text-muted">Enter your password</Text>
            </View>
            <Text className="text-xs text-error mt-1">
              Password must be at least 8 characters long.
            </Text>
          </View>
        </View>

        {/* Form actions */}
        <View className="mt-6 space-y-3">
          <TouchableOpacity className="bg-primary p-4 rounded-lg">
            <Text className="text-base font-semibold text-center text-white">Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-center text-primary">
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// Example Navigation Component
function NavigationExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Navigation Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        {/* Tab navigation */}
        <View className="flex-row border-b border-border mb-4">
          <TouchableOpacity className="flex-1 pb-3 border-b-2 border-primary">
            <Text className="text-sm font-semibold text-center text-primary">Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 pb-3">
            <Text className="text-sm font-medium text-center text-muted">Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 pb-3">
            <Text className="text-sm font-medium text-center text-muted">Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Breadcrumb */}
        <View className="flex-row items-center mb-4">
          <Text className="text-sm text-muted">Home</Text>
          <Text className="text-sm text-muted mx-2">›</Text>
          <Text className="text-sm text-muted">Dashboard</Text>
          <Text className="text-sm text-muted mx-2">›</Text>
          <Text className="text-sm font-medium text-foreground">Overview</Text>
        </View>

        {/* Menu items */}
        <View className="space-y-3">
          <TouchableOpacity className="flex-row items-center p-3 rounded-lg bg-primary/10">
            <View className="flex-1">
              <Text className="text-base font-semibold text-foreground">Dashboard</Text>
              <Text className="text-sm text-muted">View your main dashboard</Text>
            </View>
            <Text className="text-sm text-primary">Active</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-3 rounded-lg">
            <View className="flex-1">
              <Text className="text-base font-medium text-foreground">Projects</Text>
              <Text className="text-sm text-muted">Manage your projects</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-3 rounded-lg">
            <View className="flex-1">
              <Text className="text-base font-medium text-foreground">Team</Text>
              <Text className="text-sm text-muted">Collaborate with your team</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// Example Typography Scale Demonstration
function TypographyScaleExample() {
  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Typography Scale in Action</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        <Text className="text-5xl font-bold text-foreground mb-2">Hero</Text>
        <Text className="text-4xl font-bold text-foreground mb-2">Display</Text>
        <Text className="text-3xl font-bold text-foreground mb-2">Heading 1</Text>
        <Text className="text-2xl font-bold text-foreground mb-2">Heading 2</Text>
        <Text className="text-xl font-bold text-foreground mb-2">Heading 3</Text>
        <Text className="text-lg font-semibold text-foreground mb-2">Title Large</Text>
        <Text className="text-base font-semibold text-foreground mb-2">Title Base</Text>
        <Text className="text-base font-normal text-foreground mb-2">Body Text</Text>
        <Text className="text-sm font-normal text-muted mb-2">Small Text</Text>
        <Text className="text-xs font-medium text-muted">Caption Text</Text>
      </View>
    </View>
  )
}

export default function TypographyUsageExamples() {
  const { background } = useColors()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Typography Usage Examples</Text>

      <ArticleExample />
      <CardExample />
      <FormExample />
      <NavigationExample />
      <TypographyScaleExample />

      <View className="h-20" />
    </ScrollView>
  )
}
