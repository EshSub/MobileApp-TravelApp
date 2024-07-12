import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, LinearGradient } from "@gluestack-ui/themed";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

export const GradientButton = ({ title, onPress, ...props }) => {
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
        <Text textAlign="center" size="xl" fontWeight={600} color="#fff" px={"$2"}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const GradientChip = ({ text, selected, index, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        p="$2"
        pl={"$5"}
        pr={"$5"}
        colors={selected == index ? ["#5495FF", "#8BD8F9"] : ["#ffffff", "#ffffff"]}
        borderRadius="$2xl"
        start={[0, 0]}
        end={[1, 1]}
        as={ExpoLinearGradient}
      >
        <Text textAlign="center" size="sm" fontWeight={600} color={selected == index ? "#ffffff" : "#5E6A81"}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
