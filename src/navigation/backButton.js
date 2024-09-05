import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { GradientButton } from "../components/common/gradientButton";
import { ChevronLeftIcon, Icon } from "@gluestack-ui/themed";

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <GradientButton onPress={() => navigation.goBack()}>
      {/* <Icon as={ChevronLeftIcon} size={25} /> */}
      <ChevronLeftIcon />
    </GradientButton>
  );

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
