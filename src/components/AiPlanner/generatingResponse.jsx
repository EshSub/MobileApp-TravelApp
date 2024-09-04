import { VStack } from "@gluestack-ui/themed";
import LottieView from "lottie-react-native";
import { WIDTH } from "../../helpers/constants";
import { AnimatedTextSwitching } from "../animated/AnimatedTextSwitching";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDataProvider } from "../../apis";
import { useSelector } from "react-redux";
import { getDescription, getDuration, getSelectedActivities } from "../../redux/selectors";

const GeneratingResponse = () => {

  const navigation = useNavigation();
  const dataprovider = useDataProvider()
  const { mutate } = dataprovider.aiPlanner.plan() 
  const duration = useSelector(getDuration)
  const description = useSelector(getDescription)
  const preferred_activities = useSelector(getSelectedActivities)
  useEffect(() => {
    mutate({
      duration: duration,
      description: description,
      preferred_activities: preferred_activities
    }, {
      onSuccess: () => {
        navigation.navigate("Plan")
      },
      onError: (error) => console.log(error)
    })
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
