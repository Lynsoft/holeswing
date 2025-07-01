/**
 * Color System Examples Screen
 * Showcases the design system color implementation
 */

import { ScrollView, View } from 'react-native'
import { Container } from '~/components/Container'
import ColorSystemDemo from '~/components/examples/ColorSystemDemo'
import ColorSystemUsage from '~/components/examples/ColorSystemUsage'
import { useColors } from '~/utils/useColors'

export default function ColorsExamplesScreen() {
  const { background } = useColors()

  return (
    <Container>
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: background }}
        showsVerticalScrollIndicator={false}>
        {/* Color System Demo */}
        <ColorSystemDemo />

        {/* Divider */}
        <View className="h-px bg-border mx-4 my-8" />

        {/* Usage Examples */}
        <ColorSystemUsage />

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </Container>
  )
}
