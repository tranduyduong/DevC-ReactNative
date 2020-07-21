import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HeaderTitle = () => {
  return (
    <View>
      <Text>header Title</Text>
    </View>
  );
};
const HeaderRight = () => {
  return <Text>headerRight</Text>;
};

const HeaderLeft = () => {
  return <Text>headerLeft</Text>;
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("setting")}
      ></Button>
    </View>
  );
}
function SettingScreen({ navigation }) {
  return (
    <View style={styles.settingScreen}>
      <Text>Setting Screen</Text>
      <Button
        title="goto Avatar Setting"
        onPress={() => navigation.navigate("avatar")}
      ></Button>
    </View>
  );
}

function AvatarScreen() {
  return (
    <View style={styles.avatarScreen}>
      <Text>Avatar setting</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="setting"
          component={SettingScreen}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <Button
                title="back"
                onPress={() => navigation.navigate("home")}
              ></Button>
            ),
          })}
        ></Stack.Screen>
        <Stack.Screen name="avatar" component={AvatarScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  settingScreen: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarScreen: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});
