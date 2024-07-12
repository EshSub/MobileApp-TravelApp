import { VStack } from "@gluestack-ui/themed";
import LottieView from "lottie-react-native";
import { WIDTH } from "../../helpers/constants";
import { AnimatedTextSwitching } from "../animated/AnimatedTextSwitching";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const GeneratingResponse = () => {

    const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Plan");
    }, 3000);
  }, []);

  return (
    <VStack spacing={4} alignItems="center" textAlign={"center"}>
      <AnimatedTextSwitching
        texts={["Collecting data", "Analyzing", "Generating response"]}
        size="4xl"
        fontWeight={600}
        textAlign="center"
      />
      <LottieView
        source={require("../../assets/animations/aiWorking.json")}
        autoPlay
        loop
        style={{ width: WIDTH, height: WIDTH }}
      />
    </VStack>
  );
};

export default GeneratingResponse;
