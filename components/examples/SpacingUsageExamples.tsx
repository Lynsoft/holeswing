/**
 * Spacing Usage Examples
 * Demonstrates practical usage of the spacing system in real components
 */

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useColors } from '~/utils/useColors'
import { useSpacing } from '~/utils/useSpacing'

// Example Card Layout with Proper Spacing
function CardLayoutExample() {
  const { card } = useSpacing()

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Card Layout Example</Text>
      <View className="space-y-4">
        {/* Standard card with system spacing */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-2">Product Card</Text>
          <Text className="text-base text-muted mb-4">
            This card uses the standard card padding ({card.padding}px) and gap ({card.gap}px) from
            our spacing system.
          </Text>
          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-1 bg-primary p-3 rounded">
              <Text className="text-white text-center font-medium">Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 border border-border rounded">
              <Text className="text-foreground text-center font-medium">Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Compact card */}
        <View className="bg-surface border border-border rounded-lg p-3">
          <Text className="text-base font-semibold text-foreground mb-1">Compact Card</Text>
          <Text className="text-sm text-muted mb-3">Uses smaller spacing for dense layouts.</Text>
          <TouchableOpacity className="bg-secondary p-2 rounded">
            <Text className="text-white text-center text-sm font-medium">Quick Action</Text>
          </TouchableOpacity>
        </View>

        {/* Spacious card */}
        <View className="bg-surface border border-border rounded-lg p-6">
          <Text className="text-xl font-bold text-foreground mb-3">Spacious Card</Text>
          <Text className="text-base text-muted mb-6">
            Uses larger spacing for important content that needs breathing room.
          </Text>
          <View className="space-y-3">
            <TouchableOpacity className="bg-primary p-4 rounded">
              <Text className="text-white text-center font-semibold">Primary Action</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-border p-4 rounded">
              <Text className="text-foreground text-center font-medium">Secondary Action</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

// Example Form Layout with Spacing
function FormLayoutExample() {
  const { form } = useSpacing()

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Form Layout Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        <Text className="text-xl font-semibold text-foreground mb-6">Contact Form</Text>

        {/* Form section with proper spacing */}
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
            <Text className="text-sm font-semibold text-foreground mb-2">Message</Text>
            <View className="border border-border rounded-lg p-3 h-20">
              <Text className="text-base text-muted">Enter your message</Text>
            </View>
          </View>
        </View>

        {/* Form actions with section gap */}
        <View className="mt-6 space-y-3">
          <TouchableOpacity className="bg-primary p-4 rounded-lg">
            <Text className="text-white text-center font-semibold">Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-primary text-center font-medium">Cancel</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 p-3 bg-muted/10 rounded-lg">
          <Text className="text-xs text-muted">
            Form uses field gap: {form.fieldGap}px, label gap: {form.labelGap}px, section gap:{' '}
            {form.sectionGap}px
          </Text>
        </View>
      </View>
    </View>
  )
}

// Example List Layout with Spacing
function ListLayoutExample() {
  const { list } = useSpacing()

  const items = [
    { id: 1, title: 'First Item', description: 'Description for the first item' },
    { id: 2, title: 'Second Item', description: 'Description for the second item' },
    { id: 3, title: 'Third Item', description: 'Description for the third item' },
  ]

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">List Layout Example</Text>
      <View className="bg-surface border border-border rounded-lg p-4">
        <Text className="text-lg font-semibold text-foreground mb-4">Settings</Text>

        {/* List with proper item spacing */}
        <View className="space-y-3">
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              className={`p-3 rounded-lg border border-border ${
                index < items.length - 1 ? 'mb-0' : ''
              }`}>
              <Text className="text-base font-medium text-foreground">{item.title}</Text>
              <Text className="text-sm text-muted mt-1">{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-6 p-3 bg-muted/10 rounded-lg">
          <Text className="text-xs text-muted">
            List uses item gap: {list.itemGap}px, section gap: {list.sectionGap}px
          </Text>
        </View>
      </View>
    </View>
  )
}

// Example Button Spacing
function ButtonSpacingExample() {
  const { button } = useSpacing()

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Button Spacing Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        <Text className="text-lg font-semibold text-foreground mb-4">Button Sizes</Text>

        <View className="space-y-4">
          {/* Small buttons */}
          <View>
            <Text className="text-sm font-medium text-foreground mb-2">Small Buttons</Text>
            <View className="flex-row gap-2">
              <TouchableOpacity className="bg-primary px-3 py-2 rounded">
                <Text className="text-white text-sm font-medium">Small</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-secondary px-3 py-2 rounded">
                <Text className="text-white text-sm font-medium">Small</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Medium buttons */}
          <View>
            <Text className="text-sm font-medium text-foreground mb-2">Medium Buttons</Text>
            <View className="flex-row gap-2">
              <TouchableOpacity className="bg-primary px-4 py-3 rounded">
                <Text className="text-white text-base font-medium">Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-secondary px-4 py-3 rounded">
                <Text className="text-white text-base font-medium">Medium</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Large buttons */}
          <View>
            <Text className="text-sm font-medium text-foreground mb-2">Large Buttons</Text>
            <View className="space-y-2">
              <TouchableOpacity className="bg-primary px-6 py-4 rounded">
                <Text className="text-white text-lg font-semibold text-center">Large Button</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-secondary px-6 py-4 rounded">
                <Text className="text-white text-lg font-semibold text-center">Large Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-6 p-3 bg-muted/10 rounded-lg">
          <Text className="text-xs text-muted">
            Button padding - Small: {button.padding.sm}px, Medium: {button.padding.md}px, Large:{' '}
            {button.padding.lg}px
          </Text>
        </View>
      </View>
    </View>
  )
}

// Example Grid Layout with Spacing
function GridLayoutExample() {
  const { grid } = useSpacing()

  return (
    <View className="mb-8">
      <Text className="text-2xl font-bold mb-4 text-foreground">Grid Layout Example</Text>
      <View className="bg-surface border border-border rounded-lg p-6">
        <Text className="text-lg font-semibold text-foreground mb-4">Product Grid</Text>

        {/* Grid with different gap sizes */}
        <View className="space-y-6">
          <View>
            <Text className="text-sm font-medium text-foreground mb-3">Small Gap (16px)</Text>
            <View className="flex-row gap-4">
              <View className="flex-1 bg-primary/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 1</Text>
              </View>
              <View className="flex-1 bg-primary/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 2</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-sm font-medium text-foreground mb-3">Medium Gap (24px)</Text>
            <View className="flex-row gap-6">
              <View className="flex-1 bg-secondary/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 1</Text>
              </View>
              <View className="flex-1 bg-secondary/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 2</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-sm font-medium text-foreground mb-3">Large Gap (32px)</Text>
            <View className="flex-row gap-8">
              <View className="flex-1 bg-accent/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 1</Text>
              </View>
              <View className="flex-1 bg-accent/20 p-4 rounded">
                <Text className="text-sm text-foreground text-center">Item 2</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-6 p-3 bg-muted/10 rounded-lg">
          <Text className="text-xs text-muted">
            Grid gaps - Small: {grid.gap.sm}px, Medium: {grid.gap.md}px, Large: {grid.gap.lg}px
          </Text>
        </View>
      </View>
    </View>
  )
}

export default function SpacingUsageExamples() {
  const { background } = useColors()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Spacing Usage Examples</Text>

      <CardLayoutExample />
      <FormLayoutExample />
      <ListLayoutExample />
      <ButtonSpacingExample />
      <GridLayoutExample />

      <View className="h-20" />
    </ScrollView>
  )
}
