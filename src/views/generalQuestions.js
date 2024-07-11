import { Badge, BadgeText, Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Heading, HStack, Input, InputField, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { Background } from "../components/background"
import { FormLabel } from "../components/common/inputFields"
import { TouchableOpacity } from "react-native"
import { Chip } from "../components/common/chip"

export const GeneralQuestions = () => {
    return (
        <Background>
            <ScrollView>
                <Heading mb={"$3"} color="#425884" size="2xl" textAlign="center" fontWeight={300}>
                    PLAN YOUR TRIP IN THE BEST WAY
                </Heading>
                <VStack rowGap={"$5"}>
                    <Text>
                        Please enter the following details
                    </Text>
                    <FormControl size="md">
                        <HStack columnGap={"$4"}>
                            <FormLabel>1. Duration</FormLabel>
                            <Input size="sm" width={"$20"} mb={"$4"}>
                                <InputField type="number" inputMode="numeric"/>
                            </Input>
                            <FormLabel>Days</FormLabel>
                        </HStack>
                        <Box>
                            <FormLabel>2. Preferred Activities</FormLabel>
                            <HStack justifyContent="space-evenly" mb={"$2"}>
                                <Chip text={"Hiking"} color={"info"} />
                                <Chip text={"Snorkeling"} color={"success"} />
                                <Chip text={"Traveling"} color={"error"} />
                            </HStack>
                            <HStack justifyContent="space-evenly" mb={"$4"}>
                                <Chip text={"Safaris"} color={"warning"} />
                                <Chip text={"Relaxing"} color={"muted"} />
                                <Chip text={"Other"} color={"info"} />
                            </HStack>
                        </Box>
                        <Box>
                            <FormLabel>3. Food preference</FormLabel>
                            <HStack justifyContent="space-evenly" mb={"$4"}>
                                <Chip text={"Vege"} color={"info"} />
                                <Chip text={"Chicken"} color={"success"} />
                                <Chip text={"Fish"} color={"error"} />
                            </HStack>
                        </Box>
                        <Box>
                            <FormLabel>4. Budget</FormLabel>
                            <HStack justifyContent="space-evenly" mb={"$4"}>
                                <Chip text={">=5000"} color={"info"} />
                                <Chip text={">=10000"} color={"success"} />
                                <Chip text={"no limit"} color={"error"} />
                            </HStack>
                        </Box>
                        <Box>
                            <FormLabel>5. Activity hardness level</FormLabel>
                            <HStack justifyContent="space-evenly" mb={"$4"}>
                                <Chip text={"Easy"} color={"info"} />
                                <Chip text={"Medium"} color={"success"} />
                                <Chip text={"Hard"} color={"error"} />
                            </HStack>
                        </Box>
                        <Box mb={"$4"}>
                            <FormLabel>6. Description</FormLabel>
                            <Input>
                                <InputField type="text" placeholder="Description on your trip" />
                            </Input>
                        </Box>
                        <Button>
                            <ButtonText>
                                Submit
                            </ButtonText>
                        </Button>
                    </FormControl>
                </VStack>
            </ScrollView>
        </Background>
    )
}