import RootNavigation from "@navigation";
import { Provider } from "@store/index";
import { rootStore } from "@store/store";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider value={rootStore}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

