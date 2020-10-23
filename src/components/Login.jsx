import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Auth from "../modules/authentication";

const Login = () => {
  const auth = new Auth({ host: "http//localhost:3000/api/v1" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loginHandler = async () => {
    try {
      let response = await auth.signIn(email, password);
      setMessage(response.data.uid);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text>Please Log in</Text>
      <Text>{message}</Text>
      <TextInput
        editable
        placeholder="email"
        value={email}
        onChange={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        editable
        placeholder="password"
        value={password}
        secureTextEntry
        onChange={(text) => setPassword(text)}
      ></TextInput>
      <Button title="log in" onPress={() => loginHandler()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
