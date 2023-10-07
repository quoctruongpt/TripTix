import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Welcome,
  LoginOrRegisterForm,
  Role,
  SignIn,
  OTP,
} from "@screens";
import { TAuthStackParamList } from "./AuthNavigator.type";
import { SignUp } from "@screens/SignUp";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { TAppStackParamList } from "./AppNavigator.type";
import { TopUP } from "@screens/TopUp";

const Stack = createNativeStackNavigator<TAppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"BottomTabNavigator"}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"TopUp"}
        component={TopUP}
        options={{ title: "Nạp tiền vào ví" }}
      />
      <Stack.Screen
        name={"Home"}
        component={TopUP}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
