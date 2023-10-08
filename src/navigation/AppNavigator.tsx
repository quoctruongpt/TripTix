import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TAuthStackParamList } from "./AuthNavigator.type";
import { SignUp } from "@screens/SignUp";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { TAppStackParamList } from "./AppNavigator.type";
import { TopUP } from "@screens/TopUp";
import { Settings } from "@screens/Profile/components/Settings";
import { Point } from "@screens/Profile/components/Point";
import { Info } from "@screens/Profile/components/Info";

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
      <Stack.Screen
        name={"Settings"}
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Point"}
        component={Point}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Info"}
        component={Info}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
