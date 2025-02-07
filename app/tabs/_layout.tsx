import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sorteo',
          tabBarIcon: ({ color }) => <Ionicons  size={28} name="color-wand" color={color} />,
        }}
      />
      <Tabs.Screen
        name="alumnos/index"
        options={{
          title:'Alumnos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="people" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
