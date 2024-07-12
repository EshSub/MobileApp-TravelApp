import {
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    View,
    VStack,
    ChevronRightIcon
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { place } from "./placeCard";

export const PlaceListCard = ({name, timeToVisit, image}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Map", {place: place})}>
            <VStack bgColor="#ffffff" p="$2" borderRadius={"$2xl"} space="sm" alignItems="center" shadowColor="#4258841A" mr={"$2"}>
                <Image
                    borderRadius="$2xl"
                    alt="placeImage"
                    source={{uri : image}}
                />
                <VStack flex={1}>
                    <Heading size="sm" fontFamily="$heading" textAlign="center" color="#767676">
                        {name}
                    </Heading>
                    <Text
                        fontSize="$2xs"
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
        </TouchableOpacity>
    );
};
