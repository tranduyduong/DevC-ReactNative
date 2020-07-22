import React from "react";
import { createStackNavigator } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import ContactsScreen from "./ContactScreen"
import MessagesScreen from "./MessagesScreen";
import GroupsScreen from "./GroupsScreen";
import { Platform } from "react-native";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});
// declare message stack
const MessageStack = createStackNavigator(
    {
        Message: MessagesScreen
    },
    config
)
MessageStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ focused }) => (
      <Ionicons
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatbubbles" : "android-messages"}
      />
  )
}
MessageStack.path = "";
// declare group stack
const GroupsStack = createStackNavigator(
    {
      Groups: GroupsScreen
    },
    config
);
  
GroupsStack.navigationOptions = {
    tabBarLabel: "Groups",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        focused={focused}
        name={Platform.OS === "ios" ? "ios-people" : "md-options"}
      />
    )
};
  
GroupsStack.path = "";
// declare contact stack
const ContactsStack = createStackNavigator(
    {
      Contacts: ContactsScreen
    },
    config
  );
  
ContactsStack.navigationOptions = {
    tabBarLabel: "Contacts",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        focused={focused}
        name={Platform.OS === "ios" ? "ios-contacts" : "md-link"}
      />
    )
};
  
ContactsStack.path = "";

const tabNavigator = createBottomTabNavigator({
    MessagesStack,
    ContactsStack,
    GroupsStack
  });

tabNavigator.path = '';

export default tabNavigator