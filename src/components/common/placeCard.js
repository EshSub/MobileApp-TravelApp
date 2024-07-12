import { Box, Heading, VStack, Text, Image, View, HStack, Badge, BadgeText, BadgeIcon, StarIcon } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"

export const place = {
    place_id: 1,
    place_name: "Sigiriya",
    description: "Ancient rock fortress with frescoes and gardens",
    district: 5,
    province: 2,
    ticket_price: 30,
    currency: "USD",
    latitude: 7.957,
    longitude: 80.7603,
    how_to_visit: "Bus from Dambulla",
    best_time_to_visit: "January to April",
    data: null,
    activities: ["Hiking", "Sightseeing", "Exploring historical ruins"],
    keywords: ["Ancient", "Fortress", "Gardens", "Historical", "Sigiriya"],
    header_image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Beauty_of_Sigiriya_by_Binuka.jpg",
    },
    images: [
      {
        url: "https://ychef.files.bbci.co.uk/1280x720/p0b7n6dm.jpg",
      },
      {
        url: "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress.jpg",
      },
      {
        url: "https://www.talesofceylon.com/wp-content/uploads/2019/10/Art-Sculpture-and-Poetry-800x1000.jpg",
      },
    ],
}

export const PlaceCard = ({ name, location, rating, image }) => {
    const navigation = useNavigation()
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