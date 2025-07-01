/**
 * Color System Hook for React Native Components
 * Provides theme-aware color utilities
 */

import { useColorScheme } from 'react-native'
import type { ColorProp, SemanticColors, ThemeVariant } from '~/types/colors'
import { colorSystem, getColor } from './colors'

/**
 * Hook to get current theme colors
 * Automatically detects system color scheme and provides appropriate colors
 */
export function useColors() {
  const colorScheme = useColorScheme()
  const theme: ThemeVariant = colorScheme === 'dark' ? 'dark' : 'light'

  // Get semantic colors for current theme
  const semantic = colorSystem.semantic[theme]

  // Get raw color tokens
  const colors = colorSystem.colors

  /**
   * Get a color value by token name
   * @param colorProp - Color token (e.g., 'green', 'green-40', 'primary')
   * @returns Hex color value
   */
  const getColorValue = (colorProp: ColorProp): string => {
    // Check if it's a semantic color first
    if (colorProp in semantic) {
      return semantic[colorProp as keyof SemanticColors]
    }

    // Otherwise, get from color tokens
    return getColor(colorProp)
  }

  /**
   * Get theme-aware color for dark mode support
   * @param lightColor - Color for light theme
   * @param darkColor - Color for dark theme (optional, will use light color if not provided)
   * @returns Appropriate color for current theme
   */
  const getThemeColor = (lightColor: ColorProp, darkColor?: ColorProp): string => {
    if (theme === 'dark' && darkColor) {
      return getColorValue(darkColor)
    }
    return getColorValue(lightColor)
  }

  /**
   * Generate NativeWind className for colors
   * @param type - CSS property type ('text', 'bg', 'border')
   * @param colorProp - Color token
   * @returns NativeWind className string
   */
  const getColorClassName = (
    type: 'text' | 'bg' | 'border' | 'shadow',
    colorProp: ColorProp
  ): string => {
    // Convert color prop to kebab-case for Tailwind
    const colorClass = colorProp
      .toString()
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
    return `${type}-${colorClass}`
  }

  return {
    // Current theme
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',

    // Color collections
    semantic,
    colors,

    // Utility functions
    getColorValue,
    getThemeColor,
    getColorClassName,

    // Quick access to common colors
    primary: semantic.primary,
    secondary: semantic.secondary,
    accent: semantic.accent,
    success: semantic.success,
    warning: semantic.warning,
    error: semantic.error,
    info: semantic.info,
    surface: semantic.surface,
    background: semantic.background,
    foreground: semantic.foreground,
    muted: semantic.muted,
    border: semantic.border,
  }
}

/**
 * Color utility functions for static usage (outside components)
 */
export const colorUtils = {
  /**
   * Get color value for light theme
   */
  light: colorSystem.semantic.light,

  /**
   * Get color value for dark theme
   */
  dark: colorSystem.semantic.dark,

  /**
   * Get raw color tokens
   */
  tokens: colorSystem.colors,

  /**
   * Get color by token name
   */
  getColor,

  /**
   * Check if color is light or dark (for contrast calculations)
   */
  isLightColor: (hex: string): boolean => {
    const rgb = parseInt(hex.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luma > 128
  },

  /**
   * Get contrast color (black or white) for given background
   */
  getContrastColor: (backgroundColor: string): string => {
    return colorUtils.isLightColor(backgroundColor)
      ? colorSystem.colors.black.DEFAULT
      : colorSystem.colors.white.DEFAULT
  },
}

/**
 * Type-safe color prop validator
 */
export function isValidColorProp(value: string): value is ColorProp {
  // Check semantic colors
  const semanticColors = Object.keys(colorSystem.semantic.light)
  if (semanticColors.includes(value)) return true

  // Check color families
  const colorFamilies = Object.keys(colorSystem.colors)
  if (colorFamilies.includes(value)) return true

  // Check color with intensity (e.g., 'green-40')
  const parts = value.split('-')
  if (parts.length === 2) {
    const [family, intensity] = parts
    if (colorFamilies.includes(family) && /^(10|20|30|40|50|60|70)$/.test(intensity)) {
      return true
    }
  }

  return false
}
