import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatView } from "../views/chat";
import { ChatList } from "../views/chatList";
import { HomeScreenHeader } from "../components/headers/HomeScreenHeader";

const Stack = createNativeStackNavigator();

export const ChatNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{ header: HomeScreenHeader }}
      />
      <Stack.Screen name="Chat" component={ChatView} />
    </Stack.Navigator>
  );
};
