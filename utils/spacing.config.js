/**
 * Tailwind Spacing Configuration
 * CommonJS export for tailwind.config.js
 */

// Spacing scale values (8px grid system)
const spacingValues = {
  0: 0, // 0px
  0.5: 2, // 2px
  1: 4, // 4px
  1.5: 6, // 6px
  2: 8, // 8px
  3: 12, // 12px
  4: 16, // 16px
  5: 20, // 20px
  6: 24, // 24px
  8: 32, // 32px
  10: 40, // 40px
  12: 48, // 48px
  14: 56, // 56px
  16: 64, // 64px
  20: 80, // 80px
  24: 96, // 96px
  32: 128, // 128px
}

// Semantic spacing values
const semanticSpacing = {
  xs: 4, // 4px
  sm: 8, // 8px
  md: 16, // 16px
  lg: 24, // 24px
  xl: 32, // 32px
  '2xl': 48, // 48px
  '3xl': 64, // 64px
  '4xl': 96, // 96px
}

// Export for Tailwind config
const tailwindSpacing = {
  // Scale spacing (convert to px strings)
  ...Object.fromEntries(Object.entries(spacingValues).map(([key, value]) => [key, `${value}px`])),
  // Semantic spacing
  ...Object.fromEntries(Object.entries(semanticSpacing).map(([key, value]) => [key, `${value}px`])),
}

module.exports = { tailwindSpacing }
