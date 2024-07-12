import { AnimatePresence, MotiView } from "moti";
import { WelcomeScreen } from "./WelcomeScreen";
import { useState } from "react";
import { TextMarquee } from "../../components/intro/textMarquee";
import { IntroLayout } from "./IntroLayout";
import { current } from "@reduxjs/toolkit";
import { HStack } from "@gluestack-ui/themed";
import { GradientButton } from "../../components/common/gradientButton";
import { Background } from "../../components/background";
import { ImageMarquee } from "../../components/intro/imageMarquee";
import { HEIGHT, WIDTH } from "../../helpers/constants";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Controls = ({ currentScreen, setCurrentScreen }) => {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("Home");
  };s
  const onNext = () => {
    if (currentScreen == 2) {
      navigateToHome();
    } else {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const onBack = () => {
    setCurrentScreen(currentScreen - 1);
  };
  return (
    <HStack p={"$10"} justifyContent="space-evenly">
      {currentScreen !== 0 && <GradientButton title="Back" onPress={onBack} />}
      <GradientButton
        title={currentScreen == 0 ? "Start" : "Next"}
        onPress={onNext}
      />
    </HStack>
  );
};

export const IntroView = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      component: WelcomeScreen,
    },
    {
      title: "Thousands of activies",
      description: "Discover experiences around you",
      component: (props) => (
        <IntroLayout {...props} content={<TextMarquee />} />
      ),
    },
    {
      title: "Thousands of places",
      description: "Discover experiences around you",
      component: (props) => (
        <IntroLayout {...props} content={<ImageMarquee />} />
      ),
    },
  ];

  return (
    <Background>
      <AnimatePresence>
        {screens.map((screen, index) => {
          if (index === currentScreen) {
            return (
              <MotiView
                key={index}
                initial={{
                  opacity: 0,
                  //   scale: 0,
                  //   translateX: WIDTH,
                }}
                animate={{
                  opacity: 1,
                  //   scale: 1,
                  //   translateX: 0,
                }}
                exit={{
                  opacity: 0,
                  //   scale: 1,
                  //   translateX: -WIDTH,
                }}
                style={{
                  position: "absolute",
                  top: 100,
                  bottom: 200,
                  left: 0,
                  right: 0,
                  height: HEIGHT - 300,
                  width: WIDTH,
                  //   backgroundColor: "red",
                }}
                animation={{
                  type: "timing",
                  duration: 500,
                }}
              >
                <screen.component
                  key={index}
                  setCurrentScreen={setCurrentScreen}
                  currentScreen={currentScreen}
                  title={screen?.title}
                  description={screen?.description}
                />
              </MotiView>
            );
          }
        })}
      </AnimatePresence>
      <View style={{ height: "80%" }} />
      <Controls
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
      />
    </Background>
  );
};
