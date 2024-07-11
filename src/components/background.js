import { View } from "@gluestack-ui/themed";
import { SafeAreaView, Text } from "react-native";

export const Background = ({ children }) => {
  return (
    <View height={"100%"} backgroundColor="#F4FEFF">
      <SafeAreaView
        style={{
          // backgroundColor: "red",
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};
