/**
 * Spacing System Demo Component
 * Demonstrates usage of the design system spacing
 */

import { ScrollView, Text, View } from 'react-native'
import type { SemanticSpacing, SpacingScale } from '~/types/spacing'
import { useColors } from '~/utils/useColors'
import { useSpacing } from '~/utils/useSpacing'

interface SpacingSwatchProps {
  spacingName: string
  value: number
  label: string
  description?: string
  usage: readonly string[]
}

function SpacingSwatch({ spacingName, value, label, description, usage }: SpacingSwatchProps) {
  return (
    <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1">
          <Text className="text-sm font-semibold text-foreground">{label}</Text>
          <Text className="text-xs text-muted">{spacingName}</Text>
          {description && <Text className="text-xs text-muted mt-1">{description}</Text>}
        </View>
        <View className="ml-4">
          <Text className="text-xs text-muted">{value}px</Text>
        </View>
      </View>

      {/* Visual representation */}
      <View className="mb-3">
        <View className="flex-row items-center">
          <View
            className="bg-primary rounded"
            style={{
              width: Math.max(value, 4),
              height: 16,
            }}
          />
          <Text className="text-xs text-muted ml-2">{value}px</Text>
        </View>
      </View>

      {/* Usage examples */}
      <View>
        <Text className="text-xs font-medium text-foreground mb-1">Usage:</Text>
        <View className="flex-row flex-wrap">
          {usage.map((use) => (
            <View key={use} className="bg-muted/20 px-2 py-1 rounded mr-2 mb-1">
              <Text className="text-xs text-muted">{use}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

function SpacingScaleSection() {
  const { getValue } = useSpacing()

  const spacingItems = [
    {
      key: '0',
      label: 'None',
      description: 'Reset spacing',
      usage: ['Reset spacing', 'Remove margins/padding'],
    },
    {
      key: '0.5',
      label: 'Hairline',
      description: 'Fine adjustments',
      usage: ['Fine adjustments', 'Border spacing'],
    },
    {
      key: '1',
      label: 'Minimal',
      description: 'Tight spacing',
      usage: ['Minimal spacing', 'Icon padding'],
    },
    {
      key: '1.5',
      label: 'Compact',
      description: 'Small adjustments',
      usage: ['Small adjustments', 'Compact layouts'],
    },
    {
      key: '2',
      label: 'Base Unit',
      description: 'Foundation spacing',
      usage: ['Base unit', 'Small padding'],
    },
    {
      key: '3',
      label: 'Small',
      description: 'Component spacing',
      usage: ['Small components', 'Form field spacing'],
    },
    {
      key: '4',
      label: 'Standard',
      description: 'Default spacing',
      usage: ['Standard padding', 'Button padding'],
    },
    {
      key: '5',
      label: 'Medium',
      description: 'Content spacing',
      usage: ['Medium spacing', 'List item spacing'],
    },
    {
      key: '6',
      label: 'Large',
      description: 'Section spacing',
      usage: ['Large padding', 'Section spacing'],
    },
    {
      key: '8',
      label: 'Extra Large',
      description: 'Layout spacing',
      usage: ['Large spacing', 'Component separation'],
    },
    {
      key: '10',
      label: 'Huge',
      description: 'Major spacing',
      usage: ['Section spacing', 'Large components'],
    },
    {
      key: '12',
      label: 'Massive',
      description: 'Page spacing',
      usage: ['Large section spacing', 'Page margins'],
    },
    {
      key: '16',
      label: 'Giant',
      description: 'Section separation',
      usage: ['Very large spacing', 'Page sections'],
    },
    {
      key: '20',
      label: 'Enormous',
      description: 'Major sections',
      usage: ['Huge spacing', 'Major page sections'],
    },
    {
      key: '24',
      label: 'Colossal',
      description: 'Page-level spacing',
      usage: ['Massive spacing', 'Page-level separation'],
    },
    {
      key: '32',
      label: 'Maximum',
      description: 'Hero sections',
      usage: ['Maximum spacing', 'Hero sections'],
    },
  ] as const

  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">Spacing Scale (8px Grid)</Text>
      {spacingItems.map((item) => {
        const value = getValue(item.key as any)
        return (
          <SpacingSwatch
            key={item.key}
            spacingName={item.key}
            value={value}
            label={item.label}
            description={item.description}
            usage={item.usage}
          />
        )
      })}
    </View>
  )
}

function SemanticSpacingSection() {
  const { getValue } = useSpacing()

  const semanticItems = [
    {
      key: 'none',
      label: 'None',
      description: 'No spacing',
      usage: ['Reset spacing', 'Remove margins/padding'],
    },
    {
      key: 'xs',
      label: 'Extra Small',
      description: 'Minimal spacing',
      usage: ['Minimal spacing', 'Icon padding'],
    },
    {
      key: 'sm',
      label: 'Small',
      description: 'Tight spacing',
      usage: ['Base unit', 'Small padding'],
    },
    {
      key: 'md',
      label: 'Medium',
      description: 'Standard spacing',
      usage: ['Standard padding', 'Button padding'],
    },
    {
      key: 'lg',
      label: 'Large',
      description: 'Generous spacing',
      usage: ['Large padding', 'Section spacing'],
    },
    {
      key: 'xl',
      label: 'Extra Large',
      description: 'Large spacing',
      usage: ['Large spacing', 'Component separation'],
    },
    {
      key: '2xl',
      label: '2X Large',
      description: 'Very large spacing',
      usage: ['Large section spacing', 'Page margins'],
    },
    {
      key: '3xl',
      label: '3X Large',
      description: 'Huge spacing',
      usage: ['Very large spacing', 'Page sections'],
    },
    {
      key: '4xl',
      label: '4X Large',
      description: 'Maximum spacing',
      usage: ['Massive spacing', 'Page-level separation'],
    },
  ] as const

  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">Semantic Spacing</Text>
      {semanticItems.map((item) => {
        const value = getValue(item.key as any)
        return (
          <SpacingSwatch
            key={item.key}
            spacingName={item.key}
            value={value}
            label={item.label}
            description={item.description}
            usage={item.usage}
          />
        )
      })}
    </View>
  )
}

function ComponentSpacingSection() {
  const { component } = useSpacing()

  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">Component Spacing</Text>

      {/* Button spacing */}
      <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
        <Text className="text-lg font-semibold text-foreground mb-3">Button Spacing</Text>
        <View className="space-y-2">
          <Text className="text-sm text-muted">Small: {component.button.padding.sm}px padding</Text>
          <Text className="text-sm text-muted">
            Medium: {component.button.padding.md}px padding
          </Text>
          <Text className="text-sm text-muted">Large: {component.button.padding.lg}px padding</Text>
          <Text className="text-sm text-muted">Gap: {component.button.gap}px</Text>
        </View>
      </View>

      {/* Card spacing */}
      <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
        <Text className="text-lg font-semibold text-foreground mb-3">Card Spacing</Text>
        <View className="space-y-2">
          <Text className="text-sm text-muted">Padding: {component.card.padding}px</Text>
          <Text className="text-sm text-muted">Gap: {component.card.gap}px</Text>
          <Text className="text-sm text-muted">Margin: {component.card.margin}px</Text>
        </View>
      </View>

      {/* Form spacing */}
      <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
        <Text className="text-lg font-semibold text-foreground mb-3">Form Spacing</Text>
        <View className="space-y-2">
          <Text className="text-sm text-muted">Field Gap: {component.form.fieldGap}px</Text>
          <Text className="text-sm text-muted">Label Gap: {component.form.labelGap}px</Text>
          <Text className="text-sm text-muted">Section Gap: {component.form.sectionGap}px</Text>
        </View>
      </View>

      {/* List spacing */}
      <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
        <Text className="text-lg font-semibold text-foreground mb-3">List Spacing</Text>
        <View className="space-y-2">
          <Text className="text-sm text-muted">Item Gap: {component.list.itemGap}px</Text>
          <Text className="text-sm text-muted">Section Gap: {component.list.sectionGap}px</Text>
        </View>
      </View>

      {/* Navigation spacing */}
      <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
        <Text className="text-lg font-semibold text-foreground mb-3">Navigation Spacing</Text>
        <View className="space-y-2">
          <Text className="text-sm text-muted">Item Gap: {component.navigation.itemGap}px</Text>
          <Text className="text-sm text-muted">
            Section Gap: {component.navigation.sectionGap}px
          </Text>
          <Text className="text-sm text-muted">Padding: {component.navigation.padding}px</Text>
        </View>
      </View>
    </View>
  )
}

function NativeWindExamples() {
  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">NativeWind Usage Examples</Text>

      <View className="space-y-4">
        {/* Padding examples */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Padding Examples:</Text>
          <View className="space-y-3">
            <View className="p-2 bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-2 (8px all sides)</Text>
            </View>
            <View className="px-4 py-2 bg-primary/20 rounded">
              <Text className="text-sm text-foreground">
                px-4 py-2 (16px horizontal, 8px vertical)
              </Text>
            </View>
            <View className="p-6 bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-6 (24px all sides)</Text>
            </View>
          </View>
        </View>

        {/* Margin examples */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Margin Examples:</Text>
          <View className="space-y-3">
            <View className="bg-primary/20 rounded">
              <View className="m-2 p-2 bg-primary/40 rounded">
                <Text className="text-sm text-foreground">m-2 (8px margin)</Text>
              </View>
            </View>
            <View className="bg-primary/20 rounded">
              <View className="mx-4 my-2 p-2 bg-primary/40 rounded">
                <Text className="text-sm text-foreground">
                  mx-4 my-2 (16px horizontal, 8px vertical)
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Gap examples */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Gap Examples:</Text>
          <View className="space-y-3">
            <View className="flex-row gap-2">
              <View className="flex-1 p-2 bg-primary/20 rounded">
                <Text className="text-xs text-foreground">gap-2</Text>
              </View>
              <View className="flex-1 p-2 bg-primary/20 rounded">
                <Text className="text-xs text-foreground">8px gap</Text>
              </View>
            </View>
            <View className="flex-row gap-4">
              <View className="flex-1 p-2 bg-primary/20 rounded">
                <Text className="text-xs text-foreground">gap-4</Text>
              </View>
              <View className="flex-1 p-2 bg-primary/20 rounded">
                <Text className="text-xs text-foreground">16px gap</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Semantic spacing examples */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Semantic Spacing:</Text>
          <View className="space-y-3">
            <View className="p-xs bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-xs (4px)</Text>
            </View>
            <View className="p-sm bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-sm (8px)</Text>
            </View>
            <View className="p-md bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-md (16px)</Text>
            </View>
            <View className="p-lg bg-primary/20 rounded">
              <Text className="text-sm text-foreground">p-lg (24px)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function SpacingSystemDemo() {
  const { background } = useColors()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Spacing System</Text>

      <SpacingScaleSection />
      <SemanticSpacingSection />
      <ComponentSpacingSection />
      <NativeWindExamples />

      <View className="h-20" />
    </ScrollView>
  )
}
