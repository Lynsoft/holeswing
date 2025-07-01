/**
 * Examples Layout
 * Tab navigation for design system examples
 */

import { Tabs } from 'expo-router'
import { TabBarIcon } from '~/components/TabBarIcon'

export default function ExamplesLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Overview',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="colors"
        options={{
          title: 'Colors',
          tabBarIcon: ({ color }) => <TabBarIcon name="paint-brush" color={color} />,
        }}
      />
      <Tabs.Screen
        name="typography"
        options={{
          title: 'Typography',
          tabBarIcon: ({ color }) => <TabBarIcon name="font" color={color} />,
        }}
      />
      <Tabs.Screen
        name="spacing"
        options={{
          title: 'Spacing',
          tabBarIcon: ({ color }) => <TabBarIcon name="expand" color={color} />,
        }}
      />
      <Tabs.Screen
        name="icons"
        options={{
          title: 'Icons',
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </Tabs>
  )
}
