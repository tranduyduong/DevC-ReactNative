import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Messages"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});