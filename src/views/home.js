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
import { Background } from "../components/background";
import { GradientButton } from "../components/common/gradientButton";
import { AnimatedTextSwitching } from "../components/animated/AnimatedTextSwitching";
import { MarqueeIntro, TextMarquee } from "../components/intro/textMarquee.jsx";
import { ImageMarquee } from "../components/intro/imageMarquee.jsx";
import { useSelector } from "react-redux";
import { getPlaces } from "../redux/selectors.js";
import { Fab } from "../components/common/fab";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const places = useSelector(getPlaces);

  return (
    <Background>
      <VStack
        justifyContent="center"
        alignItems="flex-start"
        space="sm"
        p={"$6"}
        pt={"$10"}
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
        <GradientButton
          title="Explore"
          onPress={() => navigation.navigate("Places&Activities")}
        />
      </VStack>
      {/* <ImageMarquee />
      <TextMarquee /> */}
      <Image
        source={require("../assets/homePageImage.png")}
        height={350}
        width={350}
        alt="homePage"
        resizeMethod="center"
      />
      <Fab />
      {/* <Button onPress={() => navigation.navigate("Places&Activities")}>
        <ButtonText>Places and activities</ButtonText>
      </Button> */}
    </Background>
  );
};
