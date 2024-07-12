import {
  Input,
  InputField,
  VStack,
  TextareaInput,
  Textarea,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { headerStyles, subHeaderStyles } from "./styles";
import { Fade } from "../animated/Fade";
import { useState } from "react";

export const GeneralDescription = () => {
  const [description, setDescription] = useState("");
  return (
    <VStack gap={0}>
      <AnimatedText delay={100} style={headerStyles}>
        Did we miss anything?
      </AnimatedText>
      <AnimatedText delay={500} style={subHeaderStyles}>
        Describe your ideal trip and we'll take care of the rest
      </AnimatedText>
      <Fade delay={1000} style={{ marginTop: 40 ,gap: 5 }}>
        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          //   w="$64"
          w={"100%"}
        >
          <TextareaInput
            placeholder="I want my trip to be..."
            onChangeText={(text) => setDescription(text)}
          />
        </Textarea>
        <HStack justifyContent="flex-end">
            <Text fontSize={11}>{`${description.length}/1000`}</Text>
        </HStack>
      </Fade>
    </VStack>
  );
};
