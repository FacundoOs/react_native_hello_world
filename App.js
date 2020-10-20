import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const App = () => {
  const greeting = useSelector(state => state.greeting)
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>{greeting}</Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});