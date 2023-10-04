import { Images } from "@assets/images";
import { ButtonApp } from "@components/Button";
import { Avatar, Text } from "@rneui/themed";
import React from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { DatePicker } from "../../components/DatePicker";
import { Select } from "@components/Select";
import { PhoneInput } from "@components/PhoneInput";
import { Controller, useForm } from "react-hook-form";
import { TNavigation } from "@navigation/AppNavigator.type";
import { useNavigation } from "@react-navigation/native";

export const SignUp: React.FC = () => {
  const navigation = useNavigation<TNavigation<"SignIn">>();

  const { control } = useForm({
    defaultValues: {
      fullName: "",
      nickName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      gender: "",
    },
  });

  const handleOTP = () => {
    navigation.navigate("OTP");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <ScrollView style={styles.body}>
          <View style={styles.avatar}>
            <Avatar size={120} rounded source={Images.Bus}>
              <Avatar.Accessory size={24} />
            </Avatar>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={"#ccc"}
          />
          <TextInput
            style={styles.input}
            placeholder="Nickname"
            placeholderTextColor={"#ccc"}
          />
          <DatePicker value={undefined} onConfirm={() => {}} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#ccc"}
          />
          <PhoneInput />
          <Select
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Prefer Not to Say", value: "neutral" },
            ]}
          />
        </ScrollView>
        <View style={styles.footer}>
          <ButtonApp
            title="Continue"
            buttonStyle={styles.buttonContinue}
            onPress={handleOTP}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    flex: 1,
    padding: 24,
  },
  avatar: {
    alignItems: "center",
    marginBottom: 24,
  },
  footer: {},
  body: { flex: 1 },
  buttonContinue: {
    backgroundColor: "green",
  },
  input: {
    padding: 16,
    backgroundColor: "#fafafa",
    marginVertical: 12,
    borderRadius: 8,
  },
});
