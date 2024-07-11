import { EyeIcon, EyeOffIcon, FormControlLabel, FormControlLabelText, Input, InputField, InputIcon, InputSlot, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";

export const TextField = ({onChangeText, value, name}) => {
  return (
    <>
      <VStack space="xs">
        <Text color="$text500" lineHeight="$xs">
          {name}
        </Text>
        <Input>
          <InputField
            type="text"
            value={value}
            onChangeText={onChangeText}
          />
        </Input>
      </VStack>
    </>
  );
};

export const PasswordField = ({value, onChangeText, name}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleState = () => {
        setShowPassword((showState) => {
          return !showState;
        });
      };
  
    return(
        <VStack space='xs'>
            <Text color='$text500' lineHeight='$xs'>
              {name}
            </Text>
            <Input textAlign='center'>
              <InputField
                value={value}
                type={showPassword ? 'text' : 'password'}
                onChangeText={onChangeText}
              />
              <InputSlot pr='$3' onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}  color='$darkBlue500'/>
              </InputSlot>
            </Input>
          </VStack>
    )
}

export const FormLabel = ({children, props}) => {
  return(
    <FormControlLabel {...props} mb={"$4"}>
      <FormControlLabelText>{children}</FormControlLabelText>
    </FormControlLabel>
  )
}
