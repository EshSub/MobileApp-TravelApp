import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { Text, LinearGradient } from "@gluestack-ui/themed";
    
const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        // p="$3"
        // width="50%"
        colors={["#5495FF", "#8BD8F9"]}
        borderRadius={10}
        start={[0, 0]}
        end={[1, 1]}
        as={ExpoLinearGradient}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;