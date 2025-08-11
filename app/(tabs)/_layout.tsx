import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#6D28D9",
        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <View>
              <Image 
                source={require("../../assets/images/react-logo.png")} 
                style={{ width: size, height: size, tintColor: color }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-[11px] ${focused ? "text-violet-700 font-semibold" : "text-gray-400"}`}>Home</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused, size }) => (
            <View>
              <Image 
                source={require("../../assets/images/react-logo.png")}  
                style={{ width: size, height: size, tintColor: color }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-[11px] ${focused ? "text-violet-700 font-semibold" : "text-gray-400"}`}>History</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, focused, size }) => (
            <View>
              <Image 
                source={require("../../assets/images/react-logo.png")} 
                style={{ width: size, height: size, tintColor: color }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-[11px] ${focused ? "text-violet-700 font-semibold" : "text-gray-400"}`}>Cards</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused, size }) => (
            <View>
              <Image 
                source={require("../../assets/images/react-logo.png")} 
                style={{ width: size, height: size, tintColor: color }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-[11px] ${focused ? "text-violet-700 font-semibold" : "text-gray-400"}`}>More</Text>
          ),
        }}
      />
    </Tabs>
  );
}


