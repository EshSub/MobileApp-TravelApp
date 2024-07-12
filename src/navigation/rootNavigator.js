import { Text, View } from 'react-native';
import Login from '../views/login';
import SignUp from '../views/signUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../redux/slices/userSlice';
import { Button, ButtonText } from '@gluestack-ui/themed';
import axios from 'axios';
import { BACKEND_URL } from '../helpers/constants';
import { HomeScreen } from '../views/home';
import { PlacesAndActivitiesScreen } from '../views/placesAndActivities';
import { useIsAuthenticated } from '../hooks/auth';
import { PlaceDetails } from '../views/placeDetails';
import { GeneralQuestions } from '../views/generalQuestions';
import { DayPlanner } from '../views/dayPlanner';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenHeader } from '../components/headers/HomeScreenHeader';
import { MainDrawer } from '../components/drawer';
import { getIsIntroDone } from '../redux/selectors';
import { useEffect } from 'react';
import { IntroView } from '../views/Intro/IntroView';
import { BottomTabNavigator } from './bottomTabNavigator';
import { Plan } from '../views/planner/plan';
// import HomeNavigator from "./homeNavigator";

const Stack = createNativeStackNavigator();

function Root() {
  return <BottomTabNavigator />;
}
export default function RootNavigator() {
  const user = useSelector(selectUser);
  const isAuthenticated = useIsAuthenticated();

  const isIntroDone = useSelector(getIsIntroDone);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isIntroDone) {
      navigation.navigate('Intro');
    }
  }, []);

  return (
    <MainDrawer>
      <Stack.Navigator>
        <Stack.Screen
          name='Root'
          component={HomeScreen}
          options={{ headerTransparent: true, header: HomeScreenHeader }}
        />
        <Stack.Screen
          name='Places&Activities'
          component={PlacesAndActivitiesScreen}
        />
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} />
        <Stack.Screen name='GeneralQuestions' component={GeneralQuestions} />
        <Stack.Screen name='DayPlanner' component={DayPlanner} />
        <Stack.Screen
          name='Intro'
          component={IntroView}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Plan' component={Plan} />
        {!isAuthenticated && (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
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
