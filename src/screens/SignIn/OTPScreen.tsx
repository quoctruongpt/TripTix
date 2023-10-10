import React from "react";
import { Text, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Image } from "expo-image";
import { Images } from "@assets/images";
import { Controller, useForm } from "react-hook-form";
import { ButtonApp } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { TAuthNavigation } from "@navigation/AuthNavigator.type";
// import Toast from "react-native-toast-message";
import { useStore } from "@store/index";

export const OTP = () => {
  const navigation = useNavigation<TAuthNavigation<"OTP">>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { first: "", second: "", third: "", four: "" },
  });
  const {
    authentication: { setIsLogin, isLogin },
  } = useStore();

  const onTurnBackSignIn = () => {
    navigation.navigate("SignIn");
  };

  const showNotification = () => {
    // Toast.show({
    //   type: "success",
    //   position: "top",
    //   text1: "Đăng ký thành công",
    //   text2: "Đang chuyển vào màn hình chính...",
    //   visibilityTime: 2000,
    //   topOffset: 5,
    // });
    setTimeout(() => {
      setIsLogin(true);
    }, 2500);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={{ zIndex: 9999 }}>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
        <View style={styles.headerContainer}>
          <Icon
            style={{ width: "30%" }}
            name="arrowleft"
            size={25}
            color="black"
            onPress={onTurnBackSignIn}
          />

          <Text h4 h4Style={styles.title}>
            OTP Verification
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={Images.Otp} style={styles.image} />
        </View>
        <View style={styles.contentWrapper}>
          <Text h4 h4Style={styles.titleContent}>
            Enter OTP
          </Text>
          <Text h4 h4Style={styles.titleDes}>
            An 4 digit code has been sent to {"\n"} +91 9995380399
          </Text>
        </View>
        <View style={styles.arrayNumberWrapper}>
          <Controller
            control={control}
            name="first"
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputWrapper}>
                <Input
                  maxLength={1}
                  keyboardType="numeric"
                  inputStyle={styles.inputStyle}
                  placeholder="0"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="second"
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputWrapper}>
                <Input
                  maxLength={1}
                  keyboardType="numeric"
                  inputStyle={styles.inputStyle}
                  placeholder="0"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="third"
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputWrapper}>
                <Input
                  maxLength={1}
                  keyboardType="numeric"
                  inputStyle={styles.inputStyle}
                  placeholder="0"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="four"
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputWrapper}>
                <Input
                  maxLength={1}
                  keyboardType="numeric"
                  inputStyle={styles.inputStyle}
                  placeholder="0"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.footer}>
          <ButtonApp
            onPress={showNotification}
            title="Verify"
            buttonStyle={styles.buttonVertify}
            containerStyle={styles.buttonVertifyContainer}
            titleStyle={styles.titleButtonVertify}
          />
          <Text h4 h4Style={styles.footerText}>
            Resend OTP
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 32,
    justifyContent: "space-between",
    fontSize: 16,
    height: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    display: "flex",
    justifyContent: "flex-start",
    width: "70%",
    marginBottom: 0,
  },
  imageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: "auto",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#fff",
  },
  image: {
    width: 171,
    height: 169,
    resizeMode: "contain",
  },
  contentWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  titleContent: {
    fontWeight: "700",
    fontSize: 24,
    display: "flex",
    justifyContent: "flex-start",
    width: "70%",
    marginBottom: 5,
  },
  titleDes: {
    color: "#595959",
    fontSize: 14,
    fontWeight: "500",
  },
  arrayNumberWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 30,
  },
  inputWrapper: {
    borderRadius: 10,
    width: 45,
    height: 50,
    marginTop: 15,
    overflow: "hidden",
    backgroundColor: "#EDEDED",
    display: "flex",
    alignItems: "center",
    paddingLeft: 6,
    borderWidth: 1,
    borderColor: "gray",
  },
  inputStyle: {
    width: 45,
    height: 50,
    fontSize: 22,
    fontWeight: "500",
    color: "black",
  },
  footer: {
    marginTop: 30,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonVertify: {
    backgroundColor: "orange",
    borderColor: "white",
  },
  buttonVertifyContainer: {
    width: "100%",
    marginBottom: 16,
  },
  titleButtonVertify: { fontWeight: "600", color: "#FFF", fontSize: 14 },
  footerText: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
  },
});
