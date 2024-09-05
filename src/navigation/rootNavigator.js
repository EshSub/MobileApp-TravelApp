import { Text, View } from "react-native";
import Login from "../views/login";
import SignUp from "../views/signUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";
import { Alert, AlertIcon, AlertText, Button, ButtonText, Icon, Link, LinkText, InfoIcon } from "@gluestack-ui/themed";
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
import { EmergencyPage } from "../views/emergencyPage";
import Toast, { InfoToast } from "react-native-toast-message";

// import HomeNavigator from "./homeNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector(selectUser);
  const isAuthenticated = useIsAuthenticated();
  const navigation = useNavigation();
  const isIntroDone = useSelector(getIsIntroDone);

  const toastConfig = {
    info: (props) => (
      <InfoToast
        {...props}
        style={{ height: 75 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 17,
          fontWeight: '800'
        }}
        text2Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
      />
    ),
    custom: ({ text1, text2, prop }) => (
      <Alert mx="$2.5" action="warning" variant="solid">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>
          <Link onPress={() => navigation.navigate("SignUp")}>
            <LinkText size="sm">{text1}</LinkText>
          </Link>
        </AlertText>
      </Alert>
    )
  }

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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RandomSearch"
          component={RandomDestination}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityPage}
          options={({route})=>({
            headerTransparent: true,
            headerStyle:{backgroundColor: "rgba(255,255,255,0.8)"},
            headerTitle:route.params?.activityName || "Activity"
          })}
          // options={{ headerTransparent: true,  headerStyle:{backgroundColor: "rgba(255,255,255,0.8)"} , headerTitle:activityName}}
        />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Emergency" component={EmergencyPage} />

      </Stack.Navigator>
      <Toast config={toastConfig} />
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
