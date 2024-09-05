import {
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Heading,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Link,
  LinkText,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";
import { Background } from "../components/background";
import { GoogleLogin } from "../components/googleLogin";
import { AppleLogin } from "../components/appleLogin";
import { GradientButton } from "../components/common/gradientButton";
import { StyleSheet, View } from "react-native";
import { useDataProvider } from "../apis";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const dataprovider = useDataProvider()
  const user = useSelector(selectUser)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  useEffect(() => {
    setUsername(user?.name)
    setPassword(user?.password)
  }, [user])

  const { mutate } = dataprovider.auth.login()

  
  const handleClick = async () => {
    mutate({ username, password }, {
      onSuccess: (data) => {
        dispatch(login({
          name: username,
          accessToken: data.data.access
        }))
        navigation.navigate("Intro")
        console.log(data.data.access)

      },
      onError: (error) => console.log(error)
    })
  }
  return (
    <Background>
      <FormControl
        w="100%"
        // p='$4'
        // borderWidth='$1'
        style={{ borderRadius: 10, padding: 10 }}
        borderColor='$borderLight300'
        $dark-borderWidth='$1'
        //  $dark-borderRadius='$lg'
        $dark-borderColor='$borderDark800'
      >
        <VStack space='xl'>
          <Heading
            color='$text900'
            lineHeight='$md'
            style={{ alignSelf: 'center', fontSize: 25, padding: 10 }} // Center the heading
          >
            Log in
          </Heading>
          <VStack space='xl' style={{ padding: 15 }}>
            <Input textAlign='center' style={{ height: 50 }}>
              <InputField
                type='text'
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder='Username' // Added placeholder for username
                style={{
                  paddingHorizontal: 10,
                }}
              />
            </Input>

            <Input textAlign='center' style={{ height: 50 }}>
              <InputField
                value={password}
                type={showPassword ? "text" : "password"}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password' // Added placeholder for password
                style={{ paddingHorizontal: 10 }}
              />
              <InputSlot pr="$3" onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color='$darkBlue500'
                />
              </InputSlot>
            </Input>
          </VStack>
          <View style={{ marginHorizontal: 25 }}>
            <GradientButton onPress={handleClick} title={'Login'} p={'$2'} />
          </View>

          <HStack justifyContent='center' alignItems='center'>
            <View
              style={{
                borderBottomColor: 'black',
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text ml={'$2'} mr={'$2'}>
              OR
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </HStack>
          <VStack space='md' style={{ padding: 10 }}>
            <GoogleLogin text='Login with Google' />
            <AppleLogin text='Login with Apple' />
          </VStack>

          <Link
            style={{ alignItems: 'center' }}
            onPress={() => navigation.navigate('SignUp')}
          >
            <LinkText size='sm'>Don't have an account ? Sign up</LinkText>
          </Link>
        </VStack>
      </FormControl>
    </Background>
  );
}

export default Login;
