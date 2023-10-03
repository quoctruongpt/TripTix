import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Welcome } from "@screens";
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
    </Stack.Navigator>
  );
}
