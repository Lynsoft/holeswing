/**
 * Design System Icon Types
 * Based on Expo Vector Icons with semantic naming
 */

// Available icon families from @expo/vector-icons
export type IconFamily =
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Feather'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Foundation'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'

// Icon sizes aligned with spacing system
export type IconSize =
  | 'xs' // 12px
  | 'sm' // 16px
  | 'md' // 20px
  | 'lg' // 24px
  | 'xl' // 32px
  | '2xl' // 48px
  | '3xl' // 64px

// Icon categories for organization
export type IconCategory =
  | 'navigation' // Navigation and wayfinding
  | 'action' // User actions and interactions
  | 'content' // Content and media
  | 'communication' // Communication and social
  | 'status' // Status and feedback
  | 'interface' // UI elements and controls
  | 'business' // Business and commerce
  | 'system' // System and technical

// Icon variants (where supported by icon family)
export type IconVariant =
  | 'outline' // Outlined version
  | 'filled' // Filled version
  | 'sharp' // Sharp/angular version
  | 'round' // Rounded version

// Icon weight/style
export type IconWeight = 'thin' | 'light' | 'regular' | 'medium' | 'bold'

// Semantic icon names for common use cases
export type SemanticIconName =
  // Navigation
  | 'home'
  | 'back'
  | 'forward'
  | 'up'
  | 'down'
  | 'menu'
  | 'close'
  | 'search'
  | 'filter'
  | 'sort'

  // Actions
  | 'add'
  | 'remove'
  | 'edit'
  | 'delete'
  | 'save'
  | 'copy'
  | 'share'
  | 'download'
  | 'upload'
  | 'refresh'
  | 'sync'
  | 'settings'

  // Content
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'folder'
  | 'file'
  | 'camera'
  | 'gallery'
  | 'calendar'
  | 'clock'
  | 'location'
  | 'map'

  // Communication
  | 'email'
  | 'phone'
  | 'message'
  | 'chat'
  | 'notification'
  | 'bell'

  // Status
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'loading'
  | 'check'
  | 'star'
  | 'heart'
  | 'bookmark'

  // Interface
  | 'eye'
  | 'eye-off'
  | 'lock'
  | 'unlock'
  | 'user'
  | 'users'
  | 'profile'
  | 'logout'
  | 'login'

  // Business
  | 'cart'
  | 'payment'
  | 'credit-card'
  | 'money'
  | 'tag'
  | 'gift'

  // System
  | 'wifi'
  | 'bluetooth'
  | 'battery'
  | 'signal'
  | 'power'
  | 'help'
  | 'info-circle'

// Icon definition structure
export interface IconDefinition {
  family: IconFamily
  name: string
  category: IconCategory
  variant?: IconVariant
  weight?: IconWeight
  aliases?: string[]
  description: string
  usage: string[]
}

// Icon size mapping
export type IconSizeMap = {
  [K in IconSize]: number
}

// Semantic icon mapping
export type SemanticIconMap = {
  [K in SemanticIconName]: IconDefinition
}

// Icon system configuration
export interface IconSystemConfig {
  defaultFamily: IconFamily
  defaultSize: IconSize
  defaultVariant?: IconVariant
  sizes: IconSizeMap
  semantic: SemanticIconMap
}

// Complete icon system
export interface IconSystem {
  config: IconSystemConfig
  families: IconFamily[]
  categories: IconCategory[]
  sizes: IconSizeMap
  semantic: SemanticIconMap
}

// Icon component props
export interface IconProps {
  // Semantic or direct icon name
  name: SemanticIconName | string

  // Icon family (optional, uses semantic mapping or default)
  family?: IconFamily

  // Icon size
  size?: IconSize | number

  // Icon color (from color system or custom)
  color?: string

  // Icon variant
  variant?: IconVariant

  // Icon weight
  weight?: IconWeight

  // Additional styles
  style?: object

  // Accessibility
  accessibilityLabel?: string
  accessibilityHint?: string

  // Interaction
  onPress?: () => void
  disabled?: boolean

  // Visual states
  focused?: boolean
  selected?: boolean

  // Animation
  animated?: boolean
  rotation?: number

  // NativeWind className support
  className?: string
}

// Icon accessibility guidelines
export interface IconAccessibility {
  minTouchTarget: number // Minimum 44px for interactive icons
  semanticLabels: boolean // Require accessibility labels
  colorIndependent: boolean // Icons work without color
  textAlternative: boolean // Provide text alternatives
}

// Icon performance guidelines
export interface IconPerformance {
  lazyLoading: boolean // Lazy load icon families
  caching: boolean // Cache rendered icons
  optimization: boolean // Optimize icon rendering
  bundleSize: boolean // Monitor bundle size impact
}

// Icon metadata for design system documentation
export interface IconMeta {
  name: string
  family: IconFamily
  category: IconCategory
  size: IconSize
  usage: string[]
  accessibility: {
    label: string
    description: string
    touchTarget: boolean
  }
  examples: string[]
}
