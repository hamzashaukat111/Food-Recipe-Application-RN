import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState("");

  // const handleLoginPress = () => {
  //   navigation.navigate("Login");
  // };
  const handleLoginPress = () => {
    navigation.navigate("Login", { email, password });
  };

  const handleSignup = () => {
    if (name === "" || email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Perform additional validation or data processing if needed

    // Store the signup data in a variable or pass it to the login screen
    navigation.navigate("Login", { name, email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First create your account 👩‍🍳</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 28,
  },
  logo: {
    width: "70%",
    height: "20%",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D38A37",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
  signupButton: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    color: "black",
  },
  loginLink: {
    fontSize: 16,
    color: "#CC872C",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Signup;
