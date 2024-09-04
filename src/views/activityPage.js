import { Heading, Image, Text, View, VStack } from "@gluestack-ui/themed";
import { Background } from "../components/background";
import { useEffect, useRef, useState } from "react";
import ParallaxScrollView from "../components/common/parallaxScrollView";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { PlaceCard } from "../components/common/placeCard";
import { BACKGROUND_COLOR } from "../helpers/constants";

export const activityList = [
    {
        activity_id: 1,
        activity_name: "Surfing",
        imageUrl:
            "https://www.experiencetravelgroup.com/blog/wp-content/uploads/2022/04/shutterstock_720980179-scaled.jpg",
        description:
            "Ride the waves and enjoy the thrill of surfing along sandy shores. Whether you're a beginner looking to learn or an experienced surfer seeking the perfect wave, surfing offers a dynamic and exciting adventure on the water.",
    },
    {
        activity_id: 2,
        activity_name: "Trekking",
        imageUrl:
            "https://www.srilankanexpeditions.com/images/activities-in-sri-lanka/trekking-and-hiking-in-sri-lanka/trekking-and-hiking-in-sri-lanka2.jpg",
        description:
            "Embark on scenic hikes through lush landscapes, from dense forests to high mountain ranges. Trekking allows you to connect with nature, enjoy fresh air, and witness stunning views, whether you prefer gentle walks or challenging climbs.",
    },
    {
        activity_id: 3,
        activity_name: "Snorkelling",
        imageUrl:
            "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/Snorkeling-In-Sri-Lanka-Cover.jpg",
        description:
            "Dive into crystal-clear waters to discover vibrant coral reefs, schools of colorful fish, and a variety of marine life. It's an ideal activity for those who love to explore the underwater world and experience the beauty of the ocean.",
    },
    {
        activity_id: 4,
        activity_name: "Kayaking",
        imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220",
        description:
            "Glide through calm rivers, tranquil lagoons, or coastal waters, offering a peaceful way to explore natural surroundings. Kayaking is a great activity for adventure seekers and nature enthusiasts alike, providing a unique perspective on aquatic landscapes.",
    },
];

const ActivityPlaces = [
    {
        id: 1,
        place: "Unawatuna",
        activity: "Snorkelling"
    },
    {
        id: 2,
        place: "Negombo",
        activity: "Snorkelling"
    },
    {
        id: 3,
        place: "Adam's Peak",
        activity: "Trekking"
    },
    {
        id: 4,
        place: "Pidurangala rock",
        activity: "Trekking"
    },
    {
        id: 5,
        place: "Hikkaduwa Lagoon",
        activity: "Kayaking"
    },
    {
        id: 6,
        place: "Tangalle lagoon",
        activity: "Kayaking"
    },
    {
        id: 7,
        place: "Mirissa",
        activity: "Surfing"
    },
    {
        id: 8,
        place: "Hikkaduwa",
        activity: "Surfing"
    },
];

export const ActivityPage = ({ route }) => {
    const [activityId, setActivityId] = useState();
    const [activity, setActivity] = useState();
    const ref = useRef()
    const width = Dimensions.get('window').width;
    useEffect(() => {
        if (route.params?.id) {
            setActivityId(route.params.id);
        }
    }, []);

    useEffect(() => {
        setActivity(activityList.find((o) => o.activity_id === activityId));
    }, [activityId]);
    return (
        <Background>
            <ParallaxScrollView
                headerImage={
                    <Image
                        style={{borderRadius: 10}}
                        size="full"
                        source={{ uri: activity?.imageUrl ?? "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg" }}
                    />
                }
                headerBackgroundColor={BACKGROUND_COLOR}
            >
                <Text>{activity?.description}</Text>
            <Heading color="#5E6A81" pl={"$2"}>
                Top picks
            </Heading>
            <Carousel
                ref={ref}
                loop
                width={width * 0.9}
                height={width * 0.6}
                autoPlay={true}
                data={ActivityPlaces}
                mode="parallax"
                scrollAnimationDuration={2000}
                renderItem={({ index, item }) => (
                    <View style={{ flex: 1 }}>
                        <PlaceCard
                            index={item.id}
                            name={item.name}
                            image={item.url ?? "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220"}
                            // location={item.location}
                        />
                    </View>
                )}
            />
            <Heading fontSize={"$lg"} color="#5E6A81" pl={"$2"}>
                Other locations
            </Heading>
            <Carousel
                ref={ref}
                loop
                width={width * 0.9}
                height={width * 0.6}
                autoPlay={true}
                data={ActivityPlaces}
                mode="parallax"
                scrollAnimationDuration={2000}
                renderItem={({ index, item }) => (
                    <View style={{ flex: 1 }}>
                        <PlaceCard
                            index={item.id}
                            name={item.name}
                            image={item.url ?? "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220"}
                            // image={item.header_image.url}
                            // location={item.location}
                        />
                    </View>
                )}
            />
            </ParallaxScrollView>
        </Background>
    );
};
