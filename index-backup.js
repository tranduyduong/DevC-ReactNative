import { registerRootComponent } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
import AllScreen from "./components/week4/assignment/all.js";
import CompletedScreen from "./components/week4/assignment/complete";
import ActiveScreen from "./components/week4/assignment/active.js";
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="all"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "completed") {
              iconName = focused ? "ios-done-all" : "ios-done-all";
            } else if (route.name === "all") {
              iconName = focused
                ? "ios-add-circle-outline"
                : "ios-add-circle-outline";
            } else if (route.name === "active") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "green",
        }}
      >
        <Tab.Screen name="completed" component={CompletedScreen}></Tab.Screen>
        <Tab.Screen name="all" component={AllScreen}></Tab.Screen>

        <Tab.Screen name="active" component={ActiveScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
registerRootComponent(App);
