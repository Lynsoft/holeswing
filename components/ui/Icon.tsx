/**
 * Design System Icon Component
 * Unified icon component using Expo Vector Icons with design system integration
 */

import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import type { IconProps } from '~/types/icons'
import { useIcons } from '~/utils/useIcons'
import { useSpacing } from '~/utils/useSpacing'

// Icon family component mapping
const IconFamilyComponents = {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
  AntDesign,
  Entypo,
  EvilIcons,
  Foundation,
  Octicons,
  SimpleLineIcons,
  Zocial,
} as const

/**
 * Design System Icon Component
 *
 * @example
 * // Semantic icon usage
 * <Icon name="home" size="md" color="primary" />
 *
 * // Direct icon usage
 * <Icon family="Ionicons" name="home-outline" size="lg" />
 *
 * // Interactive icon
 * <Icon name="menu" size="lg" onPress={() => openMenu()} />
 *
 * // With NativeWind classes
 * <Icon name="search" className="text-primary" size="md" />
 */
export default function Icon({
  name,
  family,
  size = 'md',
  color,
  variant,
  weight,
  style,
  accessibilityLabel,
  accessibilityHint,
  onPress,
  disabled = false,
  focused = false,
  selected = false,
  animated = false,
  rotation = 0,
  className,
  ...props
}: IconProps) {
  const { resolveProps, getSizeValue, getIconColor, isAccessible } = useIcons()

  // Resolve icon props (semantic or direct)
  const resolved = resolveProps(name, family)
  const IconComponent = IconFamilyComponents[resolved.family as keyof typeof IconFamilyComponents]

  // Get size value
  const sizeValue = getSizeValue(size)

  // Get color value
  const colorValue = getIconColor(color)

  // Check accessibility
  const isAccessibilityCompliant = isAccessible(size, !!onPress)

  // Create icon element
  const iconElement = (
    <IconComponent
      name={resolved.name as never}
      size={sizeValue}
      color={colorValue}
      style={[
        style,
        rotation && { transform: [{ rotate: `${rotation}deg` }] },
        disabled && { opacity: 0.5 },
        focused && { opacity: 0.8 },
        selected && { opacity: 1 },
      ]}
      {...props}
    />
  )

  // Accessibility props
  const accessibilityProps = {
    accessibilityLabel: accessibilityLabel || resolved.definition?.description || `${name} icon`,
    accessibilityHint,
    accessibilityRole: onPress ? ('button' as const) : ('image' as const),
    accessible: true,
  }

  // If interactive, wrap in TouchableOpacity
  if (onPress && !disabled) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          {
            minWidth: isAccessibilityCompliant ? sizeValue : 44,
            minHeight: isAccessibilityCompliant ? sizeValue : 44,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        {...accessibilityProps}>
        {iconElement}
      </TouchableOpacity>
    )
  }

  // Non-interactive icon
  return (
    <View
      style={[
        {
          width: sizeValue,
          height: sizeValue,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
      {...accessibilityProps}>
      {iconElement}
    </View>
  )
}

/**
 * Icon variants for common use cases
 */

// Navigation Icon
function NavigationIcon({
  name,
  focused = false,
  ...props
}: Omit<IconProps, 'size' | 'color'> & { focused?: boolean }) {
  const { getNavigationIconProps } = useIcons()
  const iconProps = getNavigationIconProps(name as never, focused)

  return <Icon name={name} {...iconProps} {...props} />
}

// Button Icon
function ButtonIcon({
  name,
  variant = 'primary',
  ...props
}: Omit<IconProps, 'size' | 'color' | 'variant'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}) {
  const { getButtonIconProps } = useIcons()
  const iconProps = getButtonIconProps(name as never, variant)

  return <Icon name={name} {...iconProps} {...props} />
}

// Status Icon
function StatusIcon({
  status,
  ...props
}: Omit<IconProps, 'name' | 'size' | 'color'> & {
  status: 'success' | 'warning' | 'error' | 'info'
}) {
  const { getStatusIconProps } = useIcons()
  const iconProps = getStatusIconProps(status)

  return <Icon name={status} {...iconProps} {...props} />
}

// Icon with text
function IconWithText({
  icon,
  text,
  direction = 'horizontal',
  gap = 'sm',
  iconProps = {},
  textProps = {},
  ...props
}: {
  icon: string
  text: string
  direction?: 'horizontal' | 'vertical'
  gap?: 'xs' | 'sm' | 'md' | 'lg'
  iconProps?: Partial<IconProps>
  textProps?: object
} & object) {
  const { getValue } = useSpacing()

  const gapValue = getValue(gap)
  const isHorizontal = direction === 'horizontal'

  return (
    <View
      style={[
        {
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: 'center',
          gap: gapValue,
        },
      ]}
      {...props}>
      <Icon name={icon} {...iconProps} />
      <Text {...textProps}>{text}</Text>
    </View>
  )
}

// Loading Icon (animated)
function LoadingIcon({
  size = 'md',
  color = 'primary',
  ...props
}: Omit<IconProps, 'name' | 'animated'>) {
  return <Icon name="loading" size={size} color={color} animated={true} {...props} />
}

// Icon Button (icon with touch feedback)
function IconButton({
  name,
  size = 'lg',
  color = 'foreground',
  onPress,
  disabled = false,
  accessibilityLabel,
  style,
  ...props
}: IconProps) {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      style={[
        {
          padding: 8, // Ensure minimum touch target
        },
        style,
      ]}
      {...props}
    />
  )
}

// Export all icon components
export { NavigationIcon, ButtonIcon, StatusIcon, IconWithText, LoadingIcon, IconButton }
