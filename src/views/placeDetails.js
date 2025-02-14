import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { Background } from "../components/background";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import MapView, { UrlTile } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { WIDTH } from "../helpers/constants";
import { useSelector } from "react-redux";
import { getPlaces } from "../redux/selectors";

const imageList = [
  {
    id: 1,
    url: "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
  },
  {
    id: 2,
    url: "https://tse1.mm.bing.net/th?id=OIP.XNLQn5Z__Lm-akhM3ys8VQHaE7&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    url: "https://lemonicks.com/wp-content/uploads/2023/02/Sigiriya-royal-garden-HL-ASC00170.jpg",
  },
  {
    id: 4,
    url: "https://tse4.mm.bing.net/th?id=OIP.ubQr1zQtqIjjPaovIusY7AHaE-&pid=Api&P=0&h=220",
  },
  {
    id: 5,
    url: "https://tse2.mm.bing.net/th?id=OIP.RdR3PjFxEoYwCstN7gwSNQHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 6,
    url: "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
  },
];
export const PlaceDetails = ({place}) => {
  const navigation = useNavigation();
  const width = WIDTH;
  const places = useSelector(getPlaces);

  // const place = places[0];
  const COUNT = place?.images?.length ?? 1;
  const PAGE_WIDTH = WIDTH * 0.9;

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: PAGE_WIDTH / 2,
    style: {
      width: PAGE_WIDTH,
    },
  };

  return (
    // <Background>
    // <ScrollView>
    <VStack h={"100%"} bgColor="white">
      <View padding={5} paddingHorizontal={20} width={WIDTH}>
        <HStack justifyContent="space-between">
          <Heading>{place?.place_name}</Heading>
          <Text>{`USD ${place?.ticket_price}`}</Text>
        </HStack>
        <HStack justifyContent="space-between" mb={"$4"}>
          <Text>{place?.city}</Text>
          <Text>Per person</Text>
        </HStack>
      </View>
      <View flex={0.3}>
      <Image source={{ uri: place?.header_image?.url ?? "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220" }} alt="placeImage" size="full" />
        {/* <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={false}
          data={imageList}
          scrollAnimationDuration={1000}
          renderItem={({ index, item }) => (
            <Image source={{ uri: item.url }} alt="placeImage" size="full" />
          )}
        /> */}
      </View>
      <View flex={0.7} p={"$5"} bgColor="white">
        <Text mb={"$3"}>{place?.description}</Text>
        <HStack justifyContent="left" mb={"$4"}>
          <EvilIcons name="location" size={24} color="#15A9E8" />
          <Box ml={"$6"}>
            <Text>{place?.city}</Text>
            <Text>Sri Lanka</Text>
          </Box>
          {/* <Button bgColor="#425884" size="xs">
                            <ButtonText>
                                Add to tour
                            </ButtonText>
                        </Button> */}
        </HStack>
        <HStack justifyContent="left">
          <EvilIcons name="clock" size={24} color="#15A9E8" />
          <Box ml={"$6"}>
            <Text>Open</Text>
            <Text>9.00am </Text>
          </Box>
        </HStack>
        <Carousel
          {...baseOptions}
          loop
          // style={{backgroundColor: 'green'}}
          width={WIDTH * 0.8}
          height={WIDTH / 2}
          autoPlay={true}
          data={place?.images}
          scrollAnimationDuration={3000}
          // pagingEnabled={false}
          // customAnimation={animationStyle}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({ index, item }) => (
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "white",
                overflow: "hidden",
              }}
            >
              <Image source={{ uri: item.url ?? "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220" }} alt="placeImage" size="full" />
            </View>
          )}
        />
        {/* <View flex={1} justifyContent="center" alignItems="center">
                        <MapView
                            style={{width: width, height: width}}
                            initialRegion={{
                                latitude: 7.9483,
                                longitude: 80.7532,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <UrlTile
                                urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                maximumZ={19}
                            />
                        </MapView>
                    </View> */}
      </View>
      {/* <Button onPress={() => navigation.navigate("GeneralQuestions")}>
                    <ButtonText>General questions</ButtonText>
                </Button>
                <Button onPress={() => navigation.navigate("DayPlanner")}>
                    <ButtonText>Day planner</ButtonText>
                </Button> */}
    </VStack>
    //     </ScrollView>
    // </Background>
  );
};
