import React from "react";
import { Text, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonApp } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { TNavigation } from "@navigation/AppNavigator.type";

const schema = yup.object().shape({
  email: yup.string().required("require").min(4, "min 4"),
  password: yup.string().required("require").min(4, "min 4"),
});

export const SignIn = () => {
  const navigation = useNavigation<TNavigation<"SingIn">>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const handleSignIn = handleSubmit((data) => {
    console.warn(data);
  });

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text h4 h4Style={styles.title}>
            Login Account
          </Text>
          <Text>Hello, welcome back to our account</Text>
        </View>
        <View>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                errorMessage={errors.email?.message as string}
                inputStyle={styles.inputStyle}
                leftIcon={<Icon name="email-lock" size={20} />}
                placeholder="Email ID"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                errorMessage={errors.password?.message as string}
                inputStyle={styles.inputStyle}
                leftIcon={<Icon name="shield-key" size={20} />}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <ButtonApp
            title="Login"
            containerStyle={styles.btnLoginContainer}
            buttonStyle={styles.btnLogin}
            onPress={handleSignIn}
          />
        </View>
        <View style={styles.footer}>
          <Text>Not Registered yet?</Text>
          <Button
            title="Create an Account"
            type="clear"
            titleStyle={styles.btnSignUp}
            onPress={handleSignUp}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  },
  btnLoginContainer: { margin: 24, marginTop: 40 },
  footer: { flexDirection: "row", alignItems: "center" },
  btnSignUp: { fontSize: 14, color: "#FF800B" },
});
