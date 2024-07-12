import "react-native-gesture-handler";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/rootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Plan } from "./src/views/planner/plan";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <GestureHandlerRootView>
            {/* <Plan /> */}
            <RootNavigator />
          </GestureHandlerRootView>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
