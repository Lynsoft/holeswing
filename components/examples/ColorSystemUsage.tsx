/**
 * Color System Usage Examples
 * Demonstrates practical usage of the design system colors
 */

import { Text, TouchableOpacity, View } from 'react-native'
import { useColors } from '~/utils/useColors'

// Example Button Component using color system
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onPress?: () => void
  disabled?: boolean
}

function Button({ variant = 'primary', size = 'md', children, onPress, disabled }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  }

  const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  return (
    <TouchableOpacity
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        rounded-lg 
        ${disabled ? 'opacity-50' : ''}
      `}
      onPress={onPress}
      disabled={disabled}>
      <Text className={`text-white text-center font-medium ${textSizeClasses[size]}`}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

// Example Card Component using color system
interface CardProps {
  title: string
  description: string
  status?: 'success' | 'warning' | 'error' | 'info'
  children?: React.ReactNode
}

function Card({ title, description, status, children }: CardProps) {
  const statusConfig = {
    success: {
      borderColor: 'border-l-success',
      backgroundColor: 'bg-success/10',
      textColor: 'text-success',
    },
    warning: {
      borderColor: 'border-l-warning',
      backgroundColor: 'bg-warning/10',
      textColor: 'text-warning',
    },
    error: {
      borderColor: 'border-l-error',
      backgroundColor: 'bg-error/10',
      textColor: 'text-error',
    },
    info: {
      borderColor: 'border-l-info',
      backgroundColor: 'bg-info/10',
      textColor: 'text-info',
    },
  }

  const config = status ? statusConfig[status] : null

  return (
    <View
      className={`
        bg-surface border border-border rounded-lg p-4
        ${config ? `${config.borderColor} ${config.backgroundColor} border-l-4` : ''}
      `}>
      <Text className="text-foreground text-lg font-bold mb-2">{title}</Text>
      <Text className="text-muted mb-3">{description}</Text>
      {status && (
        <View className="mb-3">
          <Text className={`text-sm font-medium ${config?.textColor}`}>
            Status: {status.charAt(0).toUpperCase() + status.slice(1)}
          </Text>
        </View>
      )}
      {children}
    </View>
  )
}

// Example Badge Component using color system
interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  children: React.ReactNode
}

function Badge({ variant = 'primary', children }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    error: 'bg-error/10 text-error border-error/20',
    info: 'bg-info/10 text-info border-info/20',
  }

  return (
    <View className={`px-2 py-1 rounded-full border ${variantClasses[variant]}`}>
      <Text className="text-xs font-medium">{children}</Text>
    </View>
  )
}

// Example Alert Component using color system
interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info'
  title: string
  message: string
  onDismiss?: () => void
}

function Alert({ type, title, message, onDismiss }: AlertProps) {
  const typeConfig = {
    success: {
      bgColor: 'bg-success/10',
      borderColor: 'border-success',
      textColor: 'text-success',
      titleColor: 'text-success',
    },
    warning: {
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning',
      textColor: 'text-warning',
      titleColor: 'text-warning',
    },
    error: {
      bgColor: 'bg-error/10',
      borderColor: 'border-error',
      textColor: 'text-error',
      titleColor: 'text-error',
    },
    info: {
      bgColor: 'bg-info/10',
      borderColor: 'border-info',
      textColor: 'text-info',
      titleColor: 'text-info',
    },
  }

  const config = typeConfig[type]

  return (
    <View className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4`}>
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className={`font-bold text-base ${config.titleColor} mb-1`}>{title}</Text>
          <Text className={`text-sm ${config.textColor}`}>{message}</Text>
        </View>
        {onDismiss && (
          <TouchableOpacity onPress={onDismiss} className="ml-2">
            <Text className={`text-lg ${config.textColor}`}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

// Main demo component
export default function ColorSystemUsage() {
  const { background, theme } = useColors()

  return (
    <View className="flex-1 p-4" style={{ backgroundColor: background }}>
      <Text className="text-2xl font-bold mb-6 text-foreground">Color System Usage</Text>

      <Text className="text-lg font-semibold mb-4 text-foreground">Buttons</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
      </View>

      <Text className="text-lg font-semibold mb-4 text-foreground">Badges</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </View>

      <Text className="text-lg font-semibold mb-4 text-foreground">Cards</Text>
      <View className="space-y-4 mb-6">
        <Card title="Default Card" description="This is a default card without status">
          <Button size="sm">Action</Button>
        </Card>

        <Card title="Success Card" description="This card shows a success state" status="success">
          <Badge variant="success">Completed</Badge>
        </Card>

        <Card title="Warning Card" description="This card shows a warning state" status="warning">
          <Badge variant="warning">Attention</Badge>
        </Card>
      </View>

      <Text className="text-lg font-semibold mb-4 text-foreground">Alerts</Text>
      <View className="space-y-3 mb-6">
        <Alert type="success" title="Success!" message="Your action was completed successfully." />
        <Alert type="warning" title="Warning" message="Please review your input." />
        <Alert type="error" title="Error" message="Something went wrong. Please try again." />
        <Alert type="info" title="Info" message="Here's some helpful information." />
      </View>

      <View className="mt-4 p-3 bg-surface rounded-lg border border-border">
        <Text className="text-sm text-foreground">
          Current theme: <Text className="font-bold">{theme}</Text>
        </Text>
        <Text className="text-xs text-muted mt-1">
          All colors automatically adapt to the current theme
        </Text>
      </View>
    </View>
  )
}
