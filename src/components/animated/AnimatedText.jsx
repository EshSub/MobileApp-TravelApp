import { Text } from "@gluestack-ui/themed";
import { MotiView } from "moti";

export const AnimatedText = ({ delay, children, ...props }) => {
  return (
    <MotiView delay={delay} from={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Text {...props}>{children}</Text>
    </MotiView>
  );
};
