import { VStack } from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { headerStyles, subHeaderStyles } from "./styles";

export const WelcomeStep = () => {
  return (
    <VStack>
      <AnimatedText delay={100} style={headerStyles}>
        Hi there!
      </AnimatedText>
      <AnimatedText delay={500} style={subHeaderStyles}>
        Welcome to the AI-powered travel planner. Let's get started!
      </AnimatedText>
    </VStack>
  );
};
