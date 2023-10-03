import React from "react";
import { Text, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h4 h4Style={styles.title}>
          Login Account
        </Text>
        <Text>Hello, welcome back to our account</Text>
      </View>
      <View>
        <Input
          errorMessage="Oops! that's not correct."
          inputStyle={styles.inputStyle}
          leftIcon={<Icon name="email-lock" size={20} />}
          placeholder="Email ID"
        />
        <Input
          errorMessage="Oops! that's not correct."
          inputStyle={styles.inputStyle}
          leftIcon={<Icon name="shield-key" size={20} />}
          placeholder="Password"
        />
        <Button
          title="Login"
          containerStyle={styles.btnLoginContainer}
          buttonStyle={styles.btnLogin}
        />
      </View>
      <View style={styles.footer}>
        <Text>Not Registered yet?</Text>
        <Button
          title="Create an Account"
          type="clear"
          titleStyle={styles.btnSignUp}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
    justifyContent: "space-between",
  },
  title: { fontWeight: "700" },
  inputStyle: { fontSize: 14, marginLeft: 12 },
  btnLogin: {
    backgroundColor: "rgba(127, 220, 103, 1)",
    borderRadius: 20,
    padding: 12,
  },
  btnLoginContainer: { margin: 24, marginTop: 40 },
  footer: { flexDirection: "row", alignItems: "center" },
  btnSignUp: { fontSize: 14, color: "#FF800B" },
});
