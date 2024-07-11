import { HStack, Heading, Text, VStack, View } from "@gluestack-ui/themed";
import { GradientButton } from "../../components/common/gradientButton";
import { SafeAreaView } from "react-native";
import { Background } from "../../components/background";
import { HEIGHT, WIDTH } from "../../helpers/constants";

export const IntroLayout = ({ title, description, content }) => {
  return (
    <VStack
      justifyContent="space-evenly"
      // h={"100%"}
      //   backgroundColor="red"
    >
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <View>{content}</View>
    </VStack>
  );
};
