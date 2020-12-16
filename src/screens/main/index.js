import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Principal!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f333ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
