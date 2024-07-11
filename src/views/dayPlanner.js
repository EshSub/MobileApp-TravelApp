import { Badge, BadgeText, Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Heading, HStack, Input, InputField, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { Background } from "../components/background"
import { FormLabel } from "../components/common/inputFields"
import { TouchableOpacity } from "react-native"
import { Chip } from "../components/common/chip"

export const DayPlanner = () => {
    return (
        <Background>
            <Heading mb={"$3"} color="#425884" size="2xl" textAlign="center" fontWeight={300}>
                PLAN YOUR TRIP IN THE BEST WAY
            </Heading>
            <VStack rowGap={"$5"}>
                <Text>
                    Please select the date range
                </Text>
                <FormControl size="md">
                    <HStack columnGap={"$4"}>
                        <FormLabel>From Day</FormLabel>
                        <Input size="sm" width={"$20"} mb={"$4"}>
                            <InputField type="number" />
                        </Input>
                        <FormLabel>To day</FormLabel>
                        <Input size="sm" width={"$20"} mb={"$4"}>
                            <InputField type="number" />
                        </Input>
                    </HStack>
                    <Box>
                        <FormLabel>1. Cities you like to visit</FormLabel>
                        <Input size="sm" mb={"$4"}>
                            <InputField type="text" />
                        </Input>
                    </Box>
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
                        <FormLabel>3. What is your expected budget</FormLabel>
                        <HStack justifyContent="space-evenly" mb={"$4"}>
                            <Chip text={">=5000"} color={"info"} />
                            <Chip text={">=10000"} color={"success"} />
                            <Chip text={"no limit"} color={"error"} />
                        </HStack>
                        
                    </Box>
                    <Box mb={"$4"}>
                        <FormLabel>4. Give a description on how you want to spent these days</FormLabel>
                        <Input>
                            <InputField type="text" />
                        </Input>
                    </Box>
                    <Button>
                        <ButtonText>
                            Submit
                        </ButtonText>
                    </Button>
                </FormControl>
            </VStack>
        </Background>
    )
}