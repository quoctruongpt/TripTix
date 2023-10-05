import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useStore } from "@store/index";
import { observer } from "mobx-react-lite";

function RootNavigation() {
  const {
    authentication: { isLogin },
  } = useStore();

  return (
    <NavigationContainer>
      {isLogin ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default observer(RootNavigation);
