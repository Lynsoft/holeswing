/**
 * Tailwind Typography Configuration
 * CommonJS export for tailwind.config.js
 */

// Font sizes from Figma tokens
const fontSizes = {
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
const lineHeights = {
  none: 1,
  tight: 1.1,
  snug: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
}

// Letter spacing scale
const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

// Font weight mappings
const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

// Export for Tailwind config
const tailwindTypography = {
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
  fontWeight: fontWeights,
  lineHeight: lineHeights,
  letterSpacing,
}

module.exports = { tailwindTypography }
