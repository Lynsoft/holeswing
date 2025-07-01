/**
 * Design System Typography Utilities
 * Extracted from Figma design tokens
 */

import type {
  FigmaTypographyStyles,
  FontFamily,
  FontWeight,
  FontWeightName,
  LetterSpacing,
  LineHeight,
  SemanticTypography,
  TypographyScale,
  TypographySystem,
  TypographyToken,
} from '~/types/typography'

// Font family mappings for React Native
export const fontFamilies: { [K in FontFamily]: string } = {
  inter: 'Inter',
  system: 'System',
  monospace: 'Courier New',
}

// Font weight mappings
export const fontWeights: { [K in FontWeightName]: FontWeight } = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

// Font size scale (matching Figma tokens)
export const fontSizes: { [K in TypographyScale]: number } = {
  xs: 10, // Text 10
  sm: 12, // Text 12, Title 12
  base: 14, // Text 14, Title 14, Heading 5
  lg: 16, // Text 16, Title 16, Heading 4
  xl: 20, // Text 20, Title 20, Heading 3
  '2xl': 22, // Heading 2
  '3xl': 24, // Heading 1
  '4xl': 28, // Large 28
  '5xl': 36, // Large 36
}

// Line height scale (optimized for readability)
export const lineHeights: { [K in LineHeight]: string | number } = {
  none: 1,
  tight: 1.1,
  snug: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
}

// Letter spacing scale
export const letterSpacing: { [K in LetterSpacing]: string } = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

// Figma typography styles mapped to our system
export const figmaTypographyStyles: FigmaTypographyStyles = {
  // Large styles (Display text)
  'large-36': {
    fontFamily: 'inter',
    fontSize: 36,
    fontWeight: 700,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  'large-28': {
    fontFamily: 'inter',
    fontSize: 28,
    fontWeight: 700,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },

  // Heading styles
  'heading-1': {
    fontFamily: 'inter',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.tight,
  },
  'heading-2': {
    fontFamily: 'inter',
    fontSize: 22,
    fontWeight: 700,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.tight,
  },
  'heading-3': {
    fontFamily: 'inter',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  'heading-4': {
    fontFamily: 'inter',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'heading-5': {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Title styles (Semi-bold)
  'title-20': {
    fontFamily: 'inter',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'title-16': {
    fontFamily: 'inter',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'title-14': {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'title-12': {
    fontFamily: 'inter',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide,
  },
  'title-10': {
    fontFamily: 'inter',
    fontSize: 10,
    fontWeight: 600,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide,
  },

  // Text styles (Regular)
  'text-20': {
    fontFamily: 'inter',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  'text-16': {
    fontFamily: 'inter',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  'text-14': {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'text-12': {
    fontFamily: 'inter',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  'text-10': {
    fontFamily: 'inter',
    fontSize: 10,
    fontWeight: 400,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
}

// Semantic typography mappings
export const semanticTypography: SemanticTypography = {
  // Display text (largest)
  display: figmaTypographyStyles['large-36'],

  // Headings
  h1: figmaTypographyStyles['heading-1'],
  h2: figmaTypographyStyles['heading-2'],
  h3: figmaTypographyStyles['heading-3'],
  h4: figmaTypographyStyles['heading-4'],
  h5: figmaTypographyStyles['heading-5'],
  h6: figmaTypographyStyles['title-14'],

  // Body text
  body: figmaTypographyStyles['text-16'],
  bodyLarge: figmaTypographyStyles['text-20'],
  bodySmall: figmaTypographyStyles['text-14'],

  // UI text
  button: figmaTypographyStyles['title-16'],
  caption: figmaTypographyStyles['text-12'],
  overline: figmaTypographyStyles['title-10'],

  // Special purpose
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  label: figmaTypographyStyles['title-14'],
}

// Complete typography system
export const typographySystem: TypographySystem = {
  fonts: fontFamilies,
  weights: fontWeights,
  sizes: fontSizes,
  lineHeights,
  letterSpacing,
  figmaStyles: figmaTypographyStyles,
  semantic: semanticTypography,
}

// Utility function to get typography style
export function getTypographyStyle(styleName: string): TypographyToken | null {
  // Check Figma styles first
  if (styleName in figmaTypographyStyles) {
    return figmaTypographyStyles[styleName as keyof FigmaTypographyStyles]
  }

  // Check semantic styles
  if (styleName in semanticTypography) {
    return semanticTypography[styleName as keyof SemanticTypography]
  }

  console.warn(`Typography style "${styleName}" not found`)
  return null
}

// Convert typography token to React Native style object
export function typographyTokenToStyle(token: TypographyToken) {
  return {
    fontFamily: fontFamilies[token.fontFamily],
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
    letterSpacing: typeof token.letterSpacing === 'string' ? 0 : token.letterSpacing || 0,
  }
}

// Export for Tailwind config
export const tailwindTypography = {
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
    system: ['system-ui', 'sans-serif'],
    mono: ['Courier New', 'monospace'],
  },
  fontSize: {
    xs: [`${fontSizes.xs}px`, { lineHeight: lineHeights.normal }],
    sm: [`${fontSizes.sm}px`, { lineHeight: lineHeights.normal }],
    base: [`${fontSizes.base}px`, { lineHeight: lineHeights.normal }],
    lg: [`${fontSizes.lg}px`, { lineHeight: lineHeights.normal }],
    xl: [`${fontSizes.xl}px`, { lineHeight: lineHeights.relaxed }],
    '2xl': [`${fontSizes['2xl']}px`, { lineHeight: lineHeights.snug }],
    '3xl': [`${fontSizes['3xl']}px`, { lineHeight: lineHeights.snug }],
    '4xl': [`${fontSizes['4xl']}px`, { lineHeight: lineHeights.tight }],
    '5xl': [`${fontSizes['5xl']}px`, { lineHeight: lineHeights.tight }],
  },
  fontWeight: {
    normal: fontWeights.regular,
    medium: fontWeights.medium,
    semibold: fontWeights.semibold,
    bold: fontWeights.bold,
  },
  lineHeight: lineHeights,
  letterSpacing,
}
