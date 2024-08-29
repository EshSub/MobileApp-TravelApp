import {
  Box,
  Button,
  FlatList,
  HStack,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  LinearGradient,
  SearchIcon,
  VStack,
  View,
  Text,
  ButtonText,
  ScrollView,
} from "@gluestack-ui/themed";
import { Background } from "../components/background";
import { PlaceListCard } from "../components/common/placeListCard";
import { PlaceCard } from "../components/common/placeCard";
import { Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useRef, useState } from "react";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ActivityCard, activityList } from "../components/common/activityCard";
import { AnimatedTextSwitching } from "../components/animated/AnimatedTextSwitching";
import { GradientChip } from "../components/common/gradientButton";
import { PlacesSearchBar } from "../components/placesSearchBar";
import { useSelector } from "react-redux";
import { getPlaces } from "../redux/selectors";
import { Fab } from "../components/common/fab";

const data = [
  {
    id: 1,
    name: "Sigiriya",
    startDate: "25 March",
    endDate: "27 March",
    image:
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    location: "Dambulla",
    rating: "4.4",
  },
  {
    id: 2,
    name: "Anuradhapura",
    startDate: "25 March",
    endDate: "27 March",
    image:
      "https://3.bp.blogspot.com/-mHkQBNKl85w/UnTsdstl3-I/AAAAAAAAAGY/IGrlXNPwDuQ/s1600/anuradhapura-1300.jpg",
    location: "Anuradhapura",
    rating: "4.4",
  },
  {
    id: 3,
    name: "Trincomalee",
    startDate: "25 March",
    endDate: "27 March",
    image:
      "https://i.pinimg.com/originals/e5/d5/96/e5d5961fc5c4099f5b0f8e90b4ea9c15.jpg",
    location: "Trincomalee",
    rating: "4.4",
  },
  {
    id: 4,
    name: "Polonnaruwa",
    startDate: "25 March",
    endDate: "27 March",
    image:
      "https://1.bp.blogspot.com/-qy0lO7dfudM/XmUtEmH7GxI/AAAAAAAAGjM/RES7neMeC1sU6yVAJ9KHIcpXwMW2SnBpwCLcBGAsYHQ/s1600/20180724_160024.jpg",
    location: "Polonnaruwa",
    rating: "4.4",
  },
  {
    id: 5,
    name: "Dambulla",
    startDate: "25 March",
    endDate: "27 March",
    image: "https://media.timeout.com/images/102950271/image.jpg",
    location: "Dambulla",
    rating: "4.4",
  },
];

export const PlacesAndActivitiesScreen = () => {
  const width = Dimensions.get("window").width;
  const ref = useRef();
  const [selected, setSelected] = useState(0);
  const [searchPlace, setSearchPlace] = useState();
  const navigation = useNavigation();
  const places = useSelector(getPlaces);
  useEffect(() => {
    if (searchPlace) {
      navigation.navigate("Map", { place: searchPlace });
    }
  }, [searchPlace]);
  return (
    <Background>
      <ScrollView>
        <VStack flex={1} rowGap={"$4"} height={"100%"}>
          <AnimatedTextSwitching
            texts={["Welcome...", "Welkom...", "Herzlich willkommen..."]}
            size="3xl"
            fontWeight={600}
            textAlign="center"
          />
          <View flex={0.1}>
            <PlacesSearchBar
              searchPlace={searchPlace}
              setSearchPlace={setSearchPlace}
            />
          </View>
          <View flex={0.4}>
            <Box flexDirection="row" justifyContent="space-between">
              <GradientChip
                selected={selected}
                index={0}
                onPress={() => setSelected(0)}
                text={"Sights"}
              />
              <GradientChip
                selected={selected}
                index={1}
                onPress={() => setSelected(1)}
                text={"Tour"}
              />
              <GradientChip
                selected={selected}
                index={2}
                onPress={() => setSelected(2)}
                text={"Adventure"}
              />
              {/* <GradientChip 
                            selected={selected} 
                            index={3} 
                            onPress={() => {
                                setSelected(3)
                                navigation.navigate('Map', { place : null})}} 
                            text={"Map"}/> */}
            </Box>
            <View>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading fontSize={"$lg"} color="#5E6A81">
                  Fun activities
                </Heading>
                <Button
                  variant="link"
                  onPress={() => navigation.navigate("Activities")}
                >
                  <Text>View all</Text>
                </Button>
              </HStack>
              <FlatList
                numColumns={2}
                data={activityList}
                renderItem={({ item }) => (
                  <ActivityCard name={item.name} imageUrl={item.imageUrl} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <Heading fontSize={"$lg"} color="#5E6A81">
              Historical sights
            </Heading>
            <Carousel
              ref={ref}
              loop
              width={width * 0.9}
              height={width * 0.6}
              autoPlay={true}
              data={places}
              mode="parallax"
              scrollAnimationDuration={2000}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ index, item }) => (
                <View style={{ flex: 1 }}>
                  <PlaceCard
                    name={item.place_name}
                    image={item.header_image.url}
                    location={item.location}
                    rating={item.rating}
                  />
                </View>
              )}
            />
          </View>
          <View>
            <HStack>
              <Heading fontSize={"$lg"} color="#5E6A81">
                Popular places
              </Heading>
            </HStack>
            <FlatList
              horizontal
              data={places}
              renderItem={({ item }) => (
                <PlaceListCard
                  name={item.place_name}
                  image={item.header_image.url}
                  timeToVisit={item.best_time_to_visit}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </VStack>
      </ScrollView>
      <Fab />
    </Background>
  );
};
