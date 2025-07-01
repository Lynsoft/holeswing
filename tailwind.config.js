/** @type {import('tailwindcss').Config} */
const { tailwindColors } = require('./utils/colors.config')
const { tailwindTypography } = require('./utils/typography.config')
const { tailwindSpacing } = require('./utils/spacing.config')

module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: tailwindTypography.fontFamily,
      fontSize: tailwindTypography.fontSize,
      fontWeight: tailwindTypography.fontWeight,
      lineHeight: tailwindTypography.lineHeight,
      letterSpacing: tailwindTypography.letterSpacing,
      spacing: tailwindSpacing,
      padding: tailwindSpacing,
      margin: tailwindSpacing,
      gap: tailwindSpacing,
    },
  },
  plugins: [],
}
