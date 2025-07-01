/**
 * Icon System Examples Screen
 * Showcases the design system icon implementation
 */

import { ScrollView, View } from 'react-native'
import { Container } from '~/components/Container'
import IconSystemDemo from '~/components/examples/IconSystemDemo'
import IconUsageExamples from '~/components/examples/IconUsageExamples'
import { useColors } from '~/utils/useColors'

export default function IconsExamplesScreen() {
  const { background } = useColors()

  return (
    <Container>
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: background }}
        showsVerticalScrollIndicator={false}>
        {/* Icon System Demo */}
        <IconSystemDemo />

        {/* Divider */}
        <View className="h-px bg-border mx-4 my-8" />

        {/* Usage Examples */}
        <IconUsageExamples />

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </Container>
  )
}
