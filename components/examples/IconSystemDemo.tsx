/**
 * Icon System Demo Component
 * Demonstrates usage of the design system icons
 */

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon, { ButtonIcon, IconButton, NavigationIcon, StatusIcon } from '~/components/ui/Icon'
import type { IconCategory, IconSize, SemanticIconName } from '~/types/icons'
import { useColors } from '~/utils/useColors'
import { useIcons } from '~/utils/useIcons'

interface IconSwatchProps {
  name: SemanticIconName
  description: string
  usage: readonly string[]
  category: IconCategory
}

function IconSwatch({ name, description, usage, category }: IconSwatchProps) {
  return (
    <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
      <View className="flex-row items-start mb-3">
        <View className="mr-4">
          <Icon name={name} size="xl" color="foreground" />
        </View>
        <View className="flex-1">
          <Text className="text-base font-semibold text-foreground mb-1">{name}</Text>
          <Text className="text-sm text-muted mb-2">{description}</Text>
          <Text className="text-xs font-medium text-primary mb-2">{category}</Text>
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

      {/* Size variations */}
      <View className="mt-3">
        <Text className="text-xs font-medium text-foreground mb-2">Sizes:</Text>
        <View className="flex-row items-center gap-3">
          <Icon name={name} size="xs" color="muted" />
          <Icon name={name} size="sm" color="muted" />
          <Icon name={name} size="md" color="foreground" />
          <Icon name={name} size="lg" color="foreground" />
          <Icon name={name} size="xl" color="primary" />
        </View>
      </View>
    </View>
  )
}

function IconCategorySection({ category }: { category: IconCategory }) {
  const { getByCategory, system } = useIcons()
  const icons = getByCategory(category)

  const categoryLabels = {
    navigation: 'Navigation Icons',
    action: 'Action Icons',
    content: 'Content Icons',
    communication: 'Communication Icons',
    status: 'Status Icons',
    interface: 'Interface Icons',
    business: 'Business Icons',
    system: 'System Icons',
  }

  return (
    <View className="mb-8">
      <Text className="text-xl font-bold mb-4 text-foreground">{categoryLabels[category]}</Text>
      {icons.map((icon) => {
        // Find the semantic name for this icon
        const semanticName = Object.entries(system.semantic).find(
          ([, def]) => def === icon
        )?.[0] as SemanticIconName

        if (!semanticName) return null

        return (
          <IconSwatch
            key={semanticName}
            name={semanticName}
            description={icon.description}
            usage={icon.usage}
            category={icon.category}
          />
        )
      })}
    </View>
  )
}

function IconSizesSection() {
  const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
  const { getSizeValue } = useIcons()

  return (
    <View className="mb-8">
      <Text className="text-xl font-bold mb-4 text-foreground">Icon Sizes</Text>
      <View className="bg-surface border border-border rounded-lg p-4">
        {sizes.map((size) => (
          <View key={size} className="flex-row items-center justify-between mb-4 last:mb-0">
            <View className="flex-row items-center flex-1">
              <Icon name="star" size={size} color="primary" />
              <View className="ml-4">
                <Text className="text-base font-medium text-foreground">{size}</Text>
                <Text className="text-sm text-muted">{getSizeValue(size)}px</Text>
              </View>
            </View>
            <Text className="text-xs text-muted font-mono">size="{size}"</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function IconVariantsSection() {
  return (
    <View className="mb-8">
      <Text className="text-xl font-bold mb-4 text-foreground">Icon Variants</Text>

      <View className="space-y-4">
        {/* Navigation Icons */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">Navigation Icons</Text>
          <View className="flex-row gap-4">
            <NavigationIcon name="home" focused={false} />
            <NavigationIcon name="home" focused={true} />
            <NavigationIcon name="search" focused={false} />
            <NavigationIcon name="menu" focused={false} />
          </View>
        </View>

        {/* Button Icons */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">Button Icons</Text>
          <View className="flex-row gap-4">
            <View className="bg-primary p-3 rounded">
              <ButtonIcon name="add" variant="primary" />
            </View>
            <View className="bg-secondary p-3 rounded">
              <ButtonIcon name="edit" variant="primary" />
            </View>
            <View className="border border-border p-3 rounded">
              <ButtonIcon name="share" variant="secondary" />
            </View>
          </View>
        </View>

        {/* Status Icons */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">Status Icons</Text>
          <View className="flex-row gap-4">
            <StatusIcon status="success" />
            <StatusIcon status="warning" />
            <StatusIcon status="error" />
            <StatusIcon status="info" />
          </View>
        </View>

        {/* Interactive Icons */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">Interactive Icons</Text>
          <View className="flex-row gap-4">
            <IconButton
              name="heart"
              size="lg"
              color="error"
              onPress={() => console.log('Heart pressed')}
              accessibilityLabel="Like this item"
            />
            <IconButton
              name="bookmark"
              size="lg"
              color="warning"
              onPress={() => console.log('Bookmark pressed')}
              accessibilityLabel="Bookmark this item"
            />
            <IconButton
              name="share"
              size="lg"
              color="primary"
              onPress={() => console.log('Share pressed')}
              accessibilityLabel="Share this item"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

function IconUsageExamples() {
  return (
    <View className="mb-8">
      <Text className="text-xl font-bold mb-4 text-foreground">Usage Examples</Text>

      <View className="space-y-4">
        {/* With text */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">Icons with Text</Text>
          <View className="space-y-3">
            <View className="flex-row items-center gap-2">
              <Icon name="user" size="sm" color="muted" />
              <Text className="text-base text-foreground">Profile</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Icon name="settings" size="sm" color="muted" />
              <Text className="text-base text-foreground">Settings</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Icon name="help" size="sm" color="muted" />
              <Text className="text-base text-foreground">Help & Support</Text>
            </View>
          </View>
        </View>

        {/* In buttons */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">In Buttons</Text>
          <View className="space-y-3">
            <TouchableOpacity className="bg-primary p-3 rounded-lg flex-row items-center justify-center gap-2">
              <Icon name="add" size="md" color="white" />
              <Text className="text-white font-medium">Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-border p-3 rounded-lg flex-row items-center justify-center gap-2">
              <Icon name="share" size="md" color="foreground" />
              <Text className="text-foreground font-medium">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* In lists */}
        <View className="bg-surface border border-border rounded-lg p-4">
          <Text className="text-lg font-semibold text-foreground mb-3">In Lists</Text>
          <View className="space-y-3">
            <View className="flex-row items-center justify-between p-3 border border-border rounded">
              <View className="flex-row items-center gap-3">
                <Icon name="email" size="md" color="primary" />
                <Text className="text-base text-foreground">Email Notifications</Text>
              </View>
              <Icon name="forward" size="sm" color="muted" />
            </View>
            <View className="flex-row items-center justify-between p-3 border border-border rounded">
              <View className="flex-row items-center gap-3">
                <Icon name="lock" size="md" color="primary" />
                <Text className="text-base text-foreground">Privacy Settings</Text>
              </View>
              <Icon name="forward" size="sm" color="muted" />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function IconSystemDemo() {
  const { background } = useColors()
  const { categories } = useIcons()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Icon System</Text>

      <IconSizesSection />
      <IconVariantsSection />
      <IconUsageExamples />

      {/* Icon Categories */}
      {categories.map((category) => (
        <IconCategorySection key={category} category={category} />
      ))}

      <View className="h-20" />
    </ScrollView>
  )
}
