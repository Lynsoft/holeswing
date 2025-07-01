/**
 * Typography System Demo Component
 * Demonstrates usage of the design system typography
 */

import { ScrollView, Text, View } from 'react-native'
import type { FigmaTypographyStyles, SemanticTypography } from '~/types/typography'
import { useColors } from '~/utils/useColors'
import { useTypography } from '~/utils/useTypography'

interface TypographySwatchProps {
  styleName: string
  label: string
  description?: string
  example?: string
}

function TypographySwatch({ styleName, label, description, example }: TypographySwatchProps) {
  const { getStyleByName } = useTypography()

  const token = getStyleByName(styleName as keyof FigmaTypographyStyles | keyof SemanticTypography)
  const style = token
    ? {
        fontFamily:
          token.fontFamily === 'inter'
            ? 'Inter'
            : token.fontFamily === 'monospace'
              ? 'Courier New'
              : 'System',
        fontSize: token.fontSize,
        fontWeight: String(token.fontWeight) as
          | 'normal'
          | 'bold'
          | '100'
          | '200'
          | '300'
          | '400'
          | '500'
          | '600'
          | '700'
          | '800'
          | '900',
        lineHeight:
          typeof token.lineHeight === 'number'
            ? token.lineHeight * token.fontSize
            : Number(token.lineHeight) * token.fontSize,
      }
    : null

  return (
    <View className="mb-4 p-4 bg-surface border border-border rounded-lg">
      <View className="flex-row justify-between items-start mb-2">
        <View className="flex-1">
          <Text className="text-sm font-semibold text-foreground">{label}</Text>
          <Text className="text-xs text-muted">{styleName}</Text>
          {description && <Text className="text-xs text-muted mt-1">{description}</Text>}
        </View>
        {token && (
          <View className="ml-4">
            <Text className="text-xs text-muted">
              {token.fontSize}px • {token.fontWeight}
            </Text>
          </View>
        )}
      </View>
      <Text style={style} className="text-foreground">
        {example || 'The quick brown fox jumps over the lazy dog'}
      </Text>
    </View>
  )
}

function FigmaStylesSection() {
  const figmaStyles: Array<{
    key: keyof FigmaTypographyStyles
    label: string
    description: string
    example: string
  }> = [
    {
      key: 'large-36',
      label: 'Large 36',
      description: 'Display text, hero headlines',
      example: 'Hero Headline',
    },
    {
      key: 'large-28',
      label: 'Large 28',
      description: 'Large display text, section headers',
      example: 'Section Header',
    },
    {
      key: 'heading-1',
      label: 'Heading 1',
      description: 'Main page titles',
      example: 'Page Title',
    },
    {
      key: 'heading-2',
      label: 'Heading 2',
      description: 'Section headings',
      example: 'Section Heading',
    },
    {
      key: 'heading-3',
      label: 'Heading 3',
      description: 'Subsection headings',
      example: 'Subsection Heading',
    },
    {
      key: 'heading-4',
      label: 'Heading 4',
      description: 'Card titles, component headings',
      example: 'Component Heading',
    },
    {
      key: 'heading-5',
      label: 'Heading 5',
      description: 'Small headings, labels',
      example: 'Small Heading',
    },
    {
      key: 'title-20',
      label: 'Title 20',
      description: 'Large titles, important labels',
      example: 'Important Title',
    },
    {
      key: 'title-16',
      label: 'Title 16',
      description: 'Button text, form labels',
      example: 'Button Text',
    },
    {
      key: 'title-14',
      label: 'Title 14',
      description: 'Small buttons, tabs',
      example: 'Tab Label',
    },
    {
      key: 'title-12',
      label: 'Title 12',
      description: 'Captions, metadata',
      example: 'Caption Text',
    },
    {
      key: 'title-10',
      label: 'Title 10',
      description: 'Overlines, small labels',
      example: 'OVERLINE',
    },
    {
      key: 'text-20',
      label: 'Text 20',
      description: 'Large body text, descriptions',
      example: 'Large body text for important content and descriptions.',
    },
    {
      key: 'text-16',
      label: 'Text 16',
      description: 'Default body text',
      example: 'Default body text for most content and paragraphs.',
    },
    {
      key: 'text-14',
      label: 'Text 14',
      description: 'Small body text, secondary content',
      example: 'Small body text for secondary content and details.',
    },
    {
      key: 'text-12',
      label: 'Text 12',
      description: 'Fine print, helper text',
      example: 'Fine print and helper text for additional information.',
    },
    {
      key: 'text-10',
      label: 'Text 10',
      description: 'Smallest text, timestamps',
      example: 'Smallest text for timestamps and minimal content.',
    },
  ]

  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">Figma Typography Styles</Text>
      {figmaStyles.map((style) => (
        <TypographySwatch
          key={style.key}
          styleName={style.key}
          label={style.label}
          description={style.description}
          example={style.example}
        />
      ))}
    </View>
  )
}

