import 'react-native-gesture-handler';
import { config } from './config/gluestack-ui.config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Plan } from './src/views/planner/plan';
import AiPlanner from './src/components/AiPlanner';
import { LogBox } from 'react-native';
import { SettingsPage } from './src/views/settings';
import { RandomDestination } from './src/components/AiPlanner/randomDestination';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <StatusBar style='auto' />
        <NavigationContainer>
          <GestureHandlerRootView>
            <RandomDestination />
            {/* <RootNavigator /> */}
          </GestureHandlerRootView>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
