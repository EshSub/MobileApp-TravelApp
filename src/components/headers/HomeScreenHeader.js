import { HStack } from "@gluestack-ui/themed";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import DrawerIcon from "../drawer/drawerIcon";
import { Button, Icon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "lucide-react-native";
import { GradientButton } from "../common/gradientButton";

export const HomeScreenHeader = () => {
  return (
    <SafeAreaView>
      <HStack px="$3" py="$1">
        <DrawerIcon />
      </HStack>
    </SafeAreaView>
  );
};

export const HeaderWithBackButton = ({ onBack }) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <HStack px="$3" py="$1">
        <GradientButton onPress={onPress}>
          <Icon as={ChevronLeftIcon} size={25} />
        </GradientButton>
      </HStack>
    </SafeAreaView>
  );
};
