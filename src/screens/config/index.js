import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Configuration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Configuration!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Configuration;
