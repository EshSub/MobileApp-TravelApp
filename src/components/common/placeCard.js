import { Box, Heading, VStack, Text, Image, View, HStack, Badge, BadgeText, BadgeIcon, StarIcon, Card } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"
import { getPlaces } from "../../redux/selectors"
import { useDataProvider } from "../../apis"

export const PlaceCard = ({ index, name, location, rating, image }) => {
    const navigation = useNavigation()
    // const places = useSelector(getPlaces)
    const dataprovider = useDataProvider()
    const { data: places , loading : placeLoading } = dataprovider.places.get();
    const place = places?.find((item) => item.place_id == index)
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Map', {place: place})}>
            <Card backgroundColor="#ffffff" width={'100px'} pb="$3" p="$0" style={{borderRadius: 10}} mx={"$2"}>
                <VStack justifyContent="center" alignItems="center">
                    <Image
                        style={{borderTopLeftRadius: 10,borderTopRightRadius:10, width:'100%'}}
                        alt="placeImage"
                        source={{ uri: image ?? "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg" }}
                        width={300}
                        height={180}
                    />
                    <Heading fontFamily="$heading" size={'$xl'} fontWeight={600}>
                        {name}
                    </Heading>
                    <HStack justifyContent="space-between">
                        <Text fontWeight={300} mr={"$2"}>
                            {location}
                        </Text>
                        <Badge size="md" variant="solid" style={{borderRadius: 10}} alignSelf="flex-end" backgroundColor="#5E6A81">
                            <BadgeIcon fontVariant={"solid"} as={StarIcon} mr="$2" color="#FFC700" tintColor="#FFC700" />
                            <BadgeText color="#ffffff">{rating ?? 4.5}</BadgeText>
                        </Badge>
                    </HStack>
                </VStack>
            </Card>
        </TouchableOpacity>
    )
}