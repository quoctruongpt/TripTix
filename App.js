import RootNavigation from "@navigation";
import { Provider } from "@store/index";
import { rootStore } from "@store/store";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getProvinces } from "@httpClient/global.api";
import { putTokenNotification } from "@httpClient/authentication.api";
import { storage } from "@storage/index";
import { Keys } from "@constants/storage";
import { ToastProvider } from "react-native-toast-notifications";
import * as Notifications from "expo-notifications";
import { StorageKeys } from "@constants/global";
import { registerForPushNotificationsAsync } from "@utils/app";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  useEffect(() => {
    getTokenNotification();
  }, []);

  useEffect(() => {
    getListProvince();
  }, []);

  const getTokenNotification = async () => {
    const token = await registerForPushNotificationsAsync();
    console.log(token);
    const userInfo = await storage.getItem(StorageKeys.userInfo);

    if (token && userInfo?.idUserSystem) {
      putTokenNotification(userInfo.idUserSystem, token);
    }
  };

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

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}
