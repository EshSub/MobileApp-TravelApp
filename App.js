import "react-native-gesture-handler";
import { config } from "./config/gluestack-ui.config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/rootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Plan } from "./src/views/planner/plan";
import AiPlanner from "./src/components/AiPlanner";
import { LogBox } from "react-native";
import { SettingsPage } from "./src/views/settings";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Constants from "expo-constants";
import { CheckUpdates } from "./src/components/UpdatesCheck";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <CheckUpdates />
      <PersistGate loading={null} persistor={persistor}>
        <GluestackUIProvider config={config}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar style="auto" />
          </View>
          <NavigationContainer>
            <GestureHandlerRootView>
              <RootNavigator />
              {/* <Plan /> */}
            </GestureHandlerRootView>
          </NavigationContainer>
        </GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
}
