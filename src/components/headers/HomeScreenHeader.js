import { HStack } from "@gluestack-ui/themed";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import DrawerIcon from "../drawer/drawerIcon";

export const HomeScreenHeader = () => {
  return (
    <SafeAreaView>
      <HStack px="$3" py="$1">
        <DrawerIcon />
      </HStack>
    </SafeAreaView>
  );
};
