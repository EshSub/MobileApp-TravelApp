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
import { useDataProvider } from "../apis";

export const PlacesAndActivitiesScreen = () => {
    const width = Dimensions.get("window").width;
    const ref = useRef();
    const [selected, setSelected] = useState(0);
    const [searchPlace, setSearchPlace] = useState();
    const navigation = useNavigation();
    // const places = useSelector(getPlaces);

    const dataprovider = useDataProvider();

    const { data: places , loading : placeLoading } = dataprovider.places.get();
    const { data: activities, loading : activityLoading } = dataprovider.activities.get();
    useEffect(() => {
        if (searchPlace) {
            navigation.navigate("Map", { place: searchPlace });
        }
    }, [searchPlace]);

    if (placeLoading || activityLoading) {
        return <Text>Loading</Text>
    }
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
                        {/* <Box flexDirection="row" justifyContent="space-between">
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
                        </Box> */}
                        <View >
                            <HStack justifyContent="space-between" alignItems="center">
                                <Heading color="#5E6A81" ml="$2">
                                    Fun activities
                                </Heading>
                                <Button
                                    variant="link"
                                    onPress={() => navigation.navigate("Activities")}
                                >
                                    <Text mr="$2">View all</Text>
                                </Button>
                            </HStack>
                            <FlatList
                                numColumns={2}
                                data={activities.slice(0,4)}
                                renderItem={({ item }) => (
                                    <ActivityCard
                                        name={item.activity_name}
                                        imageUrl={item.imageUrl}
                                        id={item.activity_id}
                                    />
                                )}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                        <Heading color="#5E6A81" ml="$2">
                            Historical sights
                        </Heading>
                        <Carousel
                            ref={ref}
                            loop
                            width={width}
                            height={width * 0.6}
                            autoPlay={true}
                            data={places}
                            mode="parallax"
                            scrollAnimationDuration={2000}
                            onSnapToItem={(index) => console.log("current index:", index)}
                            renderItem={({ index, item }) => (
                                <View style={{ flex: 1 }}>
                                    <PlaceCard
                                        index={item.place_id}
                                        name={item.place_name}
                                        image={item.header_image?.url}
                                        location={item.location}
                                        rating={item.rating}
                                    />
                                </View>
                            )}
                        />
                    </View>
                    <View>
                        <HStack>
                            <Heading color="#5E6A81" ml="$2">
                                Popular places
                            </Heading>
                        </HStack>
                        <FlatList
                            horizontal
                            data={places}
                            renderItem={({ item }) => (
                                <PlaceListCard
                                    index={item.place_id}
                                    name={item.place_name}
                                    image={item.header_image?.url}
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
