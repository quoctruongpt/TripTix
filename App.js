import RootNavigation from "@navigation";
import { Provider } from "@store/index";
import { rootStore } from "@store/store";

export default function App() {
  return (
    <Provider value={rootStore}>
      <RootNavigation />
    </Provider>
  );
}

