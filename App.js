import RootNavigation from "@navigation";
import { Provider } from "@store/index";
import { rootStore } from "@store/store";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getProvinces } from "@httpClient/global.api";
import { storage } from "@storage/index";
import { Keys } from "@constants/storage";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  useEffect(() => {
    getListProvince();
  }, []);

  const getListProvince = async () => {
    try {
      const { data } = await getProvinces();
      storage.setItem(Keys.Provinces, JSON.stringify(data));
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
