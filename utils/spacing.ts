/**
 * Design System Spacing Utilities
 * Based on 8px grid system for consistent spacing
 */

import type {
  ComponentSpacing,
  LayoutSpacing,
  SemanticSpacing,
  SemanticSpacingTokens,
  SpacingAccessibility,
  SpacingScale,
  SpacingScaleTokens,
  SpacingSystem,
  SpacingToken,
  SpacingValue,
} from '~/types/spacing'

// Base spacing unit (8px grid)
export const SPACING_UNIT = 8

// Spacing scale values (8px grid system)
export const spacingValues: { [K in SpacingScale]: SpacingValue } = {
  '0': 0, // 0px
  '0.5': 2, // 2px
  '1': 4, // 4px
  '1.5': 6, // 6px
  '2': 8, // 8px
  '3': 12, // 12px
  '4': 16, // 16px
  '5': 20, // 20px
  '6': 24, // 24px
  '8': 32, // 32px
  '10': 40, // 40px
  '12': 48, // 48px
  '14': 56, // 56px
  '16': 64, // 64px
  '20': 80, // 80px
  '24': 96, // 96px
  '32': 128, // 128px
}

// Convert pixels to rem (assuming 16px base)
function pxToRem(px: number): string {
  return `${px / 16}rem`
}

// Spacing scale tokens with metadata
export const spacingScaleTokens: SpacingScaleTokens = {
  '0': {
    value: 0,
    rem: '0rem',
    category: 'component',
    usage: ['Reset spacing', 'Remove margins/padding'],
    examples: ['m-0', 'p-0'],
  },
  '0.5': {
    value: 2,
    rem: pxToRem(2),
    category: 'component',
    usage: ['Fine adjustments', 'Border spacing'],
    examples: ['p-0.5', 'gap-0.5'],
  },
  '1': {
    value: 4,
    rem: pxToRem(4),
    category: 'component',
    usage: ['Minimal spacing', 'Icon padding', 'Badge spacing'],
    examples: ['p-1', 'gap-1', 'mx-1'],
  },
  '1.5': {
    value: 6,
    rem: pxToRem(6),
    category: 'component',
    usage: ['Small adjustments', 'Compact layouts'],
    examples: ['py-1.5', 'px-1.5'],
  },
  '2': {
    value: 8,
    rem: pxToRem(8),
    category: 'component',
    usage: ['Base unit', 'Small padding', 'Tight spacing'],
    examples: ['p-2', 'gap-2', 'mb-2'],
  },
  '3': {
    value: 12,
    rem: pxToRem(12),
    category: 'component',
    usage: ['Small components', 'Form field spacing'],
    examples: ['p-3', 'gap-3', 'my-3'],
  },
  '4': {
    value: 16,
    rem: pxToRem(16),
    category: 'component',
    usage: ['Standard padding', 'Button padding', 'Card padding'],
    examples: ['p-4', 'px-4', 'gap-4'],
  },
  '5': {
    value: 20,
    rem: pxToRem(20),
    category: 'content',
    usage: ['Medium spacing', 'List item spacing'],
    examples: ['p-5', 'my-5', 'gap-5'],
  },
  '6': {
    value: 24,
    rem: pxToRem(24),
    category: 'content',
    usage: ['Large padding', 'Section spacing', 'Card spacing'],
    examples: ['p-6', 'mb-6', 'gap-6'],
  },
  '8': {
    value: 32,
    rem: pxToRem(32),
    category: 'layout',
    usage: ['Large spacing', 'Component separation'],
    examples: ['p-8', 'my-8', 'gap-8'],
  },
  '10': {
    value: 40,
    rem: pxToRem(40),
    category: 'layout',
    usage: ['Section spacing', 'Large components'],
    examples: ['p-10', 'mb-10', 'gap-10'],
  },
  '12': {
    value: 48,
    rem: pxToRem(48),
    category: 'layout',
    usage: ['Large section spacing', 'Page margins'],
    examples: ['p-12', 'my-12', 'gap-12'],
  },
  '14': {
    value: 56,
    rem: pxToRem(56),
    category: 'layout',
    usage: ['Extra large spacing', 'Major sections'],
    examples: ['p-14', 'mb-14'],
  },
  '16': {
    value: 64,
    rem: pxToRem(64),
    category: 'layout',
    usage: ['Very large spacing', 'Page sections'],
    examples: ['p-16', 'my-16'],
  },
  '20': {
    value: 80,
    rem: pxToRem(80),
    category: 'layout',
    usage: ['Huge spacing', 'Major page sections'],
    examples: ['p-20', 'mb-20'],
  },
  '24': {
    value: 96,
    rem: pxToRem(96),
    category: 'layout',
    usage: ['Massive spacing', 'Page-level separation'],
    examples: ['p-24', 'my-24'],
  },
  '32': {
    value: 128,
    rem: pxToRem(128),
    category: 'layout',
    usage: ['Maximum spacing', 'Hero sections'],
    examples: ['p-32', 'mb-32'],
  },
}

