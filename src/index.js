import { registerRootComponent } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
import AllScreen from "./components/week4/assignment/all.js";
import CompletedScreen from "./components/week4/assignment/complete";
import ActiveScreen from "./components/week4/assignment/active.js";
import MainTabNavigator from "./components/week4/lab/MainTabNavigator"
const App = () => {
  return (
    <MainTabNavigator />
  );
};
registerRootComponent(App);
