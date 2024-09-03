import {
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    View,
    VStack,
    ChevronRightIcon,
    Card
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getPlaces } from "../../redux/selectors";

export const PlaceListCard = ({ index, name, timeToVisit, image }) => {
    const navigation = useNavigation()
    const places = useSelector(getPlaces)
    const place = places.find((item) => item.place_id == index)
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Map", { place: place })}>
            <Card width={150} mx="$2" p="$0" height={150}>
                <VStack bgColor="#ffffff" p="$2" style={{ borderRadius: 10 }} space="sm" alignItems="center" shadowColor="#4258841A" mr={"$2"}>
                    <Image
                        style={{borderRadius: 10}}
                        alt="placeImage"
                        source={{ uri: image ?? "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg" }}
                    />
                    <VStack flex={1}>
                        <Heading size="sm" fontFamily="$heading" textAlign="center" color="#767676">
                            {name}
                        </Heading>
                        <Text
                            fontStyle="normal"
                            fontFamily="$heading"
                            fontWeight="$normal"
                            letterSpacing={"$xs"}
                            mb="$2"
                            sx={{
                                color: "#42588480",
                                _dark: {
                                    color: "$textDark200",
                                },
                            }}
                        >
                            {timeToVisit}
                        </Text>
                    </VStack>
                </VStack>
            </Card>
        </TouchableOpacity>
    );
};
