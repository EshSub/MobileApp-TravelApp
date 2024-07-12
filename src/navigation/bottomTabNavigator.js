import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { HomeScreen } from "../views/home";
import { PlaceDetails } from "../views/placeDetails";
import { HomeScreenHeader } from "../components/headers/HomeScreenHeader";
import { PlacesAndActivitiesScreen } from "../views/placesAndActivities";
import { DayPlanner } from "../views/dayPlanner";
import { MainDrawer } from "../components/drawer";
import { HomeIcon, MapIcon, MessageCircleIcon } from "lucide-react-native";
import { BACKGROUND_COLOR } from "../helpers/constants";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Map } from "../views/Map";
import { ChatView } from "../views/chat";

export const BottomTabNavigator = () => {

  // const navigation = useNavigation()

  // useEffect(() => {
  //   navigation.navigate("Planner")
  // }, []);

  const Tab = AnimatedTabBarNavigator();
  return (
    <Tab.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: "#2F7C6E",
        inactiveTintColor: "#222222",
      }}
      appearance={{
        whenActiveShow: "icon-only",
        whenInactiveShow: "icon-only",
        tabBarBackground: BACKGROUND_COLOR,
        tabButtonLayout: "vertical",
        tabBarLabel: "",
        dotSize: "small",
      }}
    >
      <Tab.Screen
        name="H"
        component={PlacesAndActivitiesScreen}
        options={{
          headerTransparent: true,
          header: HomeScreenHeader,
          tabBarIcon: () => <HomeIcon />,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="A"
        component={Map}
        options={{
          headerShown: true,
          label: "",
          tabBarIcon: () => <MapIcon />,
        }}
      />
      {/* <Tab.Screen
        name="P"
        component={PlaceDetails}
        options={{ headerTitle: "", tabBarIcon: () => <MessageCircleIcon /> }}
      /> */}
      <Tab.Screen
        name="C"
        component={ChatView}
        options={{ headerTitle: "", tabBarIcon: () => <MessageCircleIcon /> }}
      />
      <Tab.Screen
        name="D"
        component={DayPlanner}
        options={{ tabBarIcon: () => <HomeIcon /> }}
      />
    </Tab.Navigator>
  );
};
