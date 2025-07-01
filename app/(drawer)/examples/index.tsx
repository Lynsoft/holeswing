/**
 * Design System Examples Overview
 * Central hub for all design system examples and documentation
 */

import { router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Container } from '~/components/Container'
import Icon from '~/components/ui/Icon'
import { useColors } from '~/utils/useColors'

interface ExampleCardProps {
  title: string
  description: string
  icon: string
  route: string
  color: string
}

function ExampleCard({ title, description, icon, route, color }: ExampleCardProps) {
  return (
    <TouchableOpacity
      className="bg-surface border border-border rounded-lg p-4 mb-4"
      onPress={() => router.push(route as any)}>
      <View className="flex-row items-start gap-4">
        <View className={`w-12 h-12 rounded-lg items-center justify-center bg-${color}/10`}>
          <Icon name={icon as any} size="lg" color={color} />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-foreground mb-1">{title}</Text>
          <Text className="text-sm text-muted leading-relaxed">{description}</Text>
        </View>
        <Icon name="forward" size="sm" color="muted" />
      </View>
    </TouchableOpacity>
  )
}

export default function ExamplesOverview() {
  const { background } = useColors()

  const examples = [
    {
      title: 'Color System',
      description:
        'Comprehensive color palette with semantic naming, theme support, and accessibility guidelines.',
      icon: 'image',
      route: '/examples/colors',
      color: 'primary',
    },
    {
      title: 'Typography System',
      description:
        'Complete text styling system with font families, sizes, weights, and responsive scaling.',
      icon: 'document',
      route: '/examples/typography',
      color: 'secondary',
    },
    {
      title: 'Spacing System',
      description: '8px grid-based spacing system for consistent layouts and component spacing.',
      icon: 'add',
      route: '/examples/spacing',
      color: 'success',
    },
    {
      title: 'Icon System',
      description:
        'Semantic icon library with 70+ icons, multiple families, and accessibility support.',
      icon: 'star',
      route: '/examples/icons',
      color: 'warning',
    },
  ]

  return (
    <Container>
      <ScrollView
        className="flex-1 p-4"
        style={{ backgroundColor: background }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-foreground mb-2">Design System Examples</Text>
          <Text className="text-base text-muted leading-relaxed">
            Explore our comprehensive design system components, patterns, and guidelines. Each
            section includes live examples, usage patterns, and implementation details.
          </Text>
        </View>

        {/* Quick Stats */}
        <View className="bg-surface border border-border rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-foreground mb-3">System Overview</Text>
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-primary">50+</Text>
              <Text className="text-xs text-muted">Colors</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-secondary">12</Text>
              <Text className="text-xs text-muted">Text Styles</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-success">32</Text>
              <Text className="text-xs text-muted">Spacing Values</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-warning">70+</Text>
              <Text className="text-xs text-muted">Icons</Text>
            </View>
          </View>
        </View>

        {/* Example Cards */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-foreground mb-4">Explore Components</Text>
          {examples.map((example) => (
            <ExampleCard key={example.title} {...example} />
          ))}
        </View>

        {/* Design Principles */}
        <View className="bg-surface border border-border rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-foreground mb-3">Design Principles</Text>
          <View className="space-y-3">
            <View className="flex-row items-start gap-3">
              <Icon name="check" size="sm" color="success" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-foreground">Consistency</Text>
                <Text className="text-xs text-muted">
                  Unified visual language across all components
                </Text>
              </View>
            </View>
            <View className="flex-row items-start gap-3">
              <Icon name="check" size="sm" color="success" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-foreground">Accessibility</Text>
                <Text className="text-xs text-muted">
                  WCAG compliant with proper contrast and touch targets
                </Text>
              </View>
            </View>
            <View className="flex-row items-start gap-3">
              <Icon name="check" size="sm" color="success" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-foreground">Scalability</Text>
                <Text className="text-xs text-muted">
                  Flexible system that grows with your application
                </Text>
              </View>
            </View>
            <View className="flex-row items-start gap-3">
              <Icon name="check" size="sm" color="success" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-foreground">Performance</Text>
                <Text className="text-xs text-muted">
                  Optimized for React Native with minimal overhead
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Getting Started */}
        <View className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
          <View className="flex-row items-center gap-2 mb-3">
            <Icon name="info" size="md" color="primary" />
            <Text className="text-lg font-semibold text-primary">Getting Started</Text>
          </View>
          <Text className="text-sm text-foreground leading-relaxed mb-3">
            Each design system component includes TypeScript types, usage examples, and integration
            guidelines. Start with the color system to understand the foundation, then explore
            typography, spacing, and icons.
          </Text>
          <Text className="text-xs text-muted">
            All components are built with React Native best practices and include accessibility
            support.
          </Text>
        </View>

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </Container>
  )
}
