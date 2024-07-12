import React from "react";
import {
  View,
  Badge,
  BadgeText,
  HStack,
  Image,
  VStack,
  Text,
} from "@gluestack-ui/themed";
import { WIDTH } from "../../helpers/constants";
import { CircleDollarSignIcon, ClockIcon, Icon } from "lucide-react-native";
import { Marquee } from "@animatereactnative/marquee";
import Carousel from "react-native-reanimated-carousel";
import { interpolate } from "react-native-reanimated";

export const Place = ({ place }) => {
  const _place = {
    place_id: 5,
    place_name: "Ella",
    description: "Scenic hill town with tea plantations and waterfalls",
    district: 22,
    province: 8,
    ticket_price: "Free",
    currency: null,
    latitude: 6.8754,
    longitude: 81.0463,
    how_to_visit: "Train from Kandy or Colombo",
    best_time_to_visit: "January to April",
    data: null,
    activities: ["Hiking", "Sightseeing", "Visiting tea plantations"],
    keywords: ["Scenic", "Hill town", "Tea plantations", "Waterfalls", "Ella"],
    header_image: {
      url: "https://th.bing.com/th/id/R.c96721a5de9286f70c6ca3fb62a75672?rik=crj0lRrEHq2nsQ&pid=ImgRaw&r=0",
    },
    images: [
      {
        url: "https://th.bing.com/th/id/R.c5ac95c47d4a4855be29e0a9d8c179ac?rik=ArKzFXzAJjJ4yA&pid=ImgRaw&r=0",
      },
      {
        url: "https://th.bing.com/th/id/R.77fa7a505b3f98104e6a159809193cb5?rik=DgtVc5Ax4VQVtQ&pid=ImgRaw&r=0",
      },
      {
        url: "https://www.wanderlustig.nl/wp-content/uploads/treinreis-kandy-ella-Sri-Lanka.jpg",
      },
    ],
  };

  const COUNT = place.images.length;
  const PAGE_WIDTH = WIDTH * 0.9;

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: PAGE_WIDTH / 2,
    style: {
      width: PAGE_WIDTH,
    },
  };

  const animationStyle = React.useCallback((value) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <VStack gap={10} 
    // backgroundColor="blue"
     m={0}>
      <Image
        width={"100%"}
        height={200}
        source={{ uri: place.header_image.url }}
        style={{ borderRadius: 10 }}
      />
      <Marquee speed={0.3}>
        <HStack overflow="scroll" gap={5}>
          {place.activities.map((tag, index) => (
            <Badge size="md" variant="solid" action="success" key={index}>
              <BadgeText>{tag}</BadgeText>
            </Badge>
          ))}
        </HStack>
      </Marquee>
      <Marquee speed={0.2}>
        <HStack overflow="scroll" gap={5}>
          {place.keywords.map((tag, index) => (
            <Badge size="md" variant="solid" action="info" key={index}>
              <BadgeText>{tag}</BadgeText>
            </Badge>
          ))}
        </HStack>
      </Marquee>
      <HStack gap={10}>
        <IconWithText
          Icon={CircleDollarSignIcon}
          text={<Text>{`${place.ticket_price}${place.currency ?? ""}`}</Text>}
        />
        <IconWithText
          Icon={ClockIcon}
          text={<Text>{place.best_time_to_visit}</Text>}
        />
      </HStack>

      <Carousel
        {...baseOptions}
        loop
        // style={{backgroundColor: 'green'}}
        width={WIDTH * 0.8}
        height={WIDTH / 2}
        autoPlay={true}
        data={place.images}
        scrollAnimationDuration={3000}
        // onSnapToItem={(index) => console.log("current index:", index)}
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
              backgroundColor: "red",
              overflow: "hidden",
            }}
          >
            <Image source={{ uri: item.url }} alt="placeImage" size="full" />
          </View>
        )}
      />
      {/* <Marquee speed={Math.random() / 2}>
        <HStack>
          {place.images.map((image, i) => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "red",
                  overflow: "hidden",
                }}
                mx={"$1"}
              >
                <Image
                  key={`${i}`}
                  source={{ uri: image.url }}
                  height={120}
                  width={200}
                  alt="homePage"
                  resizeMethod="center"
                />
              </View>
            );
          })}
        </HStack>
      </Marquee> */}
    </VStack>
  );
};

const IconWithText = ({ Icon, text }) => {
  const iconProps = {
    size: 20,
    color: "black",
  };
  return (
    <HStack
      gap={5}
      px={"$2"}
      py={"$1"}
      alignItems="center"
      style={{ borderRadius: 10, borderColor: "grey", borderWidth: 1 }}
    >
      <Icon {...iconProps} />
      {text}
    </HStack>
  );
};
