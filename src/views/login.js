import { Button, ButtonText, EyeIcon, EyeOffIcon, FormControl, Heading, Input, InputField, InputIcon, InputSlot, Link, LinkText, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/slices/userSlice";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState;
      });
    };
    useEffect(() => {
      setUsername(user?.name)
      setPassword(user?.password)
    },[user])

    const handleClick = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/token/`,{ username : username, password : password })
        if (response){
          console.log(response.data)
          // navigation.navigate("Home")
          dispatch(login({
            name: username,
            accessToken: response.data.access
          }))
        }
      } catch (error) {
        console.log('error', error)
      }
    }
    return (
      <FormControl
        w='90%'
        p='$4'
        borderWidth='$1'
        borderRadius='$lg'
        borderColor='$borderLight300'
        $dark-borderWidth='$1' $dark-borderRadius='$lg' $dark-borderColor='$borderDark800'
      >
        <VStack space='xl'>
          <Heading color='$text900' lineHeight='$md'>
            Login
          </Heading>
          <VStack space='xs'>
            <Text color='$text500' lineHeight='$xs'>
              Email
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
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}  color='$darkBlue500'/>
              </InputSlot>
            </Input>
          </VStack>
          <Button
            ml='auto'
            onPress={handleClick}
          >
            <ButtonText color='$white'>
              Login
            </ButtonText>
          </Button>
          <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Don't have an account ? Sign up</LinkText>
          </Link>
        </VStack>
      </FormControl>
    );
  }

export default Login;
