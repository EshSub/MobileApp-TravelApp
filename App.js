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
import Constants from 'expo-constants';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

LogBox.ignoreAllLogs();

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <GluestackUIProvider config={config}>
            <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar style="auto" />
            </View>
            <NavigationContainer>
              <GestureHandlerRootView>
                <RootNavigator />
              </GestureHandlerRootView>
            </NavigationContainer>
          </GluestackUIProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
