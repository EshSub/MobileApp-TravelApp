import { Button, VStack, View } from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { Text } from "@gluestack-ui/themed";
import { headerStyles, subHeaderStyles } from "./styles";
import { COLORS } from "../../helpers/constants";
import CalendarPicker from "react-native-calendar-picker";
import { useEffect, useState } from "react";
import { Fade } from "../animated/Fade";
import { useDispatch, useSelector } from "react-redux";
import { getDuration, getPlaces, getSelectedEndDate, getSelectedStartDate } from "../../redux/selectors";
import { setDuration, setSelectedEndDate, setSelectedStartDate } from "../../redux/slices/formStateSlice";

export const ChooseDates = () => {
  const dispatch = useDispatch()
  const selectedStartDate = useSelector(getSelectedStartDate)
  const selectedEndDate = useSelector(getSelectedEndDate)
  const duration = useSelector(getDuration)

  const onDateChange = (date, type) => {
    if (type === "END_DATE"){
      dispatch(setSelectedEndDate(date))
    }else {
      dispatch(setSelectedStartDate(date))
    }

  };

  useEffect(() => {
    const timeDiff = selectedEndDate?.getTime() - selectedStartDate?.getTime();
    const diffInDays = timeDiff/(1000*3600*24) + 1
    dispatch(setDuration(diffInDays))
    console.log({duration})
  }),[selectedStartDate, selectedEndDate]

  console.log({selectedStartDate, selectedEndDate})
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
            onDateChange={onDateChange}
            allowRangeSelection
            selectedStartDate={selectedStartDate ?? ''}
            selectedEndDate={selectedEndDate ?? ''}
            // disabledDates={(date) => new Date() > date}
            minDate={new Date()}

          />
          <Button 
            onPress={() => { 
              dispatch(setSelectedEndDate(null))
              dispatch(setSelectedStartDate(null))
            }}
            variant={"link"}>
            <Text>Clear</Text>
          </Button>
        </Fade>
      </View>
    </VStack>
  );
};
