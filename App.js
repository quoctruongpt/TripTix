import RootNavigation from "@navigation";
import { Provider } from "@store/index";
import { rootStore } from "@store/store";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getProvinces } from "@httpClient/global.api";
import { storage } from "@storage/index";
import { Keys } from "@constants/storage";
import { ToastProvider } from "react-native-toast-notifications";
import { StorageKeys } from "@constants/global";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        alert(token);
        storage.setItem(StorageKeys.notificationToken, token);
      })
      .catch((error) => {
        alert("token error: " + JSON.stringify(error));
      });
  }, []);

  useEffect(() => {
    getListProvince();
  }, []);

  const getListProvince = async () => {
    try {
      const { data } = await getProvinces();
      storage.setItem(Keys.Provinces, JSON.stringify(data.data));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Provider value={rootStore}>
      <ToastProvider>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </ToastProvider>
    </Provider>
  );
}
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
}
