import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

const SecondScreen = (props) => {
  const greetingObject = useSelector((state) => state.secondPageGreeting);
  return (
    <View style={styles.container}>
      <Text>{greetingObject.title}</Text>
      <Text>{greetingObject.body}</Text>
      <Text>{props.route.params.customParameter}</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
