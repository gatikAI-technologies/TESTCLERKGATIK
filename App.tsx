import { ClerkProvider } from "@clerk/clerk-expo";
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import { SignIn } from "@clerk/clerk-react";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import VerifyCodeScreen from "./src/screens/VerifyCodeScreen";
import SafeMyProfileScreen from "./src/screens/MyProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNaviagtion from "./src/Navigation/RootNavigation";

export default function App() {
  const publishableKey = "pk_test_d2lubmluZy1zYWxtb24tMjIuY2xlcmsuYWNjb3VudHMuZGV2JA";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <NavigationContainer>
        <RootNaviagtion />
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});