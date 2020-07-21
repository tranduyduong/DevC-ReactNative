import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>HomeScreen</Text>
      <Button
        title="Goto Profile"
        onPress={() => navigation.navigate("profile")}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>ProfileScreen</Text>
      <Button
        title="Goto Detail"
        onPress={() => navigation.navigate("detail")}
      />
    </View>
  );
};

const DetailScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>DetailScreen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HeaderTitle = () => <Text>Header title</Text>;
const HeaderLeft = () => (
  <Button
    title="backgroundColor"
    onPress={(navigation) => navigation.navigate("home")}
  />
);

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return (
              <HomeIconWithBadge name={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "green",
        }}
      >
        <Tab.Screen name="home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
      {/*<Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: "Profile",
            headerTitle: () => <HeaderTitle />,
            headerLeft: () => (
              <Button
                title="backgroundColor"
                onPress={() => navigation.navigate("home")}
              />
            ),
            headerRight: () => (
              <Button
                title="backgroundColor"
                onPress={() => navigation.navigate("home")}
              />
            ),
          })}
        />
        <Stack.Screen name="detail" component={DetailScreen} />
        </Stack.Navigator>*/}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
