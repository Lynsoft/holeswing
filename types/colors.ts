/**
 * Design System Color Tokens
 * Generated from Figma design tokens
 */

// Base color families
export type ColorFamily =
  | 'green'
  | 'purple'
  | 'orange'
  | 'white'
  | 'black'
  | 'red'
  | 'blue'
  | 'transparent'

// Color intensity levels
export type ColorIntensity = 10 | 20 | 30 | 40 | 50 | 60 | 70

// Color token structure
export type ColorToken = {
  [K in ColorFamily]: K extends 'white'
    ? {
        DEFAULT: string
        50: string
      }
    : K extends 'transparent'
      ? {
          DEFAULT: string
        }
      : K extends 'black'
        ? {
            DEFAULT: string
            10: string
            20: string
            30: string
            40: string
            50: string
          }
        : {
            DEFAULT: string
            10: string
            20: string
            30: string
            40: string
            50?: string
            60: string
            70: string
          }
}

// Semantic color roles for theming
export type SemanticColors = {
  primary: string
  secondary: string
  accent: string
  success: string
  warning: string
  error: string
  info: string
  surface: string
  background: string
  foreground: string
  muted: string
  border: string
}

// Theme variants
export type ThemeVariant = 'light' | 'dark'

// Complete color system type
export interface ColorSystem {
  colors: ColorToken
  semantic: {
    light: SemanticColors
    dark: SemanticColors
  }
}

// Utility types for component props
export type ColorProp = `${ColorFamily}` | `${ColorFamily}-${ColorIntensity}` | keyof SemanticColors

// NativeWind className color utilities
export type ColorClassName =
  | `text-${ColorProp}`
  | `bg-${ColorProp}`
  | `border-${ColorProp}`
  | `shadow-${ColorProp}`

// Color accessibility levels
export type ColorAccessibility = 'AA' | 'AAA'

// Color contrast information
export interface ColorContrast {
  ratio: number
  level: ColorAccessibility | 'fail'
  normal: boolean
  large: boolean
}

// Color metadata for design system documentation
export interface ColorMeta {
  name: string
  hex: string
  family: ColorFamily
  intensity?: ColorIntensity
  semantic?: keyof SemanticColors
  usage: string[]
  accessibility: {
    onWhite: ColorContrast
    onBlack: ColorContrast
  }
}
