import { Stack } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Container } from '~/components/Container'
import Icon from '~/components/ui/Icon'
import { useColors } from '~/utils/useColors'

export default function Home() {
  const { background } = useColors()

  return (
    <>
      <Stack.Screen options={{ title: 'Golf Field' }} />
      <Container>
        <ScrollView
          className="flex-1 p-4"
          style={{ backgroundColor: background }}
          showsVerticalScrollIndicator={false}>
          {/* Welcome Header */}
          <View className="mb-6">
            <Text className="text-3xl font-bold text-foreground mb-2">Welcome to Golf Field</Text>
            <Text className="text-base text-muted leading-relaxed">
              Discover amazing golf courses, book tee times, and track your game.
            </Text>
          </View>

          {/* Quick Actions */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">Quick Actions</Text>
            <View className="space-y-3">
              <TouchableOpacity className="bg-primary p-4 rounded-lg flex-row items-center gap-3">
                <Icon name="add" size="lg" color="white" />
                <View className="flex-1">
                  <Text className="text-white font-semibold text-lg">Book Tee Time</Text>
                  <Text className="text-white/80 text-sm">Find and reserve your next round</Text>
                </View>
                <Icon name="forward" size="sm" color="white" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-surface border border-border p-4 rounded-lg flex-row items-center gap-3">
                <Icon name="search" size="lg" color="primary" />
                <View className="flex-1">
                  <Text className="text-foreground font-semibold text-lg">Find Courses</Text>
                  <Text className="text-muted text-sm">Explore golf courses near you</Text>
                </View>
                <Icon name="forward" size="sm" color="muted" />
              </TouchableOpacity>

              <TouchableOpacity className="bg-surface border border-border p-4 rounded-lg flex-row items-center gap-3">
                <Icon name="user" size="lg" color="primary" />
                <View className="flex-1">
                  <Text className="text-foreground font-semibold text-lg">My Profile</Text>
                  <Text className="text-muted text-sm">View stats and preferences</Text>
                </View>
                <Icon name="forward" size="sm" color="muted" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Activity */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">Recent Activity</Text>
            <View className="bg-surface border border-border rounded-lg p-4">
              <View className="flex-row items-center gap-3 mb-3">
                <Icon name="calendar" size="md" color="success" />
                <Text className="text-base font-medium text-foreground">No recent rounds</Text>
              </View>
              <Text className="text-sm text-muted">
                Book your first tee time to start tracking your golf activity.
              </Text>
            </View>
          </View>

          {/* Featured Courses */}
          <View className="mb-8">
            <Text className="text-xl font-bold text-foreground mb-4">Featured Courses</Text>
            <View className="bg-surface border border-border rounded-lg p-4">
              <View className="flex-row items-center gap-3 mb-3">
                <Icon name="star" size="md" color="warning" />
                <Text className="text-base font-medium text-foreground">
                  Discover Amazing Courses
                </Text>
              </View>
              <Text className="text-sm text-muted mb-3">
                Explore top-rated golf courses in your area with detailed information and reviews.
              </Text>
              <TouchableOpacity className="bg-primary/10 p-3 rounded-lg flex-row items-center justify-center gap-2">
                <Icon name="map" size="sm" color="primary" />
                <Text className="text-primary font-medium">Browse Courses</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom spacing */}
          <View className="h-20" />
        </ScrollView>
      </Container>
    </>
  )
}
