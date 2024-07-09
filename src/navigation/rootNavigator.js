import { Text, View } from "react-native";
import Login from "../views/login";
import SignUp from "../views/signUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";
import { Button, ButtonText } from "@gluestack-ui/themed";
import axios from "axios";
import { BACKEND_URL } from "../helpers/constants";
import { HomeScreen } from "../views/home";
import { PlacesAndActivitiesScreen } from "../views/placesAndActivities";
import { PlaceDetails } from "../views/placeDetails";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector(selectUser);

  return (
    <Stack.Navigator>
      {true ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Places&Activities" component={PlacesAndActivitiesScreen} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
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
