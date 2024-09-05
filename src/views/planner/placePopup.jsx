import { useState } from "react";
import Popover from "react-native-popover-view";
import { Place } from "./place";
import {
  BORDER_RADIUS,
  HEIGHT,
  SELECTED_BACKGROUND_COLOR,
  WIDTH,
} from "../../helpers/constants";
import {
  AddIcon,
  Card,
  Divider,
  HStack,
  Heading,
  Icon,
  ScrollView,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";

import { places as PLACES } from "../../helpers/data";
import { MotiView } from "moti";

export const PlacePopup = ({ renderPressable, place }) => {
  const [render, setRender] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(place);

  const [places, setPlaces] = useState([place]);

  const onClose = () => {
    setOpen(false);
  };

  const onPress = () => {
    setRender(true);
    setOpen(true);
  };

  const renderer = () => {
    return renderPressable({ onPress });
  };

  const onSuggestNewPress = () => {
    const newPlace = PLACES[Math.floor(Math.random() * PLACES.length)];
    setPlaces([...places, newPlace]);
    setSelectedPlace(newPlace);
  };

  return (
    <>
      {renderer()}
      {render && (
        <Popover
          isVisible={isOpen}
          onRequestClose={onClose}
          style={{ width: WIDTH }}
          onCloseComplete={() => {
            setRender(false);
          }}
          popoverStyle={{
            borderRadius: BORDER_RADIUS,
            width: WIDTH * 0.95,
            backgroundColor: "#FFF",
            maxHeight: HEIGHT * 0.8,
          }}
        >
          <MotiView
            key={selectedPlace.place_id}
            from={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Place place={selectedPlace} />
          </MotiView>
          <Divider />
          <ScrollView horizontal>
            <HStack style={{ margin: 10 }} gap={5}>
              {places.map((place) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPlace(place);
                    }}
                  >
                    <Card
                      variant="outline"
                      size="sm"
                      borderRadius={BORDER_RADIUS}
                      backgroundColor={
                        selectedPlace.place_id == place.place_id
                          ? SELECTED_BACKGROUND_COLOR
                          : null
                      }
                    >
                      <Heading>{place.place_name}</Heading>
                    </Card>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity onPress={onSuggestNewPress}>
                <Card variant="outline" size="sm" borderRadius={BORDER_RADIUS}>
                  <HStack alignItems={"center"}>
                    <AddIcon />
                    <Heading>Suggest new</Heading>
                  </HStack>
                </Card>
              </TouchableOpacity>
            </HStack>
          </ScrollView>
        </Popover>
      )}
    </>
  );
};
