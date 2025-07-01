import { Stack } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Container } from '~/components/Container'
import Icon from '~/components/ui/Icon'
import { useColors } from '~/utils/useColors'

interface CourseCardProps {
  name: string
  location: string
  rating: number
  distance: string
  price: string
  features: string[]
}

function CourseCard({ name, location, rating, distance, price, features }: CourseCardProps) {
  return (
    <TouchableOpacity className="bg-surface border border-border rounded-lg p-4 mb-4">
      <View className="flex-row items-start justify-between mb-3">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-foreground mb-1">{name}</Text>
          <View className="flex-row items-center gap-2 mb-2">
            <Icon name="location" size="sm" color="muted" />
            <Text className="text-sm text-muted">{location}</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              <Icon name="star" size="sm" color="warning" />
              <Text className="text-sm font-medium text-foreground">{rating}</Text>
            </View>
            <Text className="text-sm text-muted">{distance}</Text>
            <Text className="text-sm font-semibold text-primary">{price}</Text>
          </View>
        </View>
        <Icon name="heart" size="lg" color="muted" />
      </View>

      <View className="flex-row flex-wrap gap-2">
        {features.map((feature) => (
          <View key={feature} className="bg-muted/10 px-2 py-1 rounded">
            <Text className="text-xs text-muted">{feature}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  )
}

export default function CoursesScreen() {
  const { background } = useColors()

  const courses = [
    {
      name: 'Pebble Beach Golf Links',
      location: 'Pebble Beach, CA',
      rating: 4.8,
      distance: '2.3 miles',
      price: '$595',
      features: ['Ocean Views', 'Pro Shop', 'Cart Included', 'Caddie Available'],
    },
    {
      name: 'Augusta National Golf Club',
      location: 'Augusta, GA',
      rating: 4.9,
      distance: '5.1 miles',
      price: '$450',
      features: ['Championship Course', 'Practice Range', 'Clubhouse', 'Lessons'],
    },
    {
      name: 'St. Andrews Links',
      location: 'St. Andrews, Scotland',
      rating: 4.7,
      distance: '12.8 miles',
      price: '$320',
      features: ['Historic Course', 'Links Style', 'Pro Shop', 'Restaurant'],
    },
  ]

  return (
    <>
      <Stack.Screen options={{ title: 'Golf Courses' }} />
      <Container>
        <ScrollView
          className="flex-1 p-4"
          style={{ backgroundColor: background }}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="mb-6">
            <Text className="text-3xl font-bold text-foreground mb-2">Golf Courses</Text>
            <Text className="text-base text-muted leading-relaxed">
              Discover and book tee times at premium golf courses near you.
            </Text>
          </View>

          {/* Search and Filter */}
          <View className="mb-6">
            <View className="flex-row gap-3 mb-4">
              <TouchableOpacity className="flex-1 bg-surface border border-border p-3 rounded-lg flex-row items-center gap-3">
                <Icon name="search" size="md" color="muted" />
                <Text className="text-muted">Search courses...</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-surface border border-border p-3 rounded-lg">
                <Icon name="filter" size="md" color="primary" />
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-2">
              <TouchableOpacity className="bg-primary px-4 py-2 rounded-full">
                <Text className="text-white font-medium text-sm">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-surface border border-border px-4 py-2 rounded-full">
                <Text className="text-foreground font-medium text-sm">Nearby</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-surface border border-border px-4 py-2 rounded-full">
                <Text className="text-foreground font-medium text-sm">Top Rated</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Course List */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">Available Courses</Text>
            {courses.map((course) => (
              <CourseCard key={course.name} {...course} />
            ))}
          </View>

          {/* Load More */}
          <TouchableOpacity className="bg-surface border border-border p-4 rounded-lg items-center mb-8">
            <Text className="text-primary font-medium">Load More Courses</Text>
          </TouchableOpacity>

          {/* Bottom spacing */}
          <View className="h-20" />
        </ScrollView>
      </Container>
    </>
  )
}
