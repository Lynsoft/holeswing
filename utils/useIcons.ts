/**
 * Icon System Hook for React Native Components
 * Provides icon utilities and configuration
 */

import type {
  IconCategory,
  IconDefinition,
  IconFamily,
  IconProps,
  IconSize,
  SemanticIconName,
} from '~/types/icons'
import {
  getIconDefinition,
  getIconSize,
  getIconsByCategory,
  iconSystem,
  iconSystemConfig,
  isValidIconName,
  resolveIconProps,
} from './icons'
import { useColors } from './useColors'

/**
 * Hook to get icon utilities and configuration
 */
export function useIcons() {
  const { getColorValue } = useColors()

  /**
   * Get icon definition by semantic name
   * @param name - Semantic icon name
   * @returns Icon definition or null
   */
  const getDefinition = (name: SemanticIconName): IconDefinition | null => {
    return getIconDefinition(name)
  }

  /**
   * Get icon size value
   * @param size - Icon size name or number
   * @returns Size in pixels
   */
  const getSizeValue = (size: IconSize | number): number => {
    return getIconSize(size)
  }

  /**
   * Resolve icon props for rendering
   * @param name - Icon name (semantic or direct)
   * @param family - Optional icon family
   * @returns Resolved icon props
   */
  const resolveProps = (name: SemanticIconName | string, family?: IconFamily) => {
    return resolveIconProps(name, family)
  }

  /**
   * Get icons by category
   * @param category - Icon category
   * @returns Array of icon definitions
   */
  const getByCategory = (category: IconCategory): IconDefinition[] => {
    return getIconsByCategory(category)
  }

  /**
   * Validate icon name
   * @param name - Icon name to validate
   * @returns Boolean indicating if name is valid
   */
  const isValid = (name: string): boolean => {
    return isValidIconName(name)
  }

  /**
   * Get icon color value
   * @param color - Color name or hex value
   * @returns Resolved color value
   */
  const getIconColor = (color?: string): string => {
    if (!color) return getColorValue('foreground')

    // If it's a hex color, return as-is
    if (color.startsWith('#')) return color

    // Try to resolve from color system
    try {
      return getColorValue(color as never)
    } catch {
      // Fallback to the color string itself
      return color
    }
  }

  /**
   * Generate icon props for common use cases
   * @param name - Icon name
   * @param options - Icon options
   * @returns Complete icon props
   */
  const createIconProps = (
    name: SemanticIconName | string,
    options: {
      size?: IconSize | number
      color?: string
      family?: IconFamily
      onPress?: () => void
      accessibilityLabel?: string
    } = {}
  ): Partial<IconProps> => {
    const resolved = resolveProps(name, options.family)

    return {
      name: resolved.name,
      family: resolved.family,
      size: options.size || iconSystemConfig.defaultSize,
      color: getIconColor(options.color),
      onPress: options.onPress,
      accessibilityLabel: options.accessibilityLabel || resolved.definition?.description,
    }
  }

  /**
   * Get icon props for navigation icons
   * @param name - Navigation icon name
   * @param focused - Whether the icon is focused/active
   * @returns Icon props for navigation
   */
  const getNavigationIconProps = (
    name: SemanticIconName,
    focused: boolean = false
  ): Partial<IconProps> => {
    return createIconProps(name, {
      size: 'lg',
      color: focused ? 'primary' : 'muted',
    })
  }

  /**
   * Get icon props for buttons
   * @param name - Button icon name
   * @param variant - Button variant
   * @returns Icon props for buttons
   */
  const getButtonIconProps = (
    name: SemanticIconName,
    variant: 'primary' | 'secondary' | 'ghost' = 'primary'
  ): Partial<IconProps> => {
    const colorMap = {
      primary: 'white',
      secondary: 'foreground',
      ghost: 'primary',
    }

    return createIconProps(name, {
      size: 'md',
      color: colorMap[variant],
    })
  }

  /**
   * Get icon props for status indicators
   * @param status - Status type
   * @returns Icon props for status
   */
  const getStatusIconProps = (
    status: 'success' | 'warning' | 'error' | 'info'
  ): Partial<IconProps> => {
    const iconMap = {
      success: 'success',
      warning: 'warning',
      error: 'error',
      info: 'info',
    } as const

    return createIconProps(iconMap[status], {
      size: 'md',
      color: status,
    })
  }

  /**
   * Check if icon meets accessibility guidelines
   * @param size - Icon size
   * @param interactive - Whether icon is interactive
   * @returns Boolean indicating accessibility compliance
   */
  const isAccessible = (size: IconSize | number, interactive: boolean = false): boolean => {
    const sizeValue = getSizeValue(size)

    if (interactive) {
      // Interactive icons need minimum 44px touch target
      return sizeValue >= 44 || sizeValue >= getSizeValue('xl')
    }

    // Non-interactive icons should be at least 16px for visibility
    return sizeValue >= getSizeValue('sm')
  }

  return {
    // Icon system
    system: iconSystem,
    config: iconSystemConfig,

    // Utility functions
    getDefinition,
    getSizeValue,
    resolveProps,
    getByCategory,
    isValid,
    getIconColor,
    createIconProps,
    getNavigationIconProps,
    getButtonIconProps,
    getStatusIconProps,
    isAccessible,

    // Quick access to common icons
    navigation: {
      home: createIconProps('home'),
      back: createIconProps('back'),
      menu: createIconProps('menu'),
      close: createIconProps('close'),
      search: createIconProps('search'),
    },

    actions: {
      add: createIconProps('add'),
      edit: createIconProps('edit'),
      delete: createIconProps('delete'),
      save: createIconProps('save'),
      share: createIconProps('share'),
    },

    status: {
      success: createIconProps('success', { color: 'success' }),
      warning: createIconProps('warning', { color: 'warning' }),
      error: createIconProps('error', { color: 'error' }),
      info: createIconProps('info', { color: 'info' }),
    },

    // Icon families and categories
    families: iconSystem.families,
    categories: iconSystem.categories,
    sizes: iconSystem.sizes,

    // Default values
    defaultFamily: iconSystemConfig.defaultFamily,
    defaultSize: iconSystemConfig.defaultSize,
  }
}

