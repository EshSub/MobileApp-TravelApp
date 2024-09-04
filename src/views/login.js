import { Button, ButtonText, EyeIcon, EyeOffIcon, FormControl, Heading, HStack, Input, InputField, InputIcon, InputSlot, Link, LinkText, Text, VStack } from "@gluestack-ui/themed";
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
        w='100%'
        // p='$4'
        // borderWidth='$1'
        style={{ borderRadius: 10 }}
        borderColor='$borderLight300'
        $dark-borderWidth='$1'
        //  $dark-borderRadius='$lg' 
        $dark-borderColor='$borderDark800'
      >
        <VStack space='xl'>
          <Heading color='$text900' lineHeight='$md'>
            Login
          </Heading>
          <VStack space='xs'>
            <Text color='$text500' lineHeight='$xs'>
              Username
            </Text>
            <Input>
              <InputField
                type="text"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </Input>
          </VStack>
          <VStack space='xs'>
            <Text color='$text500' lineHeight='$xs'>
              Password
            </Text>
            <Input textAlign='center'>
              <InputField
                value={password}
                type={showPassword ? 'text' : 'password'}
                onChangeText={(text) => setPassword(text)}
              />
              <InputSlot pr='$3' onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color='$darkBlue500' />
              </InputSlot>
            </Input>
          </VStack>

          <GradientButton onPress={handleClick} title={"Login"} />

          <HStack justifyContent="center" alignItems="center">
            <View
              style={{
                borderBottomColor: "black",
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text ml={"$2"} mr={"$2"}>OR</Text>
            <View
              style={{
                borderBottomColor: "black",
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </HStack>
          <GoogleLogin />
          <AppleLogin />
          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText size="sm">Don't have an account ? Sign up</LinkText>
          </Link>
        </VStack>
      </FormControl>
    </Background>
  );
}

export default Login;
