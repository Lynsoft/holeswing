/**
 * Typography System Examples Screen
 * Showcases the design system typography implementation
 */

import { ScrollView, View } from 'react-native'
import { Container } from '~/components/Container'
import TypographySystemDemo from '~/components/examples/TypographySystemDemo'
import TypographyUsageExamples from '~/components/examples/TypographyUsageExamples'
import { useColors } from '~/utils/useColors'

export default function TypographyExamplesScreen() {
  const { background } = useColors()

  return (
    <Container>
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: background }}
        showsVerticalScrollIndicator={false}>
        {/* Typography System Demo */}
        <TypographySystemDemo />

        {/* Divider */}
        <View className="h-px bg-border mx-4 my-8" />

        {/* Usage Examples */}
        <TypographyUsageExamples />

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </Container>
  )
}
