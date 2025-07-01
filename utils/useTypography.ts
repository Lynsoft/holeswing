/**
 * Typography System Hook for React Native Components
 * Provides typography utilities and styles
 */

import { Platform } from 'react-native'
import type {
  FigmaTypographyStyles,
  FontWeightName,
  LetterSpacing,
  LineHeight,
  SemanticTypography,
  TypographyProp,
  TypographyScale,
  TypographyToken,
} from '~/types/typography'
import {
  figmaTypographyStyles,
  getTypographyStyle,
  semanticTypography,
  typographySystem,
  typographyTokenToStyle,
} from './typography'

/**
 * Hook to get typography utilities and styles
 */
export function useTypography() {
  /**
   * Get a typography style by name
   * @param styleName - Typography style name (e.g., 'heading-1', 'body', 'text-16')
   * @returns Typography token or null if not found
   */
  const getStyle = (styleName: TypographyProp): TypographyToken | null => {
    return getTypographyStyle(styleName)
  }

  /**
   * Get React Native style object from typography token
   * @param token - Typography token
   * @returns React Native style object
   */
  const getStyleObject = (token: TypographyToken) => {
    return typographyTokenToStyle(token)
  }

  /**
   * Get React Native style object by style name
   * @param styleName - Typography style name
   * @returns React Native style object or null
   */
  const getStyleByName = (styleName: TypographyProp) => {
    const token = getStyle(styleName)
    return token ? getStyleObject(token) : null
  }

  /**
   * Generate NativeWind className for typography
   * @param scale - Typography scale (xs, sm, base, lg, etc.)
   * @param weight - Font weight name (normal, medium, semibold, bold)
   * @param leading - Line height (tight, normal, relaxed, etc.)
   * @param tracking - Letter spacing (tight, normal, wide, etc.)
   * @returns NativeWind className string
   */
  const getClassName = (
    scale?: TypographyScale,
    weight?: FontWeightName,
    leading?: LineHeight,
    tracking?: LetterSpacing
  ): string => {
    const classes = ['font-inter'] // Default to Inter font

    if (scale) classes.push(`text-${scale}`)
    if (weight) classes.push(`font-${weight}`)
    if (leading) classes.push(`leading-${leading}`)
    if (tracking) classes.push(`tracking-${tracking}`)

    return classes.join(' ')
  }

  /**
   * Get semantic typography className
   * @param semantic - Semantic typography name (h1, h2, body, etc.)
   * @returns NativeWind className string
   */
  const getSemanticClassName = (semantic: keyof SemanticTypography): string => {
    const token = semanticTypography[semantic]
    const scale = Object.entries(typographySystem.sizes).find(
      ([, size]) => size === token.fontSize
    )?.[0] as TypographyScale

    const weight = Object.entries(typographySystem.weights).find(
      ([, w]) => w === token.fontWeight
    )?.[0] as FontWeightName

    return getClassName(scale, weight)
  }

  /**
   * Get Figma style className
   * @param figmaStyle - Figma style name (heading-1, text-16, etc.)
   * @returns NativeWind className string
   */
  const getFigmaClassName = (figmaStyle: keyof FigmaTypographyStyles): string => {
    const token = figmaTypographyStyles[figmaStyle]
    const scale = Object.entries(typographySystem.sizes).find(
      ([, size]) => size === token.fontSize
    )?.[0] as TypographyScale

    const weight = Object.entries(typographySystem.weights).find(
      ([, w]) => w === token.fontWeight
    )?.[0] as FontWeightName

    return getClassName(scale, weight)
  }

  /**
   * Check if font is loaded (for custom fonts)
   * @param fontFamily - Font family name
   * @returns Boolean indicating if font is available
   */
  const isFontLoaded = (fontFamily: string): boolean => {
    // On React Native, we assume Inter is loaded via expo-font
    // This can be extended to check actual font loading status
    if (fontFamily === 'Inter') {
      return true // Assume Inter is loaded
    }
    return Platform.OS === 'web' // System fonts are always available on web
  }

  return {
    // Typography system
    system: typographySystem,
    figmaStyles: figmaTypographyStyles,
    semantic: semanticTypography,

    // Utility functions
    getStyle,
    getStyleObject,
    getStyleByName,
    getClassName,
    getSemanticClassName,
    getFigmaClassName,
    isFontLoaded,

    // Quick access to common styles
    display: getStyleByName('display'),
    h1: getStyleByName('h1'),
    h2: getStyleByName('h2'),
    h3: getStyleByName('h3'),
    h4: getStyleByName('h4'),
    h5: getStyleByName('h5'),
    h6: getStyleByName('h6'),
    body: getStyleByName('body'),
    bodyLarge: getStyleByName('bodyLarge'),
    bodySmall: getStyleByName('bodySmall'),
    button: getStyleByName('button'),
    caption: getStyleByName('caption'),
    overline: getStyleByName('overline'),
    code: getStyleByName('code'),
    label: getStyleByName('label'),

    // Quick access to Figma styles
    large36: getStyleByName('large-36'),
    large28: getStyleByName('large-28'),
    heading1: getStyleByName('heading-1'),
    heading2: getStyleByName('heading-2'),
    heading3: getStyleByName('heading-3'),
    heading4: getStyleByName('heading-4'),
    heading5: getStyleByName('heading-5'),
    title20: getStyleByName('title-20'),
    title16: getStyleByName('title-16'),
    title14: getStyleByName('title-14'),
    title12: getStyleByName('title-12'),
    title10: getStyleByName('title-10'),
    text20: getStyleByName('text-20'),
    text16: getStyleByName('text-16'),
    text14: getStyleByName('text-14'),
    text12: getStyleByName('text-12'),
    text10: getStyleByName('text-10'),
  }
}

/**
 * Typography utility functions for static usage (outside components)
 */
export const typographyUtils = {
  /**
   * Get typography system
   */
  system: typographySystem,

  /**
   * Get style by name
   */
  getStyle: getTypographyStyle,

  /**
   * Convert token to style object
   */
  tokenToStyle: typographyTokenToStyle,

  /**
   * Calculate optimal line height for font size
   * @param fontSize - Font size in pixels
   * @returns Optimal line height multiplier
   */
  getOptimalLineHeight: (fontSize: number): number => {
    if (fontSize <= 12) return 1.4
    if (fontSize <= 16) return 1.5
    if (fontSize <= 24) return 1.3
    return 1.2
  },

  /**
   * Get readable font size for accessibility
   * @param baseFontSize - Base font size
   * @param scaleFactor - User's accessibility scale factor
   * @returns Scaled font size
   */
  getAccessibleFontSize: (baseFontSize: number, scaleFactor = 1): number => {
    return Math.max(baseFontSize * scaleFactor, 12) // Minimum 12px for accessibility
  },

  /**
   * Check if text size meets accessibility guidelines
   * @param fontSize - Font size in pixels
   * @param fontWeight - Font weight
   * @returns Boolean indicating if size is accessible
   */
  isAccessibleSize: (fontSize: number, fontWeight: number): boolean => {
    // WCAG guidelines: normal text should be at least 12px, bold text can be smaller
    if (fontWeight >= 600) return fontSize >= 10
    return fontSize >= 12
  },
}

/**
 * Type-safe typography prop validator
 */
export function isValidTypographyProp(value: string): value is TypographyProp {
  // Check Figma styles
  if (value in figmaTypographyStyles) return true

  // Check semantic styles
  if (value in semanticTypography) return true

  // Check typography scales
  const scales = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
  if (scales.includes(value)) return true

  return false
}
