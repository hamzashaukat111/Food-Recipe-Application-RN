import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/icons/logo.png")}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          <Text style={styles.firstWord}>PAK</Text>{" "}
          <Text style={styles.secondWord}>WAAAN</Text>
        </Text>
        <Text style={styles.subtitle}>باہر کا ذائقہ گھر میں</Text>
        {/* <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    height: 200,
    alignSelf: "center",
    // marginBottom: 180,
  },
  contentContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
  },
  firstWord: {
    color: "green",
  },
  secondWord: {
    color: "black",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 180,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#CC872C",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginButton: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Welcome;
