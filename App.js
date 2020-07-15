import React from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Week2 from "./components/week2";
import Week3 from "./components/week3";
import reducer from "./reducer";

// A very simple store
let store = createStore(reducer);

class Counter extends React.Component {
  static navigationOptions = {
    title: "Counter!",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
        <Button
          title="Increment"
          onPress={() => this.props.dispatch({ type: "INCREMENT" })}
        />
        <Button
          title="Decrement"
          onPress={() => this.props.dispatch({ type: "DECREMENT" })}
        />

        <Button
          title="Go to static count screen"
          onPress={() => this.props.navigation.navigate("StaticCounter")}
        />
      </View>
    );
  }
}

// Another screen!
class StaticCounter extends React.Component {
  static navigationOptions = {
    title: `Same number, wow!`,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
      </View>
    );
  }
}

// Connect the screens to Redux
let CounterContainer = connect((state) => ({ count: state.count }))(Counter);
let StaticCounterContainer = connect((state) => ({ count: state.count }))(
  StaticCounter
);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello World. Welcome to VN</Text>
      <Button title="Week 2" onPress={() => navigation.navigate("Week2")} />
      <Button title="Week 3" onPress={() => navigation.navigate("Week3")} />
      <CounterContainer />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri:
          "https://www.codeplusinfo.com/wp-content/uploads/2020/02/react-native-logo-e1581157043920.png",
      }}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Week2"
            component={Week2}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Week3"
            component={Week3}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
