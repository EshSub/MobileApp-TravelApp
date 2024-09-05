import {
  Heading,
  View,
  Text,
  Button,
  ButtonText,
  LinearGradient,
  Image,
  VStack,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/background";
import { GradientButton } from "../../components/common/gradientButton";
import { AnimatedTextSwitching } from "../../components/animated/AnimatedTextSwitching";
import {
  MarqueeIntro,
  TextMarquee,
} from "../../components/intro/textMarquee.jsx";
import { ImageMarquee } from "../../components/intro/imageMarquee.jsx";

export const WelcomeScreen = ({ setCurrentScreen }) => {
  const navigation = useNavigation();
  const onNext = () => {
    setCurrentScreen(1);
  };
  return (
      <VStack
        p={"$0"}
        // h={"100%"}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <VStack
          justifyContent="center"
          alignItems="flex-start"
          space="sm"
          p={"$8"}
          pt={"$0"}
        >
          <Heading color="#425884" size="2xl" fontWeight={300}>
            {"LET'S"}
          </Heading>
          {/* <Heading color="#425884" size="5xl" fontWeight={600}>
          EXPLORE
        </Heading> */}
          <AnimatedTextSwitching
            texts={["Explore", "Travel", "Have fun"]}
            size="5xl"
            fontWeight={600}
          />
          {/* <Heading color="#425884" size="2xl" fontWeight={300}>
          SRI LANKA
        </Heading> */}
          <Text color="#425884">
            Sunny Sri Lanka! Beaches, hills, and elephants await. Come explore
            this beautiful island!
          </Text>
        </VStack>
        {/* <ImageMarquee />
      <TextMarquee /> */}
        <Image
          source={require("../../assets/homePageImage.png")}
          height={350}
          width={350}
          alt="homePage"
          resizeMethod="center"
        />
        {/* <Button onPress={() => navigation.navigate("Places&Activities")}>
        <ButtonText>Places and activities</ButtonText>
      </Button> */}
        
      </VStack>
  );
};
