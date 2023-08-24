import { ClerkProvider } from "@clerk/clerk-expo";
import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useClerk, useSignUp } from "@clerk/clerk-expo";
import { SignIn } from "@clerk/clerk-react";
export default function Home() {
    const publishableKey = "pk_test_d2lubmluZy1zYWxtb24tMjIuY2xlcmsuYWNjb3VudHMuZGV2JA";
    const { isLoaded, signUp } = useSignUp();
    const emailAddress = 'manojthalor2000@gmail.com';
    const password = '99999988888@321'
    const firstName = 'Manoj'
    const lastName = 'Thalor'

    const [code, setCode] = React.useState("415892");
    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await SignIn.create({
                 emailAddress,
                password,
            });
            console.warn("completeSignIn", completeSignIn);
            //   await setSession(completeSignIn.createdSessionId);
        } catch (err) {
            console.log(err)
        }
    };
    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                firstName,
                lastName,
                emailAddress,
                password,
            });

            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            // onPressVerify()
            // change the UI to our pending section.
            // setPendingVerification(true);
        } catch (err) {
            console.warn("errr", JSON.stringify(err));
            // console.error(JSON.stringify(err, null, 2));
        }
    };

    // This verifies the user using email code that is delivered.
    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            // await setActive({ session: completeSignUp.createdSessionId });
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello world!</Text>
            <TouchableOpacity
                onPress={() => {
                    onPressVerify()
                }}
            >
                <Text style={{ fontSize: 20 }}>THIS IS FIRST</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});