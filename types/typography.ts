/**
 * Design System Typography Types
 * Generated from Figma design tokens
 */

// Font families available in the design system
export type FontFamily = 'inter' | 'system' | 'monospace'

// Font weights from Figma tokens
export type FontWeight = 400 | 500 | 600 | 700

// Font weight names for easier usage
export type FontWeightName = 'regular' | 'medium' | 'semibold' | 'bold'

// Font sizes from Figma tokens
export type FontSize = 10 | 12 | 14 | 16 | 20 | 22 | 24 | 28 | 36

// Typography categories from Figma
export type TypographyCategory = 'large' | 'heading' | 'title' | 'text'

// Typography scale names for Tailwind/NativeWind
export type TypographyScale =
  | 'xs' // 10px
  | 'sm' // 12px
  | 'base' // 14px
  | 'lg' // 16px
  | 'xl' // 20px
  | '2xl' // 22px
  | '3xl' // 24px
  | '4xl' // 28px
  | '5xl' // 36px

// Line height values (optimized for readability)
export type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

// Letter spacing values
export type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'

// Typography token structure
export interface TypographyToken {
  fontFamily: FontFamily
  fontSize: FontSize
  fontWeight: FontWeight
  lineHeight: string | number
  letterSpacing?: string | number
}

// Figma typography styles mapped to our system
export interface FigmaTypographyStyles {
  // Large styles
  'large-36': TypographyToken
  'large-28': TypographyToken

  // Heading styles
  'heading-1': TypographyToken // 24px
  'heading-2': TypographyToken // 22px
  'heading-3': TypographyToken // 20px
  'heading-4': TypographyToken // 16px
  'heading-5': TypographyToken // 14px

  // Title styles
  'title-20': TypographyToken
  'title-16': TypographyToken
  'title-14': TypographyToken
  'title-12': TypographyToken
  'title-10': TypographyToken

  // Text styles
  'text-20': TypographyToken
  'text-16': TypographyToken
  'text-14': TypographyToken
  'text-12': TypographyToken
  'text-10': TypographyToken
}

// Semantic typography roles
export interface SemanticTypography {
  // Display text (largest)
  display: TypographyToken

  // Headings
  h1: TypographyToken
  h2: TypographyToken
  h3: TypographyToken
  h4: TypographyToken
  h5: TypographyToken
  h6: TypographyToken

  // Body text
  body: TypographyToken
  bodyLarge: TypographyToken
  bodySmall: TypographyToken

  // UI text
  button: TypographyToken
  caption: TypographyToken
  overline: TypographyToken

  // Special purpose
  code: TypographyToken
  label: TypographyToken
}

// Complete typography system
export interface TypographySystem {
  fonts: {
    [K in FontFamily]: string
  }
  weights: {
    [K in FontWeightName]: FontWeight
  }
  sizes: {
    [K in TypographyScale]: number
  }
  lineHeights: {
    [K in LineHeight]: string | number
  }
  letterSpacing: {
    [K in LetterSpacing]: string
  }
  figmaStyles: FigmaTypographyStyles
  semantic: SemanticTypography
}

// Utility types for component props
export type TypographyProp =
  | keyof FigmaTypographyStyles
  | keyof SemanticTypography
  | TypographyScale

// NativeWind className typography utilities
export type TypographyClassName =
  | `text-${TypographyScale}`
  | `font-${FontWeightName}`
  | `leading-${LineHeight}`
  | `tracking-${LetterSpacing}`
  | `font-${FontFamily}`

// Typography accessibility levels
export type TypographyAccessibility = 'AA' | 'AAA'

// Typography contrast information
export interface TypographyContrast {
  ratio: number
  level: TypographyAccessibility | 'fail'
  normal: boolean
  large: boolean
}

// Typography metadata for design system documentation
export interface TypographyMeta {
  name: string
  category: TypographyCategory
  usage: string[]
  accessibility: {
    minSize: number
    recommendedContrast: number
  }
  examples: string[]
}
