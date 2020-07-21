import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>HomeScreen</Text>
      <TouchableHighlight
        style={{
          height: 40,
          width: 160,
          borderRadius: 10,
          backgroundColor: "yellow",
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
        }}
      >
        <Button
          title="goto Profile"
          color="#f194ff"
          onPress={() => navigation.navigate("profile")}
        />
      </TouchableHighlight>
    </View>
  );
};
const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>ProfileScreen</Text>
      <TouchableHighlight
        style={{
          height: 40,
          width: 160,
          borderRadius: 10,
          backgroundColor: "green",
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
        }}
      >
        <Button
          title="goto Detail"
          color="#f194ff"
          onPress={() => navigation.navigate("detail")}
        />
      </TouchableHighlight>
    </View>
  );
};
const DetailScreen = () => {
  return <Text>DetailScreen</Text>;
};

const Stack = createStackNavigator();
const HeaderTitle = () => <Text>Header Title</Text>;
const HeaderRight = () => (
  <Button title="Alert" onPress={() => Alert.alert("Hello")} />
);

const HeaderLeft = ({ navigation }) => (
  <Button title="LeftButton" onPress={() => navigation.navigate("home")} />
);

const Tab = createBottomTabNavigator();

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

export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            // title: "Home screen",
            headerTitle: () => <HeaderTitle />,
          }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={({ navigation, route }) => ({
            // headerShown: false,
            headerRight: () => <HeaderRight />,
            headerLeft: (props) => <HeaderLeft navigation={navigation} />,
          })}
        />
        <Stack.Screen name="detail" component={DetailScreen} />
        </Stack.Navigator>*/}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "profile") {
              iconName = focused ? "ios-aperture" : "ios-aperture";
            } else if (route.name === "detail") {
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
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
        <Tab.Screen name="detail" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    borderColor: "green",
    width: 100,
    height: 30,
  },
});
