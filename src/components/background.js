import { View } from "@gluestack-ui/themed";
import { SafeAreaView, Text } from "react-native";

export const Background = ({ children }) => {
  return (
    <View height={"100%"} backgroundColor="#F4FEFF" p={"$4"}>
      <SafeAreaView
        style={{
          // backgroundColor: "red",
          height: "100%",
          width: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};
