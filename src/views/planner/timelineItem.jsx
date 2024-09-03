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

export const TimelineItem = ({ item }) => {
  const places = useSelector(getPlaces);

  const place = places[Math.floor(Math.random() * places?.length)];

  const backgroundColor = useGetBackgroundColorFromUrl();

  return (
    <View sx={{borderRadius: 20, backgroundColor: backgroundColor, overflow: 'hidden'}}>
      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        m="$0"
        p="$0"
        sx={{ borderRadius: 20 }}
        style={{
          borderRadius: 10,
          margin: 0,
          padding: 0,
          backgroundColor: backgroundColor,
        }}
        _item={{ margin: 0, padding: 0 }}
      >
        <AccordionItem
          value="a"
          m={"$0"}
          p={"$0"}
          backgroundColor={backgroundColor}
          borderRadius={BORDER_RADIUS}
        >
          <AccordionHeader m={"$0"} p={"$0"} bg={backgroundColor}>
            <AccordionTrigger m={"$0"} p={"$0"}>
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
          <AccordionContent
            _content={{
              padding: 0,
              margin: 0,
            }}
            m={"$0"}
            p={"$0"}
            style={{
              borderRadius: 10,
              padding: 0,
              margin: 0,
              backgroundColor: backgroundColor,
            }}
          >
            <Place place={place} />
            {/* <AccordionContentText>
            
          </AccordionContentText> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};
