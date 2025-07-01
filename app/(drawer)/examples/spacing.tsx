/**
 * Spacing System Examples Screen
 * Showcases the design system spacing implementation
 */

import { ScrollView, View } from 'react-native'
import { Container } from '~/components/Container'
import SpacingSystemDemo from '~/components/examples/SpacingSystemDemo'
import SpacingUsageExamples from '~/components/examples/SpacingUsageExamples'
import { useColors } from '~/utils/useColors'

export default function SpacingExamplesScreen() {
  const { background } = useColors()

  return (
    <Container>
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: background }}
        showsVerticalScrollIndicator={false}>
        {/* Spacing System Demo */}
        <SpacingSystemDemo />

        {/* Divider */}
        <View className="h-px bg-border mx-4 my-8" />

        {/* Usage Examples */}
        <SpacingUsageExamples />

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </Container>
  )
}
