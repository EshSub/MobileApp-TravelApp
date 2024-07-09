import {
    Heading,
    View,
    Text,
    Button,
    ButtonText,
    LinearGradient,
    Image,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../components/background";

export const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <Background>
            <Heading color="#425884" size="2xl" fontWeight={300}>
                LET'S
            </Heading>
            <Heading color="#425884" size="5xl" fontWeight={600}>
                EXPLORE
            </Heading>
            <Heading color="#425884" size="2xl" fontWeight={300}>
                SRI LANKA
            </Heading>
            <Text color="#425884">
                Sunny Sri Lanka! Beaches, hills, and elephants await. Come explore this
                beautiful island!
            </Text>
            <TouchableOpacity>
                <LinearGradient
                    p="$3"
                    width="50%"
                    colors={["#5495FF", "#8BD8F9"]}
                    borderRadius="20px"
                    start={[0, 0]}
                    end={[1, 1]}
                    as={ExpoLinearGradient}
                >
                    <Text textAlign="center" size="2xl" fontWeight={600} color="#fff">
                        Explore
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <Image
                source={require("../assets/homePageImage.png")}
                height={350}
                width={350}
                alt="homePage"
                resizeMethod="center"
            />
            <Button onPress={() => navigation.navigate('Places&Activities')}>
                <ButtonText>Places and activities</ButtonText>
            </Button>
        </Background>
    );
};