function SemanticStylesSection() {
  const semanticStyles: Array<{
    key: keyof SemanticTypography
    label: string
    description: string
    example: string
  }> = [
    {
      key: 'display',
      label: 'Display',
      description: 'Largest text for hero sections',
      example: 'Display Text',
    },
    {
      key: 'h1',
      label: 'Heading 1',
      description: 'Main page headings',
      example: 'Main Heading',
    },
    {
      key: 'h2',
      label: 'Heading 2',
      description: 'Section headings',
      example: 'Section Heading',
    },
    {
      key: 'h3',
      label: 'Heading 3',
      description: 'Subsection headings',
      example: 'Subsection Heading',
    },
    {
      key: 'h4',
      label: 'Heading 4',
      description: 'Component headings',
      example: 'Component Heading',
    },
    {
      key: 'h5',
      label: 'Heading 5',
      description: 'Small headings',
      example: 'Small Heading',
    },
    {
      key: 'h6',
      label: 'Heading 6',
      description: 'Smallest headings',
      example: 'Smallest Heading',
    },
    {
      key: 'body',
      label: 'Body',
      description: 'Default body text',
      example: 'This is the default body text used for most content.',
    },
    {
      key: 'bodyLarge',
      label: 'Body Large',
      description: 'Large body text',
      example: 'This is large body text for important content.',
    },
    {
      key: 'bodySmall',
      label: 'Body Small',
      description: 'Small body text',
      example: 'This is small body text for secondary content.',
    },
    {
      key: 'button',
      label: 'Button',
      description: 'Button text',
      example: 'Button Text',
    },
    {
      key: 'caption',
      label: 'Caption',
      description: 'Image captions, helper text',
      example: 'Caption text for images and helper information.',
    },
    {
      key: 'overline',
      label: 'Overline',
      description: 'Overline text, categories',
      example: 'OVERLINE TEXT',
    },
    {
      key: 'code',
      label: 'Code',
      description: 'Code snippets, monospace',
      example: 'const example = "code";',
    },
    {
      key: 'label',
      label: 'Label',
      description: 'Form labels, UI labels',
      example: 'Form Label',
    },
  ]

  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">Semantic Typography</Text>
      {semanticStyles.map((style) => (
        <TypographySwatch
          key={style.key}
          styleName={style.key}
          label={style.label}
          description={style.description}
          example={style.example}
        />
      ))}
    </View>
  )
}

function NativeWindExamples() {
  return (
    <View className="mb-6">
      <Text className="text-2xl font-bold mb-4 text-foreground">NativeWind Usage Examples</Text>

      <View className="space-y-4">
        {/* Font sizes */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Font Sizes:</Text>
          <View className="space-y-2">
            <Text className="text-xs text-foreground">Extra Small (xs) - 10px</Text>
            <Text className="text-sm text-foreground">Small (sm) - 12px</Text>
            <Text className="text-base text-foreground">Base (base) - 14px</Text>
            <Text className="text-lg text-foreground">Large (lg) - 16px</Text>
            <Text className="text-xl text-foreground">Extra Large (xl) - 20px</Text>
            <Text className="text-2xl text-foreground">2X Large (2xl) - 22px</Text>
            <Text className="text-3xl text-foreground">3X Large (3xl) - 24px</Text>
            <Text className="text-4xl text-foreground">4X Large (4xl) - 28px</Text>
            <Text className="text-5xl text-foreground">5X Large (5xl) - 36px</Text>
          </View>
        </View>

        {/* Font weights */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Font Weights:</Text>
          <View className="space-y-2">
            <Text className="text-base font-normal text-foreground">Normal Weight (400)</Text>
            <Text className="text-base font-medium text-foreground">Medium Weight (500)</Text>
            <Text className="text-base font-semibold text-foreground">Semibold Weight (600)</Text>
            <Text className="text-base font-bold text-foreground">Bold Weight (700)</Text>
          </View>
        </View>

        {/* Line heights */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Line Heights:</Text>
          <View className="space-y-3">
            <Text className="text-base leading-tight text-foreground">
              Tight line height for compact text that needs to save space.
            </Text>
            <Text className="text-base leading-normal text-foreground">
              Normal line height for most body text and readable content.
            </Text>
            <Text className="text-base leading-relaxed text-foreground">
              Relaxed line height for improved readability in longer paragraphs.
            </Text>
          </View>
        </View>

        {/* Letter spacing */}
        <View className="p-4 bg-surface border border-border rounded-lg">
          <Text className="text-lg font-semibold mb-3 text-foreground">Letter Spacing:</Text>
          <View className="space-y-2">
            <Text className="text-base tracking-tight text-foreground">Tight letter spacing</Text>
            <Text className="text-base tracking-normal text-foreground">Normal letter spacing</Text>
            <Text className="text-base tracking-wide text-foreground">Wide letter spacing</Text>
            <Text className="text-sm tracking-widest text-foreground">WIDEST FOR OVERLINES</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function TypographySystemDemo() {
  const { background } = useColors()

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: background }}
      showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold mb-6 text-foreground">Typography System</Text>

      <FigmaStylesSection />
      <SemanticStylesSection />
      <NativeWindExamples />

      <View className="h-20" />
    </ScrollView>
  )
}
