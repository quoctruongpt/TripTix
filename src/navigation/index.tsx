import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { storage } from "@storage/index";
import { StorageKeys } from "@constants/global";
import { setAuthorization } from "@httpClient";

function RootNavigation() {
  const {
    authentication: { isLogin, setIsLogin, setUserInfo },
  } = useStore();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const [token, userInfo] = await storage.multiGet([
      StorageKeys.Token,
      StorageKeys.userInfo,
    ]);

    setIsLogin(!!token[1]);
    setUserInfo(JSON.parse(userInfo[1] ?? "{}"));
  };

  return (
    <NavigationContainer>
      {isLogin ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default observer(RootNavigation);
