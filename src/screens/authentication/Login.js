import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = ({ route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState("");

  const handleSignupPress = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = () => {
    const { name, email: signupEmail, password: signupPassword } = route.params;

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (email === signupEmail && password === signupPassword) {
      // Authentication successful, navigate to the home screen
      navigation.navigate("Home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account 👩‍🍳</Text>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
          <Text style={styles.signupButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignupPress}>
            <Text style={styles.loginLink}>Signup</Text>
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
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
