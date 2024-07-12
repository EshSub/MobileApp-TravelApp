import { Box, Heading, VStack, Text, Image, View, HStack, Badge, BadgeText, BadgeIcon, StarIcon } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"
import { getPlaces } from "../../redux/selectors"

export const PlaceCard = ({ index, name, location, rating, image }) => {
    const navigation = useNavigation()
    const places = useSelector(getPlaces)
    const place = places.find((item) => item.place_id == index)
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Map', {place: place})}>
            <Box backgroundColor="#ffffff" width={'100px'} p="$3" borderRadius={"$2xl"}>
                <VStack justifyContent="center" alignItems="center">
                    <Image
                        borderRadius="$2xl"
                        alt="placeImage"
                        source={{ uri: image }}
                        width={300}
                        height={180}
                    />
                    <Heading fontFamily="$heading" size={'$xl'} fontWeight={600}>
                        {name}
                    </Heading>
                    <HStack justifyContent="space-between">
                        <Text fontSize={'$md'} fontWeight={300} mr={"$2"}>
                            {location}
                        </Text>
                        <Badge size="md" variant="solid" borderRadius="$full" alignSelf="flex-end" backgroundColor="#5E6A81">
                            <BadgeIcon fontVariant={"solid"} as={StarIcon} mr="$2" color="#FFC700" tintColor="#FFC700" />
                            <BadgeText color="#ffffff">{rating ?? 4.5}</BadgeText>
                        </Badge>
                    </HStack>
                </VStack>
            </Box>
        </TouchableOpacity>
    )
}