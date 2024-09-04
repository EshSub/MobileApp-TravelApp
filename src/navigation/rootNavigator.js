import { Text, View } from "react-native";
import Login from "../views/login";
import SignUp from "../views/signUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";
import { Button, ButtonText, Icon } from "@gluestack-ui/themed";
import axios from "axios";
import { BACKEND_URL } from "../helpers/constants";
import { HomeScreen } from "../views/home";
import { PlacesAndActivitiesScreen } from "../views/placesAndActivities";
import { useIsAuthenticated } from "../hooks/auth";
import { PlaceDetails } from "../views/placeDetails";
import { GeneralQuestions } from "../views/generalQuestions";
import { DayPlanner } from "../views/dayPlanner";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderWithBackButton,
  HomeScreenHeader,
} from "../components/headers/HomeScreenHeader";
import { MainDrawer } from "../components/drawer";
import { getIsIntroDone } from "../redux/selectors";
import { useEffect } from "react";
import { IntroView } from "../views/Intro/IntroView";
import { BottomTabNavigator } from "./bottomTabNavigator";
import { Plan } from "../views/planner/plan";
import AiPlanner from "../components/AiPlanner";
import { Map } from "../views/Map";
import { ChevronLeftIcon } from "lucide-react-native";
import ActivitiesScreen from "../views/activities";
import { RandomDestination } from "../components/AiPlanner/randomDestination";
import { ActivityPage } from "../views/activityPage";
import { SettingsPage } from "../views/settings";
import { PrivacyPolicy } from "../views/privacyPolicy";

// import HomeNavigator from "./homeNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector(selectUser);
  const isAuthenticated = useIsAuthenticated();

  const isIntroDone = useSelector(getIsIntroDone);
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (!isIntroDone) {
  //     navigation.navigate("Intro");
  //   }
  // }, []);

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <MainDrawer>
      <Stack.Navigator
      // screenOptions={{ header: HeaderWithBackButton }}
      >
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Places&Activities"
          component={PlacesAndActivitiesScreen}
        />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen name="GeneralQuestions" component={GeneralQuestions} />
        <Stack.Screen name="DayPlanner" component={DayPlanner} />
        <Stack.Screen
          name="Intro"
          component={IntroView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{
            headerTransparent: true,
            header: () => <HeaderWithBackButton onBack={navigateToHome} />,
          }}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen
          name="Planner"
          component={AiPlanner}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="RandomSearch"
          component={RandomDestination}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityPage}
          options={{ headerTransparent: true }}
        />
        {!isAuthenticated && (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </MainDrawer>
  );
}

// function HomeScreen() {
//     const dispatch = useDispatch()
//     const user = useSelector(selectUser);
//     const handleLogout = () => {
//         dispatch(login(null))
//     }
//     const handleVerify = async() => {
//       try {
//         const response = await axios.get(`${BACKEND_URL}/user/sendEmail/`, {
//           headers : {
//             Authorization : `Bearer ${user?.accessToken}`
//           }})
//         if (response) {
//            console.log(response.data)
//         }

//       }catch (error) {
//         console.log('error', error)
//       }
//     }
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//       <Button onPress={handleLogout}>
//         <ButtonText>
//             Logout
//         </ButtonText>
//       </Button>
//       <Button onPress={handleVerify}>
//         <ButtonText>
//             Verify
//         </ButtonText>
//       </Button>
//     </View>
//   );
// }
