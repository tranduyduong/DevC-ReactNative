import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TODOS } from "./data";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TodoItem = (props) => {
  const statusStyle = {
    backgroundColor: props.todo.status === "Done" ? "blue" : "green",
  };
  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

const AllScreen = ({ navigation }) => {
  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: "Active",
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          "https://mondrian.mashable.com/wp-content%252Fgallery%252Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUlnumotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com",
      }}
    >
      <KeyboardAvoidingView enabled behavior="padding">
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            {todoList.map((todo, idx) => {
              return (
                <TodoItem
                  key={todo.body}
                  todo={todo}
                  idx={idx}
                  onToggleTodo={onToggleTodo}
                />
              );
            })}

            <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                // onChangeText={(text) => setTodoBody(text)}
              />
              <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const CompletedScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>CompletedScreen</Text>
    </View>
  );
};

const ActiveScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>ActiveScreen</Text>
    </View>
  );
};

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
const styles = StyleSheet.create({
  // ... more styles

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "95%",
    minHeight: 20,
    color: "white",
    borderRadius: 5,
    flexWrap: "wrap",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },

  todoInput: {
    width: "95%",
    minHeight: 30,
    color: "white",
    borderWidth: 1,
    marginTop: "20%",
    marginBottom: "5%",
    borderColor: "grey",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default App;
