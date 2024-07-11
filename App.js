import "react-native-gesture-handler";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/rootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <GestureHandlerRootView>
            <RootNavigator />
          </GestureHandlerRootView>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
