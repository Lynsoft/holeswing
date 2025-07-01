/**
 * Design System Icon Utilities
 * Based on Expo Vector Icons with semantic mapping
 */

import type {
  IconCategory,
  IconDefinition,
  IconFamily,
  IconSize,
  IconSizeMap,
  IconSystem,
  IconSystemConfig,
  SemanticIconMap,
  SemanticIconName,
} from '~/types/icons'

// Icon sizes aligned with spacing system
export const iconSizes: IconSizeMap = {
  xs: 12, // Small inline icons
  sm: 16, // Default text icons
  md: 20, // Standard UI icons
  lg: 24, // Prominent icons
  xl: 32, // Large feature icons
  '2xl': 48, // Hero/display icons
  '3xl': 64, // Maximum size icons
}

// Default icon family (Ionicons - modern and comprehensive)
export const DEFAULT_ICON_FAMILY: IconFamily = 'Ionicons'
export const DEFAULT_ICON_SIZE: IconSize = 'md'

// Semantic icon mapping to Expo Vector Icons
export const semanticIconMap: SemanticIconMap = {
  // Navigation
  home: {
    family: 'Ionicons',
    name: 'home-outline',
    category: 'navigation',
    description: 'Home/dashboard navigation',
    usage: ['Navigation', 'Home screen', 'Dashboard'],
  },
  back: {
    family: 'Ionicons',
    name: 'arrow-back-outline',
    category: 'navigation',
    description: 'Go back/previous',
    usage: ['Navigation', 'Back button', 'Previous'],
  },
  forward: {
    family: 'Ionicons',
    name: 'arrow-forward-outline',
    category: 'navigation',
    description: 'Go forward/next',
    usage: ['Navigation', 'Next button', 'Forward'],
  },
  up: {
    family: 'Ionicons',
    name: 'arrow-up-outline',
    category: 'navigation',
    description: 'Move up/scroll up',
    usage: ['Navigation', 'Scroll up', 'Move up'],
  },
  down: {
    family: 'Ionicons',
    name: 'arrow-down-outline',
    category: 'navigation',
    description: 'Move down/scroll down',
    usage: ['Navigation', 'Scroll down', 'Move down'],
  },
  menu: {
    family: 'Ionicons',
    name: 'menu-outline',
    category: 'navigation',
    description: 'Open menu/navigation drawer',
    usage: ['Navigation', 'Menu button', 'Hamburger menu'],
  },
  close: {
    family: 'Ionicons',
    name: 'close-outline',
    category: 'navigation',
    description: 'Close/dismiss',
    usage: ['Navigation', 'Close button', 'Dismiss'],
  },
  search: {
    family: 'Ionicons',
    name: 'search-outline',
    category: 'navigation',
    description: 'Search functionality',
    usage: ['Search', 'Find', 'Lookup'],
  },
  filter: {
    family: 'Ionicons',
    name: 'filter-outline',
    category: 'navigation',
    description: 'Filter content',
    usage: ['Filter', 'Sort', 'Refine'],
  },
  sort: {
    family: 'Ionicons',
    name: 'swap-vertical-outline',
    category: 'navigation',
    description: 'Sort content',
    usage: ['Sort', 'Order', 'Arrange'],
  },

  // Actions
  add: {
    family: 'Ionicons',
    name: 'add-outline',
    category: 'action',
    description: 'Add new item',
    usage: ['Add', 'Create', 'New'],
  },
  remove: {
    family: 'Ionicons',
    name: 'remove-outline',
    category: 'action',
    description: 'Remove item',
    usage: ['Remove', 'Delete', 'Subtract'],
  },
  edit: {
    family: 'Ionicons',
    name: 'create-outline',
    category: 'action',
    description: 'Edit/modify',
    usage: ['Edit', 'Modify', 'Update'],
  },
  delete: {
    family: 'Ionicons',
    name: 'trash-outline',
    category: 'action',
    description: 'Delete permanently',
    usage: ['Delete', 'Remove', 'Trash'],
  },
  save: {
    family: 'Ionicons',
    name: 'save-outline',
    category: 'action',
    description: 'Save changes',
    usage: ['Save', 'Store', 'Persist'],
  },
  copy: {
    family: 'Ionicons',
    name: 'copy-outline',
    category: 'action',
    description: 'Copy to clipboard',
    usage: ['Copy', 'Duplicate', 'Clone'],
  },
  share: {
    family: 'Ionicons',
    name: 'share-outline',
    category: 'action',
    description: 'Share content',
    usage: ['Share', 'Send', 'Export'],
  },
  download: {
    family: 'Ionicons',
    name: 'download-outline',
    category: 'action',
    description: 'Download file',
    usage: ['Download', 'Save locally', 'Import'],
  },
  upload: {
    family: 'Ionicons',
    name: 'cloud-upload-outline',
    category: 'action',
    description: 'Upload file',
    usage: ['Upload', 'Send to cloud', 'Export'],
  },
  refresh: {
    family: 'Ionicons',
    name: 'refresh-outline',
    category: 'action',
    description: 'Refresh/reload',
    usage: ['Refresh', 'Reload', 'Update'],
  },
  sync: {
    family: 'Ionicons',
    name: 'sync-outline',
    category: 'action',
    description: 'Synchronize data',
    usage: ['Sync', 'Synchronize', 'Update'],
  },
  settings: {
    family: 'Ionicons',
    name: 'settings-outline',
    category: 'action',
    description: 'Settings/preferences',
    usage: ['Settings', 'Preferences', 'Configuration'],
  },

  // Content
  image: {
    family: 'Ionicons',
    name: 'image-outline',
    category: 'content',
    description: 'Image/photo',
    usage: ['Image', 'Photo', 'Picture'],
  },
  video: {
    family: 'Ionicons',
    name: 'videocam-outline',
    category: 'content',
    description: 'Video content',
    usage: ['Video', 'Recording', 'Media'],
  },
  audio: {
    family: 'Ionicons',
    name: 'musical-notes-outline',
    category: 'content',
    description: 'Audio content',
    usage: ['Audio', 'Music', 'Sound'],
  },
  document: {
    family: 'Ionicons',
    name: 'document-text-outline',
    category: 'content',
    description: 'Text document',
    usage: ['Document', 'File', 'Text'],
  },
  folder: {
    family: 'Ionicons',
    name: 'folder-outline',
    category: 'content',
    description: 'Folder/directory',
    usage: ['Folder', 'Directory', 'Collection'],
  },
  file: {
    family: 'Ionicons',
    name: 'document-outline',
    category: 'content',
    description: 'Generic file',
    usage: ['File', 'Document', 'Item'],
  },
  camera: {
    family: 'Ionicons',
    name: 'camera-outline',
    category: 'content',
    description: 'Camera/take photo',
    usage: ['Camera', 'Photo', 'Capture'],
  },
  gallery: {
    family: 'Ionicons',
    name: 'images-outline',
    category: 'content',
    description: 'Photo gallery',
    usage: ['Gallery', 'Photos', 'Collection'],
  },
  calendar: {
    family: 'Ionicons',
    name: 'calendar-outline',
    category: 'content',
    description: 'Calendar/date',
    usage: ['Calendar', 'Date', 'Schedule'],
  },
  clock: {
    family: 'Ionicons',
    name: 'time-outline',
    category: 'content',
    description: 'Time/clock',
    usage: ['Time', 'Clock', 'Duration'],
  },
  location: {
    family: 'Ionicons',
    name: 'location-outline',
    category: 'content',
    description: 'Location/GPS',
    usage: ['Location', 'GPS', 'Position'],
  },
  map: {
    family: 'Ionicons',
    name: 'map-outline',
    category: 'content',
    description: 'Map/navigation',
    usage: ['Map', 'Navigation', 'Directions'],
  },

  // Communication
  email: {
    family: 'Ionicons',
    name: 'mail-outline',
    category: 'communication',
    description: 'Email/message',
    usage: ['Email', 'Message', 'Contact'],
  },
  phone: {
    family: 'Ionicons',
    name: 'call-outline',
    category: 'communication',
    description: 'Phone call',
    usage: ['Phone', 'Call', 'Contact'],
  },
  message: {
    family: 'Ionicons',
    name: 'chatbubble-outline',
    category: 'communication',
    description: 'Text message',
    usage: ['Message', 'Chat', 'Text'],
  },
  chat: {
    family: 'Ionicons',
    name: 'chatbubbles-outline',
    category: 'communication',
    description: 'Chat/conversation',
    usage: ['Chat', 'Conversation', 'Discussion'],
  },
  notification: {
    family: 'Ionicons',
    name: 'notifications-outline',
    category: 'communication',
    description: 'Notification/alert',
    usage: ['Notification', 'Alert', 'Message'],
  },
  bell: {
    family: 'Ionicons',
    name: 'notifications-outline',
    category: 'communication',
    description: 'Bell/notification',
    usage: ['Bell', 'Notification', 'Alert'],
  },

  // Status
  success: {
    family: 'Ionicons',
    name: 'checkmark-circle-outline',
    category: 'status',
    description: 'Success/completed',
    usage: ['Success', 'Complete', 'Done'],
  },
  warning: {
    family: 'Ionicons',
    name: 'warning-outline',
    category: 'status',
    description: 'Warning/caution',
    usage: ['Warning', 'Caution', 'Alert'],
  },
  error: {
    family: 'Ionicons',
    name: 'close-circle-outline',
    category: 'status',
    description: 'Error/failed',
    usage: ['Error', 'Failed', 'Problem'],
  },
  info: {
    family: 'Ionicons',
    name: 'information-circle-outline',
    category: 'status',
    description: 'Information/help',
    usage: ['Information', 'Help', 'Details'],
  },
  loading: {
    family: 'Ionicons',
    name: 'reload-outline',
    category: 'status',
    description: 'Loading/processing',
    usage: ['Loading', 'Processing', 'Wait'],
  },
  check: {
    family: 'Ionicons',
    name: 'checkmark-outline',
    category: 'status',
    description: 'Check/confirm',
    usage: ['Check', 'Confirm', 'Yes'],
  },
  star: {
    family: 'Ionicons',
    name: 'star-outline',
    category: 'status',
    description: 'Star/favorite',
    usage: ['Star', 'Favorite', 'Rating'],
  },
  heart: {
    family: 'Ionicons',
    name: 'heart-outline',
    category: 'status',
    description: 'Heart/like',
    usage: ['Heart', 'Like', 'Love'],
  },
  bookmark: {
    family: 'Ionicons',
    name: 'bookmark-outline',
    category: 'status',
    description: 'Bookmark/save',
    usage: ['Bookmark', 'Save', 'Mark'],
  },

  // Interface
  eye: {
    family: 'Ionicons',
    name: 'eye-outline',
    category: 'interface',
    description: 'Show/visible',
    usage: ['Show', 'Visible', 'View'],
  },
  'eye-off': {
    family: 'Ionicons',
    name: 'eye-off-outline',
    category: 'interface',
    description: 'Hide/invisible',
    usage: ['Hide', 'Invisible', 'Private'],
  },
  lock: {
    family: 'Ionicons',
    name: 'lock-closed-outline',
    category: 'interface',
    description: 'Locked/secure',
    usage: ['Lock', 'Secure', 'Private'],
  },
  unlock: {
    family: 'Ionicons',
    name: 'lock-open-outline',
    category: 'interface',
    description: 'Unlocked/open',
    usage: ['Unlock', 'Open', 'Public'],
  },
  user: {
    family: 'Ionicons',
    name: 'person-outline',
    category: 'interface',
    description: 'User/person',
    usage: ['User', 'Person', 'Account'],
  },
  users: {
    family: 'Ionicons',
    name: 'people-outline',
    category: 'interface',
    description: 'Users/group',
    usage: ['Users', 'Group', 'Team'],
  },
  profile: {
    family: 'Ionicons',
    name: 'person-circle-outline',
    category: 'interface',
    description: 'User profile',
    usage: ['Profile', 'Account', 'User'],
  },
  logout: {
    family: 'Ionicons',
    name: 'log-out-outline',
    category: 'interface',
    description: 'Logout/sign out',
    usage: ['Logout', 'Sign out', 'Exit'],
  },
  login: {
    family: 'Ionicons',
    name: 'log-in-outline',
    category: 'interface',
    description: 'Login/sign in',
    usage: ['Login', 'Sign in', 'Enter'],
  },

  // Business
  cart: {
    family: 'Ionicons',
    name: 'cart-outline',
    category: 'business',
    description: 'Shopping cart',
    usage: ['Cart', 'Shopping', 'Purchase'],
  },
  payment: {
    family: 'Ionicons',
    name: 'card-outline',
    category: 'business',
    description: 'Payment/billing',
    usage: ['Payment', 'Billing', 'Transaction'],
  },
  'credit-card': {
    family: 'Ionicons',
    name: 'card-outline',
    category: 'business',
    description: 'Credit card',
    usage: ['Credit card', 'Payment', 'Card'],
  },
  money: {
    family: 'Ionicons',
    name: 'cash-outline',
    category: 'business',
    description: 'Money/cash',
    usage: ['Money', 'Cash', 'Currency'],
  },
  tag: {
    family: 'Ionicons',
    name: 'pricetag-outline',
    category: 'business',
    description: 'Price tag/label',
    usage: ['Tag', 'Price', 'Label'],
  },
  gift: {
    family: 'Ionicons',
    name: 'gift-outline',
    category: 'business',
    description: 'Gift/present',
    usage: ['Gift', 'Present', 'Reward'],
  },

  // System
  wifi: {
    family: 'Ionicons',
    name: 'wifi-outline',
    category: 'system',
    description: 'WiFi connection',
    usage: ['WiFi', 'Internet', 'Connection'],
  },
  bluetooth: {
    family: 'Ionicons',
    name: 'bluetooth-outline',
    category: 'system',
    description: 'Bluetooth connection',
    usage: ['Bluetooth', 'Wireless', 'Connection'],
  },
  battery: {
    family: 'Ionicons',
    name: 'battery-half-outline',
    category: 'system',
    description: 'Battery level',
    usage: ['Battery', 'Power', 'Charge'],
  },
  signal: {
    family: 'Ionicons',
    name: 'cellular-outline',
    category: 'system',
    description: 'Signal strength',
    usage: ['Signal', 'Network', 'Connection'],
  },
  power: {
    family: 'Ionicons',
    name: 'power-outline',
    category: 'system',
    description: 'Power on/off',
    usage: ['Power', 'On/Off', 'Switch'],
  },
  help: {
    family: 'Ionicons',
    name: 'help-circle-outline',
    category: 'system',
    description: 'Help/support',
    usage: ['Help', 'Support', 'Question'],
  },
  'info-circle': {
    family: 'Ionicons',
    name: 'information-circle-outline',
    category: 'system',
    description: 'Information',
    usage: ['Information', 'Details', 'About'],
  },
}

