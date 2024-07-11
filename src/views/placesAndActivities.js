import { Box, Button, FlatList, HStack, Heading, Input, InputField, InputIcon, InputSlot, LinearGradient, SearchIcon, VStack, View, Text, ButtonText } from "@gluestack-ui/themed"
import { Background } from "../components/background"
import { PlaceListCard } from "../components/common/placeListCard"
// import { PlaceCard } from "../components/common/placeCard"
import { Dimensions, TouchableOpacity } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { useRef, useState } from "react"
import { LinearGradient as ExpoLinearGradient} from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"

const data = [
    {
        id: 1,
        name: 'Sigiriya',
        startDate: '25 March',
        endDate: '27 March',
        image: "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
        location: 'Dambulla'
    },
    {
        id: 2,
        name: 'Anuradhapura',
        startDate: '25 March',
        endDate: '27 March',
        image: "https://3.bp.blogspot.com/-mHkQBNKl85w/UnTsdstl3-I/AAAAAAAAAGY/IGrlXNPwDuQ/s1600/anuradhapura-1300.jpg",
        location: 'Anuradhapura'
    },
    {
        id: 3,
        name: 'Trincomalee',
        startDate: '25 March',
        endDate: '27 March',
        image: "https://i.pinimg.com/originals/e5/d5/96/e5d5961fc5c4099f5b0f8e90b4ea9c15.jpg",
        location: 'Trincomalee'
    },
    {
        id: 4,
        name: 'Polonnaruwa',
        startDate: '25 March',
        endDate: '27 March',
        image: "https://1.bp.blogspot.com/-qy0lO7dfudM/XmUtEmH7GxI/AAAAAAAAGjM/RES7neMeC1sU6yVAJ9KHIcpXwMW2SnBpwCLcBGAsYHQ/s1600/20180724_160024.jpg",
        location: 'Polonnaruwa'
    },
    {
        id: 5,
        name: 'Dambulla',
        startDate: '25 March',
        endDate: '27 March',
        image: "https://media.timeout.com/images/102950271/image.jpg",
        location: 'Dambulla'
    },]

export const PlacesAndActivitiesScreen = () => {
    const width = Dimensions.get('window').width;
    const ref = useRef()
    const [selected, setSelected] = useState(0)
    const navigation = useNavigation()
    return (
        <Background>
            <VStack flex={1} rowGap={"$4"}>
                <View flex={0.1}>
                    <Input borderRadius={"$2xl"} borderBottomColor="#BFBFBF">
                        <InputSlot pl="$3" borderColor="#BFBFBF">
                            <InputIcon as={SearchIcon} />
                        </InputSlot>
                        <InputField borderColor="#BFBFBF" placeholder="Search..." />
                    </Input>
                </View>
                <View flex={0.4}>
                    <Box flexDirection="row" justifyContent="space-between">
                        <TouchableOpacity onPress={() => setSelected(0)}>
                            <LinearGradient
                                p="$2"
                                pl={"$5"}
                                pr={"$5"}
                                colors={selected == 0  ? ["#5495FF", "#8BD8F9"] :[ "#ffffff", "#ffffff"]}
                                borderRadius="$2xl"
                                start={[0, 0]}
                                end={[1, 1]}
                                as={ExpoLinearGradient}
                            >
                                <Text  textAlign="center" size="md" fontWeight={600} color={selected == 0 ? "#ffffff" : "#5E6A81"}>
                                    Sights
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected(1)}>
                            <LinearGradient
                                p="$2"
                                pl={"$5"}
                                pr={"$5"}
                                colors={selected == 1  ? ["#5495FF", "#8BD8F9"] :[ "#ffffff", "#ffffff"]}
                                borderRadius="$2xl"
                                start={[0, 0]}
                                end={[1, 1]}
                                as={ExpoLinearGradient}
                            >
                                <Text  textAlign="center" size="md" fontWeight={600} color={selected == 1 ? "#ffffff" : "#5E6A81"}>
                                    Tour
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected(2)}>
                            <LinearGradient
                                p="$2"
                                pl={"$5"}
                                pr={"$5"}
                                colors={selected == 2  ? ["#5495FF", "#8BD8F9"] :[ "#ffffff", "#ffffff"]}
                                borderRadius="$2xl"
                                start={[0, 0]}
                                end={[1, 1]}
                                as={ExpoLinearGradient}
                            >
                                <Text textAlign="center" size="md" fontWeight={600} color={selected == 2 ? "#ffffff" : "#5E6A81"}>
                                    Adventure
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Box>
                    <Carousel
                        ref={ref}
                        loop
                        width={width * 0.9}
                        height={width}
                        autoPlay={false}
                        data={data}
                        mode="parallax"
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ index, item }) => (
                            <View style={{ flex: 1, marginRight: "12.5%" }}>
                                {/* <PlaceCard name={item.name} image={item.image} location={item.location} /> */}
                            </View>
                        )}
                    />
                </View>
                <View flex={0.45}>
                    <HStack>
                        <Heading fontSize={"$lg"} color="#5E6A81">
                            Popular
                        </Heading>
                    </HStack>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <PlaceListCard name={item.name} startDate={item.startDate} endDate={item.endDate} image={item.image} />
                        }
                        keyExtractor={(item) => item.id} />
                </View>
            </VStack>
        </Background>
    )
}