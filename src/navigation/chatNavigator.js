import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatView } from "../views/chat";
import { ChatList } from "../views/chatList";
import { HomeScreenHeader } from "../components/headers/HomeScreenHeader";
import { BackButton } from "./backButton";
import DrawerIcon from "../components/drawer/drawerIcon";

const Stack = createNativeStackNavigator();

export const ChatNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{ headerLeft: DrawerIcon, headerTitle: "Conversations" }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatView}
        options={{ headerLeft: BackButton }}
      />
    </Stack.Navigator>
  );
};
