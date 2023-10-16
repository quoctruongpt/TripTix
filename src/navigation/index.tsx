import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { storage } from "@storage/index";
import { StorageKeys } from "@constants/global";

function RootNavigation() {
  const {
    authentication: { isLogin, setIsLogin },
  } = useStore();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const token = await storage.getItem(StorageKeys.Token);
    setIsLogin(!!token);
  };

  return (
    <NavigationContainer>
      {isLogin ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default observer(RootNavigation);
