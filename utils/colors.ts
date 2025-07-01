/**
 * Design System Color Utilities
 * Extracted from Figma design tokens
 */

import type { ColorSystem, ColorToken, SemanticColors } from '~/types/colors'

// Raw color tokens from Figma
export const figmaColors = {
  // Green family
  'green-70': '#10603D',
  'green-60': '#18905C',
  green: '#21C17C',
  'green-40': '#58D09C',
  'green-30': '#90E0BD',
  'green-20': '#C7EFDE',
  'green-10': '#E9F8F2',

  // Purple family
  'purple-70': '#36235E',
  'purple-60': '#52358E',
  purple: '#6E48BE',
  'purple-40': '#9275CE',
  'purple-30': '#B6A3DE',
  'purple-20': '#DAD1EE',
  'purple-10': '#F0EDF8',

  // Orange family
  'orange-70': '#7F511F',
  'orange-60': '#BF7A2F',
  orange: '#FFA340',
  'orange-40': '#FFBA6F',
  'orange-30': '#FFD19F',
  'orange-20': '#FFE7CF',
  'orange-10': '#FFF5EC',

  // Red family
  'red-70': '#70242A',
  'red-60': '#A9363F',
  red: '#E24955',
  'red-40': '#E9767F',
  'red-30': '#F0A4AA',
  'red-20': '#F7D1D4',
  'red-10': '#FCEDEE',

  // Blue family
  'blue-70': '#1B4F6D',
  'blue-60': '#2977A4',
  blue: '#379FDC',
  'blue-40': '#69B7E4',
  'blue-30': '#9BCFED',
  'blue-20': '#CCE6F6',
  'blue-10': '#EBF5FB',

  // Neutral families
  white: '#FFFFFF',
  'white-50': '#F5F7F8',
  black: '#000000',
  'black-50': '#232C2E',
  'black-40': '#5C6363',
  'black-30': '#8E9191',
  'black-20': '#C6C7C8',
  'black-10': '#EDEFEF',
  transparent: '#FFFFFF00',
} as const

// Structured color tokens for Tailwind
export const colorTokens: ColorToken = {
  green: {
    DEFAULT: figmaColors.green,
    10: figmaColors['green-10'],
    20: figmaColors['green-20'],
    30: figmaColors['green-30'],
    40: figmaColors['green-40'],
    60: figmaColors['green-60'],
    70: figmaColors['green-70'],
  },
  purple: {
    DEFAULT: figmaColors.purple,
    10: figmaColors['purple-10'],
    20: figmaColors['purple-20'],
    30: figmaColors['purple-30'],
    40: figmaColors['purple-40'],
    60: figmaColors['purple-60'],
    70: figmaColors['purple-70'],
  },
  orange: {
    DEFAULT: figmaColors.orange,
    10: figmaColors['orange-10'],
    20: figmaColors['orange-20'],
    30: figmaColors['orange-30'],
    40: figmaColors['orange-40'],
    60: figmaColors['orange-60'],
    70: figmaColors['orange-70'],
  },
  red: {
    DEFAULT: figmaColors.red,
    10: figmaColors['red-10'],
    20: figmaColors['red-20'],
    30: figmaColors['red-30'],
    40: figmaColors['red-40'],
    60: figmaColors['red-60'],
    70: figmaColors['red-70'],
  },
  blue: {
    DEFAULT: figmaColors.blue,
    10: figmaColors['blue-10'],
    20: figmaColors['blue-20'],
    30: figmaColors['blue-30'],
    40: figmaColors['blue-40'],
    60: figmaColors['blue-60'],
    70: figmaColors['blue-70'],
  },
  white: {
    DEFAULT: figmaColors.white,
    50: figmaColors['white-50'],
  },
  black: {
    DEFAULT: figmaColors.black,
    50: figmaColors['black-50'],
    40: figmaColors['black-40'],
    30: figmaColors['black-30'],
    20: figmaColors['black-20'],
    10: figmaColors['black-10'],
  },
  transparent: {
    DEFAULT: figmaColors.transparent,
  },
}

// Semantic color mappings for light theme
export const lightSemanticColors: SemanticColors = {
  primary: colorTokens.green.DEFAULT,
  secondary: colorTokens.purple.DEFAULT,
  accent: colorTokens.orange.DEFAULT,
  success: colorTokens.green[60],
  warning: colorTokens.orange[60],
  error: colorTokens.red.DEFAULT,
  info: colorTokens.blue.DEFAULT,
  surface: colorTokens.white.DEFAULT,
  background: colorTokens.white[50],
  foreground: colorTokens.black.DEFAULT,
  muted: colorTokens.black[30],
  border: colorTokens.black[20],
}

// Semantic color mappings for dark theme
export const darkSemanticColors: SemanticColors = {
  primary: colorTokens.green[40],
  secondary: colorTokens.purple[40],
  accent: colorTokens.orange[40],
  success: colorTokens.green[40],
  warning: colorTokens.orange[40],
  error: colorTokens.red[40],
  info: colorTokens.blue[40],
  surface: colorTokens.black[50],
  background: colorTokens.black.DEFAULT,
  foreground: colorTokens.white.DEFAULT,
  muted: colorTokens.black[30],
  border: colorTokens.black[40],
}

// Complete color system
export const colorSystem: ColorSystem = {
  colors: colorTokens,
  semantic: {
    light: lightSemanticColors,
    dark: darkSemanticColors,
  },
}

// Utility function to get color value
export function getColor(colorPath: string): string {
  const parts = colorPath.split('-')
  const family = parts[0] as keyof ColorToken
  const intensity = parts[1] as keyof ColorToken[typeof family]

  if (!colorTokens[family]) {
    console.warn(`Color family "${family}" not found`)
    return '#000000'
  }

  if (intensity && intensity in colorTokens[family]) {
    return colorTokens[family][intensity] as string
  }

  return colorTokens[family].DEFAULT as string
}

// Export for Tailwind config
export const tailwindColors = {
  ...colorTokens,
  // Add semantic aliases
  primary: {
    DEFAULT: lightSemanticColors.primary,
    dark: darkSemanticColors.primary,
  },
  secondary: {
    DEFAULT: lightSemanticColors.secondary,
    dark: darkSemanticColors.secondary,
  },
  accent: {
    DEFAULT: lightSemanticColors.accent,
    dark: darkSemanticColors.accent,
  },
  success: {
    DEFAULT: lightSemanticColors.success,
    dark: darkSemanticColors.success,
  },
  warning: {
    DEFAULT: lightSemanticColors.warning,
    dark: darkSemanticColors.warning,
  },
  error: {
    DEFAULT: lightSemanticColors.error,
    dark: darkSemanticColors.error,
  },
  info: {
    DEFAULT: lightSemanticColors.info,
    dark: darkSemanticColors.info,
  },
  surface: {
    DEFAULT: lightSemanticColors.surface,
    dark: darkSemanticColors.surface,
  },
  background: {
    DEFAULT: lightSemanticColors.background,
    dark: darkSemanticColors.background,
  },
  foreground: {
    DEFAULT: lightSemanticColors.foreground,
    dark: darkSemanticColors.foreground,
  },
  muted: {
    DEFAULT: lightSemanticColors.muted,
    dark: darkSemanticColors.muted,
  },
  border: {
    DEFAULT: lightSemanticColors.border,
    dark: darkSemanticColors.border,
  },
}
