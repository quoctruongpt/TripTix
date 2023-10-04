import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Welcome, LoginOrRegisterForm, Role, SignIn, OTP } from "@screens";
import { TRootStackParamList } from "./AppNavigator.type";

const Stack = createNativeStackNavigator<TRootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen
        name={"SignIn"}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"OTP"}
        component={OTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"LoginOrRegisterForm"}
        component={LoginOrRegisterForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Role"}
        component={Role}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
