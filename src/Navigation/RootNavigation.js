
import * as React from "react";

import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import SafeMyProfileScreen from "../screens/MyProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootNaviagtion = () => {
  const { isSignedIn } = useUser();
  const Stack = createNativeStackNavigator();

  return (
    <ClerkLoaded>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="MyProfile"
            component={SafeMyProfileScreen}
            options={{ title: "MyProfile" }}
          />
        ) : (
          <>
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: "Sign Up" }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ title: "Sign In" }}
            />
            <Stack.Screen
              name="VerifyCode"
              component={VerifyCodeScreen}
              options={{ title: "Sign Up" }}
            />
          </>
        )}
      </Stack.Navigator>
    </ClerkLoaded>
  );
};

export default RootNaviagtion;
