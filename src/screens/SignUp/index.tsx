import { Images } from "@assets/images";
import { ButtonApp } from "@components/Button";
import { Avatar, Text } from "@rneui/themed";
import React, { useState } from "react";
import { View, SafeAreaView, LogBox, Alert } from "react-native";
import { StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

import { DatePicker } from "../../components/DatePicker";
import { Controller, useForm } from "react-hook-form";
import { TAuthNavigation } from "@navigation/AuthNavigator.type";
import { useNavigation } from "@react-navigation/native";
import { SelectGender } from "./components/SelectGender";
import { postRegister } from "@httpClient/authentication.api";
import { EAccountType } from "@enums";
import dayjs from "dayjs";
import { StatusApiCall } from "@constants/global";

LogBox.ignoreAllLogs();

const schema = yup.object().shape({
  fullName: yup.string().required("require").min(5, "min 5"),
  address: yup.string().required("require"),
  dateOfBirth: yup.date().required("require"),
  email: yup.string().required("require").email("email not valid"),
  phone: yup.string().required("require").min(10, "min 10"),
  gender: yup.string().required("require"),
  password: yup.string().required("require").min(6, "min 6"),
});

export const SignUp: React.FC = () => {
  const navigation = useNavigation<TAuthNavigation<"SignIn">>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      dateOfBirth: new Date(),
      email: "",
      phone: "",
      gender: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleContinue = handleSubmit(async (dataForm: any) => {
    try {
      setIsLoading(true);
      const { data } = await postRegister({
        fullName: dataForm.fullName,
        address: dataForm.address,
        birthday: dayjs(dataForm.dayOfBirth).unix(),
        email: dataForm.email,
        phone: dataForm.phone,
        gender: dataForm.gender,
        role: EAccountType.Customer,
        password: dataForm.password,
      });
      if (data.status === StatusApiCall.Success) {
        Alert.alert(
          "Thông báo",
          "Bạn đã đăng ký thành công. Vui lòng đăng nhập tài khoản",
          [
            {
              text: "Đăng nhập",
              onPress: () =>
                navigation.replace("SignIn", { rule: EAccountType.Customer }),
            },
          ]
        );
        return;
      }

      throw new Error();
    } catch {
      Alert.alert("Thông báo", "Đăng ký thất bại. Vui lòng thử lại");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <KeyboardAwareScrollView style={styles.body}>
          <View style={styles.avatar}>
            <Avatar size={120} rounded source={Images.Bus}>
              <Avatar.Accessory size={24} />
            </Avatar>
          </View>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor={"#ccc"}
              />
            )}
          />
          <ErrorMessage message={errors.fullName?.message} />
          <Controller
            control={control}
            name="address"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="Address"
                placeholderTextColor={"#ccc"}
              />
            )}
          />
          <ErrorMessage message={errors.address?.message} />
          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field: { value, onChange } }) => (
              <DatePicker
                value={value}
                onConfirm={onChange}
                placeholder="Birthday"
              />
            )}
          />
          <ErrorMessage message={errors.dateOfBirth?.message} />
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#ccc"}
              />
            )}
          />
          <ErrorMessage message={errors.email?.message} />
          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor={"#ccc"}
                keyboardType="phone-pad"
              />
            )}
          />
          <ErrorMessage message={errors.phone?.message} />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"#ccc"}
                secureTextEntry
              />
            )}
          />
          <ErrorMessage message={errors.password?.message} />
          <Controller
            control={control}
            name="gender"
            render={({ field: { value, onChange } }) => (
              <SelectGender value={value} onChange={onChange} />
            )}
          />
        </KeyboardAwareScrollView>
        <View style={styles.footer}>
          <ButtonApp
            title="Continue"
            buttonStyle={styles.buttonContinue}
            onPress={handleContinue}
            loading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <View>
      <Text style={{ fontSize: 12, color: "red", paddingLeft: 16 }}>
        {message}
      </Text>
    </View>
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
