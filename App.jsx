import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/components/MainScreen";
import SecondScreen from "./src/components/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/components/Login'
// import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  // const greeting = useSelector(state => state.mainPageGreeting)
  return (
    // <View style={styles.container}>
    // <Text>Hello World!</Text>
    //   <Text>{greeting}</Text>

    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="The First Page" component={MainScreen} />
        <Stack.Screen name="Another Page" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
