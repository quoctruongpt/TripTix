import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Welcome, SignIn } from "@screens";
import { TRootStackParamList } from "./AppNavigator.type";

const Stack = createNativeStackNavigator<TRootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Welcome"} component={Welcome} />
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen
        name={"SignIn"}
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
