import {
  Button,
  ButtonText,
  FormControl,
  Heading,
  Link,
  LinkText,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { PasswordField, TextField } from "../components/common/inputFields";
import { validateEmail } from "../helpers/utils";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rpassword, setRPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (password == rpassword) {
      if (validateEmail(email)) {
        try {
          const response = await axios.post(`${BACKEND_URL}/user/signup/`, {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName
          });
          if (response.data.success) {
            dispatch(
              login({
                name: username,
                email: email,
                password: password,
                user_id : response.user_id
              })
            );
            navigation.navigate("Login")
          }
        } catch (error) {
          console.log("error", error);
        }
      } else {
        console.log("Invalid email");
      }
    } else {
      console.log("Passwords don't match");
    }
  };

  return (
    <FormControl
      w="90%"
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      $dark-borderWidth="$1"
      $dark-borderRadius="$lg"
      $dark-borderColor="$borderDark800"
    >
      <VStack space="xl">
        <Heading color="$text900" lineHeight="$md">
          Login
        </Heading>
        <TextField
          name={"First name"}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextField
          name={"Last name"}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextField
          name={"Username"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextField
          name={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <PasswordField
          name={"Password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <PasswordField
          name={"Confirm Password"}
          value={rpassword}
          onChangeText={(text) => setRPassword(text)}
        />
        <Button ml="auto" onPress={handleClick}>
          <ButtonText color="$white">Sign up</ButtonText>
        </Button>
        <Link onPress={() => navigation.navigate("Login")}>
          <LinkText>Already have an account ? Login</LinkText>
        </Link>
      </VStack>
    </FormControl>
  );
}

export default SignUp;
