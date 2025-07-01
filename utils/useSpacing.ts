/**
 * Spacing System Hook for React Native Components
 * Provides spacing utilities and values
 */

import type {
  ComponentSpacing,
  LayoutSpacing,
  SemanticSpacing,
  SpacingDirection,
  SpacingScale,
  SpacingValue,
} from '~/types/spacing'
import {
  componentSpacing,
  createSpacingStyle,
  getSpacingValue,
  layoutSpacing,
  spacingAccessibility,
  spacingSystem,
  spacingToStyle,
} from './spacing'

/**
 * Hook to get spacing utilities and values
 */
export function useSpacing() {
  /**
   * Get spacing value by scale or semantic name
   * @param spacing - Spacing scale or semantic name
   * @returns Spacing value in pixels
   */
  const getValue = (spacing: SpacingScale | SemanticSpacing): SpacingValue => {
    return getSpacingValue(spacing)
  }

  /**
   * Get spacing value for React Native styles
   * @param spacing - Spacing scale or semantic name
   * @returns Spacing value as number for React Native
   */
  const getStyleValue = (spacing: SpacingScale | SemanticSpacing): number => {
    return spacingToStyle(spacing)
  }

  /**
   * Create padding style object
   * @param value - Spacing value
   * @param direction - Padding direction
   * @returns React Native style object
   */
  const padding = (value: SpacingScale | SemanticSpacing, direction?: SpacingDirection) => {
    return createSpacingStyle('padding', value, direction)
  }

  /**
   * Create margin style object
   * @param value - Spacing value
   * @param direction - Margin direction
   * @returns React Native style object
   */
  const margin = (value: SpacingScale | SemanticSpacing, direction?: SpacingDirection) => {
    return createSpacingStyle('margin', value, direction)
  }

  /**
   * Generate NativeWind className for spacing
   * @param type - Spacing type (p, m, gap)
   * @param value - Spacing value
   * @param direction - Direction (x, y, t, r, b, l)
   * @returns NativeWind className string
   */
  const getClassName = (
    type: 'p' | 'm' | 'gap',
    value: SpacingScale | SemanticSpacing,
    direction?: 'x' | 'y' | 't' | 'r' | 'b' | 'l'
  ): string => {
    const prefix = direction ? `${type}${direction}` : type
    return `${prefix}-${value}`
  }

  /**
   * Get component-specific spacing
   * @param component - Component name
   * @returns Component spacing configuration
   */
  const getComponentSpacing = (component: keyof ComponentSpacing) => {
    return componentSpacing[component]
  }

  /**
   * Get layout-specific spacing
   * @param layout - Layout name
   * @returns Layout spacing configuration
   */
  const getLayoutSpacing = (layout: keyof LayoutSpacing) => {
    return layoutSpacing[layout]
  }

  /**
   * Check if spacing meets accessibility guidelines
   * @param spacing - Spacing value
   * @param type - Accessibility type
   * @returns Boolean indicating if spacing is accessible
   */
  const isAccessible = (
    spacing: SpacingScale | SemanticSpacing,
    type: 'touchTarget' | 'textSpacing' | 'interactiveSpacing'
  ): boolean => {
    const value = getValue(spacing)

    switch (type) {
      case 'touchTarget':
        return value >= spacingAccessibility.minTouchTarget
      case 'textSpacing':
        return value >= spacingAccessibility.minTextSpacing
      case 'interactiveSpacing':
        return value >= spacingAccessibility.minInteractiveSpacing
      default:
        return false
    }
  }

  /**
   * Get responsive spacing based on screen size
   * @param mobile - Mobile spacing
   * @param tablet - Tablet spacing (optional)
   * @param desktop - Desktop spacing (optional)
   * @returns Spacing value (currently returns mobile, can be extended for responsive)
   */
  const getResponsiveSpacing = (
    mobile: SpacingScale | SemanticSpacing,
    tablet?: SpacingScale | SemanticSpacing,
    desktop?: SpacingScale | SemanticSpacing
  ): SpacingValue => {
    // For React Native, we primarily use mobile spacing
    // This can be extended with device detection if needed
    return getValue(mobile)
  }

  return {
    // Spacing system
    system: spacingSystem,
    component: componentSpacing,
    layout: layoutSpacing,
    accessibility: spacingAccessibility,

    // Utility functions
    getValue,
    getStyleValue,
    padding,
    margin,
    getClassName,
    getComponentSpacing,
    getLayoutSpacing,
    isAccessible,
    getResponsiveSpacing,

    // Quick access to common spacing values
    none: getValue('none'),
    xs: getValue('xs'),
    sm: getValue('sm'),
    md: getValue('md'),
    lg: getValue('lg'),
    xl: getValue('xl'),
    '2xl': getValue('2xl'),
    '3xl': getValue('3xl'),
    '4xl': getValue('4xl'),

    // Quick access to scale values
    spacing: {
      0: getValue('0'),
      1: getValue('1'),
      2: getValue('2'),
      3: getValue('3'),
      4: getValue('4'),
      5: getValue('5'),
      6: getValue('6'),
      8: getValue('8'),
      10: getValue('10'),
      12: getValue('12'),
      16: getValue('16'),
      20: getValue('20'),
      24: getValue('24'),
      32: getValue('32'),
    },

    // Component spacing shortcuts
    button: componentSpacing.button,
    card: componentSpacing.card,
    form: componentSpacing.form,
    list: componentSpacing.list,
    navigation: componentSpacing.navigation,

    // Layout spacing shortcuts
    container: layoutSpacing.container,
    section: layoutSpacing.section,
    grid: layoutSpacing.grid,
  }
}

/**
 * Spacing utility functions for static usage (outside components)
 */
export const spacingUtils = {
  /**
   * Get spacing system
   */
  system: spacingSystem,

  /**
   * Get spacing value
   */
  getValue: getSpacingValue,

  /**
   * Convert to style value
   */
  toStyle: spacingToStyle,

  /**
   * Create spacing style
   */
  createStyle: createSpacingStyle,

  /**
   * Calculate spacing based on content
   * @param contentSize - Size of content
   * @param ratio - Spacing ratio (default 0.5)
   * @returns Calculated spacing value
   */
  calculateSpacing: (contentSize: number, ratio = 0.5): number => {
    return Math.round(contentSize * ratio)
  },

  /**
   * Get optimal spacing for touch targets
   * @param elementSize - Size of the element
   * @returns Optimal spacing for accessibility
   */
  getOptimalTouchSpacing: (elementSize: number): number => {
    const minSpacing = spacingAccessibility.minTouchTarget - elementSize
    return Math.max(minSpacing / 2, spacingAccessibility.minInteractiveSpacing)
  },

  /**
   * Validate spacing against design system
   * @param value - Spacing value to validate
   * @returns Boolean indicating if value is in the design system
   */
  isValidSpacing: (value: number): boolean => {
    const validValues = Object.values(spacingSystem.scale).map((token) => token.value)
    return validValues.includes(value as SpacingValue)
  },
}

/**
 * Type-safe spacing prop validator
 */
export function isValidSpacingProp(value: string): value is SpacingScale | SemanticSpacing {
  // Check semantic spacing
  const semanticSpacing = Object.keys(spacingSystem.semantic)
  if (semanticSpacing.includes(value)) return true

  // Check scale spacing
  const scaleSpacing = Object.keys(spacingSystem.scale)
  if (scaleSpacing.includes(value)) return true

  return false
}