// Semantic spacing tokens
export const semanticSpacingTokens: SemanticSpacingTokens = {
  none: spacingScaleTokens['0' as SpacingScale],
  xs: spacingScaleTokens['1' as SpacingScale], // 4px
  sm: spacingScaleTokens['2' as SpacingScale], // 8px
  md: spacingScaleTokens['4' as SpacingScale], // 16px
  lg: spacingScaleTokens['6' as SpacingScale], // 24px
  xl: spacingScaleTokens['8' as SpacingScale], // 32px
  '2xl': spacingScaleTokens['12' as SpacingScale], // 48px
  '3xl': spacingScaleTokens['16' as SpacingScale], // 64px
  '4xl': spacingScaleTokens['24' as SpacingScale], // 96px
}

// Component-specific spacing
export const componentSpacing: ComponentSpacing = {
  button: {
    padding: {
      sm: spacingValues['2'], // 8px
      md: spacingValues['3'], // 12px
      lg: spacingValues['4'], // 16px
    },
    gap: spacingValues['2'], // 8px
  },
  card: {
    padding: spacingValues['4'], // 16px
    gap: spacingValues['4'], // 16px
    margin: spacingValues['4'], // 16px
  },
  form: {
    fieldGap: spacingValues['4'], // 16px
    labelGap: spacingValues['2'], // 8px
    sectionGap: spacingValues['6'], // 24px
  },
  list: {
    itemGap: spacingValues['3'], // 12px
    sectionGap: spacingValues['6'], // 24px
  },
  navigation: {
    itemGap: spacingValues['1'], // 4px
    sectionGap: spacingValues['4'], // 16px
    padding: spacingValues['4'], // 16px
  },
}

// Layout spacing
export const layoutSpacing: LayoutSpacing = {
  container: {
    padding: {
      mobile: spacingValues['4'], // 16px
      tablet: spacingValues['6'], // 24px
      desktop: spacingValues['8'], // 32px
    },
  },
  section: {
    gap: {
      sm: spacingValues['8'], // 32px
      md: spacingValues['12'], // 48px
      lg: spacingValues['16'], // 64px
    },
  },
  grid: {
    gap: {
      sm: spacingValues['4'], // 16px
      md: spacingValues['6'], // 24px
      lg: spacingValues['8'], // 32px
    },
  },
}

// Accessibility guidelines
export const spacingAccessibility: SpacingAccessibility = {
  minTouchTarget: 44, // Minimum 44px for touch targets
  minTextSpacing: 8, // Minimum 8px between text elements
  minInteractiveSpacing: 8, // Minimum 8px between interactive elements
}

// Complete spacing system
export const spacingSystem: SpacingSystem = {
  unit: SPACING_UNIT,
  scale: spacingScaleTokens,
  semantic: semanticSpacingTokens,
  component: componentSpacing,
  layout: layoutSpacing,
}

// Utility function to get spacing value
export function getSpacingValue(spacing: SpacingScale | SemanticSpacing): SpacingValue {
  // Direct mapping for semantic spacing
  const semanticMap: Record<SemanticSpacing, SpacingValue> = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
  }

  // Check semantic spacing first
  if (spacing in semanticMap) {
    return semanticMap[spacing as SemanticSpacing]
  }

  // Check scale spacing
  if (spacing in spacingValues) {
    return spacingValues[spacing as SpacingScale]
  }

  console.warn(`Spacing value "${spacing}" not found`)
  return 0
}

// Convert spacing to React Native style value
export function spacingToStyle(spacing: SpacingScale | SemanticSpacing): number {
  return getSpacingValue(spacing)
}

// Generate spacing object for React Native styles
export function createSpacingStyle(
  type: 'padding' | 'margin',
  value: SpacingScale | SemanticSpacing,
  direction?: 'all' | 'horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left'
) {
  const spacingValue = spacingToStyle(value)

  switch (direction) {
    case 'horizontal':
      return {
        [`${type}Left`]: spacingValue,
        [`${type}Right`]: spacingValue,
      }
    case 'vertical':
      return {
        [`${type}Top`]: spacingValue,
        [`${type}Bottom`]: spacingValue,
      }
    case 'top':
      return { [`${type}Top`]: spacingValue }
    case 'right':
      return { [`${type}Right`]: spacingValue }
    case 'bottom':
      return { [`${type}Bottom`]: spacingValue }
    case 'left':
      return { [`${type}Left`]: spacingValue }
    default:
      return { [type]: spacingValue }
  }
}

// Export for Tailwind config
export const tailwindSpacing = {
  ...Object.fromEntries(Object.entries(spacingValues).map(([key, value]) => [key, `${value}px`])),
  // Add semantic spacing
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
}