/**
 * Icon utility functions for static usage (outside components)
 */
export const iconUtils = {
  /**
   * Get icon system
   */
  system: iconSystem,

  /**
   * Get icon definition
   */
  getDefinition: getIconDefinition,

  /**
   * Get icon size
   */
  getSize: getIconSize,

  /**
   * Resolve icon props
   */
  resolve: resolveIconProps,

  /**
   * Get icons by category
   */
  getByCategory: getIconsByCategory,

  /**
   * Validate icon name
   */
  isValid: isValidIconName,

  /**
   * Calculate optimal icon size for context
   * @param context - Usage context
   * @returns Recommended icon size
   */
  getOptimalSize: (context: 'inline' | 'button' | 'navigation' | 'feature' | 'hero'): IconSize => {
    const sizeMap = {
      inline: 'sm' as IconSize,
      button: 'md' as IconSize,
      navigation: 'lg' as IconSize,
      feature: 'xl' as IconSize,
      hero: '2xl' as IconSize,
    }
    return sizeMap[context]
  },

  /**
   * Get icon accessibility requirements
   * @param usage - Icon usage type
   * @returns Accessibility requirements
   */
  getAccessibilityRequirements: (usage: 'decorative' | 'informative' | 'interactive') => {
    return {
      decorative: {
        label: false,
        minSize: 12,
        touchTarget: false,
      },
      informative: {
        label: true,
        minSize: 16,
        touchTarget: false,
      },
      interactive: {
        label: true,
        minSize: 24,
        touchTarget: true,
      },
    }[usage]
  },
}

/**
 * Type-safe icon name validator
 */
export function isValidSemanticIcon(value: string): value is SemanticIconName {
  return isValidIconName(value)
}
