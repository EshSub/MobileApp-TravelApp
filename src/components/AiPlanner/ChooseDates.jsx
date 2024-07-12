import { Button, VStack, View } from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { Text } from "@gluestack-ui/themed";
import { headerStyles, subHeaderStyles } from "./styles";
import { COLORS } from "../../helpers/constants";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";
import { Fade } from "../animated/Fade";

export const ChooseDates = () => {
  const [dates, setDates] = useState();

  const onDateChange = (date) => {
    setDates(date);
  };

  return (
    <VStack gap={20}>
      <AnimatedText delay={100} style={{ ...headerStyles }}>
        First tell us{" "}
        <Text color={COLORS.highlightText} style={headerStyles}>
          when
        </Text>{" "}
        you want to travel
      </AnimatedText>
      <View>
        <Fade delay={500}>
          <CalendarPicker
            style={{ margin: 20 }}
            todayTextStyle={{ fontWeight: "bold" }}
            onDateChange={this.onDateChange}
            allowRangeSelection
            // disabledDates={(date) => new Date() > date}
            minDate={new Date()}

          />
          <Button onPress={() => setDates(null)} variant={"link"}>
            <Text>Clear</Text>
          </Button>
        </Fade>
      </View>
    </VStack>
  );
};
