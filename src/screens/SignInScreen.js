import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { styles } from "../components/Styles";

const SignInScreen = ({navigation }) => {
  const { signIn, setSession, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

     await setSession(completeSignIn.createdSessionId);
    } catch (err) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const onSignUpPress = () => navigation.replace("SignUp");

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          style={styles.textInput}
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onSignInPress}>
        <Text style={styles.primaryButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Have an account?</Text>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onSignUpPress}
        >
          <Text style={styles.secondaryButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SignInScreen;