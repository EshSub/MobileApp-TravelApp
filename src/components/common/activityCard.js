import { Box, Heading, HStack, Image, Text } from "@gluestack-ui/themed"
import { TouchableOpacity } from "react-native"
import { WIDTH } from "../../helpers/constants"
import { useNavigation } from "@react-navigation/native"

export const activityList = [
    {
        id: 1,
        name: "Surfing",
        imageUrl: "https://www.experiencetravelgroup.com/blog/wp-content/uploads/2022/04/shutterstock_720980179-scaled.jpg"
    },
    {
        id: 2,
        name: "Trekking",
        imageUrl: "https://www.srilankanexpeditions.com/images/activities-in-sri-lanka/trekking-and-hiking-in-sri-lanka/trekking-and-hiking-in-sri-lanka2.jpg"
    },
    {
        id: 3,
        name: "Snorkelling",
        imageUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/Snorkeling-In-Sri-Lanka-Cover.jpg"
    },
    {
        id: 4,
        name: "Kayaking",
        imageUrl: "https://tse2.mm.bing.net/th?id=OIP.Hxm4Wr6uccQwifp7HH7uYQHaE8&pid=Api&P=0&h=220"
    }
]
export const ActivityCard = ({ name, imageUrl, id }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Activity", {id : id})}>
            <HStack 
                width={WIDTH * 0.4}
                height={80} 
                bgColor={"white"} 
                borderRadius={"$10"} 
                m={"$3"} 
                justifyContent="center" 
                alignItems="center"
            >
                <Box>
                    <Image 
                        alt="activity"
                        source={{uri: imageUrl}}
                        width={WIDTH*0.4}
                        height={80}
                        borderRadius={"$10"}
                        opacity={"0.7"}
                        
                        />
                    <Heading m="$2" color="$white" position="absolute" top={"50%"} textAlign="center">{name}</Heading>
                </Box>
            </HStack>
        </TouchableOpacity>
    )
}
