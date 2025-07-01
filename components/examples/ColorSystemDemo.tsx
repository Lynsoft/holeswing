/**
 * Color System Demo Component
 * Demonstrates usage of the design system colors
 */

import { ScrollView, Text, View } from 'react-native'
import type { ColorFamily, ColorProp } from '~/types/colors'
import { colorUtils, useColors } from '~/utils/useColors'

interface ColorSwatchProps {
  colorFamily: ColorFamily
  intensity?: number
  label: string
}

function ColorSwatch({ colorFamily, intensity, label }: ColorSwatchProps) {
  const { getColorValue } = useColors()

  const colorToken = intensity ? `${colorFamily}-${intensity}` : colorFamily
  const backgroundColor = getColorValue(colorToken as ColorProp)
  const textColor = colorUtils.getContrastColor(backgroundColor)

  return (
    <View className="m-1">
      <View
        className="w-20 h-20 rounded-lg items-center justify-center"
        style={{ backgroundColor }}>
        <Text className="text-xs font-medium text-center" style={{ color: textColor }}>
          {label}
        </Text>
      </View>
      <Text className="text-xs text-center mt-1 text-foreground">{colorToken}</Text>
    </View>
  )
}

function ColorFamilySection({ family }: { family: ColorFamily }) {
  const intensities =
    family === 'white' || family === 'transparent'
      ? [50]
      : family === 'black'
        ? [10, 20, 30, 40, 50]
        : [10, 20, 30, 40, 60, 70]

  return (
    <View className="mb-6">
      <Text className="text-lg font-bold mb-3 text-foreground capitalize">{family} Family</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {/* Default color */}
          <ColorSwatch colorFamily={family} label="Default" />

          {/* Intensity variations */}
          {intensities.map((intensity) => (
            <ColorSwatch
              key={intensity}
              colorFamily={family}
              intensity={intensity}
              label={`${intensity}`}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

function SemanticColorsSection() {
  const { semantic } = useColors()

  const semanticColors = [
    { key: 'primary', label: 'Primary' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'accent', label: 'Accent' },
    { key: 'success', label: 'Success' },
    { key: 'warning', label: 'Warning' },
    { key: 'error', label: 'Error' },
    { key: 'info', label: 'Info' },
  ] as const

  return (
    <View className="mb-6">
      <Text className="text-lg font-bold mb-3 text-foreground">Semantic Colors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {semanticColors.map(({ key, label }) => (
            <View key={key} className="m-1">
              <View
                className="w-20 h-20 rounded-lg items-center justify-center"
                style={{ backgroundColor: semantic[key] }}>
                <Text className="text-xs font-medium text-center text-white">{label}</Text>
              </View>
              <Text className="text-xs text-center mt-1 text-foreground">{key}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

function NativeWindExamples() {
  const { theme } = useColors()

  return (
    <View className="mb-6">
      <Text className="text-lg font-bold mb-3 text-foreground">NativeWind Usage Examples</Text>

      <View className="space-y-3">
        {/* Text colors */}
        <View>
          <Text className="text-sm font-medium mb-2 text-foreground">Text Colors:</Text>
          <View className="flex-row flex-wrap">
            <Text className="text-primary mr-4">Primary Text</Text>
            <Text className="text-secondary mr-4">Secondary Text</Text>
            <Text className="text-success mr-4">Success Text</Text>
            <Text className="text-error mr-4">Error Text</Text>
          </View>
        </View>

        {/* Background colors */}
        <View>
          <Text className="text-sm font-medium mb-2 text-foreground">Background Colors:</Text>
          <View className="flex-row flex-wrap">
            <View className="bg-primary p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Primary BG</Text>
            </View>
            <View className="bg-secondary p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Secondary BG</Text>
            </View>
            <View className="bg-success p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Success BG</Text>
            </View>
            <View className="bg-warning p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Warning BG</Text>
            </View>
          </View>
        </View>

        {/* Border colors */}
        <View>
          <Text className="text-sm font-medium mb-2 text-foreground">Border Colors:</Text>
          <View className="flex-row flex-wrap">
            <View className="border-2 border-primary p-2 rounded mr-2 mb-2">
              <Text className="text-primary text-xs">Primary Border</Text>
            </View>
            <View className="border-2 border-error p-2 rounded mr-2 mb-2">
              <Text className="text-error text-xs">Error Border</Text>
            </View>
          </View>
        </View>

        {/* Color intensities */}
        <View>
          <Text className="text-sm font-medium mb-2 text-foreground">Color Intensities:</Text>
          <View className="flex-row flex-wrap">
            <View className="bg-green-10 p-2 rounded mr-2 mb-2">
              <Text className="text-green-70 text-xs">Green 10</Text>
            </View>
            <View className="bg-green-30 p-2 rounded mr-2 mb-2">
              <Text className="text-green-70 text-xs">Green 30</Text>
            </View>
            <View className="bg-green p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Green Default</Text>
            </View>
            <View className="bg-green-70 p-2 rounded mr-2 mb-2">
              <Text className="text-white text-xs">Green 70</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mt-4 p-3 bg-surface rounded-lg border border-border">
        <Text className="text-sm text-foreground">
          Current theme: <Text className="font-bold">{theme}</Text>
        </Text>
        <Text className="text-xs text-muted mt-1">
          Colors automatically adapt to light/dark mode
        </Text>
      </View>
    </View>
  )
}

export default function ColorSystemDemo() {
  const { background } = useColors()

  const colorFamilies: ColorFamily[] = [
    'green',
    'purple',
    'orange',
    'red',
    'blue',
    'black',
    'white',
  ]

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-2xl font-bold mb-6 text-foreground">Design System Colors</Text>

      <SemanticColorsSection />

      {colorFamilies.map((family) => (
        <ColorFamilySection key={family} family={family} />
      ))}

      <NativeWindExamples />

      <View className="h-20" />
    </ScrollView>
  )
}
