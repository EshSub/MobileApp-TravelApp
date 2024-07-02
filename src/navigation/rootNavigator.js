import { Text, View } from "react-native";
import Login from "../views/login";
import SignUp from "../views/signUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";
import { Button, ButtonText } from "@gluestack-ui/themed";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector(selectUser);

  return (
    <Stack.Navigator>
      {user?.accessToken ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
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

function HomeScreen() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(login(null))
    }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={handleLogout}>
        <ButtonText>
            Logout
        </ButtonText>
      </Button>
    </View>
  );
}
