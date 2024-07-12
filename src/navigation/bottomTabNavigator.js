import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import { HomeScreen } from "../views/home"
import { PlaceDetails } from "../views/placeDetails"
import { HomeScreenHeader } from "../components/headers/HomeScreenHeader"
import { PlacesAndActivitiesScreen } from "../views/placesAndActivities"
import { DayPlanner } from "../views/dayPlanner"
import { MainDrawer } from "../components/drawer"

export const BottomTabNavigator = () => {
    const Tab = AnimatedTabBarNavigator()
    return(
        <Tab.Navigator
        // default configuration from React Navigation
        tabBarOptions={{
          activeTintColor: "#2F7C6E",
          inactiveTintColor: "#222222",
        }}
      >
    
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{ headerTransparent: true, header: HomeScreenHeader }}/>
        {/* <Tab.Screen name="Places&Activities" component={PlacesAndActivitiesScreen} options={{headerShown: true}}/>
        <Tab.Screen name="Places" component={PlaceDetails} options={{headerTitle: "Places"}}/>
        <Tab.Screen name="DayPlanner" component={DayPlanner} /> */}
    
      </Tab.Navigator>
    )
}

function Home(){
    return(
        <>
        <Text>hi</Text>
        </>
    )
}