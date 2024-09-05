import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  AccordionContentText,
  ChevronDownIcon,
  ChevronUpIcon,
  VStack,
  Text,
  Heading,
  View,
} from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { getPlaces } from "../../redux/selectors";
import { Place } from "./place";
import { useGetBackgroundColorFromUrl } from "../../hooks/color";
import { BORDER_RADIUS } from "../../helpers/constants";
import { TouchableOpacity } from "react-native";
import { PlacePopup } from "./placePopup";
import { useDataProvider } from "../../apis";

export const TimelineItem = ({ item, time }) => {
  const _places = useSelector(getPlaces);

  console.log({ item, time });

  // const { data: districts, isLoading } = useDataProvider().district.get();

  // const { data: place, isLoading } = useDataProvider().places.getPlaceForPlan({
  //   // type: item?.type,
  //   // price: item?.price,
  //   // type: "restaurant",
  //   district: item?.district,
  // });

  // console.log({ districts });

  const places = _places?.filter(p => p.district_name === item?.district);

  const place = places[Math.floor(Math.random() * places?.length)];

  const backgroundColor = useGetBackgroundColorFromUrl();

  return (
    <View
      sx={{
        borderRadius: 20,
        backgroundColor: backgroundColor,
        overflow: "hidden",
      }}
    >
      {/* <Text>{JSON.stringify(item)}</Text> */}

      {/* {!isLoading && place ? ( */}
        <PlacePopup
          place={place}
          backgroundColor={backgroundColor}
          renderPressable={({ onPress }) => (
            <AccordionHeader m={"$0"} p={"$0"} bg={backgroundColor}>
              <AccordionTrigger m={"$0"} p={"$0"} onPress={onPress}>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText>
                        <VStack>
                          <Heading>{place.place_name}</Heading>
                          <Text fontSize={12}>{place.description}</Text>
                        </VStack>
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
          )}
        />
      {/* ) : (
        <Text>Loading...</Text>
      )} */}
    </View>
  );
};
