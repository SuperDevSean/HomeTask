// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import ProfileLookupScreen from "./screens/ProfileLookupScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="Profile Lookup" component={ProfileLookupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
