import { useIsAuthenticated } from "../../hooks/auth";
import React from "react";
import { View, Text } from "react-native";

export const UserAvatarIcon = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return (
      <View>
        <Text>logged in</Text>
      </View>
    );
  } else
    return (
      <View>
        <Text>not logged in</Text>
      </View>
    );
};
