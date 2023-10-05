import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useStore } from "@store/index";

export default function RootNavigation() {
  const authentication = useStore();
  console.warn(authentication);
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
