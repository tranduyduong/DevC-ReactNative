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
