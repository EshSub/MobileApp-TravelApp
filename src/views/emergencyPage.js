import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Linking, ScrollView } from "react-native";
import { Background } from "../components/background";
import { VStack, HStack, Box ,Icon, Divider} from "@gluestack-ui/themed";
import { Shield, Ambulance, Hospital, Info, AlertTriangle, AlertOctagon, Flame, AmbulanceIcon} from "lucide-react-native";
import { WIDTH } from "../helpers/constants";

const emergencyContacts = [
    {
        name: "Police Emergency Hotline	",
        number: "118 / 119",
        icon:Shield
    },
    {
        name: "Suwasariya Ambulance Service",
        number: "1990",
        icon:AmbulanceIcon
    },
    {
        name: "Ambulance / Fire & rescue",
        number: "110",
        icon:Flame
    },
    {
        name: "Accident Service-General Hospital-Colombo",
        number: "011-2691111",
        icon:Hospital
    },
    {
        name: "Tourist Police",
        number: "011-2421052",
        icon:Shield
    },
    {
        name: "Police Emergency	",
        number: "011-2433333",
        icon:Shield
    },
    {
        name: "Government Information Center",
        number: "1919",
        icon:Info
    },
    {
        name: "Report Crimes",
        number: "011-2691500",
        icon:AlertTriangle
    },
    {
        name: "Emergency Police Mobile Squad",
        number: "011-5717171",
        icon:Shield
    }
]
const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`)
};
export const EmergencyPage = () => {
    const lightBlue1 = "#e0f7fa"; 
    const lightBlue2 = "#e0f7fa"; 

    return (
        <Background>
            {/* <ScrollView > */}
            <VStack space="md" px="$4" py="$4" height={"100%"} width={"100%"}>
                {emergencyContacts.map((contact, index) => (
                    <Box key={index} width={"100%"} justifyContent="center" >
                        <HStack alignItems="center" width={"100%"} >
                            <Icon as={contact.icon ?? AlertTriangle} size="xl" color={"#CC5500"} marginRight={"$5"} />
                            <Box display="flex" flex={0.5} alignItems='left' >
                                <Text style={{ flexWrap: "wrap", fontSize: 16, fontWeight: 'bold', textAlign:'left', textAlignVertical:'center' }}>{contact.name}</Text>
                            </Box>
                            <Box display="flex" flex={0.5} alignItems="left" marginLeft={"$4"}>
                                <TouchableOpacity onPress={() => makeCall(contact.number)}>
                                    <Text  style={{ color: "#00008B", flexWrap: "wrap", fontSize: 16}}>{contact.number}</Text>
                                </TouchableOpacity>
                            </Box>
                        </HStack>
                        {index < emergencyContacts.length - 1 && <Divider my="$2" />}
                    </Box>
                ))}
            </VStack>
            {/* </ScrollView> */}
        </Background>

    );
};

