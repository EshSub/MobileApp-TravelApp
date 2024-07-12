import { View } from "@gluestack-ui/themed";
import { SafeAreaView, Text } from "react-native";
import { BACKGROUND_COLOR } from "../helpers/constants";

export const Background = ({ children }) => {
  return (
    <View height={"100%"} backgroundColor={BACKGROUND_COLOR} p={"$4"}>
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
