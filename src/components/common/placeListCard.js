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

export const PlaceListCard = ({name, startDate, endDate, image}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("PlaceDetails")}>
            <HStack width={'100%'} bgColor="#ffffff" p="$2" borderRadius={"$2xl"} space="sm" alignItems="center" my={"$1"} shadowColor="#4258841A">
                <Image
                    borderRadius="$2xl"
                    alt="placeImage"
                    source={{uri : image}}
                />
                <VStack flex={1}>
                    <Heading size="xl" fontFamily="$heading" mb="$4" color="#767676">
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
                       { `${startDate} ${endDate}, 2024`}
                    </Text>
                </VStack>
                <View>
                    <Icon
                        as={ChevronRightIcon}
                        size="xl"
                        color="#425884"
                    />
                </View>
            </HStack>
        </TouchableOpacity>
    );
};
