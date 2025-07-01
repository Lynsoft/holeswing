/**
 * Design System Spacing Types
 * Based on 8px grid system for consistent spacing
 */

// Base spacing unit (8px grid system)
export type SpacingUnit = 8

// Spacing scale values (in pixels)
export type SpacingValue =
  | 0
  | 2
  | 4
  | 6
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 44
  | 48
  | 56
  | 64
  | 80
  | 96
  | 128

// Spacing scale names for Tailwind/NativeWind
export type SpacingScale =
  | '0' // 0px
  | '0.5' // 2px
  | '1' // 4px
  | '1.5' // 6px
  | '2' // 8px
  | '3' // 12px
  | '4' // 16px
  | '5' // 20px
  | '6' // 24px
  | '8' // 32px
  | '10' // 40px
  | '12' // 48px
  | '14' // 56px
  | '16' // 64px
  | '20' // 80px
  | '24' // 96px
  | '32' // 128px

// Semantic spacing names
export type SemanticSpacing =
  | 'none' // 0px
  | 'xs' // 4px
  | 'sm' // 8px
  | 'md' // 16px
  | 'lg' // 24px
  | 'xl' // 32px
  | '2xl' // 48px
  | '3xl' // 64px
  | '4xl' // 96px

// Component spacing categories
export type SpacingCategory =
  | 'component' // Internal component spacing
  | 'layout' // Layout and section spacing
  | 'content' // Content and text spacing
  | 'interactive' // Interactive element spacing

// Spacing directions
export type SpacingDirection =
  | 'all'
  | 'horizontal'
  | 'vertical'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'

// Spacing token structure
export interface SpacingToken {
  value: SpacingValue
  rem: string
  category: SpacingCategory
  usage: string[]
  examples: string[]
}

// Complete spacing scale mapping
export type SpacingScaleTokens = {
  [K in SpacingScale]: SpacingToken
}

// Semantic spacing mapping
export type SemanticSpacingTokens = {
  [K in SemanticSpacing]: SpacingToken
}

// Component-specific spacing
export interface ComponentSpacing {
  // Button spacing
  button: {
    padding: {
      sm: SpacingValue
      md: SpacingValue
      lg: SpacingValue
    }
    gap: SpacingValue
  }

  // Card spacing
  card: {
    padding: SpacingValue
    gap: SpacingValue
    margin: SpacingValue
  }

  // Form spacing
  form: {
    fieldGap: SpacingValue
    labelGap: SpacingValue
    sectionGap: SpacingValue
  }

  // List spacing
  list: {
    itemGap: SpacingValue
    sectionGap: SpacingValue
  }

  // Navigation spacing
  navigation: {
    itemGap: SpacingValue
    sectionGap: SpacingValue
    padding: SpacingValue
  }
}

// Layout spacing
export interface LayoutSpacing {
  // Container spacing
  container: {
    padding: {
      mobile: SpacingValue
      tablet: SpacingValue
      desktop: SpacingValue
    }
  }

  // Section spacing
  section: {
    gap: {
      sm: SpacingValue
      md: SpacingValue
      lg: SpacingValue
    }
  }

  // Grid spacing
  grid: {
    gap: {
      sm: SpacingValue
      md: SpacingValue
      lg: SpacingValue
    }
  }
}

// Complete spacing system
export interface SpacingSystem {
  unit: SpacingUnit
  scale: SpacingScaleTokens
  semantic: SemanticSpacingTokens
  component: ComponentSpacing
  layout: LayoutSpacing
}

// Utility types for component props
export type SpacingProp = SpacingScale | SemanticSpacing | SpacingValue

// NativeWind className spacing utilities
export type SpacingClassName =
  | `p-${SpacingScale | SemanticSpacing}`
  | `px-${SpacingScale | SemanticSpacing}`
  | `py-${SpacingScale | SemanticSpacing}`
  | `pt-${SpacingScale | SemanticSpacing}`
  | `pr-${SpacingScale | SemanticSpacing}`
  | `pb-${SpacingScale | SemanticSpacing}`
  | `pl-${SpacingScale | SemanticSpacing}`
  | `m-${SpacingScale | SemanticSpacing}`
  | `mx-${SpacingScale | SemanticSpacing}`
  | `my-${SpacingScale | SemanticSpacing}`
  | `mt-${SpacingScale | SemanticSpacing}`
  | `mr-${SpacingScale | SemanticSpacing}`
  | `mb-${SpacingScale | SemanticSpacing}`
  | `ml-${SpacingScale | SemanticSpacing}`
  | `gap-${SpacingScale | SemanticSpacing}`

// Spacing accessibility guidelines
export interface SpacingAccessibility {
  minTouchTarget: SpacingValue // Minimum 44px for touch targets
  minTextSpacing: SpacingValue // Minimum spacing between text elements
  minInteractiveSpacing: SpacingValue // Minimum spacing between interactive elements
}

// Spacing metadata for design system documentation
export interface SpacingMeta {
  name: string
  value: SpacingValue
  category: SpacingCategory
  usage: string[]
  accessibility: {
    touchTarget: boolean
    textSpacing: boolean
    interactiveSpacing: boolean
  }
  examples: string[]
}
