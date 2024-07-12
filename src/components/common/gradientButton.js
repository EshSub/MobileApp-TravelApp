import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, LinearGradient } from "@gluestack-ui/themed";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

export const GradientButton = ({ title, onPress, children, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        p="$3"
        // width="50%"
        colors={["#5495FF", "#8BD8F9"]}
        borderRadius="20px"
        start={[0, 0]}
        end={[1, 1]}
        as={ExpoLinearGradient}
      >
        {title ? (
          <Text
            textAlign="center"
            size="xl"
            fontWeight={600}
            color="#fff"
            px={"$2"}
          >
            {title}
          </Text>
        ) : (
          children
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
