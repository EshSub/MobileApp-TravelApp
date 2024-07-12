import { Button, Text, VStack, View } from "@gluestack-ui/themed";
import MapView, { Marker, UrlTile, AnimatedRegion } from "react-native-maps";
import { HEIGHT, WIDTH } from "../helpers/constants";
import { useSelector } from "react-redux";
import { getPlaces } from "../redux/selectors";
import { PlacesSearchBar } from "../components/placesSearchBar";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native";
import { PlaceDetails } from "./placeDetails";
import { Place } from "./planner/place";

export const Map = ({ route }) => {
  const places = useSelector(getPlaces);

  const handlePress = (props) => {
    console.log({ props });
  };
  useEffect(() => {
    if (route.params?.place) {
      setSearchPlace(route.params.place);
    }
  }, []);

  const [searchPlace, setSearchPlace] = useState();
  const ASPECT_RATIO = WIDTH / HEIGHT;
  const LATITUDE_DELTA = 0.0922;
  const mapRef = useRef(null);
  const zoomToLocation = (place) => {
    mapRef.current.animateToRegion(
      {
        longitude: place.longitude,
        latitude: place.latitude,
        longitudeDelta: 0.005,
        latitudeDelta: 0.005,
      },
      1000
    );
  };
  useEffect(() => {
    if (searchPlace) {
      zoomToLocation(searchPlace);
      bottomSheetModalRef.current?.present();
    }
  }, [searchPlace]);

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "85%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index == -1) {
      setSearchPlace(null);
    }
  }, []);

  return (
    <BottomSheetModalProvider>
      <View>
        <MapView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: WIDTH,
            height: HEIGHT,
          }}
          initialRegion={{
            latitude: 7.9483,
            longitude: 80.7532,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
          ref={mapRef}
        >
          <UrlTile
            urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19}
          />
          {places.map((item) => (
            <Marker
              key={item.place_id}
              title={item.place_name}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              pinColor="red"
              onPress={() => handlePress(item.place_id)}
            />
          ))}
        </MapView>

        <View>
          <SafeAreaView style={{ zIndex: 100, height: "100%" }}>
            <VStack
              flex={1}
              // justifyContent="center"
              alignItems="center"
              paddingTop={60}
              // height={1000}
              // backgroundColor="red"
            >
              <View width={WIDTH * 0.7}>
                <PlacesSearchBar
                  searchPlace={searchPlace}
                  setSearchPlace={setSearchPlace}
                />
              </View>
              {/* <Text>Map</Text> */}
              <Button
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="black"
              />
            </VStack>
          </SafeAreaView>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetView>
              {/* <Text>Awesome 🎉</Text> */}
              <PlaceDetails place={searchPlace} />
              
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};