// Icon system configuration
export const iconSystemConfig: IconSystemConfig = {
  defaultFamily: DEFAULT_ICON_FAMILY,
  defaultSize: DEFAULT_ICON_SIZE,
  defaultVariant: 'outline',
  sizes: iconSizes,
  semantic: semanticIconMap,
}

// Complete icon system
export const iconSystem: IconSystem = {
  config: iconSystemConfig,
  families: [
    'Ionicons',
    'MaterialIcons',
    'MaterialCommunityIcons',
    'FontAwesome',
    'FontAwesome5',
    'Feather',
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Foundation',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
  ],
  categories: [
    'navigation',
    'action',
    'content',
    'communication',
    'status',
    'interface',
    'business',
    'system',
  ],
  sizes: iconSizes,
  semantic: semanticIconMap,
}

// Utility function to get icon definition
export function getIconDefinition(name: SemanticIconName): IconDefinition | null {
  const iconMap: Record<string, IconDefinition> = semanticIconMap
  return iconMap[name] || null
}

// Utility function to get icon size
export function getIconSize(size: IconSize | number): number {
  if (typeof size === 'number') {
    return size
  }
  const sizeMap: Record<string, number> = iconSizes
  return sizeMap[size] || sizeMap[DEFAULT_ICON_SIZE]
}

// Utility function to resolve icon props
export function resolveIconProps(name: SemanticIconName | string, family?: IconFamily) {
  // Check if it's a semantic icon
  const iconMap: Record<string, IconDefinition> = semanticIconMap
  const semanticIcon = iconMap[name]
  if (semanticIcon) {
    return {
      family: semanticIcon.family,
      name: semanticIcon.name,
      definition: semanticIcon,
    }
  }

  // Use provided family or default
  return {
    family: family || DEFAULT_ICON_FAMILY,
    name: name,
    definition: null,
  }
}

// Utility function to get icon by category
export function getIconsByCategory(category: IconCategory): IconDefinition[] {
  return Object.values(semanticIconMap).filter((icon) => icon.category === category)
}

// Utility function to validate icon name
export function isValidIconName(name: string): boolean {
  const iconMap: Record<string, IconDefinition> = semanticIconMap
  return name in iconMap
}

// Export for easy access
export { semanticIconMap as icons }
