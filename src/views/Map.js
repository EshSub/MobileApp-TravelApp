import { Button, Text, View } from "@gluestack-ui/themed";
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

export const Map = ({ route }) => {
  const places = useSelector(getPlaces);
  const handlePress = () => {};
  const [place, setPlace] = useState();

  useEffect(() => {
    if (route.params?.place) {
      setPlace(route.params.place);
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
    if (place) {
      zoomToLocation(place);
    }
    if (searchPlace) {
      zoomToLocation(searchPlace);
    }
  }, [searchPlace, place]);

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <MapView
        style={{ width: WIDTH, height: HEIGHT }}
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
            onPress={handlePress}
          />
        ))}
      </MapView>
      <View position="absolute" top={"10%"} width={WIDTH * 0.8}>
        <PlacesSearchBar
          searchPlace={searchPlace}
          setSearchPlace={setSearchPlace}
        />
      </View>
      <BottomSheetModalProvider>
        <View>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetView >
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};
