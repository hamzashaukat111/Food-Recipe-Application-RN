import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import firebase from 'firebase/app'; // Import the main firebase package
// import 'firebase/auth'; // Import the firebase/auth module for authentication
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  //   const handleSignup = async () => {
  //     try {
  //       await firebase.auth().createUserWithEmailAndPassword(email, password);
  //       console.log('User account created & signed in!');
  //     } catch (error) {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }
  //
  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }
  //
  //       console.error(error);
  //     }
  //   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First create your account 👩‍🍳</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={email}
          onChangeText={setEmail}
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
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: 'white',
    padding: 28,
  },
  logo: {
    width: '70%',
    height: '20%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D38A37',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  signupButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    color: 'black',
  },
  loginLink: {
    fontSize: 16,
    color: '#CC872C',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Signup;
