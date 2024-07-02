import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/rootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
